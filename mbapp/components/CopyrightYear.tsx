"use client";

import { useEffect, useState } from "react";

/**
 * Current year. Computed on the client after mount (inside useEffect) so it
 * stays stable during static prerender under Next's Cache Components.
 */
export function CopyrightYear() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year ?? ""}</>;
}

