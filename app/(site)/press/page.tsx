import type { Metadata } from "next";
import { pageOpenGraph } from "@/lib/seo";
import { css, html } from "./content";

const TITLE = "Press & Newsroom | Vortex IQ";

export const metadata: Metadata = {
  alternates: { canonical: "/press" },
  title: TITLE,
  description:
    "News, coverage and media assets for Vortex IQ, the AI Operating System for e-commerce. Recognition, downloadable media kit, approved quotes, and a press contact.",
  openGraph: pageOpenGraph({
    title: TITLE,
    description:
      "News, coverage and media assets for Vortex IQ, the AI Operating System for e-commerce.",
    path: "/press",
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
