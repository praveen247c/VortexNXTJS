import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";
import { css, html } from "./content";

const TITLE = "Get started in 3 steps | Vortex IQ";

export const metadata: Metadata = {
  alternates: { canonical: "/get-started" },
  title: TITLE,
  description: "Connect your store in about 10 minutes, no developer needed. See your first revenue-ranked findings, then approve a fix that ships staging-first and reversible.",
  openGraph: pageOpenGraph({
    title: TITLE,
    description: "Connect your store in about 10 minutes. See revenue-ranked findings, then approve a fix that ships staging-first and is reversible in one click.",
    path: "/get-started",
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
