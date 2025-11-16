import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TableOfContents from "@/components/TableOfContents";
import Introduction from "@/components/Introduction";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Ethics from "@/components/Ethics";
import Future from "@/components/Future";
import Conclusion from "@/components/Conclusion";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");
  
  const sections = [
    { id: "hero", label: "Home" },
    { id: "contents", label: "Contents" },
    { id: "introduction", label: "Introduction" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "leadership", label: "Leadership" },
    { id: "ethics", label: "Global Awareness" },
    { id: "future", label: "Future Goals" },
    { id: "conclusion", label: "Conclusion" },
    { id: "testimonials", label: "Testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <main className="relative overflow-hidden">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} sections={sections} />
      <div className="pt-16">
        <Hero />
        <TableOfContents scrollToSection={scrollToSection} sections={sections} />
        <Introduction />
        <Resume />
        <Projects />
        <Skills />
        <Leadership />
        <Ethics />
        <Future />
        <Conclusion />
        <Testimonials />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
