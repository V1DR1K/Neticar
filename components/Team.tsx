import Image from "next/image";
import { Reveal } from "./Reveal";

export function Team() {
  return <section className="section section-raised" id="nosotros"><div className="container profile-layout"><Reveal className="profile-image-wrap"><Image className="profile-image" src="/images/tomas-colombo.png" alt="Tomás Colombo, responsable técnico de Neticar" width={640} height={640} /><p className="cota cota-muted profile-caption">Tomás Colombo · Responsable técnico</p></Reveal><Reveal className="profile-copy" delay={120}><p className="cota cota-violet">Lámina 04 · Perfil</p><h2 className="headline">Detrás de Neticar está <span>Tomás Colombo.</span></h2><p className="lede">Desarrollador Full Stack y responsable técnico. Combino formación en inteligencia artificial con experiencia construyendo software e integrando sistemas que sostienen operaciones reales.</p><a className="text-link" href="#recorrido">Conocer el recorrido<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 2v11M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" /></svg></a></Reveal></div></section>;
}
