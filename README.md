# Writ homepage

Landing page for Writ (usewrit.dev). Next.js + Tailwind.

    pnpm install && pnpm dev

Static site (`pnpm build` writes `./out`, deployed to GitHub Pages by `.github/workflows/pages.yml` on push to `main`). Waitlist signups post from the browser to Supabase (`components/WaitlistForm.tsx`).
