import type { Metadata } from "next";
import Script from "next/script";
import { pageOpenGraph } from "@/lib/seo";
import { css, html } from "./content";

const TITLE = "Free Store Health Check | Vortex IQ";

export const metadata: Metadata = {
  alternates: { canonical: "/free-audit" },
  title: TITLE,
  description: "Get a free, verified store health check. Enter your URL and we email a plain-English, revenue-ranked findings report. SEO, UX, brand and broken-element checks.",
  openGraph: pageOpenGraph({
    title: TITLE,
    description: "See what is leaking revenue on your store. A free, verified health check, in plain English. Enter your URL and work email and we email the report back.",
    path: "/free-audit",
  }),
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
      {/* HubSpot embed loader — renders the form into the .hs-form-frame div above. */}
      <Script src="https://js.hsforms.net/forms/embed/24385350.js" strategy="afterInteractive" />
    </>
  );
}
