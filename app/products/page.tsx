"use client";

import { useState } from "react";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Button } from "@/components/ui/button";
import { Pagination } from "@/components/ui/pagination";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ProductCard } from "@/components/product-card";
import productsData from "../products/productsData.js";

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const products = productsData;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      <LpNavbar1 />

      {/* Hero Section */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col items-center gap-8 sm:gap-12">
          <div className="section-title-gap-xl flex max-w-3xl flex-col items-center text-center px-4">
            <div className="bg-white rounded-full px-4 sm:px-6 py-2 shadow-sm border">
              <span className="text-orange-500 font-semibold text-xs sm:text-sm">Our Products</span>
            </div>
            <h1 className="heading-xl">Product Showcase</h1>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
              Explore our complete range of innovative products designed to transform your business and enhance productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-background section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {currentProducts.map((product, index) => (
              <ProductCard key={startIndex + index} product={product} />
            ))}
          </div>
          
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center px-4">
            <h2 className="heading-lg text-foreground">Ready to Try Our Products?</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Start your free trial today and experience the power of our innovative solutions.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
              <Link href="/#contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#services" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer1 />
      <ScrollToTop />
    </main>
  );
}