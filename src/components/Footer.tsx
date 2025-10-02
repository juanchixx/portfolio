"use client";

import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg">Juan M Diaz</h3>
              <p className="text-sm text-muted-foreground">
                {t('hero.title')}
              </p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm">Links</h4>
            <div className="space-y-2 text-sm">
              <div><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.about')}</a></div>
              <div><a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.skills')}</a></div>
              <div><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">{t('nav.contact')}</a></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm">{t('footer.services')}</h4>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">{t('footer.frontend')}</div>
              <div className="text-muted-foreground">{t('footer.uiux')}</div>
              <div className="text-muted-foreground">{t('footer.react')}</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm">{t('footer.connect')}</h4>
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
            {t('footer.madewith')} <Heart className="h-4 w-4 text-red-500" /> {t('footer.by')}
          </div>
          <div className="flex gap-6">
          </div>
          <div>
            2025 Juan M Diaz.
          </div>
        </div>
      </div>
    </footer>
  );
}