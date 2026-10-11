import Image from "next/image";
import { site } from "@/lib/site";

/**
 * MooluxBeuti logo — uses the real supplied logo asset (cropped, transparent
 * webp). Falls back to the wordmark as alt text. Do not replace with a
 * generic mark.
 */
export function Logo({
  className = "h-9 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className="inline-flex items-center">
      <Image
        src="/media/opt/brand/logo.webp"
        alt={`${site.name} logo`}
        width={832}
        height={579}
        priority={priority}
        className={className}
        style={{ width: "auto" }}
      />
      <span className="sr-only">{site.name}</span>
    </span>
  );
}

/** Wordmark-only lockup for tight spaces (renders the brand name in the display face). */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display tracking-[0.3em] ${className}`}>
      {site.name}
    </span>
  );
}
