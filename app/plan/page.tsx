import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PlanYourVisit() {
    return (
        <div className="flex-1 py-10">
            <div className="max-w-7xl mx-auto px-4">

                <h1 className="text-4xl font-heading">Plan Your Visit</h1>
                <p className="mt-2 text-muted-foreground">Location, transport and itineraries.</p>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                        <div className="aspect-video border rounded-lg overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                // src="https://www.google.com/maps?q=Kadamakudy&output=embed"
                                src = {"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6074970890795!2d76.26375277545961!3d10.049211472185123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080df9aaaaaaf3%3A0xe4cf45bb4bd0c6d2!2sBens%20Cruise%20%26%20Homestay!5e0!3m2!1sen!2sin!4v1755029337210!5m2!1sen!2sin"}
                                title="Kadamakudy Map"
                                loading="lazy"
                            />
                        </div>
                        <div className="text-sm text-muted-foreground">
                            <p><strong>Nearest Airport:</strong> Cochin International Airport (COK) — 40-50 mins</p>
                            <p><strong>Pickups:</strong> Airport/City pickups available on request</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-heading">Suggested Itineraries</h2>
                        <Accordion type="single" collapsible className="mt-2">
                            <AccordionItem value="one-night">
                                <AccordionTrigger>1 Night Getaway</AccordionTrigger>
                                <AccordionContent>
                                    Arrive by noon • Sunset cruise • Local dinner • Morning kayaking • Island walk
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="weekend">
                                <AccordionTrigger>Weekend Family Trip</AccordionTrigger>
                                <AccordionContent>
                                    Villa stay • Houseboat ride • Mangrove kayaking • Cultural lunch • Village tour
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <h2 className="text-2xl font-heading mt-6">Travel Tips</h2>
                        <ul className="list-disc pl-5 text-muted-foreground space-y-2 mt-2 text-sm">
                            <li>Pack light, breathable clothing and sandals.</li>
                            <li>Monsoon brings magic — carry a light rain jacket.</li>
                            <li>Respect local communities and ecosystems.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}