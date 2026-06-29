import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neticar | Innovación en Desarrollo",
  description:
    "Conocé los proyectos digitales de Neticar y creemos juntos soluciones de alto impacto.",
  metadataBase: new URL("https://neticar.vercel.app"),
  openGraph: {
    title: "Neticar | Proyectos Digitales",
    description: "Tecnología y diseño para crear soluciones digitales de alto impacto.",
    type: "website",
    locale: "es_AR",
  },
  icons: { icon: "/images/neticar-mark.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08080c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
