import type { Metadata } from "next";
import { headers } from "next/headers";
import { css, html } from "./content";
import PricingToggle from "./PricingToggle";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "Pricing: From Audits to AI-Powered Execution | Vortex IQ",
  description: "Vortex IQ pricing: Foundation, Growth, Enterprise and OmniChannel plans for e-commerce, billed monthly or annually with a 20% annual saving. Choose your layer.",
};

// Geo-based currency: UK visitors see GBP (£), everyone else sees USD ($).
// Figures are identical across currencies; only the symbol differs. The manual
// currency switch is removed so a visitor only ever sees their own currency.
export default async function Page() {
  const country = (await headers()).get("x-vercel-ip-country") || "";
  const currency: "USD" | "GBP" = country === "GB" ? "GBP" : "USD";
  const sym = currency === "GBP" ? "£" : "$";
  const localized = html
    .replace(/[$£](\d[\d,]*)/g, (_m, n) => sym + n)
    .replace(/<div class="curr"[\s\S]*?<\/div>/, "");
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: localized }} />
      <PricingToggle currency={currency} />
    </>
  );
}
