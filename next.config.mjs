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
    ];
  },
};

export default nextConfig;
