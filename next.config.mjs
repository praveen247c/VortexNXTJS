/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: import.meta.dirname,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  // 301 map from old URL structure to the new one. Add one entry per changed
  // old path (pull the full list from the current Search Console "Pages" report
  // before launch). The .vercel.app -> vortexiq.ai redirect is configured in the
  // Vercel dashboard (set vortexiq.ai as the production domain), not here.
  async redirects() {
    return [
      { source: "/blog/:slug", destination: "/resources/blog/:slug", permanent: true },
      { source: "/blog", destination: "/resources/blog", permanent: true },
      // Permanently removed pages -> homepage.
      { source: "/ai-os-platform/agent-hub", destination: "/", permanent: true },
      { source: "/ai-os-platform/video-demo-gallery", destination: "/", permanent: true },
      { source: "/agent-hub", destination: "/", permanent: true },
      { source: "/resources/customer-stories", destination: "/", permanent: true },
      { source: "/agents/site-management/backup-shopify", destination: "/", permanent: true },
      { source: "/agents/site-management/backup-bigcommerce", destination: "/", permanent: true },
      { source: "/agents/site-management/staging-magento", destination: "/", permanent: true },
      { source: "/agents/site-management/staging-shopify", destination: "/", permanent: true },
      { source: "/agents/site-management/stagingpro-bigcommerce", destination: "/", permanent: true },
      { source: "/agents/insights-monitoring/ecommerce-insights", destination: "/", permanent: true },
      { source: "/agents/insights-monitoring/performance-monitoring", destination: "/", permanent: true },
      { source: "/agents/seo-optimization/product-seo-shopify", destination: "/", permanent: true },
      { source: "/agents/seo-optimization/product-seo-bigcommerce", destination: "/", permanent: true },
      { source: "/agents/seo-optimization/product-seo-magento", destination: "/", permanent: true },
      { source: "/agents/seo-optimization/image-optimizer", destination: "/", permanent: true },
      { source: "/integrations/shopify", destination: "/", permanent: true },
      { source: "/integrations/bigcommerce", destination: "/", permanent: true },
      { source: "/integrations/bigcommerce-staging", destination: "/", permanent: true },
      { source: "/integrations/magento-adobe-commerce", destination: "/", permanent: true },
      { source: "/integrations/google-analytics", destination: "/", permanent: true },
      { source: "/integrations/google-ads", destination: "/", permanent: true },
      { source: "/integrations/dotdigital", destination: "/", permanent: true },
      { source: "/outcome-driven-agents/site-optimisation", destination: "/", permanent: true },
      { source: "/outcome-driven-agents/operations-reliability", destination: "/", permanent: true },
      { source: "/vortex-apps/staging-shopify", destination: "/", permanent: true },
      { source: "/solution/insights-monitoring", destination: "/", permanent: true },
      { source: "/solution/site-management-reliability", destination: "/", permanent: true },
      { source: "/solution/seo-performance-optimisation", destination: "/", permanent: true },
      { source: "/ai-product-photography-for-ecommerce", destination: "/", permanent: true },
      { source: "/page-speed-web-vitals", destination: "/", permanent: true },
      { source: "/vortex-mind-sample-report-contoso-fashion", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
