import type { Metadata } from "next";
import Link from "next/link";
import HubSpotForm from "@/components/HubSpotForm";

export const metadata: Metadata = {
  title: "Technology Partner Programme | AI Integration | Vortex IQ",
  description:
    "Make your platform agentic. Connect your app to the Vortex IQ AI Operating System, give shared merchants AI digital workers, and ship AI features in weeks, not years.",
  openGraph: { description: "Make your platform agentic in weeks. Connect to the Vortex IQ AI Operating System, give shared merchants AI digital workers, and co-sell." },
};

const css = `
/* ============ Technology Partner Program — page styles (built on the shared design system) ============ */
.prog-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.prog-page .section--soft{background:var(--surface-soft)}

.prog-hero{text-align:center;max-width:860px;margin:0 auto}
.prog-hero .eyebrow{justify-content:center}
.prog-hero h1{max-width:18ch;margin:0 auto 1.5rem}
.prog-hero .lede{margin:0 auto 2.1rem}
.prog-hero .cta-row{justify-content:center;margin-bottom:2.4rem}
.prog-proof{display:flex;flex-wrap:wrap;justify-content:center;gap:.6rem}
.prog-chip{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.72rem;letter-spacing:.04em;color:var(--text-body);background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius-pill);padding:.42rem .9rem}
.prog-chip svg{width:14px;height:14px;flex:none;color:var(--brand-purple)}

.prog-head{max-width:760px}
.prog-head h2{max-width:20ch}
.prog-head .lede{margin-top:1.3rem}

.prog-ic{width:48px;height:48px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.3rem;box-shadow:var(--shadow-sm)}
.prog-ic svg{width:24px;height:24px}
.prog-card-note{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.05em;color:var(--brand-purple);margin-top:1.1rem;display:inline-flex;align-items:center;gap:.4rem}

.prog-eco{display:flex;flex-direction:column;align-items:flex-start;text-align:left}
.prog-eco .stat{margin-bottom:.2rem}

.prog-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--bento-gap);margin-top:2.8rem}
.prog-step{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2rem 1.8rem;position:relative;transition:transform .25s var(--ease),border-color .25s,box-shadow .3s}
.prog-step:hover{transform:translateY(-3px);border-color:var(--border-strong);box-shadow:var(--shadow-lg)}
.prog-step .num{font-family:var(--font-mono);font-size:.78rem;color:#fff;background:var(--brand-purple);width:34px;height:34px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:1.2rem}
.prog-step h3{font-size:1.08rem;margin-bottom:.5rem}
.prog-step p{color:var(--text-body);font-size:.94rem;line-height:1.55}

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
              <div className="eyebrow reveal in">Technology Partner Programme</div>
              <h1 className="reveal in">
                Make your platform <span className="grad">agentic.</span>
              </h1>
              <p className="lede reveal in">
                Connect your platform or app to the Vortex IQ AI Operating System. Give shared merchants AI digital
                workers that act on your data, and ship AI features in weeks, not years, without building an
                agent stack from scratch.
              </p>
              <div className="cta-row reveal in">
                <a className="btn" href="#apply">Become a partner</a>
                <Link className="btn btn--ghost" href="/solutions/for-tech-partners">Solutions for tech partners →</Link>
              </div>
              <div className="prog-proof reveal in">
                <span className="prog-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  Native integrations
                </span>
                <span className="prog-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 3 7v6c0 5 3.8 8.3 9 9 5.2-.7 9-4 9-9V7Z" /></svg>
                  ISO 27001 certified
                </span>
                <span className="prog-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                  Co-selling &amp; joint GTM
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
              <h2>Ship AI features in weeks, not years.</h2>
              <p className="lede">
                Plug into a production-grade agent platform and put it to work on your data. We bring the AI OS,
                the safety layer and the merchant base. You bring the platform your customers already love.
              </p>
            </div>
            <div className="grid grid-4" style={{ marginTop: "2.8rem" }}>
              <div className="card reveal">
                <div className="prog-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m7 8-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" /></svg></div>
                <h3>Native integrations</h3>
                <p className="muted">Connect your platform or app to the AI OS with documented connectors. Agents read and act on your data the moment a shared merchant turns it on.</p>
                <span className="prog-card-note">Documented connectors</span>
              </div>
              <div className="card reveal">
                <div className="prog-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></svg></div>
                <h3>AI digital workers</h3>
                <p className="muted">Give shared merchants always-on agents that detect, explain and fix, powered by your platform&apos;s data, without you building an agent runtime.</p>
                <span className="prog-card-note">Built on the AI OS</span>
              </div>
              <div className="card reveal">
                <div className="prog-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 7 4v6c0 4.5-3 7-7 8-4-1-7-3.5-7-8V7Z" /><path d="m9 12 2 2 4-4" /></svg></div>
                <h3>Built-in safety layer</h3>
                <p className="muted">Staging, backup, governance and rollback are part of the platform. Merchants get agentic AI they can trust against live revenue, and so do you.</p>
                <span className="prog-card-note">ISO 27001</span>
              </div>
              <div className="card reveal">
                <div className="prog-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11 22 2l-9 19-2-8-8-2Z" /></svg></div>
                <h3>Co-selling &amp; reach</h3>
                <p className="muted">Joint go-to-market, co-branded assets and a directory listing put your integration in front of a growing base of commerce teams.</p>
                <span className="prog-card-note">Joint go-to-market</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF STRIP */}
        <section className="section">
          <div className="container">
            <div className="prog-head reveal">
              <div className="eyebrow">Why platforms partner with us</div>
              <h2>One integration, agentic everywhere.</h2>
            </div>
            <div className="grid grid-3" style={{ marginTop: "2.4rem" }}>
              <div className="card card--tint prog-eco reveal">
                <div className="stat stat--accent">3</div>
                <div className="stat-label">major commerce platforms supported out of the box: Shopify Plus, BigCommerce and Adobe Commerce.</div>
              </div>
              <div className="card card--tint prog-eco reveal">
                <div className="stat stat--accent">Weeks</div>
                <div className="stat-label">to live AI features for shared merchants, instead of the years it takes to build an agent platform in-house.</div>
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
              <h2>From integration to joint go-to-market.</h2>
              <p className="lede">Becoming a technology partner is straightforward. Here is how most platforms get started.</p>
            </div>
            <div className="prog-steps">
              <div className="prog-step reveal">
                <span className="num">01</span>
                <h3>Apply</h3>
                <p>Tell us about your platform and the merchants you serve. We&apos;ll scope the integration together.</p>
              </div>
              <div className="prog-step reveal">
                <span className="num">02</span>
                <h3>Integrate</h3>
                <p>Connect to the AI OS with documented connectors and our team&apos;s support. No agent runtime to build.</p>
              </div>
              <div className="prog-step reveal">
                <span className="num">03</span>
                <h3>Launch</h3>
                <p>Turn on AI digital workers for shared merchants and validate value on real stores, safely.</p>
              </div>
              <div className="prog-step reveal">
                <span className="num">04</span>
                <h3>Go to market</h3>
                <p>Co-sell, co-market and grow your install base with joint campaigns and a directory listing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* APPLY FORM */}
        <section className="section prog-apply" id="apply">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Apply</div>
            <h2 className="reveal">Become a Vortex IQ technology partner.</h2>
            <p className="lede reveal">
              Tell us about your platform and the merchants you serve. We&apos;ll scope the integration together and
              get you started.
            </p>
            <div className="prog-form-card reveal">
              <HubSpotForm portalId="24385350" formId="51222874-54b8-462a-b1c4-73164b7f1404" region="na1" />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section section--soft prog-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Let&apos;s build together</div>
            <h2 className="reveal">Make your platform agentic.</h2>
            <p className="lede reveal">
              Reach a growing base of commerce teams, without building the agent stack yourself. The first
              conversation is short.
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
