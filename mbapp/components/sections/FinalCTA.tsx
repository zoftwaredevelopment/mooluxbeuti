import Image from "next/image";
import { ButtonLink, Arrow } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

/**
 * SECTION I — THE FINAL CALL TO ACTION
 * A restrained, editorial close — not another promo banner. Full-bleed loc
 * detail, one headline, one primary action.
 */
export function FinalCTA() {
  return (
    <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-ink">
      {/* Full-bleed background loc detail */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/media/opt/stills/styling.webp"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/40" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-[var(--spacing-gutter)] py-24">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow flex items-center gap-3 text-teal">
              <span className="inline-block h-px w-8 bg-teal/60" />
              Your next chapter
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="display-xl mt-6 text-[clamp(2.4rem,6vw,4.6rem)] text-bone">
              Your next loc chapter{" "}
              <span className="text-metal italic">starts here.</span>
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-silver sm:text-lg">
              {site.acceptingClients}. Let’s find the right service for where you
              are in your journey.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9">
              <ButtonLink href="/book" size="lg">
                Book Your Appointment
                <Arrow />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
