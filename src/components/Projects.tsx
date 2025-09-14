import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Job Portal",
      description: "Full-stack job portal with secure job postings, applications, and user authentication. Features role-based access and optimized responsive UI.",
      technologies: ["Flask", "HTML", "CSS", "JavaScript", "MySQL"],
      liveUrl: "https://jobs.careerhubs.info",
      githubUrl: "https://github.com/sachinsingh4421/job-portal",
      highlights: [
        "Secure job management (reliability ↑ 40%)",
        "User authentication & role-based access",
        "Reduced bounce rate by 30%"
      ]
    },
    {
      title: "Notionary",
      description: "Secure note-taking web application with Flask and Bootstrap 5. Includes authentication, session handling, and password hashing for 50+ users.",
      technologies: ["Flask", "Bootstrap 5", "SQLAlchemy", "Flask-Login"],
      liveUrl: "https://notionary-notes-share.onrender.com",
      githubUrl: "https://github.com/sachinsingh4421/Notionary",
      highlights: [
        "Enhanced security by 45%",
        "Responsive UI across devices",
        "Session handling & password hashing"
      ]
    },
    {
      title: "CodeShare",
      description: "Real-time collaborative code-sharing platform for 200+ developers with WebSocket-based live collaboration and instant compilation engine.",
      technologies: ["Flask", "React.js", "MongoDB"],
      liveUrl: "https://code.careerhubs.info",
      githubUrl: "https://github.com/sachinsingh4421/CodeShare",
      highlights: [
        "Real-time collaboration for 200+ users",
        "Reduced feedback loop time by 50%",
        "Boosted execution speed by 40%"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-border/50 backdrop-blur-sm bg-card/50 hover:bg-card/70 transition-all duration-300 group h-full flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="bg-primary-gradient bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button asChild className="flex-1 bg-primary-gradient hover:shadow-glow-primary transition-all duration-300">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View code">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;