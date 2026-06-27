import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import RoiCalculator from "./RoiCalculator";

export const metadata: Metadata = {
  title: "Ecommerce Revenue-at-Risk & ROI Calculator | Vortex IQ",
  description:
    "Estimate the revenue at stake on your store: hours saved on manual reporting, revenue protected by staging-first deploys, and the organic revenue your SEO issues sit on. Conservative, publicly-sourced, verified on your store.",
};

const css = `
/* ===== ROI calculator (built on the shared design system) ===== */
.roi-page .roi-hero{text-align:center;max-width:760px;margin:0 auto}
.roi-page .roi-hero .eyebrow{justify-content:center}
.roi-page .roi-hero h1{max-width:20ch;margin:0 auto 1.4rem}
.roi-page .roi-hero .lede{margin:0 auto}

.roi-page .roi-calc{display:grid;grid-template-columns:.92fr 1.08fr;gap:2rem;margin-top:2.8rem;align-items:start}
.roi-page .roi-inputs{background:var(--white);border:1px solid var(--border-dark);border-radius:16px;padding:1.6rem;display:grid;gap:1.05rem;box-shadow:var(--shadow-md)}

/* presets */
.roi-page .roi-presets{display:flex;flex-direction:column;gap:.5rem}
.roi-page .roi-presets-lbl{font-family:var(--font-mono);font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faded)}
.roi-page .roi-preset-row{display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem}
.roi-page .roi-preset{display:flex;flex-direction:column;align-items:flex-start;gap:.05rem;padding:.55rem .7rem;border:1px solid var(--border-dark);border-radius:10px;background:var(--surface-soft);cursor:pointer;transition:border-color .2s,background .2s}
.roi-page .roi-preset:hover{border-color:var(--border-brand);background:var(--surface-tint)}
.roi-page .roi-preset.on{border-color:var(--brand-purple);background:var(--surface-tint);box-shadow:inset 0 0 0 1px var(--brand-purple)}
.roi-page .roi-preset.on b{color:var(--brand-purple)}
.roi-page .roi-preset b{font-family:var(--font-heading);font-size:.9rem;color:var(--primary)}
.roi-page .roi-preset span{font-family:var(--font-mono);font-size:.6rem;color:var(--text-faded)}

/* currency */
.roi-page .roi-cur{display:inline-flex;gap:.3rem;background:var(--surface-soft);border:1px solid var(--border-dark);border-radius:999px;padding:.25rem;align-self:flex-start}
.roi-page .roi-cur button{font-family:var(--font-mono);font-size:.78rem;padding:.4rem .9rem;border:none;background:transparent;border-radius:999px;cursor:pointer;color:var(--text-body)}
.roi-page .roi-cur button.on{background:var(--white);color:var(--brand-purple);box-shadow:0 1px 3px rgba(0,0,0,.1)}

/* fields */
.roi-page .roi-field{display:flex;flex-direction:column;gap:.4rem}
.roi-page .roi-field>span{font-size:.85rem;font-weight:500;color:var(--primary);display:flex;justify-content:space-between;align-items:center}
.roi-page .roi-val{font-family:var(--font-mono);font-size:.82rem;color:var(--brand-purple);font-weight:600}
.roi-page .roi-field input[type=text],.roi-page .roi-field select{width:100%;padding:.6rem .8rem;border:1px solid var(--border-dark);border-radius:10px;background:var(--white);font-size:.95rem;color:var(--primary)}
.roi-page .roi-field input:focus,.roi-page .roi-field select:focus{outline:none;border-color:var(--border-brand);box-shadow:var(--shadow-md)}
.roi-page .roi-hint{font-size:.74rem;color:var(--text-faded)}
.roi-page .roi-hint b{color:var(--brand-purple);font-weight:600}
.roi-page .roi-money-in{position:relative;display:flex;align-items:center}
.roi-page .roi-money-in i{position:absolute;left:.8rem;font-style:normal;color:var(--text-faded);font-size:.95rem}
.roi-page .roi-money-in input[type=text]{padding-left:2rem}

/* slider */
.roi-page .roi-slider{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:999px;background:var(--surface-tint);outline:none;border:1px solid var(--border-brand);margin:.3rem 0}
.roi-page .roi-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:var(--brand-purple);cursor:pointer;border:3px solid var(--white);box-shadow:0 1px 4px rgba(0,0,0,.2)}
.roi-page .roi-slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;background:var(--brand-purple);cursor:pointer;border:3px solid var(--white)}

/* recalc button */
.roi-page .roi-recalc{width:100%;justify-content:center;margin-top:.5rem}
.roi-page .roi-recalc.is-dirty{animation:roi-pulse 1.6s ease-in-out infinite}
.roi-page .roi-recalc-hint{font-family:var(--font-mono);font-size:.7rem;color:var(--brand-purple);text-align:center;margin-top:.5rem;line-height:1.4}
@keyframes roi-pulse{0%,100%{box-shadow:0 0 0 0 rgba(85,41,214,0)}50%{box-shadow:0 0 0 5px rgba(85,41,214,.16)}}

/* outputs */
.roi-page .roi-outputs{display:flex;flex-direction:column;gap:1.2rem}
.roi-page .roi-headline{position:relative;background:linear-gradient(135deg,var(--surface-tint),var(--surface-soft));border:1px solid var(--border-brand);border-radius:16px;padding:1.6rem 1.8rem;text-align:center}
.roi-page .roi-confetti{position:absolute;left:0;right:0;top:0;height:0;pointer-events:none;z-index:3}
.roi-page .roi-confetti span{position:absolute;top:14px;width:9px;height:14px;border-radius:2px;will-change:transform,opacity;transition:transform 1.3s cubic-bezier(.2,.6,.3,1),opacity 1.3s ease}
.roi-page .roi-head-eyebrow{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-purple);display:block}
.roi-page .roi-head-num{font-family:var(--font-heading);font-weight:700;font-size:clamp(2.1rem,5vw,3.3rem);line-height:1.05;letter-spacing:-.03em;color:var(--primary);margin:.5rem 0;display:flex;align-items:center;justify-content:center;gap:.4rem;flex-wrap:wrap}
.roi-page .roi-head-dash{color:var(--text-faded);font-weight:400}
.roi-page .roi-head-per{font-family:var(--font-mono);font-size:.9rem;font-weight:400;color:var(--text-faded);letter-spacing:0;margin-left:.25rem}
.roi-page .roi-head-num--locked{color:var(--text-faded);letter-spacing:.04em}
.roi-page .roi-head-sub{font-size:.88rem;color:var(--text-body);line-height:1.5;max-width:48ch;margin:0 auto}
.roi-page .roi-share{margin-top:1rem}
.roi-page .roi-share-btn{font-family:var(--font-mono);font-size:.74rem;padding:.5rem 1.1rem;border-radius:999px;border:1px solid var(--border-brand);background:var(--white);color:var(--brand-purple);cursor:pointer;transition:background .2s}
.roi-page .roi-share-btn:hover{background:var(--surface-tint)}
.roi-page .roi-out-grid{display:grid;gap:.9rem}
.roi-page .roi-out-card{background:var(--white);border:1px solid var(--border-dark);border-radius:14px;padding:1.2rem 1.3rem;animation:roi-rise .5s ease both}
.roi-page .roi-out-card:nth-child(2){animation-delay:.08s}
.roi-page .roi-out-card:nth-child(3){animation-delay:.16s}
.roi-page .roi-out-card--brand{background:var(--surface-tint);border-color:var(--border-brand)}
.roi-page .roi-out-card h4{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faded);margin-bottom:.5rem}
.roi-page .roi-out-val{font-family:var(--font-heading);font-weight:700;font-size:clamp(1.4rem,2.6vw,1.95rem);line-height:1;letter-spacing:-.02em;color:var(--primary)}
.roi-page .roi-out-val small{font-family:var(--font-mono);font-size:.8rem;font-weight:400;color:var(--text-faded);letter-spacing:0}
.roi-page .roi-out-sub{font-size:.85rem;color:var(--text-body);line-height:1.45;margin-top:.6rem}
.roi-page .roi-out-sub b{color:var(--brand-purple)}
.roi-page .roi-out-foot{font-size:.78rem;color:var(--text-faded);line-height:1.5}
@keyframes roi-rise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}

/* capture */
.roi-page .roi-form{width:100%;background:var(--surface-soft);border:1px solid var(--border-dark);border-radius:14px;padding:1.3rem}
.roi-page .roi-form-lede{font-size:.92rem;color:var(--primary);margin-bottom:1rem}

/* methodology / sources */
.roi-page .roi-method{max-width:900px;margin:0 auto}
.roi-page .roi-src{display:grid;gap:.8rem;margin-top:1.8rem}
.roi-page .roi-src-row{display:grid;grid-template-columns:1fr;gap:.3rem;background:var(--white);border:1px solid var(--border-dark);border-radius:12px;padding:1rem 1.2rem}
.roi-page .roi-src-row b{color:var(--primary);font-size:.95rem}
.roi-page .roi-src-row .v{font-family:var(--font-mono);font-size:.78rem;color:var(--brand-purple)}
.roi-page .roi-src-row .s{font-size:.83rem;color:var(--text-body);line-height:1.5}
.roi-page .roi-src-row.omit{border-style:dashed}
.roi-page .roi-disclaimer{display:flex;gap:.7rem;align-items:flex-start;max-width:820px;margin:2.4rem auto 0;font-size:.86rem;color:var(--text-body);line-height:1.5;background:var(--surface-soft);border:1px solid var(--border-dark);border-radius:12px;padding:1.1rem 1.3rem}
.roi-page .roi-disclaimer svg{width:18px;height:18px;flex:none;color:var(--brand-purple);margin-top:2px}

@media(max-width:880px){
  .roi-page .roi-calc{grid-template-columns:1fr}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="roi-page">
        {/* HERO + CALCULATOR */}
        <section className="section section--hero">
          <div className="container">
            <div className="roi-hero">
              <div className="eyebrow reveal in">ROI calculator</div>
              <h1 className="reveal in">See the revenue at stake. Then <span className="hl">verify it on your store.</span></h1>
              <p className="lede reveal in">
                A conservative, plain-English estimate built on publicly-sourced numbers and your own inputs.
                It shows a range, never a single confident figure, because the only honest number is the one
                we measure on your store.
              </p>
            </div>
            <RoiCalculator />
          </div>
        </section>

        {/* HOW WE CALCULATE THIS */}
        <section className="section section--soft">
          <div className="container roi-method">
            <div className="eyebrow reveal">How we calculate this</div>
            <h2 className="reveal" style={{ maxWidth: "24ch" }}>Every multiplier is conservative and publicly sourced.</h2>
            <p className="lede reveal" style={{ margin: "1.2rem 0 0", maxWidth: "70ch" }}>
              We would rather under-promise. Each figure below names its public source, and anything we could
              not source credibly we left out of the maths entirely rather than guess.
            </p>

            <div className="roi-src reveal">
              <div className="roi-src-row">
                <b>Hours saved &mdash; automatable reporting time</b>
                <span className="v">50% (range 40&ndash;65%) x your hours x 52 x loaded hourly cost</span>
                <span className="s">McKinsey Global Institute, <i>A Future That Works</i> &mdash; data-collection and processing activities are ~64&ndash;69% technically automatable; we map routine reporting down to a conservative 50%.</span>
              </div>
              <div className="roi-src-row">
                <b>Loaded analyst cost</b>
                <span className="v">GBP 25/hr (UK) &middot; USD 50/hr (US)</span>
                <span className="s">US Bureau of Labor Statistics (median $76,950) loaded via BLS ECEC (1.42x); UK ONS ASHE, GOV.UK employer NI + pension, and ITJobsWatch. Bases sit below the medians to stay conservative.</span>
              </div>
              <div className="roi-src-row">
                <b>Revenue protected &mdash; change-failure rate</b>
                <span className="v">5&ndash;15% of changes x your deploy frequency x cost of a failed deploy</span>
                <span className="s">DORA <i>Accelerate State of DevOps 2024</i> &mdash; elite teams run a ~5% change-failure rate. Staging-first deploys and one-click rollback are built to catch these before they cost you.</span>
              </div>
              <div className="roi-src-row">
                <b>Organic-influenced revenue</b>
                <span className="v">30% (range 25&ndash;35%) of annual revenue</span>
                <span className="s">Wolfgang Digital <i>E-Commerce KPI Report</i> &mdash; organic search drives ~30% of ecommerce revenue. This is the slice your open SEO issues sit on, not a promised uplift.</span>
              </div>
              <div className="roi-src-row omit">
                <b>SEO uplift from fixing issues &mdash; deliberately omitted</b>
                <span className="v">Not estimated</span>
                <span className="s">No credible, independent, large-sample public figure exists for a generalisable SEO-fix uplift, so we do not put one in the maths. Your free audit sizes the recoverable opportunity against your real organic baseline.</span>
              </div>
            </div>

            <div className="roi-disclaimer reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
              <span>
                <b>Illustrative estimate, not a guarantee.</b> Figures use conservative, publicly-sourced
                multipliers and the numbers you enter. Actual results depend on your store, your market and your
                competition. We verify the real numbers on your store with a free audit. We use the email you
                provide only to send your range and follow up &mdash; we do not sell your data; email
                privacy@vortexiq.ai to have it removed.
              </span>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section">
          <div className="container" style={{ textAlign: "center" }}>
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>From estimate to evidence</div>
            <h2 className="reveal" style={{ maxWidth: "20ch", margin: "0 auto" }}>Turn the range into a real number.</h2>
            <p className="lede reveal" style={{ margin: "1.3rem auto 2.4rem", maxWidth: "46ch" }}>
              A free, verified audit of your store shows exactly where the revenue sits, ranked by impact.
            </p>
            <div className="cta-row reveal" style={{ justifyContent: "center" }}>
              <Link className="btn" href="/free-audit">Run a free audit</Link>
              <Link className="btn btn--ghost" href="/contact-us">Talk to the team &rarr;</Link>
            </div>
          </div>
        </section>
      </main>

      {/* HubSpot embed loader - renders the ROI form into the .hs-form-frame div once revealed. */}
      <Script src="https://js.hsforms.net/forms/embed/24385350.js" strategy="afterInteractive" />
    </>
  );
}
