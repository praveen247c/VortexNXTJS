import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security & Trust Center | ISO 27001, Approvals & Rollback | Vortex IQ",
  description:
    "How Vortex IQ keeps your data and storefront safe: ISO 27001, least-privilege access, human approvals on every change, full audit trails, and one-click rollback.",
};

const css = `
/* ============ Trust Center — page styles (built on the shared design system) ============ */
.trust-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.trust-page .section--soft{background:var(--surface-soft)}

/* hero */
.trust-hero{text-align:center;max-width:840px;margin:0 auto}
.trust-hero .eyebrow{justify-content:center}
.trust-hero .statusbar{margin:0 auto 2rem}
.trust-hero h1{max-width:18ch;margin:0 auto 1.5rem}
.trust-hero .lede{margin:0 auto 2.1rem}
.trust-hero .cta-row{justify-content:center}
.trust-hero .shield-dot{width:7px;height:7px;border-radius:50%;background:var(--success);box-shadow:0 0 0 0 rgba(31,158,84,.45);animation:pulse 2.4s infinite}

/* trust pillars */
.pillar-ic{width:48px;height:48px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.3rem;box-shadow:var(--shadow-sm)}
.pillar-ic svg{width:24px;height:24px}
.pillar-tag{font-family:var(--font-mono);font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-purple);background:var(--surface-tint);border:1px solid var(--border-brand);padding:.22rem .55rem;border-radius:999px;display:inline-block;margin-top:1.1rem}

/* safety model steps */
.safe-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:3.5rem;align-items:start}
.safe-steps{display:flex;flex-direction:column;gap:0}
.safe-step{display:flex;gap:1.2rem;padding:1.5rem 0;border-bottom:1px solid var(--border-dark)}
.safe-step:last-child{border-bottom:none}
.safe-num{width:40px;height:40px;flex:none;border-radius:11px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:.9rem;font-weight:500}
.safe-step b{display:block;font-family:var(--font-heading);font-weight:600;font-size:1.08rem;margin-bottom:.3rem;letter-spacing:-.01em}
.safe-step p{color:var(--text-body);font-size:.97rem;line-height:1.55;margin:0}
.safe-link{display:inline-flex;align-items:center;gap:.4rem;font-family:var(--font-mono);font-size:.8rem;color:var(--brand-purple);text-decoration:none;margin-top:1.6rem;margin-right:1.4rem;border-bottom:1px solid var(--border-brand);padding-bottom:2px;transition:border-color .2s}
.safe-link:hover{border-color:var(--brand-purple)}

/* action panel mock */
.action-panel{background:var(--white);border:1px solid var(--border-dark);border-radius:16px;box-shadow:var(--shadow-lg);overflow:hidden}
.ap-head{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem 1.2rem;border-bottom:1px solid var(--border-dark);background:var(--surface-soft)}
.ap-head .ttl{font-family:var(--font-mono);font-size:.74rem;letter-spacing:.04em;color:var(--primary);display:flex;align-items:center;gap:.5rem}
.ap-head .ttl svg{width:15px;height:15px;color:var(--brand-purple)}
.ap-body{padding:1.3rem 1.2rem}
.ap-line{display:flex;align-items:center;gap:.75rem;padding:.7rem 0;border-bottom:1px solid var(--border-dark)}
.ap-line:last-of-type{border-bottom:none}
.ap-line .ic{width:26px;height:26px;flex:none;border-radius:7px;display:flex;align-items:center;justify-content:center}
.ap-line .ic svg{width:15px;height:15px}
.ap-line .ic--ok{background:var(--success-soft);color:var(--success);border:1px solid rgba(31,158,84,.3)}
.ap-line .ic--brand{background:var(--surface-tint);color:var(--brand-purple);border:1px solid var(--border-brand)}
.ap-line .tx{flex:1;min-width:0}
.ap-line .tx b{display:block;font-family:var(--font-heading);font-weight:600;font-size:.92rem}
.ap-line .tx span{display:block;font-family:var(--font-mono);font-size:.7rem;color:var(--text-faded);margin-top:.1rem}
.ap-foot{display:flex;align-items:center;gap:.8rem;margin-top:1.1rem;flex-wrap:wrap}
.ap-approve{flex:1;min-width:120px;display:inline-flex;align-items:center;justify-content:center;gap:.45rem;height:40px;border-radius:var(--radius-pill);background:var(--brand-purple);color:#fff;font-family:var(--font-body);font-weight:500;font-size:.9rem}
.ap-approve svg{width:15px;height:15px}
.ap-rollback{display:inline-flex;align-items:center;gap:.45rem;height:40px;padding:0 16px;border-radius:var(--radius-pill);border:1px solid var(--border-strong);color:var(--primary);font-family:var(--font-body);font-weight:500;font-size:.9rem;background:transparent}
.ap-rollback svg{width:15px;height:15px}

/* compliance list */
.comp-row{display:flex;align-items:flex-start;gap:1.1rem;padding:1.4rem 0;border-bottom:1px solid var(--border-dark)}
.comp-row:last-child{border-bottom:none}
.comp-ic{width:44px;height:44px;flex:none;border-radius:11px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center}
.comp-ic svg{width:21px;height:21px}
.comp-tx b{display:block;font-family:var(--font-heading);font-weight:600;font-size:1.06rem;letter-spacing:-.01em;margin-bottom:.25rem}
.comp-tx span{display:block;font-size:.96rem;color:var(--text-body);line-height:1.55}
.comp-tx a{color:var(--brand-purple);text-decoration:none;border-bottom:1px solid var(--border-brand)}
.comp-aside{background:var(--brand-gradient);border-radius:var(--radius);color:#fff;padding:2.2rem;box-shadow:var(--shadow-brand)}
.comp-aside .iso-badge{width:56px;height:56px;border-radius:14px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.22);display:flex;align-items:center;justify-content:center;margin-bottom:1.3rem}
.comp-aside .iso-badge svg{width:28px;height:28px;color:#fff}
.comp-aside h3{color:#fff;margin-bottom:.6rem}
.comp-aside p{color:rgba(255,255,255,.78);font-size:.96rem;line-height:1.6}
.comp-aside .doc-link{display:inline-flex;align-items:center;gap:.45rem;font-family:var(--font-mono);font-size:.82rem;color:#fff;text-decoration:none;margin-top:1.5rem;border-bottom:1px solid rgba(255,255,255,.4);padding-bottom:2px;transition:border-color .2s}
.comp-aside .doc-link:hover{border-color:#fff}

/* status section */
.status-card{display:flex;align-items:center;justify-content:space-between;gap:2rem;flex-wrap:wrap;background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2rem 2.2rem;box-shadow:var(--shadow-sm)}
.status-left{display:flex;align-items:center;gap:1.2rem}
.status-orb{width:48px;height:48px;flex:none;border-radius:12px;background:var(--success-soft);border:1px solid rgba(31,158,84,.3);color:var(--success);display:flex;align-items:center;justify-content:center}
.status-orb svg{width:23px;height:23px}
.status-left b{display:block;font-family:var(--font-heading);font-weight:600;font-size:1.1rem}
.status-left span{display:flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.78rem;color:var(--text-body);margin-top:.3rem}

/* disclosure */
.disc-card{background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius);padding:2.4rem}
.disc-card .d-ic{width:50px;height:50px;border-radius:13px;background:var(--white);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center;margin-bottom:1.3rem}
.disc-card .d-ic svg{width:24px;height:24px}
.disc-mail{display:inline-flex;align-items:center;gap:.6rem;font-family:var(--font-mono);font-size:.92rem;color:var(--brand-purple);background:var(--white);border:1px solid var(--border-brand);border-radius:var(--radius-pill);padding:.6rem 1.1rem;text-decoration:none;margin-top:1.4rem;transition:border-color .2s,box-shadow .2s,transform .2s}
.disc-mail:hover{border-color:var(--brand-purple);box-shadow:var(--shadow-sm);transform:translateY(-1px)}
.disc-mail svg{width:16px;height:16px}
.disc-list{list-style:none;padding:0;margin:0}
.disc-list li{display:flex;gap:.8rem;padding:.55rem 0;font-size:.97rem;color:var(--text-body);line-height:1.5}
.disc-list li svg{width:18px;height:18px;flex:none;color:var(--brand-purple);margin-top:.2rem}

/* final */
.trust-final{text-align:center}
.trust-final h2{max-width:20ch;margin:0 auto 1.3rem}
.trust-final .lede{margin:0 auto 2.4rem}
.trust-final .cta-row{justify-content:center}

@media(max-width:900px){
  .safe-grid{grid-template-columns:1fr;gap:2.4rem}
}
@media(max-width:560px){
  .status-card{padding:1.6rem}
  .disc-card{padding:1.6rem}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="trust-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="trust-hero">
              <div className="eyebrow reveal in">Security & Trust</div>
              <div className="statusbar reveal in">
                <span className="shield-dot" />
                ISO 27001 certified
              </div>
              <h1 className="reveal in">
                AI that acts on your store — with <span className="grad">guardrails built in.</span>
              </h1>
              <p className="lede reveal in">
                Vortex IQ runs agents on live revenue, so trust is the product. Every change is least-privilege,
                human-approved, fully logged, and reversible in one click. Here is exactly how we keep your data
                and your storefront safe.
              </p>
              <div className="cta-row reveal in">
                <Link className="btn" href="/contact-us">Talk to security</Link>
                <a className="btn btn--ghost" href="https://docs.vortexiq.ai/" target="_blank" rel="noopener noreferrer">
                  Read the docs →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST PILLARS */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">The foundations</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>
              Security is a default, not an add-on.
            </h2>
            <p className="lede reveal" style={{ marginTop: "1.2rem", marginBottom: "2.8rem" }}>
              Four principles hold up everything we build. They apply to your data at rest, your data in motion,
              and every action an agent takes on your behalf.
            </p>
            <div className="grid grid-4">
              <div className="card reveal">
                <div className="pillar-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
                </div>
                <h3>Certified ISO 27001</h3>
                <p className="muted">
                  Our information security management system is independently certified to ISO/IEC 27001 — the
                  global standard for managing risk across people, process and technology.
                </p>
                <span className="pillar-tag">Independently audited</span>
              </div>
              <div className="card reveal">
                <div className="pillar-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /><path d="M12 16v2" /></svg>
                </div>
                <h3>Encrypted, in transit & at rest</h3>
                <p className="muted">
                  Data is encrypted in transit with TLS and at rest in our cloud infrastructure. Secrets and
                  credentials are stored in managed key vaults, never in plain text.
                </p>
                <span className="pillar-tag">TLS + at-rest encryption</span>
              </div>
              <div className="card reveal">
                <div className="pillar-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M6 21v-1a4 4 0 0 1 4-4h1" /><path d="M16 19h6" /><path d="m19 16-3 3 3 3" /></svg>
                </div>
                <h3>Least-privilege access</h3>
                <p className="muted">
                  Agents and people get the narrowest scopes that get the job done — nothing more. Access is
                  role-based, time-bound and revocable, and we only request the store permissions we need.
                </p>
                <span className="pillar-tag">Scoped & revocable</span>
              </div>
              <div className="card reveal">
                <div className="pillar-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" /></svg>
                </div>
                <h3>UK & EU GDPR aligned</h3>
                <p className="muted">
                  We process personal data in line with UK GDPR and the EU GDPR, with a clear lawful basis,
                  data-subject rights honoured, and a Data Processing Agreement available on request.
                </p>
                <span className="pillar-tag">UK GDPR + EU GDPR</span>
              </div>
            </div>
          </div>
        </section>

        {/* HOW AGENTS ACT SAFELY */}
        <section className="section">
          <div className="container">
            <div className="safe-grid">
              <div className="reveal">
                <div className="eyebrow">How agents act safely</div>
                <h2 style={{ maxWidth: "18ch" }}>
                  Nothing changes on your store <span className="grad">without you.</span>
                </h2>
                <p className="lede" style={{ marginTop: "1.2rem", marginBottom: "1.6rem" }}>
                  An agent can detect a problem and draft the fix — but it does not act on its own. Every Action
                  follows the same safe path, end to end.
                </p>
                <div className="safe-steps">
                  <div className="safe-step">
                    <span className="safe-num">1</span>
                    <div>
                      <b>Human approval on every change</b>
                      <p>The agent proposes a fix in plain English, scoped to exactly what will change. A person reviews and approves before anything touches live data.</p>
                    </div>
                  </div>
                  <div className="safe-step">
                    <span className="safe-num">2</span>
                    <div>
                      <b>Full audit trail</b>
                      <p>Who proposed it, who approved it, what changed and when — every Action is logged immutably, so you always have a defensible record of what happened.</p>
                    </div>
                  </div>
                  <div className="safe-step">
                    <span className="safe-num">3</span>
                    <div>
                      <b>One-click rollback</b>
                      <p>If a change is not what you wanted, revert it in a single click. The previous state is preserved, so undoing is as safe and fast as applying.</p>
                    </div>
                  </div>
                  <div className="safe-step">
                    <span className="safe-num">4</span>
                    <div>
                      <b>Staging & backups</b>
                      <p>Test changes against a safe environment and keep restore points of your storefront with Vortex Apps, so risky work never starts on production.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Link className="safe-link" href="/actions">Explore Actions →</Link>
                  <Link className="safe-link" href="/vortex-apps">Staging & backups →</Link>
                </div>
              </div>

              <div className="reveal">
                <div className="action-panel">
                  <div className="ap-head">
                    <span className="ttl">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13z" /></svg>
                      Action · awaiting approval
                    </span>
                    <span className="chip chip--brand">Scoped</span>
                  </div>
                  <div className="ap-body">
                    <div className="ap-line">
                      <span className="ic ic--brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg></span>
                      <span className="tx"><b>Detected: 142 products missing meta titles</b><span>nerve centre · catalogue</span></span>
                    </div>
                    <div className="ap-line">
                      <span className="ic ic--brand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg></span>
                      <span className="tx"><b>Proposed: generate & apply SEO titles</b><span>preview before publish</span></span>
                    </div>
                    <div className="ap-line">
                      <span className="ic ic--ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                      <span className="tx"><b>Restore point saved</b><span>rollback ready · vortex apps</span></span>
                    </div>
                    <div className="ap-foot">
                      <span className="ap-approve">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                        Approve change
                      </span>
                      <span className="ap-rollback">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v6h6" /><path d="M3.5 13a9 9 0 1 0 2.6-7.6L3 8" /></svg>
                        Rollback
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIANCE & CERTIFICATIONS */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">Compliance & certifications</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>
              The paperwork your security team will ask for.
            </h2>
            <div className="split" style={{ marginTop: "2.8rem", gridTemplateColumns: "1.15fr .85fr" }}>
              <div className="reveal">
                <div className="comp-row">
                  <span className="comp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg></span>
                  <div className="comp-tx">
                    <b>ISO/IEC 27001</b>
                    <span>Independently certified information security management system covering how we manage data, access and operational risk. Certificate available on request.</span>
                  </div>
                </div>
                <div className="comp-row">
                  <span className="comp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" /></svg></span>
                  <div className="comp-tx">
                    <b>UK GDPR & EU GDPR</b>
                    <span>We process personal data lawfully, honour data-subject rights, and minimise what we collect. Our practices align with the UK GDPR and the EU GDPR.</span>
                  </div>
                </div>
                <div className="comp-row">
                  <span className="comp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M9 15h6M9 18h4" /></svg></span>
                  <div className="comp-tx">
                    <b>Data Processing Agreement (DPA)</b>
                    <span>A DPA covering controller/processor responsibilities and international transfers is available on request — just <Link href="/contact-us">talk to us</Link>.</span>
                  </div>
                </div>
                <div className="comp-row">
                  <span className="comp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></span>
                  <div className="comp-tx">
                    <b>Sub-processors</b>
                    <span>We use a small set of vetted cloud and AI sub-processors to run the platform. A current list is available on request so you can complete your own due diligence.</span>
                  </div>
                </div>
              </div>

              <aside className="reveal">
                <div className="comp-aside">
                  <div className="iso-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
                  </div>
                  <h3>Need our certificate or DPA?</h3>
                  <p>
                    Security questionnaires, our ISO 27001 certificate, the DPA and our sub-processor list are
                    all available to prospects and customers under NDA. Tell us what your review needs and we
                    will send it over.
                  </p>
                  <Link className="doc-link" href="/contact-us">Request security pack →</Link>
                </div>
              </aside>
            </div>
            <p className="muted reveal" style={{ fontSize: ".88rem", marginTop: "2rem", maxWidth: "70ch" }}>
              We only claim what we hold today: ISO 27001 certification and GDPR alignment. We will not overstate
              our posture — if a framework is on the roadmap rather than in place, we will say so.
            </p>
          </div>
        </section>

        {/* RELIABILITY & STATUS */}
        <section className="section">
          <div className="container">
            <div className="eyebrow reveal">Reliability & status</div>
            <h2 className="reveal" style={{ maxWidth: "22ch" }}>
              See how the platform is running, in real time.
            </h2>
            <p className="lede reveal" style={{ marginTop: "1.2rem", marginBottom: "2.6rem" }}>
              Our public status page shows live uptime and any active incidents. We monitor the platform around
              the clock so issues are caught and communicated quickly.
            </p>
            <a className="status-card reveal" href="https://monitor.vortexiq.ai/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="status-left">
                <span className="status-orb">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                </span>
                <div>
                  <b>Platform status</b>
                  <span><span className="dot" />Live uptime & incident history</span>
                </div>
              </div>
              <span className="btn btn--ghost btn--sm">
                View status page
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}><path d="M7 17 17 7M7 7h10v10" /></svg>
              </span>
            </a>
          </div>
        </section>

        {/* RESPONSIBLE DISCLOSURE */}
        <section className="section section--soft">
          <div className="container">
            <div className="split" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="reveal">
                <div className="eyebrow">Responsible disclosure</div>
                <h2 style={{ maxWidth: "16ch" }}>Found something? Tell us.</h2>
                <p className="lede" style={{ marginTop: "1.2rem" }}>
                  We welcome reports from security researchers. If you believe you have found a vulnerability in
                  Vortex IQ, let us know and we will work with you to confirm and resolve it quickly.
                </p>
                <ul className="disc-list" style={{ marginTop: "1.4rem" }}>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    Email us with steps to reproduce and any supporting detail.
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    Please give us reasonable time to investigate and fix before any public disclosure.
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    Do not access, modify or delete data that is not yours, and act in good faith.
                  </li>
                </ul>
              </div>

              <div className="reveal">
                <div className="disc-card">
                  <div className="d-ic">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="M12 8v4M12 16h.01" /></svg>
                  </div>
                  <h3>Report a security issue</h3>
                  <p className="muted">
                    Send vulnerability reports to our security inbox. If you do not get a reply, reach our main
                    team and they will route it to the right person.
                  </p>
                  <a className="disc-mail" href="mailto:security@vortexiq.ai?subject=Security%20vulnerability%20report">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                    security@vortexiq.ai
                  </a>
                  <p className="muted" style={{ fontSize: ".88rem", marginTop: "1.2rem" }}>
                    Fallback: <a href="mailto:hey@vortexiq.ai" style={{ color: "var(--brand-purple)" }}>hey@vortexiq.ai</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section trust-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Ready to dig in</div>
            <h2 className="reveal">Bring your security review. We will meet it.</h2>
            <p className="lede reveal">
              Send us your questionnaire, ask for the ISO 27001 certificate and DPA, or get a walkthrough of how
              approvals, audit trails and rollback work on a real store.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Talk to security</Link>
              <a className="btn btn--ghost" href="https://docs.vortexiq.ai/" target="_blank" rel="noopener noreferrer" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Read the docs →</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
