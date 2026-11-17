"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const links = [{ href: "#recorrido", label: "Recorrido" }, { href: "#trabajo", label: "Trabajo" }, { href: "/cv", label: "CV" }, { href: "#contacto", label: "Contacto" }];

function currentTheme(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === "light" || set === "dark") return set;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const scheme = window.matchMedia("(prefers-color-scheme: dark)");
  scheme.addEventListener("change", onChange);
  window.addEventListener("themechange", onChange);
  return () => { scheme.removeEventListener("change", onChange); window.removeEventListener("themechange", onChange); };
}

export function Navigation() {
  const theme = useSyncExternalStore(subscribe, currentTheme, () => null);

  const toggle = () => {
    const next: Theme = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("neticar-theme", next); } catch { /* sin almacenamiento: el cambio dura esta visita */ }
    window.dispatchEvent(new Event("themechange"));
  };

  return <header className="site-header"><div className="wrap hdr">
    <a className="brand" href="#inicio" aria-label="Tomás Colombo, volver al inicio"><span className="mono" aria-hidden="true">TC</span><span><b>Tomás Colombo</b><small>Neticar · firma personal</small></span></a>
    <div className="hdr-right">
      <nav className="site-nav" aria-label="Secciones"><ul>{links.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul></nav>
      <button className="theme" type="button" onClick={toggle} aria-pressed={theme === "dark"} aria-label="Modo oscuro">
        <span className="knob" aria-hidden="true">◐</span><span aria-hidden="true">{theme === "dark" ? "Claro" : "Oscuro"}</span>
      </button>
    </div>
  </div></header>;
}
