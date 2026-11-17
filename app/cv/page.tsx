import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton, ShareButton } from "@/components/PrintButton";
import "./cv-print.css";

export const metadata: Metadata = {
  title: "CV — Tomás Colombo | Neticar",
  description: "Currículum de Tomás Colombo, desarrollador Full Stack en Rosario: experiencia, formación en inteligencia artificial y productos propios.",
};

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

const studyWork = [
  { title: "Búsqueda semántica", text: "scraping web y embeddings vectoriales para recuperar información por significado." },
  { title: "Predicción de lluvia", text: "análisis de grandes conjuntos de datos meteorológicos y modelos de clasificación." },
  { title: "Visión por computadora", text: "procesamiento de imágenes para reconocer patrones como patentes y animales." },
  { title: "Modelos predictivos", text: "entrenamiento y validación de modelos de IA para predecir comportamientos." },
];

const technologies = ["Java", "Spring Boot", "Java Swing", "Angular", "React", "JavaScript", "TypeScript", "Pruebas de software", "ORM", "MySQL", "PostgreSQL", "Docker", "Git / GitHub", "Infraestructura", "APIs", "IA / LLMs", "Python", "Embeddings", "Visión por computadora", "Machine learning"];

const products = [
  { name: "WhatPlan", href: "https://whatplan.neticar.com.ar", text: "Organización compartida de planes y recuerdos." },
  { name: "Notes", href: "https://notes.neticar.com.ar", text: "Diario, agenda, tareas, archivos y finanzas." },
  { name: "ScaleGrams", href: "https://scalegrams.neticar.com.ar", text: "Alimentación, objetivos nutricionales y entrenamiento." },
  { name: "Avianto", href: "https://avianto.neticar.com.ar", text: "Gestión integral para talleres de motos." },
];

export default function CvPage() {
  return <main className="cv-page" id="contenido">
    <div className="cv-toolbar"><Link href="/">← Volver al portfolio</Link><div className="cv-actions"><ShareButton /><PrintButton /></div></div>
    <article className="cv-sheet">
      <header className="cv-header">
        <div><p className="cv-eyebrow">Currículum · Rosario, Argentina</p><h1>Tomás<br />Colombo.</h1></div>
        <div className="cv-header-aside"><span>Desarrollador<br />Full Stack</span><span className="cv-signature">Neticar · firma personal</span></div>
      </header>
      <section className="cv-section cv-profile" aria-labelledby="cv-profile-heading">
        <h2 id="cv-profile-heading">Perfil</h2>
        <div>
          <p>Desarrollador Full Stack en CISB SRL y estudiante del último año de la Tecnicatura en Inteligencia Artificial. Participo en soluciones de gestión, facturación, logística, biometría y procesamiento de datos, y desarrollo productos propios como WhatPlan, Notes, ScaleGrams y Avianto.</p>
          <p>Me interesa aprender tecnologías nuevas y aplicarlas en el trabajo, la facultad y mis proyectos. Tomo las críticas como impulso para mejorar, soy comunicativo y disfruto trabajar en equipo.</p>
        </div>
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
          <article className="cv-entry"><p className="cv-period">Próximo paso</p><div><h3>Licenciatura en Aplicaciones de Inteligencia Artificial</h3><p className="cv-organization">Universidad Nacional de Rosario (UNR)</p></div></article>
          <article className="cv-entry"><p className="cv-period">2024 — Actualidad · último año</p><div><h3>Tecnicatura en Inteligencia Artificial</h3><p className="cv-organization">Facultad de Ciencias Agrarias e Ingeniería</p><p className="cv-subtitle">Trabajos prácticos en Python</p><ul>{studyWork.map((work) => <li key={work.title}><strong>{work.title}:</strong> {work.text}</li>)}</ul></div></article>
          <article className="cv-entry"><p className="cv-period">Egresado</p><div><h3>Técnico Informático</h3><p className="cv-organization">Instituto Politécnico Superior de Rosario · especialidad en Informática</p></div></article>
        </div>
      </section>
      <section className="cv-section" aria-labelledby="cv-skills-heading">
        <h2 id="cv-skills-heading">Tecnologías y áreas</h2>
        <ul className="cv-skills">{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
      </section>
      <section className="cv-section" aria-labelledby="cv-projects-heading">
        <h2 id="cv-projects-heading">Productos propios</h2>
        <ul className="cv-projects">{products.map((product) => <li key={product.name}><a href={product.href}>{product.name}</a><span>{product.text}</span></li>)}</ul>
      </section>
      <footer className="cv-footer"><span>Tomás Colombo · Neticar</span><span><a href="mailto:desarrolloneticar@gmail.com">desarrolloneticar@gmail.com</a> · <a href="https://wa.me/5493412639357">WhatsApp +54 9 341 263 9357</a></span></footer>
    </article>
  </main>;
}
