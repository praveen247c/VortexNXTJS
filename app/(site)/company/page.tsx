import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "/company" },
  title: "Vortex IQ: Company, Team and Investors | Vortex IQ",
  description: "Vortex IQ is the AI Operating System for e-commerce. Meet the company, the founders, our investors Sure Valley Ventures and Techstars, and the traction so far.",
  openGraph: { description: "Vortex IQ is the AI Operating System for e-commerce. Meet the company, the founders, our investors, and the traction so far." },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
