import Image from "next/image";
import { Reveal } from "./Reveal";

type Project = {
  title: string;
  category: string;
  images: string[];
  description: string;
  featured?: boolean;
  href?: string;
};

const projects: Project[] = [
  {
    title: "WhatPlan",
    category: "Producto para parejas",
    images: ["/images/project-whatplan-devices.png"],
    description: "Un espacio compartido para registrar salidas, películas, recetas, planes pendientes y fechas especiales, con reseñas, fotos y recuerdos.",
    featured: true,
    href: "https://whatplan.neticar.com.ar",
  },
  {
    title: "ScaleGrams",
    category: "Salud y hábitos",
    images: ["/images/project-kazafitness.png"],
    description: "Una herramienta para registrar comidas, calorías y macronutrientes, y seguir un plan nutricional con precisión.",
    featured: true,
    href: "https://scalegrams.neticar.com.ar",
  },
  {
    title: "MotorCom",
    category: "Gestión de talleres",
    images: ["/images/project-motorcom-devices.png"],
    description: "Órdenes de trabajo, presupuestos e historial para ordenar la operación diaria de talleres de motos.",
    featured: true,
    href: "https://avianto.neticar.com.ar",
  },
  {
    title: "Finca Don Esteban",
    category: "Gestión de eventos",
    images: ["/images/project-finca-don-esteban-devices.png"],
    description: "Sistema de gestión de eventos con emisión y escaneo de QR para organizar reservas y controlar la asistencia en cada jornada.",
    featured: true,
    href: "https://finca-don-esteban.207.180.192.171.nip.io",
  },
  { title: "Kaza", category: "Inmobiliaria", images: ["/images/project-kaza.png"], description: "Experiencia digital para explorar y conectar oportunidades inmobiliarias." },
  { title: "Chiquitines", category: "E-commerce", images: ["/images/project-chiquitines.png"], description: "Una experiencia de compra pensada para una marca cercana." },
  { title: "HGFull", category: "Operaciones", images: ["/images/project-hgfull.png"], description: "Solución orientada a ordenar una operación de servicios." },
];

const waBase = "https://wa.me/543412639357?text=";

export function Projects() {
  return (
    <section className="section section-raised" id="proyectos">
      <div className="container">
        <Reveal className="section-head">
          <p className="cota cota-violet">Lámina 04 · Trabajo</p>
          <h2 className="headline">Trabajo que parte de una necesidad, no de una plantilla.</h2>
          <p className="lede">Una selección de productos digitales y experiencias construidas desde el problema hasta su uso real. Cada lámina abre una conversación directa.</p>
        </Reveal>
        <div className="project-grid" aria-label="Proyectos seleccionados">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80} className={`project-plate-wrap${project.featured ? " project-plate-wrap-featured" : ""}`}>
              <a className="project-plate" href={project.href ?? `${waBase}${encodeURIComponent(`Hola Tomás, vi el proyecto ${project.title} en tu web y quiero consultarte.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}: ${project.description} — ${project.href ? "Visitar landing" : "Consultar por WhatsApp"}`}>
                <div className={`project-media${project.images.length > 1 ? " project-media-gallery" : ""}`}>
                  {project.images.map((image, imageIndex) => (
                    <div className="project-shot" key={image}>
                      <Image src={image} alt={imageIndex === 0 ? `Captura del proyecto ${project.title}` : ""} aria-hidden={imageIndex > 0} fill sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, 33vw" />
                    </div>
                  ))}
                </div>
                <div className="project-copy">
                  <span className="cota project-category">{project.category}</span>
                  <h3 className="title-md">{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="cota cota-violet project-action">{project.href ? "Visitar landing" : "Consultar por WhatsApp"}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal><div className="plate-rule" style={{ marginTop: 72 }}><span className="rule-line" /><span className="plate-label">Continuación en Lámina 05</span><span className="rule-line" /></div></Reveal>
      </div>
    </section>
  );
}
