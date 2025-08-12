import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="text-lg font-heading">Ben’s Cruise & Staycation</div>
          <p className="text-sm text-muted-foreground mt-2">Kadamakudy Islands, Kochi, Kerala</p>
        </div>
        <div>
          <div className="font-medium mb-2">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/experiences">Experiences</Link></li>
            <li><Link href="/why-kadamakudy">Why Kadamakudy</Link></li>
            <li><Link href="/plan">Plan Your Visit</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Support</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="#">FAQs</Link></li>
            <li><Link href="#">Sustainability</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Legal</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="#">Terms</Link></li>
            <li><Link href="#">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Ben’s Cruise & Staycation</div>
    </footer>
  );
}
