import type { Metadata } from "next";
import Link from "next/link";
import { pageOpenGraph } from "@/lib/seo";

/* Platform hub for the Magento and Adobe Commerce family. One page for both names
   deliberately: they are the same platform family, and two pages would compete for
   overlapping queries, which is the cannibalisation pattern already costing the blog
   cluster. The staging query cluster belongs to /magento-adobe-commerce-staging, which
   this page links to rather than duplicating. */
const TITLE = "Vortex IQ for Adobe Commerce & Magento | The AI Operating System";

export const metadata: Metadata = {
  alternates: { canonical: "/platforms/magento-adobe-commerce" },
  title: TITLE,
  description:
    "Vortex IQ for Adobe Commerce and Magento merchants, agencies and systems integrators: on-demand dryrun environments with DryRunPro, 200+ connectors, and an AI Operating System that detects what is broken, explains why, and fixes it with your approval.",
  openGraph: pageOpenGraph({
    title: TITLE,
    description:
      "The AI Operating System for e-commerce, on Adobe Commerce and Magento. On-demand staging, 200+ connectors, approval-gated changes.",
    path: "/platforms/magento-adobe-commerce",
  }),
};

const PILLARS = [
  {
    name: "Nerve Centre",
    href: "/ai-os-platform/nerve-centre",
    line: "Sense. Real-time detection across your store, your extensions and the systems either side of them.",
  },
  {
    name: "Vortex Mind",
    href: "/ai-os-platform/vortex-mind",
    line: "Think. Diagnosis, strategy and a memory graph so the same problem does not cost you twice.",
  },
  {
    name: "Ask Viq",
    href: "/ai-os-platform/ask-viq",
    line: "Talk. Ask what is happening in plain English and get an answer, not another dashboard to read.",
  },
  {
    name: "Vortex Agents",
    href: "/ai-os-platform/vortex-agents",
    line: "Act. Changes tested in a dryrun first, approval-gated, with a way back.",
  },
];

const css = `
.plat-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.plat-page .section--soft{background:var(--surface-soft)}

.plat-hero{text-align:center;max-width:880px;margin:0 auto}
.plat-hero .eyebrow{justify-content:center}
.plat-hero h1{max-width:21ch;margin:0 auto 1.5rem}
.plat-hero .lede{margin:0 auto 2.1rem}
.plat-hero .cta-row{justify-content:center}
.plat-badge{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.74rem;letter-spacing:.05em;color:var(--brand-purple);background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius-pill);padding:.45rem 1rem;margin-bottom:1.4rem}
.plat-badge svg{width:15px;height:15px}
.plat-note{font-size:.84rem;color:var(--text-muted);margin-top:1.1rem}

.plat-head{max-width:780px}
.plat-head h2{max-width:24ch}
.plat-head .lede{margin-top:1.3rem}

.plat-ic{width:48px;height:48px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.3rem;box-shadow:var(--shadow-sm)}
.plat-ic svg{width:24px;height:24px}

.plat-pillars{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;margin-top:2.2rem}
.plat-pillar{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:1.5rem 1.7rem;transition:border-color .25s,transform .25s}
.plat-pillar:hover{border-color:var(--border-strong);transform:translateY(-2px)}
.plat-pillar h3{font-size:1.04rem;letter-spacing:-.01em;margin-bottom:.45rem}
.plat-pillar p{font-size:.93rem;line-height:1.5;color:var(--text-body)}

.plat-final{text-align:center}
.plat-final h2{max-width:21ch;margin:0 auto 1.3rem}
.plat-final .lede{margin:0 auto 2.4rem}
.plat-final .cta-row{justify-content:center}

@media(max-width:880px){
  .plat-pillars{grid-template-columns:1fr}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="plat-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="plat-hero">
              <span className="plat-badge reveal in">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 15 9l7 .5-5.4 4.6L18.2 21 12 17.3 5.8 21l1.6-6.9L2 9.5 9 9Z" /></svg>
                Adobe Commerce Rockstar, Adobe Summit 2023
              </span>
              <div className="eyebrow reveal in">Vortex IQ for Adobe Commerce and Magento</div>
              <h1 className="reveal in">
                The platform is powerful. <span className="grad">Running it should not be this manual.</span>
              </h1>
              <p className="lede reveal in">
                Adobe Commerce and Magento give you more control than any hosted platform, and hand you every
                operational problem that comes with it. Vortex IQ watches the whole stack, explains what broke in
                plain English, and tests every change in a dryrun environment before it reaches a customer.
              </p>
              <div className="cta-row reveal in">
                <Link className="btn" href="/free-audit">Get my free store audit</Link>
                <Link className="btn btn--ghost" href="/magento-adobe-commerce-staging">See DryRunPro staging →</Link>
              </div>
              <p className="plat-note reveal in">
                All versions of Magento, Adobe Commerce and Adobe Commerce Cloud.
              </p>
            </div>
          </div>
        </section>

        {/* WHERE TEAMS GET STUCK */}
        <section className="section section--soft">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">Where Adobe Commerce and Magento teams get stuck</div>
              <h2>Control is the feature and the problem.</h2>
              <p className="lede">
                Nothing about this platform is hosted away from you, which is exactly why teams choose it. It also
                means every upgrade, patch, extension and integration is yours to test, and every silent failure is
                yours to notice.
              </p>
            </div>
            <div className="grid grid-3" style={{ marginTop: "2.4rem" }}>
              <div className="card reveal">
                <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg></div>
                <h3>One staging slot, many workstreams</h3>
                <p className="muted">
                  Cloud gives each project a single Staging branch. Open Source gives you none.{" "}
                  <Link href="/magento-adobe-commerce-staging">DryRunPro spins up environments on demand</Link>{" "}
                  so nobody queues.
                </p>
              </div>
              <div className="card reveal">
                <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /></svg></div>
                <h3>Extensions that fight each other</h3>
                <p className="muted">
                  A patch, an extension upgrade and a custom module can each be fine alone and broken together.
                  Extension and code audits run against a real replica, not a checklist.
                </p>
              </div>
              <div className="card reveal">
                <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 2" /></svg></div>
                <h3>Found out from a customer</h3>
                <p className="muted">
                  A feed rejecting products, an integration timing out, a price rule quietly wrong. Detection runs
                  across the store and the systems around it, so the alert beats the complaint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE FOUR PILLARS */}
        <section className="section">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">The four pillars</div>
              <h2>Sense, think, talk, act. One loop, on your Magento data.</h2>
            </div>
            <div className="plat-pillars">
              {PILLARS.map((p) => (
                <Link className="plat-pillar reveal" key={p.name} href={p.href}>
                  <h3>{p.name}</h3>
                  <p>{p.line}</p>
                </Link>
              ))}
            </div>
            <div className="grid grid-2" style={{ marginTop: "1.6rem", alignItems: "start" }}>
              <div className="card reveal">
                <h3>200+ connectors, ready for your stack</h3>
                <p className="muted" style={{ marginTop: ".6rem" }}>
                  ERP, PIM, payments, shipping, marketing and analytics systems that Adobe Commerce and Magento
                  merchants already run, all read-first, with more shipping continuously.
                </p>
                <div className="cta-row" style={{ marginTop: "1.2rem" }}>
                  <Link className="btn btn--ghost" href="/solutions/integrations">View the integrations directory →</Link>
                </div>
              </div>
              <div className="card reveal">
                <h3>Built for agencies and SIs</h3>
                <p className="muted" style={{ marginTop: ".6rem" }}>
                  Many projects from one account with per-customer team segregation, so client work stays separated
                  while the tooling stays in one place. Read-first by design, and nothing writes to a client store
                  without a human approving it.
                </p>
                <div className="cta-row" style={{ marginTop: "1.2rem" }}>
                  <Link className="btn btn--ghost" href="/solutions/for-agencies">For agencies and SIs →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OTHER PLATFORMS */}
        <section className="section section--soft">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">Running more than one platform?</div>
              <h2>The same loop, wherever the storefront lives.</h2>
              <p className="lede">
                Many merchants and most agencies run more than one platform. Detection, diagnosis and safe deploys
                work the same way across all of them, which is the point of an operating layer rather than a
                per-platform tool.
              </p>
            </div>
            <div className="cta-row reveal" style={{ marginTop: "2rem" }}>
              <Link className="btn btn--ghost" href="/platforms/bigcommerce">Vortex IQ for BigCommerce →</Link>
              <Link className="btn btn--ghost" href="/platforms/shopify">Vortex IQ for Shopify →</Link>
              <Link className="btn btn--ghost" href="/customer-stories">Customer stories →</Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section plat-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Get started</div>
            <h2 className="reveal">Run a free audit on your store.</h2>
            <p className="lede reveal">
              See what is leaking revenue, in plain English, with no commitment. Give us the store URL and we read
              the pages a shopper sees. If safe deploys are the pressing problem, start with DryRunPro instead.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/free-audit" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Get my free audit</Link>
              <Link className="btn btn--ghost" href="/magento-adobe-commerce-staging" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>See DryRunPro →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
