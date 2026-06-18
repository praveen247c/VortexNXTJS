import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Nerve Centre — Real-Time Ecommerce Monitoring & AI Anomaly Detection | Vortex IQ",
  description: "Nerve Centre is your always-on detection layer. It watches website performance, platform health, marketing spend, and payments, then surfaces incidents with context, not noise.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
