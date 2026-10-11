"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Solidify header background after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the mobile menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md border-b border-divider/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-6 px-[var(--spacing-gutter)]">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="shrink-0 transition-opacity hover:opacity-85"
        >
          <Logo className="h-8 w-auto" priority />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 md:flex"
        >
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-teal-soft" : "text-silver hover:text-bone"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-px bg-teal transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/book" size="md">
            Book an Appointment
          </ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-divider text-bone transition-colors hover:border-teal md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col items-end gap-[5px]">
            <span
              className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-current transition-all duration-300 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-0 z-40 flex flex-col bg-ink/98 backdrop-blur-lg transition-all duration-400 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex h-[72px] items-center px-[var(--spacing-gutter)]">
          <Logo className="h-7 w-auto" />
        </div>
        <nav
          aria-label="Mobile"
          className="flex flex-1 flex-col justify-center gap-2 px-[var(--spacing-gutter)]"
        >
          {[{ label: "Home", href: "/" }, ...nav].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              tabIndex={open ? 0 : -1}
              className="border-b border-divider/60 py-4 font-display text-3xl text-bone transition-colors hover:text-teal-soft"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-3">
            <ButtonLink href="/book" size="lg" tabIndex={open ? 0 : -1}>
              Book an Appointment
            </ButtonLink>
            <a
              href={site.phone.href}
              tabIndex={open ? 0 : -1}
              className="text-center text-sm text-silver hover:text-teal-soft"
            >
              or call {site.phone.display}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
