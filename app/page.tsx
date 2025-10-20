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

export default function Page() {
  return (
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
  );
}
