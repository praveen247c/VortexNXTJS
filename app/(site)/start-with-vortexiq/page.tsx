import type { Metadata } from "next";
import Link from "next/link";
import HubSpotForm from "@/components/HubSpotForm";

export const metadata: Metadata = {
  alternates: { canonical: "/start-with-vortexiq" },
  title: "Start with Vortex IQ | Book a Demo or 14-Day Free Trial",
  description:
    "Get started with the AI Operating System for commerce. Start a 14-day free trial or book a live demo. Connect your store and put AI agents to work in minutes.",
};

const css = `
/* ============ Start with Vortex IQ — page styles (built on the shared design system) ============ */
.start-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.start-page .section--soft{background:var(--surface-soft)}

.start-hero{text-align:center;max-width:840px;margin:0 auto}
.start-hero .eyebrow{justify-content:center}
.start-hero h1{max-width:16ch;margin:0 auto 1.5rem}
.start-hero .lede{margin:0 auto 2.1rem}

/* two paths */
.start-paths{display:grid;grid-template-columns:repeat(2,1fr);gap:var(--bento-gap);margin-top:.5rem}
.start-path{display:flex;flex-direction:column;align-items:flex-start;text-align:left;height:100%}
.start-path .prog-ic{width:48px;height:48px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.3rem;box-shadow:var(--shadow-sm)}
.start-path .prog-ic svg{width:24px;height:24px}
.start-path h3{font-size:1.32rem;margin-bottom:.5rem}
.start-path p{flex:1;margin-bottom:1.4rem}
.start-feats{list-style:none;margin:0 0 1.6rem;padding:0;display:flex;flex-direction:column;gap:.55rem;width:100%}
.start-feats li{display:flex;align-items:flex-start;gap:.6rem;font-size:.92rem;color:var(--text-body);line-height:1.45}
.start-feats li svg{width:16px;height:16px;flex:none;color:var(--brand-purple);margin-top:.15rem}

/* steps */
.start-head{max-width:760px}
.start-head h2{max-width:18ch}
.start-head .lede{margin-top:1.3rem}
.start-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--bento-gap);margin-top:2.8rem}
.start-step{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2rem 1.8rem;position:relative;transition:transform .25s var(--ease),border-color .25s,box-shadow .3s}
.start-step:hover{transform:translateY(-3px);border-color:var(--border-strong);box-shadow:var(--shadow-lg)}
.start-step .num{font-family:var(--font-mono);font-size:.78rem;color:#fff;background:var(--brand-purple);width:34px;height:34px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:1.2rem}
.start-step h3{font-size:1.08rem;margin-bottom:.5rem}
.start-step p{color:var(--text-body);font-size:.94rem;line-height:1.55}

/* demo form */
.start-demo{text-align:center}
.start-demo h2{max-width:18ch;margin:0 auto 1.3rem}
.start-demo .lede{margin:0 auto 2.4rem}
.start-form-card{max-width:720px;margin:0 auto;text-align:left;background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2.4rem;box-shadow:var(--shadow-sm)}

.start-final{text-align:center}
.start-final h2{max-width:20ch;margin:0 auto 1.3rem}
.start-final .lede{margin:0 auto 2.4rem}
.start-final .cta-row{justify-content:center}

@media(max-width:760px){
  .start-paths{grid-template-columns:1fr}
  .start-steps{grid-template-columns:1fr}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="start-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="start-hero">
              <div className="eyebrow reveal in">Get started</div>
              <h1 className="reveal in">
                Put AI agents to work <span className="grad">in minutes.</span>
              </h1>
              <p className="lede reveal in">
                Connect your store to the AI Operating System for commerce and let agents detect, explain and fix
                problems across your stack. Start free, or see it run live on a guided demo, whichever suits you.
              </p>
            </div>
          </div>
        </section>

        {/* TWO PATHS */}
        <section className="section section--soft" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="start-paths">
              {/* Free trial */}
              <div className="card start-path reveal">
                <div className="prog-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" /></svg></div>
                <h3>Start a 14-day free trial</h3>
                <p className="muted">
                  Sign up with just your email, connect your store, and the AI OS gets to work. No credit card
                  required. See real value on your own data before you commit.
                </p>
                <ul className="start-feats">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>No credit card required</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Connect your store in minutes</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Free for 14 days</li>
                </ul>
                <a className="btn" href="https://app.vortexiq.ai/login" target="_blank" rel="noopener noreferrer">
                  Start free
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>

              {/* Book a demo */}
              <div className="card start-path reveal">
                <div className="prog-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg></div>
                <h3>Book a live demo</h3>
                <p className="muted">
                  Prefer to see it first? Get straight answers in under 20 minutes, no slides, no script. We&apos;ll
                  show the platform running against a real store and map it to your stack.
                </p>
                <ul className="start-feats">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Under 20 minutes, no slides</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Mapped to your stack</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Real questions, real answers</li>
                </ul>
                <a className="btn btn--ghost" href="#demo">
                  Book a demo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container">
            <div className="start-head reveal">
              <div className="eyebrow">How it works</div>
              <h2>From signup to first fix.</h2>
              <p className="lede">Getting value out of the AI OS takes minutes, not weeks. Here is the path.</p>
            </div>
            <div className="start-steps">
              <div className="start-step reveal">
                <span className="num">01</span>
                <h3>Connect your store</h3>
                <p>Link Shopify Plus, BigCommerce or Adobe Commerce. Setup takes minutes and needs no engineering.</p>
              </div>
              <div className="start-step reveal">
                <span className="num">02</span>
                <h3>Agents get to work</h3>
                <p>Always-on agents start monitoring SEO, performance, data and operations, and explain what they find in plain English.</p>
              </div>
              <div className="start-step reveal">
                <span className="num">03</span>
                <h3>Approve safe fixes</h3>
                <p>Review recommended actions and apply them with staging, backup and rollback behind you. Nothing happens without your say-so.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BOOK A DEMO FORM */}
        <section className="section section--soft start-demo" id="demo">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Book a demo</div>
            <h2 className="reveal">See it run on a real store.</h2>
            <p className="lede reveal">
              Tell us a little about your store and we&apos;ll get straight to it: answers in under 20 minutes, no
              slides, no script.
            </p>
            <div className="start-form-card reveal">
              <HubSpotForm portalId="24385350" formId="7d444765-fc6a-40ad-b6d9-a6be08a5893d" region="na1" />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section start-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Ready when you are</div>
            <h2 className="reveal">Start with Vortex IQ today.</h2>
            <p className="lede reveal">
              Spin up a free trial in minutes, or talk to us first. Either way, you&apos;ll see the AI OS for
              commerce working on a real store: detect, explain, fix.
            </p>
            <div className="cta-row reveal">
              <a className="btn" href="https://app.vortexiq.ai/login" target="_blank" rel="noopener noreferrer" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Start free</a>
              <a className="btn btn--ghost" href="#demo" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Book a demo →</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
