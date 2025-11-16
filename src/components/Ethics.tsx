import { useEffect, useRef } from "react";
import { Globe, Heart, Shield } from "lucide-react";

const initiatives = [
  {
    icon: Globe,
    title: "Urban Parking → Sustainable Urban Living",
    description:
      "The parking management system contributes to smart city initiatives, reducing congestion and environmental impact through data-driven solutions.",
    keyPoints: [
      "Reduced search time for parking",
      "Lower carbon emissions",
      "Data-informed urban planning",
      "Scalable smart city solution",
    ],
    color: "accent",
  },
  {
    icon: Heart,
    title: "Internship Engine → Rural Student Opportunities",
    description:
      "The AI-powered internship recommendation system democratizes access to opportunities for students in tier-2 and tier-3 institutions.",
    keyPoints: [
      "Equal opportunity access",
      "Reduces geographic bias",
      "Supports underrepresented talent",
      "Bridges education gap",
    ],
    color: "primary",
  },
  {
    icon: Shield,
    title: "Ethical AI & Responsible Technology",
    description:
      "Committed to building AI systems that are fair, transparent, and accountable with built-in safeguards against bias.",
    keyPoints: [
      "Fairness in AI models",
      "Transparency in decision-making",
      "Bias detection & mitigation",
      "User privacy protection",
    ],
    color: "secondary",
  },
];

const Ethics = () => {
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
    <section id="ethics" ref={sectionRef} className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 neon-text reveal">
          Global Awareness & Ethics
        </h2>

        {/* TOP 3 INITIATIVES — REPLACED WITH NEW CONTENT */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {initiatives.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card-hover p-8 rounded-2xl space-y-6 reveal"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div
                  className={`p-4 w-fit rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30`}
                >
                  <Icon className="w-10 h-10 text-cyan-400" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-heading font-bold">{item.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm">{item.description}</p>

                {/* Key Points */}
                <div>
                  <h4 className="font-heading font-semibold text-sm mb-3">Key Points:</h4>
                  <ul className="space-y-2">
                    {item.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* YOUR ORIGINAL ETHICAL FRAMEWORK — UNTOUCHED */}
        <div className="glass-card p-8 md:p-12 rounded-2xl reveal">
          <h3 className="text-3xl font-heading font-semibold text-center mb-8 text-primary">
            My Ethical Framework
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-semibold text-secondary">Fairness</h4>
              <p className="text-muted-foreground">
                Ensuring AI systems don't discriminate based on demographics. Implementing bias
                detection and mitigation strategies in all recommendation algorithms.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-semibold text-accent">Transparency</h4>
              <p className="text-muted-foreground">
                Making AI decisions explainable and understandable. Users should know how
                recommendations are generated and what data is being used.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-semibold text-primary">Privacy</h4>
              <p className="text-muted-foreground">
                Protecting user data through encryption, anonymization, and strict access controls.
                GDPR compliance and user consent are non-negotiable.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-semibold text-secondary">Accountability</h4>
              <p className="text-muted-foreground">
                Taking responsibility for AI system outcomes. Implementing logging, monitoring, and
                feedback mechanisms to continuously improve fairness.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Ethics;
