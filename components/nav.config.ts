// Single source of truth for the header / mega-menu.
// Local routes link to ported pages; some link out to vortexiq.ai until built.

export type MegaItem = {
  label: string;
  href: string;
  desc?: string;
  icon?: string; // key into the icon map in MegaMenu
  external?: boolean;
  divider?: boolean; // render a separator line before this row
};

export type NavEntry = {
  label: string;
  href?: string; // plain link (no panel)
  external?: boolean;
  panel?: {
    layout: "split" | "cols";
    overview?: {
      title: string;
      text: string;
      moreLabel: string;
      moreHref: string;
      works?: { label: string; items: { label: string; href: string }[] };
    };
    items: MegaItem[];
  };
};

export const NAV: NavEntry[] = [
  {
    label: "The AI OS",
    panel: {
      layout: "split",
      overview: {
        title: "AI OS Overview",
        text: "The 6 pillars of the world's first AI Operating System.",
        moreLabel: "Explore the Platform →",
        moreHref: "/ai-os-platform",
        works: {
          label: "Works with",
          items: [
            { label: "Shopify Plus", href: "/solutions/for-merchants-brands" },
            { label: "BigCommerce", href: "/solutions/for-merchants-brands" },
            { label: "Adobe Commerce", href: "/solutions/for-merchants-brands" },
          ],
        },
      },
      items: [
        { label: "Nerve Centre", href: "/ai-os-platform/nerve-centre", desc: "Real-time detection", icon: "nerve" },
        { label: "Vortex Mind", href: "/ai-os-platform/vortex-mind", desc: "Diagnostics & strategy", icon: "mind" },
        { label: "Ask Viq™", href: "/ai-os-platform/ask-viq", desc: "Conversational AI", icon: "ask" },
        { label: "Vortex Apps", href: "/ai-os-platform/vortex-apps", desc: "Staging, backup & governance", icon: "apps" },
        { label: "Vortex Agents", href: "/ai-os-platform/vortex-agents", desc: "Execute changes safely", icon: "actions" },
        { label: "Vortex Memory", href: "/ai-os-platform/vortex-memory", desc: "Learns from every interaction", icon: "memory" },
      ],
    },
  },
  {
    label: "Solutions",
    panel: {
      layout: "split",
      overview: {
        title: "Solutions by role",
        text: "The right insights, agents, and controls for how your team works.",
        moreLabel: "Explore solutions →",
        moreHref: "/solutions",
      },
      items: [
        { label: "For Merchants & Brands", href: "/solutions/for-merchants-brands", desc: "Protect revenue, reduce firefighting", icon: "merchants" },
        { label: "For Agencies", href: "/solutions/for-agencies", desc: "Scale clients without scaling headcount", icon: "agencies" },
        { label: "For Tech Partners", href: "/solutions/for-tech-partners", desc: "Make your platform agentic", icon: "partners" },
        { label: "AI Enablement", href: "/solutions/ai-enablement", desc: "Launch your own AI agents", icon: "enablement" },
        { label: "Integrations", href: "/solutions/integrations", desc: "Connect every commerce system", icon: "integrations" },
      ],
    },
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    panel: {
      layout: "split",
      overview: {
        title: "Resources",
        text: "Learn the platform, explore results, and discover how to work with us.",
        moreLabel: "Explore insights →",
        moreHref: "/resources/blog",
      },
      items: [
        { label: "Docs", href: "https://docs.vortexiq.ai/", desc: "Technical documentation & reference guides", icon: "docs", external: true },
        { label: "Blog", href: "/resources/blog", desc: "Product updates & insights", icon: "blog" },
        { label: "About Us", href: "/about-us", desc: "Who we are and what we build", icon: "about", divider: true },
        { label: "Careers", href: "/careers", desc: "Join the Vortex IQ team", icon: "careers" },
        { label: "Contact Us", href: "/contact-us", desc: "Partnerships & enquiries", icon: "contact" },
      ],
    },
  },
  { label: "Customers", href: "/customer-stories" },
];

export const LOGIN_HREF = "https://app.vortexiq.ai/login";
export const DEMO_HREF = "/contact-us";
export const LOGO_SRC =
  "https://cdn.prod.website-files.com/68bff49fa25caa581ab0524a/68c29054c6d22238eac9bb4c_vlogo.svg";
