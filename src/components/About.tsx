import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Users, Clock, Target } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "User-Centered Design",
    description: "Every decision is made with the end user in mind, ensuring intuitive and accessible experiences."
  },
  {
    icon: Clock,
    title: "Efficient Development",
    description: "Delivering high-quality code on time through agile methodologies and best practices."
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "Working closely with designers, product managers, and stakeholders to achieve shared goals."
  },
  {
    icon: Award,
    title: "Continuous Learning",
    description: "Staying current with the latest technologies and industry trends to deliver cutting-edge solutions."
  }
];

export function About() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                About Me
              </Badge>
              <h2 className="text-3xl md:text-4xl">
                Passionate about creating
                <span className="block text-primary">meaningful digital experiences</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 5 years of experience in frontend development and UX/UI design, 
                  I specialize in transforming complex ideas into intuitive, performant web applications. 
                  My journey began with a fascination for how design and technology intersect to solve real-world problems.
                </p>
                <p>
                  I believe that great software is not just about clean code—it's about understanding user needs, 
                  anticipating their challenges, and crafting solutions that feel natural and delightful to use. 
                  This philosophy drives every project I work on.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, 
                  or mentoring junior developers in the community.
                </p>
              </div>
            </div>
            
            {/* <div className="flex flex-wrap gap-2">
              {["Problem Solving", "Team Leadership", "Mentoring", "Open Source", "Speaking"].map((interest, index) => (
                <Badge key={index} variant="outline">
                  {interest}
                </Badge>
              ))}
            </div> */}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0 space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}