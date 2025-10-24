"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Users, X, Globe, Heart } from "lucide-react";
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
  onShowInterest,
}: ProductDetailsModalProps) {
  if (!isOpen) return null;

  return (
    // ===== Overlay =====
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* ===== Modal Box ===== */}
      <div
        className="relative w-[95%] sm:w-[800px] max-h-[90vh] flex flex-col bg-background border border-orange-500 rounded-lg shadow-xl"
        onClick={(e) => e.stopPropagation()} // avoid closing on inside click
      >
        {/* ===== Fixed Header ===== */}
        <div className="flex items-start justify-between p-4 sm:p-6 pb-4 border-b border-orange-200 sticky top-0 bg-background z-10">
          <div className="flex-1 pr-8">
            <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
              {product.title || "Product"}
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
              {product.subtitle || ""}
            </p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full border-2 border-orange-500 p-1 text-orange-600 hover:bg-orange-500 hover:text-white transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* ===== Scrollable Content ===== */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Product Image */}
          <div className="bg-muted rounded-lg h-48 sm:h-64 lg:h-80 overflow-hidden">
            <img
              src={product.image || ""}
              alt={product.title || "Product"}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const next = e.currentTarget.nextElementSibling as HTMLElement;
                if (next) next.style.display = "flex";
              }}
            />
            <div className="w-full h-full hidden items-center justify-center bg-muted text-muted-foreground">
              Product Screenshot
            </div>
          </div>

          {/* Rating & users */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-sm sm:text-base">{product.rating || 0}</span>
              </div>
              <span className="text-muted-foreground text-xs sm:text-sm">Rating</span>
            </div>
            <Separator orientation="vertical" className="hidden sm:block h-4" />
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-orange-500" />
              <span className="font-semibold text-sm sm:text-base">{product.users || "0"}</span>
              <span className="text-muted-foreground text-xs sm:text-sm">Active Users</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">About This Product</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {product.description || "No description available"}
            </p>
          </div>

          <Separator />

          {/* Features */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {product.features && product.features.length > 0 ? (
                product.features.map((f, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="justify-start p-1.5 sm:p-2 text-xs sm:text-sm"
                  >
                    {f}
                  </Badge>
                ))
              ) : (
                <p className="text-muted-foreground text-sm">No features available</p>
              )}
            </div>
          </div>

          <Separator />

          {/* Pricing */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-2">Pricing</h3>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 sm:p-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-primary">
                    {product.price || "Contact for pricing"}
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    Get started with our flexible pricing
                  </p>
                </div>
                <Button
                  onClick={onShowInterest}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 w-full sm:w-auto"
                >
                  <Heart className="h-4 w-4 mr-2" /> Show Interest
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Link
              href={product.trial_link || "#"}
              className="flex-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="default" className="w-full">
                <Globe className="h-4 w-4 mr-2" /> Try Live Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}