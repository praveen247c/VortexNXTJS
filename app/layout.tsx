import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL } from "@/lib/site";

const DEFAULT_TITLE = "The AI Operating System for E-Commerce · Vortex IQ";
const DEFAULT_DESCRIPTION =
  "Modern commerce leaks revenue in the gaps between your tools. Vortex IQ watches every channel, explains what broke in plain English, and fixes it safely on live revenue.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // No title.template: per-page titles already carry their own " | Vortex IQ"
  // suffix, so a template would double it.
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Vortex IQ",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "Vortex IQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: "The AI Operating System for e-commerce. Detect. Explain. Fix.",
    images: ["/og/default.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
      {/* HubSpot tracking code (portal 24385350) — site-wide analytics loader */}
      <Script
        id="hs-script-loader"
        src="//js.hs-scripts.com/24385350.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
