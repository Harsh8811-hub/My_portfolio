import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-ai opacity-40" />
      <div className="absolute inset-0 bg-neural-bg/20" />

      {/* Floating Neural Nodes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-neon-cyan rounded-full animate-glow" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-neon-purple rounded-full animate-float" />
        <div
          className="absolute bottom-32 left-40 w-2 h-2 bg-neon-blue rounded-full animate-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-3 h-3 bg-neon-cyan rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            HARSH ABAKARI
          </h1>
          <div className="text-2xl md:text-3xl text-foreground/90 mb-4 font-light tracking-wide">
            AI Developer & Machine Learning Engineer
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
            className="bg-glass-bg/30 backdrop-blur-md border-neon-cyan/30 text-foreground hover:bg-neon-cyan/10 hover:border-neon-cyan hover:shadow-neon transition-all duration-300"
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
            className="bg-glass-bg/30 backdrop-blur-md border-neon-purple/30 text-foreground hover:bg-neon-purple/10 hover:border-neon-purple hover:shadow-glow transition-all duration-300"
            onClick={() => window.open("tel:+917795940400")}>
            <Phone className="mr-2 h-5 w-5" />
            Call Me
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-glass-bg/30 backdrop-blur-md border-neon-blue/30 text-foreground hover:bg-neon-blue/10 hover:border-neon-blue transition-all duration-300"
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
            className="text-foreground hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:scale-110"
            onClick={() => window.open("https://github.com/Harsh8811-hub")}>
            <Github className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="text-foreground hover:text-neon-blue hover:bg-neon-blue/10 transition-all duration-300 hover:scale-110"
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
