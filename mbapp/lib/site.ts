/**
 * MooluxBeuti — CENTRAL CONTENT CONFIG
 * Single source of truth for brand, contact, services, portfolio,
 * FAQ and booking copy. Edit here; components read from these.
 *
 * IMPORTANT: Everything here is either VERIFIED from the supplied
 * poster/brand assets or is safe editorial copy. We do NOT invent
 * prices, hours, street addresses, testimonials, or booking policies.
 */

export const site = {
  name: "MooluxBeuti",
  tagline: "Loc Care & Styling",
  descriptor: "Premium loctician & loc-care specialist",
  // Verified from the supplied promotional poster
  instagram: {
    handle: "@mooluxbeuti",
    url: "https://www.instagram.com/mooluxbeuti/",
  },
  phone: {
    display: "437-332-4652",
    // international / E.164 clickable format
    href: "tel:+14373324652",
    sms: "sms:+14373324652",
  },
  area: "Greater Toronto Area, Canada",
  areaShort: "GTA, Canada",
  experience: "10+ years",
  acceptingClients: "Accepting new clients",
  // Careful, non-medical wording. Poster states trained in loc & scalp care.
  credentialsLine:
    "Trained in loc installation, maintenance and scalp care, with more than a decade of hands-on experience.",
  // VERIFIED live online booking (Acuity Scheduling). Confirmed iframe-embeddable.
  acuity: {
    url: "https://mooluxbeuti.as.me/schedule/6cfaff1c",
    root: "https://mooluxbeuti.as.me",
  },
} as const;

/** Primary navigation — used by header, footer, mobile menu, sitemap. */
export const nav = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
] as const;

/**
 * The SERVICES MENU now lives in ./services.ts, mirrored EXACTLY from the
 * live Acuity scheduler (28 services, 9 categories, real prices/durations/IDs).
 * Every service deep-links directly to its own booking page on Acuity.
 * We re-export here so existing `@/lib/site` imports keep working.
 */
export {
  services,
  getService,
  serviceCategories,
  serviceUrl,
  featuredServices,
  ACUITY_URL,
} from "./services";
export type { Service, ServiceCategory } from "./services";

/** Portfolio — real work from supplied assets. Categories for filtering. */
export type PortfolioCategory = "Retwist" | "Styling" | "Updo" | "Walk-in";

export type PortfolioItem = {
  src: string;
  alt: string;
  category: PortfolioCategory;
  caption?: string;
};

export const portfolio: PortfolioItem[] = [
  { src: "/media/opt/stills/retwist.webp", alt: "Fresh retwist on mature locs", category: "Retwist" },
  { src: "/media/opt/stills/retwist2.webp", alt: "Detailed root maintenance", category: "Retwist" },
  { src: "/media/opt/stills/styling.webp", alt: "Loc styling with defined parts", category: "Styling" },
  { src: "/media/opt/stills/styling2.webp", alt: "Protective loc styling", category: "Styling" },
  { src: "/media/opt/stills/updo.webp", alt: "Elegant loc updo", category: "Updo" },
  { src: "/media/opt/stills/updo2.webp", alt: "Sleek loc updo finish", category: "Updo" },
  { src: "/media/opt/stills/walkin.webp", alt: "Finished loc look", category: "Walk-in" },
];

/** FAQ — only questions we can answer honestly. No invented policies. */
export const faqs: { q: string; a: string }[] = [
  {
    q: "What services do you offer?",
    a: "A full loc-care menu: Micro Locs, Starter Locs, Instant Locs, Retwist & Style, Inter Locs, Locs Care & Groom, Locs Detox, plus faux locs, loc colour, twists, hair installations, lash extensions, wood therapy, and treatments like hot oil, deep conditioning, protein and scalp care. Browse the full menu and book any service online.",
  },
  {
    q: "How do I book an appointment?",
    a: `The quickest way is to book online — choose your service and pick a time on our booking page. Prefer a more personal touch? Call or text ${site.phone.display}, or DM ${site.instagram.handle} on Instagram and we'll help you find the right time.`,
  },
  {
    q: "Where do you operate?",
    a: `We serve clients across the ${site.area}. Your exact appointment location and details will be confirmed when we arrange your session.`,
  },
  {
    q: "How do I choose the right service?",
    a: "Starting fresh? Starter Locs or Micro Locs are the place to begin. Maintaining existing locs? Retwist & Style, Inter Locs or Locs Care & Groom keep them neat. Not sure which fits? Send us a message with a photo and we'll point you in the right direction.",
  },
  {
    q: "What should I do before my appointment?",
    a: "Come with your hair detangled and free of heavy product build-up where possible. If you've had recent chemical treatments, let us know in advance so we can plan the best approach for your hair.",
  },
  {
    q: "How do I know how often to come back?",
    a: "Maintenance rhythm depends on your hair type, lifestyle, and the style you wear. We'll recommend a schedule that suits you during your appointment — there's no one-size-fits-all timeline.",
  },
];

/** Booking / enquiry copy. */
export const booking = {
  heading: "Ready for your next loc session?",
  sub: "Book a time online in moments, or send us a message — whichever you prefer.",
  primary: "Book an Appointment",
  secondary: "Ask a Question",
  fields: {
    name: "Your name",
    contact: "Preferred contact method",
    email: "Email (optional)",
    phone: "Phone (optional)",
    service: "Requested service",
    clientType: "Are you a new or returning client?",
    date: "Preferred date or availability",
    notes: "Tell us about your loc needs (optional)",
  },
} as const;

