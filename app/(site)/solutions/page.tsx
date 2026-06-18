import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Ecommerce AI Solutions by Role | For Merchants &amp; Agencies | Vortex IQ",
  description: "Vortex IQ is the AI Operating System for commerce. Move from signal to insight to safe action across every app in your stack. No dashboard fatigue, no 'someone should look at this' moments.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
