import { useEffect, useRef } from "react";
import { Trophy, Code2, Heart } from "lucide-react";

const experiences = [
  {
    icon: Trophy,
    title: "Smart India Hackathon 2025",
    event: "National Hackathon",
    role: "Backend + AI Support Developer",
    teamSize: "Team of 6",
    highlights: [
      "Integrated Gemini API and LangChain pipelines",
      "Collaborated with cross-functional team members",
      "Delivered working prototype under tight deadline",
    ],
    outcome:
      "Presented AI-powered internship recommendation engine. Successfully demonstrated prototype.",
    learnings:
      "AI pipeline coordination, teamwork with mentors and stakeholders, high-pressure development",
  },
  {
    icon: Code2,
    title: "Odoo Hackathon 2025",
    event: "Company Hackathon",
    role: "Backend Developer",
    teamSize: "Team of 4",
    highlights: [
      "Designed RESTful API architecture",
      "Implemented approval workflow logic",
      "Ensured code quality and documentation",
    ],
    outcome:
      "Completed full backend for multi-level expense approval. Integrated with frontend successfully.",
    learnings:
      "Importance of modular design, role-based access control, maintaining clean API contracts",
  },
  {
    icon: Heart,
    title: "Forever Foundation CSSI Internship",
    event: "Social Impact Internship",
    role: "Community Service Volunteer",
    teamSize: "Social Initiative",
    highlights: [
      "Organized educational awareness campaigns",
      "Distributed books to underprivileged students",
      "Participated in food drives for local communities",
    ],
    outcome: "Completed internship with recognition for contribution.",
    learnings:
      "Understanding community needs, teamwork, responsibility, using tech mindset for impact",
  },
];

const Leadership = () => {
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
    <section id="leadership" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 neon-text reveal">
          Leadership & Collaboration
        </h2>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;

            return (
              <div
                key={index}
                className="reveal p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 hover:border-cyan-500/60 transition-all shadow-lg hover:-translate-y-1 duration-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Top Row with Icon + Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-400 shadow-md">
                    <Icon className="w-7 h-7 text-slate-900" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-cyan-400 font-semibold">{exp.event}</p>
                    <p className="text-slate-400 text-sm">{exp.teamSize}</p>
                  </div>
                </div>

                {/* Role */}
                <p className="text-slate-300 mb-6">{exp.role}</p>

                {/* Contributions + Outcome + Learnings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Highlights */}
                  <div>
                    <p className="text-sm font-bold text-cyan-400 mb-3">KEY CONTRIBUTIONS</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome + Learnings */}
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-white/5 border border-purple-500/20">
                      <p className="text-xs font-bold text-purple-400 mb-2">OUTCOME</p>
                      <p className="text-slate-300 text-sm">{exp.outcome}</p>
                    </div>

                    <div className="p-4 rounded-lg bg-white/5 border border-cyan-500/20">
                      <p className="text-xs font-bold text-cyan-400 mb-2">LEARNINGS</p>
                      <p className="text-slate-300 text-sm">{exp.learnings}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Leadership;
