import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "AI Solutions for Ecommerce Agencies | Vortex IQ",
  description: "Scale your portfolio, not your payroll. Vortex IQ turns your agency into a proactive operations partner, with automated monitoring, reporting, and agentic workflows across every client.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
