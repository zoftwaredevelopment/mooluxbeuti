import type { MetadataRoute } from "next";

export const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mooluxbeuti.com";

// Every individual service links out directly to the live Acuity scheduler,
// so there are no per-service detail pages to list here.
const staticRoutes = ["", "/services", "/portfolio", "/about", "/book", "/faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
