import type { Metadata } from "next";
import { css, html } from "./content";
import PricingToggle from "./PricingToggle";

export const metadata: Metadata = {
  title: "Pricing — From Audits to AI-Powered Execution | Vortex IQ",
  description: "Choose the operating layer that fits your growth stage. Foundation, Growth, Enterprise and OmniChannel plans, billed monthly or annually, with a 20% annual saving.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
      <PricingToggle />
    </>
  );
}
