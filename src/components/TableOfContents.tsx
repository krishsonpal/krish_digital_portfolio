"use client";

import { useEffect, useRef } from "react";

interface TableOfContentsProps {
  scrollToSection: (id: string) => void;
  sections: Array<{ id: string; label: string }>;
}

const TableOfContents = ({ scrollToSection, sections }: TableOfContentsProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contents"
      ref={sectionRef}
      className="py-20 px-4 bg-slate-800/20 backdrop-blur-xl min-h-screen flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full reveal">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Contents
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.slice(1).map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="
                p-4 rounded-lg 
                backdrop-blur-xl bg-white/5 
                border border-cyan-500/20
                transition-all duration-300 group text-left
                hover:border-cyan-500/50 
                hover:bg-cyan-500/10 
                hover:-translate-y-2 
                hover:shadow-[0_0_25px_rgba(56,189,248,0.5),0_0_40px_rgba(168,85,247,0.4)]
              "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3">
                {/* Gradient Number Box */}
                <div className="
                  w-10 h-10 rounded-lg 
                  bg-gradient-to-br from-cyan-400 to-purple-400 
                  flex items-center justify-center 
                  text-slate-900 font-bold text-sm
                ">
                  {index + 1}
                </div>

                {/* Label */}
                <span className="text-slate-300 group-hover:text-cyan-400 font-medium transition-colors">
                  {section.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
