import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "AI Solutions for Ecommerce Merchants &amp; Brands | Vortex IQ",
  description: "The world's first AI Operating System designed to detect revenue leaks and automate operations before your customers ever notice. Stop fighting fires. Start commanding.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
