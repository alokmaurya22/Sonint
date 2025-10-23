"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import projectsData from "../app/products/projectsData.js";

interface ProjectsSectionProps {
  showAll?: boolean;
  maxProjects?: number;
  title?: string;
  subtitle?: string;
  showViewAllButton?: boolean;
}

export function ProjectsSection({ 
  showAll = false, 
  maxProjects = 6, 
  title = "Featured Projects",
  subtitle = "Explore some of our recent work and successful project deliveries.",
  showViewAllButton = true 
}: ProjectsSectionProps) {
  const projects = showAll ? projectsData : projectsData.slice(0, maxProjects);

  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto">
        {/* Section Header */}
        <div className="section-title-gap-lg flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="bg-white rounded-full px-4 sm:px-6 py-2 shadow-sm border">
            <span className="text-orange-500 font-semibold text-xs sm:text-sm">Portfolio</span>
          </div>
          <h2 className="heading-lg">{title}</h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* View All Button */}
        {showViewAllButton && !showAll && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <Link href="/projects">
              <Button className="px-6 py-3">
                View All Projects
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}