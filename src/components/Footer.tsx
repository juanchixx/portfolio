import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg">John Doe</h3>
              <p className="text-sm text-muted-foreground">
                Frontend UX/UI React Developer
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting exceptional digital experiences through innovative design and clean, performant code.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <div><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></div>
              <div><a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a></div>
              <div><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a></div>
              <div><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm">Services</h4>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">Frontend Development</div>
              <div className="text-muted-foreground">UI/UX Design</div>
              <div className="text-muted-foreground">React Applications</div>
              <div className="text-muted-foreground">Code Reviews</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm">Connect</h4>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by John Doe
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
          <div>
            © 2024 John Doe. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}