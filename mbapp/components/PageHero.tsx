import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Consistent page header for all interior pages (below the fixed nav). */
export function PageHero({
  eyebrow,
  title,
  accent,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-divider bg-ink pb-16 pt-[128px] md:pb-20 md:pt-[168px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_80%_at_80%_0%,rgba(8,120,140,0.12),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-[1400px] px-[var(--spacing-gutter)]">
        <Reveal>
          <span className="eyebrow flex items-center gap-3 text-teal">
            <span className="inline-block h-px w-8 bg-teal/60" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="display-xl mt-5 max-w-3xl text-[clamp(2.4rem,6vw,4.4rem)] text-bone">
            {title}
            {accent && (
              <>
                {" "}
                <span className="font-script text-[1.05em] font-normal text-teal-soft italic">
                  {accent}
                </span>
              </>
            )}
          </h1>
        </Reveal>
        {lead && (
          <Reveal delay={170}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-silver sm:text-lg">
              {lead}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
