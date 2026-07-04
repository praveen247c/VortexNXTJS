import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";
import { css, html } from "./content";

const TITLE = "Developers: Docs, API & Sandbox | Vortex IQ";

export const metadata: Metadata = {
  alternates: { canonical: "/developers" },
  title: TITLE,
  description:
    "Build on the AI Operating System for e-commerce. Full connector and API documentation is live at docs.vortexiq.ai. Request a sandbox, read the architecture and security model, and integrate with read-first, approval-gated connectors.",
  openGraph: pageOpenGraph({
    title: TITLE,
    description:
      "Documentation is live at docs.vortexiq.ai. Request sandbox access, review the architecture and security model, and build with read-first, approval-gated, reversible connectors.",
    path: "/developers",
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
