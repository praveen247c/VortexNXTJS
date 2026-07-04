import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";
import { css, html } from "./content";

const TITLE = "Vortex IQ: Company, Team and Investors | Vortex IQ";

export const metadata: Metadata = {
  alternates: { canonical: "/company" },
  title: TITLE,
  description: "Vortex IQ is the AI Operating System for e-commerce. Meet the company, the founders, our investors Sure Valley Ventures and Techstars, and the traction so far.",
  openGraph: pageOpenGraph({
    title: TITLE,
    description: "Vortex IQ is the AI Operating System for e-commerce. Meet the company, the founders, our investors, and the traction so far.",
    path: "/company",
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
