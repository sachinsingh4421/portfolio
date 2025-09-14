import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience building scalable web applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 backdrop-blur-sm bg-card/50 hover:bg-card/70 transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2">
                    <span className="bg-secondary-gradient bg-clip-text text-transparent">
                      Software Development Intern
                    </span>
                  </CardTitle>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Nexus Info</h3>
                </div>
                
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Dec 2024 – Feb 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Remote</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Key Achievements */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Developed a <strong className="text-foreground">stock exchange web application</strong> using Flask, HTML, CSS, and JavaScript, providing real-time trading simulations for <strong className="text-foreground">100+ users</strong>.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Designed and integrated <strong className="text-foreground">REST APIs</strong> for market data and user portfolios, improving data retrieval speed by <strong className="text-foreground">40%</strong>.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">
                    Enhanced performance with optimized JavaScript and responsive CSS, reducing load time by <strong className="text-foreground">30%</strong>.
                  </p>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Flask", "HTML5", "CSS3", "JavaScript", "REST APIs", "Real-time Data"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="hover:bg-secondary/80 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;