import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Zap, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function ProductsPage() {
  const products = [
    {
      name: "TaskFlow Pro",
      description: "Complete project management solution with team collaboration, time tracking, and advanced reporting features.",
      features: ["Team Collaboration", "Time Tracking", "Advanced Reports", "Mobile App", "API Integration", "Custom Workflows"],
      price: "$29/month",
      rating: 4.8,
      users: "500+",
      category: "Project Management"
    },
    {
      name: "InvoiceGenius",
      description: "Smart invoicing and billing software that automates your financial workflows and client management.",
      features: ["Auto Invoicing", "Payment Tracking", "Client Portal", "Tax Reports", "Multi-Currency", "Recurring Billing"],
      price: "$19/month",
      rating: 4.9,
      users: "1000+",
      category: "Finance"
    },
    {
      name: "DataViz Dashboard",
      description: "Business intelligence platform that transforms your data into actionable insights with beautiful visualizations.",
      features: ["Real-time Analytics", "Custom Charts", "API Integration", "Export Tools", "Automated Reports", "Data Alerts"],
      price: "$39/month",
      rating: 4.7,
      users: "300+",
      category: "Analytics"
    },
    {
      name: "CRM Master",
      description: "Customer relationship management system that helps you track leads, manage contacts, and close more deals.",
      features: ["Lead Management", "Contact Database", "Sales Pipeline", "Email Integration", "Task Automation", "Mobile Access"],
      price: "$25/month",
      rating: 4.6,
      users: "800+",
      category: "CRM"
    },
    {
      name: "StockTracker",
      description: "Inventory management solution for businesses to track stock levels, manage suppliers, and optimize operations.",
      features: ["Stock Monitoring", "Supplier Management", "Order Tracking", "Low Stock Alerts", "Barcode Scanning", "Reports"],
      price: "$22/month",
      rating: 4.5,
      users: "400+",
      category: "Inventory"
    },
    {
      name: "TeamChat Pro",
      description: "Enterprise communication platform with secure messaging, file sharing, and video conferencing capabilities.",
      features: ["Secure Messaging", "File Sharing", "Video Calls", "Screen Sharing", "Team Channels", "Integration Hub"],
      price: "$15/month",
      rating: 4.8,
      users: "1200+",
      category: "Communication"
    }
  ];

  return (
    <main>
      <LpNavbar1 />
      
      {/* Hero Section */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto flex flex-col items-center gap-8 sm:gap-12">
          <div className="section-title-gap-xl flex max-w-3xl flex-col items-center text-center px-4">
            <div className="bg-white rounded-full px-4 sm:px-6 py-2 shadow-sm border">
              <span className="text-orange-500 font-semibold text-xs sm:text-sm">All Products</span>
            </div>
            <h1 className="heading-xl">Ready-to-Use Software Solutions</h1>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
              Discover our complete range of software products designed to streamline your business operations and boost productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-background section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <Card key={index} className="bg-secondary rounded-xl border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
                  {/* Product Header */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs sm:text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs sm:text-sm line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {product.features.slice(0, 4).map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-background text-foreground px-2 py-1 rounded-md text-xs border"
                      >
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 4 && (
                      <span className="bg-background text-foreground px-2 py-1 rounded-md text-xs border">
                        +{product.features.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Stats and Price */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                      <span className="text-xs sm:text-sm font-medium">{product.users} users</span>
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-primary">
                      {product.price}
                    </div>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex gap-2">
                    <Button className="flex-1 text-xs sm:text-sm">
                      <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
                      Try Free Trial
                    </Button>
                    <Button variant="outline" className="px-2 sm:px-3">
                      <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary section-padding-y">
        <div className="container-padding-x container mx-auto">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center px-4">
            <h2 className="heading-lg text-foreground">Need a Custom Solution?</h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Don't see what you're looking for? We can build custom software tailored to your specific business needs.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
              <Link href="/#contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto">
                  Get Custom Quote
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#services" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto">View Our Services</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer1 />
      <ScrollToTop />
    </main>
  );
}