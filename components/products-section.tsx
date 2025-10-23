"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import productsData from "../app/products/productsData.js";

interface ProductsSectionProps {
  showAll?: boolean;
  maxProducts?: number;
  title?: string;
  subtitle?: string;
  showViewAllButton?: boolean;
}

export function ProductsSection({ 
  showAll = false, 
  maxProducts = 6, 
  title = "Featured Products",
  subtitle = "Discover our innovative products designed to solve real-world problems.",
  showViewAllButton = true 
}: ProductsSectionProps) {
  const products = showAll ? productsData : productsData.slice(0, maxProducts);

  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto">
        {/* Section Header */}
        <div className="section-title-gap-lg flex flex-col items-center text-center mb-8 sm:mb-12">
          <div className="bg-white rounded-full px-4 sm:px-6 py-2 shadow-sm border">
            <span className="text-orange-500 font-semibold text-xs sm:text-sm">Products</span>
          </div>
          <h2 className="heading-lg">{title}</h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* View All Button */}
        {showViewAllButton && !showAll && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <Link href="/products">
              <Button className="px-6 py-3">
                View All Products
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}