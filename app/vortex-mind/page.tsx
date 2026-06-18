import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Vortex Mind — AI Ecommerce Analytics & Diagnostic Engine | Vortex IQ",
  description: "Vortex Mind turns messy signals into a clear action plan. It spots bottlenecks, benchmarks competitors, and produces recommendations your team can actually execute.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
