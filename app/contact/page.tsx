"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { SITE, CONTACT } from "@/config/site";
import { useState } from "react";


const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  message: z.string().min(10),
});


type FormType = z.infer<typeof FormSchema>;

export default function Contact() {
  const [bookings, setBookings] = useState<FormType[]>([]);
  const form = useForm<FormType>({ resolver: zodResolver(FormSchema) });

  const onSubmit = (data: FormType) => {
    // Store in component state instead of localStorage
    const newBooking = { ...data, createdAt: new Date().toISOString() };
    setBookings(prev => [newBooking, ...prev]);
    toast({ title: "Enquiry saved", description: "We will contact you shortly." });
    form.reset();
  };

  const waHref = `https://wa.me/${SITE.whatsapp.phone.replace(/[^\d]/g, "")}?text=${encodeURIComponent("Booking enquiry: ")}`;
  const callHref = `tel:${SITE.whatsapp.phone}`;
  return (

    <div className="flex-1 py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        <h1 className="mt-6 text-4xl font-heading">Contact</h1>
        <p className="text-muted-foreground">Enquire via form, WhatsApp or call — we respond quickly.</p>

        <div className="mt-2 grid gap-6 md:grid-cols-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="With country code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="Dates, number of guests, interests…" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-3 mt-6">
                <Button className="cursor-pointer" type="submit" variant="hero" size="lg">Send Enquiry</Button>
                <Button asChild variant="outline" size="lg">
                  <a href={callHref}>Call Now</a>
                </Button>
              </div>
            </form>
          </Form>
          <div className="text-sm text-muted-foreground">
            <p><strong>Address:</strong> Kadamakudy Islands, Kochi, Kerala</p>
            <p className="mt-2">We're happy to arrange airport/city pickups on request.</p>
          </div>
        </div>
      </div>
    </div>
  );
}