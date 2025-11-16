import { useEffect, useRef } from "react";
import { GraduationCap, Target, Users, Lightbulb } from "lucide-react";

const timelineEvents = [
  { year: "2021", event: "Class 10 Excellence", detail: "99.37%ile - Gujarat Board" },
  { year: "2023", event: "Class 12 Achievement", detail: "88.39%ile - Gujarat Board" },
  { year: "2023", event: "JEE Main Success", detail: "96.7 %ile" },
  { year: "2025", event: "B.Tech Journey", detail: "CGPA 9.87(Till 4th Sem) - PDEU Gandhinagar" },
  { year: "2027", event: "Future Vision", detail: "Aspiring Data Scientist" },
];

const values = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Integrity",
    description: "Building honest, transparent solutions with ethical practices at the core.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Curiosity-Driven Learning",
    description: "Passionate about exploring new technologies and methodologies",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Hands-On Approach",
    description: "Learn by building real-world projects that solve actual problems",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Social Responsibility",
    description: "Using technology to create positive impact in society",
  },
];

const Introduction = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="introduction" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 neon-text reveal">
          Introduction & Learning Philosophy
        </h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left - Philosophy */}
          <div className="space-y-6 reveal">
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <h3 className="text-2xl font-heading font-semibold text-primary">My Philosophy</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">→</span>
                  <span>
                    <strong className="text-foreground">Learn by Building:</strong> Theory is important, but hands-on
                    projects solidify understanding
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">→</span>
                  <span>
                    <strong className="text-foreground">Solve Real Problems:</strong> Focus on projects that address
                    actual societal challenges
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">→</span>
                  <span>
                    <strong className="text-foreground">Responsible Technology:</strong> Always consider ethical
                    implications and social impact
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">→</span>
                  <span>
                    <strong className="text-foreground">Interdisciplinary Mindset:</strong> Combine multiple fields to
                    create innovative solutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent text-xl">→</span>
                  <span>
                    <strong className="text-foreground">Lifelong Learning:</strong> Technology evolves rapidly; staying
                    curious is essential
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card-hover p-6 rounded-2xl space-y-3"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary">{value.icon}</div>
                <h4 className="font-heading font-semibold text-lg">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="reveal">
          <h3 className="text-3xl font-heading font-semibold text-center mb-12 text-secondary">Academic Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="glass-card-hover p-6 rounded-2xl inline-block">
                      <h4 className="text-2xl font-heading font-bold text-primary mb-2">{event.year}</h4>
                      <p className="font-semibold text-foreground mb-1">{event.event}</p>
                      <p className="text-sm text-muted-foreground">{event.detail}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary-glow))] animate-glow"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
