import type { Metadata } from "next";
import { Fraunces, Inter, Parisienne } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBookingBar } from "@/components/MobileBookingBar";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const script = Parisienne({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mooluxbeuti.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.tagline} | ${site.areaShort}`,
    template: `%s | ${site.name}`,
  },
  description:
    "MooluxBeuti is a premium loctician in the Greater Toronto Area specialising in starter locs, retwist & styling, interlocking, faux locs, and scalp care. 10+ years of experience. Book your session.",
  keywords: [
    "loctician Toronto",
    "loc retwist GTA",
    "starter locs Toronto",
    "interlocking Toronto",
    "faux locs GTA",
    "scalp care locs",
    "MooluxBeuti",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "Premium loc care & styling in the GTA. Starter locs, retwists, interlocking, faux locs and scalp care — handled with skill, intention and care.",
    images: [
      {
        url: "/media/opt/brand/SaveClip.App_831423644_18209402461367564_6365953337303205005_n-640.webp",
        width: 640,
        height: 640,
        alt: `${site.name} loctician`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description:
      "Premium loc care & styling in the GTA. Book your next loc session.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

/** LocalBusiness structured data — only verified facts. No street address. */
function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: site.name,
    description:
      "Specialist loctician offering starter locs, retwist & styling, interlocking, faux locs & protective styles, and scalp care.",
    telephone: site.phone.display,
    areaServed: { "@type": "AdministrativeArea", name: site.area },
    sameAs: [site.instagram.url],
    priceRange: "$$",
    makesOffer: [
      "Starter Locs",
      "Retwist & Styling",
      "Interlocking",
      "Faux Locs & Protective Styles",
      "Scalp Care & Detox",
      "Treatments & Additional Services",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${fraunces.variable} ${inter.variable} ${script.variable} h-full`}
      // The inline reveal script below adds `.js` to <html> before paint.
      // React doesn't render that class, so suppress the expected mismatch.
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-ink text-bone antialiased">
        {/* Fail-safe reveal: runs before paint, independent of React hydration.
            Adds .js to <html> (arming the CSS reveal) and drives reveals with
            its own IntersectionObserver + MutationObserver. If it ever fails,
            .js is removed and CSS keeps ALL content visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var root=document.documentElement;root.classList.add('js');var sel='.reveal, .reveal-mask';if(!('IntersectionObserver' in window)){var a=document.querySelectorAll(sel);for(var i=0;i<a.length;i++)a[i].classList.add('is-visible');return;}var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}});},{threshold:0.15,rootMargin:'0px 0px -8% 0px'});function obs(scope){var ns=(scope||document).querySelectorAll(sel);for(var k=0;k<ns.length;k++){if(!ns[k].classList.contains('is-visible'))io.observe(ns[k]);}}obs(document);var mo=new MutationObserver(function(ms){ms.forEach(function(m){for(var j=0;j<m.addedNodes.length;j++){var n=m.addedNodes[j];if(n.nodeType!==1)continue;if(n.matches&&n.matches(sel)&&!n.classList.contains('is-visible'))io.observe(n);if(n.querySelectorAll)obs(n);}});});if(document.body)mo.observe(document.body,{childList:true,subtree:true});}catch(e){document.documentElement.classList.remove('js');}})();`,
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-teal focus:px-5 focus:py-2 focus:text-ink focus:font-medium"
        >
          Skip to content
        </a>
        <Header />
        <StructuredData />
        {children}
        <Footer />
        <MobileBookingBar />
      </body>
    </html>
  );
}

