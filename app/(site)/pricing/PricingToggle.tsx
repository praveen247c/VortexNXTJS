"use client";

import { useEffect } from "react";

// Re-implements the inline currency/billing toggle from pricing.html.
// The ported markup uses inline onclick="setBilling(...)"/"setCurrency(...)",
// so we expose those on window and run an initial render once mounted.
type Currency = "USD" | "GBP";
type Billing = "monthly" | "annual";

// USD and GBP show the same figures (symbol only differs).
const SYM: Record<Currency, string> = { USD: "$", GBP: "£" };
// Monthly price per plan.
const MONTHLY: Record<string, number> = { Foundation: 499, Growth: 1499, Enterprise: 3999, OmniChannel: 5499 };
// Annual price per plan — full yearly amount, shown only in the small print.
const ANNUAL: Record<string, number> = { Foundation: 4790, Growth: 14390, Enterprise: 38390, OmniChannel: 52790 };
// Annual billing shown as an effective per-month figure (ANNUAL / 12), the headline price on the annual tab.
const ANNUAL_PERMO: Record<string, number> = { Foundation: 399, Growth: 1199, Enterprise: 3199, OmniChannel: 4399 };
// Yearly saving vs paying monthly (Monthly x 12 - Annual), ~20%.
const SAVING: Record<string, number> = { Foundation: 1198, Growth: 3598, Enterprise: 9598, OmniChannel: 13198 };

export default function PricingToggle({ currency = "USD" }: { currency?: Currency }) {
  useEffect(() => {
    const state: { currency: Currency; billing: Billing } = {
      currency,
      billing: "annual",
    };
    const fmt = (n: number) => n.toLocaleString("en-US");

    function render() {
      const sym = SYM[state.currency];
      const annual = state.billing === "annual";
      document.querySelectorAll<HTMLElement>(".price[data-plan]").forEach((el) => {
        const plan = el.dataset.plan as string;
        // Always lead with a per-month figure: effective monthly on annual, true monthly otherwise.
        const val = annual ? ANNUAL_PERMO[plan] : MONTHLY[plan];
        el.textContent = sym + fmt(val);
        const per = el.parentElement?.querySelector<HTMLElement>(".per");
        if (per) per.textContent = "/mo";
        // Small print: annual moves the full yearly total + saving here so the headline stays a small number.
        const billed = el.parentElement?.nextElementSibling as HTMLElement | null;
        if (billed?.hasAttribute("data-billed")) {
          billed.textContent = annual
            ? `Billed annually at ${sym}${fmt(ANNUAL[plan])} · Save ${sym}${fmt(SAVING[plan])} a year`
            : "Billed monthly";
        }
      });
    }

    const w = window as unknown as {
      setBilling?: (b: Billing) => void;
      setCurrency?: (c: Currency) => void;
    };
    w.setBilling = (b: Billing) => {
      state.billing = b;
      document.getElementById("bMonthly")?.classList.toggle("on", b === "monthly");
      document.getElementById("bAnnual")?.classList.toggle("on", b === "annual");
      render();
    };
    w.setCurrency = (c: Currency) => {
      state.currency = c;
      (["USD", "GBP"] as Currency[]).forEach((x) =>
        document.getElementById("c" + x)?.classList.toggle("on", x === c)
      );
      render();
    };

    render();
    return () => {
      delete w.setBilling;
      delete w.setCurrency;
    };
  }, [currency]);

  return null;
}
