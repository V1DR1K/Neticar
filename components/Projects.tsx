import Image from "next/image";
import { Reveal } from "./Reveal";

const projects = [
  { title: "Kaza", category: "PropTech", image: "/images/project-kaza.png", description: "Experiencia digital para explorar y conectar oportunidades inmobiliarias." },
  { title: "KazaFitness", category: "HealthTech", image: "/images/project-kazafitness.png", description: "Una herramienta enfocada en hábitos, seguimiento y bienestar cotidiano." },
  { title: "ServiCerca", category: "Servicios", image: "/images/project-servicerca.png", description: "Una propuesta digital para acercar servicios a quienes los necesitan." },
  { title: "HGFull", category: "Servicios", image: "/images/project-hgfull.png", description: "Solución orientada a ordenar una operación de servicios." },
  { title: "Chiquitines", category: "E-commerce", image: "/images/project-chiquitines.png", description: "Una experiencia de compra pensada para una marca cercana." },
];

export function Projects() {
  return <section className="section projects" id="proyectos"><div className="container"><Reveal className="section-heading section-heading-left"><h2>Trabajo que parte de una necesidad, no de una plantilla.</h2><p>Una selección de productos digitales y experiencias construidas desde el problema hasta su uso real.</p></Reveal><div className="project-grid" aria-label="Proyectos seleccionados">{projects.map((project, index) => <Reveal key={project.title} delay={index * 90} className="project-card"><Image src={project.image} alt={project.title} fill sizes="(max-width: 800px) 50vw, 33vw" /><div className="project-copy"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div></Reveal>)}</div></div></section>;
}
