import Image from "next/image";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

/**
 * SECTION F — EXPERTISE & TRUST
 * Real portrait from brand material + verified professional details.
 * Careful, non-medical wording. Human, not clinical.
 */
export function Expertise() {
  const facts = [
    { k: "Experience", v: site.experience },
    { k: "Trained in", v: "Loc & scalp care" },
    { k: "Based in", v: "GTA, Canada" },
    { k: "Status", v: "Accepting clients" },
  ];

  return (
    <section className="relative overflow-hidden bg-abyss py-24 md:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full bg-teal/[0.05] blur-3xl"
      />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-[var(--spacing-gutter)] md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        {/* Portrait */}
        <Reveal variant="mask" className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-[2px]">
            <Image
              src="/media/opt/brand/SaveClip.App_831423644_18209402461367564_6365953337303205005_n.webp"
              alt={`${site.name} — trained loctician and loc-care specialist`}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 90vw, 38vw"
              className="object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/50 to-transparent ring-1 ring-inset ring-teal/15"
            />
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow text-teal">Experience & trust</span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="display-lg mt-5 text-4xl text-bone sm:text-5xl">
              Experience you can trust. Care that{" "}
              <span className="text-metal italic">respects your locs.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-silver sm:text-lg">
              {site.credentialsLine} From your first appointment onward, the
              focus is on healthy hair, a natural hairline and a look you’ll
              love — never rushed, never one-size-fits-all.
            </p>
          </Reveal>

          {/* Fact grid */}
          <Reveal delay={220}>
            <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[2px] border border-divider bg-divider sm:grid-cols-4">
              {facts.map((f) => (
                <div key={f.k} className="bg-abyss px-5 py-6">
                  <dt className="eyebrow text-[0.6rem] text-silver">{f.k}</dt>
                  <dd className="mt-2 font-display text-lg text-teal-soft">
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
