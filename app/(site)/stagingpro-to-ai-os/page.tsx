import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";
import { css, html } from "./content";

const TITLE = "From StagingPro to the Full AI OS | Vortex IQ";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "You already trust Vortex IQ for staging and rollback. See the upgrade path to the full AI Operating System: detection, plain-English diagnosis, and ranked approval-gated fixes, with no rip-and-replace.",
  alternates: { canonical: "/stagingpro-to-ai-os" },
  openGraph: pageOpenGraph({
    title: TITLE,
    description:
      "The upgrade path from StagingPro to the full AI Operating System for e-commerce, built on the safety you already trust.",
    path: "/stagingpro-to-ai-os",
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
