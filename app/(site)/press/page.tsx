import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Press & Newsroom | Vortex IQ",
  description:
    "News, coverage and media assets for Vortex IQ, the AI Operating System for e-commerce. Recognition, downloadable media kit, approved quotes, and a press contact.",
  openGraph: {
    description:
      "News, coverage and media assets for Vortex IQ, the AI Operating System for e-commerce.",
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
