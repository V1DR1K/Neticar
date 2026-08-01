import { Reveal } from "./Reveal";

type TrajectoryEntry = { period: string; organization: string; role: string; detail: string; technologies?: string[] };

const trajectory: TrajectoryEntry[] = [
  { period: "Jun 2024 — Hoy", organization: "CISB SRL", role: "Programador Junior Full Stack", detail: "Participación en soluciones de gestión, facturación e integraciones con APIs de Meta (WhatsApp, Instagram y Facebook), junto con automatización de procesos. Desarrollo de plataformas para control de asistencia con registro biométrico, gestión de raciones mediante lectura QR y trazabilidad de ensayos y consumo por radiofrecuencia, integrando IA en los flujos cuando aporta valor al proceso.", technologies: ["Java", "Java Swing", "Angular", "Docker", "Git", "JavaScript", "TypeScript", "Hibernate / Jakarta", "MySQL", "PostgreSQL"] },
  { period: "En curso", organization: "Facultad de Ciencias Agrarias e Ingeniería", role: "Técnico en Inteligencia Artificial", detail: "Formación terciaria en inteligencia artificial aplicada." },
  { period: "6 meses", organization: "MangooDev", role: "Pasantías de desarrollo de software", detail: "Desarrollo de soluciones de software dentro de un equipo profesional." },
  { period: "Egresado", organization: "Instituto Politécnico Superior de Rosario", role: "Técnico Informático", detail: "Formación secundaria técnica en informática." },
];

export function Trajectory() {
  return <section className="section section-deep" id="recorrido"><div className="container">
    <Reveal><div className="plate-rule"><span className="rule-line" /><span className="plate-label">Lámina 03 · Recorrido</span><span className="rule-line" /></div></Reveal>
    <div className="trajectory-layout" style={{ marginTop: 64 }}><Reveal className="trajectory-intro"><h2 className="headline">Mi recorrido: experiencia previa construida entre código, producto y sistemas.</h2><p className="lede">Formación técnica continua y trabajo en desafíos de software concretos, desde la secundaria técnica hasta proyectos en producción.</p></Reveal><div className="timeline">{trajectory.map((entry, index) => (<Reveal className="timeline-entry" key={`${entry.organization}-${entry.role}`} delay={index * 80}><p className="cota timeline-period">{entry.period}</p><p className="cota cota-violet timeline-organization">{entry.organization}</p><h3 className="title-md">{entry.role}</h3><div className="timeline-detail"><div><div><p>{entry.detail}</p>{entry.technologies && <div className="technology-list">{entry.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>}</div></div></div></Reveal>))}</div></div>
  </div></section>;
}
