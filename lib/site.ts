/** Canonical production origin. All absolute URLs (sitemap, canonical, JSON-LD) derive from this. */
export const SITE_URL = "https://www.vortexiq.ai";

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}
