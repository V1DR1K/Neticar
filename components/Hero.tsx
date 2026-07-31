import Image from "next/image";

export function Hero() {
  return <section id="inicio" className="hero"><div className="hero-content"><Image className="hero-mark" src="/images/neticar-mark.png" alt="Neticar" width={128} height={128} priority /><h1>Software a medida para <em>problemas reales.</em></h1><p className="hero-summary">Diseño y desarrollo sistemas, productos e integraciones para que PyMEs y fundadores conviertan una necesidad operativa en una solución concreta.</p><div className="hero-actions"><a className="button button-primary" href="#contacto">Hablemos de tu proyecto</a><a className="text-link" href="#proyectos">Ver trabajo seleccionado</a></div></div><div className="hero-index" aria-hidden="true"><span>ROSARIO, AR</span><span>2026</span></div></section>;
}
