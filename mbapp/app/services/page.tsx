import type { Metadata } from "next";
import { serviceCategories, serviceUrl, site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Arrow } from "@/components/Button";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "The full MooluxBeuti menu — micro locs, starter locs, retwist & style, inter locs, faux locs, loc colour, twists, treatments, lashes and wood therapy. Real prices and durations. Book any service online.",
};

/**
 * The services page mirrors the live Acuity scheduler EXACTLY — same
 * categories, order, names, prices and durations. Each service links
 * DIRECTLY to that specific appointmentType on Acuity (opens in a new tab),
 * so a visitor always lands on the exact service they tapped — never the
 * full menu, never a different menu.
 */
export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services & Pricing"
        title="The full menu,"
        accent="book it instantly."
        lead="Every service is bookable online. Pick what you need and you'll go straight to that exact service on our booking calendar — no browsing, no guessing."
      />

      <section className="bg-ink py-20 md:py-28">
        <Container>
          <div className="flex flex-col gap-16">
            {serviceCategories.map((cat) => (
              <div key={cat.key || "other"}>
                {/* Category heading */}
                <div className="flex items-center gap-4">
                  <h2 className="display-lg text-2xl text-bone sm:text-3xl">
                    {cat.label}
                  </h2>
                  <span className="h-px flex-1 bg-divider" />
                  <span className="text-xs text-silver">
                    {cat.services.length}{" "}
                    {cat.services.length === 1 ? "service" : "services"}
                  </span>
                </div>

                {/* Services */}
                <ul className="mt-6 grid gap-px overflow-hidden rounded-[2px] border border-divider bg-divider sm:grid-cols-2">
                  {cat.services.map((s, i) => (
                    <Reveal
                      as="li"
                      key={s.id}
                      delay={i * 40}
                      threshold={0.1}
                      className="group flex flex-col justify-between gap-4 bg-ink p-6 transition-colors hover:bg-abyss/40"
                    >
                      <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3 className="display-lg text-lg text-bone group-hover:text-teal-soft">
                            {s.name}
                          </h3>
                          {s.price && (
                            <span className="font-display text-base text-teal-soft">
                              {s.price}
                              {s.price.startsWith("$") && !/\+|–|—| /.test(s.price.slice(1))
                                ? ""
                                : "+"}
                            </span>
                          )}
                        </div>
                        {s.duration && (
                          <span className="mt-1 inline-block text-xs tracking-wide text-silver">
                            {s.duration}
                          </span>
                        )}
                        {s.description && (
                          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-silver">
                            {s.description}
                          </p>
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

          <Reveal delay={120} className="mt-16">
            <div className="flex flex-col items-center gap-5 rounded-[2px] border border-divider bg-abyss/40 px-6 py-10 text-center">
              <h2 className="display-lg text-2xl text-bone sm:text-3xl">
                Not sure which service is right for you?
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-silver">
                Send us a message and we’ll help you choose based on where you are
                in your loc journey.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/book"
                  className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-teal px-8 text-[0.95rem] font-medium text-ink transition-colors hover:bg-teal-soft"
                >
                  Book an Appointment
                  <Arrow />
                </a>
                <a
                  href={site.phone.href}
                  className="inline-flex h-14 items-center justify-center rounded-full border border-divider px-8 text-[0.95rem] font-medium text-bone transition-colors hover:border-teal hover:text-teal-soft"
                >
                  Call {site.phone.display}
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

