"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function StatsSection4() {
  return (
    <section className="bg-background section-padding-y border-b" id="about">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <div className="bg-white rounded-full px-6 py-2 shadow-sm border">
              <span className="text-orange-500 font-semibold text-sm">About Us</span>
            </div>
            <h2 className="heading-lg text-foreground">Remote-First Global Team</h2>
            <p className="text-muted-foreground">
              We collaborate with talented software engineers worldwide to deliver modern solutions with precision and innovation.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">
                  Projects Completed
                </h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  15+
                </span>

                <p className="text-muted-foreground text-base">
                  Successfully delivered web applications and automation solutions for growing businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Technologies</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  10+
                </span>
                <p className="text-muted-foreground text-base">
                  Modern tech stack including React, Spring Boot, Docker, and cloud platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col gap-2 p-0 md:gap-3">
                <h3 className="text-primary font-semibold">Happy Clients</h3>
                <span className="text-foreground text-3xl font-semibold md:text-4xl">
                  100%
                </span>
                <p className="text-muted-foreground text-base">
                  Every client has been satisfied with our work quality and delivery timelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}