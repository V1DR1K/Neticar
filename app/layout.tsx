import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Neticar | Software a medida",
  description: "Neticar desarrolla software a medida para PyMEs y fundadores. Sistemas, productos e integraciones para necesidades concretas.",
  metadataBase: new URL("http://207.180.192.171"),
  openGraph: {
    title: "Neticar | Software a medida",
    description: "Soluciones digitales, integraciones y productos para necesidades concretas.",
    type: "website",
    locale: "es_AR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Neticar — Software a medida para problemas reales" }],
  },
  icons: { icon: "/images/neticar-mark.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#08080c" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}><body>
    {/* THESIS: Neticar refuses the generic dark agency landing; the page is a technical drawing produced in violet ink on a black sheet, where proof is measured, not dimmed.
        OWN-WORLD: Black NETICAR sheet #08080C, violet ink #8A00D6/#A929E8/#6500C8 as the only color voice, paper-white type; graticule, dimension lines, leader callouts, corner ticks and title blocks as the grammar.
        STORY: The founder reads the sheet, sees the problem-to-solution diagonal drawn, inspects each project plate at full fidelity, and writes his need to WhatsApp.
        FIRST VIEWPORT: The headline sits left on a graticule field; the hero drawing draws itself beside it — a problem node joined to a solution node by the N diagonal, dimensioned; the CTA sits beneath as a title block.
        FORM: El Plano (violetprint), grounded direction 1 of the c261e412 roll, user-pinned palette beats the roll.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md */}
    <div dangerouslySetInnerHTML={{ __html: "<!-- THESIS: Neticar refuses the generic dark agency landing; the page is a technical drawing produced in violet ink on a black sheet, where proof is measured, not dimmed. OWN-WORLD: Black NETICAR sheet #08080C, violet ink #8A00D6/#A929E8/#6500C8 as the only color voice, paper-white type; graticule, dimension lines, leader callouts, corner ticks and title blocks as the grammar. STORY: The founder reads the sheet, sees the problem-to-solution diagonal drawn, inspects each project plate at full fidelity, and writes his need to WhatsApp. FIRST VIEWPORT: The headline sits left on a graticule field; the hero drawing draws itself beside it — a problem node joined to a solution node by the N diagonal, dimensioned; the CTA sits beneath as a title block. FORM: El Plano (violetprint), grounded direction 1 of the c261e412 roll, user-pinned palette beats the roll. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->" }} />
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    {children}
  </body></html>;
}
