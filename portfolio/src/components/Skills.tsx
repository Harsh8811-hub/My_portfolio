import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Code2,
  Database,
  GitBranch,
  Zap,
  Cpu,
  Network,
  Eye,
  BarChart3,
  Layers,
  Settings,
  Users,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="h-6 w-6" />,
      skills: ["🐍 Python", "⚡ C++", "🟨 JavaScript", "🗃️ SQL"],
      gradient: "from-neon-cyan to-neon-blue",
    },
    {
      title: "AI/ML Frameworks",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        "🧠 TensorFlow",
        "🔥 PyTorch",
        "⚡ Keras",
        "🔍 RAG",
        "🟢 NodeJS",
      ],
      gradient: "from-neon-purple to-neon-cyan",
    },
    {
      title: "Data Science Libraries",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        "📊 NumPy",
        "🐼 Pandas",
        "🤖 Scikit-learn",
        "👁️ OpenCV",
        "📈 Matplotlib",
        "🌊 Seaborn",
      ],
      gradient: "from-neon-blue to-neon-purple",
    },
    {
      title: "Web & Backend",
      icon: <Layers className="h-6 w-6" />,
      skills: ["⚛️ React", "🔄 Redux", "🟨 JavaScript", "🟢 NodeJS"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "AI Tools & Platforms",
      icon: <Zap className="h-6 w-6" />,
      skills: [
        "🤗 Hugging Face",
        "⛓️ LangChain",
        "🔍 FAISS",
        "🔄 Transformers",
      ],
      gradient: "from-neon-cyan to-neon-purple",
    },
    {
      title: "Development Tools",
      icon: <Settings className="h-6 w-6" />,
      skills: [
        "🐙 Git & GitHub",
        "☸️ Kubernetes",
        "🐳 Docker",
        "📮 Postman",
        "🔄 CI/CD",
      ],
      gradient: "from-neon-purple to-neon-blue",
    },
    {
      title: "Specialized AI Tools",
      icon: <Network className="h-6 w-6" />,
      skills: [
        "🔗 n8n",
        "🎙️ VAPI",
        "🔊 Elevenlabs",
        "🤖 AI Agents",
        "📓 Jupyter",
      ],
      gradient: "from-neon-blue to-neon-cyan",
    },
    {
      title: "Databases & Platforms",
      icon: <Database className="h-6 w-6" />,
      skills: [
        "🐬 MySQL",
        "🐘 PostgreSQL",
        "📊 Data Management",
        "☁️ Cloud Platforms",
      ],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Voice & Communication",
      icon: <Eye className="h-6 w-6" />,
      skills: [
        "🎤 LiveKit",
        "🔊 Voice AI",
        "📞 Communication APIs",
        "🎧 Audio Processing",
      ],
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const softSkills = [
    { name: "Problem-solving", icon: <Cpu className="h-4 w-4" /> },
    { name: "Critical thinking", icon: <Brain className="h-4 w-4" /> },
    { name: "Communication", icon: <Users className="h-4 w-4" /> },
    { name: "Leadership", icon: <Eye className="h-4 w-4" /> },
    { name: "Time management", icon: <Layers className="h-4 w-4" /> },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-neural relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-ai"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-neon bg-clip-text text-transparent">
            Technical Expertise
          </h2>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className={`p-6 bg-glass-bg/30 backdrop-blur-md border-border/50 hover:border-neon-cyan/50 transition-all duration-500 hover:shadow-neural hover:scale-105 animate-slide-up group`}
              style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${category.gradient} mr-3 group-hover:animate-neural-pulse`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary/30 text-foreground hover:bg-neon-cyan/10 hover:text-neon-cyan transition-all duration-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Core Competencies
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {softSkills.map((skill, index) => (
              <Badge
                key={skill.name}
                variant="outline"
                className={`px-4 py-2 text-sm bg-glass-bg/20 backdrop-blur-md border-neon-purple/30 text-foreground hover:bg-neon-purple/10 hover:border-neon-purple hover:shadow-glow transition-all duration-300 animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}>
                {skill.icon}
                <span className="ml-2">{skill.name}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
