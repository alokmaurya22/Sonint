"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { ProductDetailsModal } from "@/components/product-details-modal";
import { InterestModal } from "@/components/interest-modal";
import productsData from "../../../products/productsData.js";

export default function ProductInfoPage() {
    const router = useRouter();
    const params = useParams();
    const productId = params.productId as string;

    const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {
        if (!productId) {
            router.push('/products');
            return;
        }

        // Find product by productId
        const foundProduct = productsData.find(p => p.productId === productId);
        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            // If product not found, redirect to products page
            router.push('/products');
        }
    }, [productId, router]);

    const handleCloseModal = () => {
        router.back(); // Go back to previous page
    };

    const handleShowInterest = () => {
        setIsInterestModalOpen(true);
    };

    if (!product) {
        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-2 text-sm text-muted-foreground">Loading product...</p>
                </div>
            </div>
        );
    }

    return (
        <>
            <InterestModal
                isOpen={isInterestModalOpen}
                onClose={() => setIsInterestModalOpen(false)}
                productName={product.title}
                productImage={product.image}
            />

            <ProductDetailsModal
                isOpen={true}
                onClose={handleCloseModal}
                product={product}
                onShowInterest={handleShowInterest}
            />
        </>
    );
}