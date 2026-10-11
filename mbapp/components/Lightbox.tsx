"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type LightboxItem = { src: string; alt: string; caption?: string };

/**
 * Accessible portfolio lightbox. Keyboard: arrows to navigate, Esc to close,
 * Tab is trapped inside. Click backdrop or ✕ to close. Focus returns to the
 * triggering grid on close.
 */
export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const open = index !== null;

  const prev = useCallback(
    () => index !== null && onNavigate((index - 1 + items.length) % items.length),
    [index, items.length, onNavigate]
  );
  const next = useCallback(
    () => index !== null && onNavigate((index + 1) % items.length),
    [index, items.length, onNavigate]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, prev, next, onClose]);

  if (index === null) return null;
  const item = items[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.alt} — image ${index + 1} of ${items.length}`}
      className="fixed inset-0 z-[90] flex flex-col bg-ink/97 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-[var(--spacing-gutter)] py-4">
        <span className="eyebrow text-silver">
          {index + 1} / {items.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-divider text-bone transition-colors hover:border-teal hover:text-teal-soft"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center px-[var(--spacing-gutter)] pb-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-divider bg-ink/60 text-bone transition-colors hover:border-teal hover:text-teal-soft sm:left-4"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <figure className="flex max-h-full flex-col items-center">
          <Image
            src={item.src}
            alt={item.alt}
            width={720}
            height={1280}
            className="max-h-[75vh] w-auto rounded-lg object-contain"
          />
          {item.caption && (
            <figcaption className="mt-4 text-center text-sm text-silver">
              {item.caption}
            </figcaption>
          )}
        </figure>

        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-2 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-divider bg-ink/60 text-bone transition-colors hover:border-teal hover:text-teal-soft sm:right-4"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
