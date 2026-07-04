import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";
import { css, html } from "./content";

const TITLE = "Enterprise AI Operations for Ecommerce | Vortex IQ";

export const metadata: Metadata = {
  alternates: { canonical: "/solutions/enterprise" },
  title: TITLE,
  description:
    "The committee-ready hub for mid-market and enterprise merchants: multi-store governance, security and AI/LLM data controls, integration depth, and an honest build-vs-buy. Detect, explain and safely execute across your whole stack, approval-gated and reversible.",
  openGraph: pageOpenGraph({
    title: TITLE,
    description:
      "Governance, security and a forwardable evaluation pack for your buying committee. Vortex IQ is the cross-stack operating layer: approval-gated changes, staging-first, one-click rollback, full audit trail.",
    path: "/solutions/enterprise",
  }),
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
