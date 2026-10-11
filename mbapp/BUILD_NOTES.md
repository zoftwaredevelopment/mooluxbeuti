# MooluxBeuti — Build Notes

## Stack
Next.js 16 (App Router, Turbopack) + React 19 + TypeScript + Tailwind v4 (`@import "tailwindcss"` + `@theme`). App dir at `mbapp/app`. Alias `@/*` -> mbapp root. Deps installed. Node 24, npm 11.

## Media (public/media)
- `brand/…2626_n.jpg` -> PROMO POSTER (services, phone, 10+yrs, @mooluxbeuti)
- `brand/…055005_n.jpg` -> STYLIST PORTRAIT (real person)
- 7 stills + 2 videos, all optimized to `public/media/opt/` (webp stills, cropped logo in 3 variants incl. transparent, mp4+webm videos with webp poster frames). ffmpeg via the bundled `imageio_ffmpeg` static binary.
- Original supplied assets remain untouched in the workspace root.

## Content (VERIFIED — do NOT invent prices/hours/address/testimonials)
- Brand: MooluxBeuti · Loc Care & Styling
- Instagram: @mooluxbeuti -> https://www.instagram.com/mooluxbeuti/
- Phone: 437-332-4652 -> tel:+14373324652
- Area: GTA, Canada (no street address; no walk-ins claim)
- Experience: 10+ years; trained in loc & scalp care (phrased non-medically)
- Services (28, across 9 categories): mirrored EXACTLY from the live Acuity
  scheduler — real names, prices, durations, descriptions and appointmentType
  IDs. Lives in `lib/services.ts` (generated from the verified scheduler data),
  re-exported from `lib/site.ts`. No prices are invented; every service shows
  its real price/duration. 4 signature loc services are `featured` on the
  homepage.

## BOOKING — REAL PLATFORM, DIRECT DEEP LINKS (verified)
- MooluxBeuti uses **Acuity Scheduling**: `https://mooluxbeuti.as.me/schedule/6cfaff1c`
- Every service links DIRECTLY to its own slot on that calendar via
  `serviceUrl(id)` -> `...?appointmentType=<id>` (opens in a new tab). Tapping a
  service here lands on that EXACT service — never the full menu, never a
  different menu. Verified: each deep link returns HTTP 200 and resolves to the
  correct service.
- No iframe. The earlier slow-loading scheduler embed was removed in favour of
  instant direct links.
- The `BookingForm` is a SECONDARY enquiry route (WhatsApp / SMS / email
  prefilled). It never fakes a confirmed booking.
- To change the scheduler URL or regenerate the menu, edit
  `ACUITY_URL` / `services` in `lib/services.ts`.

## Art direction
Black & teal. Obsidian #080A0C, abyss #07161B, teal #00A6C8, teal-deep #08788C, bone #F4F4F1, silver #A6B0B4, divider #26363B. Editorial grid, asymmetric, big type, hairline dividers, restrained motion, reduced-motion respected. Fonts: Fraunces (display) + Inter (sans) via next/font.

## Pages
Home (sections A–J), `/services` (mirrored 28-service menu, direct deep links), `/portfolio`, `/about`, `/book` (direct per-service deep links), `/faq`. There are no per-service detail pages — every service links straight out to the live scheduler.

## Status
- [x] scaffold, media optimized, logo cropped
- [x] `lib/site.ts` central content (6 services, contact, booking, faq, portfolio, Acuity)
- [x] design system in `globals.css` (tokens, fonts, motion, reduced-motion)
- [x] components: Header, Footer, Logo, Reveal, Button, BookingForm, Lightbox, FaqAccordion, VideoPlayer, Section, PageHero, MobileBookingBar, CopyrightYear
- [x] homepage sections A–J
- [x] sub-pages + JSON-LD structured data + robots.txt + sitemap.ts
- [x] build + typecheck PASS; all routes 200; media 200; no console errors; reduced-motion honored

