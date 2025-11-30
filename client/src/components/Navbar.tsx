import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-primary/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a 
          href="#" 
          className={cn(
            "text-2xl font-display font-bold tracking-tighter",
            isScrolled ? "text-white" : "text-white"
          )}
        >
          BK<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wide"
            >
              {link.name}
            </button>
          ))}
          <Button 
            size="sm" 
            className="bg-accent hover:bg-accent/90 text-white border-none"
            onClick={() => scrollToSection('#contact')}
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary border-t border-white/10 p-4 flex flex-col gap-4 md:hidden shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-white/80 hover:text-white py-2 font-medium"
            >
              {link.name}
            </button>
          ))}
          <Button className="w-full bg-accent text-white" onClick={() => scrollToSection('#contact')}>
            Hire Me
          </Button>
        </div>
      )}
    </nav>
  );
}
