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
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-left mb-2">
                {product.title}
              </DialogTitle>
              <p className="text-muted-foreground text-sm">
                {product.subtitle}
              </p>
            </div>
            <DialogClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-120px)]">
          <div className="p-6 pt-0">
            {/* Product Image */}
            <div className="bg-muted rounded-lg h-64 sm:h-80 overflow-hidden mb-6">
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
                <span className="text-muted-foreground">Product Screenshot</span>
              </div>
            </div>

            {/* Rating and Users */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{product.rating}</span>
                </div>
                <span className="text-muted-foreground text-sm">Rating</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-orange-500" />
                <span className="font-semibold">{product.users}</span>
                <span className="text-muted-foreground text-sm">Active Users</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">About This Product</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator className="my-6" />

            {/* Features */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {product.features.map((feature, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="justify-start p-2 text-sm"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="my-6" />

            {/* Pricing */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Pricing</h3>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-primary">{product.price}</p>
                    <p className="text-muted-foreground text-sm">Get started with our flexible pricing</p>
                  </div>
                  <Button 
                    onClick={onShowInterest}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Heart className="h-4 w-4 mr-2" />
                    Show Interest
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={product.trial_link} className="flex-1" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="w-full">
                  <Globe className="h-4 w-4 mr-2" />
                  Try Live Demo
                </Button>
              </Link>
              <Link href={product.learn_more_discription} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="flex-1">
                  <Github className="h-4 w-4 mr-2" />
                  View Source Code
                </Button>
              </Link>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}