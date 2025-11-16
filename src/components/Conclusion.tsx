import { useEffect, useRef } from "react";
import { TrendingUp, AlertTriangle, Target, Shield } from "lucide-react";

const swotAnalysis = {
  strengths: [
    'Strong coding and problem-solving abilities',
        'Excellent analytical and data-driven mindset',
        'Proven track record in hackathons and competitions',
        'Strong teamwork and communication skills',
        'Self-motivated and continuous learner',
        'Comfortable with emerging technologies (AI, IoT)',
  ],
  weaknesses: [
    'Tend to over-focus on details which may slow down progress',
        'Limited professional industry experience (mostly academic)',
        'Perfectionism can lead to scope creep',
        'Limited experience with large-scale system deployment',
  ],
  opportunities: [
    'Booming AI/ML ecosystem with growing demand',
        'Rising interest in responsible AI and ethical frameworks',
        'Internship and research opportunities in prestigious institutions',
        'Growing startup ecosystem for AI-driven solutions',
        'Open-source community contributions and visibility',
  ],
  threats: [
    'Rapidly evolving technology landscape requiring constant learning',
        'High competition in AI/ML field from globally talented developers',
        'Potential AI-driven job market disruptions',
        'Ethical concerns in AI adoption slowing down opportunities',
  ],
};

const Conclusion = () => {
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
    <section id="conclusion" ref={sectionRef} className="py-20 px-4 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 neon-text reveal">
          Conclusion & SWOT Analysis
        </h2>

        {/* Summary */}
        <div className="glass-card p-8 md:p-12 rounded-2xl mb-16 reveal">
          <h3 className="text-3xl font-heading font-semibold text-center mb-8 text-primary">
            Reflection & Growth
          </h3>
          <div className="space-y-6 text-muted-foreground max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              My journey from academic excellence to hands-on full-stack development has shaped me into a well-rounded technologist. Through hackathons, projects, and continuous learning, I've built a strong foundation in data science, AI/ML, and web development. I'm committed to using technology responsibly to solve real-world problems and create positive global impact.
            </p>
            <p className="text-lg leading-relaxed">
              I'm excited about the intersection of data science, AI, and responsible innovation, and I'm determined to make a meaningful contribution to this evolving field.
            </p>
            {/* <p className="text-lg leading-relaxed">
              My participation in community service through Forever Foundation has reinforced my belief that technology
              should serve humanity. Whether it's helping rural students find internships or optimizing urban parking, my
              goal remains constant: <span className="text-primary font-semibold">use data science and AI to create
              positive, lasting impact</span>.
            </p>
            <p className="text-lg leading-relaxed font-semibold text-foreground">
              I am now ready to take the next step: pursuing advanced studies at IIIT Hyderabad and embarking on a career
              as a Data Scientist or AI Engineer, where I can contribute to cutting-edge research while solving real-world
              problems.
            </p> */}
          </div>
        </div>

        {/* SWOT Analysis */}
        <div className="reveal">
          <h3 className="text-3xl font-heading font-semibold text-center mb-12 text-secondary">
            SWOT Analysis
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Strengths */}
            <div className="glass-card-hover p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
                <h4 className="text-2xl font-heading font-bold text-primary">Strengths</h4>
              </div>
              <ul className="space-y-2">
                {swotAnalysis.strengths.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="glass-card-hover p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-secondary" />
                <h4 className="text-2xl font-heading font-bold text-secondary">Weaknesses</h4>
              </div>
              <ul className="space-y-2">
                {swotAnalysis.weaknesses.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-secondary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="glass-card-hover p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-accent" />
                <h4 className="text-2xl font-heading font-bold text-accent">Opportunities</h4>
              </div>
              <ul className="space-y-2">
                {swotAnalysis.opportunities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Threats */}
            <div className="glass-card-hover p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-destructive" />
                <h4 className="text-2xl font-heading font-bold text-destructive">Threats</h4>
              </div>
              <ul className="space-y-2">
                {swotAnalysis.threats.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-destructive">⚠</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
