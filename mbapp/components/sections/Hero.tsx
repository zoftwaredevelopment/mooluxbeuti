import Image from "next/image";
import { ButtonLink, Arrow } from "@/components/Button";
import { site } from "@/lib/site";

/**
 * SECTION A — THE OPENING FRAME
 * Asymmetric split: cinematic portrait one side, brand message the other.
 * Entrance runs once on load (CSS animations) — fast, never blocks booking.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pt-[72px]">
      {/* Ambient background wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_80%_10%,rgba(8,120,140,0.16),transparent_55%),radial-gradient(90%_70%_at_0%_100%,rgba(0,166,200,0.08),transparent_50%)]"
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] flex-1 items-center gap-10 px-[var(--spacing-gutter)] pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-24">
        {/* Copy column */}
        <div className="order-2 flex flex-col items-start lg:order-1">
          <p
            className="fade-up eyebrow flex items-center gap-3 text-teal"
            style={{ ["--d" as string]: "250ms" }}
          >
            <span className="inline-block h-px w-8 bg-teal/60" />
            {site.name} · {site.tagline}
          </p>

          <h1 className="display-xl mt-6 text-[clamp(2.6rem,7vw,5.2rem)] text-bone">
            <span className="rise block">
              <span style={{ ["--d" as string]: "380ms" }}>Your locs.</span>
            </span>
            <span className="rise block">
              <span style={{ ["--d" as string]: "520ms" }}>Your journey.</span>
            </span>
            <span className="rise block">
              <span
                className="text-metal italic"
                style={{ ["--d" as string]: "660ms" }}
              >
                Our craft.
              </span>
            </span>
          </h1>

          <p
            className="fade-up mt-7 max-w-md text-base leading-relaxed text-silver sm:text-lg"
            style={{ ["--d" as string]: "820ms" }}
          >
            Thoughtful loc care, expert maintenance, and styling designed around
            you — by a specialist with more than a decade of hands-on craft.
          </p>

          <div
            className="fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ ["--d" as string]: "960ms" }}
          >
            <ButtonLink href="/book" size="lg">
              Book an Appointment
              <Arrow />
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" size="lg">
              Explore Our Services
            </ButtonLink>
          </div>

          {/* Experience marker */}
          <div
            className="fade-in mt-10 flex items-center gap-4 border-t border-divider pt-6"
            style={{ ["--d" as string]: "1120ms" }}
          >
            <span className="font-display text-3xl text-teal-soft">10+</span>
            <span className="text-xs leading-tight tracking-wide text-silver">
              Years of
              <br />
              experience
            </span>
            <span className="mx-2 hidden h-8 w-px bg-divider sm:block" />
            <span className="hidden text-xs leading-tight tracking-wide text-silver sm:block">
              {site.areaShort}
              <br />
              {site.acceptingClients}
            </span>
          </div>
        </div>

        {/* Image column — real stylist portrait, clip-revealed */}
        <div className="order-1 lg:order-2">
          <div
            className="clip-reveal relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[2px] lg:max-w-none"
            style={{ ["--d" as string]: "180ms" }}
          >
            <Image
              src="/media/opt/brand/SaveClip.App_831423644_18209402461367564_6365953337303205005_n.webp"
              alt="MooluxBeuti loctician — specialist in loc care and styling"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="hero-zoom object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-teal/15"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
            />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="fade-in relative hidden pb-6 lg:flex lg:justify-center"
        style={{ ["--d" as string]: "1300ms" }}
      >
        <div className="flex flex-col items-center gap-2 text-silver">
          <span className="eyebrow text-[0.6rem]">Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-teal to-transparent" />
        </div>
      </div>
    </section>
  );
}
