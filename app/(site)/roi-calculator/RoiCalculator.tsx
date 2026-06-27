"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";

// Signed-off, sourced, conservative multipliers (see "How we calculate this").
const AUTOMATABLE = { low: 0.4, high: 0.65 }; // McKinsey Global Institute
const RATE: Record<string, number> = { GBP: 25, USD: 50 }; // BLS/ECEC (US), ONS/GOV.UK (UK)
const CFR = { low: 0.05, high: 0.15 }; // DORA State of DevOps 2024
const ORGANIC = { low: 0.25, high: 0.35 }; // Wolfgang Digital KPI Report
const SYM: Record<string, string> = { GBP: "£", USD: "$" };
const CONFETTI_COLORS = ["#5529d6", "#0bb6d6", "#f5743e", "#e0a92e", "#1eaf63"];

type Cur = "GBP" | "USD";
type Inputs = { cur: Cur; revenue: number; products: number; hours: number; deploys: number; deployCost: number };

const PRESETS: { key: string; v: Omit<Inputs, "cur"> }[] = [
  { key: "Starter", v: { revenue: 50000, products: 300, hours: 5, deploys: 2, deployCost: 1000 } },
  { key: "Growing", v: { revenue: 250000, products: 2000, hours: 8, deploys: 4, deployCost: 2000 } },
  { key: "Scaling", v: { revenue: 1000000, products: 12000, hours: 15, deploys: 8, deployCost: 5000 } },
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
  const hoursLow = c.hours * AUTOMATABLE.low * 52;
  const hoursHigh = c.hours * AUTOMATABLE.high * 52;
  const moneyLow = hoursLow * rate;
  const moneyHigh = hoursHigh * rate;
  const deploysYr = c.deploys * 12;
  const protLow = deploysYr * CFR.low * c.deployCost;
  const protHigh = deploysYr * CFR.high * c.deployCost;
  const annual = c.revenue * 12;
  const orgLow = annual * ORGANIC.low;
  const orgHigh = annual * ORGANIC.high;
  const upLow = moneyLow + protLow; // honest headline = time + risk only (organic is context)
  const upHigh = moneyHigh + protHigh;
  const seoPages = c.products > 0 ? c.products + Math.round(c.products * 0.06) + 15 : 0;
  return { hoursLow, hoursHigh, moneyLow, moneyHigh, protLow, protHigh, orgLow, orgHigh, upLow, upHigh, seoPages };
}

function Confetti({ token }: { token: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => ({
        id: i,
        left: 30 + Math.random() * 40,
        tx: Math.round((Math.random() - 0.5) * 440),
        ty: Math.round(150 + Math.random() * 220),
        rot: Math.round(Math.random() * 720 - 360),
        delay: (Math.random() * 0.12).toFixed(2),
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      })),
    [token]
  );
  return (
    <div className="roi-confetti" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={`${token}-${p.id}`}
          style={{ left: `${p.left}%`, background: p.color, ["--tx"]: `${p.tx}px`, ["--ty"]: `${p.ty}px`, ["--rot"]: `${p.rot}deg`, animationDelay: `${p.delay}s` } as CSSProperties}
        />
      ))}
    </div>
  );
}

export default function RoiCalculator() {
  const [cur, setCur] = useState<Cur>("USD");
  const [revenueRaw, setRevenueRaw] = useState("100,000");
  const [productsRaw, setProductsRaw] = useState("2,000");
  const [deployCostRaw, setDeployCostRaw] = useState("2,000");
  const [hours, setHours] = useState(8);
  const [deploys, setDeploys] = useState(4);

  const draft: Inputs = {
    cur,
    revenue: parseNum(revenueRaw),
    products: parseNum(productsRaw),
    deployCost: parseNum(deployCostRaw),
    hours,
    deploys,
  };

  const [calc, setCalc] = useState<Inputs | null>(null);
  const [prog, setProg] = useState(1);
  const [burst, setBurst] = useState(0);
  const rafRef = useRef<number | null>(null);

  const r = compute(calc ?? draft);
  const revealed = calc !== null;

  const dirty =
    !!calc &&
    (cur !== calc.cur || draft.revenue !== calc.revenue || draft.products !== calc.products ||
      draft.deployCost !== calc.deployCost || hours !== calc.hours || deploys !== calc.deploys);

  function applyPreset(v: Omit<Inputs, "cur">) {
    setRevenueRaw(group(v.revenue));
    setProductsRaw(group(v.products));
    setDeployCostRaw(group(v.deployCost));
    setHours(v.hours);
    setDeploys(v.deploys);
  }

  function calculate() {
    setCalc(draft);
    setBurst((b) => b + 1);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const t0 = performance.now();
    const dur = 900;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      setProg(1 - Math.pow(1 - p, 3));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    setProg(0);
    rafRef.current = requestAnimationFrame(tick);
  }
  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  const [copied, setCopied] = useState(false);
  function share() {
    const txt = `${fmtMoney(r.orgLow, calc!.cur)}-${fmtMoney(r.orgHigh, calc!.cur)}/yr of my store revenue rides on search and AI visibility, and Vortex IQ keeps it optimised (plus ${fmtMoney(r.upLow, calc!.cur)}-${fmtMoney(r.upHigh, calc!.cur)}/yr in direct savings). Calculate yours: https://www.vortexiq.ai/roi-calculator`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(txt).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2200); }).catch(() => {});
    }
  }

  const D = (n: number) => Math.round(n * prog);
  const outCur = (calc ?? draft).cur;

  return (
    <div className="roi-calc">
      {/* INPUTS */}
      <div className="roi-inputs">
        <div className="roi-presets">
          <span className="roi-presets-lbl">Pick your scale</span>
          <div className="roi-preset-row">
            {PRESETS.map((p) => (
              <button type="button" key={p.key} className="roi-preset" onClick={() => applyPreset(p.v)}>
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
              onChange={(e) => setRevenueRaw(e.target.value)}
              onBlur={() => setRevenueRaw(group(parseNum(revenueRaw)))} placeholder="e.g. 100k" />
          </div>
          <small className="roi-hint">Type <b>100k</b> or <b>1.2m</b> &mdash; we format it.</small>
        </label>

        <label className="roi-field">
          <span>Number of products</span>
          <input type="text" inputMode="numeric" value={productsRaw}
            onChange={(e) => setProductsRaw(e.target.value)}
            onBlur={() => setProductsRaw(group(parseNum(productsRaw)))} placeholder="e.g. 2,000" />
          <small className="roi-hint">Drives your SEO-page forecast.</small>
        </label>

        <label className="roi-field">
          <span>Hours/week on manual reporting <b className="roi-val">{hours}h</b></span>
          <input className="roi-slider" type="range" min={0} max={40} step={1} value={hours} onChange={(e) => setHours(+e.target.value)} />
        </label>

        <label className="roi-field">
          <span>Store changes / deploys per month <b className="roi-val">{deploys}</b></span>
          <input className="roi-slider" type="range" min={0} max={30} step={1} value={deploys} onChange={(e) => setDeploys(+e.target.value)} />
        </label>

        <label className="roi-field">
          <span>Avg cost of a failed deploy</span>
          <div className="roi-money-in">
            <i>{SYM[cur]}</i>
            <input type="text" inputMode="numeric" value={deployCostRaw}
              onChange={(e) => setDeployCostRaw(e.target.value)}
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
        <div className="roi-headline">
          {revealed ? <Confetti token={burst} /> : null}
          <span className="roi-head-eyebrow">Revenue riding on search &amp; AI visibility</span>
          {revealed ? (
            <>
              <div className="roi-head-num">{fmtMoney(D(r.orgLow), outCur)}<span className="roi-head-dash">&ndash;</span>{fmtMoney(D(r.orgHigh), outCur)}<small className="roi-head-per">/yr</small></div>
              <p className="roi-head-sub">The slice of your revenue that depends on how you show up in search and AI answers, spread across <b>~{group(r.seoPages)} pages</b>. Keeping every one optimised, continuously, is exactly what Vortex IQ does.</p>
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
                <h4>Direct savings you can bank</h4>
                <div className="roi-out-val">{fmtMoney(D(r.upLow), outCur)}&ndash;{fmtMoney(D(r.upHigh), outCur)} <small>/yr</small></div>
                <p className="roi-out-sub">Team time saved + revenue protected, <b>on top of</b> the organic revenue above.</p>
              </div>
              <div className="roi-out-card">
                <h4>Analyst time saved</h4>
                <div className="roi-out-val">{group(D(r.hoursLow))}&ndash;{group(D(r.hoursHigh))} <small>hrs/yr</small></div>
                <p className="roi-out-sub">Worth {fmtMoney(D(r.moneyLow), outCur)}&ndash;{fmtMoney(D(r.moneyHigh), outCur)} off manual reporting.</p>
              </div>
              <div className="roi-out-card">
                <h4>Revenue protected</h4>
                <div className="roi-out-val">{fmtMoney(D(r.protLow), outCur)}&ndash;{fmtMoney(D(r.protHigh), outCur)}</div>
                <p className="roi-out-sub">Downside from failed changes that staging-first + one-click rollback catches.</p>
              </div>
            </div>
            <p className="roi-out-foot">Illustrative range from conservative, publicly-sourced multipliers and your inputs. We verify the real numbers on your store.</p>
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
