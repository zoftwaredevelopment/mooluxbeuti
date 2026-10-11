import Link from "next/link";
import Image from "next/image";
import { portfolio } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Arrow } from "@/components/Button";

/**
 * SECTION E — PORTFOLIO PREVIEW
 * We have no verified before/after pairs, so we present an editorial loc
 * portfolio (authentic work). A curated selection, not a huge gallery.
 */
export function PortfolioPreview() {
  const picks = [portfolio[4], portfolio[2], portfolio[0], portfolio[6]];

  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow flex items-center gap-3 text-teal">
                <span className="inline-block h-px w-8 bg-teal/60" />
                The work
              </span>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="display-lg mt-5 text-4xl text-bone sm:text-5xl">
                Locs, styled with{" "}
                <span className="text-metal italic">intention.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-medium text-teal-soft transition-colors hover:text-bone"
            >
              View full portfolio
              <Arrow />
            </Link>
          </Reveal>
        </div>

        {/* Asymmetric mosaic */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {picks.map((item, i) => (
            <Reveal
              key={item.src + i}
              delay={i * 90}
              threshold={0.1}
              className={`group relative overflow-hidden rounded-[2px] ${
                i % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/4] md:mt-8"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 45vw, 24vw"
                className="object-cover object-top transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-70 ring-1 ring-inset ring-teal/10"
              />
              <span className="absolute bottom-3 left-3 text-xs text-bone/90">
                {item.category}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
