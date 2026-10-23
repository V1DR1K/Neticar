import Image from "next/image";
import { Reveal } from "./Reveal";

type Project = {
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  description: string;
  href: string;
};

const featuredProjects: Project[] = [
  {
    title: "WhatPlan",
    category: "Producto personal",
    image: "/images/project-whatplan-current.png",
    imageAlt: "Vista actual del módulo WhereFood de WhatPlan",
    description: "Un espacio compartido para organizar lugares, películas, recetas, salidas, fechas y viajes, y guardar reseñas, fotos y recuerdos.",
    href: "https://whatplan.neticar.com.ar",
  },
  {
    title: "Notes",
    category: "Producto personal",
    image: "/images/project-notes-current.png",
    imageAlt: "Panel de Notes con contenido ficticio de muestra",
    description: "Un espacio personal para reunir el día, las tareas, la agenda, las finanzas, los repositorios, los archivos y las notas.",
    href: "https://notes.neticar.com.ar",
  },
  {
    title: "ScaleGrams",
    category: "Producto personal",
    image: "/images/project-scalegrams-current.png",
    imageAlt: "Vista actual del registro diario de muestra en ScaleGrams",
    description: "Registro de alimentación, objetivos nutricionales y entrenamiento. Las estimaciones desde fotos se revisan antes de guardarse.",
    href: "https://scalegrams.neticar.com.ar",
  },
  {
    title: "Avianto",
    category: "Gestión de talleres",
    image: "/images/project-avianto-current.png",
    imageAlt: "Ficha de servicio de muestra de Avianto para un taller de motos",
    imagePosition: "center 20%",
    description: "Una plataforma para ordenar ingresos de motos, tareas de servicio, presupuestos e historial de cada taller.",
    href: "https://avianto.neticar.com.ar",
  },
];

const otherProjects = [
  { title: "Finca Don Esteban · Gestión de eventos", href: "https://finca-don-esteban.207.180.192.171.nip.io" },
  { title: "Auto Com · Proyecto personal" },
  { title: "Kaza · Inmobiliaria" },
  { title: "Chiquitines · E-commerce" },
  { title: "HGFull · Operaciones" },
];

export function Projects() {
  return (
    <section className="section section-raised" id="proyectos">
      <div className="container">
        <Reveal className="section-head">
          <p className="cota cota-amber">04 / Proyectos destacados</p>
          <h2 className="headline">Productos que nacieron de ideas y problemas reales.</h2>
          <p className="lede">WhatPlan, Notes y ScaleGrams son productos personales. Avianto completa esta selección con una plataforma de gestión para talleres de motos.</p>
        </Reveal>
        <div className="project-grid" aria-label="Proyectos destacados">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 70} className="project-plate-wrap project-plate-wrap-featured">
              <a className="project-plate" href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}: ${project.description} Abrir producto en una pestaña nueva.`}>
                <div className="project-media">
                  <div className="project-shot">
                    <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 50vw" style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined} />
                  </div>
                </div>
                <div className="project-copy">
                  <span className="cota project-category">{project.category}</span>
                  <h3 className="title-md">{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="cota project-action">Visitar producto <span aria-hidden="true">↗</span></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="other-work">
          <h3>Otros trabajos y experiencias</h3>
          <p className="lede">También forman parte de mi recorrido Auto Com y otros trabajos de gestión, eventos, comercio y operaciones.</p>
          <div className="other-work-list" aria-label="Otros proyectos incluidos en el portfolio actual">
            {otherProjects.map((project) => project.href
              ? <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer">{project.title} <span aria-hidden="true">↗</span></a>
              : <span key={project.title}>{project.title}</span>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
