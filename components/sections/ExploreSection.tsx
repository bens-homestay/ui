import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const items = [
  {
    title: "Stays",
    description: "Riverside Villa, Flotel & Heritage Homestay",
    img: "/assets/villa.jpg",
    href: "/experiences#stays",
  },
  {
    title: "Cruises",
    description: "Private houseboats: Shikkara, Kettuvallam & more",
    img: "/assets/houseboat.jpg",
    href: "/experiences#cruises",
  },
  {
    title: "Packages",
    description: "Sunset Cruise, Island Tours, Mangrove Kayaking",
    img: "/assets/kayaking.jpg",
    href: "/experiences#packages",
  },
];

export default function ExploreSection() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading">Explore</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <Card key={it.title} className="overflow-hidden group">
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={it.img}
                  alt={`${it.title} in Kadamakudy`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle>{it.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{it.description}</p>
                <Button asChild size="sm" variant="outline">
                  <Link href={it.href}>See</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}