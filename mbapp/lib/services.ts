// ============================================================
// SERVICES MENU - mirrored EXACTLY from the live Acuity scheduler
// (https://mooluxbeuti.as.me/schedule/6cfaff1c).
//
// GENERATED from the verified scheduler data. Every service links
// DIRECTLY to its own day/time calendar on Acuity - the exact URL
// the scheduler itself uses - so a visitor who taps a service lands
// on that service's own booking screen, never the full menu.
// Do not invent or reorder items.
// ============================================================

export const ACUITY_URL =
  "https://mooluxbeuti.as.me/schedule/6cfaff1c";

/**
 * Build a direct deep link to a specific service's own day/time
 * calendar on the live scheduler - same destination as booking it
 * directly on the scheduling site. Calendar 10747005 verified live
 * across loc AND non-loc services (Micro Locs, Starter Locs,
 * Retwist & Style, Volume lashes).
 */
export function serviceUrl(appointmentType: string): string {
  return `${ACUITY_URL}/appointment/${appointmentType}/calendar/10747005?appointmentType=${appointmentType}`;
}

export type Service = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: string | null;
  durationMin: number | null;
  duration: string | null;
  description: string;
  featured: boolean;
};

export const services: Service[] = [
  {
    id: "95704557",
    name: "Micro Locs",
    slug: "micro-locs",
    category: "",
    price: "$1000",
    durationMin: 600,
    duration: "10 hr",
    description: "Microlocs (Two-Strand Twist): Starting at $1,000 CAD Microlocs (Interlocking): Starting at $1,500 CAD",
    featured: false,
  },
  {
    id: "68491945",
    name: "Locs Colouring Service",
    slug: "locs-colouring-service",
    category: "Colour",
    price: "$190",
    durationMin: 120,
    duration: "2 hr",
    description: "Our expert locs coloring services starts at $190 with prices increase based on hair length, density, and color technique:\n\nShort Locs: $150\nMedium Locs: $160–$180\nLong Locs: $180–$220+\nColor Services: Full color, Highlights, Balayage: $200+, Creative Colors & Color Corrections: $250+\nAdd-ons such as deep conditioning, Olaplex treatments, and toning are available for an additional $20–$50.",
    featured: false,
  },
  {
    id: "68553890",
    name: "Locs Bleaching Service",
    slug: "locs-bleaching-service",
    category: "Colour",
    price: "$150",
    durationMin: 120,
    duration: "2 hr",
    description: "Our locs bleaching services start at $150, with pricing increase based on hair length, density, and the desired result:\n\nShort Locs: $125\nMedium Locs: $140–$160\nLong Locs: $160–$200+\nBleaching Services: Full bleach, Highlights, or Balayage: $200+\nAdd-Ons: Olaplex, toner, and deep conditioning treatments: $20–$50",
    featured: false,
  },
  {
    id: "68420516",
    name: "Marley Locs Extensions",
    slug: "marley-locs-extensions",
    category: "Faux Locs",
    price: "$200",
    durationMin: 180,
    duration: "3 hr",
    description: "Pricing varies based on the size, length, and complexity of the service. Each style is tailored to meet individual needs, ensuring personalized and high-quality results. Additional charges may apply for more intricate requests.",
    featured: false,
  },
  {
    id: "68464746",
    name: "Goddess Locs",
    slug: "goddess-locs",
    category: "Faux Locs",
    price: "$225",
    durationMin: 210,
    duration: "3 hr 30 min",
    description: "Pricing varies based on the size, length, and complexity of the service. Each style is tailored to meet individual needs, ensuring personalized and high-quality results. Additional charges may apply for more intricate requests.",
    featured: false,
  },
  {
    id: "68465093",
    name: "Boho Locs",
    slug: "boho-locs",
    category: "Faux Locs",
    price: "$300",
    durationMin: 240,
    duration: "4 hr",
    description: "Pricing varies based on the size, length, and complexity of the service. Each style is tailored to meet individual needs, ensuring personalized and high-quality results. Additional charges may apply for more intricate requests.",
    featured: false,
  },
  {
    id: "68553943",
    name: "Lace Frontal Installation",
    slug: "lace-frontal-installation",
    category: "Hair",
    price: "$150",
    durationMin: 120,
    duration: "2 hr",
    description: "",
    featured: false,
  },
  {
    id: "68554297",
    name: "Traditional Sew Ins",
    slug: "traditional-sew-ins",
    category: "Hair",
    price: "$175",
    durationMin: 120,
    duration: "2 hr",
    description: "",
    featured: false,
  },
  {
    id: "68557049",
    name: "Volume",
    slug: "volume",
    category: "Lashes Extensions",
    price: "$140",
    durationMin: 120,
    duration: "2 hr",
    description: "",
    featured: false,
  },
  {
    id: "68557286",
    name: "Mega Volume",
    slug: "mega-volume",
    category: "Lashes Extensions",
    price: "$170",
    durationMin: 140,
    duration: "2 hr 20 min",
    description: "",
    featured: false,
  },
  {
    id: "68557713",
    name: "Volume Refill",
    slug: "volume-refill",
    category: "Lashes Extensions",
    price: "$70",
    durationMin: 130,
    duration: "2 hr 10 min",
    description: "",
    featured: false,
  },
  {
    id: "76208683",
    name: "Clusters",
    slug: "clusters",
    category: "Lashes Extensions",
    price: "$50",
    durationMin: 60,
    duration: "1 hr",
    description: "",
    featured: false,
  },
  {
    id: "68420293",
    name: "Locs Care & Groom",
    slug: "locs-care-and-groom",
    category: "Locs",
    price: "$200",
    durationMin: 90,
    duration: "1 hr 30 min",
    description: "Locs Wash, Retwist, and Styling services are available, with prices ranging from $200 to $500. The final price depends on factors such as length, number of locs, and any additional services requested.",
    featured: false,
  },
  {
    id: "68422936",
    name: "Locs Care Repaired & Groom",
    slug: "locs-care-repaired-and-groom",
    category: "Locs",
    price: "$200",
    durationMin: 180,
    duration: "3 hr",
    description: "Locs Wash, Interlock, Locs Maintenance, and Styling services are offered, with prices ranging from $200 to $500 Pricing varies based on the length and number of locs.",
    featured: false,
  },
  {
    id: "68423352",
    name: "Starter Locs",
    slug: "starter-locs",
    category: "Locs",
    price: "$300",
    durationMin: 90,
    duration: "1 hr 30 min",
    description: "Pricing varies based on the size, length, and complexity of the service. Each style is tailored to meet individual needs, ensuring personalized and high-quality results. Additional charges may apply for more intricate requests.",
    featured: true,
  },
  {
    id: "68435802",
    name: "Instant Locs",
    slug: "instant-locs",
    category: "Locs",
    price: "$500",
    durationMin: 360,
    duration: "6 hr",
    description: "Wash, Dry & Natural Hair Instantly Loc",
    featured: false,
  },
  {
    id: "68436540",
    name: "Locs Detox",
    slug: "locs-detox",
    category: "Locs",
    price: "$120",
    durationMin: 120,
    duration: "2 hr",
    description: "Locs Detox & Locs Treatment or Included.",
    featured: true,
  },
  {
    id: "68483717",
    name: "Retwist & Style",
    slug: "retwist-and-style",
    category: "Locs",
    price: "$175",
    durationMin: 80,
    duration: "1 hr 20 min",
    description: "Prices for services range from $150 to $300 depending on factors such as the length and number of locs, as well as any additional services requested",
    featured: true,
  },
  {
    id: "68483824",
    name: "Inter Locs",
    slug: "inter-locs",
    category: "Locs",
    price: "$200",
    durationMin: 130,
    duration: "2 hr 10 min",
    description: "Prices for services range from $200 to $500 depending on factors such as the length and number of locs, as well as any additional services requested",
    featured: true,
  },
  {
    id: "68448298",
    name: "Hot Oil Treatment",
    slug: "hot-oil-treatment",
    category: "Treatments",
    price: "$85",
    durationMin: 105,
    duration: "1 hr 45 min",
    description: "A hot oil treatment is the answer to reviving frizzy curls and dry, damaged hair. If you have dry strands, naturally coarse hair or heat damage from blow drying or other styling tools, a hot oil hair treatment will bring life back to your locs",
    featured: false,
  },
  {
    id: "68456720",
    name: "Deep Conditioner",
    slug: "deep-conditioner",
    category: "Treatments",
    price: "$85",
    durationMin: 105,
    duration: "1 hr 45 min",
    description: "Deep conditioning can help breathe a new life into your dull hair.\nDeep conditioners are essential for preventing and combating hair breakage. The essential ingredients offered by deep conditioners are intended to mend, nourish and strengthen your hair.",
    featured: false,
  },
  {
    id: "68458860",
    name: "Scalp Treatment",
    slug: "scalp-treatment",
    category: "Treatments",
    price: "$85",
    durationMin: 105,
    duration: "1 hr 45 min",
    description: "A scalp treatment is an essential step in achieving and maintaining healthy hair. Regular scalp treatments can provide a wide range of benefits such as nourishing the hair roots, promoting blood flow to the scalp, and keeping the scalp clean and free of dirt and oils. These treatments can help to unclog hair follicles, which can be blocked by oils and other impurities, preventing hair growth. Additionally, scalp treatments can also help to remove dead skin cells, dandruff, and other impurities.",
    featured: false,
  },
  {
    id: "68459700",
    name: "Protein Treatment",
    slug: "protein-treatment",
    category: "Treatments",
    price: "$95",
    durationMin: 105,
    duration: "1 hr 45 min",
    description: "Protein treatments are specifically formulated to repair and strengthen damaged hair, which often results from heat styling, chemical treatments, or exposure to environmental stressors. These treatments typically contain proteins sourced from materials like keratin, collagen, or silk. They work by replenishing the lost protein, nourishing and fortifying the hair, ultimately enhancing its overall health and appearance.",
    featured: false,
  },
  {
    id: "68465314",
    name: "Rope Twist",
    slug: "rope-twist",
    category: "Twist",
    price: "$175",
    durationMin: 150,
    duration: "2 hr 30 min",
    description: "Pricing varies based on the size, length, and complexity of the service. Each style is tailored to meet individual needs, ensuring personalized and high-quality results. Additional charges may apply for more intricate requests.",
    featured: false,
  },
  {
    id: "68489449",
    name: "Island Twist",
    slug: "island-twist",
    category: "Twist",
    price: "$200",
    durationMin: 180,
    duration: "3 hr",
    description: "Pricing varies based on the size, length, and complexity of the service. Each style is tailored to meet individual needs, ensuring personalized and high-quality results. Additional charges may apply for more intricate requests.",
    featured: false,
  },
  {
    id: "68489981",
    name: "Natural Hair Twist",
    slug: "natural-hair-twist",
    category: "Twist",
    price: "$85",
    durationMin: 60,
    duration: "1 hr",
    description: "Pricing varies based on the size, length, and complexity of the service. Each style is tailored to meet individual needs, ensuring personalized and high-quality results. Additional charges may apply for more intricate requests.",
    featured: false,
  },
  {
    id: "68558000",
    name: "Full Body Contouring",
    slug: "full-body-contouring",
    category: "Wood Therapy",
    price: "$150",
    durationMin: 90,
    duration: "1 hr 30 min",
    description: "A full-body wood therapy session focuses on body sculpting, contouring, and lymphatic drainage, providing an effective solution for reducing cellulite and shaping the body. During the session, specialized wooden tools are used to target areas like the abdomen, back, thighs, and buttocks. The massage techniques stimulate circulation, break down fat deposits, and promote the drainage of toxins, leading to smoother, firmer skin. By enhancing lymphatic flow, helping to reduce bloating and fluid retention",
    featured: false,
  },
  {
    id: "74898320",
    name: "Non Surgical Butt Lift",
    slug: "non-surgical-butt-lift",
    category: "Wood Therapy",
    price: "$110",
    durationMin: 45,
    duration: "45 min",
    description: "Our wood therapy non surgical butt lifting session focuses specifically on shaping and lifting the buttocks. The treatment involves using various wooden tools that apply pressure and massage to the area, helping to break down fat deposits and stimulate circulation. This technique encourages lymphatic drainage, which can reduce bloating and fluid retention, giving the buttocks a firmer and more lifted appearance. Wood therapy can improve skin elasticity, making the buttocks look more sculpted & lifted",
    featured: false,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export type ServiceCategory = { key: string; label: string; services: Service[]; };

/** Services grouped by category, in the same order as the scheduler. */
export const serviceCategories: ServiceCategory[] = [
  {
    key: "",
    label: "Other Services",
    services: [
      services.find((x) => x.slug === "micro-locs")!,
    ],
  },
  {
    key: "Colour",
    label: "Colour",
    services: [
      services.find((x) => x.slug === "locs-colouring-service")!,
      services.find((x) => x.slug === "locs-bleaching-service")!,
    ],
  },
  {
    key: "Faux Locs",
    label: "Faux Locs",
    services: [
      services.find((x) => x.slug === "marley-locs-extensions")!,
      services.find((x) => x.slug === "goddess-locs")!,
      services.find((x) => x.slug === "boho-locs")!,
    ],
  },
  {
    key: "Hair",
    label: "Hair",
    services: [
      services.find((x) => x.slug === "lace-frontal-installation")!,
      services.find((x) => x.slug === "traditional-sew-ins")!,
    ],
  },
  {
    key: "Lashes Extensions",
    label: "Lashes Extensions",
    services: [
      services.find((x) => x.slug === "volume")!,
      services.find((x) => x.slug === "mega-volume")!,
      services.find((x) => x.slug === "volume-refill")!,
      services.find((x) => x.slug === "clusters")!,
    ],
  },
  {
    key: "Locs",
    label: "Locs",
    services: [
      services.find((x) => x.slug === "locs-care-and-groom")!,
      services.find((x) => x.slug === "locs-care-repaired-and-groom")!,
      services.find((x) => x.slug === "starter-locs")!,
      services.find((x) => x.slug === "instant-locs")!,
      services.find((x) => x.slug === "locs-detox")!,
      services.find((x) => x.slug === "retwist-and-style")!,
      services.find((x) => x.slug === "inter-locs")!,
    ],
  },
  {
    key: "Treatments",
    label: "Treatments",
    services: [
      services.find((x) => x.slug === "hot-oil-treatment")!,
      services.find((x) => x.slug === "deep-conditioner")!,
      services.find((x) => x.slug === "scalp-treatment")!,
      services.find((x) => x.slug === "protein-treatment")!,
    ],
  },
  {
    key: "Twist",
    label: "Twist",
    services: [
      services.find((x) => x.slug === "rope-twist")!,
      services.find((x) => x.slug === "island-twist")!,
      services.find((x) => x.slug === "natural-hair-twist")!,
    ],
  },
  {
    key: "Wood Therapy",
    label: "Wood Therapy",
    services: [
      services.find((x) => x.slug === "full-body-contouring")!,
      services.find((x) => x.slug === "non-surgical-butt-lift")!,
    ],
  },
];

export const featuredServices: Service[] = services.filter((s) => s.featured);
