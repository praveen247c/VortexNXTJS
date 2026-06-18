import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "About Us | The Team Behind the AI Ecommerce OS | Vortex IQ",
  description: "The world is drowning in data but starved for action. Our mission is to empower every merchant, agency, and developer with proactive AI agents that don't just find insights, they act on them.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
