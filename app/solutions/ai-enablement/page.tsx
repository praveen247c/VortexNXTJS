import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "AI Enablement Services | Vortex IQ Platform",
  description: "Launch your own AI agents. You have the platform, the customers, and the developers. We provide the AI agentic infrastructure to build, deploy, and scale a bespoke ecosystem of AI agents under your own brand.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
