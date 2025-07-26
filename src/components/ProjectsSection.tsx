import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Shield, Code, Database, Globe } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "SecureAuth Dashboard",
      description: "A comprehensive authentication system with multi-factor authentication, role-based access control, and real-time security monitoring. Features include biometric authentication, session management, and detailed audit logs.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "PostgreSQL", "JWT", "Redis", "Docker"],
      github: "https://github.com/alexchen/secureauth",
      demo: "https://secureauth-demo.vercel.app",
      featured: true
    },
    {
      title: "Network Vulnerability Scanner",
      description: "Python-based network scanner that identifies vulnerabilities, open ports, and potential security threats. Includes automated reporting and integration with popular SIEM tools.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "Nmap", "Scapy", "SQLite", "Pandas", "Matplotlib"],
      github: "https://github.com/alexchen/vuln-scanner",
      demo: null,
      featured: true
    },
    {
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio management application with security-focused API integrations, encrypted data storage, and comprehensive market analysis tools.",
      icon: Database,
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80",
      tech: ["TypeScript", "React", "Express", "MongoDB", "WebSockets", "Chart.js"],
      github: "https://github.com/alexchen/crypto-tracker",
      demo: "https://crypto-tracker-demo.netlify.app",
      featured: false
    },
    {
      title: "Secure File Transfer Protocol",
      description: "End-to-end encrypted file sharing system with zero-knowledge architecture. Features include temporary links, access controls, and automatic file destruction.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      tech: ["Go", "React", "PostgreSQL", "AES-256", "AWS S3", "Docker"],
      github: "https://github.com/alexchen/secure-transfer",
      demo: null,
      featured: true
    },
    {
      title: "IoT Security Monitor",
      description: "Monitoring system for IoT devices that detects anomalous behavior, tracks device health, and provides security recommendations. Built for smart home environments.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "Flask", "InfluxDB", "Grafana", "MQTT", "Docker"],
      github: "https://github.com/alexchen/iot-monitor",
      demo: "https://iot-monitor-demo.herokuapp.com",
      featured: false
    }
  ];

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const Icon = project.icon;
    
    return (
      <Card className={`group bg-card/50 border-cyber-primary/20 hover:border-cyber-primary/40 transition-all duration-300 hover:shadow-cyber/20 ${project.featured ? 'lg:col-span-2' : ''}`}>
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          <div className="absolute top-4 right-4">
            <div className="bg-cyber-primary/20 backdrop-blur-sm rounded-full p-2">
              <Icon className="h-5 w-5 text-cyber-primary" />
            </div>
          </div>
        </div>
        
        <CardHeader className="pb-3">
          <CardTitle className="text-cyber-primary group-hover:text-cyber-glow transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="text-muted-foreground leading-relaxed">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-secondary/30 text-cyber-secondary border border-cyber-secondary/20 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button 
              variant="outline" 
              size="sm"
              className="border-cyber-primary/30 text-cyber-primary hover:bg-cyber-primary/10 flex-1"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
            {project.demo && (
              <Button 
                size="sm"
                className="bg-gradient-cyber hover:shadow-cyber transition-all duration-300 text-cyber-dark flex-1"
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-cyber-primary">
            <span className="font-mono">&lt;</span> Projects <span className="font-mono">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in cybersecurity, web development, and software engineering. 
            Each project demonstrates my commitment to building secure, efficient, and user-friendly solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10"
            asChild
          >
            <a href="https://github.com/alexchen" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;