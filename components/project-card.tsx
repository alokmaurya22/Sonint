"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    techStack: string;
    liveLink: string;
    githubLink: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const technologies = project.techStack.split(', ').map(tech => tech.trim());

  return (
    <Card className="bg-secondary rounded-xl border shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
        {/* Project Image */}
        <div className="bg-muted rounded-lg h-40 sm:h-48 overflow-hidden">
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
            <span className="text-muted-foreground text-xs sm:text-sm">Project Screenshot</span>
          </div>
        </div>
        
        {/* Project Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
              {project.subtitle}
            </span>
          </div>
          
          <h3 className="text-lg sm:text-xl font-semibold text-foreground line-clamp-2">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3">
            {project.description}
          </p>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {technologies.slice(0, 4).map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="bg-background text-foreground px-2 py-1 rounded-md text-xs border"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="bg-background text-foreground px-2 py-1 rounded-md text-xs border">
              +{technologies.length - 4}
            </span>
          )}
        </div>
        
        {/* Project Links */}
        <div className="flex gap-2 mt-auto">
          <Link href={project.liveLink} className="flex-1" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="w-full text-xs sm:text-sm">
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              Live Demo
            </Button>
          </Link>
          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="outline" className="px-2 sm:px-3">
              <Github className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}