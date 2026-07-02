import type { Metadata } from "next";
import Link from "next/link";
import HubSpotForm from "@/components/HubSpotForm";

export const metadata: Metadata = {
  title: "Agency Partner Programme | Grow with AI | Vortex IQ",
  description:
    "Turn your agency into a proactive AI operations partner. Monitor every client store, bill for outcomes, and earn recurring revenue with the Vortex IQ Agency Partner Programme.",
  openGraph: { description: "Grow your client base without growing headcount. The Vortex IQ Agency Partner Programme: always-on monitoring, recurring revenue share, and co-sell." },
};

const css = `
/* ============ Agency Partner Program — page styles (built on the shared design system) ============ */
.prog-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.prog-page .section--soft{background:var(--surface-soft)}

/* hero */
.prog-hero{text-align:center;max-width:860px;margin:0 auto}
.prog-hero .eyebrow{justify-content:center}
.prog-hero h1{max-width:18ch;margin:0 auto 1.5rem}
.prog-hero .lede{margin:0 auto 2.1rem}
.prog-hero .cta-row{justify-content:center;margin-bottom:2.4rem}
.prog-proof{display:flex;flex-wrap:wrap;justify-content:center;gap:.6rem}
.prog-chip{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.72rem;letter-spacing:.04em;color:var(--text-body);background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius-pill);padding:.42rem .9rem}
.prog-chip svg{width:14px;height:14px;flex:none;color:var(--brand-purple)}

/* section heads */
.prog-head{max-width:760px}
.prog-head h2{max-width:20ch}
.prog-head .lede{margin-top:1.3rem}

/* feature icon */
.prog-ic{width:48px;height:48px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.3rem;box-shadow:var(--shadow-sm)}
.prog-ic svg{width:24px;height:24px}
.prog-card-note{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.05em;color:var(--brand-purple);margin-top:1.1rem;display:inline-flex;align-items:center;gap:.4rem}

/* stat strip */
.prog-eco{display:flex;flex-direction:column;align-items:flex-start;text-align:left}
.prog-eco .stat{margin-bottom:.2rem}

/* steps */
.prog-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--bento-gap);margin-top:2.8rem}
.prog-step{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2rem 1.8rem;position:relative;transition:transform .25s var(--ease),border-color .25s,box-shadow .3s}
.prog-step:hover{transform:translateY(-3px);border-color:var(--border-strong);box-shadow:var(--shadow-lg)}
.prog-step .num{font-family:var(--font-mono);font-size:.78rem;color:#fff;background:var(--brand-purple);width:34px;height:34px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:1.2rem}
.prog-step h3{font-size:1.08rem;margin-bottom:.5rem}
.prog-step p{color:var(--text-body);font-size:.94rem;line-height:1.55}

/* final */
/* apply form */
.prog-apply{text-align:center}
.prog-apply h2{max-width:20ch;margin:0 auto 1.3rem}
.prog-apply .lede{margin:0 auto 2.4rem}
.prog-form-card{max-width:720px;margin:0 auto;text-align:left;background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2.4rem;box-shadow:var(--shadow-sm)}

.prog-final{text-align:center}
.prog-final h2{max-width:20ch;margin:0 auto 1.3rem}
.prog-final .lede{margin:0 auto 2.4rem}
.prog-final .cta-row{justify-content:center}

@media(max-width:1024px){.prog-steps{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.prog-steps{grid-template-columns:1fr}}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="prog-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="prog-hero">
              <div className="eyebrow reveal in">Agency Partner Programme</div>
              <h1 className="reveal in">
                Scale your portfolio, <span className="grad">not your headcount.</span>
              </h1>
              <p className="lede reveal in">
                Turn your agency into a proactive AI operations partner. Monitor every client store with always-on
                agents, surface issues before the phone rings, and bill for outcomes instead of hours, all on the
                AI Operating System for commerce.
              </p>
              <div className="cta-row reveal in">
                <a className="btn" href="#apply">Become a partner</a>
                <Link className="btn btn--ghost" href="/solutions/for-agencies">Solutions for agencies →</Link>
              </div>
              <div className="prog-proof reveal in">
                <span className="prog-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  Recurring revenue share
                </span>
                <span className="prog-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 3 7v6c0 5 3.8 8.3 9 9 5.2-.7 9-4 9-9V7Z" /></svg>
                  ISO 27001 certified
                </span>
                <span className="prog-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>
                  Shopify Plus · BigCommerce · Adobe Commerce
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="section section--soft">
          <div className="container">
            <div className="prog-head reveal">
              <div className="eyebrow">What you get</div>
              <h2>Turn maintenance into margin.</h2>
              <p className="lede">
                Everything you need to run more clients profitably, without adding people. The platform does the
                watching and the heavy lifting, so your team can focus on strategy and growth.
              </p>
            </div>
            <div className="grid grid-4" style={{ marginTop: "2.8rem" }}>
              <div className="card reveal">
                <div className="prog-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg></div>
                <h3>Multi-client monitoring</h3>
                <p className="muted">Watch every connected store from one place. Agents detect issues across SEO, performance, data and operations before your clients ever notice.</p>
                <span className="prog-card-note">Detect. Explain. Fix.</span>
              </div>
              <div className="card reveal">
                <div className="prog-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></div>
                <h3>Recurring revenue share</h3>
                <p className="muted">Earn a recurring share on every client you bring onto the platform, plus margin on paid custom agents you build and run on their behalf.</p>
                <span className="prog-card-note">Predictable income</span>
              </div>
              <div className="card reveal">
                <div className="prog-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 7 4v6c0 4.5-3 7-7 8-4-1-7-3.5-7-8V7Z" /><path d="m9 12 2 2 4-4" /></svg></div>
                <h3>Safe, reversible fixes</h3>
                <p className="muted">Every action is staged, governed and reversible. Run agents against live client revenue with confidence, and a full audit trail behind you.</p>
                <span className="prog-card-note">Staging · Backup · Rollback</span>
              </div>
              <div className="card reveal">
                <div className="prog-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11 22 2l-9 19-2-8-8-2Z" /></svg></div>
                <h3>Co-selling &amp; marketing</h3>
                <p className="muted">Co-branded assets, joint campaigns, a partner directory listing and our team alongside you in pitches and demos when you need them.</p>
                <span className="prog-card-note">We help you close</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF STRIP */}
        <section className="section">
          <div className="container">
            <div className="prog-head reveal">
              <div className="eyebrow">Why agencies choose Vortex IQ</div>
              <h2>Built to make your agency look good.</h2>
            </div>
            <div className="grid grid-3" style={{ marginTop: "2.4rem" }}>
              <div className="card card--tint prog-eco reveal">
                <div className="stat stat--accent">65%</div>
                <div className="stat-label">average increase in operational efficiency reported by merchants on the platform for 12 months or more.</div>
              </div>
              <div className="card card--tint prog-eco reveal">
                <div className="stat stat--accent">24/7</div>
                <div className="stat-label">always-on agents monitoring every connected client store, so nothing slips through overnight.</div>
              </div>
              <div className="card card--tint prog-eco reveal">
                <div className="stat stat--accent">Elite</div>
                <div className="stat-label">BigCommerce technology partner status, with reach across tens of thousands of merchants.</div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section section--soft">
          <div className="container">
            <div className="prog-head reveal">
              <div className="eyebrow">How it works</div>
              <h2>From first conversation to first revenue.</h2>
              <p className="lede">Becoming an agency partner is straightforward. Here is the path most agencies follow.</p>
            </div>
            <div className="prog-steps">
              <div className="prog-step reveal">
                <span className="num">01</span>
                <h3>Apply</h3>
                <p>Tell us about your agency and client base. We&apos;ll set up a short call to map the opportunity.</p>
              </div>
              <div className="prog-step reveal">
                <span className="num">02</span>
                <h3>Onboard</h3>
                <p>Get platform access, enablement and certification so your team knows the AI OS inside out.</p>
              </div>
              <div className="prog-step reveal">
                <span className="num">03</span>
                <h3>Connect clients</h3>
                <p>Bring your first stores onto the platform, switch on monitoring, and start showing live value fast.</p>
              </div>
              <div className="prog-step reveal">
                <span className="num">04</span>
                <h3>Grow</h3>
                <p>Scale across your portfolio with co-selling, marketing support and recurring revenue share behind you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* APPLY FORM */}
        <section className="section prog-apply" id="apply">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Apply</div>
            <h2 className="reveal">Become a Vortex IQ agency partner.</h2>
            <p className="lede reveal">
              Tell us about your agency and client base. We&apos;ll set up a short call to map the opportunity and
              get you onboarded.
            </p>
            <div className="prog-form-card reveal">
              <HubSpotForm portalId="24385350" formId="4857e012-4296-4375-8804-6ec9596ee01a" region="na1" />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section section--soft prog-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Let&apos;s grow together</div>
            <h2 className="reveal">Run more clients, profitably.</h2>
            <p className="lede reveal">
              Run more clients, profitably. An army of AI agents works in the background. The first
              conversation is short, and the upside is recurring.
            </p>
            <div className="cta-row reveal">
              <a className="btn" href="#apply" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Become a partner</a>
              <Link className="btn btn--ghost" href="/partners" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>View all partner programmes →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
