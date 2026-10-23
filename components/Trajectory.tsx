import { Reveal } from "./Reveal";

type TrajectoryEntry = { period: string; organization: string; role: string; detail: string; technologies?: string[] };

const trajectory: TrajectoryEntry[] = [
  {
    period: "Junio 2024 — Hoy · Jornada completa",
    organization: "CISB SRL",
    role: "Programador Full Stack",
    detail: "Participo en proyectos de gestión contable, facturación, logística, análisis y procesamiento de grandes volúmenes de datos y biometría. Mi recorrido en el equipo también incluye CRM y ERP, integraciones de APIs, automatización y despliegues en servidores productivos.",
    technologies: ["Java", "Spring Boot", "Java Swing", "Angular", "React", "JavaScript", "TypeScript", "Pruebas", "ORM", "MySQL", "PostgreSQL", "Docker", "GitHub", "APIs", "IA / LLMs"],
  },
  {
    period: "2024 — Hoy · Último año",
    organization: "Facultad de Ciencias Agrarias e Ingeniería",
    role: "Tecnicatura en Inteligencia Artificial",
    detail: "Formación en inteligencia artificial. Actualmente curso el último año.",
  },
  {
    period: "Noviembre — diciembre 2023 · 2 meses",
    organization: "MangooDev",
    role: "Pasantía de desarrollo de software",
    detail: "Realicé tareas de programación como parte del equipo de desarrollo.",
  },
  {
    period: "Egresado",
    organization: "Instituto Politécnico Superior de Rosario",
    role: "Técnico Informático",
    detail: "Formación técnica con especialidad en Informática.",
  },
];

export function Trajectory() {
  return <section className="section section-deep" id="recorrido"><div className="container">
    <Reveal><p className="cota cota-amber">03 / Recorrido</p></Reveal>
    <div className="trajectory-layout" style={{ marginTop: 64 }}><Reveal className="trajectory-intro"><h2 className="headline">Código, formación y experiencia.</h2><p className="lede">Empecé mi recorrido en la especialidad de Informática del Politécnico. En el último año hice una pasantía de programación; después comencé la Tecnicatura en Inteligencia Artificial y me sumé a CISB, donde hoy trabajo a jornada completa.</p></Reveal><div className="timeline">{trajectory.map((entry, index) => (<Reveal className="timeline-entry" key={`${entry.organization}-${entry.role}`} delay={index * 80}><p className="cota timeline-period">{entry.period}</p><p className="cota timeline-organization">{entry.organization}</p><h3 className="title-md">{entry.role}</h3><div className="timeline-detail"><div><div><p>{entry.detail}</p>{entry.technologies && <div className="technology-list">{entry.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>}</div></div></div></Reveal>))}</div></div>
  </div></section>;
}
