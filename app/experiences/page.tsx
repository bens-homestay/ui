import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { SITE, EXPERIENCES } from "@/config/site";

const experiences = [
    { id: "shikkara", title: "Shikkara Cruise", img: "/assets/houseboat.jpg", tag: "Cruise", desc: "Intimate backwater ride for couples & small families." },
    { id: "kettuvallam", title: "Kettuvallam", img: "/assets/houseboat.jpg", tag: "Cruise", desc: "Traditional houseboat with modern comforts." },
    { id: "dd-houseboat", title: "Double Decker", img: "/assets/houseboat.jpg", tag: "Cruise", desc: "Panoramic views and spacious decks." },
    { id: "kayaking", title: "Kayaking / SUP", img: "/assets/kayaking.jpg", tag: "Adventure", desc: "Mangrove trails and silent lagoons." },
    { id: "villa", title: "Ben's Riverside Villa", img: "/assets/villa.jpg", tag: "Stay", desc: "Premium villa with riverside views and amenities." },
    { id: "flotel", title: "Ben's Flotel", img: "/assets/flotel.jpg", tag: "Stay", desc: "Floating stay with luxury comforts." },
    { id: "homestay", title: "Ben's Homestay", img: "/assets/homestay.jpg", tag: "Stay", desc: "Heritage home with traditional cuisine." },
];

// Server-rendered SEO metadata
export const metadata = {
    title: EXPERIENCES.title,
    description: EXPERIENCES.description,
    alternates: {
        canonical: SITE.url,
    },
    openGraph: {
        title: EXPERIENCES.title,
        description: EXPERIENCES.description,
        url: SITE.url,
        siteName: SITE.name,
        type: "website",
    },
};

export default function Experiences() {
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
        <div className="flex-1 py-10">
            {/* Structured data injected server-side */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-7xl mx-auto px-4">

                <h1 className="text-4xl font-heading">Experiences</h1>
                <p className="mt-2 text-muted-foreground max-w-2xl">Choose from our curated cruises, adventures, and stays. Each experience is safety-certified and locally hosted.</p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {experiences.map((ex) => (
                        <Card key={ex.id} className="overflow-hidden group">
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={ex.img}
                                    alt={`${ex.title} in Kadamakudy`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span>{ex.title}</span>
                                    <span className="text-xs bg-secondary px-2 py-1 rounded">{ex.tag}</span>
                                </CardTitle>
                                <CardDescription>{ex.desc}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex gap-2">
                                <Button asChild size="sm" variant="outline">
                                    <Link href="/contact">Enquire</Link>
                                </Button>
                                <Button asChild size="sm">
                                    <Link href="/plan">Itinerary</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
