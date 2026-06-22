import type { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { sitemapPostsQuery, sitemapCategoriesQuery } from "@/sanity/lib/queries";
import { caseStudies } from "@/app/(site)/customer-stories/case-studies";
import { SITE_URL } from "@/lib/site";

export const revalidate = 3600; // regenerate hourly

type SanityRef = { slug: string; _updatedAt: string };

// Marketing routes that exist as static pages in app/(site).
const STATIC_PATHS: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/ai-os-platform", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ai-os-platform/nerve-centre", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ai-os-platform/vortex-mind", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ai-os-platform/vortex-apps", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ai-os-platform/vortex-memory", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ai-os-platform/ask-viq", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ai-os-platform/vortex-agents", changeFrequency: "monthly", priority: 0.8 },
  { path: "/aistudio", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solutions/for-merchants-brands", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solutions/for-agencies", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solutions/for-tech-partners", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solutions/ai-enablement", changeFrequency: "monthly", priority: 0.7 },
  { path: "/solutions/integrations", changeFrequency: "monthly", priority: 0.7 },
  { path: "/customer-stories", changeFrequency: "weekly", priority: 0.7 },
  { path: "/partners", changeFrequency: "monthly", priority: 0.6 },
  { path: "/partners/agency-program", changeFrequency: "monthly", priority: 0.5 },
  { path: "/partners/technology-program", changeFrequency: "monthly", priority: 0.5 },
  { path: "/partners/student-program", changeFrequency: "monthly", priority: 0.5 },
  { path: "/start-with-vortexiq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.6 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.5 },
  { path: "/contact-us", changeFrequency: "yearly", priority: 0.6 },
  { path: "/branding", changeFrequency: "yearly", priority: 0.4 },
  { path: "/trust/trust-center", changeFrequency: "monthly", priority: 0.5 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.6 },
  { path: "/resources/blog", changeFrequency: "daily", priority: 0.9 },
  { path: "/register", changeFrequency: "yearly", priority: 0.4 },
  { path: "/launch-event", changeFrequency: "monthly", priority: 0.4 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/cookie-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts: SanityRef[] = [];
  let categories: SanityRef[] = [];
  try {
    [posts, categories] = await Promise.all([
      client.fetch<SanityRef[]>(sitemapPostsQuery),
      client.fetch<SanityRef[]>(sitemapCategoriesQuery),
    ]);
  } catch {
    // If Sanity is unreachable at build, still emit the static + case-study routes.
  }

  const staticRoutes: MetadataRoute.Sitemap = STATIC_PATHS.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${SITE_URL}/customer-stories/${c.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/resources/blog/${p.slug}`,
    lastModified: p._updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${SITE_URL}/resources/blog/category/${c.slug}`,
    lastModified: c._updatedAt,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...postRoutes, ...categoryRoutes];
}
