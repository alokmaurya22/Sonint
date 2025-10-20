import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with payment integration, inventory management, and admin dashboard. Built for a growing retail business.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      category: "E-Commerce",
      duration: "3 months",
      year: "2024",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Payment Integration", "Inventory Management", "Admin Dashboard", "Mobile Responsive"]
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team collaboration features for remote teams.",
      technologies: ["Next.js", "PostgreSQL", "Socket.io", "Tailwind", "Docker"],
      category: "Productivity",
      duration: "2 months",
      year: "2024",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Real-time Collaboration", "Task Tracking", "Team Chat", "File Sharing"]
    },
    {
      title: "Business Analytics Dashboard",
      description: "Data visualization platform for business insights with interactive charts and reports for data-driven decisions.",
      technologies: ["React", "Spring Boot", "MySQL", "Chart.js", "Redis"],
      category: "Analytics",
      duration: "4 months",
      year: "2023",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Interactive Charts", "Real-time Data", "Custom Reports", "Export Tools"]
    },
    {
      title: "Healthcare Management System",
      description: "Complete patient management solution with appointment scheduling and medical records for healthcare providers.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js", "Docker"],
      category: "Healthcare",
      duration: "5 months",
      year: "2023",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Patient Records", "Appointment Scheduling", "Medical History", "Billing System"]
    },
    {
      title: "Restaurant POS System",
      description: "Point of sale system for restaurants with order management, kitchen display, and inventory tracking capabilities.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe"],
      category: "Restaurant",
      duration: "3 months",
      year: "2023",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Order Management", "Kitchen Display", "Payment Processing", "Inventory Tracking"]
    },
    {
      title: "Learning Management System",
      description: "Educational platform with course management, student tracking, and interactive learning tools for online education.",
      technologies: ["Next.js", "PostgreSQL", "Redis", "AWS S3", "Zoom API"],
      category: "Education",
      duration: "6 months",
      year: "2022",
      liveUrl: "#",
      githubUrl: "#",
      features: ["Course Management", "Video Streaming", "Student Progress", "Assignments"]
    }
  ];

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
              <Card key={index} className="bg-secondary rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
                  {/* Project Image Placeholder */}
                  <div className="bg-muted rounded-lg h-40 sm:h-48 flex items-center justify-center">
                    <span className="text-muted-foreground text-xs sm:text-sm">Project Screenshot</span>
                  </div>
                  
                  {/* Project Header */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
                        {project.category}
                      </span>
                      <span className="text-muted-foreground text-xs">{project.year}</span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Project Stats */}
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-background text-foreground px-2 py-1 rounded-md text-xs border"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="bg-background text-foreground px-2 py-1 rounded-md text-xs border">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs sm:text-sm font-medium text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="text-muted-foreground text-xs"
                        >
                          • {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-2">
                    <Link href={project.liveUrl} className="flex-1">
                      <Button size="sm" className="w-full text-xs sm:text-sm">
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                        Live Demo
                      </Button>
                    </Link>
                    <Link href={project.githubUrl}>
                      <Button size="sm" variant="outline" className="px-2 sm:px-3">
                        <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
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