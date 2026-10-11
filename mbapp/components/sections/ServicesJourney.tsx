import Image from "next/image";
import { featuredServices, serviceUrl } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Arrow } from "@/components/Button";

/**
 * SECTION C — EXPLORE YOUR LOC JOURNEY
 * Editorial spotlight on signature loc services. Each links DIRECTLY to that
 * exact service on the live Acuity scheduler (opens in a new tab), so the
 * experience matches booking on MooluxBeuti's own calendar — no full-menu
 * detour, no different menu.
 *
 * IMAGES: source stills are 720x1280 (9:16 portrait). We frame them in
 * portrait containers with object-center so heads/locs are never cropped.
 */

// Representative stills for the featured loc services (real brand imagery).
const STILLS: Record<string, string> = {
  "starter-locs": "/media/opt/stills/styling.webp",
  "locs-detox": "/media/opt/stills/updo.webp",
  "retwist-and-style": "/media/opt/stills/retwist.webp",
  "inter-locs": "/media/opt/stills/retwist2.webp",
};
const FALLBACK_STILL = "/media/opt/stills/styling.webp";

export function ServicesJourney() {
  return (
    <section id="services" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
        {/* Heading */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow flex items-center gap-3 text-teal">
                <span className="inline-block h-px w-8 bg-teal/60" />
                Your loc journey
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="display-lg mt-5 text-4xl text-bone sm:text-5xl">
                Explore the services,{" "}
                <span className="text-metal italic">step by step.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <a
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-medium text-teal-soft transition-colors hover:text-bone"
            >
              View the full menu
              <Arrow />
            </a>
          </Reveal>
        </div>

        <div className="hairline my-12" />

        {/* Editorial list — each row alternates composition */}
        <div className="flex flex-col gap-16 md:gap-24">
          {featuredServices.map((s, i) => {
            const flip = i % 2 === 1;
            const src = STILLS[s.slug] ?? FALLBACK_STILL;
            return (
              <Reveal
                as="article"
                key={s.id}
                threshold={0.2}
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-12 ${
                  flip ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Image — portrait-safe framing */}
                <div
                  className="group relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2px] [direction:ltr]"
                >
                  <Image
                    src={src}
                    alt={`${s.name} — loc care detail`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover object-top transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent ring-1 ring-inset ring-teal/10"
                  />
                </div>

                {/* Text */}
                <div className="[direction:ltr]">
                  <span className="eyebrow text-teal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-lg mt-3 text-3xl text-bone sm:text-4xl">
                    {s.name}
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    {s.duration && <span className="text-silver">{s.duration}</span>}
                    {s.price && (
                      <span className="text-teal-soft">From {s.price}</span>
                    )}
                  </div>

                  <p className="mt-4 max-w-md whitespace-pre-line text-base leading-relaxed text-silver">
                    {s.description.split("\n").slice(0, 2).join(" ")}
                  </p>

                  <a
                    href={serviceUrl(s.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn mt-6 inline-flex items-center gap-2 border-b border-teal/40 pb-1 text-sm font-medium text-bone transition-colors hover:border-teal hover:text-teal-soft"
                  >
                    Book {s.name}
                    <Arrow />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

