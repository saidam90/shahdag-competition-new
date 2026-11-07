import { createSign } from "node:crypto";

/**
 * The access list is a Google Sheet. On the tab named GOOGLE_SHEET_TAB
 * (default "Users"), row 1 is headers and every row below is one person:
 *
 *   A: Email   B: Password Hash   (C onwards: anything, e.g. Name — ignored)
 *
 * Column B starts empty; /set-password fills it in. Clearing it lets the
 * person choose a new password; deleting the row removes their access
 * (unless their email domain is in ALLOWED_DOMAINS, in which case they can
 * simply register again).
 *
 * Anyone at an ALLOWED_DOMAINS address can register without being listed;
 * /set-password adds their row. Nothing checks that they own the mailbox.
 *
 * Read through a Google Cloud service account, which the sheet must be
 * shared with as an Editor.
 */

const TAB = process.env.GOOGLE_SHEET_TAB || "Users";

/** Whole email domains allowed in, on top of the addresses in the sheet. */
export const ALLOWED_DOMAINS = ["shahdag.az", "tourismboard.az", "pgi.ad"];

export function isAllowedDomain(email: string): boolean {
  return ALLOWED_DOMAINS.some((domain) => email.endsWith(`@${domain}`));
}

export interface SheetUser {
  email: string;
  /** 1-based sheet row, for writing the hash back. */
  row: number;
  /** Null until they choose one on /set-password. */
  passwordHash: string | null;
}

export const isSheetConfigured = () =>
  Boolean(
    process.env.GOOGLE_SHEET_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY,
  );

let cachedToken: { value: string; expiresAt: number } | null = null;

/** OAuth token for the service account (JWT bearer grant, RS256). */
async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.value;
  }

  const now = Math.floor(Date.now() / 1000);
  const encode = (value: object) =>
    Buffer.from(JSON.stringify(value)).toString("base64url");
  const unsigned = `${encode({ alg: "RS256", typ: "JWT" })}.${encode({
    iss: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })}`;
  // Pasted into Vercel, the key's newlines often arrive as literal "\n".
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n");
  const signature = createSign("RSA-SHA256")
    .update(unsigned)
    .sign(privateKey, "base64url");

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${signature}`,
    }),
  });
  if (!res.ok) {
    throw new Error(`Google token request failed: ${res.status} ${await res.text()}`);
  }
  const data = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };
  return data.access_token;
}

async function sheetsRequest(range: string, init?: RequestInit, query = "") {
  const url =
    `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEET_ID}` +
    `/values/${encodeURIComponent(`'${TAB.replace(/'/g, "''")}'!${range}`)}${query}`;
  const res = await fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${await getAccessToken()}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Google Sheets ${range} failed: ${res.status} ${await res.text()}`);
  }
  return (await res.json()) as { values?: unknown[][] };
}

function cell(value: unknown): string {
  return typeof value === "string" ? value.trim() : value == null ? "" : String(value);
}

/**
 * The sheet row for an email, or null. Uncached on purpose: deleting a
 * row or clearing a hash must apply to the very next sign-in.
 */
export async function findSheetUser(email: string): Promise<SheetUser | null> {
  const { values = [] } = await sheetsRequest("A2:B");
  const index = values.findIndex((r) => cell(r[0]).toLowerCase() === email);
  if (index === -1) return null;
  const hash = cell(values[index][1]);
  return { email, row: index + 2, passwordHash: hash || null };
}

/**
 * Adds a row for someone who isn't listed but whose email domain is
 * allowed (see ALLOWED_DOMAINS), so their password has somewhere to live.
 */
export async function appendSheetUser(email: string, passwordHash: string) {
  await sheetsRequest(
    "A:D",
    {
      method: "POST",
      body: JSON.stringify({
        values: [[email, passwordHash, "", "Registered via email domain"]],
      }),
    },
    ":append?valueInputOption=RAW&insertDataOption=INSERT_ROWS",
  );
}

/**
 * Writes a hash onto the user's row, but only if that row still holds
 * their email and no hash. Someone sorting the sheet between the lookup
 * and this write must not land a password on another person's row.
 */
export async function setSheetPassword(user: SheetUser, passwordHash: string) {
  const range = `A${user.row}:B${user.row}`;
  const { values = [] } = await sheetsRequest(range);
  const [email, hash] = values[0] ?? [];
  if (cell(email).toLowerCase() !== user.email || cell(hash)) {
    throw new Error("Sheet row changed while setting password");
  }
  await sheetsRequest(
    `B${user.row}`,
    { method: "PUT", body: JSON.stringify({ values: [[passwordHash]] }) },
    "?valueInputOption=RAW",
  );
}
