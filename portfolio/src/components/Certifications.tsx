import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Star, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Introduction to AI and Machine Learning",
      issuer: "Google Cloud",
      category: "AI/ML",
      level: "Professional",
      icon: "🤖",
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      category: "Generative AI",
      level: "Professional",
      icon: "⚡",
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      category: "Analytics",
      level: "Professional",
      icon: "📊",
    },
    {
      title: "Deep Learning Professional Certificate",
      issuer: "IBM",
      category: "Deep Learning",
      level: "Professional",
      icon: "🧠",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      category: "Web Development",
      level: "Certification",
      icon: "💻",
    },
    {
      title: "3D Printing Technology",
      issuer: "PEC-AICTE IDEA Lab",
      category: "Manufacturing",
      level: "Skill Development",
      icon: "🏭",
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "NIELIT",
      category: "Security",
      level: "Certification",
      icon: "🔐",
    },
    {
      title: "Data Visualization",
      issuer: "TATA (Forage)",
      category: "Data Science",
      level: "Professional",
      icon: "📈",
    },
    {
      title: "Satellite Communication & Navigation",
      issuer: "NESAC",
      category: "Space Technology",
      level: "Specialized",
      icon: "🛰️",
    },
  ];

  const categoryColors = {
    "AI/ML": "from-neon-cyan to-neon-blue",
    "Generative AI": "from-neon-purple to-neon-cyan",
    "Deep Learning": "from-neon-blue to-neon-purple",
    Analytics: "from-green-500 to-emerald-600",
    "Web Development": "from-orange-500 to-red-600",
    Research: "from-purple-500 to-pink-600",
    Manufacturing: "from-yellow-500 to-orange-600",
    Security: "from-red-500 to-pink-600",
    "Data Science": "from-blue-500 to-cyan-600",
    "Space Technology": "from-indigo-500 to-purple-600",
  };

  const levelBadgeStyles = {
    Professional: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30",
    Certification: "bg-neon-blue/10 text-neon-blue border-neon-blue/30",
    Internship: "bg-neon-purple/10 text-neon-purple border-neon-purple/30",
    "Skill Development": "bg-green-500/10 text-green-400 border-green-500/30",
    Specialized: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  };

  return (
    <section className="py-8 md:py-16 lg:py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`p-6 bg-glass-bg/30 backdrop-blur-md border-border/50 hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-neural hover:scale-105 animate-slide-up group`}
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${
                    categoryColors[cert.category]
                  } group-hover:animate-neural-pulse`}>
                  <span className="text-2xl">{cert.icon}</span>
                </div>
                <Badge
                  variant="outline"
                  className={levelBadgeStyles[cert.level]}>
                  {cert.level}
                </Badge>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-neon-cyan font-semibold mb-1">
                  {cert.issuer}
                </p>
                <Badge
                  variant="secondary"
                  className="bg-secondary/30 text-foreground text-xs">
                  {cert.category}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                  Verified
                </div>
                <Award className="h-5 w-5 text-neon-cyan" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
