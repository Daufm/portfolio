import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Daufm",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/fuad-mohammed",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:fuadmohammed368@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-cyber-dark border-t border-cyber-primary/20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-bold text-xl mb-4">
              <span className="text-cyber-primary font-mono">&lt;</span>
              <span className="text-foreground">Alex</span>
              <span className="text-cyber-secondary">Chen</span>
              <span className="text-cyber-primary font-mono">/&gt;</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Computer Science Graduate passionate about cybersecurity and building secure, 
              innovative software solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-cyber-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-cyber-primary transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-cyber-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#cybersecurity" className="text-muted-foreground hover:text-cyber-primary transition-colors">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-cyber-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-cyber-secondary mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-background/30 border border-cyber-primary/20 rounded-lg flex items-center justify-center text-cyber-primary hover:bg-cyber-primary/10 hover:border-cyber-primary/40 transition-all duration-300"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Let's connect and discuss opportunities in cybersecurity and software development.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Fuad Mohammed. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-cyber-secondary" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;