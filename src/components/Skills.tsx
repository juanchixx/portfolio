import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const skills = [
  {
    category: "Frontend Frameworks",
    technologies: ["React", "Next.js"]
  },
  {
    category: "Languages",
    technologies: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Sass"]
  },
  {
    category: "UI Libraries",
    technologies: ["Tailwind CSS", "Material-UI", "Styled Components"]
  },
  {
    category: "Tools & Workflow",
    technologies: ["Git", "Webpack", "Vite" ]
  },
  {
    category: "Design & UX",
    technologies: ["Figma", "Adobe XD" ]
  },
  {
    category: "Testing",
    technologies: ["Jest", "Cypress", "React Testing Library", "Vitest"]
  }
];

export function Skills() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and user-friendly web applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-0">
                <h3 className="mb-4 text-primary">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}