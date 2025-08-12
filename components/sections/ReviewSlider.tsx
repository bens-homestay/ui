"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

const reviews = [
  {
    name: "Aditi • Mumbai",
    quote: "A serene escape! The sunset cruise and homestay food were unforgettable.",
  },
  {
    name: "Daniel • Berlin",
    quote: "Kayaking through mangroves felt magical. Hosts are super warm!",
  },
  {
    name: "Family Rao • Bengaluru",
    quote: "Perfect weekend with kids — villa, boat ride, and island life.",
  },
  {
    name: "Sarah • London",
    quote: "The flotel experience was unique! Waking up on water was magical.",
  },
  {
    name: "Raj & Priya • Chennai",
    quote: "Ben and Anju made us feel like family. The authentic Kerala experience we were looking for.",
  },
];

export default function ReviewSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0); // Loop back to start
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-10 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading">What Our Guests Say</h2>
          <p className="mt-2 text-muted-foreground">Real experiences from travelers worldwide</p>
        </div>
        
        <div className="relative">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <blockquote className="p-6 rounded-xl border bg-card shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                      <div>
                        <div className="text-primary text-2xl mb-2">"</div>
                        <p className="text-foreground leading-relaxed">{review.quote}</p>
                      </div>
                      <footer className="mt-4 pt-4 border-t">
                        <cite className="text-sm font-medium text-muted-foreground not-italic">
                          {review.name}
                        </cite>
                      </footer>
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="hidden sm:flex -left-12 lg:-left-16" />
            <CarouselNext className="hidden sm:flex -right-12 lg:-right-16" />
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile navigation hint */}
        <p className="text-center text-xs text-muted-foreground mt-4 lg:hidden">
          Swipe left or right to see more reviews
        </p>
      </div>
    </section>
  );
}