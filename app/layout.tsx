import type { Metadata, Viewport } from "next";
import { Archivo_Black, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const sourceSans3 = Source_Sans_3({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Tomás Colombo — Desarrollador Full Stack | Neticar",
  description: "Conocé a Tomás Colombo: su recorrido, los proyectos en los que participa y su trabajo como desarrollador Full Stack en Rosario.",
  metadataBase: new URL("https://neticar.com.ar"),
  openGraph: {
    title: "Tomás Colombo — Desarrollador Full Stack | Neticar",
    description: "Recorrido, productos propios y trabajo de Tomás Colombo, desarrollador Full Stack en Rosario.",
    type: "website",
    locale: "es_AR",
    images: [{ url: "/og-personal.png", width: 1200, height: 630, alt: "Tomás Colombo — presentación personal y portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomás Colombo — Desarrollador Full Stack | Neticar",
    description: "Recorrido, productos propios y trabajo de Tomás Colombo, desarrollador Full Stack en Rosario.",
    images: ["/og-personal.png"],
  },
  icons: { icon: "/images/neticar-mark.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F3ECDD" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${archivoBlack.variable} ${sourceSans3.variable}`}><body>
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    {children}
  </body></html>;
}
