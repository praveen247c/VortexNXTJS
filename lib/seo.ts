import type { Metadata } from "next";

const SITE_NAME = "Vortex IQ";
const DEFAULT_OG_IMAGE = { url: "/og/default.png", width: 1200, height: 630, alt: SITE_NAME };

type OgImage = { url: string; width?: number; height?: number; alt?: string };

/**
 * Next.js does not deep-merge `openGraph` across the layout/page tree: a page
 * that sets its own `openGraph` replaces the root layout's entire object, so
 * any key it omits (image, type, siteName) disappears rather than falling
 * back. This always fills those in.
 */
export function pageOpenGraph(input: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: OgImage;
}): NonNullable<Metadata["openGraph"]> {
  return {
    type: input.type ?? "website",
    siteName: SITE_NAME,
    title: input.title,
    description: input.description,
    url: input.path,
    images: [input.image ?? DEFAULT_OG_IMAGE],
  };
}

/**
 * Appends " · Vortex IQ" only if it still fits Google's ~60-character title
 * display limit; drops the suffix rather than truncating mid-word when the
 * base title alone is already at or near that limit.
 */
export function seoTitle(base: string, suffix = " · Vortex IQ", max = 60): string {
  const withSuffix = `${base}${suffix}`;
  if (withSuffix.length <= max) return withSuffix;
  if (base.length <= max) return base;
  return `${base.slice(0, max - 3).trimEnd()}...`;
}

/**
 * Trims to Google's ~155-character meta description guideline at a word
 * boundary. Does not pad short text: a description that is too short is a
 * content gap, not something safe to fabricate.
 */
export function truncateDescription(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 3);
  const lastSpace = cut.lastIndexOf(" ");
  const base = lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut;
  return `${base.trimEnd()}...`;
}
