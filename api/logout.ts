import { redirect } from "../lib/http.js";
import { clearedSessionCookie } from "../lib/session.js";

/** Visit /api/logout to sign out. */
export function GET(request: Request): Response {
  return redirect(request, "/login", {}, clearedSessionCookie());
}
