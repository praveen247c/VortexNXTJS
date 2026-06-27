"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

// Signed-off, sourced multipliers (conservative). See the "How we calculate this" panel.
const AUTOMATABLE = { low: 0.4, high: 0.65 }; // McKinsey Global Institute
const RATE: Record<string, number> = { GBP: 25, USD: 50 }; // BLS/ECEC (US), ONS/GOV.UK (UK)
const CFR = { low: 0.05, high: 0.15 }; // DORA State of DevOps 2024
const ORGANIC = { low: 0.25, high: 0.35 }; // Wolfgang Digital KPI Report
const SYM: Record<string, string> = { GBP: "£", USD: "$" };

const PLATFORMS = ["BigCommerce", "Shopify", "Adobe Commerce", "WooCommerce", "Other"];

const DEFAULTS = { cur: "GBP", gmv: 100000, platform: "BigCommerce", hours: 8, deploys: 4, deployCost: 2000, seoIssues: 25 };
type Inputs = typeof DEFAULTS;

function fmt(n: number): string {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function money(n: number, cur: string): string {
  return SYM[cur] + fmt(n);
}
function compute(c: Inputs) {
  const rate = RATE[c.cur];
  const hoursLow = c.hours * AUTOMATABLE.low * 52;
  const hoursHigh = c.hours * AUTOMATABLE.high * 52;
  const deploysYr = c.deploys * 12;
  const annual = c.gmv * 12;
  return {
    cur: c.cur,
    seoIssues: c.seoIssues,
    hoursLow,
    hoursHigh,
    moneyLow: hoursLow * rate,
    moneyHigh: hoursHigh * rate,
    protLow: deploysYr * CFR.low * c.deployCost,
    protHigh: deploysYr * CFR.high * c.deployCost,
    orgLow: annual * ORGANIC.low,
    orgHigh: annual * ORGANIC.high,
  };
}

export default function RoiCalculator() {
  // Draft inputs (what the user is editing).
  const [cur, setCur] = useState<"GBP" | "USD">("GBP");
  const [gmv, setGmv] = useState(DEFAULTS.gmv);
  const [platform, setPlatform] = useState(DEFAULTS.platform);
  const [hours, setHours] = useState(DEFAULTS.hours);
  const [deploys, setDeploys] = useState(DEFAULTS.deploys);
  const [deployCost, setDeployCost] = useState(DEFAULTS.deployCost);
  const [seoIssues, setSeoIssues] = useState(DEFAULTS.seoIssues);

  const draft: Inputs = { cur, gmv, platform, hours, deploys, deployCost, seoIssues };

  // Committed inputs the displayed range is computed from. Updated on Recalculate.
  const [calc, setCalc] = useState<Inputs>(DEFAULTS);
  const r = useMemo(() => compute(calc), [calc]);

  const dirty =
    cur !== calc.cur || gmv !== calc.gmv || platform !== calc.platform ||
    hours !== calc.hours || deploys !== calc.deploys ||
    deployCost !== calc.deployCost || seoIssues !== calc.seoIssues;

  function recalculate() {
    setCalc(draft);
  }

  return (
    <div className="roi-calc">
      {/* INPUTS */}
      <div className="roi-inputs">
        <div className="roi-cur">
          <button type="button" className={cur === "GBP" ? "on" : ""} onClick={() => setCur("GBP")}>GBP {"£"}</button>
          <button type="button" className={cur === "USD" ? "on" : ""} onClick={() => setCur("USD")}>USD $</button>
        </div>

        <label className="roi-field">
          <span>Monthly revenue (GMV)</span>
          <div className="roi-money-in">
            <i>{SYM[cur]}</i>
            <input type="number" min={0} value={gmv} onChange={(e) => setGmv(Math.max(0, +e.target.value || 0))} />
          </div>
        </label>

        <label className="roi-field">
          <span>Platform</span>
          <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
            {PLATFORMS.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </label>

        <label className="roi-field">
          <span>Hours/week on manual reporting</span>
          <input type="number" min={0} value={hours} onChange={(e) => setHours(Math.max(0, +e.target.value || 0))} />
        </label>

        <label className="roi-field">
          <span>Deploys / store changes per month</span>
          <input type="number" min={0} value={deploys} onChange={(e) => setDeploys(Math.max(0, +e.target.value || 0))} />
        </label>

        <label className="roi-field">
          <span>Avg cost of a failed deploy</span>
          <div className="roi-money-in">
            <i>{SYM[cur]}</i>
            <input type="number" min={0} value={deployCost} onChange={(e) => setDeployCost(Math.max(0, +e.target.value || 0))} />
          </div>
        </label>

        <label className="roi-field">
          <span>Open SEO issues (estimate)</span>
          <input type="number" min={0} value={seoIssues} onChange={(e) => setSeoIssues(Math.max(0, +e.target.value || 0))} />
        </label>

        <button type="button" className={`btn roi-recalc${dirty ? " is-dirty" : ""}`} onClick={recalculate}>
          Recalculate
        </button>
        {dirty ? (
          <p className="roi-recalc-hint">Inputs changed &middot; press Recalculate to update your range</p>
        ) : null}
      </div>

      {/* OUTPUTS */}
      <div className="roi-outputs">
        <div className="roi-out-head">
          <span className="roi-out-eyebrow">Your illustrative annual range</span>
          <span className="roi-out-note">Conservative estimate. We verify the real numbers on your store.</span>
        </div>

        <div className="roi-out-grid">
          <div className="roi-out-card">
            <h4>Hours saved</h4>
            <div className="roi-out-val">{fmt(r.hoursLow)}&ndash;{fmt(r.hoursHigh)} <small>hrs/yr</small></div>
            <p className="roi-out-sub">{money(r.moneyLow, r.cur)}&ndash;{money(r.moneyHigh, r.cur)} of analyst time, off manual reporting</p>
          </div>
          <div className="roi-out-card roi-out-card--brand">
            <h4>Revenue protected</h4>
            <div className="roi-out-val">{money(r.protLow, r.cur)}&ndash;{money(r.protHigh, r.cur)}<small>/yr</small></div>
            <p className="roi-out-sub">Downside from failed changes that staging-first + one-click rollback is built to catch</p>
          </div>
          <div className="roi-out-card">
            <h4>Organic-influenced revenue</h4>
            <div className="roi-out-val">{money(r.orgLow, r.cur)}&ndash;{money(r.orgHigh, r.cur)}<small>/yr</small></div>
            <p className="roi-out-sub">Revenue organic search influences, where your {r.seoIssues} open issues sit. The audit sizes the recoverable share.</p>
          </div>
        </div>

        {/* CAPTURE */}
        <div className="roi-form">
          <p className="roi-form-lede">Want this range by email, or verified on your store? Add your details and we will send it over.</p>
          {/* HubSpot ROI form */}
          <div className="hs-form-frame" data-region="na1" data-form-id="019f1e4e-3fab-4e4a-b079-4f1cc641cab0" data-portal-id="24385350" />
          <Link className="btn btn--ghost" href="/free-audit" style={{ marginTop: "1rem" }}>Or run a free audit now &rarr;</Link>
        </div>
      </div>
    </div>
  );
}
