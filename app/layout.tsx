import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Black, Changa_One, Inter_Tight, JetBrains_Mono, Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const sourceSans3 = Source_Sans_3({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-mono", display: "swap" });
/* tipografías propias de cada producto, usadas solo en sus portadas */
const changaOne = Changa_One({ subsets: ["latin"], weight: "400", variable: "--font-changa", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], axes: ["wdth"], variable: "--font-archivo", display: "swap" });
const interTight = Inter_Tight({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-inter-tight", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-outfit", display: "swap" });

const fontVariables = [archivoBlack, sourceSans3, jetBrainsMono, changaOne, archivo, interTight, outfit].map((font) => font.variable).join(" ");

/* aplica el tema guardado antes de pintar, para evitar un destello del tema equivocado */
const themeScript = `try{var t=localStorage.getItem("neticar-theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export const metadata: Metadata = {
  title: "Tomás Colombo — Desarrollador Full Stack | Neticar",
  description: "Conocé a Tomás Colombo: desarrollador Full Stack en Rosario, sus productos propios, su trabajo en CISB y sus proyectos de inteligencia artificial.",
  metadataBase: new URL("https://neticar.com.ar"),
  openGraph: {
    title: "Tomás Colombo — Desarrollador Full Stack | Neticar",
    description: "Recorrido, productos propios y proyectos de inteligencia artificial de Tomás Colombo, desarrollador Full Stack en Rosario.",
    type: "website",
    locale: "es_AR",
    images: [{ url: "/og-personal.png", width: 1200, height: 630, alt: "Tomás Colombo — presentación personal y portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomás Colombo — Desarrollador Full Stack | Neticar",
    description: "Recorrido, productos propios y proyectos de inteligencia artificial de Tomás Colombo, desarrollador Full Stack en Rosario.",
    images: ["/og-personal.png"],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#F3ECDD" }, { media: "(prefers-color-scheme: dark)", color: "#0F0E0C" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={fontVariables} suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
    <body>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      {children}
    </body>
  </html>;
}
