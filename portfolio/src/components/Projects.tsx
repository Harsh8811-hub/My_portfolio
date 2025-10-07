import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Brain, Zap, Target } from "lucide-react";
import workspaceImg from "@/assets/workspace.jpg";
import neuralPatternImg from "@/assets/neural-pattern.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AgriScan",
      subtitle: "Dragonfruit Stem Disease Detection",
      description:
        "Advanced AI-powered plant disease detection system achieving 95% accuracy using state-of-the-art computer vision models.",
      image: workspaceImg,
      icon: <Target className="h-6 w-6" />,
      features: [
        "95% accuracy using CNN, MobileNetV2, ResNet50, and Vision Transformer",
        "Optimized deep learning models with advanced hyperparameter tuning",
        "Precision agriculture application for real-world farming solutions",
        "Research findings under review for academic publication",
      ],
      tech: [
        "Computer Vision",
        "CNN",
        "ResNet50",
        "Vision Transformer",
        "PyTorch",
        "Agriculture AI",
      ],
      status: "Research Under Review",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "CryptoSent",
      subtitle: "Reddit-Based Sentiment Analysis",
      description:
        "Comprehensive cryptocurrency sentiment analysis platform leveraging advanced NLP and LLM technologies.",
      image: neuralPatternImg,
      icon: <Brain className="h-6 w-6" />,
      features: [
        "LLM-powered sentiment analysis using VADER, TextBlob, and Transformers",
        "Interactive real-time Streamlit dashboard for crypto trend monitoring",
        "Visual analytics with entity extraction and sentiment scoring",
        "Explainable AI using Gemini LLM for reasoning transparency",
      ],
      tech: [
        "NLP",
        "VADER",
        "TextBlob",
        "Transformers",
        "Streamlit",
        "Gemini LLM",
        "Reddit API",
      ],
      status: "Live Demo",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "SmartRoute Vision",
      subtitle: "Intelligent Traffic Management",
      description:
        "Next-generation computer vision system for smart traffic monitoring and pedestrian safety enhancement.",
      image: workspaceImg,
      icon: <Eye className="h-6 w-6" />,
      features: [
        "YOLOv8x6 deployment for real-time pedestrian and vehicle detection",
        "Intelligent spatial filtering to exclude people inside vehicles",
        "Road-aware scene segmentation with direction detection",
        "Auto-classification of one-way vs two-way lanes for enhanced understanding",
      ],
      tech: [
        "YOLOv8",
        "Computer Vision",
        "Real-time Detection",
        "Spatial Filtering",
        "Scene Segmentation",
      ],
      status: "Production Ready",
      gradient: "from-cyan-500 to-teal-600",
    },
    {
      title: "Spotify Clone",
      subtitle: "Full-Stack Music Platform",
      description:
        "Feature-rich music streaming platform built with modern web technologies and real-time capabilities.",
      image: neuralPatternImg,
      icon: <Zap className="h-6 w-6" />,
      features: [
        "Full-stack MERN application with TypeScript integration",
        "Real-time chat system and live user activity tracking",
        "Admin dashboard for comprehensive album and song management",
        "Interactive UI with volume control, navigation, and analytics",
      ],
      tech: [
        "MERN Stack",
        "TypeScript",
        "MongoDB",
        "Cloudinary",
        "Clerk",
        "Real-time Features",
      ],
      status: "Open Source",
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <section className="py-8 md:py-16 lg:py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group relative overflow-hidden bg-glass-bg/30 backdrop-blur-md border-border/50 hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-neural hover:scale-[1.02] animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div
                  className={`absolute top-4 left-4 p-3 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                  {project.icon}
                </div>
                <Badge
                  variant="secondary"
                  className="absolute top-4 right-4 bg-glass-bg/80 backdrop-blur-md text-foreground">
                  {project.status}
                </Badge>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neon-cyan font-semibold mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-foreground/90 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-foreground/80 flex items-start">
                        <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs bg-glass-bg/20 backdrop-blur-md border-neon-purple/30 text-foreground hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-glass-bg/30 backdrop-blur-md border-neon-purple/30 text-foreground hover:bg-neon-purple/10 hover:border-neon-purple hover:shadow-glow hover:text-foreground active:text-foreground transition-all duration-300">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-glass-bg/30 backdrop-blur-md rounded-2xl border border-neon-cyan/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Want to see more projects?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Check out my GitHub profile for additional projects and
              contributions to open source
            </p>
            <Button
              size="lg"
              className="bg-gradient-neon text-background hover:opacity-90 hover:text-background active:text-background transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://github.com/Harsh8811-hub")}>
              <Github className="mr-2 h-5 w-5" />
              Visit GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
