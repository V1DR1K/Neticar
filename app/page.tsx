import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { Team } from "@/components/Team";
import { Trajectory } from "@/components/Trajectory";

export default function Home() {
  return <><Navigation /><main id="contenido"><Hero /><Team /><Trajectory /><Projects /><Contact /></main><Footer /></>;
}
