import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${(process.env.SITE_URL ?? "https://usewrit.dev") + (process.env.BASE_PATH ?? "")}/` }];
}
