import type { ReactNode } from "react";
import WaitlistForm from "@/components/WaitlistForm";

// ---------- line icons (stroke = currentColor) ----------
const Icon = ({ children, className = "size-10" }: { children: ReactNode; className?: string }) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{children}</svg>
);
const icons = {
  code: <Icon><path d="M17 15 8 24l9 9M31 15l9 9-9 9M27 11l-6 26" /></Icon>,
  agent: <Icon><rect x="10" y="16" width="28" height="22" rx="6" /><path d="M24 16V9M20 9h8M18 26v2M30 26v2M19 33h10M6 25v6M42 25v6" /></Icon>,
  history: <Icon><path d="M9 24a15 15 0 1 0 4.4-10.6L9 18" /><path d="M9 9v9h9M24 16v9l6 4" /></Icon>,
  doc: <Icon><path d="M13 6h15l9 9v27H13z" /><path d="M28 6v9h9M19 23h12M19 29h12M19 35h7" /></Icon>,
  people: <Icon><circle cx="17" cy="17" r="6" /><circle cx="33" cy="19" r="5" /><path d="M6 39c1.5-7 6-10 11-10s9.5 3 11 10M29 30c5 0 9 3 11 9" /></Icon>,
  plug: <Icon><path d="M18 6v10M30 6v10M13 16h22v8a11 11 0 0 1-22 0zM24 35v7" /></Icon>,
  export: <Icon><path d="M24 30V8M15 17l9-9 9 9M9 28v12h30V28" /></Icon>,
};

const features = [
  { icon: icons.code, title: "Papers machines can read", body: "Writ writes RASH, a scholarly subset of HTML. Every section, figure, formula and citation is tagged as you type, so your paper is searchable, linkable and ready for linked data, not locked inside a PDF." },
  { icon: icons.agent, title: "Your agent, your keys", body: "Plug in your own API key, or connect Claude Code or any MCP agent to a live session. Agents edit the same paper you see, in real time. Skills from the marketplace plug in the same way." },
  { icon: icons.history, title: "Every change has an author", body: "Co-authors and agents write together. Each change is recorded with who made it, person or model, so you always know who wrote what." },
];

const alphaCards = [
  { icon: icons.doc, title: "Write", body: "A WYSIWYG editor for scientific articles: sections, figures, formulas, cross-references and bibliography. As calm as Notion, no LaTeX to learn." },
  { icon: icons.people, title: "Collaborate", body: "Write with co-authors in real time, like Overleaf, with live cursors and an HTML view that stays in sync both ways." },
  { icon: icons.plug, title: "Connect agents", body: "Bring your own API key, or connect Claude Code over MCP. Your agent becomes a named co-author. Skills marketplace coming soon." },
  { icon: icons.export, title: "Export", body: "HTML with CSS for the web, PDF for reviewers, LaTeX for submissions. Venue templates (ACM, LNCS, IEEE) coming soon." },
];

const dots = { backgroundImage: "radial-gradient(rgb(255 255 255 / .45) 1.6px, transparent 1.7px)", backgroundSize: "16px 16px" } as const;

export default function Home() {
  return (
    <div className="theme-light min-h-dvh bg-bg font-sans text-ink">
      {/* ---------- HERO ---------- */}
      <section className="relative isolate overflow-hidden bg-linear-to-tr from-brand-purple from-25% via-brand-violet via-55% to-brand-teal text-white">
        <div aria-hidden className="absolute -right-10 -top-10 -z-10 h-80 w-96 [mask-image:radial-gradient(closest-side,black,transparent)]" style={dots} />
        <div aria-hidden className="absolute -left-16 top-1/2 -z-10 h-72 w-64 [mask-image:radial-gradient(closest-side,black,transparent)]" style={dots} />
        <div aria-hidden className="absolute bottom-24 left-[38%] -z-10 h-48 w-48 rounded-full bg-brand-teal/30 blur-3xl" />

        <header className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-6 sm:px-6">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
            <svg viewBox="0 0 40 28" className="h-6 w-9" aria-hidden="true">
              <path d="M2 3l8 22 6-15 6 15 8-22" fill="none" stroke="#5ff2d6" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M22 25l8-22h8" fill="none" stroke="white" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" opacity=".85" />
            </svg>
            Writ
          </a>
          <nav aria-label="Main" className="ml-auto hidden items-center gap-7 font-display text-xs font-semibold uppercase tracking-wider md:flex">
            <a href="#" className="text-brand-yellow">Home</a>
            <a href="#features" className="hover:text-brand-yellow">Features</a>
            <a href="#how" className="hover:text-brand-yellow">How it works</a>
            <a href="#alpha-features" className="hover:text-brand-yellow">Alpha</a>
          </nav>
          <a href="#alpha" className="ml-auto rounded-full border-2 border-white/80 px-5 py-2 font-display text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-brand-purple md:ml-0">
            Join the alpha
          </a>
        </header>

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-40 pt-8 sm:px-6 lg:grid-cols-[1fr_1.45fr] lg:pb-64 lg:pt-14">
          <div className="lg:col-span-2">
            <p className="mb-4 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-medium ring-1 ring-white/25">Closed alpha · invite only</p>
            <h1 className="whitespace-nowrap font-display text-[clamp(1.05rem,4.4vw,3.25rem)] font-bold leading-[1.15] tracking-tight">
              Write scientific papers in HTML.
              <span className="mt-3 block w-fit rounded-sm bg-[#b4d5fe] px-1.5 text-xl font-medium tracking-normal text-neutral-900 sm:text-2xl">LaTeX compatible.<span aria-hidden className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-0.5 animate-pulse bg-brand-purple" /></span>
            </h1>
            <div className="mt-8"><WaitlistForm source="hero" /></div>
          </div>

          {/* product shot, drawn in markup so it stays sharp */}
          <div className="mx-auto w-full max-w-2xl lg:col-span-2 lg:translate-y-8">
          <div className="relative" aria-label="Editor preview" role="img">
            <div className="overflow-hidden rounded-2xl bg-white/90 p-2 shadow-[0_40px_80px_-30px_rgb(40_20_90/.45)] ring-1 ring-white/70 backdrop-blur">
              <div className="flex items-center gap-1.5 px-2 pb-2 pt-1">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" /><span className="size-2.5 rounded-full bg-[#febc2e]" /><span className="size-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-neutral-500">● Live · G. Spinaci, Silvio Peroni</span>
              </div>
              <div className="grid grid-cols-[1fr_38%] overflow-hidden rounded-lg bg-white text-neutral-900 ring-1 ring-neutral-200">
                <div className="p-5 sm:p-9">
                  <p className="font-serif text-2xl font-semibold leading-snug">HTML Is All You Need</p>
                  <p className="mt-1 text-sm text-neutral-500">G. Spinaci, S. Peroni</p>
                  <p className="mt-6 text-sm font-semibold">1 Introduction</p>
                  <p className="mt-2 font-serif text-base leading-relaxed">
                    LaTeX produces beautiful PDFs, but the PDF is where structure goes to die.{" "}
                    <span className="rounded bg-[#fff1c2] px-0.5">Search engines and AI agents need that structure back [1].</span>
                  </p>
                  <div className="mt-6 grid h-24 place-items-center rounded bg-neutral-100 text-xs text-neutral-400">Figure 1</div>
                </div>
                <pre className="overflow-hidden border-l border-neutral-200 bg-neutral-50 p-4 font-mono text-[11px] leading-relaxed text-neutral-500">{`<section id="intro">
  <h1>Introduction</h1>
  <p>LaTeX produces
  … structure back
  <a href="#b1">[1]</a>
  </p>
  <figure id="f1">
    …
  </figure>
</section>`}</pre>
              </div>
            </div>
          </div>
          </div>
        </div>

        <svg aria-hidden="true" viewBox="0 0 1440 260" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-32 w-full sm:h-48" style={{ fill: "var(--bg)" }}>
          <path d="M0 260V150c180 70 380 90 600 40S980 40 1180 30c110-6 190 10 260 30v200z" />
        </svg>
      </section>

      <main>
        {/* ---------- FEATURES ---------- */}
        <section id="features" className="mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pt-32">
          <h2 className="mx-auto max-w-xl text-center font-display text-2xl font-semibold leading-snug sm:text-3xl">
            WYSIWYG for scientific papers.<br />LaTeX only when the journal asks.
          </h2>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {features.map((f) => (
              <article key={f.title}>
                <div className="flex items-center gap-3">
                  <span className="text-brand-violet">{f.icon}</span>
                  <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
                <a href="#how" className="mt-4 inline-block font-display text-xs font-bold uppercase tracking-wider hover:text-brand-violet">More</a>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- HOW IT WORKS ---------- */}
        <section id="how" className="bg-surface">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight">How does Writ work?</h2>
              <p className="mt-2 font-display text-sm font-semibold text-brand-violet">Your agent joins the paper like a co-author.</p>
              <ol className="mt-6 space-y-4 text-muted">
                {[
                  ["Write", "Draft in a calm, WYSIWYG editor. The HTML source updates live beside it, and you can edit either side."],
                  ["Invite", "Share the paper with co-authors, and connect Claude Code or any MCP agent with one command."],
                  ["Review", "Every change is highlighted and logged with its author, so you can see exactly what the agent did."],
                  ["Export", "Publish HTML with CSS on the web, send LaTeX to the journal, and share a PDF with reviewers."],
                ].map(([t, b], i) => (
                  <li key={t} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-violet/10 font-display text-sm font-bold text-brand-violet">{i + 1}</span>
                    <p><strong className="text-ink">{t}.</strong> {b}</p>
                  </li>
                ))}
              </ol>
            </div>
            <pre className="overflow-x-auto rounded-2xl border border-[#e4ddfb] bg-[#f6f3ff] p-6 font-mono text-[13px] leading-relaxed text-[#3d3270] shadow-[0_30px_60px_-30px_rgb(60_30_140/.35)]">{`$ claude mcp add --transport http writ \\
    https://usewrit.dev/mcp/my-paper

> Tighten the related-work section and
  cite the two 2025 RASH papers.

● writ · get_outline
● writ · replace_section "related-work"
  ✓ Replaced section "related-work".`}</pre>
          </div>
        </section>

        {/* ---------- WHAT'S IN THE ALPHA ---------- */}
        <section id="alpha-features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="text-center font-display text-2xl font-semibold leading-snug sm:text-3xl">
            What&apos;s in the alpha?<br />Subscribe to get access.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {alphaCards.map((c, i) => {
              const hot = i === 1;
              return (
                <article key={c.title} className={`flex flex-col rounded-lg border text-center shadow-sm ${hot ? "border-brand-purple bg-brand-purple text-white" : "border-line bg-surface"}`}>
                  <div className="flex flex-1 flex-col items-center px-6 pb-6 pt-9">
                    <span className={hot ? "text-white" : "text-brand-violet"}>{c.icon}</span>
                    <h3 className="mt-5 font-display text-sm font-bold uppercase tracking-wider">{c.title}</h3>
                    <p className={`mt-3 text-sm leading-relaxed ${hot ? "text-white/85" : "text-muted"}`}>{c.body}</p>
                  </div>
                  <div className={`border-t px-6 py-6 ${hot ? "border-white/15" : "border-line"}`}>
                    <a href="#alpha" className={`inline-block rounded-full px-6 py-2 font-display text-[11px] font-bold uppercase tracking-wider ${hot ? "bg-white text-brand-purple hover:bg-white/90" : "border-2 border-brand-violet/40 text-brand-violet hover:border-brand-violet"}`}>
                      Get early access
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ---------- CTA BAND ---------- */}
        <section id="alpha" className="relative isolate overflow-hidden bg-brand-purple text-white">
          <div aria-hidden className="absolute -right-8 top-6 -z-10 h-56 w-72 [mask-image:radial-gradient(closest-side,black,transparent)]" style={dots} />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Join the closed alpha now!</h2>
              <p className="mt-4 max-w-lg text-white/85">
                We are onboarding labs and research groups in small batches. Leave your email and we&apos;ll send an invite link when your spot opens.
              </p>
              <div className="mt-8"><WaitlistForm source="band" /></div>
            </div>
            <div aria-hidden className="mx-auto w-56 rotate-3 rounded-[2rem] bg-white/85 p-2.5 shadow-[0_30px_60px_-25px_rgb(30_10_80/.5)] ring-1 ring-white/60">
              <div className="rounded-[1.5rem] bg-white p-4 text-neutral-900 ring-1 ring-neutral-200">
                <p className="text-center font-mono text-[10px] text-neutral-400">paper.tex</p>
                <pre className="mt-3 whitespace-pre-wrap font-mono text-[9px] leading-relaxed text-neutral-600">{`\\begin{abstract}
We argue that …
\\end{abstract}

\\section{Introduction}
LaTeX produces …
\\cite{b1}.`}</pre>
                <div className="mt-4 rounded-full bg-brand-purple py-1.5 text-center text-[9px] font-bold uppercase tracking-wider text-white">Exported</div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- WHY HTML ---------- */}
        <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 md:grid-cols-[1fr_1.3fr]">
          <div aria-hidden className="relative mx-auto size-64">
            <div className="grid size-64 place-items-center rounded-full bg-linear-to-br from-brand-purple via-brand-violet to-brand-teal font-mono text-4xl font-bold text-white shadow-xl">&lt;/&gt;</div>
            <span className="absolute -right-6 top-2 size-14 rounded-full bg-brand-violet/30" />
            <span className="absolute -right-10 top-20 size-6 rounded-full bg-brand-violet/30" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight">Structure in, structure out.<br />Search everything.</h2>
            <p className="mt-5 leading-relaxed text-muted">
              LaTeX is a typesetting language. Its structure gets lost in the PDF, and machines have to guess it back.
              Writ stores your paper as RASH, a strict subset of HTML designed for scholarly articles. Every abstract, section, figure and reference stays tagged and addressable.
              Search engines, institutional repositories and your own agents can read it as it was meant to be read.
            </p>
            <p className="mt-4 text-sm text-muted">Coming next: structured citations from Zotero (BibTeX/CSL) and a persistent identifier for every published paper.</p>
            <p className="mt-6 font-display text-sm font-bold uppercase tracking-wider text-brand-violet">Built on the RASH framework</p>
            <p className="text-xs text-muted">Research Articles in Simplified HTML</p>
          </div>
        </section>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 border-t border-line px-4 py-14 text-sm sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg font-bold">Writ</p>
            <p className="mt-3 max-w-xs text-muted">AI-first scholarly writing in semantic HTML, for researchers and their agents.</p>
            <p className="mt-3 text-xs text-muted">Writ /rɪt/, rhymes with “bit”.</p>
            <a className="mt-3 inline-block text-muted hover:text-ink" href="mailto:hello@usewrit.dev">hello@usewrit.dev</a>
          </div>
          <div>
            <h3 className="font-display font-semibold">Product</h3>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a className="hover:text-ink" href="#features">Features</a></li>
              <li><a className="hover:text-ink" href="#how">How it works</a></li>
              <li><a className="hover:text-ink" href="#alpha">Closed alpha</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a className="hover:text-ink" href="https://github.com/rash-framework">RASH framework</a></li>
              <li><a className="hover:text-ink" href="https://github.com/rash-framework/raje-app">RAJE, the original editor</a></li>
            </ul>
          </div>
        </div>
        <p className="border-t border-line bg-bg py-4 text-center text-xs text-muted">© {new Date().getFullYear()} Writ · usewrit.dev</p>
      </footer>
    </div>
  );
}
