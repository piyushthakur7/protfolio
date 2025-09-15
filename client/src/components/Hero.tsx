import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-gradient absolute inset-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="gradient-text">Piyush Thakur</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Web Developer & Data Scientist
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences through code and turning data into actionable insights.
              Passionate about creating beautiful, functional web applications and discovering patterns that drive innovation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                data-testid="button-see-work"
              >
                <span>See My Work</span>
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-border text-foreground hover:border-primary hover:text-primary font-semibold px-8 py-4 transform hover:scale-105 transition-all duration-200"
                data-testid="button-get-in-touch"
              >
                <span>Get In Touch</span>
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/piyushthakur7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-200"
              data-testid="link-github"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-thakur-6656a429a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-200"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:tpiyush300@gmail.com"
              className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-200"
              data-testid="link-email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <ArrowDown className="text-muted-foreground h-6 w-6" />
        </div>
      </div>
    </section>
  );
}
