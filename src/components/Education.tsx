import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const certifications = [
    <span key="sql">
      <strong>SQL (Basic) Certificate</strong> – HackerRank{' '}
      <a href="https://www.hackerrank.com/certificates/fa9a3fd9f45c" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        [View]
      </a>
    </span>,
    <span key="js">
      <strong>JavaScript (Basic) Certificate</strong> – HackerRank{' '}
      <a href="https://www.hackerrank.com/certificates/edc3e538c00a" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        [View]
      </a>
    </span>,
    <span key="python">
      <strong>Python Developer Internship</strong> – CodeClause{' '}
      <a href="https://drive.google.com/file/d/1rVmhq7o94DuZ5nF9F3SxlzOuJBX0Abt1/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        [View]
      </a>
    </span>
  ];

  const activities = [
    "Organized and led coding workshops, mentoring 100+ students on DSA and full-stack projects",
    "Active participant in hackathons, winning 2nd place at a university-level AI/ML competition",
    "Core member of the university's Coding Club, handling technical sessions and event coordination",
    "Volunteered for NGOs, building web apps for community projects"
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Education & Growth
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <Card className="border-border/50 backdrop-blur-sm bg-card/50 hover:bg-card/70 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary-gradient">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  <span className="bg-primary-gradient bg-clip-text text-transparent">
                    Education
                  </span>
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-lg text-muted-foreground font-medium mb-3">
                  Maharishi Markandeshwar (Deemed to be University)
                </p>
                
                <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>2022 – 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Ambala, India</span>
                  </div>
                </div>
                
                <Badge className="bg-secondary-gradient text-white font-semibold">
                  CGPA: 8.05/10.0
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="border-border/50 backdrop-blur-sm bg-card/50 hover:bg-card/70 transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-secondary-gradient">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">
                  <span className="bg-secondary-gradient bg-clip-text text-transparent">
                    Certifications
                  </span>
                </CardTitle>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">{cert}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Extracurricular Activities */}
        <Card className="border-border/50 backdrop-blur-sm bg-card/50 hover:bg-card/70 transition-all duration-300 mt-8 max-w-6xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              <span className="bg-accent-gradient bg-clip-text text-transparent">
                Leadership & Community Impact
              </span>
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{activity}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;