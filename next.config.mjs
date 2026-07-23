/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: import.meta.dirname,
  images: {
    // Webflow CDN (cdn.prod.website-files.com) deliberately absent: all assets
    // were localised to public/assets/webflow/ on 3 Jul 2026 so cancelling the
    // Webflow subscription cannot break the site.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  async headers() {
    return [
      {
        // Internal design reference: keep it out of search indexes.
        source: "/design-system.html",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  // 301 map from the old Webflow URL structure to the new one. Sources:
  // "vortex iq seo/VortexIQ-Redirect-Map.md" (2 Jul 2026),
  // "vortex iq seo/webflow_redirect_rules.txt" (the 24 legacy Webflow rules),
  // and the 3 Jul 2026 migration audit (GSC top-1000 pages).
  // Rules are matched in order: exact renamed-slug rules must stay ABOVE the
  // /blog/:slug wildcard. /brand-dna/* is handled by a 410 route handler in
  // app/brand-dna/ except for the clicked domains 301'd here (config redirects
  // run before filesystem routes). The .vercel.app -> vortexiq.ai redirect is
  // configured in the Vercel dashboard, not here.
  async redirects() {
    return [
      // --- Blog: renamed slugs first (only 3 of 104 old posts changed slug) ---
      { source: "/blog/ai-operating-system-ecommerce-complete-guide", destination: "/resources/blog/ai-os-ecommerce-complete-guide", permanent: true },
      { source: "/blog/e-commerce-strategy-10-agentic-workflows-every-merchant-should-automate-in-2025", destination: "/resources/blog/10-agentic-workflows-every-merchant-should-automate", permanent: true },
      { source: "/blog/what-is-an-ai-agent-guide-for-commerce-leaders-4b4fc", destination: "/resources/blog/what-is-an-ai-agent-guide-for-commerce-leaders", permanent: true },
      { source: "/resources/blog/ai-operating-system-ecommerce-complete-guide", destination: "/resources/blog/ai-os-ecommerce-complete-guide", permanent: true },
      { source: "/resources/blog/e-commerce-strategy-10-agentic-workflows-every-merchant-should-automate-in-2025", destination: "/resources/blog/10-agentic-workflows-every-merchant-should-automate", permanent: true },
      { source: "/resources/blog/what-is-an-ai-agent-guide-for-commerce-leaders-4b4fc", destination: "/resources/blog/what-is-an-ai-agent-guide-for-commerce-leaders", permanent: true },
      // Duplicate migrated article: old slug consolidates onto the new one.
      { source: "/resources/blog/platform-guides-20-hidden-features-in-shopify-that-ai-can-unlock", destination: "/resources/blog/20-hidden-features-shopify-ai-unlock", permanent: true },
      { source: "/blog/platform-guides-20-hidden-features-in-shopify-that-ai-can-unlock", destination: "/resources/blog/20-hidden-features-shopify-ai-unlock", permanent: true },
      // Webflow "-2" collision suffix survived migration; clean slug 404s.
      { source: "/resources/blog/platform-guides-adobe-commerce-ai-agents-a-marriage-made-in-heaven", destination: "/resources/blog/platform-guides-adobe-commerce-ai-agents-a-marriage-made-in-heaven-2", permanent: true },
      // Old blog tree (multi-segment first, then the single-segment wildcard).
      { source: "/blog/category/:path*", destination: "/resources/blog", permanent: true },
      { source: "/blog/:slug", destination: "/resources/blog/:slug", permanent: true },
      { source: "/blog", destination: "/resources/blog", permanent: true },

      // --- Old Webflow locale tree (exact /en-us first: the wildcard would
      // match it with zero segments and emit an empty Location header) ---
      { source: "/en-us", destination: "/", permanent: true },
      { source: "/en-us/blog/:path*", destination: "/resources/blog/:path*", permanent: true },
      { source: "/en-us/:path*", destination: "/:path*", permanent: true },

      // --- A. Flat module/pillar slugs -> /ai-os-platform/* ---
      { source: "/nerve-centre", destination: "/ai-os-platform/nerve-centre", permanent: true },
      { source: "/vortex-mind", destination: "/ai-os-platform/vortex-mind", permanent: true },
      { source: "/vortex-apps", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/vortex-memory", destination: "/ai-os-platform/vortex-mind", permanent: true },
      { source: "/ask-viq", destination: "/ai-os-platform/ask-viq", permanent: true },
      { source: "/vortex-agents", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/ai-os-platform/actions", destination: "/ai-os-platform/vortex-agents", permanent: true },
      // Retired pillars fold into their successors: Apps -> Agents, Memory -> Mind.
      // These catch every inbound redirect that still lands on the old pillar URL.
      { source: "/ai-os-platform/vortex-apps", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/ai-os-platform/vortex-memory", destination: "/ai-os-platform/vortex-mind", permanent: true },
      { source: "/modules", destination: "/ai-os-platform", permanent: true },
      { source: "/platform", destination: "/ai-os-platform", permanent: true },
      { source: "/vortex-iq-ai-os", destination: "/ai-os-platform", permanent: true },

      // --- Agent Hub is retired; its intent maps to Vortex Agents ---
      { source: "/agent-hub", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/ai-os-platform/agent-hub", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/agenthub/agent-hub", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/funnel-based-agents/:path*", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/outcome-driven-agents/:path*", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/role-specific-agents/:path*", destination: "/solutions", permanent: true },

      // --- Old /agents/* keyword pages -> topical equivalents (were dumping to /) ---
      { source: "/agents/site-management/staging-shopify", destination: "/stagingpro-to-ai-os", permanent: true },
      { source: "/agents/site-management/staging-magento", destination: "/stagingpro-to-ai-os", permanent: true },
      { source: "/agents/site-management/stagingpro-bigcommerce", destination: "/stagingpro-to-ai-os", permanent: true },
      { source: "/agents/site-management/backup-shopify", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/agents/site-management/backup-bigcommerce", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/agents/insights-monitoring/:path*", destination: "/ai-os-platform/nerve-centre", permanent: true },
      { source: "/agents/seo-optimization/:path*", destination: "/solutions/seo-geo", permanent: true },
      { source: "/agents/:path*", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/vortex-apps/staging-shopify", destination: "/stagingpro-to-ai-os", permanent: true },

      // --- Old /integrations/* and /solution/* -> topical equivalents ---
      { source: "/integrations/:path*", destination: "/solutions/integrations", permanent: true },
      { source: "/solution/insights-monitoring", destination: "/ai-os-platform/nerve-centre", permanent: true },
      { source: "/solution/site-management-reliability", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/solution/seo-performance-optimisation", destination: "/solutions/seo-geo", permanent: true },

      // --- C. Solutions / audience flat slugs ---
      { source: "/for-merchants-brands", destination: "/solutions/for-merchants-brands", permanent: true },
      { source: "/for-agencies", destination: "/solutions/for-agencies", permanent: true },
      { source: "/for-tech-partners", destination: "/solutions/for-tech-partners", permanent: true },
      { source: "/solutions-merchants", destination: "/solutions/for-merchants-brands", permanent: true },
      { source: "/solutions-agencies", destination: "/solutions/for-agencies", permanent: true },
      { source: "/solutions-tech-partners", destination: "/partners/technology-program", permanent: true },
      { source: "/solutions-by-role", destination: "/solutions", permanent: true },
      { source: "/who-its-for", destination: "/solutions", permanent: true },
      { source: "/al-enablement", destination: "/solutions/ai-enablement", permanent: true },
      { source: "/solutions/agency-partners-new", destination: "/solutions/for-agencies", permanent: true },
      { source: "/solutions/for-mmerchants-brands-new", destination: "/solutions/for-merchants-brands", permanent: true },
      { source: "/solutions/platform-overview", destination: "/ai-os-platform", permanent: true },
      { source: "/solutions/tech-partners-new", destination: "/partners/technology-program", permanent: true },

      // --- D. Partners / programs flat slugs ---
      { source: "/agency", destination: "/partners/agency-program", permanent: true },
      { source: "/technology-program", destination: "/partners/technology-program", permanent: true },
      { source: "/student-program", destination: "/partners/student-program", permanent: true },

      // --- E. Trust / policy flat slugs -> /trust/* ---
      { source: "/vendor-and-third-party-risk-policy", destination: "/trust/vendor-and-third-party-risk-policy", permanent: true },
      { source: "/secure-sdlc-and-change-management-policy", destination: "/trust/secure-sdlc-and-change-management-policy", permanent: true },
      { source: "/ai-model-governance-policy", destination: "/trust/ai-model-governance-policy", permanent: true },
      { source: "/incident-response-and-breach-notification-policy", destination: "/trust/incident-response-and-breach-notification-policy", permanent: true },
      { source: "/sub-processors", destination: "/trust/sub-processors", permanent: true },
      { source: "/trust/trust", destination: "/trust/trust-center", permanent: true },

      // --- F. Docs / academy / resources (docs live on the subdomain) ---
      // --- Old /docs/* pages that carried real GSC traffic, hand-mapped to their
      // exact equivalent on docs.vortexiq.ai (source: 2026-03-31 GSC "Pages" export,
      // 66 URLs, cross-checked against the live docs.vortexiq.ai sitemap on 2026-07-04).
      // These exact-match rules must stay ABOVE the /docs/:path* catch-all below.
      { source: "/docs/nerve-centre/new-relic", destination: "https://docs.vortexiq.ai/nerve-centre/kpi-cards/newrelic", permanent: true },
      { source: "/docs/nerve-centre/stripe", destination: "https://docs.vortexiq.ai/nerve-centre/kpi-cards/stripe", permanent: true },
      { source: "/docs/nerve-centre/gorgias", destination: "https://docs.vortexiq.ai/nerve-centre/kpi-cards/gorgias", permanent: true },
      { source: "/docs/nerve-centre/bigcommerce", destination: "https://docs.vortexiq.ai/nerve-centre/kpi-cards/bigcommerce", permanent: true },
      { source: "/docs/nerve-centre/adobe-commerce", destination: "https://docs.vortexiq.ai/nerve-centre/kpi-cards/adobe-commerce", permanent: true },
      { source: "/docs/nerve-centre/cybersource", destination: "https://docs.vortexiq.ai/nerve-centre/kpi-cards/cybersource", permanent: true },
      { source: "/docs/nerve-centre/dotdigital", destination: "https://docs.vortexiq.ai/nerve-centre/kpi-cards/dotdigital", permanent: true },
      { source: "/docs/nerve-centre/google-ads", destination: "https://docs.vortexiq.ai/nerve-centre/kpi-cards/google-ads", permanent: true },
      { source: "/docs/nerve-centre/google-analytics", destination: "https://docs.vortexiq.ai/nerve-centre/kpi-cards/google-analytics", permanent: true },
      { source: "/docs/nerve-centre/paypal", destination: "https://docs.vortexiq.ai/nerve-centre/kpi-cards/paypal", permanent: true },
      { source: "/docs/nerve-centre/shopify", destination: "https://docs.vortexiq.ai/nerve-centre/kpi-cards/shopify", permanent: true },
      { source: "/docs/nerve-centre/microsoft-teams", destination: "https://docs.vortexiq.ai/nerve-centre/kpi-cards/teams", permanent: true },
      { source: "/docs/nerve-centre/website", destination: "https://docs.vortexiq.ai/nerve-centre/kpi-cards/website-performance", permanent: true },
      { source: "/docs/nerve-centre/v2-dashboard", destination: "https://docs.vortexiq.ai/nerve-centre/overview", permanent: true },
      { source: "/docs/nerve-centre/store-health", destination: "https://docs.vortexiq.ai/nerve-centre/overview", permanent: true },
      { source: "/docs/nerve-centre/v2-roadmap", destination: "https://docs.vortexiq.ai/nerve-centre/overview", permanent: true },
      { source: "/docs/command-centre", destination: "https://docs.vortexiq.ai/nerve-centre/overview", permanent: true },
      { source: "/docs/agent-hub/agent-builder", destination: "https://docs.vortexiq.ai/actions/overview", permanent: true },
      { source: "/docs/agent-hub/vortex-memory", destination: "https://docs.vortexiq.ai/vortex-memory/overview", permanent: true },
      { source: "/docs/agent-hub/others/ask-viq-agent", destination: "https://docs.vortexiq.ai/ask-viq/overview", permanent: true },
      { source: "/docs/agent-hub/others/connector-agent", destination: "https://docs.vortexiq.ai/nerve-centre/connectors", permanent: true },
      { source: "/docs/agent-hub/others/brand-dna-agent", destination: "https://docs.vortexiq.ai/get-started/introduction", permanent: true },
      { source: "/docs/agent-hub/others/google-analytics-insights", destination: "https://docs.vortexiq.ai/vortex-mind/overview", permanent: true },
      { source: "/docs/agent-hub/others/google-ads-performance-agent", destination: "https://docs.vortexiq.ai/vortex-mind/overview", permanent: true },
      { source: "/docs/agent-hub/shopify/ai-growth-advisor-insights", destination: "https://docs.vortexiq.ai/vortex-mind/overview", permanent: true },
      { source: "/docs/agent-hub/shopify/ai-growth-advisor-agent", destination: "https://docs.vortexiq.ai/vortex-mind/overview", permanent: true },
      { source: "/docs/agent-hub/shopify/image-agent", destination: "https://docs.vortexiq.ai/actions/overview", permanent: true },
      { source: "/docs/agent-hub/adobe/image-optimisation-agent", destination: "https://docs.vortexiq.ai/actions/overview", permanent: true },
      { source: "/docs/agent-hub", destination: "https://docs.vortexiq.ai/actions/overview", permanent: true },
      { source: "/docs/governance/roles-permissions", destination: "https://docs.vortexiq.ai/platform/workspace-admin", permanent: true },
      { source: "/docs/governance/audit-trails", destination: "https://docs.vortexiq.ai/platform/workspace-admin", permanent: true },
      { source: "/docs/governance/guardrails", destination: "https://docs.vortexiq.ai/platform/workspace-admin", permanent: true },
      { source: "/docs/vortex-apps/stagingpro-bigcommerce/stagingpro-quick-setup", destination: "https://docs.vortexiq.ai/vortex-apps/staging-pro/setup-and-onboarding", permanent: true },
      { source: "/docs/vortex-apps/stagingpro-bigcommerce/selective-content-migration/selective-product-migration/faqs", destination: "https://docs.vortexiq.ai/vortex-apps/staging-pro/faqs-and-known-issues", permanent: true },
      { source: "/docs/vortex-apps/stagingpro-bigcommerce/selective-content-migration/selective-product-migration", destination: "https://docs.vortexiq.ai/vortex-apps/staging-pro/selective-product-migration", permanent: true },
      { source: "/docs/vortex-apps/stagingpro-bigcommerce/stagingpro-github-account-setup", destination: "https://docs.vortexiq.ai/vortex-apps/staging-pro/github-and-bitbucket", permanent: true },
      { source: "/docs/vortex-apps/stagingpro-bigcommerce/stagingpro-bundle-b2b-support", destination: "https://docs.vortexiq.ai/vortex-apps/staging-pro/b2b-coupons-and-data", permanent: true },
      { source: "/docs/vortex-apps/stagingpro-bigcommerce/stagingpro-github-deployment-workflow", destination: "https://docs.vortexiq.ai/vortex-apps/staging-pro/stagingpro-github-deployment-workflow", permanent: true },
      { source: "/docs/vortex-apps/stagingpro-bigcommerce/stagingpro-known-issues", destination: "https://docs.vortexiq.ai/vortex-apps/staging-pro/faqs-and-known-issues", permanent: true },
      { source: "/docs/vortex-apps/stagingpro-bigcommerce/stagingpro-setup-slack", destination: "https://docs.vortexiq.ai/vortex-apps/staging-pro/notifications-email-slack-teams", permanent: true },
      { source: "/docs/vortex-apps/stagingpro-bigcommerce/history-rollback", destination: "https://docs.vortexiq.ai/vortex-apps/staging-pro/history-and-rollback", permanent: true },
      { source: "/docs/vortex-apps/stagingpro-bigcommerce/settings", destination: "https://docs.vortexiq.ai/vortex-apps/staging-pro/settings-and-scheduling", permanent: true },
      { source: "/docs/vortex-apps/stagingpro-bigcommerce/stagingpro-pricing", destination: "/pricing", permanent: true },
      { source: "/docs/vortex-apps/stagingpro-bigcommerce/understanding-selective-content-migration", destination: "https://docs.vortexiq.ai/vortex-apps/staging-pro/selective-content-migration", permanent: true },
      { source: "/docs/vortex-apps/stagingpro-bigcommerce", destination: "https://docs.vortexiq.ai/vortex-apps/staging-pro", permanent: true },
      { source: "/docs/vortex-apps/backup-bigcommerce/viq-backup-pricing", destination: "/pricing", permanent: true },
      { source: "/docs/vortex-apps/backup-bigcommerce/understanding-restore-center", destination: "https://docs.vortexiq.ai/vortex-apps/rollback-pro/restore-center", permanent: true },
      { source: "/docs/vortex-apps/backup-bigcommerce/viq-backup-onboarding", destination: "https://docs.vortexiq.ai/vortex-apps/rollback-pro/setup-and-onboarding", permanent: true },
      { source: "/docs/vortex-apps/backup-bigcommerce/viq-backup-features-and-benefits", destination: "https://docs.vortexiq.ai/vortex-apps/rollback-pro/features-and-benefits", permanent: true },
      { source: "/docs/vortex-apps/backup-bigcommerce/app-pages", destination: "https://docs.vortexiq.ai/vortex-apps/rollback-pro/understanding-the-dashboard", permanent: true },
      { source: "/docs/vortex-apps/backup-bigcommerce", destination: "https://docs.vortexiq.ai/vortex-apps/rollback-pro", permanent: true },
      { source: "/docs/vortex-apps/staging-shopify/use-cases", destination: "https://docs.vortexiq.ai/vortex-apps/vortex-staging/features-and-benefits", permanent: true },
      { source: "/docs/vortex-apps/staging-shopify/welcome", destination: "https://docs.vortexiq.ai/vortex-apps/vortex-staging/welcome", permanent: true },
      { source: "/docs/vortex-apps/staging-shopify/field-mapping", destination: "https://docs.vortexiq.ai/vortex-apps/vortex-staging/field-mapping-and-data", permanent: true },
      { source: "/docs/vortex-apps/staging-shopify/staging-features-benefits", destination: "https://docs.vortexiq.ai/vortex-apps/vortex-staging/features-and-benefits", permanent: true },
      { source: "/docs/vortex-apps/staging-shopify/staging-onboarding", destination: "https://docs.vortexiq.ai/vortex-apps/vortex-staging/onboarding", permanent: true },
      { source: "/docs/vortex-apps/staging-shopify/what-we-migrate", destination: "https://docs.vortexiq.ai/vortex-apps/vortex-staging/bulk-content-migration", permanent: true },
      { source: "/docs/vortex-apps/staging-shopify/staging-known-issues", destination: "https://docs.vortexiq.ai/vortex-apps/vortex-staging/faqs-and-known-issues", permanent: true },
      { source: "/docs/vortex-apps/staging-shopify/app-pages", destination: "https://docs.vortexiq.ai/vortex-apps/vortex-staging/understanding-the-home-page", permanent: true },
      { source: "/docs/vortex-apps/backup-shopify/backup-pricing", destination: "/pricing", permanent: true },
      { source: "/docs/vortex-apps/backup-shopify/getting-started", destination: "https://docs.vortexiq.ai/vortex-apps/vortex-backup/getting-started", permanent: true },
      { source: "/docs/vortex-apps/backup-shopify", destination: "https://docs.vortexiq.ai/vortex-apps/vortex-backup", permanent: true },
      { source: "/docs/billing", destination: "/pricing", permanent: true },
      { source: "/docs/configuration", destination: "https://docs.vortexiq.ai/platform/settings", permanent: true },
      { source: "/docs/getting-started", destination: "https://docs.vortexiq.ai/get-started/introduction", permanent: true },
      { source: "/docs/ops/contact-support-form", destination: "/contact-us", permanent: true },

      { source: "/docs/:path*", destination: "https://docs.vortexiq.ai/", permanent: true },
      { source: "/docs", destination: "https://docs.vortexiq.ai/", permanent: true },
      { source: "/academy/:path*", destination: "https://docs.vortexiq.ai/", permanent: true },
      { source: "/academy", destination: "https://docs.vortexiq.ai/", permanent: true },
      { source: "/resources/help-centre", destination: "/resources/blog", permanent: true },
      { source: "/resources/customer-stories", destination: "/customer-stories", permanent: true },
      { source: "/resources", destination: "/resources/blog", permanent: true },
      { source: "/launch/summit-2025", destination: "/launch-event", permanent: true },
      { source: "/launch/test-video", destination: "/launch-event", permanent: true },

      // --- brand-dna: clicked domains keep their equity; the rest 410 via app/brand-dna route ---
      { source: "/brand-dna/theouai.co.uk", destination: "/free-audit", permanent: true },
      { source: "/brand-dna/allsaints.com", destination: "/free-audit", permanent: true },
      { source: "/brand-dna/kookai.co.uk", destination: "/free-audit", permanent: true },
      { source: "/brand-dna/asos.com", destination: "/free-audit", permanent: true },
      { source: "/brand-dna/coldwatercreek.com", destination: "/free-audit", permanent: true },
      { source: "/brand-dna/jadedldn.com", destination: "/free-audit", permanent: true },
      { source: "/brand-dna/onepeloton.co.uk", destination: "/free-audit", permanent: true },
      { source: "/brand-dna/fwwebb.com", destination: "/free-audit", permanent: true },

      // --- B. Legacy / backup / mockup / typo pages ---
      { source: "/old-home", destination: "/", permanent: true },
      { source: "/home-copy", destination: "/", permanent: true },
      { source: "/old-contact", destination: "/contact-us", permanent: true },
      { source: "/about-us-bkp", destination: "/about-us", permanent: true },
      { source: "/price-mockup", destination: "/pricing", permanent: true },
      { source: "/pricing-waste", destination: "/pricing", permanent: true },
      { source: "/pricing-old", destination: "/pricing", permanent: true },
      { source: "/aios-new", destination: "/ai-os-platform", permanent: true },
      { source: "/ai-fourmula", destination: "/ai-os-platform", permanent: true },

      // --- Retired standalone pages -> nearest live equivalent (were dumping to /) ---
      { source: "/ai-os-platform/video-demo-gallery", destination: "/product-tour", permanent: true },
      // /aistudio (Summit) is retired and replaced by /vortex-runtime. Inbound
      // redirects point straight at /vortex-runtime so they don't chain through
      // the now-deleted /aistudio page.
      { source: "/aistudio", destination: "/vortex-runtime", permanent: true },
      { source: "/ai-product-photography-for-ecommerce", destination: "/vortex-runtime", permanent: true },
      { source: "/image-ai-agent-cpg", destination: "/vortex-runtime", permanent: true },
      { source: "/image-ai-agent-fashion", destination: "/vortex-runtime", permanent: true },
      { source: "/page-speed-web-vitals", destination: "/ai-os-platform/nerve-centre", permanent: true },
      { source: "/vortex-mind-sample-report-contoso-fashion", destination: "/ai-os-platform/vortex-mind", permanent: true },
    ];
  },
};

export default nextConfig;
