"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Star,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
  Heart,
  Eye,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { InterestModal } from "@/components/interest-modal";
import { ProductDetailsModal } from "@/components/product-details-modal";
import productsData from "../../../../app/products/productsData.js";

// Helpers

const truncateDescription = (text: string, wordLimit = 75) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + " ...more"
    : text;
};

const getTrimmedFeatures = (features: string[], limit: number = 6) => {
  if (features.length > limit) {
    const extra = features.length - limit;
    return [...features.slice(0, limit), `+${extra}`];
  }
  return features;
};

// Main Component
export function ProductsSection1() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const products = productsData.map((product: any) => ({
    name: product.title,
    productId: product.id,
    title: product.title,
    subtitle: product.subtitle,
    description: product.description,
    features: product.features,
    price: product.price,
    rating: product.rating,
    users: product.users,
    image: product.image,
    trial_link: product.trial_link,
    learn_more_link: product.learn_more_discription,
    learn_more_discription: product.learn_more_discription,
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [products.length]);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleShowInterest = (product: any) => {
    setSelectedProduct(product);
    setIsInterestModalOpen(true);
  };

  const handleOpenDetails = (product: any) => {
    setSelectedProduct(product);
    setIsDetailsModalOpen(true);
  };

  return (
    <>
      <InterestModal
        isOpen={isInterestModalOpen}
        onClose={() => setIsInterestModalOpen(false)}
        productName={selectedProduct?.name || ""}
        productImage={selectedProduct?.image || ""}
      />

      <ProductDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        product={selectedProduct || {
          productId: "",
          title: "",
          subtitle: "",
          description: "",
          image: "",
          features: [],
          price: "",
          rating: 0,
          users: "",
          trial_link: "",
          learn_more_discription: ""
        }}
        onShowInterest={() => {
          setIsDetailsModalOpen(false);
          setIsInterestModalOpen(true);
        }}
      />

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

            {/* Carousel */}
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {products.map((product, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <Card className="bg-background rounded-xl border shadow-sm">
                        <CardContent className="p-4 lg:p-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-8">
                          {/* Left Side: Info */}
                          <div className="flex-1 flex flex-col gap-4 lg:max-w-[60%]">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                              <h3
                                className="text-2xl font-semibold text-foreground cursor-pointer hover:text-primary transition-colors"
                                onClick={() => handleOpenDetails(product)}
                              >
                                {product.name}
                              </h3>
                            </div>

                            {/* Description */}
                            <p
                              className="text-muted-foreground leading-relaxed ml-4 cursor-pointer hover:text-foreground transition-colors"
                              onClick={() => handleOpenDetails(product)}
                            >
                              {truncateDescription(product.description)}
                            </p>
                            {/* Stats */}
                            <div className="flex items-center gap-6  ml-6">
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium">{product.users} users</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">
                                  {product.rating}
                                </span>
                              </div>
                              <div className="text-2xl font-bold text-primary">
                                {/*product.price*/}
                                <Button
                                  variant="secondary"
                                  onClick={() => handleShowInterest(product)}
                                  className="border-2 border-green-500"
                                >
                                  <Heart className="h-4 w-4 text-orange-500" />
                                  Show Interest
                                </Button>
                              </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col gap-3  ml-6">
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
                          </div>

                          {/* Right Side: Image & Features */}
                          <div className="flex flex-col gap-3 w-full lg:w-[40%]">
                            {/* Image */}
                            <div
                              className="rounded-md border overflow-hidden max-h-[220px] cursor-pointer hover:opacity-90 transition-opacity group relative"
                              onClick={() => handleOpenDetails(product)}
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                                  if (fallback) fallback.style.display = "flex";
                                }}
                              />
                              <div className="w-full h-full hidden items-center justify-center bg-muted">
                                <span className="text-muted-foreground text-sm">
                                  Image not available
                                </span>
                              </div>
                              {/* Hover overlay */}
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Eye className="h-8 w-8 text-white" />
                              </div>
                            </div>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2">
                              {getTrimmedFeatures(product.features).map(
                                (feature, idx) => (
                                  <span
                                    key={idx}
                                    className="bg-muted text-foreground px-3 py-1 text-xs rounded-full border"
                                  >
                                    {feature}
                                  </span>
                                )
                              )}
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
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 p-0 bg-muted backdrop-blur-sm"
                onClick={prevProduct}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 p-0 bg-muted backdrop-blur-sm"
                onClick={nextProduct}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex
                      ? "bg-primary"
                      : "bg-background border"
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
    </>
  );
}