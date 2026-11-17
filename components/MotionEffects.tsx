"use client";

import { useEffect } from "react";

/* Inclinación 3D de las portadas y leve zoom del retrato al hacer scroll. Todo es decorativo. */
export function MotionEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cleanups: (() => void)[] = [];

    if (window.matchMedia("(hover: hover)").matches) {
      const props = ["--rx", "--ry", "--mx", "--my", "--gx", "--gy"];
      document.querySelectorAll<HTMLElement>(".cover").forEach((cover) => {
        const move = (e: PointerEvent) => {
          const r = cover.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
          cover.style.setProperty("--ry", `${(x * 7).toFixed(2)}deg`);
          cover.style.setProperty("--rx", `${(-y * 7).toFixed(2)}deg`);
          cover.style.setProperty("--mx", x.toFixed(3));
          cover.style.setProperty("--my", y.toFixed(3));
          cover.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
          cover.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
        };
        const leave = () => props.forEach((p) => cover.style.removeProperty(p));
        cover.addEventListener("pointermove", move);
        cover.addEventListener("pointerleave", leave);
        cleanups.push(() => { cover.removeEventListener("pointermove", move); cover.removeEventListener("pointerleave", leave); });
      });
    }

    const frame = document.querySelector<HTMLElement>(".art-frame");
    if (frame) {
      const onScroll = () => {
        const r = frame.getBoundingClientRect();
        frame.style.setProperty("--hp", Math.min(1, Math.max(0, -r.top / r.height)).toFixed(3));
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener("scroll", onScroll));
    }
    return () => cleanups.forEach((fn) => fn());
  }, []);
  return null;
}
