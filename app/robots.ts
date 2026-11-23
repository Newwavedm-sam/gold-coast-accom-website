import type { MetadataRoute } from "next";
import { canonicalSiteUrl } from "../next.config";

export default function robots(): MetadataRoute.Robots {
  if (process.env.VERCEL_ENV !== "production") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${canonicalSiteUrl}/sitemap.xml`,
  };
}
