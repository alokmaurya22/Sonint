"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function BentoGrid6() {
  return (
    <section className="bg-secondary section-padding-y border-b" id="services">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">
        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          {/* Tagline */}
          <div className="bg-white rounded-full px-6 py-2 shadow-sm border">
            <span className="text-orange-500 font-semibold text-sm">Our Services</span>
          </div>
          {/* Main Heading */}
          <h2 className="heading-lg">
            Full Stack Development Services & Enterprise Software Solutions
          </h2>
          <p className="text-muted-foreground">
            From concept to deployment, we deliver cutting-edge React JS applications, Spring Boot APIs, custom ERP development, business process automation software, and cloud-native infrastructure solutions that drive digital transformation for businesses across India and globally.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {/* Wide Feature Card - Top Left */}
          <Card className="bg-white gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="/ai-meeting-notes.png"
              alt="AI Meeting Notes"
              width={813}
              height={332}
              className="hidden h-auto w-full object-cover md:block md:h-[332px]"
            />
            <Image
              src="/ai-meeting-notes_mobile.png"
              alt="AI Meeting Notes"
              width={480}
              height={332}
              className="block h-auto w-full md:hidden"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                React & Next.js Web Development
              </h3>
              <p className="text-muted-foreground">
                High-performance, SEO-optimized web applications using React, Next.js, TypeScript, and modern frontend technologies for exceptional user experiences
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Top Right */}
          <Card className="bg-white gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="/universal-search.png"
              alt="Universal Search"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Cloud Infrastructure & DevOps
              </h3>
              <p className="text-muted-foreground">
                Scalable cloud deployment on AWS, Azure, and GCP with CI/CD pipelines, monitoring, and automated infrastructure management for reliable applications
              </p>
            </CardContent>
          </Card>
          {/* Regular Feature Card - Bottom Left */}
          <Card className="bg-white gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-1">
            <Image
              src="/smart-tags.png"
              alt="AI Meeting Notes"
              width={480}
              height={332}
              className="h-auto w-full object-cover md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Cross-Platform Mobile Apps
              </h3>
              <p className="text-muted-foreground">
                Native-quality mobile applications for Android and iOS using React Native, Flutter, and progressive web app technologies for maximum reach
              </p>
            </CardContent>
          </Card>
          {/* Wide Feature Card - Bottom Right */}
          <Card className="bg-white gap-0 overflow-hidden rounded-xl border-none p-0 shadow-none lg:col-span-2">
            <Image
              src="/team-insights.png"
              alt="Team Insights"
              width={813}
              height={332}
              className="hidden h-[332px] w-full object-cover md:block"
            />
            <Image
              src="/team-insights_mobile.png"
              alt="Team Insights"
              width={480}
              height={332}
              className="block h-auto w-full object-cover md:hidden md:h-[332px]"
            />
            <CardContent className="flex flex-col gap-2 p-6">
              <h3 className="text-foreground text-lg font-semibold">
                Custom ERP & Business Automation
              </h3>
              <p className="text-muted-foreground">
                Tailored ERP systems, workflow automation, and business intelligence solutions using Spring Boot, microservices, and AI to streamline operations and boost productivity
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
