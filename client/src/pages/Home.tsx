import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Tools } from "@/components/Tools";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Tools />
      <Contact />
    </div>
  );
}
