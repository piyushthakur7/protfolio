import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn how to structure large-scale React applications using TypeScript, exploring advanced patterns and best practices for maintainable code.",
      content: `# Building Scalable React Applications with TypeScript

TypeScript has become an essential tool for building robust React applications. In this comprehensive guide, we'll explore advanced patterns and architectural decisions that will help you build maintainable, scalable applications.

## Key Topics Covered:
- Component composition patterns
- Advanced TypeScript configurations
- State management strategies
- Performance optimization techniques

Let's dive into the practical implementation details...`,
      date: "2024-12-15",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      featured: true
    },
    {
      id: 2,
      title: "Machine Learning in Production: Lessons Learned",
      excerpt: "Real-world insights from deploying ML models at scale, covering data pipelines, model versioning, and monitoring in production environments.",
      content: `# Machine Learning in Production: Lessons Learned

Deploying machine learning models to production is where the real challenges begin. This post shares practical insights from building and maintaining ML systems at scale.

## Key Challenges:
- Data drift detection
- Model performance monitoring
- A/B testing frameworks
- Infrastructure scaling

Here's what I learned during my journey...`,
      date: "2024-12-10",
      readTime: "12 min read",
      tags: ["Machine Learning", "Data Science", "DevOps"],
      featured: false
    },
    {
      id: 3,
      title: "The Future of Web Development: Emerging Trends",
      excerpt: "Exploring the latest trends shaping web development, from edge computing to AI-powered development tools and the evolving JavaScript ecosystem.",
      content: `# The Future of Web Development: Emerging Trends

The web development landscape is evolving rapidly. Let's explore the trends that will shape how we build applications in the coming years.

## Emerging Technologies:
- Edge computing and serverless
- WebAssembly adoption
- AI-powered development tools
- Progressive Web Apps evolution

What does this mean for developers?...`,
      date: "2024-12-05",
      readTime: "6 min read",
      tags: ["Web Development", "Trends", "Technology"],
      featured: false
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on web development, data science, and emerging technologies.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16 fade-in-up">
            <div className="bg-card card-glow rounded-2xl overflow-hidden border border-border">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                    <Button 
                      variant="outline" 
                      className="group"
                      data-testid={`blog-read-featured-${featuredPost.id}`}
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {featuredPost.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                        data-testid={`blog-tag-${tag.toLowerCase()}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {regularPosts.map((post, index) => (
            <article 
              key={post.id}
              className={`bg-card card-glow rounded-2xl p-6 border border-border fade-in-up stagger-${(index % 2) + 1}`}
              data-testid={`blog-post-${post.id}`}
            >
              <div className="flex items-center text-muted-foreground text-sm mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button 
                variant="ghost" 
                className="group p-0 h-auto font-semibold text-primary hover:text-primary/80"
                data-testid={`blog-read-more-${post.id}`}
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 fade-in-up stagger-3">
          <Button
            variant="outline"
            className="border-2 border-border text-foreground hover:border-primary hover:text-primary transform hover:scale-105 transition-all duration-200"
            data-testid="button-view-all-articles"
          >
            <span>View All Articles</span>
            <BookOpen className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}