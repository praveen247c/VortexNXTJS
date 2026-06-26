import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Whole-Brand SEO and GEO for Ecommerce | Vortex IQ",
  description: "Whole-brand SEO and GEO for ecommerce, run to best practice end to end: research, technical fixes, structured data and on-brand content across your whole site. You approve the tone-of-voice and the publish; everything ships staging-first and reversible.",
  openGraph: { description: "Whole-brand SEO and GEO, run to the world's best-practice standard: more organic traffic, higher rankings, and citations in AI answer engines. A human approves the voice up front and the publish at the end." },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
