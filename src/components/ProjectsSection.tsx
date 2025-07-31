import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Shield, Code, Database, Globe } from "lucide-react";
import blog from "../assets/blog.png"
import { title } from "process";
const ProjectsSection = () => {
  const projects = [
    {
      title: "Blogging Platform",
      description: "",
      icon: Globe,
      image: blog,
      tech: ["React", "Node.js", "MongoDB", "JWT", "Express.js"],
      github: "https://github.com/Daufm/Blogging-Platform",
      demo: "https://blogging-platform-aicbguo4r-fuad-mohammeds-projects-76cf441a.vercel.app",
      featured: true
    },
    {
      title: "Network Vulnerability Scanner",
      description: "Python-based network scanner that identifies vulnerabilities, open ports, and potential security threats. Includes automated reporting and integration with popular SIEM tools.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      tech: ["Python", "Nmap", "Scapy", "SQLite", "Pandas", "Matplotlib"],
      github: "https://github.com/Daufm/vuln-scanner",
      demo: null,
      featured: true
    },
    {
      title: "File Organizer CLI",
      description: "oraganiz file in Folder by There extensions",
      icon: Database,
      image: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/c84efc4681492a34549b3301a38c26bd.jpg?product-images=xs",
      tech: ["Python","CLI"],
      github: "https://github.com/Daufm/file_organizer_cli",
      demo: null,
      featured: false
    },
    {
      title: "Secure File Transfer Protocol",
      description: "End-to-end encrypted file sharing system with zero-knowledge architecture. Features include temporary links, access controls, and automatic file destruction.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      tech: ["Go", "React", "PostgreSQL", "AES-256", "AWS S3", "Docker"],
      github: "https://github.com/Daufm/Secure-File-Transfer_protocol",
      demo: null,
      featured: true
    },
    {
     title: "Chat App",
      description: "A real-time chat application with user authentication, group chats, and emoji support. Built for seamless and secure communication.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "Socket.io", "JWT", "MongoDB"],
      github: "https://github.com/Daufm/chat-app",
      demo: "https://github.com/Daufm/chat-app",
      featured: false
    },
    {
      title: "Portfolio",
      description: "A personal portfolio website showcasing my projects, skills, and experiences. Built for showcasing my work and attracting potential employers.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "TypeScript","Node.js", "Socket.io", "JWT", "MongoDB"],
      github: "https://github.com/Daufm/portfolio",
      demo: "https://daufm.github.io/portfolio/",
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
            <a href="https://github.com/Daufm" target="_blank" rel="noopener noreferrer">
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