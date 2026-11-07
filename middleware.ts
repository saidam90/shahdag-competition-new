import { next, rewrite } from "@vercel/functions";
import { SESSION_COOKIE, readCookie, verifySessionToken } from "./lib/session.js";

// Runs on Vercel before every request. Signed-out visitors see the
// maintenance page (with a sign-in form for invited guests) in place of any
// page of the site, and can't load its JS bundle. Who may sign in is the
// Google Sheet described in lib/sheets.ts.
// To open the site to the public, delete this file and redeploy.

/** Reachable signed out, served from public/auth/. */
const SIGNED_OUT_PAGES: Record<string, string> = {
  "/login": "/auth/login.html",
  "/set-password": "/auth/set-password.html",
};

export const config = {
  // Not gated: the sign-in endpoints in api/ (every function there is
  // public, so a new one must check the session itself), the sign-in
  // pages' own files, and what crawlers and link previews fetch.
  matcher: "/((?!api/|auth/|favicon.ico|robots.txt|og-image.webp).*)",
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const session = await verifySessionToken(readCookie(request, SESSION_COOKIE));

  const page = SIGNED_OUT_PAGES[url.pathname];
  if (page) {
    if (session) return Response.redirect(new URL("/", url), 302);
    return rewrite(new URL(page, url), {
      headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
    });
  }

  if (session) return next();

  // Signed out: show the maintenance page (with its sign-in form) at the
  // address they asked for, so the public just sees "Under Maintenance".
  return rewrite(new URL(SIGNED_OUT_PAGES["/login"], url), {
    headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
  });
}
