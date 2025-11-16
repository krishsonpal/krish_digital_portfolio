import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Phone, ArrowUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PLACEHOLDERS = {
  GITHUB_URL: "https://github.com/krishsonpal",
  LINKEDIN_URL: "https://www.linkedin.com/in/krish-sonpal-33bab52a7/",
  EMAIL: "krishsonpal21@gmail.com",
  PHONE: "+91 8160497098",
};

const Footer = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="py-20 px-4 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-6 neon-text">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about data science
                and AI. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${PLACEHOLDERS.EMAIL}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="glass-card p-3 rounded-lg group-hover:shadow-[0_0_20px_hsl(var(--primary-glow))] transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span>{PLACEHOLDERS.EMAIL}</span>
              </a>

              <a
                href={`tel:${PLACEHOLDERS.PHONE}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors group"
              >
                <div className="glass-card p-3 rounded-lg group-hover:shadow-[0_0_20px_hsl(var(--secondary-glow))] transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span>{PLACEHOLDERS.PHONE}</span>
              </a>

              <a
                href={PLACEHOLDERS.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <div className="glass-card p-3 rounded-lg group-hover:shadow-[0_0_20px_hsl(var(--accent-glow))] transition-all">
                  <Github className="w-5 h-5" />
                </div>
                <span>GitHub</span>
              </a>

              <a
                href={PLACEHOLDERS.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="glass-card p-3 rounded-lg group-hover:shadow-[0_0_20px_hsl(var(--primary-glow))] transition-all">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h4 className="text-2xl font-heading font-semibold mb-6">Send a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 focus:border-primary min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full glass-card-hover">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Krish Manish Sonpal. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="glass-card-hover"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
