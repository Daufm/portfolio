import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import MatrixBackground from "./MatrixBackground";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Matrix Animation Overlay */}
      <MatrixBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-background/95 to-background" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 cyber-glow">
            <span className="text-cyber-primary">Alex</span>{" "}
            <span className="text-foreground">Chen</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
            <span className="text-cyber-secondary">&gt;</span> CS Graduate{" "}
            <span className="text-cyber-primary">|</span> Cybersecurity Enthusiast{" "}
            <span className="text-cyber-primary">|</span> Junior Developer{" "}
            <span className="text-cyber-secondary">&lt;</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about building secure, innovative software solutions and protecting digital infrastructure. 
            Ready to make an impact in the cybersecurity industry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-cyber hover:shadow-cyber transition-all duration-300 text-cyber-dark font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10 transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-primary rounded-full p-1">
          <div className="w-1 h-3 bg-cyber-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;