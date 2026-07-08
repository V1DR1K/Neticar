import Image from "next/image";
import { Reveal } from "./Reveal";

const projects = [
  { title: "Kaza", category: "PropTech", image: "/images/project-kaza.png" },
  { title: "KazaFitness", category: "HealthTech", image: "/images/project-kazafitness.png" },
  { title: "ServiCerca", category: "Servicios", image: "/images/project-servicerca.png" },
  { title: "HGFull", category: "Servicios", image: "/images/project-hgfull.png" },
  { title: "Chiquitines", category: "E-Commerce", image: "/images/project-chiquitines.png" },
];

export function Projects() {
  return (
    <section className="section projects" id="proyectos">
      <div className="container">
        <Reveal className="section-heading">
          <h2>Vista previa de <span>Proyectos</span></h2>
          <p>Explorá nuestro portafolio de soluciones digitales de alto impacto.</p>
        </Reveal>
        <div className="project-grid" aria-label="Carrusel de proyectos reales">
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
