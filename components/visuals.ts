/*
  Ilustraciones animadas (SVG estático + animaciones CSS de globals.css).
  Son decorativas: cada SVG lleva aria-hidden y el texto de la tarjeta describe el trabajo.
*/

const mini = (body: string) => `<svg viewBox="0 0 120 46" aria-hidden="true" focusable="false">${body}</svg>`;
const wide = (body: string) => `<svg viewBox="0 0 320 120" aria-hidden="true" focusable="false">${body}</svg>`;

const embeddingDots = Array.from({ length: 26 }, (_, i) => {
  const cluster = i % 3;
  const cx = [70, 170, 250][cluster] + Math.sin(i * 7.1) * 30;
  const cy = [60, 40, 80][cluster] + Math.cos(i * 3.3) * 24;
  const tone = cluster === 1 ? "vz-a" : "vz-m";
  return `<circle class="v-dot ${tone}" style="--dx:${(Math.sin(i) * 6).toFixed(1)}px;--dy:${(Math.cos(i) * 6).toFixed(1)}px;animation-delay:-${(i * 0.3).toFixed(1)}s" cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="3.2"/>`;
}).join("");

const rainBars = [30, 55, 40, 80, 62, 90, 48, 70, 35, 85, 58, 44]
  .map((h, i) => `<rect class="v-bar ${h > 60 ? "vz-a" : "vz-l"}" style="animation-delay:-${(i * 0.4).toFixed(1)}s" x="${16 + i * 25}" y="${108 - h}" width="14" height="${h}" rx="2"/>`)
  .join("");
const rainDrops = Array.from({ length: 7 }, (_, d) => `<line class="v-drop vs-m" style="animation-delay:-${(d * 0.23).toFixed(2)}s" x1="${30 + d * 43}" y1="0" x2="${27 + d * 43}" y2="12" stroke-width="1.5"/>`).join("");

export const studyVisuals = {
  semantic: wide(`${embeddingDots}<line class="v-link vs-a" x1="170" y1="40" x2="150" y2="62"/><line class="v-link vs-a" x1="170" y1="40" x2="195" y2="30"/><circle class="v-q vs-f" cx="170" cy="40" r="6" stroke-width="2"/><text class="vt" x="12" y="110">consulta → vecinos más cercanos</text>`),
  rain: wide(`${rainBars}${rainDrops}<text class="vt" x="12" y="16">P(lluvia)</text>`),
  vision: wide(`<rect x="95" y="38" width="130" height="44" rx="5" fill="#F3ECDD" stroke="#0B0B0B" stroke-opacity=".25"/><rect x="95" y="38" width="130" height="10" rx="3" fill="#30348B"/><text x="160" y="74" text-anchor="middle" font-family="monospace" font-weight="600" font-size="19" fill="#0F0E0C">AB 123 CD</text><rect class="v-box vs-a" x="88" y="31" width="144" height="58" rx="7" stroke-width="2"/><g class="v-scan"><line class="vs-a" x1="70" y1="60" x2="250" y2="60" stroke-opacity=".7"/></g><text class="vt" x="88" y="24" style="fill:var(--accent)">patente detectada</text>`),
  training: wide(`<line class="vs-l" x1="20" y1="104" x2="304" y2="104"/><line class="vs-l" x1="20" y1="10" x2="20" y2="104"/><path class="v-curve vs-a" d="M22 18 C60 70 90 80 130 86 S220 94 300 96" stroke-width="2.5"/><path class="v-curve vs-m" style="animation-delay:.3s" d="M22 26 C60 74 92 84 130 90 S220 92 300 90" stroke-width="1.5" stroke-dasharray="4 4"/><text class="vt" x="250" y="80">pérdida</text>`),
};

const dataBars = [14, 26, 18, 34, 22, 30, 12, 28]
  .map((h, i) => `<rect class="v-bar ${h > 25 ? "vz-a" : "vz-m"}" style="animation-delay:-${(i * 0.35).toFixed(2)}s" x="${12 + i * 13}" y="${40 - h}" width="8" height="${h}"/>`)
  .join("");

export const workVisuals = {
  accounting: mini(`<rect class="vz-l" x="10" y="9" width="100" height="5"/><rect class="m-row vz-a" x="10" y="9" width="62" height="5"/><rect class="vz-l" x="10" y="20" width="100" height="5"/><rect class="m-row vz-f" style="animation-delay:.4s" x="10" y="20" width="84" height="5"/><rect class="vz-l" x="10" y="31" width="100" height="5"/><rect class="m-row vz-m" style="animation-delay:.8s" x="10" y="31" width="40" height="5"/>`),
  billing: mini(`<rect class="vz-f" x="30" y="3" width="60" height="6" rx="2"/><g class="m-print"><rect class="vs-l" style="fill:var(--bg)" x="38" y="7" width="44" height="34"/><rect class="vz-m" x="44" y="14" width="28" height="3"/><rect class="vz-m" x="44" y="21" width="20" height="3"/><rect class="vz-a" x="44" y="30" width="32" height="4"/></g>`),
  logistics: mini(`<path class="vs-m" d="M10 34 C 35 6, 60 40, 110 12" stroke-dasharray="3 4"/><circle class="vz-f" cx="10" cy="34" r="3"/><circle class="vz-f" cx="110" cy="12" r="3"/><rect class="m-move vz-a" width="12" height="8" x="-6" y="-4" style="offset-path:path('M10 34 C 35 6, 60 40, 110 12')"/>`),
  data: mini(dataBars),
  biometrics: mini(`<circle class="vs-f" cx="60" cy="23" r="9" stroke-width="1.6"/><circle class="vs-m" cx="60" cy="23" r="14" stroke-width="1.2" stroke-dasharray="6 3"/><circle class="m-ring vs-a" cx="60" cy="23" r="12" stroke-width="2"/><path class="vs-f" d="M56 23 q4 -6 8 0 M57 27 q3 -3 6 0" stroke-width="1.4"/>`),
  crm: mini(`<line class="vs-m" x1="60" y1="23" x2="22" y2="11"/><line class="vs-m" x1="60" y1="23" x2="98" y2="11"/><line class="vs-m" x1="60" y1="23" x2="24" y2="37"/><line class="vs-m" x1="60" y1="23" x2="96" y2="37"/><circle class="vz-a" cx="60" cy="23" r="6"/><circle class="m-pulse vz-f" cx="22" cy="11" r="4"/><circle class="m-pulse vz-f" style="animation-delay:.45s" cx="98" cy="11" r="4"/><circle class="m-pulse vz-f" style="animation-delay:.9s" cx="96" cy="37" r="4"/><circle class="m-pulse vz-f" style="animation-delay:1.35s" cx="24" cy="37" r="4"/>`),
  apis: mini(`<rect class="vs-f" x="10" y="12" width="26" height="22" stroke-width="1.6"/><rect class="vs-f" x="84" y="12" width="26" height="22" stroke-width="1.6"/><line class="vs-m" x1="36" y1="23" x2="84" y2="23" stroke-dasharray="2 3"/><rect class="m-packet vz-a" x="30" y="20" width="10" height="6"/><text class="vt" x="16" y="27" style="font-size:8px">{ }</text>`),
  deploys: mini(`<rect class="vs-f" x="12" y="8" width="40" height="30" stroke-width="1.6"/><line class="vs-m" x1="12" y1="18" x2="52" y2="18"/><line class="vs-m" x1="12" y1="28" x2="52" y2="28"/><circle class="m-pulse vz-a" cx="46" cy="13" r="2"/><circle class="m-pulse vz-a" style="animation-delay:.5s" cx="46" cy="23" r="2"/><rect class="vz-l" x="62" y="20" width="48" height="6"/><rect class="m-fill vz-a" x="62" y="20" width="48" height="6"/>`),
  programming: mini(`<rect class="vz-m" x="10" y="9" width="14" height="4"/><rect class="m-type vz-f" x="28" y="9" width="56" height="4"/><rect class="vz-m" x="18" y="19" width="10" height="4"/><rect class="m-type vz-a" style="animation-delay:.6s" x="32" y="19" width="70" height="4"/><rect class="vz-m" x="18" y="29" width="10" height="4"/><rect class="m-type vz-f" style="animation-delay:1.2s" x="32" y="29" width="44" height="4"/>`),
  teamwork: mini(`<rect class="vs-l" x="8" y="6" width="32" height="34"/><rect class="vs-l" x="44" y="6" width="32" height="34"/><rect class="vs-l" x="80" y="6" width="32" height="34"/><rect class="m-slide vz-a" x="12" y="16" width="24" height="12"/>`),
};

export type WorkVisual = keyof typeof workVisuals;
export type StudyVisual = keyof typeof studyVisuals;
