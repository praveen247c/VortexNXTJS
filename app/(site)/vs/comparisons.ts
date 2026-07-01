// Neutral, source-cited competitor comparisons for the /vs hub.
// Every competitor claim here is drawn from the competitor's own public sources
// (see `sources`). North-star rule: checkable facts only, no disparagement, no
// superiority claim that isn't a plain fact. Frame Vortex IQ as complementary.
// Researched and adversarially verified June 2026 — re-verify before major edits,
// as competitor products (esp. Sidekick, Moby) change frequently.

export type CompareRow = { dimension: string; viq: string; competitor: string };

export type Comparison = {
  slug: string;
  name: string; // competitor name
  category: string; // short chip label
  oneLiner: string;
  whatItIs: string;
  rows: CompareRow[];
  switchReasons: string[];
  sources: string[];
  asOf: string;
};

export const comparisons: Comparison[] = [
  {
    slug: "triple-whale",
    name: "Triple Whale",
    category: "Analytics & attribution",
    oneLiner:
      "Triple Whale is a Shopify-first ecommerce analytics and measurement platform with an AI assistant (Moby) that unifies attribution, marketing-mix modelling and incrementality testing, and increasingly executes marketing actions across ad and email channels.",
    whatItIs:
      "Triple Whale consolidates marketing, sales and operational data across 60+ integrations into one platform and delivers unified measurement (multi-touch attribution via its Triple Pixel, marketing-mix modelling and incrementality testing) plus BI tooling like a no-code dashboard builder and SQL editor. Its AI assistant Moby (current generation “Moby 2”) can query live business data conversationally and, through purpose-built Specialists and Agents, take actions such as managing Meta/Google ad campaigns, drafting Klaviyo campaigns, building segments, generating creative, creating Shopify landing pages and forecasting inventory. It is a Shopify Plus Certified App used by 60,000+ brands.",
    rows: [
      {
        dimension: "What it is",
        viq: "An AI Operating System for e-commerce: a cross-stack operating layer that detects issues across the whole stack in real time, diagnoses root cause in plain English, and turns findings into ranked, approval-gated fixes it can execute inside the store.",
        competitor:
          "Describes itself as “The AI operating system built for modern ecommerce.” Its core is data and analytics: ecommerce analytics, first-party attribution, unified measurement (MTA + MMM + incrementality) and BI tooling, with the Moby assistant layered on top.",
      },
      {
        dimension: "Platforms",
        viq: "Cross-stack across BigCommerce, Shopify, Adobe Commerce (Magento) and WooCommerce.",
        competitor:
          "Shopify is the primary supported platform (Shopify Plus Certified App); integrations are also offered for BigCommerce and WooCommerce. Adobe Commerce (Magento) is not listed among the e-commerce platforms on the integrations page.",
      },
      {
        dimension: "Scope",
        viq: "Whole-stack store operations: creating products, landing pages, discount codes and campaigns, plus surfacing and fixing issues across the stack via platform APIs.",
        competitor:
          "Spans paid ads (Meta, Google), owned channels (email/SMS via Klaviyo), creative generation, audience segmentation, onsite conversion/landing pages, inventory forecasting and analytics/attribution. Advertises 60+ one-click integrations. Does not publicly position around SEO or store payment-processor configuration.",
      },
      {
        dimension: "Takes actions in the store",
        viq: "Yes. Acts inside the store via platform APIs — creates products, landing pages, discount codes and campaigns. Read-only by default until a fix is approved.",
        competitor:
          "Yes: Moby 2 is designed to take action across ecommerce and marketing systems — managing Meta ads and bids, building and sending Klaviyo campaigns, generating ad creative, building segments, creating Shopify landing pages and helping place inventory purchase orders. Several action-taking Specialists are marketed as “coming soon.”",
      },
      {
        dimension: "Approval + rollback",
        viq: "Approval-gated fixes deployed staging-first, with one-click rollback and a full audit trail.",
        competitor:
          "Offers approval-gating via Copilot mode (Moby queues a change for approval before executing) and an Autopilot mode that executes autonomously within predefined guardrails. Does not publicly state a staging/preview environment or an explicit one-click rollback feature.",
      },
      {
        dimension: "Detection model",
        viq: "Detects issues across the whole stack in real time and diagnoses root cause in plain English.",
        competitor:
          "Operates proactively and on demand: Moby alerts on anomalies “the moment they happen” via Slack, email and more, and agents continuously optimise campaigns, while Moby Chat supports on-demand querying of live data for reports and forecasts.",
      },
      {
        dimension: "Best fit for",
        viq: "E-commerce brands running across multiple platforms that want cross-stack detection and approval-gated fixes; security-conscious buyers (ISO 27001 certified).",
        competitor:
          "Shopify-native, largely direct-to-consumer brands seeking attribution, analytics and AI-driven marketing execution; positioned across SMB, mid-market and enterprise. Used by 60,000+ brands.",
      },
    ],
    switchReasons: [
      "You run on multiple commerce platforms (including Adobe Commerce/Magento) and want one operating layer across BigCommerce, Shopify, Adobe Commerce and WooCommerce — Triple Whale is Shopify-first, with BigCommerce and WooCommerce integrations and no listed Adobe Commerce support.",
      "You want changes deployed staging-first with one-click rollback and a full audit trail — Triple Whale provides Copilot approval-queuing and guardrails but does not publicly state a staging environment or one-click rollback.",
      "Your priority is detecting and fixing issues across the whole store stack rather than primarily marketing analytics, attribution and ad/email execution, which is Triple Whale’s centre of gravity.",
      "The two can be complementary: Triple Whale remains a strong choice for unified measurement, attribution and AI-driven marketing execution.",
    ],
    sources: [
      "https://www.triplewhale.com",
      "https://www.triplewhale.com/our-integrations",
      "https://www.triplewhale.com/pricing",
      "https://www.triplewhale.com/moby-2",
      "https://www.prnewswire.com/news-releases/triple-whale-unveils-the-ai-operating-system-for-ecommerce-with-the-launch-of-moby-2-302776288.html",
      "https://www.triplewhale.com/blog/bigcommerce-x-triple-whale",
      "https://www.triplewhale.com/blog/woocommerce-x-triple-whale",
      "https://apps.shopify.com/triplewhale-1",
    ],
    asOf: "June 2026",
  },
  {
    slug: "gorgias",
    name: "Gorgias",
    category: "Customer experience",
    oneLiner:
      "Gorgias is a conversational AI helpdesk for ecommerce that unifies customer support across channels and uses an AI Agent to resolve and act on customer conversations.",
    whatItIs:
      "Gorgias is a conversational AI platform for ecommerce, built around an omnichannel helpdesk that unifies email, live chat, SMS, WhatsApp, Instagram, Facebook and voice into a single inbox. Its AI Agent resolves post-purchase support conversations (returns, order tracking, cancellations) and acts as a pre-purchase shopping assistant, and it can take real actions in connected stores such as cancelling orders, issuing refunds and updating shipping details. It has deep native Shopify support (it states it powers conversations for 40% of Shopify brands), plus BigCommerce, Magento (Adobe Commerce) and WooCommerce.",
    rows: [
      {
        dimension: "What it is",
        viq: "An AI Operating System for e-commerce: a cross-stack operating layer that detects issues across the whole stack in real time, diagnoses root cause in plain English, and turns findings into ranked, approval-gated fixes.",
        competitor:
          "A conversational AI platform for ecommerce, described on its site as “The #1 AI-powered helpdesk for ecommerce” — an omnichannel helpdesk plus an AI Agent that automates customer support and supports sales through conversations.",
      },
      {
        dimension: "Platforms",
        viq: "Operates across BigCommerce, Shopify, Adobe Commerce and WooCommerce as a cross-stack layer.",
        competitor:
          "Native support for Shopify (its deepest integration), BigCommerce, Magento (Adobe Commerce) and WooCommerce, plus PrestaShop via a partner integration; connects 100+ apps across its ecosystem.",
      },
      {
        dimension: "Scope",
        viq: "Cross-stack operations across the whole store — creating products, landing pages, discount codes and campaigns via platform APIs — spanning issues detected across the stack.",
        competitor:
          "Centred on the customer-experience / support layer: post-purchase support and pre-purchase shopping assistance delivered through conversations. Not marketed as operating across ads, SEO or broader marketing analytics.",
      },
      {
        dimension: "Takes actions in the store",
        viq: "Acts inside the store via platform APIs (products, landing pages, discount codes, campaigns). Read-only by default until a fix is approved.",
        competitor:
          "The AI Agent takes support-relevant actions in connected stores that make changes (not read-only): documented Shopify order actions include Cancel Order, Edit Shipping Address, Remove/Replace Order Item, Reship Order and issuing refunds. Actions are opt-in and merchant-configurable.",
      },
      {
        dimension: "Approval + rollback",
        viq: "Ranked, approval-gated fixes deployed staging-first with one-click rollback and a full audit trail.",
        competitor:
          "For irreversible actions (e.g. cancelling an order), “Require customer confirmation” is on automatically so the shopper confirms before completion, and merchants can require confirmation on any action; oversight is via automatic human handover. Per its docs, no preview-on-staging environment or one-click rollback is documented — changes are written directly into the store.",
      },
      {
        dimension: "Detection model",
        viq: "Continuously and proactively detects issues across the stack in real time, independent of customer contact.",
        competitor:
          "The AI Agent is reactive / on-demand: it responds to incoming customer messages across email, chat and SMS using real-time context. Not described as continuously monitoring the merchant’s stack independently of customer contact.",
      },
      {
        dimension: "Best fit for",
        viq: "E-commerce operators running across the BigCommerce, Shopify, Adobe Commerce and WooCommerce stack who want cross-stack detection and approval-gated action.",
        competitor:
          "Direct-to-consumer brands and CX teams, heavily weighted toward Shopify merchants, with plan tiers from small stores up to Enterprise.",
      },
    ],
    switchReasons: [
      "You need a cross-stack operating layer that detects and diagnoses issues across the whole store — not only within customer conversations. Vortex IQ complements a support tool like Gorgias by covering the operational surface beyond the support inbox.",
      "Your workflow needs merchant-facing approval-gating with staging-first deployment, one-click rollback and a full audit trail, in addition to Gorgias’s shopper-confirmation and human-handover safeguards on support actions.",
      "You want proactive, continuous real-time detection across the stack independent of customer contact, alongside Gorgias’s reactive, conversation-triggered AI Agent.",
      "The actions you need span the broader store — products, landing pages, discount codes and campaigns — rather than the support-focused order edits, refunds and shipping updates Gorgias’s AI Agent performs.",
    ],
    sources: [
      "https://www.gorgias.com/",
      "https://www.gorgias.com/ai-agent",
      "https://docs.gorgias.com/en-US/ai-agent-actions-make-changes-to-shopify-orders-757792",
      "https://docs.gorgias.com/en-US/ai-agent-explained-497772",
      "https://www.gorgias.com/ecommerce/bigcommerce",
      "https://www.gorgias.com/integrations",
      "https://www.gorgias.com/pricing",
    ],
    asOf: "June 2026",
  },
  {
    slug: "shopify-sidekick",
    name: "Shopify Sidekick",
    category: "Platform-native AI",
    oneLiner:
      "Shopify Sidekick is an AI-enabled commerce assistant built into the Shopify admin; Vortex IQ is a cross-stack AI operating layer that detects, diagnoses and acts on issues across multiple e-commerce platforms with approval and rollback.",
    whatItIs:
      "Shopify Sidekick is Shopify’s built-in, free AI commerce assistant that lives in the Shopify admin and helps merchants start, run and grow their business using everyday language. It can analyse store data, answer questions, draft content (product descriptions, blog posts, emails, images), create or edit store objects, build discount codes and collections, update store design, manage orders and generate custom apps, always presenting changes for the merchant to review and approve. It respects staff access controls so team members only interact with data they are authorised to use.",
    rows: [
      {
        dimension: "What it is",
        viq: "An AI Operating System for e-commerce: a cross-stack operating layer that detects issues in real time, diagnoses root cause in plain English, and turns findings into ranked, approval-gated fixes it can execute inside the store.",
        competitor:
          "An AI-enabled commerce assistant built into the Shopify admin, designed to help merchants start, run and grow their business using everyday language (Shopify’s own description).",
      },
      {
        dimension: "Platforms",
        viq: "Cross-platform: works across BigCommerce, Shopify, Adobe Commerce and WooCommerce.",
        competitor:
          "Shopify only. Shopify’s documentation and marketing present Sidekick exclusively as a Shopify admin feature; available on desktop and the mobile app, but not on tablet or mobile web admin.",
      },
      {
        dimension: "Scope",
        viq: "Operates across the whole stack, acting on findings via platform APIs (products, landing pages, discount codes, campaigns).",
        competitor:
          "Operates within the Shopify admin using the store’s own Shopify data and workflows (products, orders, discounts, collections, marketing, analytics); can also work with installed third-party apps via Sidekick app extensions.",
      },
      {
        dimension: "Takes actions in the store",
        viq: "Yes. Acts inside the store via platform APIs: creates products, landing pages, discount codes and campaigns. Read-only by default.",
        competitor:
          "Yes. Shopify states Sidekick “takes action in your admin”: it can build discount codes and collections, update theme/store design, edit products and manage orders, always via options the merchant reviews and approves.",
      },
      {
        dimension: "Approval + rollback",
        viq: "Approval-gated fixes deployed staging-first, with one-click rollback and a full audit trail.",
        competitor:
          "Approval-gated: Shopify states Sidekick “is never allowed to make changes to your shop without your approval” and presents changes for review before applying. Shopify’s documentation does not describe a staging/preview environment or a dedicated one-click rollback feature.",
      },
      {
        dimension: "Detection model",
        viq: "Continuous, always-on: detects issues across the stack in real time and surfaces them proactively.",
        competitor:
          "On-demand and conversational: merchants invoke Sidekick from any admin page via text or voice. Shopify’s documentation describes user-initiated queries; it does not describe an always-on cross-stack monitoring loop. (Sidekick Pulse surfaces proactive recommendations from Shopify data.)",
      },
      {
        dimension: "Pricing model",
        viq: "Offered as a standalone cross-platform AI OS (see Vortex IQ pricing).",
        competitor:
          "Included with the merchant’s Shopify plan at no separate cost; Shopify states “features and usage limits vary by plan.” App generation is limited to higher plans.",
      },
    ],
    switchReasons: [
      "You run on more than one platform (e.g. BigCommerce, Adobe Commerce or WooCommerce alongside Shopify) and want one operating layer across all of them rather than a per-store assistant. Sidekick is scoped to the Shopify admin.",
      "You want continuous, always-on detection that surfaces issues proactively across the stack, rather than an on-demand assistant you open and ask.",
      "You need staging-first deployment with one-click rollback and a full audit trail on top of approval-gating. Sidekick approval-gates changes but Shopify’s docs do not describe a staging environment or a dedicated one-click undo.",
      "Sidekick and Vortex IQ can be complementary for a Shopify store: Sidekick is a strong native admin assistant for day-to-day tasks, while Vortex IQ adds a cross-stack detect-diagnose-act layer with rollback for teams operating beyond a single Shopify store.",
    ],
    sources: [
      "https://www.shopify.com/sidekick",
      "https://help.shopify.com/en/manual/shopify-admin/productivity-tools/sidekick",
      "https://help.shopify.com/en/manual/shopify-admin/productivity-tools/sidekick/set-up",
      "https://apps.shopify.com/built-in-features/sidekick",
      "https://shopify.dev/docs/apps/build/sidekick",
    ],
    asOf: "June 2026",
  },
];

export const comparisonSlugs = comparisons.map((c) => c.slug);
export const comparisonBySlug = (slug: string) =>
  comparisons.find((c) => c.slug === slug);
