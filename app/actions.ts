"use server";

export type WaitlistState = { ok: boolean; message: string } | null;

// Publishable key: insert-only by row-level security, safe to ship. Env vars override.
const SUPABASE_URL = process.env.SUPABASE_URL ?? "https://yzlgumajetbzxhewbfoe.supabase.co";
const SUPABASE_KEY = process.env.SUPABASE_KEY ?? "sb_publishable_VLt4IGaM0wWDah9tWvplTA_jY3XCJ1M";

export async function joinWaitlist(_prev: WaitlistState, form: FormData): Promise<WaitlistState> {
  if (form.get("website")) return { ok: true, message: "You're on the list." }; // honeypot: bots fill hidden fields
  const email = String(form.get("email") ?? "").trim();
  if (!email) return { ok: false, message: "Please enter your email." };
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: "POST",
      headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({ email }),
      cache: "no-store",
    });
    if (res.ok || res.status === 409) return { ok: true, message: "You're on the list. We'll email your invite." }; // 409: already subscribed
    return { ok: false, message: "Something went wrong. Please try again." };
  } catch {
    return { ok: false, message: "We couldn't reach the server. Please try again in a minute." };
  }
}
