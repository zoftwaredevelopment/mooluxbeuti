import Image from "next/image";
import { Reveal } from "@/components/Reveal";

/**
 * SECTION B — THE BRAND SIGNATURE
 * A calm typographic interlude after the hero: large editorial statement,
 * short description, one close-up texture detail with a teal hairline.
 */
export function BrandSignature() {
  return (
    <section className="relative overflow-hidden bg-abyss py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-[var(--spacing-gutter)] md:grid-cols-[1.2fr_0.8fr] md:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow text-teal">The philosophy</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-lg mt-6 max-w-xl text-4xl text-bone sm:text-5xl md:text-6xl">
              Healthy locs are built with{" "}
              <span className="text-metal italic">intention.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-silver sm:text-lg">
              Whether you’re forming your first locs or maintaining a look you’ve
              worn for years, every stage deserves the same care. We meet you
              where you are on your journey — with technique, patience and a real
              respect for your hair.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-16 bg-teal" />
              <span className="font-script text-2xl text-teal-soft">
                your journey
              </span>
            </div>
          </Reveal>
        </div>

        {/* Texture detail */}
        <Reveal variant="mask" delay={120} className="relative">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[2px]">
            <Image
              src="/media/opt/stills/retwist.webp"
              alt="Close detail of healthy, well-maintained loc texture"
              fill
              sizes="(max-width: 768px) 90vw, 35vw"
              className="object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-abyss/60 to-transparent ring-1 ring-inset ring-teal/10"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
