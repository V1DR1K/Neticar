import Image from "next/image";

export function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <a href="#inicio" className="footer-brand" aria-label="Neticar, volver al inicio">
          <Image src="/images/logo-icon.png" alt="" width={500} height={500} />
          <span>Neticar</span>
        </a>
        <p>© {new Date().getFullYear()} Neticar. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
