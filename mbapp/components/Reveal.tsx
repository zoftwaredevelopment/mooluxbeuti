"use client";

import type { ReactNode } from "react";

/**
 * Reveal — renders an element with the reveal classes. Visibility is driven by
 * the fail-safe vanilla script in layout.tsx (before paint, independent of
 * React hydration), NOT by a React effect. CSS defaults to visible and only
 * hides under `.js`, so content is never permanently hidden if JS is slow,
 * blocked, or fails. This component stays "use client" only because a client
 * component (PortfolioGrid) imports it; it is pure markup otherwise.
 *
 * suppressHydrationWarning is intentional: the vanilla script adds
 * `is-visible` to the real DOM before React hydrates (that is the whole
 * point — content reveals even if hydration is slow). Without this flag,
 * React reports the externally-added class as a hydration mismatch.
 */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
  threshold: _threshold,
}: {
  children: ReactNode;
  as?: "div" | "section" | "li" | "article" | "span" | "h2" | "p" | "figure";
  delay?: number;
  variant?: "up" | "mask";
  className?: string;
  threshold?: number;
}) {
  const base = variant === "mask" ? "reveal-mask" : "reveal";
  const style =
    delay
      ? ({ ["--reveal-delay" as string]: `${delay}ms` } as React.CSSProperties)
      : undefined;

  return (
    <Tag
      className={`${base} ${className}`}
      style={style}
      suppressHydrationWarning
    >
      {children}
    </Tag>
  );
}
