"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { InterestModal } from "@/components/interest-modal";
import { ProductDetailsModal } from "@/components/product-details-modal";
import { ExternalLink, Star, Users, Heart, Eye } from "lucide-react";
import Link from "next/link";

interface ProductCardProps {
  product: {
    productId: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    features: string[];
    price: string;
    rating: number;
    users: string;
    trial_link: string;
    learn_more_discription: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const openProductModal = () => {
    router.push(`/product/info/${product.productId}`);
  };

  return (
    <>
      <InterestModal
        isOpen={isInterestModalOpen}
        onClose={() => setIsInterestModalOpen(false)}
        productName={product.title}
        productImage={product.image}
      />
      
      <ProductDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        product={product}
        onShowInterest={() => {
          setIsDetailsModalOpen(false);
          setIsInterestModalOpen(true);
        }}
      />
    <Card className="bg-secondary rounded-xl border shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
        {/* Product Image */}
        <div 
          className="bg-muted rounded-lg h-40 sm:h-48 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group relative"
          onClick={openProductModal}
        >
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
              if (nextElement) {
                nextElement.style.display = 'flex';
              }
            }}
          />
          <div className="w-full h-full hidden items-center justify-center bg-muted">
            <span className="text-muted-foreground text-xs sm:text-sm">Product Screenshot</span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Eye className="h-8 w-8 text-white" />
          </div>
        </div>
        
        {/* Product Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
              {product.subtitle}
            </span>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium">{product.rating}</span>
            </div>
          </div>
          
          <h3 
            className="text-lg sm:text-xl font-semibold text-foreground line-clamp-2 cursor-pointer hover:text-primary transition-colors"
            onClick={openProductModal}
          >
            {product.title}
          </h3>
          
          <p 
            className="text-muted-foreground text-xs sm:text-sm line-clamp-3 cursor-pointer hover:text-foreground transition-colors"
            onClick={openProductModal}
          >
            {product.description}
          </p>
        </div>
        
        {/* Features */}
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {product.features.slice(0, 3).map((feature, featureIndex) => (
            <span 
              key={featureIndex}
              className="bg-background text-foreground px-2 py-1 rounded-md text-xs border"
            >
              {feature}
            </span>
          ))}
          {product.features.length > 3 && (
            <span className="bg-background text-foreground px-2 py-1 rounded-md text-xs border">
              +{product.features.length - 3}
            </span>
          )}
        </div>
        
        {/* Price and Users */}
        <div className="hidden flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">{product.price}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="h-3 w-3 text-orange-500" />
            <span className="text-xs">{product.users} users</span>
          </div>
        </div>
        
        {/* Product Links */}
        <div className="flex flex-col gap-2 mt-auto">
          <div className="flex gap-2">
            <Link href={product.trial_link} className="flex-1" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="w-full text-xs sm:text-sm">
                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                Try Free
              </Button>
            </Link>
            <Button 
              size="sm" 
              variant="outline" 
              className="px-2 sm:px-3"
              onClick={openProductModal}
            >
              Learn More
            </Button>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setIsInterestModalOpen(true)}
              className="text-xs sm:text-sm border-2 border-green-500 mx-auto"
            >
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
              Show Interest
            </Button>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="h-3 w-3 text-orange-500" />
              <span className="text-xs">{product.users} users</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </>
  );
}