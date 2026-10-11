# MooluxBeuti — Premium Loctician Website

A bespoke, black-and-teal digital flagship for **MooluxBeuti**, a specialist
loctician and loc-care brand serving the Greater Toronto Area. Built to convert
visitors into qualified appointment bookings and establish the brand as a
trusted, premium loc-care specialist.

Stack: **Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4**.

---

## Getting started

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build (type-checks + prerenders)
npm run start      # serve the production build
npm run lint       # run ESLint
```

---

## Environment variables

The app runs with **zero** required secrets. One optional variable controls the
public canonical URL (used by the sitemap, robots.txt and JSON-LD). Create a
`.env.local` for local overrides:

```env
# Public canonical domain — no trailing slash. Falls back to
# https://mooluxbeuti.com if unset.
NEXT_PUBLIC_SITE_URL=https://mooluxbeuti.com
```

> **Secrets:** there are no API keys, backend credentials or database
> connections. Never commit a `.env.local` file. The contact/enquiry flow
> routes through the visitor's own device (WhatsApp / SMS / email) so no
> server-side keys are needed.

---

## Editing content (no code required)

All brand, contact, service, FAQ, portfolio and booking copy lives in **one
file**: [`lib/site.ts`](lib/site.ts). Edit it to update:

- Business name, tagline, phone, Instagram, service area
- The six services (name, description, what's included, who it's for, image)
- FAQ entries and portfolio items

Components read from this file, so content is never duplicated across pages.

---

## Booking flow — live platform (verified)

MooluxBeuti books through **Acuity Scheduling**
(`https://mooluxbeuti.as.me/schedule/6cfaff1c`). The service menu shown on this
site is **mirrored exactly** from her live scheduler (28 services across 9
categories, with the real prices, durations and descriptions). Every service —
on the homepage, the `/services` page, and `/book` — links **directly** to that
one service on Acuity (`?appointmentType=<id>`), so a visitor who taps a service
lands on that exact booking flow, instantly, and never sees a different or
partial menu. Reservations happen on her real system — nothing is simulated.

The `BookingForm` (`components/BookingForm.tsx`) is a **secondary** enquiry
route: it validates the request, composes a clear message, then hands the
visitor off to a verified channel — WhatsApp, SMS or email — using the business's
confirmed phone number. The UI is explicit that an enquiry does not itself
confirm an appointment (the embedded scheduler is what confirms).

To change the scheduler, edit `site.acuity` in `lib/site.ts`.

---

## Deployment (Vercel recommended)

1. Push this folder to a Git repository.
2. Import the project in Vercel — the framework preset (Next.js) is detected
   automatically.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain in the environment
   variables.
4. Deploy. `npm run build` runs as part of the process.

No custom server or configuration is required. Media is served from
`public/media/opt` (optimized WebP images, compressed MP4/WebM video, poster
frames).

---

## Project structure

```
mbapp/
  app/                 routes (home, services, services/[slug], portfolio, about, book, faq)
    layout.tsx         root layout: fonts, metadata, JSON-LD, header/footer
    page.tsx           homepage (composes all sections)
    sitemap.ts         dynamic sitemap
  components/          reusable UI (Header, Footer, Button, Reveal, BookingForm, …)
    sections/          homepage sections (Hero, BrandSignature, ServicesJourney, …)
  lib/site.ts          ★ central content config — edit here
  public/media/opt/    optimized images, logo, video, posters
```

## Owner checklist (before going live)

1. **Confirm contact details** in `lib/site.ts` — phone `437-332-4652`, Instagram `@mooluxbeuti`, and the service area.
2. **Confirm the booking link** — `site.acuity.url` points to your live Acuity scheduler. Update it there if the link ever changes.
3. **Review services** in `lib/site.ts` (names, descriptions, and prices). Any service left with `price: null` shows as "Contact for pricing".
4. **Add real pricing** when you're ready — fill the `price` field per service.
5. **Swap in more of your own photography** in `public/media/` whenever you'd like to feature additional work.

## Booking

Appointments are booked through your real **Acuity Scheduling** calendar, embedded on the `/book` page. Visitors pick a service and an available time and confirm instantly — nothing is simulated. The homepage enquiry form is an optional shortcut that simply prepares a message for you.

---

Built with Next.js, React, TypeScript and Tailwind CSS.

