import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, GitBranch, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      skills: ["Python", "JavaScript"],
      color: "bg-primary-gradient"
    },
    {
      icon: Database,
      title: "Tech Stack",
      skills: ["ReactJS", "Flask", "MySQL", "MongoDB", "REST APIs", "HTML5", "CSS", "Tailwind CSS"],
      color: "bg-secondary-gradient"
    },
    {
      icon: Wrench,
      title: "Developer Tools",
      skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code"],
      color: "bg-accent-gradient"
    },
    {
      icon: GitBranch,
      title: "Exposure",
      skills: ["Machine Learning", "Data Analysis"],
      color: "bg-primary-gradient"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-secondary-gradient bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skillset spanning full-stack development, databases, and modern tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border/50 backdrop-blur-sm bg-card/50 hover:bg-card/70 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.color} group-hover:shadow-glow-primary transition-all duration-300`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-secondary/80 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;