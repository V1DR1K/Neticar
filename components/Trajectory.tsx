"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

type TrajectoryEntry = { period: string; organization: string; role: string; detail: string; technologies?: string[] };

const trajectory: TrajectoryEntry[] = [
  { period: "Jun. 2024 — Actualidad", organization: "CISB SRL", role: "Programador Junior Full Stack", detail: "Participación en soluciones de gestión e integraciones con APIs de Meta (WhatsApp, Instagram y Facebook), facturación y sistemas vinculados a biometría, consumo y ensayos.", technologies: ["Java", "Java Swing", "Angular", "Docker", "Git", "JavaScript", "TypeScript", "Hibernate / Jakarta", "MySQL", "PostgreSQL"] },
  { period: "6 meses", organization: "MangooDev", role: "Pasantías de desarrollo de software", detail: "Desarrollo de soluciones de software dentro de un equipo profesional." },
  { period: "En curso", organization: "Facultad de Ciencias Agrarias e Ingeniería", role: "Técnico en Inteligencia Artificial", detail: "Formación terciaria en inteligencia artificial aplicada." },
  { period: "Egresado", organization: "Instituto Politécnico Superior de Rosario", role: "Técnico Informático", detail: "Formación secundaria técnica en informática." },
];

export function Trajectory() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return <section className="section trajectory" id="recorrido"><div className="container trajectory-layout"><Reveal className="trajectory-intro"><h2>Un recorrido construido entre código, producto y sistemas.</h2><p>La experiencia de Neticar se apoya en formación técnica continua y en trabajo con desafíos de software concretos.</p></Reveal><div className="timeline">{trajectory.map((entry, index) => { const isOpen = openIndex === index; const detailsId = `trajectory-detail-${index}`; return <Reveal className="timeline-entry" key={`${entry.organization}-${entry.role}`} delay={index * 90}><p className="timeline-period">{entry.period}</p><div className="timeline-content"><p className="timeline-organization">{entry.organization}</p><h3><button className="timeline-toggle" type="button" aria-expanded={isOpen} aria-controls={detailsId} onClick={() => setOpenIndex(isOpen ? null : index)}>{entry.role}<span aria-hidden="true">{isOpen ? "−" : "+"}</span></button></h3><div id={detailsId} hidden={!isOpen}><p>{entry.detail}</p>{entry.technologies && <p className="technology-list">{entry.technologies.join(" · ")}</p>}</div></div></Reveal>; })}</div></div></section>;
}
