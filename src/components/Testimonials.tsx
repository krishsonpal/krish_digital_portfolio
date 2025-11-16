import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Niva Amrutia",
    role: "SIH Team Leader",
    text: "Krish's expertise in AI and NLP was instrumental in our Smart India Hackathon project. His ability to integrate complex APIs like Gemini and build efficient LangChain pipelines impressed our entire team. A true problem solver!",
    rating: 5,
  },
  {
    name: "Mihir Goswami",
    role: "Odoo Hackathon Team Leader",
    text: "Working with Krish on the expense management system was a pleasure. His backend architecture was robust, scalable, and well-documented. He's a reliable team player who delivers quality code on time.",
    rating: 5,
  },
  {
    name: "Dr. Manish Paliwal",
    role: "Professor, PDEU",
    text: "Krish consistently demonstrates exceptional analytical thinking and programming skills. His projects show a deep understanding of both theory and practical application. A promising young data scientist.",
    rating: 5,
  },
  {
    name: "Dr. Rutvij Jhaveri",
    role: "SIH Mentor",
    text: "Krish's dedication during the Smart India Hackathon was remarkable. He not only contributed technically but also showed leadership in coordinating with the team and presenting to judges. Highly recommend him for any AI/ML role.",
    rating: 4.5,
  },
  {
    name: "Ayush Patel",
    role: "Treasurer, Forever Foundation(CSSI Mentor)",
    text: "Krish's involvement in our community service initiatives showed his commitment to social responsibility. He brings the same enthusiasm to helping communities as he does to his technical projects.",
    rating: 5,
  },
  {
    name: "Dr. Deepak Sahu",
    role: "Rapid Response Project Evaluator",
    text: "The ESP32-based traffic system demonstrated by Krish was innovative and practical. His understanding of embedded systems combined with real-world problem-solving makes him stand out among his peers.",
    rating: 4.5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16 neon-text reveal">
          Testimonials 
        </h2>

        <div className="reveal">
          <div className="glass-card p-8 md:p-12 rounded-2xl relative">
            {/* Navigation arrows */}
            <Button
              onClick={prevTestimonial}
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 glass-card-hover"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 glass-card-hover"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Testimonial content */}
            <div className="max-w-3xl mx-auto text-center space-y-6">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(currentTestimonial.rating)
                        ? "fill-primary text-primary"
                        : i < currentTestimonial.rating
                        ? "fill-primary/50 text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
                "{currentTestimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-6">
                <p className="text-2xl font-heading font-bold text-primary">{currentTestimonial.name}</p>
                <p className="text-muted-foreground">{currentTestimonial.role}</p>
              </div>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8 shadow-[0_0_10px_hsl(var(--primary-glow))]"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
