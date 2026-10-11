"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { portfolio, type PortfolioCategory } from "@/lib/site";
import { Lightbox, type LightboxItem } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";

const CATEGORIES: ("All" | PortfolioCategory)[] = [
  "All",
  "Retwist",
  "Styling",
  "Updo",
  "Walk-in",
];

export function PortfolioGrid() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(
    () =>
      (filter === "All"
        ? portfolio
        : portfolio.filter((p) => p.category === filter)
      ).map((p) => ({ src: p.src, alt: p.alt, caption: p.caption ?? p.category })),
    [filter]
  );

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter portfolio">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              filter === c
                ? "border-teal bg-teal/15 text-teal-soft"
                : "border-divider text-silver hover:border-teal/60"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
        {items.map((item, i) => (
          <Reveal key={item.src + i} delay={(i % 3) * 80} threshold={0.05} className="relative">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-teal"
              aria-label={`Open ${item.alt} in gallery`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px] ring-1 ring-teal/10">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 45vw, 31vw"
                  className="object-cover object-top transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="absolute bottom-3 left-3 text-xs text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.caption}
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Lightbox
        items={items}
        index={open}
        onClose={() => setOpen(null)}
        onNavigate={setOpen}
      />
    </>
  );
}
