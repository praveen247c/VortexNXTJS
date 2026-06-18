import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integrations | Connect Every Commerce System | Vortex IQ",
  description:
    "Vortex IQ connects the commerce platforms, analytics, marketing, ads, and back-office tools you already run — turning every system into signal, and signal into safe action.",
};

const css = `
/* ============ Integrations — page styles (built on the shared design system) ============ */
.integrations-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.integrations-page .section--soft{background:var(--surface-soft)}

/* hero */
.int-hero{text-align:center;max-width:820px;margin:0 auto}
.int-hero .eyebrow{justify-content:center}
.int-hero h1{max-width:18ch;margin:0 auto 1.5rem}
.int-hero .lede{margin:0 auto 2.1rem}
.int-hero .cta-row{justify-content:center}
.int-runline{display:flex;flex-wrap:wrap;justify-content:center;gap:.55rem;margin-top:2.6rem}
.int-runline .chip{background:var(--white)}
.int-runline .chip svg{width:13px;height:13px;color:var(--brand-purple)}

/* section intro */
.int-head{max-width:60ch}
.int-head h2{margin-bottom:1rem}

/* commerce platform cards */
.plat-card{display:flex;flex-direction:column}
.plat-ic{width:52px;height:52px;border-radius:13px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.3rem;box-shadow:var(--shadow-sm)}
.plat-ic svg{width:25px;height:25px}
.plat-card .ver{display:inline-flex;align-items:center;gap:.45rem;font-family:var(--font-mono);font-size:.68rem;letter-spacing:.04em;color:var(--success);margin-top:.2rem;margin-bottom:1rem}
.plat-card .ver svg{width:13px;height:13px}
.plat-list{list-style:none;margin:1.1rem 0 0;padding:1.2rem 0 0;border-top:1px solid var(--border-dark);display:flex;flex-direction:column;gap:.7rem}
.plat-list li{display:flex;align-items:flex-start;gap:.6rem;font-size:.93rem;color:var(--text-body);line-height:1.45}
.plat-list li svg{width:16px;height:16px;flex:none;color:var(--brand-purple);margin-top:.18rem}

/* integration category cards */
.cat-card{display:flex;flex-direction:column}
.cat-ic{width:46px;height:46px;border-radius:12px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center;margin-bottom:1.1rem}
.cat-ic svg{width:22px;height:22px}
.cat-card p{font-size:.96rem;line-height:1.5}
.cat-ex{font-family:var(--font-mono);font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--text-faded);margin:1.3rem 0 .7rem}
.cat-tags{display:flex;flex-wrap:wrap;gap:.4rem}
.cat-tags .tx{font-family:var(--font-mono);font-size:.72rem;color:var(--text-body);background:var(--surface-soft);border:1px solid var(--border-dark);border-radius:var(--radius-pill);padding:.28rem .65rem;white-space:nowrap}
.int-disclaimer{margin-top:2.4rem;display:flex;align-items:flex-start;gap:.7rem;max-width:74ch;font-size:.88rem;color:var(--text-faded);line-height:1.55}
.int-disclaimer svg{width:17px;height:17px;flex:none;color:var(--brand-purple);margin-top:.15rem}

/* how it works — two phase split */
.flow-step{display:flex;gap:1.3rem;margin-bottom:1.7rem}
.flow-step:last-child{margin-bottom:0}
.flow-num{width:38px;height:38px;flex:none;border-radius:11px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);font-family:var(--font-mono);font-size:.9rem;font-weight:500;display:flex;align-items:center;justify-content:center}
.flow-step b{display:block;font-family:var(--font-heading);font-weight:600;font-size:1.05rem;margin-bottom:.3rem}
.flow-step span{display:block;font-size:.96rem;color:var(--text-body);line-height:1.55}
.phase-card{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2.1rem;box-shadow:var(--shadow-sm)}
.phase-card.write{background:var(--surface-tint);border-color:var(--border-brand)}
.phase-top{display:flex;align-items:center;gap:.8rem;margin-bottom:1.5rem}
.phase-badge{display:inline-flex;align-items:center;gap:.45rem;font-family:var(--font-mono);font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;border-radius:var(--radius-pill);padding:.34rem .7rem}
.phase-badge.read{background:var(--white);border:1px solid var(--border-dark);color:var(--text-body)}
.phase-badge.act{background:var(--white);border:1px solid var(--border-brand);color:var(--brand-purple)}
.phase-card h3{font-size:1.22rem;margin-bottom:.5rem}
.safe-list{list-style:none;margin:1.4rem 0 0;padding:1.4rem 0 0;border-top:1px solid var(--border-brand);display:flex;flex-direction:column;gap:.85rem}
.safe-list li{display:flex;align-items:flex-start;gap:.65rem;font-size:.94rem;color:var(--text-body);line-height:1.45}
.safe-list li svg{width:17px;height:17px;flex:none;color:var(--brand-purple);margin-top:.15rem}
.flow-link{display:inline-flex;align-items:center;gap:.4rem;font-family:var(--font-mono);font-size:.8rem;color:var(--brand-purple);text-decoration:none;margin-top:1.6rem;border-bottom:1px solid var(--border-brand);padding-bottom:2px;transition:border-color .2s}
.flow-link:hover{border-color:var(--brand-purple)}

/* final */
.int-final{text-align:center}
.int-final h2{max-width:20ch;margin:0 auto 1.3rem}
.int-final .lede{margin:0 auto 2.4rem}
.int-final .cta-row{justify-content:center}

@media(max-width:900px){
  .split{gap:2.4rem}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="integrations-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="int-hero">
              <div className="eyebrow reveal in">Integrations</div>
              <h1 className="reveal in">
                Connect every system in your <span className="grad">commerce stack.</span>
              </h1>
              <p className="lede reveal in">
                Vortex IQ plugs into the platforms, analytics, marketing, ads and back-office tools you already
                run — turning every system into signal, and signal into safe, reversible action. No rip-and-replace,
                no data warehouse project. Just your stack, finally working as one.
              </p>
              <div className="cta-row reveal in">
                <Link className="btn" href="/contact-us">Request an integration</Link>
                <Link className="btn btn--ghost" href="/ai-os-platform">Explore the platform →</Link>
              </div>
              <div className="int-runline reveal in">
                <span className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
                  Read-only by default
                </span>
                <span className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                  Approval-gated writes
                </span>
                <span className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></svg>
                  One-click rollback
                </span>
                <span className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 7.5 8 10 4.5-2.5 8-5 8-10V6Z" /></svg>
                  ISO 27001 certified
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* COMMERCE PLATFORMS */}
        <section className="section section--soft">
          <div className="container">
            <div className="int-head reveal">
              <div className="eyebrow">Commerce platforms</div>
              <h2>Native depth on the platforms you sell on.</h2>
              <p className="muted" style={{ fontSize: "1.06rem" }}>
                Vortex IQ connects directly to your store — reading orders, products, customers, pricing and
                content — and can act back through the same connection, safely. Today we run natively on three
                platforms.
              </p>
            </div>

            <div className="grid grid-3" style={{ marginTop: "2.8rem" }}>
              <div className="card plat-card reveal">
                <div className="plat-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                </div>
                <h3>Shopify Plus</h3>
                <span className="ver">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  Verified connector
                </span>
                <p className="muted">
                  Read orders, products, customers, collections and discounts — and write back catalogue,
                  pricing and content changes through approval-gated Actions.
                </p>
                <ul className="plat-list">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Catalogue, pricing &amp; metafields</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Orders, customers &amp; discounts</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Staging-first write-back</li>
                </ul>
              </div>

              <div className="card plat-card reveal">
                <div className="plat-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18" /><path d="M3 7v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7" /><path d="M3 7 6 3h12l3 4" /><path d="M9 11h6" /></svg>
                </div>
                <h3>BigCommerce</h3>
                <span className="ver">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  Verified connector
                </span>
                <p className="muted">
                  Manage products, orders and customers across your storefronts, with findings ranked by the
                  revenue they put at stake — and fixes shipped through tracked work.
                </p>
                <ul className="plat-list">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Products, variants &amp; categories</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Orders &amp; customer records</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Multi-storefront aware</li>
                </ul>
              </div>

              <div className="card plat-card reveal">
                <div className="plat-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 9 5v10l-9 5-9-5V7Z" /><path d="m12 2 9 5-9 5-9-5Z" /><path d="M12 12v10" /></svg>
                </div>
                <h3>Adobe Commerce <span style={{ color: "var(--text-faded)", fontWeight: 400 }}>(Magento)</span></h3>
                <span className="ver">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  Verified connector
                </span>
                <p className="muted">
                  Read across catalogue, orders, customers and payment gateways, and explain what changed in
                  plain English — then act back safely with full audit trails.
                </p>
                <ul className="plat-list">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Catalogue &amp; pricing rules</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Orders &amp; payment gateways</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Audited, reversible writes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATION CATEGORIES */}
        <section className="section">
          <div className="container">
            <div className="int-head reveal">
              <div className="eyebrow">Integration categories</div>
              <h2>Bring the rest of your stack into one place.</h2>
              <p className="muted" style={{ fontSize: "1.06rem" }}>
                Around your commerce platform sits everything else — analytics, email, ads, ERP, helpdesk,
                your warehouse. Vortex IQ connects them so findings can be cross-referenced and a single fix
                can ripple across systems. The names below are <em className="hl">examples</em> of the kinds of
                tools each category covers.
              </p>
            </div>

            <div className="grid grid-3" style={{ marginTop: "2.8rem" }}>
              <div className="card cat-card reveal">
                <div className="cat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg></div>
                <h3>Commerce platforms</h3>
                <p className="muted">Your store of record — catalogue, orders, customers and content, read and written safely.</p>
                <p className="cat-ex">Examples</p>
                <div className="cat-tags">
                  <span className="tx">Shopify Plus</span>
                  <span className="tx">BigCommerce</span>
                  <span className="tx">Adobe Commerce</span>
                </div>
              </div>

              <div className="card cat-card reveal">
                <div className="cat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><rect x="7" y="11" width="3" height="6" /><rect x="13" y="7" width="3" height="10" /></svg></div>
                <h3>Analytics &amp; BI</h3>
                <p className="muted">Behavioural and product analytics so findings are grounded in what shoppers actually do.</p>
                <p className="cat-ex">Examples</p>
                <div className="cat-tags">
                  <span className="tx">GA4</span>
                  <span className="tx">Looker Studio</span>
                  <span className="tx">Mixpanel</span>
                </div>
              </div>

              <div className="card cat-card reveal">
                <div className="cat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></div>
                <h3>Marketing &amp; email</h3>
                <p className="muted">Lifecycle, CRM and email tools, so a fix can update segments and flows, not just the store.</p>
                <p className="cat-ex">Examples</p>
                <div className="cat-tags">
                  <span className="tx">Klaviyo</span>
                  <span className="tx">Dotdigital</span>
                  <span className="tx">SendGrid</span>
                  <span className="tx">Emarsys</span>
                </div>
              </div>

              <div className="card cat-card reveal">
                <div className="cat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.4" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg></div>
                <h3>Ads &amp; paid media</h3>
                <p className="muted">Spend, feeds and performance, so revenue findings connect to the channels driving them.</p>
                <p className="cat-ex">Examples</p>
                <div className="cat-tags">
                  <span className="tx">Meta Ads</span>
                  <span className="tx">Google Ads</span>
                  <span className="tx">TikTok Ads</span>
                </div>
              </div>

              <div className="card cat-card reveal">
                <div className="cat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" /><path d="M3 7 6 3h12l3 4" /><path d="M9 12h6" /></svg></div>
                <h3>ERP &amp; OMS</h3>
                <p className="muted">Stock, fulfilment and order management, so inventory and ops reality shape every recommendation.</p>
                <p className="cat-ex">Examples</p>
                <div className="cat-tags">
                  <span className="tx">NetSuite</span>
                  <span className="tx">Brightpearl</span>
                  <span className="tx">Linnworks</span>
                </div>
              </div>

              <div className="card cat-card reveal">
                <div className="cat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" /><path d="M8 10h.01M12 10h.01M16 10h.01" /></svg></div>
                <h3>Helpdesk &amp; CX</h3>
                <p className="muted">Support and ticketing signals, so customer pain surfaces alongside the revenue it costs.</p>
                <p className="cat-ex">Examples</p>
                <div className="cat-tags">
                  <span className="tx">Zendesk</span>
                  <span className="tx">Gorgias</span>
                  <span className="tx">Intercom</span>
                </div>
              </div>

              <div className="card cat-card reveal">
                <div className="cat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6" /><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></svg></div>
                <h3>Data warehouse</h3>
                <p className="muted">Your warehouse and lake, so Vortex IQ works alongside the data team rather than around it.</p>
                <p className="cat-ex">Examples</p>
                <div className="cat-tags">
                  <span className="tx">BigQuery</span>
                  <span className="tx">Snowflake</span>
                  <span className="tx">Redshift</span>
                </div>
              </div>

              <div className="card card--tint cat-card reveal">
                <div className="cat-ic" style={{ background: "var(--white)" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg></div>
                <h3>Don&apos;t see yours?</h3>
                <p className="muted">We add connectors based on what merchants actually run. Tell us your stack and we&apos;ll scope it.</p>
                <p className="cat-ex">Get in touch</p>
                <Link className="flow-link" href="/contact-us" style={{ marginTop: 0 }}>Request a connector →</Link>
              </div>
            </div>

            <div className="int-disclaimer reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
              <span>
                Tool names shown above are illustrative examples of each category and are the trademarks of
                their respective owners — they are not presented as official partnerships or endorsements.
                Available connectors depend on your plan and stack; ask us about a specific tool.
              </span>
            </div>
          </div>
        </section>

        {/* HOW INTEGRATIONS WORK */}
        <section className="section section--soft">
          <div className="container">
            <div className="int-head reveal">
              <div className="eyebrow">How integrations work</div>
              <h2>Read first. Act only when you say so.</h2>
              <p className="muted" style={{ fontSize: "1.06rem" }}>
                Every connection starts read-only. Vortex IQ builds an honest picture of your store before it
                ever touches a thing — and when it does act, it acts the way your team would: through review,
                approvals and a clean way back.
              </p>
            </div>

            <div className="split" style={{ marginTop: "3rem" }}>
              <div className="reveal">
                <div className="phase-card">
                  <div className="phase-top">
                    <span className="phase-badge read">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                      Step 1 · Read-only insight
                    </span>
                  </div>
                  <h3>Connect, and the picture comes to you.</h3>
                  <p className="muted">
                    Authorise a connector and Vortex IQ reads across your systems to detect what&apos;s leaking
                    revenue and explain why — in plain English, with the data behind it. Nothing is changed in
                    this phase; it&apos;s pure understanding.
                  </p>
                  <div className="flow-step" style={{ marginTop: "1.6rem" }}>
                    <span className="flow-num">1</span>
                    <div><b>Detect</b><span>Spot broken pricing, dropped products, decaying campaigns and gaps across the stack.</span></div>
                  </div>
                  <div className="flow-step">
                    <span className="flow-num">2</span>
                    <div><b>Explain</b><span>Every finding comes with the why, the evidence, and the revenue at stake — no black box.</span></div>
                  </div>
                </div>
              </div>

              <div className="reveal">
                <div className="phase-card write">
                  <div className="phase-top">
                    <span className="phase-badge act">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}><path d="M13 2 3 14h7l-1 8 10-12h-7Z" /></svg>
                      Step 2 · Safe write-back
                    </span>
                  </div>
                  <h3>Fix it — with guardrails, not guesswork.</h3>
                  <p className="muted">
                    When you&apos;re ready to act, findings become tracked Actions that write back through the
                    same connector. Every write runs on staging first, waits for the right approval, and can be
                    undone in one click.
                  </p>
                  <ul className="safe-list">
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg><span><b style={{ color: "var(--primary)" }}>Approval gates</b> — nothing ships to live without the right person signing off.</span></li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg><span><b style={{ color: "var(--primary)" }}>Staging-first</b> — changes are validated off-live before they ever reach customers.</span></li>
                    <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /></svg><span><b style={{ color: "var(--primary)" }}>One-click rollback</b> — every write is reversible, with a full audit trail.</span></li>
                  </ul>
                  <Link className="flow-link" href="/actions">See how Actions ship work →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section int-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Built around your stack</div>
            <h2 className="reveal">Need a connector we don&apos;t list yet?</h2>
            <p className="lede reveal">
              Tell us the platforms, tools and data sources you run. We&apos;ll show you what Vortex IQ can read
              today, what it can act on, and how quickly we can wire in anything that&apos;s missing.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Request an integration</Link>
              <Link className="btn btn--ghost" href="/ai-os-platform" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Explore the platform →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
