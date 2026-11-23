import type { NextConfig } from "next";

export const canonicalSiteUrl = "https://goldcoast-accom.com.au";

// Explicit is safer than deriving URLs from the demo catalogue or all App Router files.
export const productionIndexablePaths = [
  "/",
  "/about",
  "/contact",
  "/faqs",
  "/concierge",
  "/properties",
  "/locations",
  "/experiences",
  "/beachfront-accommodation-gold-coast",
  "/luxury-accommodation-gold-coast",
  "/corporate-accomodation",
  "/locations/palm-beach",
  "/locations/broadbeach",
  "/locations/burleigh-heads",
  "/accommodation-near-gc-convention-centre",
] as const;

const production = process.env.VERCEL_ENV === "production";
const indexablePattern = productionIndexablePaths
  .filter((path) => path !== "/")
  .map((path) => path.slice(1))
  .join("|");

// Ignore publicly served assets and crawler metadata. Newly added pages remain
// noindex until intentionally added to the allowlist and sitemap together.
const productionNoindexPath =
  `/:path((?!(?:${indexablePattern}|robots\\.txt|sitemap\\.xml|favicon\\.svg)/?$|(?:_next|assets|wp-content/uploads)/).+)`;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: production ? productionNoindexPath : "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/accomodation", destination: "/properties", permanent: true },
      { source: "/gold-coast-experiences", destination: "/experiences", permanent: true },
      { source: "/local-experiences", destination: "/experiences", permanent: true },
      {
        source: "/panoramic-penthouse",
        destination: "https://book.psdirectbooking.com/sites/gold-coast-accommodations/properties/panoramic-penthouse-views",
        permanent: true,
      },
      {
        source: "/featureslistings/panoramic-penthouse-views",
        destination: "https://book.psdirectbooking.com/sites/gold-coast-accommodations/properties/panoramic-penthouse-views",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
