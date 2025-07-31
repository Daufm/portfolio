import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Trophy, BookOpen, ExternalLink, Target } from "lucide-react";

const CybersecuritySection = () => {
  const certifications = [
    {
      name: "BBCS-IEH Cybersecuritybootcamp",
      issuer: "BBCS-IEH",
      date: "2025",
      status: "Certified",
      icon: Shield,
      color: "text-cyber-primary"
    },
    {
      name: " Ethical Hacker (EH)",
      issuer: "Cisco",
      date: "In Progress",
      status: "Expected 2025",
      icon: Target,
      color: "text-cyber-secondary"
    },
    {
      name: "javascript Intermideate",
      issuer: "sololearn",
      date: "2025",
      status: "Certified",
      icon: BookOpen,
      color : "text-cyber-primary"
    },
    {
      name: "Python for Everybody",
      issuer: "Coursera",
      date: "2024",
      status: "Certified",
      icon: Award,
      color: "text-cyber-secondary"
    }
  ];

  const achievements = [
    {
      platform: "TryHackMe",
      rank: "Sekeer",
      points: "1,000+",
      badges: 2,
      link: "https://tryhackme.com/p/Fuad001"
    },
    
  ];

  const ctfResults = [
    {
      name: "CyberDefenders CTF 2024",
      team: "ByteBreakers",
      category: "Digital Forensics",
      points: "3,250"
    },
    {
      name: "PicoCTF 2024",
      team: "Solo",
      category: "General",
      points: "8,900"
    },
    {
      name: "NahamCon CTF 2024",
      team: "CyberGuards",
      category: "Web Exploitation",
      points: "4,100"
    }
  ];

  const tools = [
    { name: "Wireshark", category: "Network Analysis" },
    { name: "Metasploit", category: "Penetration Testing" },
    { name: "Burp Suite", category: "Web Security" },
    { name: "Nmap", category: "Network Scanning" },
    {name : "VsCode", category: "Code Editor"},
    {name : "Kali Linux", category: "Operating System"},

  ];

  return (
    <section id="cybersecurity" className="py-20 px-4 bg-gradient-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-cyber-primary">
            <span className="font-mono">&lt;</span> Cybersecurity <span className="font-mono">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in cybersecurity through certifications, practical experience, and continuous learning. 
            Passionate about ethical hacking, building robust Web Applications.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-cyber-secondary">
            <Award className="inline mr-2 h-6 w-6" />
            Certifications & Training
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="bg-card/50 border-cyber-primary/20 hover:border-cyber-primary/40 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className={`h-6 w-6 ${cert.color}`} />
                      {cert.name}
                    </CardTitle>
                    <CardDescription>{cert.issuer} • {cert.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge 
                      variant={cert.status === "Certified" ? "default" : "secondary"}
                      className={cert.status === "Certified" ? "bg-cyber-primary text-cyber-dark" : ""}
                    >
                      {cert.status}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Platform Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-cyber-secondary">
            <Trophy className="inline mr-2 h-6 w-6" />
            Platform Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-card/50 border-cyber-primary/20 hover:border-cyber-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-cyber-primary">{achievement.platform}</CardTitle>
                  <CardDescription>Rank: {achievement.rank}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Points:</span>
                      <div className="font-semibold text-cyber-secondary">{achievement.points}</div>
                    </div>
                    {/* <div>
                      <span className="text-muted-foreground">
                        {achievement.streak ? "Streak:" : "Machines:"}
                      </span>
                      <div className="font-semibold text-cyber-secondary">
                        {achievement.streak || achievement.machines}
                      </div>
                    </div> */}
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-secondary/30">
                      {achievement.badges} Badges
                    </Badge>
                    <Button variant="outline" size="sm" asChild>
                      <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Profile
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTF Results */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-cyber-secondary">
            <Target className="inline mr-2 h-6 w-6" />
            Capture The Flag Competitions
          </h3>
          <div className="grid gap-6">
            {ctfResults.map((ctf, index) => (
              <Card key={index} className="bg-card/50 border-cyber-primary/20 hover:border-cyber-primary/40 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-5 gap-4 items-center">
                    <div>
                      <h4 className="font-semibold text-cyber-primary">{ctf.name}</h4>
                      <p className="text-sm text-muted-foreground">{ctf.category}</p>
                    </div>
                    {/* <div className="text-center">
                      <div className="font-bold text-cyber-secondary">{ctf.position}</div>
                      <div className="text-xs text-muted-foreground">Position</div>
                    </div> */}
                    <div className="text-center">
                      <div className="font-bold">{ctf.team}</div>
                      <div className="text-xs text-muted-foreground">Team</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-cyber-primary">{ctf.points}</div>
                      <div className="text-xs text-muted-foreground">Points</div>
                    </div>
                    <div className="text-center">
                      <Badge variant="outline" className="bg-cyber-primary/10 border-cyber-primary/30">
                        Completed
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-cyber-secondary">
            <BookOpen className="inline mr-2 h-6 w-6" />
            Security Tools & Technologies
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div 
                key={index} 
                className="bg-card/30 border border-cyber-primary/20 rounded-lg p-4 text-center hover:border-cyber-primary/40 transition-all duration-300"
              >
                <h4 className="font-semibold text-cyber-primary mb-1">{tool.name}</h4>
                <p className="text-xs text-muted-foreground">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CybersecuritySection;