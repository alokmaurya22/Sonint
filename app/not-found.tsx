"use client";

import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Button } from "@/components/ui/button";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <LpNavbar1 />
      
      {/* 404 Section */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col items-center gap-12">
          <div className="section-title-gap-xl flex max-w-3xl flex-col items-center text-center">
            <Tagline>404 Error</Tagline>
            <h1 className="heading-xl">Page Not Found</h1>
            <p className="text-muted-foreground text-base lg:text-lg">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/">
                <Button>
                  <Home className="h-4 w-4" />
                  Go Home
                </Button>
              </Link>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer1 />
    </main>
  );
}