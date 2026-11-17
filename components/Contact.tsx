import { CopyEmail } from "./CopyEmail";

export function Contact() {
  return <section className="band ink on-ink contact" id="contacto"><div className="wrap">
    <p className="cota cota-amber">04 / Contacto</p>
    <h2><span>¿Hablamos?</span></h2>
    <p className="lede">Sobre mi recorrido, un proyecto o una oportunidad de trabajo.</p>
    <div className="contact-actions">
      <a className="btn" href="https://wa.me/5493412639357?text=Hola%20Tom%C3%A1s%2C%20te%20escribo%20desde%20tu%20web." target="_blank" rel="noopener noreferrer">Escribirme por WhatsApp</a>
      <CopyEmail email="desarrolloneticar@gmail.com" />
      <a className="tlink" href="/cv">Ver CV<span aria-hidden="true">↗</span></a>
    </div>
  </div></section>;
}
