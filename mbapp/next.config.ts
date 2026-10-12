import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Dev-only: let devices on the same LAN (e.g. your phone at
  // http://172.20.10.2:3000) load Next dev resources. Without this, Next
  // blocks cross-origin /_next/* requests, client JS never hydrates on the
  // device, and every interactive element (incl. the hamburger) does nothing.
  // Has no effect on production builds.
  allowedDevOrigins: ["172.20.10.2"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
