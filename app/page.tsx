import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MotionEffects } from "@/components/MotionEffects";
import { Navigation } from "@/components/Navigation";
import { Trajectory } from "@/components/Trajectory";
import { Work } from "@/components/Work";

export default function Home() {
  return <>
    <Navigation />
    <main id="contenido"><Hero /><Trajectory /><Work /><Contact /></main>
    <Footer />
    <MotionEffects />
  </>;
}
