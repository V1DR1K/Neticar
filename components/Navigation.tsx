"use client";

import { useEffect, useRef, useState } from "react";

const links = [{ href: "#quien-soy", label: "Quién soy" }, { href: "#recorrido", label: "Recorrido" }, { href: "#proyectos", label: "Proyectos" }, { href: "/cv", label: "CV" }];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);
  const closeMenu = () => { setOpen(false); buttonRef.current?.focus(); };
  return <header className="site-header"><nav className="nav-shell" aria-label="Navegación principal"><a className="brand" href="#inicio" aria-label="Tomás Colombo, volver al inicio"><span className="brand-monogram" aria-hidden="true">TC</span><span className="brand-text"><strong>Tomás Colombo</strong><small>Neticar · firma personal</small></span></a><div className="desktop-nav">{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}<a href="#contacto">Contacto</a></div><a className="button button-primary nav-cta" href="#contacto">Hablemos</a><button ref={buttonRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen((value) => !value)}><span /><span /><span /></button><div id="mobile-menu" className={`mobile-menu ${open ? "is-open" : ""}`} onKeyDown={(event) => { if (event.key === "Escape") closeMenu(); }}>{links.map((link, index) => <a ref={index === 0 ? firstLinkRef : undefined} key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}<a href="#contacto" onClick={() => setOpen(false)}>Contacto</a><a className="button button-primary" href="#contacto" onClick={() => setOpen(false)}>Hablemos</a></div></nav></header>;
}
