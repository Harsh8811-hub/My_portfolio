import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const body = document.body;
      body.style.setProperty("--x", `${e.clientX}px`);
      body.style.setProperty("--y", `${e.clientY}px`);
      body.classList.add("cursor-glow");
    };

    const handleMouseLeave = () => {
      document.body.classList.remove("cursor-glow");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative pt-20 md:pt-12">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
