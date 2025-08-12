import Image from "next/image";
import { SITE, ABOUT } from "@/config/site";


// Server-rendered SEO metadata
export const metadata = {
    title: ABOUT.title,
    description: ABOUT.description,
    alternates: {
        canonical: SITE.url,
    },
    openGraph: {
        title: ABOUT.title,
        description: ABOUT.description,
        url: SITE.url,
        siteName: SITE.name,
        type: "website",
    },
};

export default function About() {
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

                <h1 className="text-4xl font-heading">Meet Ben & Anju</h1>
                <p className="mt-3 text-muted-foreground max-w-3xl">
                    Hosts of Ben&rsquo;s Cruise & Staycation — curators of authentic island life. We
                    welcome travelers to experience the warmth of Kerala through nature, wellness and cultural exchange.
                </p>

                <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
                    <Image
                        src="/assets/hosts.jpg"
                        alt="Hosts Ben and Anju in Kadamakudy"
                        loading="lazy"
                        width={600}
                        height={400}
                        className="rounded-lg border w-full object-cover" />
                    <div className="space-y-4">
                        <h2 className="text-2xl font-heading">Our Philosophy</h2>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                            <li>Warmth first — every guest is family.</li>
                            <li>Nature-forward — low-impact travel, high-impact memories.</li>
                            <li>Wellness — fresh cuisine, slow living, mindful experiences.</li>
                            <li>Cultural exchange — stories, traditions, and local craft.</li>
                        </ul>
                        <h3 className="text-xl font-heading">Sustainability</h3>
                        <p className="text-muted-foreground">We practice responsible waste management, support island livelihoods, and promote mangrove conservation.</p>
                        <h3 className="text-xl font-heading">Media & Certifications</h3>
                        <p className="text-muted-foreground">Featured by local travel collectives. Safety certified boats and licensed stays.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}