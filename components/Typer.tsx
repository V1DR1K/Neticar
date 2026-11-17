"use client";

import { useEffect, useState } from "react";

const PHRASES = ["sistemas de gestión", "productos propios", "integraciones de APIs", "modelos que predicen", "búsquedas por significado"];

export function Typer() {
  const [text, setText] = useState(PHRASES[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let index = 0, timer = 0, cancelled = false;
    const wait = (ms: number, fn: () => void) => { timer = window.setTimeout(() => { if (!cancelled) fn(); }, ms); };
    const erase = (current: string, done: () => void) => {
      if (!current.length) return done();
      const next = current.slice(0, -1);
      setText(next);
      wait(28, () => erase(next, done));
    };
    const type = (target: string, k: number) => {
      setText(target.slice(0, k));
      if (k < target.length) wait(55, () => type(target, k + 1));
      else wait(1800, loop);
    };
    const loop = () => erase(PHRASES[index], () => { index = (index + 1) % PHRASES.length; type(PHRASES[index], 1); });
    wait(2200, loop);
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, []);

  return <p className="typer"><span aria-hidden="true">Construyo <b>{text}</b><i /></span><span className="sr-only">Construyo sistemas de gestión, productos propios, integraciones de APIs y modelos de inteligencia artificial.</span></p>;
}
