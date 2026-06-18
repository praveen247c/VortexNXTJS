import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "AI Solutions for Technology Partners | Vortex IQ",
  description: "Make your platform agentic in weeks, not years. The complete Infrastructure-as-a-Service for building, deploying, and monetising bespoke AI agents for your customers.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
