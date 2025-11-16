import { useEffect, useRef } from "react";
import {
  GraduationCap,
  Code,
  Database,
  Award,
  Heart,
  Languages,
  Globe,
  FileText, // Import a relevant icon for 'View Resume'
} from "lucide-react";

const Resume = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" ref={sectionRef} className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">

        {/* Title and View Resume Button */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-6 neon-text reveal">
            Resume / CV
          </h2>
          {/* View Resume Button - Placed centrally below the title for prominence */}
          <a
            href="https://drive.google.com/file/d/1Q-EKc9sKIPmzhCnTnO_t6f_1Zk9eLBNn/view?usp=sharing" // Fake link: Replace with actual resume link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-full transition-all duration-300 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/50 reveal"
          >
            <FileText className="w-5 h-5" />
            View Full Resume
          </a>
        </div>


        {/* ------------------------ EDUCATION ------------------------ */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-heading font-semibold">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card-hover p-6 rounded-2xl space-y-2">
              <h4 className="text-xl font-heading font-bold text-primary">
                B.Tech Computer Science Engineering
              </h4>
              <p className="text-muted-foreground">PDEU Gandhinagar</p>
              <p className="text-2xl font-bold text-accent">CGPA: 9.87<small>(Till 4<sup>th</sup> Sem)</small></p>
            </div>

            <div className="glass-card-hover p-6 rounded-2xl space-y-2">
              <h4 className="text-xl font-heading font-bold text-secondary">
                JEE Main 2023
              </h4>
              <p className="text-muted-foreground">National Engineering Entrance</p>
              <p className="text-2xl font-bold text-accent">96.7%ile</p>
            </div>

            <div className="glass-card-hover p-6 rounded-2xl space-y-2">
              <h4 className="text-xl font-heading font-bold text-primary">Class 12 (2023)</h4>
              <p className="text-muted-foreground">Gujarat Board</p>
              <p className="text-2xl font-bold text-accent">88.39%ile</p>
            </div>

            <div className="glass-card-hover p-6 rounded-2xl space-y-2">
              <h4 className="text-xl font-heading font-bold text-secondary">Class 10 (2021)</h4>
              <p className="text-muted-foreground">Gujarat Board</p>
              <p className="text-2xl font-bold text-accent">99.37%ile</p>
            </div>
          </div>
        </div>

        {/* ------------------------ TECHNICAL SKILLS ------------------------ */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-8 h-8 text-secondary" />
            <h3 className="text-3xl font-heading font-semibold">Technical Skills</h3>
          </div>

          {/* programming / web / data science */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl space-y-3">
              <h4 className="font-heading font-semibold text-lg text-primary">Programming</h4>
              <div className="flex flex-wrap gap-2">
                {["C", "C++", "Python", "Java", "JavaScript"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-3">
              <h4 className="font-heading font-semibold text-lg text-secondary">Web Development</h4>
              <div className="flex flex-wrap gap-2">
                {["Flask", "FastAPI", "React", "HTML", "CSS"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-secondary/20 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-3">
              <h4 className="font-heading font-semibold text-lg text-accent">Data Science</h4>
              <div className="flex flex-wrap gap-2">
                {["Pandas", "NumPy", "Matplotlib", "Seaborn"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-accent/20 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools + Certifications */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="glass-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-primary" />
                <h4 className="font-heading font-semibold text-lg">Databases & Tools</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "SQLite", "Git", "Arduino IDE", "LangChain"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl space-y-3">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-secondary" />
                <h4 className="font-heading font-semibold text-lg">Core Certifications</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• CS50 — Introduction to Programming with Python</li>
                <li>• CS50 — Introduction to Computer Science</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ------------------------ NEW SECTION: LANGUAGES ------------------------ */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-heading font-semibold">Languages</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {["English (Fluent)", "Hindi (Fluent)", "Gujarati (Native)"].map(lang => (
              <div
                key={lang}
                className="glass-card-hover p-5 rounded-2xl text-center font-medium text-slate-200"
              >
                {lang}
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------ NEW SECTION: EXTRA CERTIFICATIONS ------------------------ */}
        
        {/* ------------------------ HOBBIES ------------------------ */}
        <div className="reveal">
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-accent" />
            <h3 className="text-3xl font-heading font-semibold">Hobbies & Interests</h3>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                "AI Tools Exploration",
                "Machine Learning",
                "Data Visualization",
                "IoT Tinkering"
              ].map(hobby => (
                <div
                  key={hobby}
                  className="glass-card-hover px-6 py-3 rounded-full text-center font-medium"
                >
                  {hobby}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;