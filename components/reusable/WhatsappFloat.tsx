import { SITE } from "@/config/site";
import { Button } from "@/components/ui/button";

export default function WhatsAppFloat() {
  const waHref = `https://wa.me/${SITE.whatsapp.phone.replace(/[^\d]/g, "")}?
    text=${encodeURIComponent(SITE.whatsapp.defaultMessage)}`;
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button asChild size="lg" variant="whatsapp" className="shadow-elevated">
        <a href={waHref} target="_blank" rel="noreferrer" aria-label="WhatsApp Instant Booking">
          WhatsApp
        </a>
      </Button>
    </div>
  );
}
