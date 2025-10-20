"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function ContactSection1() {
  return (
    <section
      className="bg-secondary section-padding-y border-b"
      aria-labelledby="contact-section-title"
      id="contact"
    >
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            {/* Category Tag */}
            <div className="bg-white rounded-full px-6 py-2 shadow-sm border">
              <span className="text-orange-500 font-semibold text-sm">Contact</span>
            </div>
            {/* Main Title */}
            <h2
              id="contact-section-title"
              className="heading-lg text-foreground"
            >
              Ready to Build Something Amazing?
            </h2>
            <p className="text-muted-foreground">
              Let's discuss your project requirements and explore how we can help transform your business with modern software solutions.
            </p>
          </div>

          {/* Contact Content */}
          <div className="flex w-full flex-col items-start gap-8 md:max-w-4xl lg:flex-row lg:gap-12">
            {/* Contact Information */}
            <div className="flex flex-1 flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h3 className="text-foreground text-lg font-semibold">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground">
                  We work remotely with clients worldwide to deliver quality software solutions that help businesses grow and succeed.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">hello@sonint.tech</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                    <MessageSquare className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">WhatsApp</p>
                    <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-background flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="w-full flex-1 border-none p-6 shadow-none">
              <CardContent className="p-0">
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Company name" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="project-type">Project Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="erp-automation">ERP & Automation</SelectItem>
                        <SelectItem value="cloud-infrastructure">Cloud Infrastructure</SelectItem>
                        <SelectItem value="mobile-app">Mobile Application</SelectItem>
                        <SelectItem value="ai-integration">AI Integration</SelectItem>
                        <SelectItem value="consulting">Technical Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project requirements, timeline, and goals..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}