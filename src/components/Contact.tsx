import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sk3935910@gmail.com",
      href: "mailto:sk3935910@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 82359 12417",
      href: "tel:+918235912417"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sachin-singh-356055232",
      color: "hover:text-blue-400"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sachinsingh4421",
      color: "hover:text-gray-300"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 backdrop-blur-sm bg-card/50 hover:bg-card/70 transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                <span className="bg-secondary-gradient bg-clip-text text-transparent">
                  Ready to work together?
                </span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="text-center group">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-lg bg-primary-gradient group-hover:shadow-glow-primary transition-all duration-300">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{contact.label}</h3>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{contact.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 pt-8 border-t border-border/50">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center pt-6">
                <Button asChild className="bg-primary-gradient hover:shadow-glow-primary transition-all duration-300 group">
                  <a href="mailto:sk3935910@gmail.com">
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;