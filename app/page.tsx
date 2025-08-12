import HeroSection from "@/components/sections/HeroSection";
import ExploreSection from "@/components/sections/ExploreSection";
import ReviewSlider from "@/components/sections/ReviewSlider";
import { SITE } from "@/config/site";


// Server-rendered SEO metadata
export const metadata = {
  title: "Ben's Cruise & Staycation | Kerala Houseboats & Stays",
  description: SITE.description,
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: "Ben's Cruise & Staycation | Kerala Houseboats & Stays",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
};


export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: SITE.name,
    url: SITE.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      addressCountry: SITE.address.country,
    },
  };

  return (
    <div className="flex-1">
      {/* Structured data injected server-side */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />

     

      <ExploreSection />
      <ReviewSlider />
       <section className="py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="aspect-video w-full rounded-lg overflow-hidden border">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/bv1ys1NttRQ?si=cByCGaPdA_fT9vHG"  
              title="YouTube video player" 
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      {/* <WhatsAppFloat /> */}
    </div>
  );
}