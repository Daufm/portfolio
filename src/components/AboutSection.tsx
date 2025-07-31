import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Shield, Server, Database } from "lucide-react";
import profileImg from "@/assets/image.png";

const AboutSection = () => {
  const skills = {
    programming: ["Python","PHP" , "JavaScript", "C++", "TypeScript", ],
    cybersecurity: ["Network Security","Web Hacking", "Penetration Testing"],
    tools: ["Docker",  "Linux", "Git", "Wireshark", "Metasploit"],
    frameworks: ["React", "Node.js", "Express", "FastAPI"], 
  };

  const SkillCard = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
    <Card className="bg-card/50 border-cyber-primary/20 hover:border-cyber-primary/40 transition-all duration-300 hover:shadow-cyber/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-cyber-primary">
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="bg-secondary/30 text-cyber-secondary border border-cyber-secondary/20"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="about" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-cyber-primary">
            <span className="font-mono">&lt;</span> About Me <span className="font-mono">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Profile & Bio */}
          <div className="space-y-6">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative mb-6">
                <img 
                  src={profileImg} 
                  alt="Fuad Mohammed" 
                  className="w-48 h-48 rounded-full object-cover border-4 border-cyber-primary/30 shadow-glow"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-cyber opacity-20" />
              </div>
              
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4 text-cyber-secondary">Computer Science Graduate</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Recent Computer Science graduate with a passion for cybersecurity and software development. 
                  Experienced in building secure Web applications, conducting vulnerability assessments, and 
                  implementing defensive security measures. Always eager to learn new technologies and 
                  contribute to innovative projects that make the digital world safer.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding or hunting for vulnerabilities, you'll find me participating in CTF 
                  competitions, contributing to open-source projects, or exploring the latest developments .
                </p>
              </div>
            </div>
          </div>

          {/* Education & Quick Stats */}
          <div className="space-y-6">
            <Card className="bg-card/50 border-cyber-primary/20">
              <CardHeader>
                <CardTitle className="text-cyber-primary">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-cyber-secondary">Bachelor of Science in Computer Science</h4>
                    <p className="text-muted-foreground">University of Gondar • 2025</p>
                    <p className="text-sm text-muted-foreground mt-1">Concentration in Cybersecurity  and Web App Development• GPA: 3.6/4.0</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold text-cyber-secondary mb-2">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Network Security", "Cryptography", "Ethical Hacking", "Software Engineering, Web Development"].map(course => (
                        <Badge key={course} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card/30 rounded-lg border border-cyber-primary/20">
                <div className="text-2xl font-bold text-cyber-primary">15+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-card/30 rounded-lg border border-cyber-primary/20">
                <div className="text-2xl font-bold text-cyber-secondary">5</div>
                <div className="text-sm text-muted-foreground">CTF Competitions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard icon={Code} title="Programming" skills={skills.programming} />
          <SkillCard icon={Shield} title="Cybersecurity" skills={skills.cybersecurity} />
          <SkillCard icon={Server} title="Tools & Platforms" skills={skills.tools} />
          <SkillCard icon={Database} title="Frameworks" skills={skills.frameworks} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;