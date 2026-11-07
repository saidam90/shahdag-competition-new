import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";

/** Stored in the sheet as `scrypt$<salt>$<hash>` (base64url). */
const KEY_LENGTH = 64;
const PARAMS = { N: 16384, r: 8, p: 1 };

export const MIN_PASSWORD_LENGTH = 10;

function derive(password: string, salt: Buffer): Promise<Buffer> {
  return new Promise((resolve, reject) =>
    scrypt(password, salt, KEY_LENGTH, PARAMS, (err, key) =>
      err ? reject(err) : resolve(key),
    ),
  );
}

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const hash = await derive(password, salt);
  return `scrypt$${salt.toString("base64url")}$${hash.toString("base64url")}`;
}

/** Stands in for a missing user so both paths cost one scrypt. */
const DUMMY_SALT = randomBytes(16);

/**
 * `stored` is null when the email isn't on the sheet. The hash still
 * runs, so response time doesn't reveal which addresses are listed.
 */
export async function verifyPassword(
  password: string,
  stored: string | null,
): Promise<boolean> {
  const [scheme, salt, hash] = stored?.split("$") ?? [];
  if (scheme !== "scrypt" || !salt || !hash) {
    await derive(password, DUMMY_SALT);
    return false;
  }

  const expected = Buffer.from(hash, "base64url");
  const actual = await derive(password, Buffer.from(salt, "base64url"));
  return expected.length === actual.length && timingSafeEqual(expected, actual);
}
