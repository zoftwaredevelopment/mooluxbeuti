import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ButtonLink, Arrow } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "MooluxBeuti is a specialist loctician in the GTA with more than 10 years of experience in loc installation, maintenance, styling and scalp care.",
};

const values = [
  {
    k: "01",
    t: "Technique first",
    d: "Clean parting, careful tension and methods matched to your hair type — the foundation every healthy set of locs is built on.",
  },
  {
    k: "02",
    t: "Respect for your hair",
    d: "Your locs and your hairline come first. We never rush, and we never recommend more than your hair actually needs.",
  },
  {
    k: "03",
    t: "A personal journey",
    d: "From your first appointment to years of maintenance, we get to know your hair, your style and your goals.",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        title="A specialist devoted to"
        accent="healthy locs."
        lead="MooluxBeuti is a loc-care studio built on skill, patience and genuine care for every head of hair that sits in the chair."
      />

      {/* Story + portrait */}
      <section className="bg-ink py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
            <div>
              <Reveal>
                <h2 className="display-lg text-3xl text-bone sm:text-4xl">
                  {site.experience} of loc care, distilled into one craft.
                </h2>
              </Reveal>
              <Reveal delay={90}>
                <p className="mt-6 text-base leading-relaxed text-silver sm:text-lg">
                  {site.credentialsLine} What began as a deep interest in the
                  art and science of locs has grown into a specialist practice
                  serving clients across the {site.area}.
                </p>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-4 text-base leading-relaxed text-silver sm:text-lg">
                  Every appointment is personal. We take the time to understand
                  your hair type, your history and where you want to go — then
                  build a plan that keeps your locs healthy and looking their
                  best, whether you’re just starting out or maintaining a look
                  you’ve worn for years.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-8 flex items-center gap-4">
                  <span className="h-px w-16 bg-teal" />
                  <span className="font-script text-2xl text-teal-soft italic">
                    {site.name}
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal variant="mask" delay={80} className="relative">
              <div className="relative aspect-square w-full overflow-hidden rounded-[2px] ring-1 ring-teal/15">
                <Image
                  src="/media/opt/brand/SaveClip.App_831423644_18209402461367564_6365953337303205005_n.webp"
                  alt={`${site.name} — trained loctician and loc-care specialist`}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="border-t border-divider bg-abyss py-16 md:py-24">
        <Container>
          <Reveal>
            <span className="eyebrow text-teal">How we work</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg mt-4 max-w-xl text-3xl text-bone sm:text-4xl">
              Three principles behind every session.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2px] border border-divider bg-divider md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.k} delay={i * 90} threshold={0.1} className="bg-abyss p-8">
                <span className="font-display text-2xl text-teal">{v.k}</span>
                <h3 className="display-lg mt-4 text-xl text-bone">{v.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">{v.d}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="mt-14">
            <ButtonLink href="/book" size="lg">
              Book an Appointment
              <Arrow />
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
