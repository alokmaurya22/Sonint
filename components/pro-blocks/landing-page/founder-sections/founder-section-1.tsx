"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";

export function FounderSection1() {
  return (
    <section className="bg-secondary section-padding-y border-b" id="founder">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <div className="bg-white rounded-full px-6 py-2 shadow-sm border">
              <span className="text-primary font-semibold text-sm">Leadership</span>
            </div>
            <h2 className="heading-lg text-foreground">Meet Our Founder</h2>
            <p className="text-muted-foreground">
              The visionary behind Sonint's mission to deliver world-class software solutions.
            </p>
          </div>

          {/* Founder Card */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-background rounded-xl border shadow-sm">
              <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:gap-8">
                {/* Founder Image */}
                <div className="flex justify-center md:justify-start">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src="/founder-sonint.jpg" alt="Sonint Kumar - Founder" />
                    <AvatarFallback className="text-2xl bg-primary text-primary-foreground">SK</AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Founder Info */}
                <div className="flex flex-1 flex-col gap-4 text-center md:text-left">
                  <div>
                    <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                      <h3 className="text-2xl font-semibold text-foreground">
                        Sonint Kumar
                      </h3>
                      <Link href="mailto:sonint@sonint.tech" className="text-muted-foreground hover:text-primary transition-colors">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </Link>
                      <Link href="https://linkedin.com/in/sonint-kumar" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </div>
                    <p className="text-primary font-medium">
                      Founder & Lead Engineer
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate software engineer with expertise in modern web technologies. 
                    Started Sonint to bridge the gap between innovative technology and practical business solutions. 
                    Believes in clean code, user-centric design, and delivering value through technology.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-3 justify-center md:justify-start">
                    <Link href="https://linkedin.com/in/sonint-kumar" target="_blank">
                      <Button variant="outline" size="sm">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="https://github.com/sonint-tech" target="_blank">
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="https://twitter.com/sonint_tech" target="_blank">
                      <Button variant="outline" size="sm">
                        <Twitter className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}