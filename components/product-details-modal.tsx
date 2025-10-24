"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExternalLink, Star, Users, X, Github, Globe, Heart } from "lucide-react";
import Link from "next/link";

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    productId?: string;
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
  onShowInterest: () => void;
}

export function ProductDetailsModal({ 
  isOpen, 
  onClose, 
  product, 
  onShowInterest 
}: ProductDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl  max-h-[95vh] w-[calc(100%-2rem)] sm:w-full m-4 sm:m-0 p-0 rounded-lg border border-orange-500 shadow-xl my-auto mx-auto [&>button]:top-2 [&>button]:right-2">
        <DialogHeader className="p-4 sm:p-6 pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-8">
              <DialogTitle className="text-lg sm:text-2xl font-bold text-left mb-1 sm:mb-2">
                {product.title}
              </DialogTitle>
              <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                {product.subtitle}
              </p>
            </div>
            <DialogClose className="absolute top-4 right-4 rounded-full opacity-80 ring-offset-background transition-opacity hover:opacity-100 hover:bg-orange-500 p-1">
              <X className="h-6 w-6 p-0 border-2 border-orange-500 rounded-full" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(85vh-80px)]">
          <div className="p-4 sm:p-6 pt-2 sm:pt-0 space-y-4 sm:space-y-6">
            {/* Product Image */}
            <div className="bg-muted rounded-lg h-48 sm:h-64 lg:h-80 overflow-hidden">
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
                <span className="text-muted-foreground text-sm">Product Screenshot</span>
              </div>
            </div>

            {/* Rating and Users */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 sm:h-4 w-3.5 sm:w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-sm sm:text-base">{product.rating}</span>
                </div>
                <span className="text-muted-foreground text-xs sm:text-sm">Rating</span>
              </div>
              <Separator orientation="vertical" className="hidden sm:block h-4" />
              <div className="flex items-center gap-2">
                <Users className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-orange-500" />
                <span className="font-semibold text-sm sm:text-base">{product.users}</span>
                <span className="text-muted-foreground text-xs sm:text-sm">Active Users</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">About This Product</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator className="my-4 sm:my-6" />

            {/* Features */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {product.features.map((feature, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="justify-start p-1.5 sm:p-2 text-xs sm:text-sm"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="my-4 sm:my-6" />

            {/* Pricing */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Pricing</h3>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-primary">{product.price}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">Get started with our flexible pricing</p>
                  </div>
                  <Button 
                    onClick={onShowInterest}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 w-full sm:w-auto"
                  >
                    <Heart className="h-3.5 sm:h-4 w-3.5 sm:w-4 mr-1.5 sm:mr-2" />
                    Show Interest
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
              <Link href={product.trial_link} className="flex-1" target="_blank" rel="noopener noreferrer">
                <Button size="default" className="w-full">
                  <Globe className="h-3.5 sm:h-4 w-3.5 sm:w-4 mr-1.5 sm:mr-2" />
                  Try Live Demo
                </Button>
              </Link>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}