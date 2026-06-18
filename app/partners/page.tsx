import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Program | Build, Resell & Grow with Vortex IQ",
  description:
    "Join the Vortex IQ partner ecosystem. Whether you are an agency, technology platform, reseller, or student, there is a program designed to help you grow.",
};

const css = `
/* ============ Partners — page styles (built on the shared design system) ============ */
.partners-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.partners-page .section--soft{background:var(--surface-soft)}

/* hero */
.partners-hero{text-align:center;max-width:840px;margin:0 auto}
.partners-hero .eyebrow{justify-content:center}
.partners-hero h1{max-width:18ch;margin:0 auto 1.5rem}
.partners-hero .lede{margin:0 auto 2.1rem}
.partners-hero .cta-row{justify-content:center;margin-bottom:2.4rem}
.proof-row{display:flex;flex-wrap:wrap;justify-content:center;gap:.6rem}
.proof-chip{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.72rem;letter-spacing:.04em;color:var(--text-body);background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius-pill);padding:.42rem .9rem}
.proof-chip svg{width:14px;height:14px;flex:none;color:var(--brand-purple)}

/* partner type cards */
.ptype-ic{width:48px;height:48px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.3rem;box-shadow:var(--shadow-sm)}
.ptype-ic svg{width:24px;height:24px}
.ptype-card{display:flex;flex-direction:column;height:100%}
.ptype-tag{font-family:var(--font-mono);font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-purple);background:var(--surface-tint);border:1px solid var(--border-brand);padding:.2rem .55rem;border-radius:999px;align-self:flex-start;margin-bottom:1rem}
.ptype-card h3{font-size:1.28rem}
.ptype-card p{flex:1}
.ptype-feats{list-style:none;margin:1.1rem 0 0;padding:0;display:flex;flex-direction:column;gap:.55rem}
.ptype-feats li{display:flex;align-items:flex-start;gap:.6rem;font-size:.92rem;color:var(--text-body);line-height:1.45}
.ptype-feats li svg{width:16px;height:16px;flex:none;color:var(--brand-purple);margin-top:.15rem}
.ptype-link{display:inline-flex;align-items:center;gap:.4rem;font-family:var(--font-mono);font-size:.8rem;color:var(--brand-purple);text-decoration:none;margin-top:1.4rem;border-bottom:1px solid var(--border-brand);padding-bottom:2px;align-self:flex-start;transition:border-color .2s}
.card:hover .ptype-link{border-color:var(--brand-purple)}

/* benefits */
.benefit-ic{width:44px;height:44px;border-radius:11px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center;margin-bottom:1.2rem}
.benefit-ic svg{width:21px;height:21px}

/* steps */
.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--bento-gap);counter-reset:step;margin-top:2.8rem}
.step-card{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2rem 1.8rem;position:relative;transition:transform .25s var(--ease),border-color .25s,box-shadow .3s}
.step-card:hover{transform:translateY(-3px);border-color:var(--border-strong);box-shadow:var(--shadow-lg)}
.step-num{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.12em;color:var(--brand-purple);display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:11px;background:var(--surface-tint);border:1px solid var(--border-brand);margin-bottom:1.2rem;font-weight:500}
.step-card h3{font-size:1.1rem;margin-bottom:.5rem}
.step-card p{font-size:.94rem;color:var(--text-body);line-height:1.55;margin:0}
.step-card::after{content:"";position:absolute;top:3.1rem;right:-19px;width:14px;height:14px;border-top:1.5px solid var(--border-brand);border-right:1.5px solid var(--border-brand);transform:rotate(45deg);z-index:2}
.step-card:last-child::after{display:none}

/* eco strip */
.eco-card{display:flex;flex-direction:column;align-items:flex-start;text-align:left}
.eco-card .stat{margin-bottom:.2rem}

/* final */
.partners-final{text-align:center}
.partners-final h2{max-width:20ch;margin:0 auto 1.3rem}
.partners-final .lede{margin:0 auto 2.4rem}
.partners-final .cta-row{justify-content:center}

@media(max-width:1024px){
  .steps{grid-template-columns:repeat(2,1fr)}
  .step-card:nth-child(2)::after{display:none}
}
@media(max-width:640px){
  .steps{grid-template-columns:1fr}
  .step-card::after{display:none}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="partners-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="partners-hero">
              <div className="eyebrow reveal in">Partners</div>
              <h1 className="reveal in">
                Build, resell and grow with the <span className="grad">AI OS for commerce.</span>
              </h1>
              <p className="lede reveal in">
                Agencies, technology platforms, resellers and students all build on the same engine: the
                AI Operating System that detects, explains and fixes problems across a merchant&apos;s store.
                Pick the program that fits how you work — and put an army of AI agents to work for your clients.
              </p>
              <div className="cta-row reveal in">
                <Link className="btn" href="/contact-us">Become a partner</Link>
                <a className="btn btn--ghost" href="#programs">Explore programs →</a>
              </div>
              <div className="proof-row reveal in">
                <span className="proof-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  BigCommerce Elite Partner
                </span>
                <span className="proof-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 3 7v6c0 5 3.8 8.3 9 9 5.2-.7 9-4 9-9V7Z" /></svg>
                  ISO 27001 Certified
                </span>
                <span className="proof-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>
                  Shopify Plus · BigCommerce · Adobe Commerce
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNER TYPES */}
        <section id="programs" className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">Choose your program</div>
            <h2 className="reveal" style={{ maxWidth: "22ch" }}>One platform, four ways to partner with Vortex IQ.</h2>
            <p className="lede reveal" style={{ marginTop: "1.2rem", maxWidth: "62ch" }}>
              Every program shares the same foundation — real-time monitoring, plain-English explanations, and
              safe, reversible fixes — and adds the commercial model that suits how you grow.
            </p>

            <div className="grid grid-4" style={{ marginTop: "2.8rem" }}>
              {/* Agency */}
              <div className="card ptype-card reveal">
                <div className="ptype-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <span className="ptype-tag">Agency Partners</span>
                <h3>Run more clients, profitably.</h3>
                <p className="muted">
                  Turn your agency into a proactive operations partner. Monitor every client store, surface issues
                  before they call, and bill for outcomes — not just hours.
                </p>
                <ul className="ptype-feats">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Recurring revenue share</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Multi-client monitoring</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Paid custom agents</li>
                </ul>
                <Link className="ptype-link" href="/solutions/for-agencies">For agencies →</Link>
              </div>

              {/* Technology */}
              <div className="card ptype-card reveal">
                <div className="ptype-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /><path d="m7 8 2.5 2.5L7 13M13 13h4" /></svg>
                </div>
                <span className="ptype-tag">Technology Partners</span>
                <h3>Make your platform agentic.</h3>
                <p className="muted">
                  Connect your platform or app to the Vortex IQ AI OS. Give shared merchants AI digital workers
                  that act on your data, and reach a growing base of commerce teams.
                </p>
                <ul className="ptype-feats">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Native integrations</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Co-selling motions</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Joint go-to-market</li>
                </ul>
                <Link className="ptype-link" href="/solutions/for-tech-partners">For tech partners →</Link>
              </div>

              {/* Student */}
              <div className="card ptype-card reveal">
                <div className="ptype-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5" /></svg>
                </div>
                <span className="ptype-tag">Student Program</span>
                <h3>Start your AI career.</h3>
                <p className="muted">
                  Get hands-on inside a fast-moving commerce-AI team. Work on real agents, learn how the AI OS is
                  built, and ship things that merchants actually use.
                </p>
                <ul className="ptype-feats">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Real-world projects</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Mentorship from builders</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Portfolio-ready work</li>
                </ul>
                <Link className="ptype-link" href="/partners/student-program">Join the program →</Link>
              </div>

              {/* Referral */}
              <div className="card ptype-card reveal">
                <div className="ptype-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12" /><path d="m8 7 4-4 4 4" /><path d="M4 13v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" /></svg>
                </div>
                <span className="ptype-tag">Referral Program</span>
                <h3>Refer and earn.</h3>
                <p className="muted">
                  Know a merchant who&apos;d benefit from the AI OS? Send them our way and earn rewards when they
                  come on board. The simplest way to start partnering with Vortex IQ.
                </p>
                <ul className="ptype-feats">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>No commitment to start</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Reward per referral</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Track your sign-ups</li>
                </ul>
                <Link className="ptype-link" href="/register">Join referral program →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* WHY PARTNER */}
        <section className="section">
          <div className="container">
            <div className="eyebrow reveal">Why partner with us</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>Built to make partners look good — and grow faster.</h2>
            <p className="lede reveal" style={{ marginTop: "1.2rem", maxWidth: "60ch" }}>
              We do the heavy lifting on product, enablement and support so you can focus on your clients and your
              numbers. Here is what every Vortex IQ partner gets.
            </p>

            <div className="grid grid-3" style={{ marginTop: "2.8rem" }}>
              <div className="card reveal">
                <div className="benefit-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                <h3>Co-selling</h3>
                <p className="muted">Sell side by side with our team. We bring the platform expertise to your pitches, demos and deals, and help you close with confidence.</p>
              </div>

              <div className="card reveal">
                <div className="benefit-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2Z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7Z" /></svg></div>
                <h3>Enablement</h3>
                <p className="muted">Onboarding, certification paths and a full Help Centre so your team can implement and run the AI OS for clients without guesswork.</p>
              </div>

              <div className="card reveal">
                <div className="benefit-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
                <h3>Revenue share</h3>
                <p className="muted">Recurring revenue share, paid custom agents and reseller margins. Build a predictable income stream on top of the work you already do.</p>
              </div>

              <div className="card reveal">
                <div className="benefit-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" /></svg></div>
                <h3>Early access</h3>
                <p className="muted">Get new agents, modules and platform releases before anyone else. Shape the roadmap and stay a step ahead of the market with your clients.</p>
              </div>

              <div className="card reveal">
                <div className="benefit-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11 22 2l-9 19-2-8-8-2Z" /></svg></div>
                <h3>Marketing support</h3>
                <p className="muted">Co-branded assets, joint campaigns, webinars and a partner directory listing — so the work you do together gets seen by the right buyers.</p>
              </div>

              <div className="card reveal">
                <div className="benefit-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10" /><path d="M22 12A10 10 0 0 0 12 2v10Z" /></svg></div>
                <h3>Dedicated support</h3>
                <p className="muted">A named partner contact, priority support and a clear escalation path. When your client needs an answer fast, so do we.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">How it works</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>From first conversation to first revenue.</h2>
            <p className="lede reveal" style={{ marginTop: "1.2rem", maxWidth: "58ch" }}>
              Becoming a Vortex IQ partner is straightforward. Here is the path most partners take.
            </p>

            <div className="steps">
              <div className="step-card reveal">
                <span className="step-num">01</span>
                <h3>Apply</h3>
                <p>Tell us about your business and the program that fits. We&apos;ll set up a short call to map the opportunity.</p>
              </div>
              <div className="step-card reveal">
                <span className="step-num">02</span>
                <h3>Onboard</h3>
                <p>Get access to the platform, enablement and certification so your team knows the AI OS inside out.</p>
              </div>
              <div className="step-card reveal">
                <span className="step-num">03</span>
                <h3>Launch</h3>
                <p>Connect your first stores or integration, switch on monitoring, and start showing clients live value.</p>
              </div>
              <div className="step-card reveal">
                <span className="step-num">04</span>
                <h3>Grow</h3>
                <p>Scale across clients with co-selling, marketing support and recurring revenue share behind you.</p>
              </div>
            </div>

            <div className="grid grid-3" style={{ marginTop: "2.8rem" }}>
              <div className="card card--tint eco-card reveal">
                <div className="stat stat--accent">Elite</div>
                <div className="stat-label">BigCommerce technology partner status, with access for tens of thousands of merchants.</div>
              </div>
              <div className="card card--tint eco-card reveal">
                <div className="stat stat--accent">3</div>
                <div className="stat-label">Major platforms supported out of the box: Shopify Plus, BigCommerce and Adobe Commerce.</div>
              </div>
              <div className="card card--tint eco-card reveal">
                <div className="stat stat--accent">24/7</div>
                <div className="stat-label">Always-on AI agents monitoring every connected store, so your clients are never caught out.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section partners-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Let&apos;s build together</div>
            <h2 className="reveal">Become a Vortex IQ partner.</h2>
            <p className="lede reveal">
              Tell us how you work and we&apos;ll match you to the right program — agency, technology, reseller or
              student. The first conversation is short, and the upside is recurring.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Become a partner</Link>
              <Link className="btn btn--ghost" href="/ai-os-platform" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Explore the platform →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
