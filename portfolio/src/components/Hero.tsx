import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import CircularText from "./CircularText.tsx";
import SplashCursor from "./SplashCursor";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Splash Cursor Effect */}
      <SplashCursor />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          {/* Main Title with Circular Text on LEFT side */}
          <div className="flex items-center justify-center gap-6 mb-6">
            {/* Circular Text on LEFT */}
            <div className="flex items-center justify-center">
              <CircularText
                text="HARSH*ABAKARI*"
                onHover="speedUp"
                spinDuration={20}
                className="harsh-circular-text"
              />
            </div>
            {/* Main HARSH heading */}
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              HARSH
            </h1>
          </div>
          <div className="text-2xl md:text-3xl text-foreground/90 mb-4 font-light tracking-wide">
            AI Developer 
          </div>
          {/* Description removed for a cleaner look */}
        </div>

        {/* Contact Buttons */}
        <div
          className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-up"
          style={{ animationDelay: "0.3s" }}>
          <Button
            variant="outline"
            size="lg"
            className="bg-glass-bg/30 backdrop-blur-md border-neon-cyan/30 text-foreground hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-neon hover:text-foreground active:text-foreground transition-all duration-300"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=harshharsh811811@gmail.com",
                "_blank"
              )
            }>
            <Mail className="mr-2 h-5 w-5" />
            Email Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-glass-bg/30 backdrop-blur-md border-neon-purple/30 text-foreground hover:bg-neon-purple/10 hover:border-neon-purple hover:shadow-glow hover:text-foreground active:text-foreground transition-all duration-300"
            onClick={() => window.open("tel:+917795940400")}>
            <Phone className="mr-2 h-5 w-5" />
            Call Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-glass-bg/30 backdrop-blur-md border-neon-blue/30 text-foreground hover:bg-neon-blue/10 hover:border-neon-blue hover:text-foreground active:text-foreground transition-all duration-300"
            onClick={() => window.open("https://wa.me/917795940400")}>
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
          </Button>
        </div>

        {/* Social Links */}
        <div
          className="flex gap-6 justify-center animate-slide-up"
          style={{ animationDelay: "0.6s" }}>
          <Button
            variant="ghost"
            size="lg"
            className="text-foreground hover:text-neon-cyan hover:bg-neon-cyan/10 active:text-foreground transition-all duration-300 hover:scale-110"
            onClick={() => window.open("https://github.com/Harsh8811-hub")}>
            <Github className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-foreground hover:text-neon-blue hover:bg-neon-blue/10 active:text-foreground transition-all duration-300 hover:scale-110"
            onClick={() =>
              window.open("https://www.linkedin.com/in/harsh-151277228/")
            }>
            <Linkedin className="h-6 w-6" />
          </Button>
        </div>

        {/* Scroll Indicator removed */}
      </div>
    </section>
  );
};

export default Hero;
