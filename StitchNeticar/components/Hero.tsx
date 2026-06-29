import Image from "next/image";
import { ShaderCanvas } from "./ShaderCanvas";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <ShaderCanvas />
      <div className="hero-shade" />
      <div className="hero-content">
        <Image className="hero-logo" src="/images/logo-icon.png" alt="Símbolo de Neticar" width={500} height={500} priority />
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
