import type { Metadata } from "next";
import { site, booking, serviceCategories, serviceUrl } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { BookingForm } from "@/components/BookingForm";
import { Arrow } from "@/components/Button";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your loc appointment online with MooluxBeuti — pick a service and a live time, or call, text, or DM us. Serving the Greater Toronto Area.",
};

export default function BookPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Book"
        title="Let’s find your next"
        accent="session."
        lead={booking.sub}
      />

      {/* PRIMARY: instant booking — every service links DIRECTLY to its own
          slot on the live scheduler. No iframe, no slow load, no full-menu
          detour. Tapping a service opens that exact appointmentType on Acuity
          in a new tab. */}
      <section className="bg-ink py-14 md:py-20">
        <Container>
          <Reveal>
            <div className="mb-10">
                <span className="eyebrow text-teal">Book online</span>
                <h2 className="display-lg mt-3 text-3xl text-bone sm:text-4xl">
                  Pick your service — book in one tap.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-silver">
                  Each service opens straight to its own live calendar, where
                  you choose the time and confirm instantly. No waiting for a
                  reply.
                </p>
              </div>
          </Reveal>

          {/* Mirrored menu — direct per-service deep links */}
          <div className="flex flex-col gap-12">
            {serviceCategories.map((cat) => (
              <div key={cat.key || "other"}>
                <div className="flex items-center gap-4">
                  <h3 className="display-lg text-xl text-bone sm:text-2xl">
                    {cat.label}
                  </h3>
                  <span className="h-px flex-1 bg-divider" />
                </div>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.services.map((s, i) => (
                    <Reveal
                      as="li"
                      key={s.id}
                      delay={i * 30}
                      threshold={0.1}
                      className="group flex flex-col justify-between gap-3 rounded-[2px] border border-divider bg-ink p-5 transition-colors hover:border-teal/60 hover:bg-abyss/40"
                    >
                      <div>
                        <div className="flex items-baseline justify-between gap-x-3">
                          <h4 className="font-display text-base text-bone group-hover:text-teal-soft">
                            {s.name}
                          </h4>
                          {s.price && (
                            <span className="shrink-0 font-display text-sm text-teal-soft">
                              {s.price}
                            </span>
                          )}
                        </div>
                        {s.duration && (
                          <span className="mt-1 inline-block text-xs tracking-wide text-silver">
                            {s.duration}
                          </span>
                        )}
                      </div>
                      <a
                        href={serviceUrl(s.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 self-start rounded-full bg-teal/10 px-4 py-2 text-sm font-medium text-teal-soft transition-colors hover:bg-teal hover:text-ink"
                      >
                        Book {s.name}
                        <Arrow />
                      </a>
                    </Reveal>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECONDARY: enquiry + direct contact */}
      <section className="border-t border-divider bg-abyss py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
            {/* Left: enquiry form */}
            <div>
              <Reveal>
                <h2 className="display-lg text-2xl text-bone sm:text-3xl">
                  Prefer to ask a question first?
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-silver">
                  Not sure which service you need, or want to check something
                  before booking? Send a quick message and we’ll help you choose.
                </p>
              </Reveal>
              <Reveal delay={100} className="mt-7">
                <div className="rounded-[4px] border border-divider bg-ink/60 p-6 sm:p-8">
                  <BookingForm />
                </div>
              </Reveal>
            </div>

            {/* Right: direct contact */}
            <div className="flex flex-col">
              <Reveal>
                <h3 className="eyebrow text-silver">Or contact us directly</h3>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={site.phone.href}
                    className="group flex items-center gap-3 text-bone transition-colors hover:text-teal-soft"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-divider transition-colors group-hover:border-teal">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <span>Call or text {site.phone.display}</span>
                  </a>
                  <a
                    href={site.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-bone transition-colors hover:text-teal-soft"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-divider transition-colors group-hover:border-teal">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <path d="M17.5 6.5h.01" />
                      </svg>
                    </span>
                    <span>DM {site.instagram.handle} on Instagram</span>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={180} className="mt-8">
                <a
                  href="/services"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-teal-soft transition-colors hover:text-bone"
                >
                  Browse services first
                  <Arrow />
                </a>
              </Reveal>

              <Reveal delay={220} className="mt-auto pt-10">
                <div className="rounded-[2px] border border-divider bg-abyss/40 p-5">
                  <span className="eyebrow text-silver">Service area</span>
                  <p className="mt-2 text-sm leading-relaxed text-bone">
                    {site.area}. Your exact appointment location and details are
                    confirmed when we arrange your session.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Honest note */}
          <Reveal delay={100} className="mt-12">
            <p className="flex items-start gap-2 text-xs leading-relaxed text-silver/80">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              Online booking is handled securely through our scheduling provider and
              confirms your time instantly. The enquiry form above simply prepares a
              message — {site.name} replies to confirm anything sent that way.
            </p>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
