"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "./LanguageContext";
import { Calendar, MapPin, Building } from "lucide-react";

export function Timeline() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const experiences = [
    {
      period: "2021 - 2025",
      title: t('timeline.exp1.title'),
      company: t('timeline.exp1.company'),
      location: t('timeline.exp1.location'),
      description: t('timeline.exp1.description'),
      technologies: ["ReactJS", "REST APIs", "Material UI", "UX/UI", "Unit Testing"]
    },
    {
      period: "2017 - 2021",
      title: t('timeline.exp2.title'),
      company: t('timeline.exp2.company'),
      location: t('timeline.exp2.location'),
      description: t('timeline.exp2.description'),
      technologies: [".NET Framework", "Microsoft SQL Server", "DevExpress", "UX/UI"]
    },
    {
      period: "2015 - 2016",
      title: t('timeline.exp3.title'),
      company: t('timeline.exp3.company'),
      location: t('timeline.exp3.location'),
      description: t('timeline.exp3.description'),
      technologies: ["Visual Basic .NET", "Microsoft SQL Server", "Responsive Web Design", "CSS", "JQuery"]
    }
  ];

  return (
    <section ref={containerRef} className="py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          style={{ y, opacity }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">{t('timeline.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('timeline.subtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 md:left-1/2 md:transform md:-translate-x-px"></div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-16`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 w-3 h-3 bg-primary rounded-full border-2 border-background z-10 md:left-1/2 md:top-1/2 md:w-4 md:h-4 md:border-4 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Experience card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full md:w-5/12 pl-12 md:pl-0 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="bg-card border border-border rounded-lg p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">{experience.period}</span>
                    </div>
                    
                    <h3 className="mb-2 leading-tight">{experience.title}</h3>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Building className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm md:text-base">{experience.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm md:text-base">{experience.location}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm md:text-base leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 md:px-3 bg-primary/10 text-primary rounded-full text-xs md:text-sm border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Parallax background element */}
                <motion.div
                  style={{ 
                    y: useTransform(scrollYProgress, [0, 1], [index * 30, -(index * 30)])
                  }}
                  className={`hidden lg:block absolute ${
                    index % 2 === 0 ? 'right-8' : 'left-8'
                  } top-1/2 transform -translate-y-1/2 w-24 h-24 xl:w-32 xl:h-32 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full -z-10`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <motion.div
          style={{ 
            rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
          }}
          className="hidden md:block absolute top-10 right-10 w-6 h-6 border-2 border-primary/30 rounded-full -z-10"
        />
        
        <motion.div
          style={{ 
            rotate: useTransform(scrollYProgress, [0, 1], [0, -180])
          }}
          className="hidden md:block absolute bottom-10 left-10 w-8 h-8 border-2 border-primary/20 rounded-square transform rotate-45 -z-10"
        />
      </div>
    </section>
  );
}