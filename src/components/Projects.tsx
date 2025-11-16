import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, Cpu } from "lucide-react";

const projects = [
  {
    id: 1,
    image: "/projects/project1.png",
    title: "AI-Based Internship Recommendation Engine",
    subtitle: "Smart India Hackathon 2025",
    teamSize: 6,
    role: "Backend + AI/NLP Developer",
    stack: ["FastAPI", "React", "LangChain", "Gemini API", "Hugging Face"],
    shortDesc: "AI-powered platform matching rural students with relevant internships using NLP",
    fullContent: {
      objectives: [
        "Bridge rural-urban opportunity gap in internship access",
        "Automate skill-based student-internship matching using AI",
        "Provide personalized recommendations based on profiles and aspirations",
      ],
      methodology: [
        "Designed FastAPI backend with RESTful architecture",
        "Integrated Gemini API for contextual understanding",
        "Built LangChain pipelines for resume parsing and skill extraction",
        "Deployed Hugging Face embeddings for semantic matching",
        "Created React dashboard for real-time recommendations",
      ],
      outcomes: [
        "90%+ matching accuracy in pilot tests",
        "Reduced search time by 60% compared to manual methods",
        "Positive feedback from rural student focus groups",
        "Scalable architecture ready for nationwide deployment",
      ],
      challenges: [
        {
          problem: "Limited rural student data",
          solution: "Synthetic data generation + transfer learning",
        },
        {
          problem: "API rate limits during peak load",
          solution: "Implemented request queuing and caching",
        },
        {
          problem: "Bias in recommendation algorithms",
          solution: "Fairness constraints and diverse training data",
        },
      ],
    },
  },
  {
    id: 2,
    image: "/projects/project2.png",
    title: "Multi-Level Expense Management System",
    subtitle: "Odoo Hackathon 2025",
    teamSize: 4,
    role: "Backend Developer",
    stack: ["FastAPI", "React", "SQLite", "JWT Auth"],
    shortDesc: "Hierarchical expense tracking with approval workflows and analytics",
    fullContent: {
      objectives: [
        "Build multi-tier approval system for corporate expenses",
        "Enable real-time expense tracking and budget monitoring",
        "Generate automated financial reports and insights",
      ],
      methodology: [
        "Designed role-based access control (Employee, Manager, Admin)",
        "Implemented approval workflow engine with notifications",
        "Created RESTful API with FastAPI for CRUD operations",
        "Built React frontend with data visualization charts",
        "Integrated JWT authentication for secure access",
      ],
      outcomes: [
        "Reduced approval time by 40% through automation",
        "99.9% uptime during demo and testing phases",
        "Positive feedback on UI/UX simplicity",
        "Impressed judges with scalability architecture",
      ],
      challenges: [
        {
          problem: "Complex approval chain logic",
          solution: "State machine pattern for workflow management",
        },
        {
          problem: "Concurrent expense submissions",
          solution: "Database transaction locks and queue system",
        },
      ],
    },
  },
  {
    id: 3,
    image: "/projects/project3.png",
    title: "Urban Parking Management System",
    subtitle: "Academic Project 2025",
    teamSize: 2,
    role: "Full Stack Developer",
    stack: ["Flask", "SQLite", "HTML/CSS", "JavaScript"],
    shortDesc: "Smart parking solution with real-time availability tracking",
    fullContent: {
      objectives: [
        "Reduce urban parking search time",
        "Optimize parking space utilization",
        "Provide data-driven insights for city planners",
      ],
      methodology: [
        "Flask backend with RESTful API design",
        "SQLite database for parking slot management",
        "Real-time availability updates using AJAX",
        "Interactive map interface for users",
      ],
      outcomes: [
        "Functional prototype with 95% accuracy",
        "Positive feedback from peers and faculty",
        "Highlighted sustainability benefits in presentation",
      ],
      challenges: [
        {
          problem: "Real-time data synchronization",
          solution: "WebSocket implementation for live updates",
        },
      ],
    },
  },
  {
    id: 4,
    image: "/projects/project4.png",
    title: "Natural Language to SQL Query App",
    subtitle: "Personal Project",
    teamSize: 1,
    role: "Solo Developer",
    stack: ["Python", "LangChain", "OpenAI API", "Streamlit"],
    shortDesc: "Convert natural language questions into SQL queries using AI",
    fullContent: {
      objectives: [
        "Make database querying accessible to non-technical users",
        "Leverage LLMs for accurate SQL generation",
        "Build intuitive interface for query execution",
      ],
      methodology: [
        "Integrated OpenAI API for natural language understanding",
        "Built LangChain pipeline for context-aware SQL generation",
        "Created Streamlit interface for user interaction",
        "Implemented query validation and error handling",
      ],
      outcomes: [
        "85% accuracy on standard queries",
        "Reduced query writing time by 70%",
        "Deployed as demo tool for portfolio",
      ],
      challenges: [
        {
          problem: "Ambiguous user queries",
          solution: "Clarification prompts and example suggestions",
        },
      ],
    },
  },
  {
    id: 5,
    image: "/projects/project5.png",
    title: "Rapid Response ESP32 Traffic System",
    subtitle: "IoT Project",
    teamSize: 2,
    role: "Hardware + Software Developer",
    stack: ["ESP32", "C++", "Arduino IDE", "MQTT"],
    shortDesc: "Smart traffic light system for emergency vehicle priority",
    fullContent: {
      objectives: [
        "Enable emergency vehicle priority at traffic signals",
        "Reduce emergency response time in urban areas",
        "Create cost-effective IoT solution",
      ],
      methodology: [
        "Programmed ESP32 microcontroller with C++",
        "Implemented MQTT protocol for signal communication",
        "Created emergency detection algorithm",
        "Built physical prototype with LED traffic lights",
      ],
      outcomes: [
        "Functional hardware prototype demonstrated",
        "40% faster emergency vehicle passage in simulations",
        "Praised by evaluator Dr. Deepak Sahu",
      ],
      challenges: [
        {
          problem: "Signal interference in urban environment",
          solution: "Enhanced antenna design and frequency tuning",
        },
      ],
    },
  },
];

const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 neon-text reveal">
          Interdisciplinary Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>

                {/* CARD */}
                <div
                  className="glass-card-hover p-6 rounded-2xl cursor-pointer space-y-4 reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* IMAGE PREVIEW */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-xl border border-white/10"
                  />

                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 text-primary">
                      <Cpu className="w-5 h-5" />
                      <span className="text-sm font-semibold">{project.subtitle}</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </div>

                  <h3 className="text-xl font-heading font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.shortDesc}</p>

                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span>Team of {project.teamSize}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 rounded text-xs">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    Click to View Details
                  </Button>
                </div>
              </DialogTrigger>

              {/* MODAL */}
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card border-white/20">

                <DialogHeader>
                  <DialogTitle className="text-3xl font-heading neon-text">
                    {project.title}
                  </DialogTitle>
                  <p className="text-muted-foreground">{project.subtitle}</p>
                </DialogHeader>

                {/* FULL IMAGE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-xl border border-white/10 mt-4"
                />

                <div className="space-y-6 mt-6">

                  {/* ROLE + STACK */}
                  <div className="glass-card p-4 rounded-xl space-y-2">
                    <p className="text-sm">
                      <strong className="text-primary">Role:</strong> {project.role}
                    </p>
                    <p className="text-sm">
                      <strong className="text-secondary">Team Size:</strong> {project.teamSize}
                    </p>
                    <div>
                      <strong className="text-accent text-sm">Tech Stack:</strong>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.stack.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* OBJECTIVES */}
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                      Objectives
                    </h4>
                    <ul className="space-y-2">
                      {project.fullContent.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-accent">•</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* METHODOLOGY */}
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-secondary mb-3">
                      Methodology
                    </h4>
                    <ul className="space-y-2">
                      {project.fullContent.methodology.map((method, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-accent">→</span>
                          <span>{method}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* OUTCOMES */}
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-accent mb-3">
                      Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {project.fullContent.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary">✓</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CHALLENGES */}
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-primary mb-3">
                      Challenges & Solutions
                    </h4>
                    <div className="space-y-4">
                      {project.fullContent.challenges.map((challenge, i) => (
                        <div key={i} className="glass-card p-4 rounded-xl">
                          <p className="text-sm mb-2">
                            <strong className="text-destructive">Challenge:</strong>{" "}
                            {challenge.problem}
                          </p>
                          <p className="text-sm">
                            <strong className="text-accent">Solution:</strong>{" "}
                            {challenge.solution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
