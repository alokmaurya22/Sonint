import { Metadata } from "next";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Code, Users, Zap, Globe } from "lucide-react";
import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";

export const metadata: Metadata = {
  title: "Software Developer Jobs India | React, Spring Boot & DevOps Careers",
  description: "Join Sonint Technology's remote-first team! Hiring React developers, Spring Boot engineers & DevOps specialists. Build global software from India's heartland. Apply now!",
  keywords: [
    // Job-Specific Keywords
    "software developer jobs",
    "React developer careers",
    "Spring Boot developer jobs",
    "remote software engineering jobs",
    "startup developer positions",
    "full stack developer careers",
    "DevOps engineer jobs",
    "software architect positions",
    "remote work opportunities",
    
    // Enhanced Career Keywords
    "React JS developer jobs India",
    "Next JS developer careers",
    "Java Spring Boot jobs",
    "full stack development careers",
    "UI/UX designer jobs",
    "DevOps and CI/CD engineer positions",
    "software engineering internships",
    
    // Location + Career Keywords
    "tech startup careers India",
    "software jobs Uttar Pradesh",
    "remote developer jobs India",
    "tier-2 city tech jobs",
    "Sonbhadra tech careers",
    "Indian software startup jobs",
    
    // Company Culture Keywords
    "empowering Indian developers",
    "innovation in software engineering",
    "modern software engineering firm careers",
    "startup software studio jobs",
    "software development team",
    "programming jobs remote"
  ],
  openGraph: {
    title: "Software Developer Jobs India | React, Spring Boot & DevOps Careers",
    description: "Join Sonint Technology's remote-first team! Hiring React developers, Spring Boot engineers & DevOps specialists. Build global software from India's heartland. Apply now!",
    url: "https://sonint.tech/careers",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Careers at Sonint Technology"
      }
    ]
  },
  alternates: {
    canonical: "https://sonint.tech/careers"
  }
};

// Structured data for careers page
const careersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Careers at Sonint Technology',
  description: 'Join our growing remote development team with opportunities for React developers, Spring Boot engineers, and DevOps specialists.',
  url: 'https://sonint.tech/careers',
  mainEntity: {
    '@type': 'Organization',
    name: 'Sonint Technology',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Sonint Technology',
      sameAs: 'https://sonint.tech'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Remote',
        addressCountry: 'Worldwide'
      }
    },
    employmentType: ['FULL_TIME', 'CONTRACTOR'],
    workHours: 'Flexible'
  }
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersJsonLd) }}
      />
      <main>
        <LpNavbar1 />
      
      {/* Hero Section */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col items-center gap-12">
          <div className="section-title-gap-xl flex max-w-3xl flex-col items-center text-center">
            <Tagline>Careers</Tagline>
            <h1 className="heading-xl">Join Our Growing Team</h1>
            <p className="text-muted-foreground text-base lg:text-lg">
              We're a passionate startup from Sonbhadra looking for talented developers who want to build amazing software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-background section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="flex flex-col gap-10 md:gap-12">
            <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
              <Tagline>Culture</Tagline>
              <h2 className="heading-lg">Why Join Sonint?</h2>
              <p className="text-muted-foreground">
                Be part of a growing startup where your work directly impacts our success and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
                <CardContent className="flex flex-col gap-4 p-0">
                  <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border">
                    <Code className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">Modern Tech Stack</h3>
                    <p className="text-muted-foreground text-sm">
                      Work with cutting-edge technologies like React, Spring Boot, Docker, and cloud platforms.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
                <CardContent className="flex flex-col gap-4 p-0">
                  <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border">
                    <Users className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">Collaborative Team</h3>
                    <p className="text-muted-foreground text-sm">
                      Join a supportive team that values knowledge sharing, mentorship, and collective growth.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
                <CardContent className="flex flex-col gap-4 p-0">
                  <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border">
                    <Zap className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">Fast-Paced Growth</h3>
                    <p className="text-muted-foreground text-sm">
                      Rapid skill development through diverse projects and direct client interaction.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
                <CardContent className="flex flex-col gap-4 p-0">
                  <div className="bg-background flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border">
                    <Globe className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-2">Remote-First</h3>
                    <p className="text-muted-foreground text-sm">
                      Flexible work arrangements with opportunities for both remote and on-site collaboration.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="bg-secondary section-padding-y border-b">
        <div className="container-padding-x container mx-auto">
          <div className="flex flex-col gap-10 md:gap-12">
            <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
              <Tagline>Opportunities</Tagline>
              <h2 className="heading-lg">Join Our Team</h2>
              <p className="text-muted-foreground">
                We're actively hiring talented developers to join our remote-first team.
              </p>
            </div>

            <div className="flex justify-center">
              <Button size="lg">
                View All Open Positions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <h2 className="heading-lg text-foreground">Ready to Join Us?</h2>
            <p className="text-muted-foreground">
              Don't see a perfect match? We're always interested in connecting with talented engineers. Send us your resume and let's explore opportunities together.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="mailto:careers@sonint.tech">
                <Button>Send Your Resume</Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

        <Footer1 />
        <ScrollToTop />
      </main>
    </>
  );
}