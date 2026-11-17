"use client";

import { useEffect, useRef } from "react";

/*
  Campo de "embeddings" de la portada.
  - Cada grupo de conceptos ocupa su propia zona libre y se adapta a su forma (alta o ancha).
  - Mide el texto, los botones y la foto para no dibujar nunca debajo de ellos.
  - Suma nodos sin etiqueta en todo el espacio libre para completar la trama.
  - Lee los colores del tema activo y se vuelve a pintar al cambiar de tema.
*/

type Rect = { l: number; t: number; r: number; b: number };
type Point = { hx: number; hy: number; x: number; y: number; label?: string; kind: "word" | "dot" | "node"; ph: number };
type Box = { cx: number; cy: number; rx: number; ry: number };

const GROUPS = [
  ["WhatPlan", "Notes", "ScaleGrams", "Avianto"],
  ["Java", "Spring Boot", "Hibernate", "APIs", "ORM"],
  ["Python", "Embeddings", "Visión", "Predicción", "LLMs"],
  ["Angular", "React", "TypeScript", "SCSS"],
  ["PostgreSQL", "MySQL", "Datasets", "Análisis"],
];
const OBSTACLES = ".hero .cota, .hero h1 .ch, .hero-sub, .typer, .hero-actions > *, .facts, .art-frame, .art-tag, .stamp, .hero-index, .site-header";
const FONT = '500 11px "JetBrains Mono", ui-monospace, monospace';

export function EmbeddingField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !hero || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const mouse = { x: -999, y: -999 };
    let W = 0, H = 0, t = 0, frame = 0, visible = true;
    let obs: Rect[] = [];
    let pts: Point[] = [];
    let links: [Point, Point][] = [];
    let colors = { dot: "", big: "", label: "", accent: "" };

    const readColors = () => {
      const s = getComputedStyle(document.documentElement);
      colors = { dot: s.getPropertyValue("--dot").trim(), big: s.getPropertyValue("--dot-big").trim(), label: s.getPropertyValue("--label").trim(), accent: s.getPropertyValue("--accent").trim() };
    };
    const hit = (l: number, tp: number, r: number, b: number) => {
      if (l < 2 || tp < 2 || r > W - 2 || b > H - 2) return true;
      return obs.some((o) => l < o.r && r > o.l && tp < o.b && b > o.t);
    };
    const clearance = (px: number, py: number) => {
      let m = Math.min(px, py, W - px, H - py);
      for (const o of obs) m = Math.min(m, Math.hypot(Math.max(o.l - px, 0, px - o.r), Math.max(o.t - py, 0, py - o.b)));
      return m;
    };
    const span = (px: number, py: number, dx: number, dy: number) => {
      let d = 0;
      while (d < 340) { const nx = px + dx * (d + 8), ny = py + dy * (d + 8); if (hit(nx - 3, ny - 3, nx + 3, ny + 3)) break; d += 8; }
      return d;
    };

    const seed = () => {
      const hr = canvas.getBoundingClientRect();
      obs = Array.from(document.querySelectorAll(OBSTACLES)).map((el) => {
        const r = el.getBoundingClientRect();
        return { l: r.left - hr.left - 12, t: r.top - hr.top - 8, r: r.right - hr.left + 12, b: r.bottom - hr.top + 8 };
      }).filter((r) => r.r > 0 && r.b > 0 && r.l < W && r.t < H);
      pts = []; links = [];
      ctx.font = FONT;
      const base = obs.length;

      // 1. cada grupo toma la zona libre más amplia que queda y la marca como ocupada
      const narrow = W < 820, capX = narrow ? 120 : 240, capY = narrow ? 150 : 210;
      const boxes: Box[] = [];
      for (let g = 0; g < GROUPS.length; g++) {
        let best: [number, number, number] | null = null;
        for (let gx = 20; gx < W; gx += 20) for (let gy = 20; gy < H; gy += 20) {
          const cl = clearance(gx, gy);
          if (cl > 24 && (!best || cl > best[2])) best = [gx, gy, cl];
        }
        if (!best) break;
        const [bx, by] = best;
        const l = Math.min(span(bx, by, -1, 0), capX), r = Math.min(span(bx, by, 1, 0), capX), u = Math.min(span(bx, by, 0, -1), capY), d = Math.min(span(bx, by, 0, 1), capY);
        const box = { cx: bx + (r - l) / 2, cy: by + (d - u) / 2, rx: Math.max(28, (l + r) / 2 * 0.92), ry: Math.max(28, (u + d) / 2 * 0.92) };
        boxes.push(box);
        obs.push({ l: box.cx - box.rx - 14, t: box.cy - box.ry - 14, r: box.cx + box.rx + 14, b: box.cy + box.ry + 14 });
      }
      obs = obs.slice(0, base);

      // 2. palabras de cada grupo, repartidas a lo largo del eje mayor de su zona
      boxes.forEach((b, gi) => {
        const words = GROUPS[gi], n = words.length, tall = b.ry > b.rx * 1.15;
        words.forEach((w, wi) => {
          const lw = ctx.measureText(w).width, f = n > 1 ? (wi / (n - 1)) * 2 - 1 : 0;
          for (let tries = 0; tries < 18; tries++) {
            const nudge = (tries % 2 ? 1 : -1) * Math.ceil(tries / 2) * 8;
            let px: number, py: number;
            if (tall) { py = b.cy + f * b.ry * 0.8 + nudge; px = b.cx - lw / 2 + (wi % 2 ? 1 : -1) * Math.max(0, b.rx - lw / 2 - 14) * 0.5; }
            else { px = b.cx + f * Math.max(0, b.rx - lw / 2 - 10) - lw / 2 + nudge; py = b.cy + (wi % 2 ? 1 : -1) * b.ry * 0.4; }
            if (px - 5 < b.cx - b.rx - 20 || px + lw + 12 > b.cx + b.rx + 20) continue;
            if (!hit(px - 5, py - 8, px + lw + 12, py + 9)) {
              pts.push({ hx: px, hy: py, x: px, y: py, label: w, kind: "word", ph: 0 });
              obs.push({ l: px - 6, t: py - 9, r: px + lw + 12, b: py + 9 });
              break;
            }
          }
        });
        const count = Math.max(24, Math.min(80, (b.rx * b.ry) / 420));
        for (let k = 0; k < count; k++) {
          const a = Math.random() * Math.PI * 2, rr = Math.sqrt(Math.random());
          const px = b.cx + Math.cos(a) * b.rx * rr, py = b.cy + Math.sin(a) * b.ry * rr;
          if (!hit(px - 3, py - 3, px + 3, py + 3)) pts.push({ hx: px, hy: py, x: px, y: py, kind: "dot", ph: Math.random() * 6.28 });
        }
      });

      // 3. trama sin palabras en todo el espacio libre: puntos finos y nodos medianos enlazados
      const ambient = Math.min(320, Math.round((W * H) / 4200));
      const nodes: Point[] = [];
      for (let k = 0, tries = 0; k < ambient && tries < ambient * 6; tries++) {
        const px = Math.random() * W, py = Math.random() * H;
        if (hit(px - 3, py - 3, px + 3, py + 3)) continue;
        const isNode = Math.random() < 0.16;
        const p: Point = { hx: px, hy: py, x: px, y: py, kind: isNode ? "node" : "dot", ph: Math.random() * 6.28 };
        pts.push(p);
        if (isNode) nodes.push(p);
        k++;
      }
      for (const p of nodes) {
        let nearest: Point | undefined;
        let bd = 120;
        for (const q of nodes) {
          if (q === p) continue;
          const d = Math.hypot(q.hx - p.hx, q.hy - p.hy);
          if (d < bd) { bd = d; nearest = q; }
        }
        if (nearest) links.push([p, nearest]);
      }
    };

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, W, H);
      const near: [Point, number][] = [];
      for (const p of pts) {
        const still = p.kind === "word";
        const ox = still ? 0 : Math.sin(t + p.ph) * 5, oy = still ? 0 : Math.cos(t * 1.3 + p.ph) * 4;
        const dx = mouse.x - p.hx, dy = mouse.y - p.hy, d = Math.hypot(dx, dy), pull = d < 180 ? (1 - d / 180) * 0.22 : 0;
        let tx = p.hx + ox + dx * pull, ty = p.hy + oy + dy * pull;
        if (!still && hit(tx - 3, ty - 3, tx + 3, ty + 3)) { tx = p.hx; ty = p.hy; }
        p.x += (tx - p.x) * 0.08; p.y += (ty - p.y) * 0.08;
        if (d < 170 && p.kind !== "dot") near.push([p, d]);
      }
      near.sort((a, b) => a[1] - b[1]);
      const top = near.slice(0, 9);
      const hot = new Set(top.map(([p]) => p));

      ctx.lineWidth = 1;
      ctx.strokeStyle = colors.big;
      ctx.globalAlpha = 0.14;
      for (const [a, b] of links) { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 1.2;
      for (const [p, d] of top) { ctx.globalAlpha = 0.75 * (1 - d / 170); ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(p.x, p.y); ctx.stroke(); }
      ctx.globalAlpha = 1;

      ctx.font = FONT;
      for (const p of pts) {
        const isHot = hot.has(p);
        if (p.kind === "dot") { ctx.fillStyle = colors.dot; ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.28); ctx.fill(); continue; }
        ctx.fillStyle = isHot ? colors.accent : colors.big;
        ctx.globalAlpha = p.kind === "node" && !isHot ? 0.55 : 1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.kind === "word" ? 3.4 : 2.6, 0, 6.28); ctx.fill();
        ctx.globalAlpha = 1;
        if (p.label) { ctx.fillStyle = isHot ? colors.accent : colors.label; ctx.fillText(p.label, p.x + 7, p.y + 4); }
      }
      if (!reduced && visible) frame = requestAnimationFrame(draw);
    };

    const size = () => {
      const r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reduced) draw();
    };

    const onMove = (e: PointerEvent) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const onLeave = () => { mouse.x = mouse.y = -999; };
    const onTheme = () => { readColors(); if (reduced) draw(); };
    let resizeTimer = 0;
    const onResize = () => { window.clearTimeout(resizeTimer); resizeTimer = window.setTimeout(size, 120); };

    hero.addEventListener("pointermove", onMove);
    hero.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);
    window.addEventListener("themechange", onTheme);
    const scheme = window.matchMedia("(prefers-color-scheme: dark)");
    scheme.addEventListener("change", onTheme);
    const io = new IntersectionObserver(([entry]) => {
      const was = visible; visible = entry.isIntersecting;
      if (visible && !was && !reduced) frame = requestAnimationFrame(draw);
    });
    io.observe(hero);

    readColors();
    size();
    // reubicar cuando terminan de cargar las fuentes y la animación del nombre
    document.fonts?.ready.then(size);
    const settle = window.setTimeout(size, 1500);
    if (!reduced) frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settle); window.clearTimeout(resizeTimer);
      hero.removeEventListener("pointermove", onMove);
      hero.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("themechange", onTheme);
      scheme.removeEventListener("change", onTheme);
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-field" aria-hidden="true" />;
}
