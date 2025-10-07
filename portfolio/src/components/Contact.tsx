import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ContactForm from "./ContactForm";
import {
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  MapPin,
  Send,
  Heart,
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "harshharsh811811@gmail.com",
      action: () => window.open("mailto:harshharsh811811@gmail.com"),
      gradient: "from-neon-cyan to-neon-blue",
      description: "Best for professional inquiries",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 7795940400",
      action: () => window.open("tel:+917795940400"),
      gradient: "from-neon-purple to-neon-cyan",
      description: "Available for urgent matters",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      value: "+91 7795940400",
      action: () => window.open("https://wa.me/917795940400"),
      gradient: "from-green-500 to-emerald-600",
      description: "Quick messages & project discussions",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      username: "@Harsh8811-hub",
      url: "https://github.com/Harsh8811-hub",
      color: "text-foreground hover:text-neon-cyan",
      description: "Open source projects & contributions",
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      username: "harsh-151277228",
      url: "https://www.linkedin.com/in/harsh-151277228/",
      color: "text-foreground hover:text-neon-blue",
      description: "Professional network & experience",
    },
  ];

  return (
    <section className="py-8 md:py-16 lg:py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on cutting-edge AI projects? Let's discuss how
            we can build the future together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card
                  key={method.title}
                  className={`p-6 bg-glass-bg/30 backdrop-blur-md border-border/50 hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-neural hover:scale-105 animate-slide-up cursor-pointer group active:scale-95 active:bg-glass-bg/40`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={method.action}>
                  <div className="flex items-center">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${method.gradient} mr-4 group-hover:animate-neural-pulse`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-foreground group-active:text-foreground">
                        {method.title}
                      </h4>
                      <p className="text-neon-cyan font-mono text-sm mb-1 group-hover:text-neon-cyan group-active:text-neon-cyan">
                        {method.value}
                      </p>
                      <p className="text-muted-foreground text-sm group-hover:text-muted-foreground group-active:text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                    <Send className="h-5 w-5 text-muted-foreground group-hover:text-neon-cyan group-active:text-neon-cyan transition-colors duration-300" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Social Links & Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Social Presence
            </h3>
            <div className="space-y-4 mb-8">
              {socialLinks.map((link, index) => (
                <Card
                  key={link.name}
                  className={`p-6 bg-glass-bg/30 backdrop-blur-md border-border/50 hover:border-neon-purple/50 transition-all duration-500 hover:shadow-neural hover:scale-105 animate-slide-up cursor-pointer group active:scale-95 active:bg-glass-bg/40`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(link.url)}>
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-glass-bg/50 mr-4 group-hover:bg-neon-purple/10 transition-all duration-300">
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-foreground group-active:text-foreground">
                        {link.name}
                      </h4>
                      <p className="text-neon-purple font-mono text-sm mb-1 group-hover:text-neon-purple group-active:text-neon-purple">
                        {link.username}
                      </p>
                      <p className="text-muted-foreground text-sm group-hover:text-muted-foreground group-active:text-muted-foreground">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Location & Availability */}
            <Card className="p-6 bg-glass-bg/30 backdrop-blur-md border-border/50">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-neon-cyan mr-2" />
                <h4 className="text-lg font-semibold text-foreground">
                  Current Location
                </h4>
              </div>
              <p className="text-foreground/90 mb-4">
                Bengaluru, Karnataka, India
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-glow"></div>
                <span className="text-green-400 font-semibold">
                  Available for Remote and Onsite Work
                </span>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/30 text-center">
          <div className="flex flex-wrap justify-center items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 animate-glow" />
            <span>by Harsh Abakari</span>
            <Badge
              variant="outline"
              className="ml-2 bg-glass-bg/20 border-neon-cyan/30">
              AI Developer
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            © 2025 Harsh Abakari. Building the future with AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
