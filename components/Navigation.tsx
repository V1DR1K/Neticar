"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Neticar, volver al inicio">
          <Image src="/images/neticar-mark.png" alt="Neticar" width={500} height={500} priority />
        </a>

        <div className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>

        <a className="button button-primary nav-cta" href="#contacto">Comenzar</a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}
