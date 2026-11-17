import Image from "next/image";
import { studyVisuals, workVisuals, type StudyVisual, type WorkVisual } from "./visuals";

type Product = { brand: "whatplan" | "notes" | "scalegrams" | "avianto"; name: string; href: string; logo: string; logoAlt: string; wordmark?: { text: string; className: string }; tag: React.ReactNode; shotAlt: string };

const products: Product[] = [
  { brand: "whatplan", name: "WhatPlan", href: "https://whatplan.neticar.com.ar", logo: "/images/brands/whatplan-wordmark.png", logoAlt: "WhatPlan", tag: <>Lo mejor de un plan es <em>volver a él.</em></>, shotAlt: "Landing de WhatPlan" },
  { brand: "notes", name: "Notes", href: "https://notes.neticar.com.ar", logo: "/images/brands/notes-icon.svg", logoAlt: "", wordmark: { text: "Notes", className: "cover-wm-notes" }, tag: <>Diario, agenda, tareas y finanzas <em>en un lugar.</em></>, shotAlt: "Landing de Notes" },
  { brand: "scalegrams", name: "ScaleGrams", href: "https://scalegrams.neticar.com.ar", logo: "/images/brands/scalegrams-icon.svg", logoAlt: "", wordmark: { text: "scalegrams", className: "cover-wm-sg" }, tag: <>Cada <em>gramo</em> cuenta.</>, shotAlt: "Landing de ScaleGrams" },
  { brand: "avianto", name: "Avianto", href: "https://avianto.neticar.com.ar", logo: "/images/brands/avianto-isologotipo.svg", logoAlt: "Avianto, mecánica integral de motos", tag: <>Cada moto tiene una historia. <em>Avianto la ordena.</em></>, shotAlt: "Landing de Avianto" },
];

type Card = { title: string; text: string; visual: WorkVisual };

const cisb: Card[] = [
  { title: "Gestión contable", text: "Sistemas de registro y consulta contable.", visual: "accounting" },
  { title: "Facturación", text: "Comprobantes e integraciones de facturación.", visual: "billing" },
  { title: "Logística", text: "Seguimiento de operaciones logísticas.", visual: "logistics" },
  { title: "Datos a gran escala", text: "Análisis y procesamiento de grandes volúmenes.", visual: "data" },
  { title: "Biometría", text: "Proyectos con datos biométricos.", visual: "biometrics" },
  { title: "CRM y ERP", text: "Gestión de clientes y recursos de empresa.", visual: "crm" },
  { title: "Integraciones de APIs", text: "Meta, facturación y otros sistemas.", visual: "apis" },
  { title: "Despliegues productivos", text: "Automatización y despliegues en servidores.", visual: "deploys" },
];

const internship: Card[] = [
  { title: "Programación", text: "Tareas de programación asignadas por el equipo.", visual: "programming" },
  { title: "Trabajo en equipo", text: "Colaboración con el equipo de desarrollo.", visual: "teamwork" },
];

const studies: { kind: string; title: string; text: string; tags: string[]; visual: StudyVisual }[] = [
  { kind: "Recuperación de información", title: "Búsqueda semántica con scraping y embeddings", text: "Scraping de contenido web y embeddings vectoriales para buscar por significado.", tags: ["Python", "Embeddings"], visual: "semantic" },
  { kind: "Ciencia de datos", title: "Predicción de lluvia", text: "Análisis de grandes datasets meteorológicos para predecir si va a llover.", tags: ["Python", "Clasificación"], visual: "rain" },
  { kind: "Visión por computadora", title: "Reconocimiento de patrones en imágenes", text: "Detección de patentes, animales y otros patrones en fotos.", tags: ["Python", "Imágenes"], visual: "vision" },
  { kind: "Aprendizaje automático", title: "Entrenamiento de modelos de IA", text: "Entrenamiento y validación de modelos que predicen comportamientos.", tags: ["Python", "Machine learning"], visual: "training" },
];

const technologies = ["Java", "Spring Boot", "Java Swing", "Angular", "React", "TypeScript", "Pruebas", "ORM", "MySQL", "PostgreSQL", "Docker", "GitHub", "IA / LLMs"];

function Cards({ items, label }: { items: Card[]; label: string }) {
  return <ul className="cards" aria-label={label}>{items.map((item) => <li key={item.title}>
    <div dangerouslySetInnerHTML={{ __html: workVisuals[item.visual] }} />
    <b>{item.title}</b><small>{item.text}</small>
  </li>)}</ul>;
}

export function Work() {
  return <section className="band raised on-paper" id="trabajo"><div className="wrap">
    <div className="sec-head"><p className="cota cota-amber">03 / Trabajo</p><h2>Lo que construyo.</h2><p className="lede">Ordenado por peso: mis productos, mi trabajo en CISB, la Tecnicatura y la pasantía.</p></div>
    <div className="rows">
      <div className="wrow wrow-1">
        <div className="wrow-head"><p className="cota cota-amber">Proyectos personales</p><h3>Productos propios</h3><p>Productos publicados bajo Neticar.</p><span className="count">4 productos</span></div>
        <div className="covers" aria-label="Productos propios">{products.map((product) => <a key={product.brand} className={`cover cover-${product.brand}`} href={product.href} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${product.name} en una pestaña nueva`}>
          <span className="cover-bg" aria-hidden="true" />
          <span className="cover-top"><span className="cover-logo"><Image src={product.logo} alt={product.logoAlt} width={160} height={50} unoptimized />{product.wordmark && <b className={product.wordmark.className}>{product.wordmark.text}</b>}</span></span>
          <p className="cover-tag">{product.tag}</p>
          <span className="browser"><span className="bar" aria-hidden="true"><i /><i /><i /><span>{product.href.replace("https://", "")}</span></span><Image src={`/images/projects/${product.brand}-landing.jpg`} alt={product.shotAlt} width={1152} height={720} sizes="(max-width: 480px) 340px, (max-width: 1180px) 320px, 280px" /></span>
        </a>)}</div>
      </div>
      <div className="wrow wrow-2">
        <div className="wrow-head"><p className="cota cota-amber">CISB · Trabajo profesional</p><h3>Programador Full Stack</h3><p>Junio 2024 — hoy, jornada completa.</p><span className="count">8 áreas</span></div>
        <div><Cards items={cisb} label="Áreas de trabajo en CISB" /><ul className="tech" aria-label="Tecnologías en CISB">{technologies.map((tech) => <li key={tech}>{tech}</li>)}</ul></div>
      </div>
      <div className="wrow wrow-3">
        <div className="wrow-head"><p className="cota cota-amber">Tecnicatura en IA · Trabajos de la cursada</p><h3>Lo que construimos en Python</h3><span className="count">4 trabajos prácticos</span></div>
        <div className="works">{studies.map((study) => <article className="work" key={study.title}>
          <div className="viz" dangerouslySetInnerHTML={{ __html: studyVisuals[study.visual] }} />
          <span className="work-kind">{study.kind}</span><h4>{study.title}</h4><p>{study.text}</p>
          <ul className="work-tags">{study.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        </article>)}</div>
      </div>
      <div className="wrow wrow-4">
        <div className="wrow-head"><p className="cota cota-amber">MangooDev · Pasantía</p><h3>Pasantía de desarrollo</h3><p>Noviembre — diciembre 2023.</p><span className="count">2 meses</span></div>
        <Cards items={internship} label="Tareas de la pasantía" />
      </div>
    </div>
    <div className="other rv"><h3>Otros trabajos</h3><div className="chips"><a href="https://finca-don-esteban.207.180.192.171.nip.io" target="_blank" rel="noopener noreferrer">Finca Don Esteban ↗</a><span>Kaza</span><span>Chiquitines</span><span>HGFull</span></div></div>
  </div></section>;
}
