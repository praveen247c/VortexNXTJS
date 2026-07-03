import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "/about-us" },
  title: "About Us | The Team Behind the AI E-Commerce OS | Vortex IQ",
  description: "Meet the team behind Vortex IQ, the AI Operating System for e-commerce. We give every merchant proactive AI agents that find issues and act on them safely.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
