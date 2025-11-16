import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
  sections: Array<{ id: string; label: string }>;
}

const Navbar = ({ activeSection, scrollToSection, sections }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/10 px-4 py-3 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-heading font-bold neon-text">
          KMS
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-1 items-center">
          {sections.slice(0, 6).map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-primary/20 text-primary font-semibold border border-primary/50 glow-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 glass-card rounded-2xl p-4 space-y-2 animate-slide-up">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                scrollToSection(section.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === section.id
                  ? "bg-primary/20 text-primary font-semibold border border-primary/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
