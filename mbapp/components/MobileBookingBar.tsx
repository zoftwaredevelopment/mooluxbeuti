"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Restrained mobile-only sticky booking bar. Appears after the hero scrolls
 * away, hidden on the /book page itself. Easy to reach without obstructing.
 */
export function MobileBookingBar() {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const onBookPage = pathname === "/book";

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (onBookPage) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-divider bg-ink/95 px-4 py-3 backdrop-blur-md transition-transform duration-400 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="flex items-center gap-3">
        <Link
          href="/book"
          tabIndex={show ? 0 : -1}
          className="flex h-12 flex-1 items-center justify-center rounded-full bg-teal text-sm font-medium text-ink transition-colors hover:bg-teal-soft"
        >
          Book an Appointment
        </Link>
        <a
          href="tel:+14373324652"
          tabIndex={show ? 0 : -1}
          aria-label="Call MooluxBeuti"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-divider text-bone transition-colors hover:border-teal"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
