import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Summit by Vortex IQ | The AI Studio for Commerce Agents",
  description:
    "Summit is the AI Studio where teams design, test, and deploy their own commerce AI agents on the Vortex IQ operating system — no data-science team required.",
};

const css = `
/* ============ Summit · AI Studio — page styles (built on the shared design system) ============ */
.summit-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.summit-page .section--soft{background:var(--surface-soft)}

/* hero */
.summit-hero{text-align:center;max-width:840px;margin:0 auto}
.summit-hero .eyebrow{justify-content:center}
.summit-hero h1{max-width:17ch;margin:0 auto 1.5rem}
.summit-hero .lede{margin:0 auto 2.2rem}
.summit-hero .cta-row{justify-content:center}
.summit-hero .statusbar{margin:0 auto 2rem}
.summit-marquee{display:flex;flex-wrap:wrap;justify-content:center;gap:.6rem;margin-top:2.6rem}

/* studio canvas mock (hero + what-is) */
.studio-canvas{position:relative;border:1px solid var(--border-dark);border-radius:16px;background:linear-gradient(180deg,#faf8ff,#fff);box-shadow:var(--shadow-lg);overflow:hidden}
.studio-canvas::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(85,41,214,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(85,41,214,.06) 1px,transparent 1px);background-size:26px 26px;mask-image:radial-gradient(circle at 50% 30%,#000,transparent 85%);pointer-events:none}
.studio-bar{position:relative;display:flex;align-items:center;gap:.6rem;padding:.85rem 1.1rem;border-bottom:1px solid var(--border-dark);background:var(--white)}
.studio-bar .dots{display:flex;gap:.4rem}
.studio-bar .dots i{width:10px;height:10px;border-radius:50%;background:var(--neutral-2);display:block}
.studio-bar .tt{font-family:var(--font-mono);font-size:.72rem;color:var(--text-faded);margin-left:.4rem}
.studio-bar .live{margin-left:auto;font-family:var(--font-mono);font-size:.68rem;color:var(--success);display:inline-flex;align-items:center;gap:.4rem}
.studio-body{position:relative;display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;padding:1.6rem}
.node{position:relative;background:var(--white);border:1px solid var(--border-dark);border-radius:12px;padding:1rem 1.05rem;box-shadow:var(--shadow-sm);z-index:1}
.node .nh{display:flex;align-items:center;gap:.6rem;margin-bottom:.55rem}
.node .ni{width:30px;height:30px;flex:none;border-radius:8px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center}
.node .ni svg{width:16px;height:16px}
.node .nt{font-family:var(--font-mono);font-size:.62rem;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faded)}
.node b{font-family:var(--font-heading);font-weight:600;font-size:.96rem;color:var(--primary);display:block}
.node span.nm{font-size:.84rem;color:var(--text-body);display:block;margin-top:.3rem;line-height:1.4}
.node--out{background:var(--brand-gradient);border-color:transparent;color:#fff}
.node--out .nt{color:rgba(255,255,255,.65)}
.node--out b{color:#fff}
.node--out .ni{background:rgba(255,255,255,.16);border-color:rgba(255,255,255,.3);color:#fff}
.node--out span.nm{color:rgba(255,255,255,.8)}
.flow{position:relative;display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:.66rem;color:var(--text-faded)}
.flow svg{width:26px;height:26px;color:var(--brand-purple-light)}

/* what-is split */
.summit-points{list-style:none;margin-top:1.8rem;display:grid;gap:1rem}
.summit-points li{display:flex;gap:.85rem;align-items:flex-start}
.summit-points .pk{width:26px;height:26px;flex:none;border-radius:8px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center;margin-top:.1rem}
.summit-points .pk svg{width:15px;height:15px}
.summit-points b{font-family:var(--font-heading);font-weight:600;font-size:1.02rem;color:var(--primary)}
.summit-points span{display:block;font-size:.96rem;color:var(--text-body);line-height:1.55;margin-top:.15rem}

/* numbered build steps (loop aesthetic) */
.build-steps{counter-reset:step;display:grid;grid-template-columns:repeat(4,1fr);gap:0;border:1px solid var(--border-dark);border-radius:var(--radius);overflow:hidden;background:var(--white);margin-top:2.8rem}
.bstep{position:relative;padding:2rem 1.5rem;border-right:1px solid var(--border-dark);transition:background .2s}
.bstep:last-child{border-right:none}
.bstep:hover{background:var(--surface-tint)}
.bstep .num{counter-increment:step;font-family:var(--font-mono);font-size:.7rem;letter-spacing:.14em;color:var(--brand-purple);text-transform:uppercase;display:flex;align-items:center;gap:.6rem;margin-bottom:1rem}
.bstep .num::before{content:"0" counter(step);font-family:var(--font-heading);font-weight:700;font-size:1.6rem;letter-spacing:-.02em;color:var(--primary);line-height:1}
.bstep .bi{width:40px;height:40px;border-radius:11px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.1rem;box-shadow:var(--shadow-sm)}
.bstep .bi svg{width:21px;height:21px}
.bstep h3{margin-bottom:.5rem}
.bstep p{font-size:.93rem;color:var(--text-body);line-height:1.55;margin:0}
.bstep::after{content:"";position:absolute;left:0;right:0;bottom:0;height:2px;background:var(--brand-gradient-soft);transform:scaleX(0);transform-origin:left;animation:sweep 8s infinite}
.bstep:nth-child(1)::after{animation-delay:0s}
.bstep:nth-child(2)::after{animation-delay:1.6s}
.bstep:nth-child(3)::after{animation-delay:3.2s}
.bstep:nth-child(4)::after{animation-delay:4.8s}

/* example agents */
.agent-ic{width:46px;height:46px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.2rem;box-shadow:var(--shadow-sm)}
.agent-ic svg{width:23px;height:23px}
.agent-tag{font-family:var(--font-mono);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-purple);background:var(--surface-tint);border:1px solid var(--border-brand);padding:.2rem .55rem;border-radius:999px;display:inline-block;margin-bottom:1rem}

/* built-on pillars */
.pillar{display:flex;flex-direction:column;height:100%}
.pillar-ic{width:48px;height:48px;border-radius:12px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center;margin-bottom:1.3rem}
.pillar-ic svg{width:24px;height:24px}
.pillar-link{display:inline-flex;align-items:center;gap:.4rem;font-family:var(--font-mono);font-size:.8rem;color:var(--brand-purple);text-decoration:none;margin-top:1.2rem;border-bottom:1px solid var(--border-brand);padding-bottom:2px;transition:border-color .2s;align-self:flex-start}
.card:hover .pillar-link{border-color:var(--brand-purple)}

/* guardrails strip */
.guard-row{display:flex;flex-wrap:wrap;gap:.7rem;margin-top:2.4rem}
.guard-chip{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.76rem;color:var(--text-body);background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius-pill);padding:.5rem .95rem}
.guard-chip svg{width:15px;height:15px;flex:none;color:var(--brand-purple)}

/* final */
.summit-final{text-align:center}
.summit-final h2{max-width:20ch;margin:0 auto 1.3rem}
.summit-final .lede{margin:0 auto 2.4rem}
.summit-final .cta-row{justify-content:center}

@media(max-width:1024px){
  .build-steps{grid-template-columns:repeat(2,1fr)}
  .bstep:nth-child(2){border-right:none}
  .bstep:nth-child(1),.bstep:nth-child(2){border-bottom:1px solid var(--border-dark)}
}
@media(max-width:760px){
  .studio-body{grid-template-columns:1fr}
  .flow{height:30px}
  .flow svg{transform:rotate(90deg)}
}
@media(max-width:640px){
  .build-steps{grid-template-columns:1fr}
  .bstep{border-right:none;border-bottom:1px solid var(--border-dark)}
  .bstep:last-child{border-bottom:none}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="summit-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="summit-hero">
              <div className="statusbar reveal in">
                <span className="dot" /> Early access · Now onboarding teams
              </div>
              <div className="eyebrow reveal in">Summit · AI Studio</div>
              <h1 className="reveal in">
                Build your own <span className="grad">commerce AI agents</span> — no data-science team required.
              </h1>
              <p className="lede reveal in">
                Summit is the AI Studio on the Vortex IQ operating system. Design an agent, give it a job,
                set the guardrails, and deploy it to watch your store 24/7 — all from one visual canvas.
              </p>
              <div className="cta-row reveal in">
                <Link className="btn" href="/contact-us">Get early access</Link>
                <Link className="btn btn--ghost" href="/ai-os-platform">Explore the AI OS →</Link>
              </div>
              <div className="summit-marquee reveal in">
                <span className="chip chip--brand">Visual canvas</span>
                <span className="chip chip--brand">No code</span>
                <span className="chip chip--brand">Human approvals</span>
                <span className="chip chip--brand">Runs on the AI OS</span>
                <span className="chip chip--brand">Shopify · BigCommerce · Adobe Commerce</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT IS SUMMIT */}
        <section className="section section--soft">
          <div className="container">
            <div className="split">
              <div className="reveal">
                <div className="eyebrow">What is Summit</div>
                <h2>Your team&apos;s agents, built on top of the <span className="grad">AI OS.</span></h2>
                <p className="lede" style={{ marginTop: "1.4rem" }}>
                  The Vortex IQ AI OS already detects issues, explains them in plain English, and fixes them.
                  Summit hands that engine to your team so you can build agents for the work that is specific
                  to your catalogue, your margins, and your way of running a store.
                </p>
                <ul className="summit-points">
                  <li>
                    <span className="pk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></span>
                    <div><b>Built in plain English</b><span>Describe the job in words. Summit assembles the agent from the AI OS&apos;s building blocks — no notebooks, no pipelines.</span></div>
                  </li>
                  <li>
                    <span className="pk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg></span>
                    <div><b>Safe by default</b><span>Every agent runs inside the same guardrails, approvals, and audit trail your store already trusts. Nothing ships without permission.</span></div>
                  </li>
                  <li>
                    <span className="pk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
                    <div><b>Working 24/7</b><span>Deploy once and the agent keeps watch — flagging the problem, drafting the fix, and waiting for your sign-off whenever something moves.</span></div>
                  </li>
                </ul>
              </div>

              <div className="reveal">
                <div className="studio-canvas">
                  <div className="studio-bar">
                    <div className="dots"><i /><i /><i /></div>
                    <span className="tt">summit · catalogue-qa-agent</span>
                    <span className="live"><span className="dot" /> Live</span>
                  </div>
                  <div className="studio-body">
                    <div className="node">
                      <div className="nh">
                        <span className="ni"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" /><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" /></svg></span>
                        <span className="nt">Source</span>
                      </div>
                      <b>Catalogue</b>
                      <span className="nm">12,480 products synced</span>
                    </div>
                    <div className="flow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
                    <div className="node">
                      <div className="nh">
                        <span className="ni"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg></span>
                        <span className="nt">Job</span>
                      </div>
                      <b>Detect</b>
                      <span className="nm">Missing specs &amp; bad images</span>
                    </div>
                    <div className="flow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
                    <div className="node node--out" style={{ gridColumn: "1 / -1" }}>
                      <div className="nh">
                        <span className="ni"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                        <span className="nt">Action · awaiting approval</span>
                      </div>
                      <b>Fix 38 listings</b>
                      <span className="nm">Draft fixes ready — one click to approve, or let the agent ship automatically inside your rules.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BUILD IT VISUALLY — numbered steps */}
        <section className="section">
          <div className="container">
            <div className="eyebrow reveal">Build it visually</div>
            <h2 className="reveal" style={{ maxWidth: "22ch" }}>From idea to a working agent in four steps.</h2>
            <p className="lede reveal" style={{ marginTop: "1.2rem" }}>
              No pipelines to wire up. Summit walks you from connected data to a live, monitored agent — and
              you stay in control at every step.
            </p>
            <div className="build-steps">
              <div className="bstep reveal">
                <div className="num">Step</div>
                <div className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h6M9 16h6M9 8h6" /><rect x="4" y="3" width="16" height="18" rx="2" /></svg></div>
                <h3>Connect your data</h3>
                <p>Point Summit at your store. Catalogue, orders, pricing, and content sync from Shopify Plus, BigCommerce, or Adobe Commerce in minutes.</p>
              </div>
              <div className="bstep reveal">
                <div className="num">Step</div>
                <div className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.9 6.9a2.12 2.12 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" /></svg></div>
                <h3>Define the agent&apos;s job</h3>
                <p>Describe what it should watch for and what a good fix looks like — in plain English. Summit turns it into a repeatable agent on the AI OS.</p>
              </div>
              <div className="bstep reveal">
                <div className="num">Step</div>
                <div className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg></div>
                <h3>Set guardrails &amp; approvals</h3>
                <p>Decide what the agent can do on its own and what needs a human sign-off. Add limits, exclusions, and approval steps so nothing ships by surprise.</p>
              </div>
              <div className="bstep reveal">
                <div className="num">Step</div>
                <div className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m7 14 3-3 3 3 5-6" /></svg></div>
                <h3>Deploy &amp; monitor</h3>
                <p>Ship the agent live and watch it work from one dashboard. Every detection, explanation, and fix is logged with a full audit trail.</p>
              </div>
            </div>
            <div className="guard-row reveal">
              <span className="guard-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>Human-in-the-loop approvals</span>
              <span className="guard-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9h4" /></svg>Full audit trail</span>
              <span className="guard-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="m9 12 2 2 4-4" /></svg>ISO 27001 certified</span>
              <span className="guard-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9" /><path d="M3 4v5h5" /></svg>Roll back anytime</span>
            </div>
          </div>
        </section>

        {/* EXAMPLE AGENTS / USE CASES */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">Example agents</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>Start from a template, or build your own.</h2>
            <p className="lede reveal" style={{ marginTop: "1.2rem" }}>
              These are the kinds of agents teams stand up first in Summit. Each one watches a part of the
              store, explains what it finds, and proposes a fix — you decide what ships.
            </p>
            <div className="grid grid-3" style={{ marginTop: "2.8rem" }}>
              <div className="card reveal">
                <div className="agent-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5M12 22V12" /></svg></div>
                <span className="agent-tag">Catalogue</span>
                <h3>Catalogue QA agent</h3>
                <p className="muted">Scans every listing for missing specs, broken images, empty descriptions, and stray duplicates — then drafts the fixes for review.</p>
              </div>
              <div className="card reveal">
                <div className="agent-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
                <span className="agent-tag">Pricing</span>
                <h3>Pricing watch agent</h3>
                <p className="muted">Keeps an eye on price gaps, broken rules, and margin drops across your catalogue and flags anything that needs a human decision.</p>
              </div>
              <div className="card reveal">
                <div className="agent-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H4v5l11 11 5-5L9 5Z" /><circle cx="6.5" cy="7.5" r="1" /><path d="M16 3h4M18 1v4" /></svg></div>
                <span className="agent-tag">Promotions</span>
                <h3>Promo audit agent</h3>
                <p className="muted">Checks live discounts and campaigns for clashes, expired codes, and rules that overlap before they cost you revenue.</p>
              </div>
              <div className="card reveal">
                <div className="agent-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg></div>
                <span className="agent-tag">Content</span>
                <h3>Content refresh agent</h3>
                <p className="muted">Rewrites tired titles, descriptions, and metadata to stay on-brand and search-friendly as your range evolves.</p>
              </div>
              <div className="card reveal">
                <div className="agent-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg></div>
                <span className="agent-tag">Inventory</span>
                <h3>Stock &amp; availability agent</h3>
                <p className="muted">Spots out-of-stock bestsellers, broken availability, and orphaned variants — and surfaces them before customers hit a dead end.</p>
              </div>
              <div className="card reveal">
                <div className="agent-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6M8 11h6" /></svg></div>
                <span className="agent-tag">Discovery</span>
                <h3>On-site search agent</h3>
                <p className="muted">Reviews search and category results for zero-result queries and poor relevance, then proposes the fixes that recover the click.</p>
              </div>
            </div>
            <div className="cta-row reveal" style={{ marginTop: "2.8rem" }}>
              <Link className="btn btn--ghost" href="/customer-stories">See agents in the wild →</Link>
            </div>
          </div>
        </section>

        {/* BUILT ON THE AI OS — pillars */}
        <section className="section">
          <div className="container">
            <div className="eyebrow reveal">Built on the AI OS</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>Every Summit agent stands on the same engine.</h2>
            <p className="lede reveal" style={{ marginTop: "1.2rem" }}>
              Summit isn&apos;t a separate tool bolted on the side — it&apos;s a studio on top of the Vortex IQ
              operating system. The pillars that power our own agents power yours too.
            </p>
            <div className="grid grid-3" style={{ marginTop: "2.8rem" }}>
              <div className="card card--tint reveal">
                <div className="pillar">
                  <div className="pillar-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a4 4 0 1 1 8 0c0 1.5-.8 2.5-1.7 3.3-.7.6-1.3 1.2-1.3 2.2v.5M12 22h.01M12 2a7 7 0 0 0-7 7M19 9a7 7 0 0 0-7-7" /></svg></div>
                  <h3>Ask Viq</h3>
                  <p className="muted">The conversational layer. Your agents explain what they find in plain English, and your team can interrogate any result by just asking.</p>
                  <Link className="pillar-link" href="/ask-viq">Explore Ask Viq →</Link>
                </div>
              </div>
              <div className="card card--tint reveal">
                <div className="pillar">
                  <div className="pillar-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m13 2-3 7h5l-3 7" /><circle cx="12" cy="12" r="9" /></svg></div>
                  <h3>Actions</h3>
                  <p className="muted">The hands. When an agent&apos;s fix is approved, Actions executes it safely on your live store — within the rules and limits you set.</p>
                  <Link className="pillar-link" href="/actions">Explore Actions →</Link>
                </div>
              </div>
              <div className="card card--tint reveal">
                <div className="pillar">
                  <div className="pillar-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a5 5 0 0 0-5 5v1a4 4 0 0 0-1 8 4 4 0 0 0 7 1 4 4 0 0 0 7-1 4 4 0 0 0-1-8V7a5 5 0 0 0-7-5Z" /><path d="M12 7v13" /></svg></div>
                  <h3>Vortex Memory</h3>
                  <p className="muted">The context. Agents remember your store&apos;s history, decisions, and what good looks like — so every fix fits how you actually operate.</p>
                  <Link className="pillar-link" href="/vortex-memory">Explore Vortex Memory →</Link>
                </div>
              </div>
            </div>
            <div className="cta-row reveal" style={{ marginTop: "2.8rem" }}>
              <Link className="btn btn--ghost" href="/ai-os-platform">See the full AI OS platform →</Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section summit-final section--soft">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Get early access</div>
            <h2 className="reveal">Put your first agent to work in Summit.</h2>
            <p className="lede reveal">
              We&apos;re onboarding teams into Summit now. Bring a job you wish ran itself — we&apos;ll show you
              how to build the agent, set its guardrails, and deploy it safely on your live store.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Get early access</Link>
              <Link className="btn btn--ghost" href="/ai-os-platform" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Explore the AI OS →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
