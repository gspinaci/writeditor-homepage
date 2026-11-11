"use client";

import { useId, useState, type FormEvent } from "react";

type State = { ok: boolean; message: string } | null;

// Publishable key: insert-only by row-level security, safe to ship in the page.
const URL = "https://yzlgumajetbzxhewbfoe.supabase.co/rest/v1/waitlist";
const KEY = "sb_publishable_VLt4IGaM0wWDah9tWvplTA_jY3XCJ1M";
const DONE = "You're on the list. We'll email your invite.";

/** Email + Subscribe, posting straight from the browser to the Supabase waitlist table. */
export default function WaitlistForm() {
  const [state, setState] = useState<State>(null);
  const [pending, setPending] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return setState({ ok: true, message: DONE }); // honeypot: bots fill hidden fields
    setPending(true);
    try {
      const r = await fetch(URL, {
        method: "POST",
        headers: { apikey: KEY, "Content-Type": "application/json", Prefer: "return=minimal" },
        body: JSON.stringify({ email: String(f.get("email")).trim() }),
      });
      setState(r.ok || r.status === 409 ? { ok: true, message: DONE } : { ok: false, message: "Something went wrong. Please try again." }); // 409: already subscribed
    } catch {
      setState({ ok: false, message: "We couldn't reach the server. Please try again in a minute." });
    }
    setPending(false);
  }
  const id = useId();
  if (state?.ok) {
    return <p role="status" className="rounded-full bg-white/15 px-5 py-3 font-medium text-white ring-1 ring-white/30">✓ {state.message}</p>;
  }
  return (
    <form onSubmit={submit} className="w-full max-w-md">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={id} className="sr-only">Email address</label>
        <input id={id} name="email" type="email" required autoComplete="email" placeholder="Enter your email here"
          aria-invalid={state?.ok === false || undefined} aria-describedby={`${id}-msg`}
          className="h-11 w-full min-w-0 rounded-full sm:flex-1 border-0 bg-white px-5 text-sm text-neutral-900 shadow-sm outline-none placeholder:text-neutral-400 focus-visible:ring-4 focus-visible:ring-brand-yellow" />
        {/* honeypot */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button disabled={pending}
          className="h-11 shrink-0 rounded-full bg-brand-yellow px-6 text-xs font-bold uppercase tracking-wider text-neutral-900 shadow-sm transition hover:brightness-105 disabled:opacity-60">
          {pending ? "Sending…" : "Subscribe"}
        </button>
      </div>
      <p id={`${id}-msg`} role="status" className="mt-2 min-h-5 text-sm text-white/85">
        {state?.ok === false ? state.message : ""}
      </p>
    </form>
  );
}
