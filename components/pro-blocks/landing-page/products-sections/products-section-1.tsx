"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import productsData from "../../../../app/products/productsData.js";

// Map the products data to match the component structure
const products = productsData.map((product: any) => ({
  name: product.title,
  description: product.description,
  features: product.features,
  price: product.price,
  rating: product.rating,
  users: product.users,
  image: product.image,
  trial_link: product.trial_link,
  learn_more_link: product.learn_more_discription
}));

export function ProductsSection1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [products.length]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <section className="bg-secondary section-padding-y border-b" id="products">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* Section Header */}
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <div className="bg-white rounded-full px-6 py-2 shadow-sm border">
              <span className="text-orange-500 font-semibold text-sm">Our Products</span>
            </div>
            <h2 className="heading-lg text-foreground">Ready-to-Use Solutions</h2>
            <p className="text-muted-foreground">
              Powerful software products designed to streamline your business operations and boost productivity.
            </p>
          </div>

          {/* Products Carousel */}
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {products.map((product: any, index: number) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <Card className="bg-background rounded-xl border shadow-sm mx-2">
                      <CardContent className="flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:gap-12">
                        {/* Product Info */}
                        <div className="flex flex-1 flex-col gap-4">
                          <div className="flex items-center gap-4">
                            <h3 className="text-2xl font-semibold text-foreground">
                              {product.name}
                            </h3>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{product.rating}</span>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground">
                            {product.description}
                          </p>
                          
                          {/* Features */}
                          <div className="flex flex-wrap gap-2">
                            {product.features.map((feature: string, featureIndex: number) => (
                              <span 
                                key={featureIndex}
                                className="bg-background text-foreground px-3 py-1 rounded-full text-sm border"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                          
                          {/* Stats */}
                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-primary" />
                              <span className="text-sm font-medium">{product.users} users</span>
                            </div>
                            <div className="text-2xl font-bold text-primary">
                              {product.price}
                            </div>
                          </div>
                          
                          {/* CTA Buttons */}
                          <div className="flex gap-3">
                            <Link href={product.trial_link} target="_blank" rel="noopener noreferrer">
                              <Button>
                                Try Free Trial
                                <Zap className="h-4 w-4" />
                              </Button>
                            </Link>
                            <Link href={product.learn_more_link} target="_blank" rel="noopener noreferrer">
                              <Button variant="outline">
                                Learn More
                                <ArrowRight className="h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                        
                        {/* Product Image */}
                        <div className="flex-1">
                          <div className="bg-muted rounded-lg overflow-hidden border-2">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-fit-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                                if (nextElement) {
                                  nextElement.style.display = 'flex';
                                }
                              }}
                            />
                            <div className="w-full h-full hidden items-center justify-center bg-muted">
                              <span className="text-muted-foreground">Product Screenshot</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 p-0 bg-background/80 backdrop-blur-sm"
              onClick={prevProject}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 p-0 bg-background/80 backdrop-blur-sm"
              onClick={nextProject}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-background'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View All Products Button */}
          <div className="flex justify-center">
            <Link href="/products">
              <Button variant="outline" size="lg" className="border-orange-500">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}