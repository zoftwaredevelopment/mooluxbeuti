import type { Metadata } from "next";
import { faqs, site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ButtonLink, Arrow } from "@/components/Button";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about MooluxBeuti's loc services, how to book, where we operate in the GTA, and how to choose the right appointment.",
};

export default function FaqPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="FAQ"
        title="Questions,"
        accent="answered."
        lead="Everything you need to know before your first appointment — and after. If something’s missing, just ask."
      />

      <section className="bg-ink py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <FaqAccordion />
          </div>

          <Reveal delay={120} className="mt-14 max-w-3xl">
            <div className="flex flex-col items-start gap-5 rounded-[2px] border border-divider bg-abyss/40 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="display-lg text-xl text-bone sm:text-2xl">
                  Still have a question?
                </h2>
                <p className="mt-1.5 text-sm text-silver">
                  Reach out and we’ll get you sorted — no question is too small.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <ButtonLink href="/book">Ask a question
                  <Arrow />
                </ButtonLink>
                <ButtonLink href={site.phone.href} variant="secondary" external>
                  Call {site.phone.display}
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
