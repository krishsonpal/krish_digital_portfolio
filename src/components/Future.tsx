import { useEffect, useRef } from "react";
import { Target, Rocket, Trophy } from "lucide-react";

const roadmap = [
  {
    icon: <Target className="w-8 h-8" />,
    phase: "Short-term (2025-2026)",
    title: "Master ML & LLMs",
    goals: [
      "Deep dive into advanced machine learning algorithms",
      "Specialize in Large Language Models and transformers",
      "Complete specialized courses and certifications",
      "Contribute to open-source AI projects",
      "Build production-ready ML applications",
    ],
    color: "primary",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    phase: "Mid-term (2027)",
    title: "Gate MS Program",
    goals: [
      "Prepare for Gate entrance examinations",
      "Strengthen research paper reading and writing",
      "Collaborate with professors on research projects",
      "Publish work in conferences or journals",
      "Network with researchers and industry experts",
    ],
    color: "secondary",
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    phase: "Long-term (2027+)",
    title: "Data Scientist / AI Engineer",
    goals: [
      "Lead AI/ML projects in top-tier companies or research labs",
      "Develop innovative solutions for real-world problems",
      "Mentor junior developers and students",
      "Contribute to AI ethics and responsible innovation",
      "Bridge academia and industry through applied research",
    ],
    color: "accent",
  },
];

const Future = () => {
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
    <section id="future" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 neon-text reveal">
          Future Aspirations
        </h2>

        <div className="space-y-12">
          {roadmap.map((phase, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 md:p-12 rounded-2xl reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div
                    className={`w-20 h-20 rounded-full bg-${phase.color}/20 flex items-center justify-center text-${phase.color} shadow-[0_0_30px_hsl(var(--${phase.color}-glow))]`}
                  >
                    {phase.icon}
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <p className={`text-sm font-semibold text-${phase.color} mb-2`}>{phase.phase}</p>
                    <h3 className="text-3xl font-heading font-bold mb-4">{phase.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {phase.goals.map((goal, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className={`text-${phase.color} text-xl flex-shrink-0`}>•</span>
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 glass-card p-12 rounded-2xl text-center reveal">
          <h3 className="text-3xl font-heading font-bold mb-6 neon-text">Ultimate Vision</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "To become a visionary Data Scientist and AI Engineer who builds intelligent systems that solve real-world problems, advance human potential, and create positive global impact. By combining technical excellence with ethical responsibility, I aim to shape the future of AI in a way that benefits humanity as a whole."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Future;
