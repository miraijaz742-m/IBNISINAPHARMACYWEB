/** Site content — Ibni Sina Pharmacy, Beerwah, Budgam */

export const site = {
  name: "Ibni Sina Pharmacy",
  /** Urdu — displayed beside English in the header */
  nameUrdu: "ابنِ سینا فارمیسی",
  tagline: "Trusted Care, Genuine Medicines",
  locationLabel: "Jammu and Kashmir, India — 193411",
  /** Local landmark (English) */
  landmarkName: "Jamia Masjid Hanafi Kandoora",
  /** Local landmark — Kashmiri / Arabic script */
  landmarkNameUrdu: "جامع مسجد حنفی کۄنٚڈُر",
  address: "Jamia Road, near Jamia Masjid Hanafi, Kandoora, Beerwah, Budgam",
  /** Exact pin for Google Maps (Open in Maps + embed iframe) */
  mapLocationQuery: "2H7W+24M, Jamia Road, Kandoora, Beerwah, Jammu and Kashmir 193411",
  /** P1 — primary call + all WhatsApp links (wa.me) */
  phoneDisplay: "+91 70060 88450",
  phoneE164: "+917006088450",
  /** P2 — alternate line; shown on site only (same tel: for tap-to-call) */
  phoneSecondaryDisplay: "+91 99065 62054",
  phoneSecondaryE164: "+919906562054",
  email: "ibnisinapharmacy@gmail.com",
  hours: "9:00 AM – 10:30 PM (All Days)",
  whatsappMessage:
    "Hi, I’d like to check medicine availability at Ibni Sina Pharmacy before I visit.",
  /** Optional — set when you have public profile URLs */
  social: {
    instagram: "",
    facebook: "",
  },
} as const;

export const aboutText = `Ibni Sina Pharmacy is a trusted neighbourhood medical store on Jamia Road, near Jamia Masjid Hanafi, Kandoora, Beerwah, Budgam. We focus on walk-in care: genuine medicines, pharmacist guidance, and a calm, organised counter experience—no online cart, just real service at the shelf.`;

export const services = [
  "Medicines available",
  "Prescription support",
  "Health guidance",
  "Daily wellness products",
  "Basic medical needs",
] as const;

export const showcaseCategories = [
  {
    id: "cat-vitamins",
    title: "Vitamins & supplements",
    blurb: "Daily nutrition & immunity support",
  },
  {
    id: "cat-personal",
    title: "Personal care",
    blurb: "Skin, hair & hygiene essentials",
  },
  {
    id: "cat-baby",
    title: "Baby care",
    blurb: "Gentle formulas & mother-baby needs",
  },
  {
    id: "cat-otc",
    title: "OTC medicines",
    blurb: "Trusted over-the-counter relief",
  },
  {
    id: "cat-essentials",
    title: "Health essentials",
    blurb: "First aid & everyday medical items",
  },
] as const;

export const inStoreHighlights = [
  "Clean, organised shelves",
  "Quick billing at the counter",
  "Easy product finding with staff help",
  "Friendly, trained team",
] as const;

export const categories = [
  "Tablets & Capsules",
  "Syrups & Tonics",
  "Personal Care",
  "Baby Care",
  "Health Supplements",
  "Medical Equipment",
] as const;

/** HealKart-style carousel cards (pastel + illustrations) */
export const carouselCategories = [
  {
    slug: "vitamins",
    title: "Vitamins & Nutrition",
    tint: "beige" as const,
    blurb: "Supplements & daily wellness",
  },
  {
    slug: "devices",
    title: "Healthcare Device",
    tint: "mint" as const,
    blurb: "Monitors & essentials",
  },
  {
    slug: "ayurveda",
    title: "Ayurveda Products",
    tint: "rose" as const,
    blurb: "Traditional remedies",
  },
  {
    slug: "personal",
    title: "Personal Care",
    tint: "cream" as const,
    blurb: "Skin, hair & hygiene",
  },
  {
    slug: "conditions",
    title: "Health Conditions",
    tint: "lavender" as const,
    blurb: "Condition-focused care",
  },
] as const;

/** Single nav item (anchors on the home page). */
export type PageNavLink = { readonly href: string; readonly label: string };

/** SaaS-style groups for the header dropdowns; footer still uses the flat `pageNavLinks` list. */
export const pageNavGroups = [
  {
    id: "about-services",
    label: "About & services",
    items: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#categories", label: "Categories" },
    ],
  },
  {
    id: "trust",
    label: "Trust & reviews",
    items: [
      { href: "#trust", label: "Why us" },
      { href: "#reviews", label: "Reviews" },
    ],
  },
  {
    id: "visit",
    label: "Visit",
    items: [
      { href: "#in-store", label: "In store" },
      { href: "#gallery", label: "Gallery" },
    ],
  },
  {
    id: "help",
    label: "Help & contact",
    items: [
      { href: "#availability", label: "Availability" },
      { href: "#contact", label: "Contact" },
    ],
  },
] as const satisfies readonly {
  readonly id: string;
  readonly label: string;
  readonly items: readonly PageNavLink[];
}[];

/** Flat list for footer / anywhere a simple list is needed (same order as groups). */
export const pageNavLinks: readonly PageNavLink[] = pageNavGroups.flatMap((g) => [...g.items]);

/** In-page medicine list + “Send message” (WhatsApp) — all “Check availability” CTAs point here */
export const availabilityHref = "#availability" as const;

/**
 * Hero slideshow — save photos in `public/` with these exact names:
 *
 *   hero-1.jpg   (first slide + navbar logo)
 *   hero-2.jpg
 *   hero-3.jpg
 *   hero-4.jpg
 *   hero-5.jpg   …add as many as you like
 *
 * Only list files that exist in `heroCarouselFilenames` below (order = slide order).
 * Bump `heroImageVersion` when you replace any file so browsers reload it.
 */
export const heroImageVersion = "9";

/** Filenames under `public/` — order = slideshow order (first = navbar logo). */
export const heroCarouselFilenames = [
  "hero-1.jpg",
  "hero-2.jpg",
  "hero-3.jpg",
  "hero-4.jpg",
  "hero-5.jpg",
] as const;

/** First hero slide — used by the navbar circular logo */
export function getHeroImageSrc(): string {
  return `/${heroCarouselFilenames[0]}?v=${heroImageVersion}`;
}

export const heroCopy = {
  headline: "Your trusted local pharmacy",
  sub: "Quality medicines, expert guidance, and daily wellness essentials—in store, with clear advice at the counter.",
  ctaVisit: "Visit store",
  ctaCall: "Call now",
  ctaAvailability: "Check availability",
} as const;

export const featuredProducts = [
  { name: "Paracetamol Tablets", price: "₹45", unit: "strip of 10" },
  { name: "Vitamin D3 Capsules", price: "₹320", unit: "pack of 15" },
  { name: "Cough Syrup", price: "₹185", unit: "100 ml" },
  { name: "Digital Thermometer", price: "₹299", unit: "1 unit" },
  { name: "Blood Pressure Monitor", price: "₹1,899", unit: "1 unit" },
] as const;

export const trustItems = [
  "Genuine medicines",
  "Affordable pricing",
  "Trusted by the community",
  "Fast in-store service",
] as const;

export type SiteReview = {
  readonly quote: string;
  readonly author: string;
  /** Optional — local file under `public/`, e.g. `/reviews/aamir.jpg` (with permission). Omit = initials avatar. */
  readonly avatarSrc?: string;
};

export const reviews: readonly SiteReview[] = [
  {
    quote: "Very professional and helpful at the counter.",
    author: "Aamir Rashid",
  },
  {
    quote: "Reliable medicines and a calm, clean store.",
    author: "Sana Bhat",
  },
  {
    quote: "Quick billing and they take time to explain doses.",
    author: "Bilal Dar",
  },
];

/** Unsplash — pharmacy / clinical interiors (remotePatterns allow images.unsplash.com) */
export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1584308666741-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
    alt: "Organised pharmacy shelves with products",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    alt: "Clean healthcare environment",
  },
  {
    src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
    alt: "Pharmacist workspace and supplies",
  },
] as const;

/** WhatsApp always uses P1 (`phoneE164`). */
export function getWhatsAppUrl(): string {
  const n = site.phoneE164.replace(/\D/g, "");
  const text = encodeURIComponent(site.whatsappMessage);
  return `https://wa.me/${n}?text=${text}`;
}

/** WhatsApp deep link with a custom message (e.g. built medicine list). */
export function getWhatsAppUrlWithText(body: string): string {
  const n = site.phoneE164.replace(/\D/g, "");
  const text = encodeURIComponent(body.trim());
  return `https://wa.me/${n}?text=${text}`;
}

export function getGoogleMapsUrl(): string {
  const q = encodeURIComponent(site.mapLocationQuery);
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

/** Google Maps embed (no API key) — Plus Code pin */
export function getGoogleMapsEmbedSrc(): string {
  const q = encodeURIComponent(site.mapLocationQuery);
  return `https://maps.google.com/maps?q=${q}&hl=en&z=16&output=embed`;
}
