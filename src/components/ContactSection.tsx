import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the email
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });

    
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "fuad.mohammed368@gmail.com",
      link: "mailto:fuad.mohammed368@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251 9 75986813",
      link: "tel:+251975986813"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Daufm",
      username: "@Daufm"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/fuad-mohammed",
      username: "Fuad Mohammed"
    },
    {
      icon: MessageCircle,
      label: "Telegram account",
      url: "https://t.me/mood_rush",
      username: "@mood_rush"
    },
    {
      icon: MessageCircle,
      label: "Telegram Channel",
      url: "https://t.me/devTalkStaff",
      username: "@devTalkStaff"
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:fuad.mohammed368@gmail.com",
      username: "fuad.mohammed368@gmail.com"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-cyber-primary">
            <span className="font-mono">&lt;</span> Get In Touch <span className="font-mono">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, or just having a conversation 
            about cybersecurity and technology. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 border-cyber-primary/20">
            <CardHeader>
              <CardTitle className="text-cyber-primary">Send Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-cyber-primary/30 focus:border-cyber-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-cyber-primary/30 focus:border-cyber-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-cyber-primary/30 focus:border-cyber-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background/50 border-cyber-primary/30 focus:border-cyber-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-cyber hover:shadow-cyber transition-all duration-300 text-cyber-dark font-semibold"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-card/50 border-cyber-primary/20">
              <CardHeader>
                <CardTitle className="text-cyber-primary">Contact Information</CardTitle>
                <CardDescription>
                  Prefer direct contact? Reach out through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-4 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors">
                      <Icon className="h-5 w-5 text-cyber-primary" />
                      <div>
                        <div className="font-medium text-cyber-secondary">{info.label}</div>
                        <div className="text-sm text-muted-foreground">{info.value}</div>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 border-cyber-primary/20">
              <CardHeader>
                <CardTitle className="text-cyber-primary">Connect Online</CardTitle>
                <CardDescription>
                  Follow my work and connect with me on social platforms.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors group"
                    >
                      <Icon className="h-5 w-5 text-cyber-primary group-hover:text-cyber-glow transition-colors" />
                      <div>
                        <div className="font-medium text-cyber-secondary">{social.label}</div>
                        <div className="text-sm text-muted-foreground">{social.username}</div>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Available for Work */}
            <Card className="bg-gradient-cyber/10 border-cyber-primary/30">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-cyber-secondary rounded-full animate-pulse" />
                    <span className="text-cyber-secondary font-semibold">Available for Work</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Currently seeking opportunities in cybersecurity, software development, 
                    or security consulting roles.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-cyber-primary text-cyber-primary hover:bg-cyber-primary/10"
                    asChild
                  >
                    <a href="#resume">
                      View Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;