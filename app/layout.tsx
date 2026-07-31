import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Tomás Colombo — Software a medida | Neticar",
  description: "Tomás Colombo, desarrollador Full Stack y responsable técnico de Neticar. Software a medida, sistemas, productos e integraciones para necesidades concretas.",
  metadataBase: new URL("http://207.180.192.171"),
  openGraph: {
    title: "Tomás Colombo — Software a medida | Neticar",
    description: "Desarrollador Full Stack. Neticar: soluciones digitales, integraciones y productos para necesidades concretas.",
    type: "website",
    locale: "es_AR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Neticar — Software a medida para problemas reales" }],
  },
  icons: { icon: "/images/neticar-mark.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#08080c" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}><body>
    {/* THESIS: Neticar is a one-person studio, and the page is its CV as a technical drawing: Tomás Colombo signs first, the work is measured proof. Neticar and the person are 50/50.
        OWN-WORLD: Black NETICAR sheet #08080C, violet ink #8A00D6/#A929E8/#6500C8 as the only color voice, paper-white type; graticule, dimension lines, leader callouts, corner ticks and title blocks as the grammar.
        STORY: The reader meets Tomás first (signature, portrait, recorrido), then inspects each project plate at full fidelity, and writes his need to WhatsApp.
        FIRST VIEWPORT: The name sits above the headline on a graticule field; the hero drawing draws itself beside it — a problem node joined to a solution node by the N diagonal, dimensioned; the CTA sits beneath as a title block.
        FORM: El Plano (violetprint), grounded direction 1 of the c261e412 roll, user-pinned palette beats the roll; second pass pinned by the user: person-first CV ordering, Lámina 02 Perfil, 03 Recorrido, 04 Trabajo, 05 Contacto; third pass pinned by the user: the trajectory is never collapsible — every entry stays fully visible, no toggles, no hidden content.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md */}
    <div dangerouslySetInnerHTML={{ __html: "<!-- THESIS: Neticar is a one-person studio, and the page is its CV as a technical drawing: Tomás Colombo signs first, the work is measured proof. Neticar and the person are 50/50. OWN-WORLD: Black NETICAR sheet #08080C, violet ink #8A00D6/#A929E8/#6500C8 as the only color voice, paper-white type; graticule, dimension lines, leader callouts, corner ticks and title blocks as the grammar. STORY: The reader meets Tomás first (signature, portrait, recorrido), then inspects each project plate at full fidelity, and writes his need to WhatsApp. FIRST VIEWPORT: The name sits above the headline on a graticule field; the hero drawing draws itself beside it — a problem node joined to a solution node by the N diagonal, dimensioned; the CTA sits beneath as a title block. FORM: El Plano (violetprint), grounded direction 1 of the c261e412 roll, user-pinned palette beats the roll; second pass pinned by the user: person-first CV ordering, Lámina 02 Perfil, 03 Recorrido, 04 Trabajo, 05 Contacto; third pass pinned by the user: the trajectory is never collapsible — every entry stays fully visible, no toggles, no hidden content. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->" }} />
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    {children}
  </body></html>;
}
