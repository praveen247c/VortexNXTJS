/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: import.meta.dirname,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
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
      { source: "/vortex-apps", destination: "/ai-os-platform/vortex-apps", permanent: true },
      { source: "/vortex-memory", destination: "/ai-os-platform/vortex-memory", permanent: true },
      { source: "/ask-viq", destination: "/ai-os-platform/ask-viq", permanent: true },
      { source: "/vortex-agents", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/ai-os-platform/actions", destination: "/ai-os-platform/vortex-agents", permanent: true },
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
      { source: "/agents/site-management/backup-shopify", destination: "/ai-os-platform/vortex-apps", permanent: true },
      { source: "/agents/site-management/backup-bigcommerce", destination: "/ai-os-platform/vortex-apps", permanent: true },
      { source: "/agents/insights-monitoring/:path*", destination: "/ai-os-platform/nerve-centre", permanent: true },
      { source: "/agents/seo-optimization/:path*", destination: "/solutions/seo-geo", permanent: true },
      { source: "/agents/:path*", destination: "/ai-os-platform/vortex-agents", permanent: true },
      { source: "/vortex-apps/staging-shopify", destination: "/stagingpro-to-ai-os", permanent: true },

      // --- Old /integrations/* and /solution/* -> topical equivalents ---
      { source: "/integrations/:path*", destination: "/solutions/integrations", permanent: true },
      { source: "/solution/insights-monitoring", destination: "/ai-os-platform/nerve-centre", permanent: true },
      { source: "/solution/site-management-reliability", destination: "/ai-os-platform/vortex-apps", permanent: true },
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
      { source: "/ai-product-photography-for-ecommerce", destination: "/aistudio", permanent: true },
      { source: "/image-ai-agent-cpg", destination: "/aistudio", permanent: true },
      { source: "/image-ai-agent-fashion", destination: "/aistudio", permanent: true },
      { source: "/page-speed-web-vitals", destination: "/ai-os-platform/nerve-centre", permanent: true },
      { source: "/vortex-mind-sample-report-contoso-fashion", destination: "/ai-os-platform/vortex-mind", permanent: true },
    ];
  },
};

export default nextConfig;
