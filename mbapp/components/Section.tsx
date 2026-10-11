import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Consistent horizontal padding + max width across all pages. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-[var(--spacing-gutter)] ${className}`}>
      {children}
    </div>
  );
}

/**
 * Section eyebrow + editorial heading with optional script accent.
 * `accent` is a word rendered in the handwritten face for contrast.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  accentClass = "text-teal-soft",
  lead,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  accent?: string;
  accentClass?: string;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <div className={`flex max-w-2xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow flex items-center gap-3 text-teal">
            <span className="inline-block h-px w-8 bg-teal/60" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2 className="display-lg mt-5 text-4xl text-bone sm:text-5xl">
          {title}
          {accent && (
            <>
              {" "}
              <span className={`font-script text-[1.15em] font-normal ${accentClass}`}>
                {accent}
              </span>
            </>
          )}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={160}>
          <p className="mt-5 text-base leading-relaxed text-silver sm:text-lg">
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
