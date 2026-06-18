/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: import.meta.dirname,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.prod.website-files.com" },
    ],
  },
};

export default nextConfig;
