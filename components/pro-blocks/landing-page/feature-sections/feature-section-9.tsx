"use client";

import { Bot, Plug, BarChart3, TextSearch } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function FeatureSection9() {
  return (
    <section
      className="bg-background section-padding-y border-b"
      id="process"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <div className="bg-white rounded-full px-6 py-2 shadow-sm border">
            <span className="text-orange-500 font-semibold text-sm">Our Process</span>
          </div>
          <h2 className="heading-lg text-foreground">
            From Concept to Deployment
          </h2>
          <p className="text-muted-foreground text-base">
            We follow a proven methodology that transforms your business requirements into robust, scalable software solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Plug className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">1. Discovery</h3>
              <p className="text-muted-foreground">
                Deep dive into your business requirements and technical architecture
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <Bot className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">2. Design</h3>
              <p className="text-muted-foreground">
                Create scalable system architecture and user experience blueprints
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <BarChart3 className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">3. Develop</h3>
              <p className="text-muted-foreground">
                Build with modern tech stack using agile development practices
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 text-center">
            <div className="bg-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-[0px_0px_0px_4px_rgba(7,46,106,0.05)]">
              <TextSearch className="text-primary h-5 w-5" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-foreground font-semibold">4. Deploy</h3>
              <p className="text-muted-foreground">
                Launch with comprehensive testing, monitoring, and ongoing support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
