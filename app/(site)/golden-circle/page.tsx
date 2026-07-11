import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "/golden-circle" },
  title: "Vortex IQ: The operating system that catches revenue leaks before your customers do",
  description: "Vortex IQ is the AI Operating System for e-commerce: it watches every channel, explains what broke in plain English, and fixes it safely on live revenue.",
  // Retired from the funnel (ICP gap analysis / action plan 04 Jul 26): keep the
  // URL alive for anyone holding a link, but drop it from search indexes.
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
