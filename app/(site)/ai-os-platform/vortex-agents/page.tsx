import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Vortex Agents: turn AI findings into work that ships | Vortex IQ",
  description: "Vortex Agents turn AI-ranked findings into owned work with deadlines and approval gates. Reversible, staging-first, and synced two ways with Jira, Asana and Linear.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
