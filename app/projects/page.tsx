"use client";

import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ProjectCard } from "@/components/project-card";
import projectsData from "../products/projectsData.js";

export default function ProjectsPage() {
  const projects = projectsData;

  return (
    <main>
      <LpNavbar1 />

      {/* Hero Section */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col items-center gap-8 sm:gap-12">
          <div className="section-title-gap-xl flex max-w-3xl flex-col items-center text-center px-4">
            <div className="bg-white rounded-full px-4 sm:px-6 py-2 shadow-sm border">
              <span className="text-orange-500 font-semibold text-xs sm:text-sm">Our Work</span>
            </div>
            <h1 className="heading-xl">Project Portfolio</h1>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
              Explore our complete portfolio of successful projects delivered for clients worldwide across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-background section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center px-4">
            <h2 className="heading-lg text-foreground">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
              <Link href="/#contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#services" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto">View Our Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer1 />
      <ScrollToTop />
    </main>
  );
}