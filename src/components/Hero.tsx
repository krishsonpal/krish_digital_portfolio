import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const PLACEHOLDERS = {
  PHOTO_URL: "public\\krish photo.jpeg",
  RESUME_URL: "public\\krish_resume.pdf",
  GITHUB_URL: "https://github.com/krishsonpal",
  LINKEDIN_URL: "https://www.linkedin.com/in/krish-sonpal-33bab52a7/",
  EMAIL: "krishsonpal21@gmail.com",
  PHONE: "+91 8160497098",
};

const Hero = () => {
  const [text, setText] = useState("");
  const fullText =
    "Aspiring Data Scientist with a strong foundation in Python, data analysis, and machine learning. Experienced in developing web applications and embedded systems with a focus on data-driven solutions.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Glass card overlay */}
      <div className="relative z-10 max-w-5xl w-full glass-card p-8 md:p-12 rounded-3xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Photo */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-75 group-hover:opacity-100 blur-lg transition duration-300 animate-glow"></div>
              <img
                src={PLACEHOLDERS.PHOTO_URL}
                alt="Krish Manish Sonpal"
                className="relative w-64 h-64 rounded-full object-cover border-4 border-white/20"
              />
            </div>
          </div>

          {/* Right side - Info */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-heading font-bold neon-text">
              Krish Manish Sonpal
            </h1>

            <div className="space-y-2 text-muted-foreground">
              <p className="text-lg">
                <span className="font-semibold text-foreground">B.Tech CSE</span> — PDEU Gandhinagar
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Ahmedabad, Gujarat</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href={`mailto:${PLACEHOLDERS.EMAIL}`} className="hover:text-primary transition-colors">
                  {PLACEHOLDERS.EMAIL}
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a href={`tel:${PLACEHOLDERS.PHONE}`} className="hover:text-secondary transition-colors">
                  {PLACEHOLDERS.PHONE}
                </a>
              </div>
            </div>

            {/* Typewriter tagline */}
            <div className="min-h-[120px] text-foreground/90 text-base md:text-lg leading-relaxed">
              {text}
              <span className="animate-pulse">|</span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Button asChild className="glass-card-hover group">
                <a href={PLACEHOLDERS.RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  View Resume
                </a>
              </Button>
              <Button asChild variant="outline" className="glass-card-hover">
                <a href={PLACEHOLDERS.GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="glass-card-hover">
                <a href={PLACEHOLDERS.LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" className="glass-card-hover">
                <a href={`mailto:${PLACEHOLDERS.EMAIL}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
