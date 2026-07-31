import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Neticar | Software a medida",
  description: "Neticar desarrolla software a medida para PyMEs y fundadores.",
  metadataBase: new URL("https://neticar.vercel.app"),
  openGraph: { title: "Neticar | Software a medida", description: "Soluciones digitales, integraciones y productos para necesidades concretas.", type: "website", locale: "es_AR" },
  icons: { icon: "/images/neticar-mark.png" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0a0a0d" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}><body>
    {/* THESIS: Neticar rejects the generic agency landing page for a nocturnal technical record of real work.
        OWN-WORLD: Graphite fields, precise rules, restrained violet and editorial type create its quiet authority.
        STORY: Founders recognize a capable technical partner, inspect proof, and start a direct conversation.
        FIRST VIEWPORT: The offer fills the left field; the project action sits directly beneath it.
        FORM: Premium dark technical archive, seed 9e3d5ff2.
        FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md */}
    {children}
  </body></html>;
}
