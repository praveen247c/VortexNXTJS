import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Vortex Agents: turn AI findings into work that ships | Vortex IQ",
  description: "Vortex Agents turns AI-ranked findings into ranked Kanban work with owners, due dates and rules. Approval-gated, reversible, synced to Jira, Asana and Linear.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
