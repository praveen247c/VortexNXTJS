import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";
import { css, html } from "./content";

const TITLE = "Vortex IQ Brochure | The AI Operating System for E-Commerce";

export const metadata: Metadata = {
  title: TITLE,
  description:
    "Read the Vortex IQ brochure online: the platform, the six pillars, SEO & GEO, security, proof and pricing. Detect what is wrong, understand why, fix it safely.",
  alternates: { canonical: "/join-viq/brochure" },
  openGraph: pageOpenGraph({
    title: TITLE,
    description:
      "The Vortex IQ brochure, online: the six pillars, SEO & GEO, safety and proof, in one read.",
    path: "/join-viq/brochure",
  }),
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="brochure-read-main">{/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </>
  );
}
