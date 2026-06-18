import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Actions — Turn Ecommerce Findings Into Work That Ships | Vortex IQ",
  description: "Actions is the act step of your AI OS. Findings land as tracked work, ranked by revenue at stake, with owners, approval gates, staging-first safety, and two-way Jira, Asana and Linear sync.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
