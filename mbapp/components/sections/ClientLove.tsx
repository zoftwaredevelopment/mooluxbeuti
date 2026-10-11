import Image from "next/image";
import { portfolio } from "@/lib/site";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Arrow } from "@/components/Button";

/**
 * SECTION H — CLIENT LOVE (honest version)
 * We have NO verified testimonials, so we do NOT fabricate quotes, ratings or
 * identities. Instead: a calm editorial band pointing to the real, public
 * Instagram for genuine client work, over a slow marquee of real images.
 */
export function ClientLove() {
  const strip = [...portfolio, ...portfolio]; // duplicate for seamless loop

  return (
    <section className="overflow-hidden border-y border-divider bg-abyss py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow flex items-center gap-3 text-teal">
                <span className="inline-block h-px w-8 bg-teal/60" />
                Real work, real clients
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="display-lg mt-5 text-4xl text-bone sm:text-5xl">
                See the craft, straight from{" "}
                <span className="text-metal italic">our chair.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-silver">
                We share finished looks, retwists and transformations on
                Instagram. Follow along and see the results for yourself.
              </p>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-divider px-6 py-3.5 text-sm font-medium text-bone transition-colors hover:border-teal hover:text-teal-soft"
            >
              Follow {site.instagram.handle}
              <Arrow />
            </a>
          </Reveal>
        </div>
      </div>

      {/* Marquee of real work */}
      <div className="relative mt-14 flex w-full" aria-hidden="true">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-abyss to-transparent"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-abyss to-transparent"
        />
        <div className="marquee-track gap-4 pr-4">
          {strip.map((item, i) => (
            <div
              key={item.src + i}
              className="relative aspect-square h-40 w-40 shrink-0 overflow-hidden rounded-[2px] ring-1 ring-teal/10 md:h-52 md:w-52"
            >
              <Image
                src={item.src}
                alt=""
                fill
                loading="lazy"
                sizes="208px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
