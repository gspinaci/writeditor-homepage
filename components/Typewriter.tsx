"use client";

import { useEffect, useState } from "react";

const POINTS = ["Edit it like a document", "Export to LaTeX", "Import from LaTeX"];
const STATIC = "WYSIWYG editor, LaTeX compatible.";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Types each point, then loops. Shows static text without JS or with reduced motion. */
export default function Typewriter() {
  const [top, setTop] = useState(STATIC);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let dead = false;
    const type = async (s: string, set: (v: string) => void) => {
      for (let i = 1; i <= s.length && !dead; i++) { set(s.slice(0, i)); await sleep(55); }
    };
    (async () => {
      setTop("");
      while (!dead) {
        for (const p of POINTS) {
          await type(p, setTop);
          await sleep(1300);
          for (let n = p.length - 1; n >= 0 && !dead; n--) { setTop(p.slice(0, n)); await sleep(28); }
          await sleep(250);
        }
      }
    })();
    return () => { dead = true; };
  }, []);

  return (
    <>
      <span className="sr-only">{STATIC}</span>
      <span aria-hidden className="whitespace-nowrap">
        {top}
        <span className="ml-0.5 inline-block h-[1.1em] w-[3px] translate-y-1 animate-[caret_0.6s_steps(1)_infinite] bg-neutral-900" />
      </span>
    </>
  );
}
