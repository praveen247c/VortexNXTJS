import { SITE_URL, absoluteUrl } from "./site";

// ---------------------------------------------------------------------------
// Brand-locked copy. Do NOT paraphrase the customer-facing strings below
// (description, featureList, FAQ answers). Rules: no em dashes; the six module
// names exactly as cased (Nerve Centre, Vortex Mind, Ask Viq™, Vortex Apps,
// Vortex Agents, Vortex Memory); the Detect. Explain. Fix. loop; the umbrella
// "the AI Operating System for e-commerce". Banned: leverage, powered by AI,
// seamless, robust, world-class, unlock.
// ---------------------------------------------------------------------------

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SOFTWARE_ID = `${SITE_URL}/#software`;
const FOUNDER_ID = `${SITE_URL}/#founder`;

export const organizationLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Vortex IQ",
  url: SITE_URL,
  logo: absoluteUrl("/logo.png"),
  description:
    "The AI Operating System for e-commerce. Vortex IQ detects what's broken across your stack, explains why in plain English, and helps you fix it safely, across Shopify, BigCommerce, Adobe Commerce and every platform you run.",
  foundingDate: "2023",
  areaServed: "GB",
  founder: {
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: "Susant Patro",
    jobTitle: "Founder & CEO",
    sameAs: ["https://www.linkedin.com/in/susantpatro247/"],
  },
  award: ["Microsoft GenAI Accelerator", "BigCommerce Elite Partner"],
  hasCertification: {
    "@type": "Certification",
    name: "ISO/IEC 27001",
    issuer: {
      "@type": "Organization",
      name: "International Organization for Standardization",
    },
  },
  knowsAbout: [
    "AI Operating System for e-commerce",
    "Shopify monitoring and automation",
    "BigCommerce automation",
    "Adobe Commerce (Magento)",
    "Agentic AI for ecommerce",
    "Revenue leak detection",
  ],
  // TODO: add verified third-party profile URLs (LinkedIn company, X, Crunchbase,
  // G2, Capterra) to `sameAs` as they are claimed — see ticket off-site appendix.
  sameAs: ["https://www.linkedin.com/in/susantpatro247/"],
};

export const websiteLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Vortex IQ",
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
};

export const softwareApplicationLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": SOFTWARE_ID,
  name: "Vortex IQ",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "AI Operating System for E-Commerce",
  operatingSystem: "Web",
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
  description:
    "The AI Operating System for e-commerce. Detect what's broken, understand why, and fix it safely, across every platform you run. Connect your stack, activate the Nerve Centre, and turn signals into action.",
  featureList: [
    "Nerve Centre: real-time detection across every critical KPI, before revenue is lost",
    "Vortex Mind: diagnoses what's happening and returns clear, prioritised recommendations",
    "Ask Viq™: ask in plain English, get answers, context and safe actions across your stack",
    "Vortex Apps: apply fixes safely with staging, backup and rollback, never risking your live store",
    "Vortex Agents: build and manage the AI agents that monitor, analyse and act across your stack",
    "Vortex Memory: the graph that remembers every signal, fix and decision, so the AI OS gets sharper over time",
  ],
  offers: { "@type": "Offer", category: "SaaS", url: absoluteUrl("/pricing") },
  // Intentionally no aggregateRating until genuine review volume exists.
};

export type Faq = { question: string; answer: string };

export function faqPageLd(faqs: Faq[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function blogPostingLd(post: {
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}): Record<string, unknown> {
  const url = absoluteUrl(`/resources/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    ...(post.image ? { image: post.image } : {}),
    ...(post.datePublished ? { datePublished: post.datePublished } : {}),
    ...(post.dateModified ? { dateModified: post.dateModified } : {}),
    author: { "@type": "Person", name: post.authorName || "Vortex IQ" },
    publisher: {
      "@type": "Organization",
      name: "Vortex IQ",
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export function breadcrumbLd(
  items: { name: string; path: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
