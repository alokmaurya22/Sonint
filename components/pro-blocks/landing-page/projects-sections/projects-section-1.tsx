"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import projectsData from "../../../../app/products/projectsData.js";

export function ProjectsSection1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Use all projects for the carousel
  const projects = projectsData.map(project => ({
    title: project.title,
    description: project.description,
    technologies: project.techStack.split(', ').map(tech => tech.trim()).slice(0, 4),
    image: project.image,
    liveUrl: project.liveLink,
    githubUrl: project.githubLink
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [projects.length]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="bg-background section-padding-y border-b" id="projects">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <div className="bg-white rounded-full px-6 py-2 shadow-sm border">
              <span className="text-orange-500 font-semibold text-sm">Our Work</span>
            </div>
            <h2 className="heading-lg text-foreground">Featured Projects</h2>
            <p className="text-muted-foreground">
              Explore some of the innovative solutions we've built for our clients worldwide.
            </p>
          </div>

          {/* Projects Carousel */}
          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="bg-secondary rounded-xl border shadow-sm mx-4">
                      <CardContent className="flex flex-col gap-4 p-6 lg:flex-row lg:items-center lg:gap-8">
                        {/* Project Info */}
                        <div className="flex flex-1 flex-col gap-3 max-w-md">
                          <h3 className="text-xl font-semibold text-foreground">
                            {project.title}
                          </h3>
                          
                          <p className="text-muted-foreground">
                            {project.description}
                          </p>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="bg-background text-foreground px-2 py-1 rounded-full text-xs border"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          {/* Project Links */}
                          <div className="flex gap-2">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <Button size="sm">
                                <ExternalLink className="h-3 w-3" />
                                Live Demo
                              </Button>
                            </Link>
                            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline" size="sm">
                                <Github className="h-3 w-3" />
                                GitHub
                              </Button>
                            </Link>
                          </div>
                        </div>
                        
                        {/* Project Image */}
                        <div className="flex-1">
                          <div className="bg-muted rounded-lg overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                                if (nextElement) {
                                  nextElement.style.display = 'flex';
                                }
                              }}
                            />
                            <div className="w-full h-full hidden items-center justify-center bg-muted">
                              <span className="text-muted-foreground">Project Screenshot</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 p-0 bg-background/80 backdrop-blur-sm"
              onClick={prevProject}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 p-0 bg-background/80 backdrop-blur-sm"
              onClick={nextProject}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="flex justify-center">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}