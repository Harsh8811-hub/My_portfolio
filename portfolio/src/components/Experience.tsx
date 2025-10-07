import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Agentic & Automation Engineer",
      company: "Business Optima",
      location: "Remote",
      period: "August 2025 - Present",
      type: "Current",
      description: [
        "Developed and deployed AI agentic automation solutions to streamline business workflows and optimize operational efficiency",
        "Built intelligent web scraping systems using Browser Use and agentic tools to extract structured data from dynamic websites",
        "Designed and implemented AI-powered Gmail automation project using Gemini API and Google Cloud Platform for intelligent email processing",
        "Created automated email analysis, response generation, event scheduling, and follow-up task management systems",
        "Integrated multiple automation pipelines using Google Cloud Platform services to improve efficiency and deliver actionable insights",
        "Optimized business processes by reducing manual effort through intelligent automation and AI-driven decision making",
      ],
      skills: [
        "Gemini API",
        "Google Cloud Platform",
        "Browser Use",
        "AI Automation",
        "Web Scraping",
        "Gmail API",
        "Agentic AI",
        "Workflow Automation",
      ],
    },
    {
      title: "Project Intern",
      company: "IIT Madras",
      location: "Chennai, India",
      period: "May 2025 - July 2025",
      type: "Remote",
      description: [
        "Built a multimodal NDE assistant using Gemini 2.0, FAISS, LangChain, and Sentence Transformers",
        "Implemented secure PDF/DOCX/TXT parsing and vector retrieval systems",
        "Integrated BLIP-2 and Stable Diffusion for image QA and text-to-image generation",
        "Developed CLI-based chatbot with encrypted ZIP handling and real-time logging",
      ],
      skills: [
        "Gemini 2.0",
        "FAISS",
        "LangChain",
        "BLIP-2",
        "Stable Diffusion",
        "Vector DB",
      ],
    },
    {
      title: "AI Developer",
      company: "Sentics",
      location: "Germany",
      period: "Feb 2025 - April 2025",
      type: "Remote",
      description: [
        "Worked on machine learning model training and image annotation for computer vision tasks",
        "Focused on accuracy and efficiency optimization for safety applications",
        "Contributed to AI-driven solutions for workplace safety enhancement",
        "Developed hazard detection systems using advanced computer vision",
      ],
      skills: [
        "Computer Vision",
        "Image Annotation",
        "ML Training",
        "Safety AI",
        "Hazard Detection",
      ],
    },
    {
      title: "Project Intern - Relationship Extraction",
      company: "NIT Trichy",
      location: "Tiruchirappalli, India",
      period: "July 2024 - Feb 2025",
      type: "Research",
      description: [
        "Performed relationship extraction on text to identify and classify entity pairs",
        "Annotated NER datasets and improved extraction quality through custom labeling",
        "Applied Kolmogorov-Arnold Network (KAN) for advanced entity recognition",
        "Developed preprocessing pipelines for enhanced relation mapping accuracy",
      ],
      skills: [
        "NLP",
        "Relationship Extraction",
        "NER",
        "KAN Networks",
        "Entity Recognition",
      ],
    },
    {
      title: "Summer Intern - Sentiment Analysis",
      company: "IIT Guwahati",
      location: "Guwahati, India",
      period: "Jun 2023 - July 2023",
      type: "Research",
      description: [
        "Utilized Google API to translate Sentiment-140 dataset into various Indian languages",
        "Implemented CNN, BiLSTM, and GRU models for sentiment analysis",
        "Used IndieBERT, IndicFT, and MuRIL embeddings for Indian language processing",
        "Conducted rigorous evaluation using accuracy, precision, F1 score, and recall metrics",
      ],
      skills: [
        "Sentiment Analysis",
        "CNN",
        "BiLSTM",
        "GRU",
        "IndieBERT",
        "Indian Languages",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Engineering",
      institution: "Mizoram University",
      period: "Nov 2021 - June 2025",
      grade: "CGPA: 8.5",
      status: "current",
    },
  ];

  return (
    <section className="py-8 md:py-16 lg:py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`p-8 bg-glass-bg/30 backdrop-blur-md border-border/50 hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-neural animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <Badge
                        variant={
                          exp.type === "Current" ? "default" : "secondary"
                        }
                        className={
                          exp.type === "Current"
                            ? "bg-neon-cyan text-background"
                            : "bg-secondary/30"
                        }>
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground mb-2">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span className="font-semibold text-neon-cyan">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-foreground/90 flex items-start">
                      <span className="w-2 h-2 bg-neon-cyan rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-glass-bg/20 backdrop-blur-md border-neon-purple/30 text-foreground hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div id="education">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
              Education
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            {education.map((edu, index) => (
              <Card
                key={index}
                className={`p-6 bg-glass-bg/30 backdrop-blur-md border-border/50 hover:border-neon-blue/50 transition-all duration-500 hover:shadow-neural hover:scale-105 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${
                      edu.status === "current"
                        ? "from-neon-cyan to-neon-blue"
                        : "from-neon-purple to-neon-cyan"
                    } flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-background">
                      {edu.degree.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-neon-cyan font-semibold mb-2">
                    {edu.field}
                  </p>
                  <p className="text-foreground/90 mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm mb-2">
                    {edu.period}
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-neon-blue/10 text-neon-blue border-neon-blue/30">
                    {edu.grade}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
