const traits = [
  { title: "Aprendo", text: "y aplico tecnologías nuevas" },
  { title: "Construyo", text: "proyectos propios en paralelo" },
  { title: "Mejoro", text: "con críticas y nuevos intentos" },
  { title: "Comparto", text: "y trabajo en equipo" },
];

export function Trajectory() {
  return <section className="band ink on-ink" id="recorrido"><div className="wrap">
    <div className="sec-head"><p className="cota cota-amber">02 / Recorrido</p><h2>Código, formación y experiencia.</h2></div>
    <div className="about">
      <p>Me interesa aprender tecnologías nuevas y, sobre todo, aplicarlas. Me gusta estar siempre construyendo algo: por eso, además del trabajo, desarrollo proyectos propios donde pongo en práctica lo que aprendo en CISB y en la facultad.</p>
      <p>Si algo puede mejorarse, no tengo problema en volver a empezar. Tomo las críticas como un impulso para mejorar mi trabajo. Soy comunicativo y disfruto trabajar en equipo.</p>
      <ul className="traits" aria-label="Cómo trabajo">{traits.map((trait) => <li key={trait.title}><b>{trait.title}</b><span>{trait.text}</span></li>)}</ul>
    </div>
    <div className="rail" aria-label="Recorrido en orden cronológico">
      <article className="node rv"><p className="when">Egresado</p><span className="org">Politécnico de Rosario</span><h3>Técnico Informático</h3><p>Especialidad en Informática.</p></article>
      <article className="node rv"><p className="when">Nov — dic 2023</p><span className="org">MangooDev · 2 meses</span><h3>Pasantía de desarrollo</h3><p>Programación dentro del equipo.</p></article>
      <div className="fork" aria-hidden="true"><svg viewBox="0 0 34 100" preserveAspectRatio="none"><path vectorEffect="non-scaling-stroke" d="M0 50 C17 50 17 25 34 25 M0 50 C17 50 17 75 34 75" /></svg></div>
      <div className="par">
        <article className="node node-now rv"><p className="when">Junio 2024 — Hoy</p><span className="org">CISB SRL · Jornada completa</span><h3>Programador Full Stack</h3><p>Gestión, facturación, logística, datos y APIs.</p></article>
        <span className="par-label">En paralelo</span>
        <article className="node node-now rv"><p className="when">2024 — Hoy · Último año</p><span className="org">Fac. de Ciencias Agrarias e Ingeniería</span><h3>Tecnicatura en IA</h3><p>Datos, visión y aprendizaje automático en Python.</p></article>
      </div>
      <div className="fork" aria-hidden="true"><svg viewBox="0 0 34 100" preserveAspectRatio="none"><path vectorEffect="non-scaling-stroke" strokeDasharray="4 4" d="M0 75 L34 75" /></svg></div>
      <article className="node node-next rv"><p className="when">Próximo paso</p><span className="org">Universidad Nacional de Rosario</span><h3>Licenciatura en Aplicaciones de IA</h3><p>Aplicar IA en productos y sistemas reales.</p></article>
    </div>
  </div></section>;
}
