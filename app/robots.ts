import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const site = (process.env.SITE_URL ?? "https://usewrit.dev") + (process.env.BASE_PATH ?? "");
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${site}/sitemap.xml` };
}
