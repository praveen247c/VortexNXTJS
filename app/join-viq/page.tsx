import type { Metadata } from "next";
import Link from "next/link";
import BrochureForm from "./BrochureForm";

export const metadata: Metadata = {
  title: "Vortex IQ Brochure | The AI OS for E-Commerce in One PDF",
  description:
    "Get the Vortex IQ brochure — how the AI Operating System detects, explains, and fixes revenue leaks across your commerce stack, with security, pricing, and outcomes.",
};

const css = `
/* ============ Brochure / Download — page styles (built on the shared design system) ============ */
.brochure-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.brochure-page .section--soft{background:var(--surface-soft)}

/* hero layout */
.brochure-page .section--hero{padding-bottom:7rem}
.bro-hero{display:grid;grid-template-columns:1.05fr .95fr;gap:4rem;align-items:center}
.bro-hero h1{max-width:14ch;margin:0 0 1.4rem}
.bro-hero .lede{margin:0 0 2rem}
.bro-meta{display:flex;flex-wrap:wrap;gap:.6rem;margin-bottom:2rem}
.bro-meta .chip svg{width:13px;height:13px;color:var(--brand-purple)}

/* request form card */
.brochure-form-card{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2.2rem;box-shadow:var(--shadow-md)}
.bro-form-wrap{position:relative}
.bro-form-wrap .form-eyebrow{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.06em;text-transform:uppercase;color:var(--text-faded);margin-bottom:1.4rem}
.field{margin-bottom:1.1rem;display:flex;flex-direction:column}
.field label{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.06em;text-transform:uppercase;color:var(--text-body);margin-bottom:.5rem}
.field label .req{color:var(--brand-purple)}
.field input{font-family:var(--font-body);font-size:1rem;color:var(--primary);background:var(--surface-soft);border:1px solid var(--border-dark);border-radius:9px;padding:.8rem .9rem;width:100%;transition:border-color .2s,background .2s,box-shadow .2s;outline:none}
.field input:focus{border-color:var(--brand-purple);background:var(--white);box-shadow:0 0 0 3px rgba(85,41,214,.12)}
.field input::placeholder{color:var(--text-faded)}
.bf-actions{display:flex;align-items:center;gap:1.2rem;flex-wrap:wrap;margin-top:.4rem}
.bf-note{font-size:.82rem;color:var(--text-faded);line-height:1.55;margin-top:1rem}
.bf-note a{color:var(--brand-purple);text-decoration:none;border-bottom:1px solid var(--border-brand)}
.bf-success{text-align:center;padding:1.6rem .5rem}
.bf-success .ic{width:54px;height:54px;border-radius:50%;background:var(--success-soft);border:1px solid rgba(31,158,84,.3);color:var(--success);display:flex;align-items:center;justify-content:center;margin:0 auto 1.2rem}
.bf-success .ic svg{width:24px;height:24px}
.bf-success h3{font-size:1.3rem;margin-bottom:0}
.bf-success-actions{display:flex;justify-content:center;gap:.7rem;flex-wrap:wrap;margin-top:1.6rem}
.promise{display:inline-flex;align-items:center;gap:.55rem;font-family:var(--font-mono);font-size:.74rem;color:var(--success)}

/* brochure cover preview */
.bro-cover{position:relative;border-radius:18px;overflow:hidden;background:var(--brand-gradient);color:#fff;box-shadow:var(--shadow-brand);padding:2.4rem 2.2rem;min-height:440px;display:flex;flex-direction:column}
.bro-cover::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px);background-size:30px 30px;mask-image:radial-gradient(circle at 80% 12%,#000,transparent 72%);pointer-events:none}
.bro-cover::after{content:"";position:absolute;top:-30%;right:-18%;width:60%;height:80%;background:radial-gradient(circle,rgba(165,138,243,.55),transparent 62%);pointer-events:none}
.bro-cover-head{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;margin-bottom:auto}
.bro-cover-logo{height:26px;width:auto;display:block}
.bro-cover-tag{font-family:var(--font-mono);font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.82);border:1px solid rgba(255,255,255,.25);border-radius:999px;padding:.28rem .7rem}
.bro-cover-body{position:relative;z-index:1;margin-top:2.4rem}
.bro-cover-kicker{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.7);margin-bottom:.9rem}
.bro-cover-body h3{font-family:var(--font-heading);font-weight:500;font-size:clamp(1.6rem,2.6vw,2.2rem);line-height:1.12;letter-spacing:-.02em;color:#fff;margin-bottom:1rem;max-width:16ch}
.bro-cover-body p{color:rgba(255,255,255,.75);font-size:.97rem;line-height:1.55;max-width:34ch}
.bro-cover-foot{position:relative;z-index:1;margin-top:2.2rem;padding-top:1.4rem;border-top:1px solid rgba(255,255,255,.16);display:flex;flex-wrap:wrap;gap:.5rem .6rem}
.bro-cover-foot span{font-family:var(--font-mono);font-size:.62rem;letter-spacing:.04em;color:rgba(255,255,255,.78);background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.18);border-radius:999px;padding:.26rem .6rem}
.bro-cover-corner{position:absolute;bottom:0;right:0;width:0;height:0;border-style:solid;border-width:0 0 56px 56px;border-color:transparent transparent rgba(255,255,255,.14) transparent}

/* what's inside checklist */
.inside-item{display:flex;gap:1.1rem;align-items:flex-start}
.inside-ic{width:46px;height:46px;flex:none;border-radius:12px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center}
.inside-ic svg{width:22px;height:22px}
.inside-item h3{margin-bottom:.4rem}
.inside-item p{color:var(--text-body);font-size:.97rem;line-height:1.55}
.inside-num{font-family:var(--font-mono);font-size:.66rem;letter-spacing:.1em;color:var(--brand-purple);display:block;margin-bottom:.5rem}

/* why cards */
.why-ic{width:46px;height:46px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.2rem;box-shadow:var(--shadow-sm)}
.why-ic svg{width:23px;height:23px}

/* spec strip */
.spec-row{display:flex;flex-wrap:wrap;gap:2.4rem 3.2rem;margin-top:2.6rem}
.spec b{font-family:var(--font-heading);font-weight:600;font-size:1.04rem;color:var(--primary);display:flex;align-items:center;gap:.5rem}
.spec b svg{width:17px;height:17px;color:var(--brand-purple)}
.spec span{display:block;font-family:var(--font-mono);font-size:.74rem;color:var(--text-faded);margin-top:.4rem;letter-spacing:.01em}

/* final */
.bro-final{text-align:center}
.bro-final h2{max-width:20ch;margin:0 auto 1.3rem}
.bro-final .lede{margin:0 auto 2.4rem}
.bro-final .cta-row{justify-content:center}

@media(max-width:980px){
  .bro-hero{grid-template-columns:1fr;gap:2.6rem}
  .bro-cover{min-height:0}
}
@media(max-width:560px){
  .brochure-form-card{padding:1.6rem}
  .bro-cover{padding:1.8rem 1.6rem}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="brochure-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="bro-hero">
              <div>
                <div className="eyebrow reveal in">Brochure</div>
                <h1 className="reveal in">
                  The AI OS for e-commerce, in <span className="grad">one PDF.</span>
                </h1>
                <p className="lede reveal in">
                  See how Vortex IQ detects, explains, and fixes revenue leaks across your commerce stack —
                  the platform, the pillars, security, integrations, pricing, and the outcomes teams see.
                  Drop your details and we&apos;ll send the brochure over.
                </p>
                <div className="bro-meta reveal in">
                  <span className="chip chip--brand">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /></svg>
                    PDF overview
                  </span>
                  <span className="chip">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 7.5 8 10 4.5-2.5 8-5 8-10V6Z" /><path d="m9 12 2 2 4-4" /></svg>
                    ISO 27001 certified
                  </span>
                  <span className="chip">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                    2-minute read
                  </span>
                </div>
                <div className="bro-form-wrap reveal in">
                  <BrochureForm />
                </div>
              </div>

              <div className="reveal in">
                <div className="bro-cover">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <div className="bro-cover-head">
                    <img className="bro-cover-logo" src="https://cdn.prod.website-files.com/68bff49fa25caa581ab0524a/68c2a7984b7702411158df14_vlogo-white.svg" alt="Vortex IQ" />
                    <span className="bro-cover-tag">Brochure 2026</span>
                  </div>
                  <div className="bro-cover-body">
                    <div className="bro-cover-kicker">Detect · Explain · Fix</div>
                    <h3>The AI Operating System for E-Commerce.</h3>
                    <p>One operating system that watches your revenue, tells you what broke in plain English, and fixes it safely on live traffic.</p>
                  </div>
                  <div className="bro-cover-foot">
                    <span>Platform overview</span>
                    <span>The six AI pillars</span>
                    <span>Security &amp; trust</span>
                    <span>Integrations</span>
                    <span>Pricing</span>
                    <span>Outcomes</span>
                  </div>
                  <span className="bro-cover-corner" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INSIDE */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">What&apos;s inside</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>Six chapters that explain the whole platform.</h2>
            <p className="lede reveal" style={{ marginTop: "1.2rem" }}>
              No fluff — just a clear walk through how the AI OS works, how it stays safe, what it connects to,
              and what it costs.
            </p>
            <div className="grid grid-3" style={{ marginTop: "2.8rem" }}>
              <div className="card reveal">
                <span className="inside-num">01</span>
                <div className="inside-item">
                  <span className="inside-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg></span>
                  <div>
                    <h3>Platform overview</h3>
                    <p>The big picture: how the AI Operating System sits across your stack and runs the detect → explain → fix loop on autopilot.</p>
                  </div>
                </div>
              </div>
              <div className="card reveal">
                <span className="inside-num">02</span>
                <div className="inside-item">
                  <span className="inside-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3 3 3 0 0 0-3 3 3 3 0 0 0 0 6 3 3 0 0 0 3 5 3 3 0 0 0 6 0 3 3 0 0 0 3-5 3 3 0 0 0 0-6 3 3 0 0 0-3-3 3 3 0 0 0-3-3Z" /><path d="M12 8v8M9 12h6" /></svg></span>
                  <div>
                    <h3>The six AI pillars</h3>
                    <p>Nerve Centre, Vortex Mind, Ask Viq, Vortex Apps, Actions, and Vortex Memory — what each one does and how they work together.</p>
                  </div>
                </div>
              </div>
              <div className="card reveal">
                <span className="inside-num">03</span>
                <div className="inside-item">
                  <span className="inside-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 7.5 8 10 4.5-2.5 8-5 8-10V6Z" /><path d="m9 12 2 2 4-4" /></svg></span>
                  <div>
                    <h3>Security &amp; trust</h3>
                    <p>ISO 27001 certification, how agents act with guardrails and human approval, and the controls that keep live revenue safe.</p>
                  </div>
                </div>
              </div>
              <div className="card reveal">
                <span className="inside-num">04</span>
                <div className="inside-item">
                  <span className="inside-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 7h3a4 4 0 0 1 0 8h-3M10 17H7a4 4 0 0 1 0-8h3" /><path d="M8 12h8" /></svg></span>
                  <div>
                    <h3>Integrations</h3>
                    <p>Works with Shopify Plus, BigCommerce, and Adobe Commerce — plus how data flows in and actions flow back out to your stack.</p>
                  </div>
                </div>
              </div>
              <div className="card reveal">
                <span className="inside-num">05</span>
                <div className="inside-item">
                  <span className="inside-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></span>
                  <div>
                    <h3>Pricing overview</h3>
                    <p>How packaging works and what to expect as you scale — so you can size Vortex IQ to your team before you talk to sales.</p>
                  </div>
                </div>
              </div>
              <div className="card reveal">
                <span className="inside-num">06</span>
                <div className="inside-item">
                  <span className="inside-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m7 14 3-3 3 3 5-6" /></svg></span>
                  <div>
                    <h3>Outcomes</h3>
                    <p>Where teams put the AI OS to work first, the operational load it takes off, and how to read the impact on revenue and cost.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="spec-row reveal">
              <div className="spec">
                <b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /></svg>PDF format</b>
                <span>Read it anywhere, share it with your team</span>
              </div>
              <div className="spec">
                <b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>Quick read</b>
                <span>The whole platform in a few minutes</span>
              </div>
              <div className="spec">
                <b><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 7.5 8 10 4.5-2.5 8-5 8-10V6Z" /></svg>Built for buyers</b>
                <span>Security, pricing &amp; integrations covered</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHY TEAMS CHOOSE VORTEX IQ */}
        <section className="section">
          <div className="container">
            <div className="eyebrow reveal">Why teams choose Vortex IQ</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>More than a report. An operating system that acts.</h2>
            <div className="grid grid-4" style={{ marginTop: "2.8rem" }}>
              <div className="card reveal">
                <div className="why-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.4" /><path d="m5.6 5.6 3 3M15.4 15.4l3 3M18.4 5.6l-3 3M8.6 15.4l-3 3" /></svg></div>
                <h3>Always watching</h3>
                <p className="muted" style={{ fontSize: ".97rem" }}>Agents monitor your store around the clock and flag revenue leaks the moment they appear — not at the next reporting cycle.</p>
              </div>
              <div className="card reveal">
                <div className="why-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" /><path d="M8 9h8M8 13h5" /></svg></div>
                <h3>Plain-English answers</h3>
                <p className="muted" style={{ fontSize: ".97rem" }}>Ask Viq explains what changed and why in language anyone on the team can act on — no dashboards to decode.</p>
              </div>
              <div className="card reveal">
                <div className="why-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" /></svg></div>
                <h3>Fixes, safely</h3>
                <p className="muted" style={{ fontSize: ".97rem" }}>Actions ship the fix on live traffic with guardrails and approval, so the loop closes without risking revenue.</p>
              </div>
              <div className="card reveal">
                <div className="why-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 7.5 8 10 4.5-2.5 8-5 8-10V6Z" /><path d="m9 12 2 2 4-4" /></svg></div>
                <h3>Enterprise-ready</h3>
                <p className="muted" style={{ fontSize: ".97rem" }}>ISO 27001 certified and built to plug into Shopify Plus, BigCommerce, and Adobe Commerce without re-platforming.</p>
              </div>
            </div>
            <div className="cta-row reveal" style={{ marginTop: "2.8rem" }}>
              <Link className="btn btn--ghost" href="/ai-os-platform">Explore the platform →</Link>
              <Link className="textlink" href="/customer-stories">See customer stories</Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section section--soft bro-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Ready for the full picture?</div>
            <h2 className="reveal">Read the brochure, then see it run on your store.</h2>
            <p className="lede reveal">
              The PDF gives you the overview. A demo shows the AI OS detecting, explaining, and fixing a real
              problem on your own catalogue and data.
            </p>
            <div className="cta-row reveal">
              <a className="btn" href="#request" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Get the brochure</a>
              <Link className="btn btn--ghost" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Book a demo →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
