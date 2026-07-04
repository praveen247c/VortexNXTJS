import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";
import { css, html } from "./content";

const TITLE = "Limits & Guardrails: What Vortex IQ Won't Do | Vortex IQ";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "An honest statement of what the Vortex IQ agent will never do without your approval, who the product is and isn't for, and the limitations we are still working on.",
  alternates: { canonical: "/trust/limits" },
  openGraph: pageOpenGraph({
    title: TITLE,
    description:
      "What the Vortex IQ agent will never do without your approval, who it is and isn't for, and our known limitations.",
    path: "/trust/limits",
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
