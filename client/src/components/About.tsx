import { Code, Server, TrendingUp } from "lucide-react";

export default function About() {
  const skills = [
    { name: "React", color: "bg-primary/20 text-primary" },
    { name: "Python", color: "bg-accent/20 text-accent" },
    { name: "Node.js", color: "bg-primary/20 text-primary" },
    { name: "TensorFlow", color: "bg-accent/20 text-accent" },
    { name: "PostgreSQL", color: "bg-primary/20 text-primary" },
    { name: "Docker", color: "bg-accent/20 text-accent" },
  ];

  const expertise = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, Vue.js, Tailwind CSS",
      color: "bg-primary/20 text-primary",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express, Django",
      color: "bg-accent/20 text-accent",
    },
    {
      icon: TrendingUp,
      title: "Data Science",
      description: "Python, TensorFlow, Pandas",
      color: "bg-primary/20 text-primary",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer and data scientist with over 5 years of experience building
                scalable web applications and extracting insights from complex datasets. My journey began with a
                curiosity about how things work, which led me to explore both the creative and analytical sides of technology.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or diving deep into the latest machine learning research. I believe in the power of technology to
                solve real-world problems and create meaningful impact.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Technologies I Love</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-4 py-2 rounded-lg border border-border font-medium ${skill.color}`}
                      data-testid={`skill-${skill.name.toLowerCase()}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-card card-glow rounded-2xl p-8 border border-border transition-all duration-300">
                <div className="space-y-6">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.color}`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
