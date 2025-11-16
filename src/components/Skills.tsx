// src/components/Skills.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  Brain,
  BarChart3,
  Globe,
  Cpu,
  X,
  Image as ImageIcon,
  FileText,
  BarChart,
} from "lucide-react";

type Artefact = {
  type: "image" | "note" | "summary";
  title: string;
  description?: string;
  src?: string;
};

type Skill = {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  artefacts: Artefact[];
};

const skillsData: Skill[] = [
  {
    id: "nlp",
    icon: <Brain className="w-10 h-10" />,
    title: "NLP & LangChain Pipelines",
    subtitle: "Natural Language Processing",
    description:
      "Designing context-aware text systems, embedding-based search, and conversational pipelines.",
    artefacts: [
      {
        type: "image",
        title: "Pipeline Architecture",
        src: "/assets/nlp/pipeline-diagram.png",
      },
    ],
  },
  {
    id: "data",
    icon: <BarChart3 className="w-10 h-10" />,
    title: "Statistical Modeling & Data Analysis",
    subtitle: "Data Science",
    description: "Exploratory data analysis, statistical summaries and visual storytelling.",
    artefacts: [
      {
        type: "image",
        title: "EDA Screenshot",
        src: "/assets/data/eda-notebook.png",
      },
    ],
  },
  {
    id: "fullstack",
    icon: <Globe className="w-10 h-10" />,
    title: "Full Stack Development",
    subtitle: "Web Applications",
    description: "REST APIs, authentication, and full-stack deployments using Flask/FastAPI + React.",
    artefacts: [
      {
        type: "image",
        title: "Dashboard Screenshot",
        src: "/assets/fullstack/dashboard.png",
      },
    ],
  },
  {
    id: "esp32",
    icon: <Cpu className="w-10 h-10" />,
    title: "Embedded IoT with ESP32",
    subtitle: "Hardware Programming",
    description: "Sensor integration, MQTT communication and low-latency data streams.",
    artefacts: [
      {
        type: "image",
        title: "Serial Monitor",
        src: "/assets/esp32/serial-monitor.png",
      },
    ],
  },
];

export default function Skills(): JSX.Element {
  const [openSkill, setOpenSkill] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"images" | "summary">("images");
  const modalRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  // keyboard close (Escape)
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenSkill(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // when opening a modal, default to images
  useEffect(() => {
    if (openSkill) setActiveTab("images");
  }, [openSkill]);

  // close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!modalRef.current) return;
      if (openSkill && e.target instanceof Node && !modalRef.current.contains(e.target)) {
        setOpenSkill(null);
      }
    }
    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [openSkill]);

  // optional reveal observer (matches Leadership theme)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.12 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-black/40 to-black/25"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 neon-text reveal">
          Advanced Skill Development
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((s, idx) => {
            const firstImage = s.artefacts.find((a) => a.type === "image");
            return (
              <article
                key={s.id}
                className="reveal relative bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-2xl p-6 flex flex-col items-start gap-4 shadow-lg"
                aria-labelledby={`skill-${s.id}-title`}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="flex items-start gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-400 shadow-md">
                    {s.icon}
                  </div>

                  <div>
                    <h3 id={`skill-${s.id}-title`} className="text-xl font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="text-sm text-cyan-300">{s.subtitle}</p>
                    <p className="text-xs text-slate-400 mt-1">{/* optional small tag */}</p>
                  </div>
                </div>

                <p className="text-sm text-white/60">{s.description}</p>

                {/* Centered enlarged image (single image per card) */}
                <div className="w-full flex justify-center mt-4">
                  <img
                    src={firstImage?.src ?? "/assets/placeholder.png"}
                    alt={firstImage?.title ?? s.title}
                    className="w-full h-44 md:h-40 object-contain rounded-lg bg-white/5"
                  />
                </div>

                <div className="w-full mt-4">
                  <button
                    onClick={() => setOpenSkill(s.id)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    View Artefacts
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {openSkill && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <div
            ref={modalRef}
            className="relative z-10 max-w-4xl w-full bg-white/6 border border-white/8 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/8">
              <div>
                <h4 className="text-xl font-semibold text-white">
                  {skillsData.find((x) => x.id === openSkill)?.title}
                </h4>
                <p className="text-sm text-white/70">
                  {skillsData.find((x) => x.id === openSkill)?.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <nav aria-label="Artefact tabs" className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab("images")}
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium focus:outline-none ${
                      activeTab === "images" ? "bg-white/10 text-white" : "text-white/70"
                    }`}
                  >
                    <ImageIcon className="w-4 h-4" /> Images
                  </button>

                  
                  <button
                    onClick={() => setActiveTab("summary")}
                    className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium focus:outline-none ${
                      activeTab === "summary" ? "bg-white/10 text-white" : "text-white/70"
                    }`}
                  >
                    <BarChart className="w-4 h-4" /> Summary
                  </button>
                </nav>

                <button
                  onClick={() => setOpenSkill(null)}
                  aria-label="Close dialog"
                  className="p-2 rounded-md bg-white/5 text-white focus:outline-none"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Tab Panels */}
              {activeTab === "images" && (
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  {(skillsData.find((x) => x.id === openSkill)?.artefacts.filter(
                    (a) => a.type === "image"
                  ) ?? []).map((a, i) => (
                    <figure key={i} className="bg-white/4 rounded-lg p-3">
                      <img
                        src={a.src ?? "/assets/placeholder.png"}
                        alt={a.title}
                        className="w-full h-64 md:h-72 object-contain rounded-md bg-white/5"
                      />
                      <figcaption className="mt-2 text-sm text-white/70">{a.title}</figcaption>
                    </figure>
                  ))}
                </div>
              )}

              

              {activeTab === "summary" && (
                <div className="prose prose-invert text-white/80">
                  <h5>Critical Analysis</h5>
                  <p>{skillsData.find((x) => x.id === openSkill)?.description}</p>

                  <h6 className="mt-4">Challenges & Solutions</h6>
                  <ul className="list-disc ml-6">
                    <li>
                      Challenge: Limited labelled data. <strong>Solution:</strong> data augmentation
                      and transfer learning.
                    </li>
                    <li>
                      Challenge: Real-time constraints for IoT. <strong>Solution:</strong>{" "}
                      lightweight messaging and batching.
                    </li>
                  </ul>

                  <h6 className="mt-4">Impact & Metrics</h6>
                  <p>
                    Concise notes about outcomes, performance, and where the project was applied.
                    Add quantitative metrics when available (accuracy, latency, throughput).
                  </p>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-white/8 flex items-center justify-end gap-3">
              <button
                onClick={() => setOpenSkill(null)}
                className="px-4 py-2 rounded-lg bg-white/5 text-white/80 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
