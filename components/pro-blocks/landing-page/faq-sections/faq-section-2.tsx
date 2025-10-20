"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function FaqSection2() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Header Section */}
          <div className="section-title-gap-lg mx-auto flex max-w-3xl flex-col items-center text-center">
            <div className="bg-white rounded-full px-4 sm:px-6 py-2 shadow-sm border">
              <span className="text-orange-500 font-semibold text-xs sm:text-sm">FAQ</span>
            </div>
            <h1 id="faq-heading" className="heading-lg text-foreground">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Common questions about our services and how we work. Need more details?{" "}
              <Link href="#contact" className="text-primary underline">
                Get in touch with us.
              </Link>
            </p>
          </div>

          {/* FAQ Content - Mobile: Stack vertically, Desktop: Side by side */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Services & Process FAQ */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="bg-secondary rounded-full px-4 py-2">
                  <h2 className="text-base sm:text-lg font-semibold">
                    Services & Process
                  </h2>
                </div>
              </div>

              <Accordion
                type="single"
                collapsible
                className="w-full"
                aria-label="Services FAQ items"
              >
                <AccordionItem value="item-1" className="border-b border-border/50">
                  <AccordionTrigger className="text-left text-sm sm:text-base hover:text-primary transition-colors py-4">
                    What technologies does Sonint specialize in?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4">
                    We work with modern technologies like React, Next.js, Spring Boot, and Node.js. We also have experience with databases like PostgreSQL and MongoDB, and can deploy applications using Docker and cloud platforms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-border/50">
                  <AccordionTrigger className="text-left text-sm sm:text-base hover:text-primary transition-colors py-4">
                    How long does a typical project take?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4">
                    Most web applications take 2-6 weeks depending on complexity. We'll give you a clear timeline after understanding your requirements. We keep you updated throughout the development process.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-border/50">
                  <AccordionTrigger className="text-left text-sm sm:text-base hover:text-primary transition-colors py-4">
                    Do you provide ongoing support?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4">
                    Yes, we offer comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. Our support packages range from basic maintenance to full managed services.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-border/50">
                  <AccordionTrigger className="text-left text-sm sm:text-base hover:text-primary transition-colors py-4">
                    Can you work with existing systems?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4">
                    Absolutely. We excel at integrating with existing infrastructure and collaborating with in-house teams. Whether you need to modernize legacy systems or add new features, we adapt our approach to complement your current setup.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Pricing & Partnership FAQ */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="bg-secondary rounded-full px-4 py-2">
                  <h2 className="text-base sm:text-lg font-semibold">
                    Pricing & Partnership
                  </h2>
                </div>
              </div>

              <Accordion
                type="single"
                collapsible
                className="w-full"
                aria-label="Pricing FAQ items"
              >
                <AccordionItem value="pricing-1" className="border-b border-border/50">
                  <AccordionTrigger className="text-left text-sm sm:text-base hover:text-primary transition-colors py-4">
                    How do you structure your pricing?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4">
                    We offer flexible pricing models including fixed-price projects, time and materials, and retainer-based partnerships. Pricing depends on project complexity, timeline, and required expertise. We provide detailed estimates after understanding your requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing-2" className="border-b border-border/50">
                  <AccordionTrigger className="text-left text-sm sm:text-base hover:text-primary transition-colors py-4">
                    Do you work with startups?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4">
                    Yes, we work with organizations of all sizes, from startups to enterprise clients. We understand the unique challenges of growing businesses and offer scalable solutions that can evolve with your needs. We also provide flexible payment terms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing-3" className="border-b border-border/50">
                  <AccordionTrigger className="text-left text-sm sm:text-base hover:text-primary transition-colors py-4">
                    What's included in project delivery?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4">
                    Our deliverables include complete source code, comprehensive documentation, deployment guides, user training materials, and knowledge transfer sessions. We also provide testing reports and performance benchmarks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing-4" className="border-b border-border/50">
                  <AccordionTrigger className="text-left text-sm sm:text-base hover:text-primary transition-colors py-4">
                    How do you ensure quality?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4">
                    We follow agile development methodologies with regular sprint reviews, automated testing, code reviews, and continuous integration. You'll receive weekly progress updates and have access to staging environments for testing.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}