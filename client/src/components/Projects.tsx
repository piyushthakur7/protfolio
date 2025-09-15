import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js, featuring user authentication, payment processing, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/piyushthakur7/ecommerce",
      demo: "https://ecommerce-demo.com",
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent analytics platform that uses machine learning to predict trends and provide actionable insights from business data with interactive visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "TensorFlow", "D3.js"],
      github: "https://github.com/piyushthakur7/analytics-dashboard",
      demo: "https://analytics-demo.com",
    },
    {
      id: 3,
      title: "Social Media App",
      description: "A modern social media platform with real-time messaging, post sharing, and content discovery features, built with React Native for cross-platform compatibility.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["React Native", "Firebase", "Redux"],
      github: "https://github.com/piyushthakur7/social-app",
      demo: "https://social-app-demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What Can I <span className="gradient-text">Build</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and data science.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card card-glow rounded-2xl overflow-hidden border border-border transition-all duration-300 hover:scale-105"
              data-testid={`project-card-${project.id}`}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={`${project.title} interface`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm rounded-full ${
                        index % 2 === 0 ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"
                      }`}
                      data-testid={`project-tag-${tag.toLowerCase()}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="secondary"
                    className="flex-1"
                    asChild
                    data-testid={`project-github-${project.id}`}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                    data-testid={`project-demo-${project.id}`}
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-border text-foreground hover:border-primary hover:text-primary transform hover:scale-105 transition-all duration-200"
            asChild
            data-testid="button-view-all-projects"
          >
            <a href="https://github.com/piyushthakur7" target="_blank" rel="noopener noreferrer">
              <span>View All Projects</span>
              <Github className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
