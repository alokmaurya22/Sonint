"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Zap } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const products = [
  {
    name: "TaskFlow Pro",
    description: "Complete project management solution with team collaboration, time tracking, and advanced reporting features.",
    features: ["Team Collaboration", "Time Tracking", "Advanced Reports", "Mobile App"],
    price: "$29/month",
    rating: 4.8,
    users: "500+",
    image: "/product1.jpg"
  },
  {
    name: "InvoiceGenius",
    description: "Smart invoicing and billing software that automates your financial workflows and client management.",
    features: ["Auto Invoicing", "Payment Tracking", "Client Portal", "Tax Reports"],
    price: "$19/month",
    rating: 4.9,
    users: "1000+",
    image: "/product2.jpg"
  },
  {
    name: "DataViz Dashboard",
    description: "Business intelligence platform that transforms your data into actionable insights with beautiful visualizations.",
    features: ["Real-time Analytics", "Custom Charts", "API Integration", "Export Tools"],
    price: "$39/month",
    rating: 4.7,
    users: "300+",
    image: "/product3.jpg"
  }
];

export function ProductsSection1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
          <div className="relative overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
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
                          {product.features.map((feature, featureIndex) => (
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
                          <Button>
                            Try Free Trial
                            <Zap className="h-4 w-4" />
                          </Button>
                          <Button variant="outline">
                            Learn More
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Product Image Placeholder */}
                      <div className="flex-1">
                        <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                          <span className="text-muted-foreground">Product Screenshot</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View All Products Button */}
          <div className="flex justify-center">
            <Link href="/products">
              <Button variant="outline" size="lg">
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