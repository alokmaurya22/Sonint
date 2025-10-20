"use client";

import { Logo } from "@/components/pro-blocks/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Vision", href: "#vision" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Products", href: "#products" },
  { label: "Company", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

interface NavMenuItemsProps {
  className?: string;
}

const NavMenuItems = ({ className }: NavMenuItemsProps) => {
  const [activeSection, setActiveSection] = useState("");

  // Handle click on navigation items
  const handleNavClick = (href: string) => {
    setActiveSection(href);
    // Small delay to ensure scroll position is updated after navigation
    setTimeout(() => {
      handleScroll();
    }, 100);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // If near bottom of page, activate contact section
    if (scrollPosition + windowHeight >= documentHeight - 50) {
      setActiveSection("#contact");
      return;
    }

    // If at top of page, set home as active
    if (window.scrollY < 100) {
      setActiveSection("/");
      return;
    }

    // Get all sections with their positions
    const sectionElements = MENU_ITEMS
      .filter(item => item.href !== "/")
      .map(item => {
        const sectionId = item.href.replace('#', '');
        const element = document.getElementById(sectionId);
        return {
          id: sectionId,
          href: item.href,
          element,
          offsetTop: element ? element.offsetTop : 0,
          offsetBottom: element ? element.offsetTop + element.offsetHeight : 0
        };
      })
      .filter(section => section.element)
      .sort((a, b) => a.offsetTop - b.offsetTop); // Sort by position on page

    // Find the current section based on scroll position
    let currentSection = "";

    for (let i = 0; i < sectionElements.length; i++) {
      const section = sectionElements[i];
      const nextSection = sectionElements[i + 1];

      if (scrollPosition >= section.offsetTop - 50) {
        // If there's a next section, check if we haven't reached it yet
        if (nextSection && scrollPosition < nextSection.offsetTop - 50) {
          currentSection = section.href;
          break;
        } else if (!nextSection) {
          // This is the last section
          currentSection = section.href;
          break;
        } else {
          // Continue to next section
          currentSection = section.href;
        }
      }
    }

    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {


    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return (
    <div className={`flex flex-col gap-1 md:flex-row ${className ?? ""}`}>
      {MENU_ITEMS.map(({ label, href }) => {
        const isActive = activeSection === href;
        return (
          <Link
            key={label}
            href={href}
            className="relative group"
            onClick={() => handleNavClick(href)}
          >
            <Button
              variant="ghost"
              className={`w-full md:w-auto transition-colors ${isActive ? 'text-orange-500' : ''
                }`}
            >
              {label}
            </Button>
            {/* Orange underline for active state */}
            <div
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-orange-500 transition-all duration-300 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
            />
            {/* Hover effect */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-orange-400 transition-all duration-300 w-0 group-hover:w-full opacity-0 group-hover:opacity-70" />
          </Link>
        );
      })}
    </div>
  );
};

export function LpNavbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="bg-background sticky top-0 isolate z-50 border-b py-3.5 md:py-4">
      <div className="relative container m-auto flex flex-col justify-between gap-4 px-6 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Button
            variant="ghost"
            className="flex size-9 items-center justify-center md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden w-full flex-row justify-end gap-5 md:flex">
          <NavMenuItems />
          <Link href="#contact">
            <Button>Get Started</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="flex w-full flex-col justify-end gap-5 pb-2.5 md:hidden">
            <NavMenuItems />
            <Link href="#contact">
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
