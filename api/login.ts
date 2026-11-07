import { redirect } from "../lib/http.js";
import { verifyPassword } from "../lib/password.js";
import {
  createSessionToken,
  isEmail,
  normalizeEmail,
  safeNextPath,
  sessionCookie,
} from "../lib/session.js";
import { findSheetUser, isSheetConfigured, type SheetUser } from "../lib/sheets.js";

/** The /login form posts here. Errors go back as `?error=<code>`. */
export async function POST(request: Request): Promise<Response> {
  const form = await request.formData();
  const email = normalizeEmail(form.get("email"));
  const password = String(form.get("password") ?? "");
  const next = safeNextPath(form.get("next"));
  const back = (error: string) => redirect(request, "/login", { error, email, next });

  if (!isEmail(email) || !password) return back("missing");
  if (!isSheetConfigured()) return back("config");

  let user: SheetUser | null;
  try {
    user = await findSheetUser(email);
  } catch (err) {
    console.error("Sign-in lookup failed", err);
    return back("unavailable");
  }

  const valid = await verifyPassword(password, user?.passwordHash ?? null);
  if (!user || !valid) {
    // On the list but no password yet: point them at the right page.
    if (user && !user.passwordHash) return back("no-password");
    // Otherwise one message for "not listed" and "wrong password".
    return back("invalid");
  }

  const token = await createSessionToken(user.email);
  if (!token) {
    console.error("SESSION_SECRET is missing or shorter than 32 characters");
    return back("config");
  }
  return redirect(request, next, {}, sessionCookie(token));
}
