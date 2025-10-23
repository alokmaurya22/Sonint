"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, CheckCircle, Heart } from "lucide-react";

interface InterestModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
    productImage: string;
}

export function InterestModal({ isOpen, onClose, productName, productImage }: InterestModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        description: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/interest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    productName,
                    timestamp: new Date().toISOString()
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                // Reset form after 3 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        description: ""
                    });
                    onClose();
                }, 3000);
            } else {
                throw new Error('Failed to submit');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetAndClose = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            description: ""
        });
        setIsSubmitted(false);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={resetAndClose}>
            <DialogContent className="sm:max-w-md border-1 border-orange-500">
                <DialogHeader>
                    <DialogTitle className="flex items-center justify-between">
                        <div className="flex items-center gap-2 classNameForBoth text-green-500">
                            <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
                            <span>Show Interest</span>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={resetAndClose}
                            className="h-6 w-6 p-0 text-orange-500 border-2 rounded-full"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </DialogTitle>
                </DialogHeader>

                {isSubmitted ? (
                    <div className="flex flex-col items-center gap-4 py-8">
                        <CheckCircle className="h-16 w-16 text-green-500" />
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-foreground">Request Sent!</h3>
                            <p className="text-muted-foreground text-sm mt-2">
                                We will get back to you within 24 hours with more details about {productName}.
                            </p>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="bg-muted p-2 rounded-lg">
                            <div className="flex justify-between items-start gap-4">
                                {/* Left Side: Label + Product Name */}
                                <div className="flex flex-col ml-2">
                                <Label className="text-sm font-medium mb-1">Product Interest</Label>
                                <p className="text-sm text-muted-foreground font-medium text-orange-500">{productName}</p>
                                </div>
                                <div className="w-[90px] h-[45px] rounded-md overflow-hidden flex items-center justify-center mr-4">
                                <img
                                    src={productImage}
                                    alt={productName}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                                    if (nextElement) {
                                        nextElement.style.display = "flex";
                                    }
                                    }}
                                />
                                <div className="hidden w-full h-full items-center justify-center">
                                    <span className="text-xs text-muted-foreground">Image</span>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="name">Name *</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your full name"
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone *</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Your phone number"
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="email">Email </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <Label htmlFor="company">Company</Label>
                            <Input
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="Your company name (optional)"
                            />
                        </div>

                        <div>
                            <Label htmlFor="description">Additional Details</Label>
                            <Textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Tell us more about your requirements or any specific questions..."
                                rows={3}
                            />
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={resetAndClose}
                                className="flex-1"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1"
                            >
                                {isSubmitting ? "Sending..." : "Send Request"}
                            </Button>
                        </div>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}