import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Cybersecurity", href: "#cybersecurity" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-sm border-b border-cyber-primary/20" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl">
            <span className="text-cyber-primary font-mono">&lt;</span>
            <span className="text-foreground">Fuad</span>
            <span className="text-cyber-secondary">Moha</span>
            <span className="text-cyber-primary font-mono">/&gt;</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-cyber-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Resume Button */}
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              size="sm"
              className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyber-primary"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-cyber-primary/20 bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-cyber-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10 w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;