# Writ homepage

Landing page for Writ (usewrit.dev). Next.js + Tailwind.

    pnpm install && pnpm dev

Static site (`pnpm build` writes `./out`, deployed to GitHub Pages by `.github/workflows/pages.yml` on push to `main`). Waitlist signups post from the browser to Supabase (`components/WaitlistForm.tsx`).

## Waitlist abuse

The page only inserts a row into `waitlist`; it never sends email. Browser checks (honeypot, 30 s throttle, `maxLength`) stop casual bots only, so enforce limits in Supabase.

Run `supabase/waitlist.sql` in the Supabase SQL editor. It creates the table with an email format and length check, a unique index on lowercase email, and row-level security that allows insert only.

Do not send a confirmation email on insert (that is the email-bombing vector: anyone can type a victim's address). If you need one, use double opt-in with a per-address and per-IP rate limit.

## SEO and analytics

`SITE_URL` and `BASE_PATH` (set in `.github/workflows/pages.yml`) drive the canonical URL, sitemap and robots. For a custom domain, set `SITE_URL` to it and drop `BASE_PATH`. Analytics is Plausible, loaded only when `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set at build time.
