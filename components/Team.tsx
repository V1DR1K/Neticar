import Image from "next/image";
import { Reveal } from "./Reveal";

export function Team() {
  return <section className="section team" id="nosotros"><div className="container profile-layout"><Reveal className="profile-image-wrap"><Image className="profile-image" src="/images/tomas-colombo.png" alt="Tomás Colombo" width={640} height={640} /></Reveal><Reveal className="profile-copy" delay={120}><h2>Detrás de Neticar está <span>Tomás Colombo.</span></h2><p>Desarrollador Full Stack y responsable técnico. Combino formación en inteligencia artificial con experiencia construyendo software e integrando sistemas que sostienen operaciones reales.</p><a className="text-link" href="#recorrido">Conocer el recorrido</a></Reveal></div></section>;
}
