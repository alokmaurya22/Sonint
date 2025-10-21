"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function TestimonialsCombined() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Sonint delivered our web application faster than expected. Their attention to detail and clean code practices impressed our entire team.",
      authorName: "Harsh Agrawal",
      authorRole: "Founder Tip Top Dresses",
      avatarSrc: "/Testimonial-user/harsh-agrawal.jpg"
    },
    {
      quote: "Working with Sonint was a great experience. They understood our requirements perfectly and delivered exactly what we needed for our growing business.",
      authorName: "Shivam",
      authorRole: "Founder & CEO Sir Musiz Studio",
      avatarSrc: "/Testimonial-user/shivam-sirmusiz.webp"
    },
    {
      quote: "The team's expertise in modern technologies and their commitment to quality made our project a huge success. Highly recommended!",
      authorName: "Priya Sharma",
      authorRole: "CFO at Ground work",
      avatarSrc: "/Testimonial-user/fml-user.jpg"
    },
    {
      quote: "Excellent communication and delivery. They turned our complex requirements into a simple, elegant solution that our users love.",
      authorName: "Ck Solution",
      authorRole: "Founder CK Solutions",
      avatarSrc: "/Testimonial-user/user-testimonial.webp"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-secondary section-padding-y border-b" id="testimonials">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center px-4 sm:px-6">
            <div className="bg-white rounded-full px-4 sm:px-6 py-2 shadow-sm border">
              <span className="text-orange-500 font-semibold text-xs sm:text-sm">Testimonials</span>
            </div>
            <h2 className="heading-lg text-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl">What Our Clients Say</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Hear from businesses we've helped grow with our software solutions.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative w-full max-w-4xl mx-auto px-2 sm:px-4">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-1 sm:px-2 md:px-3">
                    <Card className="bg-background rounded-xl border shadow-sm mx-auto w-full max-w-lg sm:max-w-xl md:max-w-2xl">
                      <CardContent className="p-4 sm:p-5 md:p-6 lg:p-8">
                        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 text-center">
                          <blockquote className="text-foreground text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed">
                            "{testimonial.quote}"
                          </blockquote>

                          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 pt-2">
                            <Avatar className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
                              <AvatarImage src={testimonial.avatarSrc} alt={testimonial.authorName} />
                              <AvatarFallback className="text-sm">
                                {testimonial.authorName.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>

                            <div className="text-center">
                              <div className="text-foreground font-semibold text-base sm:text-lg">
                                {testimonial.authorName}
                              </div>
                              <div className="text-muted-foreground text-sm sm:text-base">
                                {testimonial.authorRole}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons - Hidden on mobile */}
            <Button
              variant="outline"
              size="sm"
              className="absolute -left-2 sm:left-0 md:left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 p-0 bg-background/90 backdrop-blur-sm border-muted hidden sm:flex items-center justify-center"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="absolute -right-2 sm:right-0 md:right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 p-0 bg-background/90 backdrop-blur-sm border-muted hidden sm:flex items-center justify-center"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4 md:mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-orange-500 scale-110' : 'bg-muted hover:bg-muted-foreground/50'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}