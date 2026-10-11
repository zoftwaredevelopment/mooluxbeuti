import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { ButtonLink, Arrow } from "@/components/Button";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A gallery of real loc work by MooluxBeuti — retwists, styling, updos and finished looks from clients across the GTA.",
};

export default function PortfolioPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Portfolio"
        title="Real locs, real craft,"
        accent="real clients."
        lead="A selection of finished work from our chair. Every image is genuine work performed by MooluxBeuti — no filters, no stock, no borrowed results."
      />

      <section className="bg-ink py-16 md:py-24">
        <Container>
          <PortfolioGrid />

          <Reveal delay={100} className="mt-16">
            <div className="flex flex-col items-center gap-4 rounded-[2px] border border-divider bg-abyss/40 px-6 py-10 text-center">
              <h2 className="display-lg text-2xl text-bone sm:text-3xl">
                Want a look like one of these?
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-silver">
                Send a reference and tell us about your hair. We’ll help you get
                there — or find something that suits you even better.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/book" size="lg">
                  Book an Appointment
                  <Arrow />
                </ButtonLink>
                <ButtonLink href={site.instagram.url} variant="secondary" size="lg" external>
                  See more on Instagram
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
