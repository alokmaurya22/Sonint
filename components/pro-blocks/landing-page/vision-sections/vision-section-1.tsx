"use client";

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Maximize, Target, Lightbulb, Globe, Rocket } from "lucide-react";
import { useState, useRef } from "react";

export function VisionSection1() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const visionPoints = [
    {
      icon: Target,
      title: "Digital India Leadership",
      description: "Leading India's digital transformation by building world-class software solutions from tier-2 cities to global markets."
    },
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "Creating a technology ecosystem that nurtures innovation and empowers the next generation of Indian developers."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Proving that exceptional software engineering can emerge from anywhere in India, competing on the world stage."
    },
    {
      icon: Rocket,
      title: "Future Ready",
      description: "Building tomorrow's solutions today with AI, cloud-native architectures, and cutting-edge technologies."
    }
  ];

  return (
    <section className="bg-background section-padding-y border-b" id="vision">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Section Header */}
          <div className="section-title-gap-lg mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="bg-white rounded-full px-4 sm:px-6 py-2 shadow-sm border">
              <span className="text-orange-500 font-semibold text-xs sm:text-sm">Our Vision</span>
            </div>
            <h2 className="heading-lg text-foreground">
              Shaping India's Digital Future
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
              <span className="hidden sm:inline">From the heart of India to the global stage - we envision a future where Indian tech startups lead the world in innovation, quality, and impact. Our mission is to prove that exceptional software engineering knows no geographical boundaries.</span>
              <span className="sm:hidden">Building world-class software solutions from India to global markets, proving that exceptional engineering knows no boundaries.</span>
            </p>
          </div>

          {/* Vision Content Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">
            {/* Left Column - Vision Content */}
            <div className="flex flex-col gap-6">
              <Card className="bg-secondary rounded-xl border shadow-sm">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-4">
                    <h3 className="text-primary font-semibold text-lg sm:text-xl">
                      Our Vision for India's Digital Future
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      We envision leading India's digital transformation by building world-class software solutions from tier-2 cities to global markets.
                      Our mission is to create a technology ecosystem that nurtures innovation and empowers the next generation of Indian developers.
                      We believe in proving that exceptional software engineering can emerge from anywhere in India, competing on the world stage.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Vision Points Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {visionPoints.map((point, index) => {
                  const IconComponent = point.icon;
                  return (
                    <Card key={index} className="bg-background rounded-lg border shadow-sm">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="text-foreground font-semibold text-sm mb-1">{point.title}</h4>
                            <p className="text-muted-foreground text-xs leading-relaxed">{point.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Video Section */}
            <div className="flex flex-col gap-6">
              <div className="relative">
                <Card className="bg-secondary rounded-xl border shadow-sm">
                  <CardContent className="p-4 sm:p-6">
                    {/* Video Container */}
                    <div
                      className="relative aspect-video bg-gradient-to-br from-primary/10 to-orange-500/10 cursor-pointer group rounded-lg overflow-hidden"
                      onMouseEnter={() => setShowControls(true)}
                      onMouseLeave={() => setShowControls(false)}
                      onClick={handlePlayPause}
                    >
                      {/* Video Element */}
                      <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        preload="none"
                        playsInline
                      >
                        <source src="/Video/Sonint_Technology_intro.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Video Overlay */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        {/* Play/Pause Button */}
                        <Button
                          size="lg"
                          className="h-16 w-16 rounded-full bg-white/90 hover:bg-white text-primary hover:text-primary shadow-lg"
                          onClick={handlePlayPause}
                        >
                          {isPlaying ? (
                            <Pause className="h-6 w-6" />
                          ) : (
                            <Play className="h-6 w-6 ml-1" />
                          )}
                        </Button>
                      </div>

                      {/* Video Controls */}
                      {showControls && (
                        <div className="absolute bottom-4 left-4 right-4 bg-black/50 rounded-lg p-3 flex items-center gap-3 transition-opacity">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-white hover:text-white hover:bg-white/20 p-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePlayPause();
                            }}
                          >
                            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                          </Button>

                          <div className="flex-1 bg-white/30 rounded-full h-1">
                            <div className="bg-white rounded-full h-1 w-1/3"></div>
                          </div>

                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-white hover:text-white hover:bg-white/20 p-2"
                          >
                            <Volume2 className="h-4 w-4" />
                          </Button>

                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-white hover:text-white hover:bg-white/20 p-2"
                          >
                            <Maximize className="h-4 w-4" />
                          </Button>
                        </div>
                      )}

                      {/* Video Title Overlay */}
                      <div className="absolute top-4 left-4 right-4">
                        <div className="bg-black/50 rounded-lg p-3">
                          <h3 className="text-white font-semibold text-sm sm:text-base">
                            Sonint Technology Introduction
                          </h3>
                          <p className="text-white/80 text-xs sm:text-sm">
                            Company Overview & Vision
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Founder's Vision */}
                    <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-gradient-to-r from-primary/5 to-orange-500/5 rounded-lg">
                      <div className="mb-3">
                        <h4 className="text-primary font-semibold text-base sm:text-lg mb-1">Founder's Vision</h4>
                      </div>

                      <blockquote className="text-foreground text-sm sm:text-base font-medium italic leading-relaxed mb-4">
                        "We believe that the next wave of global tech innovation will come from India's corner.
                        Sonint is not just building software - we're building the future of Indian tech entrepreneurship."
                      </blockquote>

                      <div className="flex items-center justify-between border-t border-muted/30">
                        <div>
                          <p className="text-muted-foreground text-xs font-medium">— Founder & CEO, Sonint Technology</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-muted-foreground text-xs hidden sm:block">Connect:</span>
                          <div className="flex items-center gap-2">
                            <a
                              href="https://linkedin.com/in/alok22"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-6 h-6 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center justify-center transition-colors"
                              aria-label="LinkedIn Profile"
                              title="Connect on LinkedIn"
                            >
                              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </a>
                            <a
                              href="mailto:er.alokmaurya22@gmail.com"
                              className="w-6 h-6 bg-orange-500 hover:bg-orange-600 text-white rounded-md flex items-center justify-center transition-colors"
                              aria-label="Send Email"
                              title="Send Email"
                            >
                              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}