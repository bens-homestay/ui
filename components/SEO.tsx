
import { useEffect } from "react";

type SEOProps = {
  title: string;
  description?: string;
  image?: string;
  canonical?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const ensureMeta = (name: string, attr: "name" | "property" = "name") => {
  let el = document.querySelector(`meta[${attr}='${name}']`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  return el;
};

export default function SEO({ title, description, image, canonical, jsonLd }: SEOProps) {
  useEffect(() => {
    document.title = title;
    if (description) {
      ensureMeta("description").setAttribute("content", description);
      ensureMeta("og:description", "property").setAttribute("content", description);
    }
    ensureMeta("og:title", "property").setAttribute("content", title);
    if (image) ensureMeta("og:image", "property").setAttribute("content", image);

    const link = (document.querySelector("link[rel='canonical']") as HTMLLinkElement) || document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", canonical || window.location.href);
    if (!link.parentElement) document.head.appendChild(link);

    // JSON-LD
    const existing = document.getElementById("jsonld-primary");
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "jsonld-primary";
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, image, canonical, JSON.stringify(jsonLd)]);
  return null;
}
