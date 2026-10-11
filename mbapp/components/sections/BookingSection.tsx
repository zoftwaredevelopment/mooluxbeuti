import { ButtonLink, Arrow } from "@/components/Button";
import { BookingForm } from "@/components/BookingForm";
import { Reveal } from "@/components/Reveal";
import { booking, site } from "@/lib/site";

/**
 * SECTION G — THE BOOKING EXPERIENCE
 * Distinctive, prominent section. The form is an honest enquiry flow routed
 * through verified channels — never a fake confirmed booking.
 */
export function BookingSection() {
  return (
    <section
      id="book"
      className="relative scroll-mt-20 overflow-hidden bg-ink py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_80%_at_50%_0%,rgba(8,120,140,0.12),transparent_60%)]"
      />
      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-[var(--spacing-gutter)] md:grid-cols-[1fr_1fr] md:gap-16">
        {/* Left: heading + direct channels */}
        <div className="flex flex-col">
          <Reveal>
            <span className="eyebrow flex items-center gap-3 text-teal">
              <span className="inline-block h-px w-8 bg-teal/60" />
              Book your session
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="display-lg mt-5 text-4xl text-bone sm:text-5xl">
              {booking.heading}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-md text-base leading-relaxed text-silver sm:text-lg">
              {booking.sub}
            </p>
          </Reveal>

          {/* Direct verified channels */}
          <Reveal delay={230}>
            <div className="mt-10 flex flex-col gap-3">
              <span className="eyebrow text-silver">Or reach us directly</span>
              <a
                href={site.phone.href}
                className="group inline-flex items-center gap-3 text-bone transition-colors hover:text-teal-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-divider transition-colors group-hover:border-teal">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="text-lg">Call or text {site.phone.display}</span>
              </a>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-bone transition-colors hover:text-teal-soft"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-divider transition-colors group-hover:border-teal">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                </span>
                <span className="text-lg">DM us on Instagram {site.instagram.handle}</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={300} className="mt-auto hidden pt-10 md:block">
            <ButtonLink href="/services" variant="ghost">
              Not sure which service? Explore services
              <Arrow />
            </ButtonLink>
          </Reveal>
        </div>

        {/* Right: the form card */}
        <Reveal delay={120}>
          <div className="rounded-[4px] border border-divider bg-abyss/60 p-6 sm:p-8">
            <BookingForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
