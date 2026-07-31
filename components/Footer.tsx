import Image from "next/image";

export function Footer() {
  return <footer><div className="container footer-inner"><a href="#inicio" className="footer-brand" aria-label="Neticar, volver al inicio"><Image src="/images/neticar-signature.png" alt="" width={500} height={500} /></a><a className="footer-contact" href="https://wa.me/543412639357?text=Hola%20Tom%C3%A1s%2C%20te%20escribo%20desde%20la%20web%20de%20Neticar." target="_blank" rel="noopener noreferrer">WhatsApp +54 341 263 9357</a><p>© {new Date().getFullYear()} Neticar · Rosario, Argentina</p></div></footer>;
}
