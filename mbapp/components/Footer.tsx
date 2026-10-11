import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { CopyrightYear } from "./CopyrightYear";

export function Footer() {
  return (
    <footer className="border-t border-divider bg-abyss">
      <div className="mx-auto max-w-[1400px] px-[var(--spacing-gutter)] py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo className="h-10 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-silver">
              A specialist loc-care studio for the Greater Toronto Area. Starter
              locs, maintenance, styling and scalp care — handled with skill,
              intention and care.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-teal-soft">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal" />
              {site.acceptingClients} · {site.experience} experience
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <h2 className="eyebrow text-silver">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[{ label: "Home", href: "/" }, ...nav, { label: "Book", href: "/book" }].map(
                (item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-silver transition-colors hover:text-teal-soft"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="eyebrow text-silver">Get in touch</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={site.phone.href}
                  className="text-bone transition-colors hover:text-teal-soft"
                >
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver transition-colors hover:text-teal-soft"
                >
                  {site.instagram.handle}
                </a>
              </li>
              <li className="text-silver">{site.area}</li>
              <li>
                <Link
                  href="/book"
                  className="text-teal-soft transition-colors hover:text-bone"
                >
                  Book an appointment →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-start justify-between gap-4 text-xs text-silver sm:flex-row sm:items-center">
          <p>
            © <CopyrightYear /> {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>{site.descriptor}</span>
            <span className="hidden sm:inline text-divider">/</span>
            <Link href="/faq" className="transition-colors hover:text-teal-soft">
              FAQ
            </Link>
            <span className="text-divider">/</span>
            <span className="text-[0.7rem] uppercase tracking-[0.2em] text-silver">
              GTA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
