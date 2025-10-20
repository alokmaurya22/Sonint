"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer1() {
  return (
    <footer
      className="bg-secondary py-8 sm:py-12 md:py-16 lg:py-20"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {/* Top Section */}
        <div className="flex w-full flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-center">
          {/* Logo Section */}
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>

          {/* Main Navigation */}
          <nav
            className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Footer navigation"
          >
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              href="#vision"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Vision
            </Link>
            <Link
              href="#services"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/products"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <Link
              href="/careers"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Careers
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Section Divider */}
        <Separator role="presentation" />

        {/* Bottom Section */}
        <div className="flex w-full flex-col-reverse items-center gap-4 sm:gap-6 md:gap-8 lg:gap-6 text-sm lg:flex-row lg:justify-between">
          {/* Copyright Text */}
          <p className="text-muted-foreground text-center lg:text-left text-xs sm:text-sm">
            © 2024 Sonint. All rights reserved. Remote-first software engineering worldwide.
          </p>

          {/* Social & Legal Navigation */}
          <nav
            className="flex flex-col items-center gap-3 sm:gap-4 md:gap-6 text-sm md:flex-row md:gap-8"
            aria-label="Social and legal links"
          >
            <Link
              href="https://github.com/sonint-tech"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/company/sonint-technology"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:hello@sonint.tech"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
