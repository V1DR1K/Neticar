import Image from "next/image";
import { Reveal } from "./Reveal";

const projects = [
  { title: "Kaza", category: "Inmobiliaria", image: "/images/project-kaza.png", description: "Experiencia digital para explorar y conectar oportunidades inmobiliarias." },
  { title: "KazaFitness", category: "Salud y hábitos", image: "/images/project-kazafitness.png", description: "Una herramienta enfocada en hábitos, seguimiento y bienestar cotidiano." },
  { title: "ServiCerca", category: "Servicios", image: "/images/project-servicerca.png", description: "Una propuesta digital para acercar servicios a quienes los necesitan." },
  { title: "HGFull", category: "Operaciones", image: "/images/project-hgfull.png", description: "Solución orientada a ordenar una operación de servicios." },
  { title: "Chiquitines", category: "E-commerce", image: "/images/project-chiquitines.png", description: "Una experiencia de compra pensada para una marca cercana." },
];

const waBase = "https://wa.me/543412639357?text=";

export function Projects() {
  return <section className="section section-raised" id="proyectos"><div className="container">
    <Reveal className="section-head"><p className="cota cota-violet">Lámina 02 · Trabajo</p><h2 className="headline">Trabajo que parte de una necesidad, no de una plantilla.</h2><p className="lede">Una selección de productos digitales y experiencias construidas desde el problema hasta su uso real. Cada lámina abre una conversación directa.</p></Reveal>
    <div className="project-grid" aria-label="Proyectos seleccionados">{projects.map((project, index) => <Reveal key={project.title} delay={index * 80} className="project-plate-wrap"><a className="project-plate" href={`${waBase}${encodeURIComponent(`Hola Tomás, vi el proyecto ${project.title} en tu web y quiero consultarte.`)}`} target="_blank" rel="noopener noreferrer" aria-label={`${project.title}: ${project.description} — Consultar por WhatsApp`}><div className="project-media"><Image src={project.image} alt={`Captura del proyecto ${project.title}`} fill sizes="(max-width: 540px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><div className="project-copy"><span className="cota project-category">{project.category}</span><h3 className="title-md">{project.title}</h3><p>{project.description}</p><span className="cota cota-violet project-action">Consultar por WhatsApp</span></div></a></Reveal>)}</div>
    <Reveal><div className="plate-rule" style={{ marginTop: 72 }}><span className="rule-line" /><span className="plate-label">Continuación en Lámina 03</span><span className="rule-line" /></div></Reveal>
  </div></section>;
}
