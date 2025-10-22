import { Metadata } from "next";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-7";
import { TestimonialsCombined } from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-combined";
import { VisionSection1 } from "@/components/pro-blocks/landing-page/vision-sections/vision-section-1";
import { BentoGrid6 } from "@/components/pro-blocks/landing-page/bento-grids/bento-grid-6";
import { ProductsSection1 } from "@/components/pro-blocks/landing-page/products-sections/products-section-1";
import { ProjectsSection1 } from "@/components/pro-blocks/landing-page/projects-sections/projects-section-1";
import { FeatureSection9 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section-9";
import { StatsSection4 } from "@/components/pro-blocks/landing-page/stats-sections/stats-section-4";
import { ContactSection1 } from "@/components/pro-blocks/landing-page/contact-sections/contact-section-1";
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { ScrollToTop } from "@/components/scroll-to-top";

export const metadata: Metadata = {
  title: "Custom Software Development & AI Automation | React, Spring Boot Experts",
  description: "Transform your business with Sonint Technology's custom software solutions. We build React applications, Spring Boot APIs, ERP systems & AI automation. From India's heartland to global excellence.",
  keywords: [
    // Primary Focus Keywords for Homepage
    "software development company in India",
    "custom software solutions",
    "full stack development services",
    "React JS development company",
    "Next JS development services",
    "enterprise software solutions",
    "AI and automation software",
    "modern software engineering firm",
    
    // Brand Keywords
    "Sonint Technology",
    "Sonbhadra tech startup",
    "Indian software engineering startup",
    "tier-2 city tech startup India",
    
    // Service Keywords
    "custom ERP development",
    "business process automation software",
    "web portal design and development",
    "REST API integration services",
    "DevOps and CI/CD integration",
    "cross-platform application development",
    
    // Vision Keywords
    "digital transformation India",
    "building global tech from India",
    "AI-driven software solutions",
    "future-ready technology services",
    
    // Core Keywords
    "software development company India",
    "React web development",
    "Spring Boot API development",
    "custom ERP systems",
    "business automation software",
    "cloud infrastructure services",
    "mobile app development",
    "AI integration solutions",
    "remote development team",
    "web application development",
    "digital transformation services",
    "startup technology solutions"
  ],
  openGraph: {
    title: "Custom Software Development & AI Automation | Sonint Technology",
    description: "Transform your business with Sonint Technology's custom software solutions. We build React applications, Spring Boot APIs, ERP systems & AI automation. From India's heartland to global excellence.",
    url: "https://sonint.tech",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sonint Technology - Modern Software Solutions"
      }
    ]
  },
  alternates: {
    canonical: "https://sonint.tech"
  }
};

// Structured data for homepage
const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Sonint Technology - Modern Software Development',
  description: 'Leading software development company specializing in React, Spring Boot, custom ERP systems, and cloud infrastructure.',
  url: 'https://sonint.tech',
  mainEntity: {
    '@type': 'Organization',
    name: 'Sonint Technology',
    description: 'Modern software development company',
    offers: [
      {
        '@type': 'Service',
        name: 'Web Development',
        description: 'React and Next.js web applications'
      },
      {
        '@type': 'Service', 
        name: 'API Development',
        description: 'Spring Boot REST APIs and microservices'
      },
      {
        '@type': 'Service',
        name: 'Custom ERP Systems',
        description: 'Business automation and workflow solutions'
      }
    ]
  }
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }}
      />
      <main>
        <LpNavbar1 />
        <HeroSection2 />
        <LogoSection10 />
        <VisionSection1 />
        <BentoGrid6 />
        <ProjectsSection1 />
        <ProductsSection1 />
        <FeatureSection9 />
        <TestimonialsCombined />
        <StatsSection4 />
        <ContactSection1 />
        <FaqSection2 />
        <Footer1 />
        <ScrollToTop />
      </main>
    </>
  );
}
