import Image from "next/image";
import { Reveal } from "./Reveal";

const projects = [
  { title: "Plataforma Nexus", category: "Fintech", image: "/images/project-nexus.png" },
  { title: "Nova Store App", category: "E-Commerce", image: "/images/project-nova.png" },
  { title: "Sistema Órbita", category: "Smart City", image: "/images/project-orbita.png" },
];

export function Projects() {
  return (
    <section className="section projects" id="proyectos">
      <div className="container">
        <Reveal className="section-heading">
          <h2>Vista previa de <span>Proyectos</span></h2>
          <p>Explorá nuestro portafolio de soluciones digitales de alto impacto.</p>
        </Reveal>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100} className="project-card">
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 767px) 100vw, 33vw" />
              <div className="card-overlay" />
              <div className="project-copy">
                <span className="tag">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
