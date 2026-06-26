import type { Metadata } from "next";
import Script from "next/script";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Free Store Health Check | Vortex IQ",
  description: "Get a free, verified store health check. Enter your URL and we email a plain-English, revenue-ranked findings report. SEO, UX, brand and broken-element checks.",
  openGraph: { description: "See what is leaking revenue on your store. A free, verified health check, in plain English. Enter your URL and work email and we email the report back." },
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
