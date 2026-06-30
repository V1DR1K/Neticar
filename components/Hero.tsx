import Image from "next/image";
import { ShaderCanvas } from "./ShaderCanvas";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <ShaderCanvas />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="hero-brand" aria-label="Neticar Desarrollos">
          <Image className="hero-logo" src="/images/neticar-mark.png" alt="Monograma de Neticar" width={1500} height={1500} priority />
          <div className="hero-wordmark" aria-hidden="true">
            <span>NETICAR</span>
            <small>DESARROLLOS</small>
          </div>
        </div>
        <h1>Nuestros<br /><span>Proyectos Digitales</span></h1>
        <p>Un espacio donde compartimos lo que podemos crear juntos. Explorando tecnología y diseño en equipo.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#proyectos">Explorar</a>
          <a className="button button-secondary" href="#contacto">Escribinos</a>
        </div>
      </div>
      <a className="scroll-indicator" href="#proyectos" aria-label="Ir a proyectos">⌄</a>
    </section>
  );
}
