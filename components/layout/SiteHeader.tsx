'use client';

import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from "@/components/reusable/ThemeToggle";

const nav = [
  { to: "/experiences", label: "Experiences" },
  { to: "/why-kadamakudy", label: "Why Kadamakudy" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/plan", label: "Plan Your Visit" },
  { to: "/about", label: "About" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const waHref = `https://wa.me/${SITE.whatsapp.phone.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
    SITE.whatsapp.defaultMessage
  )}`;

  // Effect to measure the header height
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  // Handle visibility for animations and prevent background scroll
  useEffect(() => {
    if (open) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = 'auto';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    if (open) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Reusable navigation links component
  const NavigationLinks = ({ className, onClick }: { className?: string; onClick?: () => void }) => (
    <>
      {nav.map((n) => (
        <Link
          key={n.to}
          href={n.to}
          className={`${className} ${pathname === n.to ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          onClick={onClick}
        >
          {n.label}
        </Link>
      ))}
    </>
  );

  // Reusable action buttons component
  const ActionButtons = ({ variant = "desktop" }: { variant?: "desktop" | "mobile" }) => {
    const buttonSize = variant === "mobile" ? "lg" : "sm";
    const containerClass = variant === "mobile" ? "flex flex-col gap-3 w-full" : "flex items-center gap-2";

    return (
      <div className={containerClass}>
        {variant === "desktop" && <ThemeToggle />}
        <Button asChild variant="outline" size={buttonSize} className={variant === "mobile" ? "w-full" : ""}>
          <Link href="/contact">Book Now</Link>
        </Button>
        <Button asChild variant="whatsapp" size={buttonSize} className={variant === "mobile" ? "w-full" : ""}>
          <a href={waHref} target="_blank" rel="noreferrer">WhatsApp</a>
        </Button>
      </div>
    );
  };

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-30 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="text-xl font-heading">Ben&rsquo;s</span>
            <span className="text-sm text-muted-foreground">Cruise & Staycation</span>
          </Link>

          {/* --- DESKTOP NAVIGATION (1000px+) --- */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavigationLinks className="text-sm" />
          </nav>

          <div className="hidden lg:flex">
            <ActionButtons variant="desktop" />
          </div>

          {/* --- MOBILE MENU BUTTON (under 1000px) --- */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle /> 
            <button
              aria-label="Toggle menu"
              className="p-2 rounded border w-9 h-9 flex items-center justify-center"
              onClick={() => setOpen((v) => !v)}
            >
              <div className="relative w-5 h-5">
                <div className={`absolute inset-0 transition-all duration-300 ease-in-out ${open ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
                  <Menu className="h-5 w-5" />
                </div>
                <div className={`absolute inset-0 transition-all duration-300 ease-in-out ${open ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
                  <X className="h-5 w-5" />
                </div>
              </div>
              <div className="sr-only">Menu</div>
            </button>
          </div>
        </div>
      </header>

      {/* --- FULL-SCREEN MOBILE MENU PANEL --- */}
      {isVisible && (
        <div
          style={{ top: `${headerHeight}px` }}
          className={`fixed left-0 right-0 bottom-0 z-20 bg-background lg:hidden ${
            open
              ? 'animate-fade-in'
              : 'animate-fade-out'
          }`}
        >
          <div className="flex flex-col h-full overflow-hidden">
            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto p-6 pt-8">
              <nav className="flex flex-col gap-6 mb-8">
                <NavigationLinks 
                  className="text-2xl font-medium" 
                  onClick={() => setOpen(false)}
                />
              </nav>
            </div>
            
            {/* Fixed buttons at bottom */}
            <div className="flex-shrink-0 p-6 pt-0 bg-background flex justify-center">
              <div className="w-[85%] max-w-sm">
                <ActionButtons variant="mobile" />
              </div>
            </div>``
          </div>
        </div>
      )}
    </>
  );
}