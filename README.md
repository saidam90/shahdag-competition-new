# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/1502b54c-68e9-47fc-a320-10efa9b8358a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/1502b54c-68e9-47fc-a320-10efa9b8358a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/1502b54c-68e9-47fc-a320-10efa9b8358a) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Sign-in (invited guests only)

`middleware.ts` keeps the whole site behind a sign-in. The access list is a
Google Sheet; nobody can sign in unless their email is on it. To open the
site to the public, delete `middleware.ts` and redeploy.

**The sheet.** A tab named `Users` (or set `GOOGLE_SHEET_TAB`). Row 1 is
headers, then one person per row:

| A: Email          | B: Password Hash | C onwards (ignored) |
| ----------------- | ---------------- | ------------------- |
| anna@example.com  | *(leave empty)*  | Anna, ISMF          |

- **Anyone @shahdag.az, @tourismboard.az or @pgi.ad** can go to `/set-password` and
  register without being listed; the site adds their row. Nothing checks they
  own the mailbox. The domains are `ALLOWED_DOMAINS` in `lib/sheets.ts`.
- **Invite someone else:** add their email in column A, leave B empty. They go
  to `/set-password`, pick a password, and are signed in.
- **Reset a forgotten password:** clear their cell in column B; they set a new
  one at `/set-password`. That page only works for an email with no password
  yet, so nobody can take over someone else's account.
- **Remove someone:** delete their row (someone at an allowed domain can
  register again, so for them change the domains instead). A sign-in they already have lasts
  until it expires (30 days); change `SESSION_SECRET` to sign everyone out now.
- **Sign out:** visit `/api/logout`.

**One-time setup**

1. In [Google Cloud Console](https://console.cloud.google.com/): create a
   project, enable the **Google Sheets API**, create a **service account**,
   and add a **JSON key** for it.
2. Share the sheet with the service account's email (`…@….iam.gserviceaccount.com`)
   as **Editor**.
3. In Vercel → Settings → Environment Variables, add:
   - `GOOGLE_SHEET_ID`: the long ID in the sheet's URL, between `/d/` and `/edit`
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: `client_email` from the JSON key
   - `GOOGLE_PRIVATE_KEY`: `private_key` from the JSON key, pasted as is
   - `SESSION_SECRET`: a random string of 32+ characters (`openssl rand -base64 48`)
4. Redeploy.

`npm run dev` serves the site without the sign-in; use `vercel dev` (with the
variables in `.env.local`) to run it with the middleware and `api/` functions.
