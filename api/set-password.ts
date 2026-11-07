import { redirect } from "../lib/http.js";
import { MIN_PASSWORD_LENGTH, hashPassword } from "../lib/password.js";
import {
  createSessionToken,
  isEmail,
  normalizeEmail,
  sessionCookie,
} from "../lib/session.js";
import {
  appendSheetUser,
  findSheetUser,
  isAllowedDomain,
  isSheetConfigured,
  setSheetPassword,
  type SheetUser,
} from "../lib/sheets.js";

/** The /set-password form posts here. Errors go back as `?error=<code>`. */
export async function POST(request: Request): Promise<Response> {
  const form = await request.formData();
  const email = normalizeEmail(form.get("email"));
  const password = String(form.get("password") ?? "");
  const confirm = String(form.get("confirm") ?? "");
  const back = (error: string) => redirect(request, "/set-password", { error, email });

  if (!isEmail(email)) return back("missing");
  if (password.length < MIN_PASSWORD_LENGTH) return back("short");
  if (password !== confirm) return back("mismatch");
  if (!isSheetConfigured()) return back("config");

  let user: SheetUser | null;
  try {
    user = await findSheetUser(email);
  } catch (err) {
    console.error("Set-password lookup failed", err);
    return back("unavailable");
  }

  if (!user && !isAllowedDomain(email)) return back("not-listed");

  // First claim only. If an existing password could be replaced here,
  // anyone who knew a listed address could take over that account;
  // a reset goes through the admin clearing the cell instead.
  if (user?.passwordHash) return back("already-set");

  try {
    const hash = await hashPassword(password);
    // Not listed but at an allowed domain: they get a new row.
    if (user) await setSheetPassword(user, hash);
    else await appendSheetUser(email, hash);
  } catch (err) {
    console.error("Saving password failed", err);
    return back("unavailable");
  }

  const token = await createSessionToken(email);
  if (!token) {
    console.error("SESSION_SECRET is missing or shorter than 32 characters");
    return back("config");
  }
  return redirect(request, "/", {}, sessionCookie(token));
}
