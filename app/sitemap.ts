import type { MetadataRoute } from "next";
import { canonicalSiteUrl, productionIndexablePaths } from "../next.config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.VERCEL_ENV !== "production") {
    return [];
  }

  return productionIndexablePaths.map((path) => ({ url: `${canonicalSiteUrl}${path}` }));
}
