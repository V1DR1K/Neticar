import Image from "next/image";
import { Reveal } from "./Reveal";

const members = [
  {
    name: "Alex Rivera",
    role: "CEO & Lead Dev",
    bio: "Arquitecto de soluciones con más de 10 años impulsando startups hacia el futuro digital.",
    image: "/images/alex-rivera.png",
  },
  {
    name: "Sam Taylor",
    role: "CTO & Fullstack",
    bio: "Especialista en arquitecturas descentralizadas y optimización de rendimiento extremo.",
    image: "/images/sam-taylor.png",
  },
];

export function Team() {
  return (
    <section className="section team" id="nosotros">
      <div className="container narrow">
        <Reveal className="section-heading">
          <h2>El <span>Equipo</span></h2>
          <p>Las mentes detrás de la innovación.</p>
        </Reveal>
        <div className="team-grid">
          {members.map((member, index) => (
            <Reveal className="team-card" key={member.name} delay={index * 100}>
              <div className="portrait">
                <Image src={member.image} alt={member.name} fill sizes="128px" />
              </div>
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
