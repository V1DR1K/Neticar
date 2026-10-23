import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import "./cv-print.css";

const experience = [
  {
    period: "Junio de 2024 — Actualidad · Jornada completa",
    title: "Programador Full Stack",
    organization: "CISB SRL",
    details: [
      "Participación en proyectos de gestión contable, facturación, logística, análisis y procesamiento de grandes volúmenes de datos y biometría.",
      "Trabajo con sistemas CRM y ERP, integraciones de APIs, automatización de procesos y despliegues en servidores productivos.",
      "Exploración de soluciones con inteligencia artificial y modelos de lenguaje cuando aportan valor al proceso.",
    ],
  },
  {
    period: "Noviembre — diciembre de 2023 · 2 meses",
    title: "Pasantía de desarrollo de software",
    organization: "MangooDev",
    details: ["Tareas de programación como parte del equipo de desarrollo."],
  },
];

const technologies = ["Java", "Spring Boot", "Java Swing", "Angular", "React", "JavaScript", "TypeScript", "Pruebas de software", "ORM", "MySQL", "PostgreSQL", "Docker", "Git / GitHub", "Infraestructura", "APIs", "IA / LLMs"];

export default function CvPage() {
  return <main className="cv-page" id="contenido">
    <div className="cv-toolbar"><Link href="/">← Volver al portfolio</Link><PrintButton /></div>
    <article className="cv-sheet">
      <header className="cv-header">
        <div><p className="cv-eyebrow">Currículum · Rosario, Argentina</p><h1>Tomás<br />Colombo.</h1></div>
        <div className="cv-header-aside"><span>Desarrollador<br />Full Stack</span><span className="cv-signature">Neticar · firma personal</span></div>
      </header>
      <section className="cv-section cv-profile" aria-labelledby="cv-profile-heading">
        <h2 id="cv-profile-heading">Perfil</h2>
        <p>Desarrollador Full Stack en CISB SRL y estudiante del último año de la Tecnicatura en Inteligencia Artificial. Participo en soluciones de gestión, facturación, logística, biometría y procesamiento de datos. También desarrollo productos personales como WhatPlan, Notes y ScaleGrams.</p>
      </section>
      <section className="cv-section" aria-labelledby="cv-experience-heading">
        <h2 id="cv-experience-heading">Experiencia</h2>
        <div className="cv-entries">{experience.map((entry) => <article className="cv-entry" key={entry.organization}>
          <p className="cv-period">{entry.period}</p><div><h3>{entry.title}</h3><p className="cv-organization">{entry.organization}</p><ul>{entry.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
        </article>)}</div>
      </section>
      <section className="cv-section" aria-labelledby="cv-education-heading">
        <h2 id="cv-education-heading">Formación</h2>
        <div className="cv-entries">
          <article className="cv-entry"><p className="cv-period">2024 — Actualidad · último año</p><div><h3>Tecnicatura en Inteligencia Artificial</h3><p className="cv-organization">Facultad de Ciencias Agrarias e Ingeniería</p></div></article>
          <article className="cv-entry"><p className="cv-period">Egresado</p><div><h3>Técnico Informático</h3><p className="cv-organization">Instituto Politécnico Superior de Rosario · especialidad en Informática</p></div></article>
        </div>
      </section>
      <section className="cv-section" aria-labelledby="cv-skills-heading">
        <h2 id="cv-skills-heading">Tecnologías y áreas</h2>
        <ul className="cv-skills">{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
      </section>
      <section className="cv-section" aria-labelledby="cv-projects-heading">
        <h2 id="cv-projects-heading">Productos personales</h2>
        <ul className="cv-projects">
          <li><a href="https://whatplan.neticar.com.ar">WhatPlan</a><span>Organización compartida de planes y recuerdos.</span></li>
          <li><a href="https://notes.neticar.com.ar">Notes</a><span>Espacio personal para tareas, agenda, archivos y notas.</span></li>
          <li><a href="https://scalegrams.neticar.com.ar">ScaleGrams</a><span>Registro de alimentación, objetivos nutricionales y entrenamiento.</span></li>
          <li><span>Auto Com</span><span>Proyecto personal.</span></li>
        </ul>
      </section>
      <footer className="cv-footer"><span>Tomás Colombo · Neticar</span><span><a href="mailto:desarrolloneticar@gmail.com">desarrolloneticar@gmail.com</a> · <a href="https://wa.me/5493412639357">WhatsApp +54 9 341 263 9357</a></span></footer>
    </article>
  </main>;
}
