"use client";

import { useEffect } from "react";

// Re-implements the inline currency/billing toggle from pricing.html.
// The ported markup uses inline onclick="setBilling(...)"/"setCurrency(...)",
// so we expose those on window and run an initial render once mounted.
type Currency = "USD" | "GBP" | "EUR";
type Billing = "monthly" | "annual";

const PRICES: Record<Currency, { sym: string; [plan: string]: number | string }> = {
  USD: { sym: "$", Foundation: 499, Growth: 1499, Enterprise: 3999, OmniChannel: 5499 },
  GBP: { sym: "£", Foundation: 399, Growth: 1199, Enterprise: 3199, OmniChannel: 4399 },
  EUR: { sym: "€", Foundation: 469, Growth: 1399, Enterprise: 3699, OmniChannel: 5099 },
};

export default function PricingToggle() {
  useEffect(() => {
    const state: { currency: Currency; billing: Billing } = {
      currency: "USD",
      billing: "annual",
    };
    const fmt = (n: number) => n.toLocaleString("en-US");

    function render() {
      const c = PRICES[state.currency];
      document.querySelectorAll<HTMLElement>(".price[data-plan]").forEach((el) => {
        const plan = el.dataset.plan as string;
        const base = c[plan] as number;
        const val = state.billing === "annual" ? Math.round(base * 0.8) : base;
        el.textContent = c.sym + fmt(val);
      });
      const note = state.billing === "annual" ? "billed annually" : "billed monthly";
      document.querySelectorAll<HTMLElement>("[data-billed]").forEach((el) => {
        el.textContent = note;
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
      (["USD", "GBP", "EUR"] as Currency[]).forEach((x) =>
        document.getElementById("c" + x)?.classList.toggle("on", x === c)
      );
      render();
    };

    render();
    return () => {
      delete w.setBilling;
      delete w.setCurrency;
    };
  }, []);

  return null;
}
