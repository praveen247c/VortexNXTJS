import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "/customer-stories" },
  title: "Customer Stories & Case Studies | Vortex IQ",
  description: "See real results: how e-commerce merchants and agencies cut development time, reduce risk, and grow revenue with Vortex IQ. Case studies from brands around the world.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
