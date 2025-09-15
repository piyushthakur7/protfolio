import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/piyushthakur7",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/piyush-thakur-6656a429a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:tpiyush300@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">© 2025 Piyush Thakur. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-primary transform hover:scale-110 transition-all duration-200"
                data-testid={`footer-${link.name.toLowerCase()}`}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
