import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function HeroSection() {
  const waHref = `https://wa.me/${SITE.whatsapp.phone.replace(/[^\d]/g, "")}?text=${encodeURIComponent("Hi! I'd like to book/know more about Kadamakudy experiences.")}`;
  const callHref = `tel:${SITE.whatsapp.phone}`;
  
  return (
    <section className="relative h-[82vh] min-h-[520px] w-full overflow-hidden">
      <Image
        src="/assets/hero-kadamakudy.jpg"
        alt="Kerala backwaters near Kadamakudy with houseboats and islands"
        fill
        className="object-cover object-center md:object-center lg:object-left-top"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-end pb-12 md:pb-16">
        <div className="max-w-2xl animate-enter w-full">
          <p className="text-sm uppercase tracking-wider">Discover Kerala&rsquo;s Hidden Paradise</p>
          <h1 className="mt-2 text-3xl md:text-5xl lg:text-6xl font-heading leading-tight">
            Luxury Houseboats, Island Adventures & Authentic Staycation
          </h1>
          <p className="mt-4 text-muted-foreground text-sm md:text-base">
            Cruises, premium stays and curated experiences across Kadamakudy&rsquo;s 14 islands.
          </p>
          
          {/* Desktop Button Layout */}
          <div className="hidden md:flex flex-wrap gap-3 mt-6">
            <Button asChild variant="hero" size="lg">
              <Link href="/contact">Book Your Stay</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/experiences">Explore Experiences</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/plan">Plan Your Escape</Link>
            </Button>
          </div>

          {/* Mobile Button Layout */}
          <div className="flex md:hidden flex-col gap-3 mt-6">
            <div className="flex gap-2">
              <Button asChild variant="hero" size="lg" className="flex-1">
                <Link href="/contact">Book Now</Link>
              </Button>
            </div>
            
            {/* More Options Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="lg" className="w-full">
                  More Options
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/experiences" className="w-full">
                    Explore Experiences
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/plan" className="w-full">
                    Plan Your Escape
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href={callHref} className="w-full">
                    Call Now
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </section>
  );
}