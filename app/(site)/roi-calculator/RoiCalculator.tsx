"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

// Signed-off, sourced multipliers (conservative). See the "How we calculate this" panel.
const AUTOMATABLE = { low: 0.4, high: 0.65 }; // McKinsey Global Institute
const RATE = { GBP: 25, USD: 50 }; // BLS/ECEC (US), ONS/GOV.UK (UK), fully loaded
const CFR = { low: 0.05, high: 0.15 }; // DORA State of DevOps 2024
const ORGANIC = { low: 0.25, high: 0.35 }; // Wolfgang Digital KPI Report
const SYM: Record<string, string> = { GBP: "£", USD: "$" };

const PLATFORMS = ["BigCommerce", "Shopify", "Adobe Commerce", "WooCommerce", "Other"];

function fmt(n: number): string {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function money(n: number, cur: string): string {
  return SYM[cur] + fmt(n);
}

export default function RoiCalculator() {
  const [cur, setCur] = useState<"GBP" | "USD">("GBP");
  const [gmv, setGmv] = useState(100000);
  const [platform, setPlatform] = useState("BigCommerce");
  const [hours, setHours] = useState(8);
  const [deploys, setDeploys] = useState(4);
  const [deployCost, setDeployCost] = useState(2000);
  const [seoIssues, setSeoIssues] = useState(25);

  const r = useMemo(() => {
    const rate = RATE[cur];
    const hoursLow = hours * AUTOMATABLE.low * 52;
    const hoursHigh = hours * AUTOMATABLE.high * 52;
    const deploysYr = deploys * 12;
    const annual = gmv * 12;
    return {
      hoursLow,
      hoursHigh,
      moneyLow: hoursLow * rate,
      moneyHigh: hoursHigh * rate,
      protLow: deploysYr * CFR.low * deployCost,
      protHigh: deploysYr * CFR.high * deployCost,
      orgLow: annual * ORGANIC.low,
      orgHigh: annual * ORGANIC.high,
    };
  }, [cur, gmv, hours, deploys, deployCost]);

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
            <p className="roi-out-sub">{money(r.moneyLow, cur)}&ndash;{money(r.moneyHigh, cur)} of analyst time, off manual reporting</p>
          </div>
          <div className="roi-out-card roi-out-card--brand">
            <h4>Revenue protected</h4>
            <div className="roi-out-val">{money(r.protLow, cur)}&ndash;{money(r.protHigh, cur)}<small>/yr</small></div>
            <p className="roi-out-sub">Downside from failed changes that staging-first + one-click rollback is built to catch</p>
          </div>
          <div className="roi-out-card">
            <h4>Organic-influenced revenue</h4>
            <div className="roi-out-val">{money(r.orgLow, cur)}&ndash;{money(r.orgHigh, cur)}<small>/yr</small></div>
            <p className="roi-out-sub">Revenue organic search influences, where your {seoIssues} open issues sit. The audit sizes the recoverable share.</p>
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
