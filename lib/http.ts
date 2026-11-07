/** A 303 so the browser follows a form POST with a GET. */
export function redirect(
  request: Request,
  path: string,
  params: Record<string, string> = {},
  cookie?: string,
): Response {
  const url = new URL(path, request.url);
  for (const [key, value] of Object.entries(params)) {
    if (value) url.searchParams.set(key, value);
  }
  const headers = new Headers({ Location: url.toString(), "Cache-Control": "no-store" });
  if (cookie) headers.append("Set-Cookie", cookie);
  return new Response(null, { status: 303, headers });
}
