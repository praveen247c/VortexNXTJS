"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

// Defaults represent what it would take a merchant's IN-HOUSE team to do the work.
// Conservative, editable, and documented in the "How we calculate this" panel.
const RATE: Record<string, number> = { GBP: 25, USD: 50 }; // loaded analyst (BLS/ECEC, ONS/GOV.UK)
const CONTENT_HRS = { low: 3, high: 5 }; // in-house hours to produce one optimised article (Orbit Media)
const AUDIT_HRS = { low: 1, high: 2 }; // in-house hours per connector per month for audit/QA
const REPORT_FACTOR = { low: 0.7, high: 1 }; // share of weekly reporting hours Vortex IQ takes off the team
const CFR = { low: 0.05, high: 0.15 }; // DORA State of DevOps 2024
const ORGANIC = { low: 0.25, high: 0.35 }; // Wolfgang Digital KPI Report
const SYM: Record<string, string> = { GBP: "£", USD: "$" };
const CONFETTI_COLORS = ["#5529d6", "#0bb6d6", "#f5743e", "#e0a92e", "#1eaf63"];

type Cur = "GBP" | "USD";
type Inputs = { cur: Cur; revenue: number; products: number; articles: number; reportHours: number; connectors: number; deploys: number; deployCost: number };

const PRESETS: { key: string; v: Omit<Inputs, "cur"> }[] = [
  { key: "Starter", v: { revenue: 50000, products: 300, articles: 4, reportHours: 5, connectors: 5, deploys: 2, deployCost: 1000 } },
  { key: "Growing", v: { revenue: 250000, products: 2000, articles: 15, reportHours: 8, connectors: 10, deploys: 4, deployCost: 2000 } },
  { key: "Scaling", v: { revenue: 1000000, products: 12000, articles: 30, reportHours: 15, connectors: 20, deploys: 8, deployCost: 5000 } },
];

function parseNum(s: string): number {
  const str = String(s).trim().toLowerCase().replace(/[,\s£$]/g, "");
  if (!str) return 0;
  const unit = str.slice(-1);
  const mult = unit === "k" ? 1e3 : unit === "m" ? 1e6 : 1;
  const num = parseFloat(mult !== 1 ? str.slice(0, -1) : str);
  return isFinite(num) ? Math.max(0, Math.round(num * mult)) : 0;
}
function group(n: number): string {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function compactK(n: number): string {
  if (n >= 1e6) { const m = n / 1e6; return (Number.isInteger(m) ? m : m.toFixed(1)) + "M"; }
  const k = n / 1e3; return (Number.isInteger(k) ? k : Math.round(k)) + "k";
}
function fmtMoney(n: number, cur: string): string {
  return SYM[cur] + group(n);
}

function compute(c: Inputs) {
  const rate = RATE[c.cur];
  const contentHrsLow = c.articles * CONTENT_HRS.low * 12;
  const contentHrsHigh = c.articles * CONTENT_HRS.high * 12;
  const auditHrsLow = c.connectors * AUDIT_HRS.low * 12;
  const auditHrsHigh = c.connectors * AUDIT_HRS.high * 12;
  const repHrsLow = c.reportHours * REPORT_FACTOR.low * 52;
  const repHrsHigh = c.reportHours * REPORT_FACTOR.high * 52;
  const repAuditHrsLow = repHrsLow + auditHrsLow;
  const repAuditHrsHigh = repHrsHigh + auditHrsHigh;
  const protLow = c.deploys * 12 * CFR.low * c.deployCost;
  const protHigh = c.deploys * 12 * CFR.high * c.deployCost;
  const directLow = (contentHrsLow + repAuditHrsLow) * rate + protLow;
  const directHigh = (contentHrsHigh + repAuditHrsHigh) * rate + protHigh;
  const annual = c.revenue * 12;
  const orgLow = annual * ORGANIC.low;
  const orgHigh = annual * ORGANIC.high;
  const seoPages = c.products > 0 ? c.products + Math.round(c.products * 0.06) + 15 : 0;
  return {
    articlesYr: c.articles * 12,
    contentMoneyLow: contentHrsLow * rate, contentMoneyHigh: contentHrsHigh * rate,
    contentHrsLow, contentHrsHigh,
    repAuditHrsLow, repAuditHrsHigh,
    repAuditMoneyLow: repAuditHrsLow * rate, repAuditMoneyHigh: repAuditHrsHigh * rate,
    protLow, protHigh,
    directLow, directHigh,
    orgLow, orgHigh, seoPages,
  };
}

function Confetti({ token }: { token: number }) {
  const pieces = useMemo(
    () => Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: 26 + Math.random() * 48,
      tx: Math.round((Math.random() - 0.5) * 480),
      ty: Math.round(170 + Math.random() * 250),
      rot: Math.round(Math.random() * 720 - 360),
      delay: Math.random() * 0.1,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    })),
    [token]
  );
  const [go, setGo] = useState(false);
  useEffect(() => {
    setGo(false);
    let id2 = 0;
    const id1 = requestAnimationFrame(() => { id2 = requestAnimationFrame(() => setGo(true)); });
    return () => { cancelAnimationFrame(id1); cancelAnimationFrame(id2); };
  }, [token]);
  return (
    <div className="roi-confetti" aria-hidden="true">
      {pieces.map((p) => (
        <span key={p.id} style={{
          left: `${p.left}%`,
          background: p.color,
          transitionDelay: `${p.delay}s`,
          transform: go ? `translate(${p.tx}px, ${p.ty}px) rotate(${p.rot}deg)` : "translate(0, 0) rotate(0deg)",
          opacity: go ? 0 : 1,
        }} />
      ))}
    </div>
  );
}

export default function RoiCalculator() {
  const [cur, setCur] = useState<Cur>("USD");
  const [revenueRaw, setRevenueRaw] = useState("250,000");
  const [productsRaw, setProductsRaw] = useState("2,000");
  const [deployCostRaw, setDeployCostRaw] = useState("2,000");
  const [articles, setArticles] = useState(15);
  const [reportHours, setReportHours] = useState(8);
  const [connectors, setConnectors] = useState(10);
  const [deploys, setDeploys] = useState(4);
  const [selectedPreset, setSelectedPreset] = useState<string | null>(null);

  const draft: Inputs = {
    cur,
    revenue: parseNum(revenueRaw),
    products: parseNum(productsRaw),
    deployCost: parseNum(deployCostRaw),
    articles, reportHours, connectors, deploys,
  };

  const [calc, setCalc] = useState<Inputs | null>(null);
  const [prog, setProg] = useState(1);
  const [burst, setBurst] = useState(0);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  const r = compute(calc ?? draft);
  const revealed = calc !== null;
  const outCur = (calc ?? draft).cur;

  const dirty =
    !!calc &&
    (cur !== calc.cur || draft.revenue !== calc.revenue || draft.products !== calc.products ||
      draft.deployCost !== calc.deployCost || articles !== calc.articles || reportHours !== calc.reportHours ||
      connectors !== calc.connectors || deploys !== calc.deploys);

  function applyPreset(key: string, v: Omit<Inputs, "cur">) {
    setSelectedPreset(key);
    setRevenueRaw(group(v.revenue));
    setProductsRaw(group(v.products));
    setDeployCostRaw(group(v.deployCost));
    setArticles(v.articles);
    setReportHours(v.reportHours);
    setConnectors(v.connectors);
    setDeploys(v.deploys);
  }

  function calculate() {
    setCalc(draft);
    setProg(0); // numbers reset to zero while we scroll the user up
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
    // 1) bring the results into view, then 2) run the count-up + confetti once the user is there
    requestAnimationFrame(() => headlineRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }));
    timerRef.current = window.setTimeout(() => {
      setBurst((b) => b + 1);
      const t0 = performance.now();
      const dur = 900;
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / dur);
        setProg(1 - Math.pow(1 - p, 3));
        if (p < 1) rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    }, 650);
  }
  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const [copied, setCopied] = useState(false);
  function share() {
    const txt = `${fmtMoney(r.orgLow, calc!.cur)}-${fmtMoney(r.orgHigh, calc!.cur)}/yr of my store revenue rides on search and AI visibility, plus ${fmtMoney(r.directLow, calc!.cur)}-${fmtMoney(r.directHigh, calc!.cur)}/yr of in-house work Vortex IQ takes off my team. Calculate yours: https://www.vortexiq.ai/roi-calculator`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(txt).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2200); }).catch(() => {});
    }
  }

  const D = (n: number) => Math.round(n * prog);
  const clearPreset = () => setSelectedPreset(null);

  return (
    <div className="roi-calc">
      {/* INPUTS */}
      <div className="roi-inputs">
        <div className="roi-presets">
          <span className="roi-presets-lbl">Pick your scale</span>
          <div className="roi-preset-row">
            {PRESETS.map((p) => (
              <button type="button" key={p.key} className={`roi-preset${selectedPreset === p.key ? " on" : ""}`} onClick={() => applyPreset(p.key, p.v)}>
                <b>{p.key}</b><span>~ {SYM[cur]}{compactK(p.v.revenue)}/mo</span>
              </button>
            ))}
          </div>
        </div>

        <div className="roi-cur">
          <button type="button" className={cur === "USD" ? "on" : ""} onClick={() => setCur("USD")}>USD $</button>
          <button type="button" className={cur === "GBP" ? "on" : ""} onClick={() => setCur("GBP")}>GBP {"£"}</button>
        </div>

        <label className="roi-field">
          <span>Monthly revenue (GMV)</span>
          <div className="roi-money-in">
            <i>{SYM[cur]}</i>
            <input type="text" inputMode="numeric" value={revenueRaw}
              onChange={(e) => { clearPreset(); setRevenueRaw(e.target.value); }}
              onBlur={() => setRevenueRaw(group(parseNum(revenueRaw)))} placeholder="e.g. 100k" />
          </div>
          <small className="roi-hint">Type <b>100k</b> or <b>1.2m</b> &mdash; we format it.</small>
        </label>

        <label className="roi-field">
          <span>Number of products</span>
          <input type="text" inputMode="numeric" value={productsRaw}
            onChange={(e) => { clearPreset(); setProductsRaw(e.target.value); }}
            onBlur={() => setProductsRaw(group(parseNum(productsRaw)))} placeholder="e.g. 2,000" />
          <small className="roi-hint">Drives your SEO-page forecast.</small>
        </label>

        <label className="roi-field">
          <span>SEO/GEO articles per month <b className="roi-val">{articles}</b></span>
          <input className="roi-slider" type="range" min={0} max={50} step={1} value={articles} onChange={(e) => { clearPreset(); setArticles(+e.target.value); }} />
        </label>

        <label className="roi-field">
          <span>Hours/week on reporting &amp; analysis <b className="roi-val">{reportHours}h</b></span>
          <input className="roi-slider" type="range" min={0} max={40} step={1} value={reportHours} onChange={(e) => { clearPreset(); setReportHours(+e.target.value); }} />
        </label>

        <label className="roi-field">
          <span>Connectors / tools connected <b className="roi-val">{connectors}</b></span>
          <input className="roi-slider" type="range" min={0} max={30} step={1} value={connectors} onChange={(e) => { clearPreset(); setConnectors(+e.target.value); }} />
        </label>

        <label className="roi-field">
          <span>Store changes / deploys per month <b className="roi-val">{deploys}</b></span>
          <input className="roi-slider" type="range" min={0} max={30} step={1} value={deploys} onChange={(e) => { clearPreset(); setDeploys(+e.target.value); }} />
        </label>

        <label className="roi-field">
          <span>Avg cost of a failed deploy</span>
          <div className="roi-money-in">
            <i>{SYM[cur]}</i>
            <input type="text" inputMode="numeric" value={deployCostRaw}
              onChange={(e) => { clearPreset(); setDeployCostRaw(e.target.value); }}
              onBlur={() => setDeployCostRaw(group(parseNum(deployCostRaw)))} placeholder="e.g. 2,000" />
          </div>
        </label>

        <button type="button" className={`btn roi-recalc${dirty || !revealed ? " is-dirty" : ""}`} onClick={calculate}>
          {revealed ? "Recalculate" : "Calculate my annual upside"}
        </button>
        {dirty ? <p className="roi-recalc-hint">Inputs changed &middot; recalculate to update your range</p> : null}
      </div>

      {/* OUTPUTS */}
      <div className={`roi-outputs${revealed ? " is-revealed" : ""}`}>
        <div className="roi-headline" ref={headlineRef}>
          {revealed ? <Confetti token={burst} /> : null}
          <span className="roi-head-eyebrow">Revenue riding on search &amp; AI visibility</span>
          {revealed ? (
            <>
              <div className="roi-head-num">{fmtMoney(D(r.orgLow), outCur)}<span className="roi-head-dash">&ndash;</span>{fmtMoney(D(r.orgHigh), outCur)}<small className="roi-head-per">/yr</small></div>
              <p className="roi-head-sub">The slice of your revenue that depends on how you show up in search and AI answers, across <b>~{group(r.seoPages)} pages</b> Vortex IQ keeps optimised.</p>
              <div className="roi-bank">Plus <b>{fmtMoney(D(r.directLow), outCur)}&ndash;{fmtMoney(D(r.directHigh), outCur)}/yr</b> of in-house work it takes off your team</div>
              <div className="roi-share">
                <button type="button" className="roi-share-btn" onClick={share}>
                  {copied ? "Copied to clipboard" : "Copy my result"}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="roi-head-num roi-head-num--locked">{SYM[cur]}&bull;,&bull;&bull;&bull;,&bull;&bull;&bull;</div>
              <p className="roi-head-sub">Set your numbers, then hit <b>Calculate</b> to reveal what is at stake.</p>
            </>
          )}
        </div>

        {revealed ? (
          <>
            <div className="roi-out-grid">
              <div className="roi-out-card roi-out-card--brand">
                <h4>SEO/GEO content shipped</h4>
                <div className="roi-out-val">{group(D(r.articlesYr))} <small>articles/yr</small></div>
                <p className="roi-out-sub">Worth {fmtMoney(D(r.contentMoneyLow), outCur)}&ndash;{fmtMoney(D(r.contentMoneyHigh), outCur)}: the <b>~{group(r.contentHrsLow)}&ndash;{group(r.contentHrsHigh)} hrs</b> your team would spend writing and optimising these in-house.</p>
              </div>
              <div className="roi-out-card">
                <h4>Reporting &amp; audits automated</h4>
                <div className="roi-out-val">{group(D(r.repAuditHrsLow))}&ndash;{group(D(r.repAuditHrsHigh))} <small>hrs/yr</small></div>
                <p className="roi-out-sub">Worth {fmtMoney(D(r.repAuditMoneyLow), outCur)}&ndash;{fmtMoney(D(r.repAuditMoneyHigh), outCur)} of briefings, cohort/QBR reports and per-connector audits, done for you.</p>
              </div>
              <div className="roi-out-card">
                <h4>Revenue protected</h4>
                <div className="roi-out-val">{fmtMoney(D(r.protLow), outCur)}&ndash;{fmtMoney(D(r.protHigh), outCur)}</div>
                <p className="roi-out-sub">Downside from failed changes that staging-first + one-click rollback catches.</p>
              </div>
            </div>
            <p className="roi-out-foot">All savings are the in-house effort Vortex IQ removes, valued at a conservative loaded rate. Illustrative range from publicly-sourced multipliers and your inputs. We verify the real numbers on your store.</p>
          </>
        ) : null}

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
