import type { MetadataRoute } from "next";
import { routes, site } from "@/content/game-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${site.url}${route === "/" ? "/" : route}`,
    lastModified: new Date(site.reviewedAt),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/beginner-guide" ? 0.9 : 0.75,
  }));
}
