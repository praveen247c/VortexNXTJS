import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Enterprise AI Operations for Ecommerce | Vortex IQ",
  description:
    "The committee-ready hub for mid-market and enterprise merchants: multi-store governance, security and AI/LLM data controls, integration depth, and an honest build-vs-buy. Detect, explain and safely execute across your whole stack, approval-gated and reversible.",
  openGraph: {
    description:
      "Governance, security and a forwardable evaluation pack for your buying committee. Vortex IQ is the cross-stack operating layer: approval-gated changes, staging-first, one-click rollback, full audit trail.",
  },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
