"use client";

import { useActionState, useId } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions";

/** Email + Subscribe, posting to the closed-alpha waitlist. Works without JavaScript too. */
export default function WaitlistForm({ source }: { source: string }) {
  const [state, action, pending] = useActionState<WaitlistState, FormData>(joinWaitlist, null);
  const id = useId();
  if (state?.ok) {
    return <p role="status" className="rounded-full bg-white/15 px-5 py-3 font-medium text-white ring-1 ring-white/30">✓ {state.message}</p>;
  }
  return (
    <form action={action} className="w-full max-w-md">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={id} className="sr-only">Email address</label>
        <input id={id} name="email" type="email" required autoComplete="email" placeholder="Enter your email here"
          aria-invalid={state?.ok === false || undefined} aria-describedby={`${id}-msg`}
          className="h-11 w-full min-w-0 rounded-full sm:flex-1 border-0 bg-white px-5 text-sm text-neutral-900 shadow-sm outline-none placeholder:text-neutral-400 focus-visible:ring-4 focus-visible:ring-brand-yellow" />
        <input type="hidden" name="source" value={source} />
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
