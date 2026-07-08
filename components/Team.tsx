import Image from "next/image";
import { Reveal } from "./Reveal";

const members = [
  {
    name: "Tomás Colombo",
    role: "Desarrollador Full Stack & IA",
    bio: "Desarrollador full stack con dos años de experiencia profesional y en proyectos propios. Actualmente cursa el último año de la Tecnicatura Universitaria en Inteligencia Artificial de la UNR en Rosario, combinando desarrollo de software con soluciones inteligentes.",
    image: "/images/tomas-colombo.png",
  },
];

export function Team() {
  return (
    <section className="section team" id="nosotros">
      <div className="container narrow">
        <Reveal className="section-heading">
          <h2>El <span>Equipo</span></h2>
          <p>Talento técnico y creatividad visual trabajando en conjunto.</p>
        </Reveal>
        <div className="team-grid">
          {members.map((member, index) => (
            <Reveal className="team-card" key={member.name} delay={index * 100}>
              <Image
                className="team-photo"
                src={member.image}
                alt={member.name}
                width={132}
                height={132}
              />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p>{member.bio}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
