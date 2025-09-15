import { 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Brain, 
  Cloud,
  GitBranch,
  Layout,
  BarChart3,
  Zap
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      color: "bg-primary/20 text-primary",
      skills: [
        { name: "React", level: 95, icon: Code },
        { name: "TypeScript", level: 90, icon: Code },
        { name: "Tailwind CSS", level: 92, icon: Layout },
        { name: "Next.js", level: 85, icon: Code },
        { name: "Vue.js", level: 80, icon: Code },
      ]
    },
    {
      title: "Backend Development", 
      icon: Server,
      color: "bg-accent/20 text-accent",
      skills: [
        { name: "Node.js", level: 88, icon: Server },
        { name: "Express.js", level: 90, icon: Server },
        { name: "PostgreSQL", level: 85, icon: Database },
        { name: "MongoDB", level: 82, icon: Database },
        { name: "REST APIs", level: 93, icon: Zap },
      ]
    },
    {
      title: "Data Science & AI",
      icon: Brain,
      color: "bg-primary/20 text-primary", 
      skills: [
        { name: "Python", level: 92, icon: Brain },
        { name: "TensorFlow", level: 80, icon: Brain },
        { name: "Pandas", level: 88, icon: BarChart3 },
        { name: "Scikit-learn", level: 85, icon: BarChart3 },
        { name: "Data Visualization", level: 87, icon: BarChart3 },
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Cloud,
      color: "bg-accent/20 text-accent",
      skills: [
        { name: "Git", level: 90, icon: GitBranch },
        { name: "Docker", level: 78, icon: Cloud },
        { name: "AWS", level: 75, icon: Cloud },
        { name: "Vercel", level: 85, icon: Cloud },
        { name: "CI/CD", level: 80, icon: Zap },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across different domains.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`bg-card card-glow rounded-2xl p-8 border border-border fade-in-up stagger-${(categoryIndex % 4) + 1}`}
              data-testid={`skill-category-${category.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${category.color} mr-4`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200 skill-icon" />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`,
                        }}
                        data-testid={`skill-progress-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Years Experience", value: "5+", icon: Code },
            { label: "Projects Completed", value: "50+", icon: Zap },
            { label: "Technologies Mastered", value: "20+", icon: Server },
            { label: "Happy Clients", value: "30+", icon: Smartphone },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center bg-card card-glow rounded-xl p-6 border border-border fade-in-up stagger-${index + 1}`}
              data-testid={`stat-${stat.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
            >
              <div className="flex justify-center mb-3">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}