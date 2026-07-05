import type { Metadata } from "next";
import Link from "next/link";
import { pageOpenGraph } from "@/lib/seo";
import { caseStudies } from "../../customer-stories/case-studies";

const TITLE = "Vortex IQ for BigCommerce | AI Operating System for E-Commerce";

export const metadata: Metadata = {
  alternates: { canonical: "/platforms/bigcommerce" },
  title: TITLE,
  description:
    "Vortex IQ for BigCommerce merchants and BigCommerce partners: real staging and rollback, 200+ connectors, and named results from Crown Packaging, Interlight and Menkind.",
  openGraph: pageOpenGraph({
    title: TITLE,
    description:
      "The AI Operating System for e-commerce, built for BigCommerce. Real staging and rollback, 200+ connectors, and named merchant results.",
    path: "/platforms/bigcommerce",
  }),
};

const FEATURED_SLUGS = ["case-study-crown-packaging", "case-study-inter-light", "case-study-menkind"];
const featured = FEATURED_SLUGS.map((slug) => caseStudies.find((c) => c.slug === slug)).filter(
  (c): c is NonNullable<typeof c> => Boolean(c)
);

const css = `
.plat-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.plat-page .section--soft{background:var(--surface-soft)}

.plat-hero{text-align:center;max-width:860px;margin:0 auto}
.plat-hero .eyebrow{justify-content:center}
.plat-hero h1{max-width:20ch;margin:0 auto 1.5rem}
.plat-hero .lede{margin:0 auto 2.1rem}
.plat-hero .cta-row{justify-content:center}
.plat-badge{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.74rem;letter-spacing:.05em;color:var(--brand-purple);background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius-pill);padding:.45rem 1rem;margin-bottom:1.4rem}
.plat-badge svg{width:15px;height:15px}

.plat-head{max-width:760px}
.plat-head h2{max-width:22ch}
.plat-head .lede{margin-top:1.3rem}

.plat-ic{width:48px;height:48px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.3rem;box-shadow:var(--shadow-sm)}
.plat-ic svg{width:24px;height:24px}

.plat-cs{display:flex;flex-direction:column;gap:1.6rem;margin-top:2.4rem}
.plat-cs-card{display:grid;grid-template-columns:.9fr 1.6fr;gap:2rem;align-items:center;background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2rem;transition:border-color .25s,box-shadow .3s,transform .25s}
.plat-cs-card:hover{border-color:var(--border-strong);box-shadow:var(--shadow-lg);transform:translateY(-2px)}
.plat-cs-metrics{display:flex;gap:1.6rem;flex-wrap:wrap}
.plat-cs-metrics .m{display:flex;flex-direction:column}
.plat-cs-metrics .v{font-family:var(--font-heading);font-weight:600;font-size:1.6rem;color:var(--brand-purple);letter-spacing:-.01em}
.plat-cs-metrics .l{font-size:.82rem;color:var(--text-body);max-width:16ch;line-height:1.35}
.plat-cs-tx h3{font-size:1.14rem;letter-spacing:-.01em;margin-bottom:.6rem}
.plat-cs-tx p{color:var(--text-body);font-size:.96rem;line-height:1.55}
.plat-cs-tx .co{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--brand-purple);margin-bottom:.6rem;display:block}

.plat-final{text-align:center}
.plat-final h2{max-width:20ch;margin:0 auto 1.3rem}
.plat-final .lede{margin:0 auto 2.4rem}
.plat-final .cta-row{justify-content:center}

@media(max-width:880px){
  .plat-cs-card{grid-template-columns:1fr;gap:1.2rem}
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 7 4v6c0 4.5-3 7-7 8-4-1-7-3.5-7-8V7Z" /><path d="m9 12 2 2 4-4" /></svg>
                BigCommerce Elite Partner
              </span>
              <div className="eyebrow reveal in">Vortex IQ for BigCommerce</div>
              <h1 className="reveal in">
                Built for BigCommerce merchants from <span className="grad">$1M to $100M GMV.</span>
              </h1>
              <p className="lede reveal in">
                Real staging and one-click rollback where BigCommerce&apos;s own sandbox stops, safe testing for
                Stencil themes and complex B2B catalogues, and an AI Operating System that detects what is
                broken across your stack, explains why, and fixes it safely.
              </p>
              <div className="cta-row reveal in">
                <Link className="btn" href="/free-audit">Get my free BigCommerce store audit</Link>
                <Link className="btn btn--ghost" href="/contact-us">Talk to partnerships →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* BIGCOMMERCE-SPECIFIC PAIN */}
        <section className="section section--soft">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">Where BigCommerce merchants get stuck</div>
              <h2>The sandbox that ships with BigCommerce is not a staging environment.</h2>
              <p className="lede">
                BigCommerce gives every store a Sandbox, but it does not mirror your production catalogue, has
                no Git-driven deploy pipeline into your live theme, and no one-click way to roll a bad change
                back. That gap is exactly what Vortex IQ closes.
              </p>
            </div>
            <div className="grid grid-3" style={{ marginTop: "2.4rem" }}>
              <div className="card reveal">
                <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /></svg></div>
                <h3>No real staging</h3>
                <p className="muted">Test a theme update, a price-list change or a new app without crossing your fingers when you click Publish.</p>
              </div>
              <div className="card reveal">
                <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg></div>
                <h3>Stencil theme risk</h3>
                <p className="muted">Push theme changes through a pull-request workflow with preview URLs, approval and rollback, instead of uploading a theme zip by hand.</p>
              </div>
              <div className="card reveal">
                <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg></div>
                <h3>Complex B2B catalogues</h3>
                <p className="muted">Migrate companies, users, orders, invoices and B2B-specific entities that the standard Sandbox flow does not cover.</p>
              </div>
            </div>
          </div>
        </section>

        {/* NAMED OUTCOMES */}
        <section className="section">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">Named BigCommerce results</div>
              <h2>What BigCommerce merchants and their agencies have built with it.</h2>
            </div>
            <div className="plat-cs">
              {featured.map((c) => (
                <Link key={c.slug} className="plat-cs-card reveal" href={`/customer-stories/${c.slug}`}>
                  <div className="plat-cs-metrics">
                    {c.metrics.slice(0, 2).map((m) => (
                      <div className="m" key={m.label}>
                        <span className="v">{m.value}</span>
                        <span className="l">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="plat-cs-tx">
                    <span className="co">{c.company}</span>
                    <h3>{c.title}</h3>
                    <p>{c.lede}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CONNECTORS + BETTER TOGETHER */}
        <section className="section section--soft">
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: "start" }}>
              <div className="card reveal">
                <h3>200+ connectors, ready for your stack</h3>
                <p className="muted" style={{ marginTop: ".6rem" }}>
                  ERP, payments, shipping, marketing and analytics tools BigCommerce merchants already run,
                  all read-first, with more shipping continuously.
                </p>
                <div className="cta-row" style={{ marginTop: "1.2rem" }}>
                  <Link className="btn btn--ghost" href="/solutions/integrations">View the integrations directory →</Link>
                </div>
              </div>
              <div className="card reveal">
                <h3>Better together, not a replacement</h3>
                <p className="muted" style={{ marginTop: ".6rem" }}>
                  Vortex IQ is read-first by design, so it complements the BigCommerce platform your merchants
                  already run rather than competing with it. Staging, rollback and monitoring sit alongside
                  BigCommerce, not in place of it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section plat-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Get started</div>
            <h2 className="reveal">Run a free audit on your BigCommerce store.</h2>
            <p className="lede reveal">
              See what is leaking revenue on your store, in plain English, with no commitment. If you are a
              BigCommerce partner or TAM, talk to us about the co-sell motion instead.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/free-audit" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Get my free audit</Link>
              <Link className="btn btn--ghost" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Talk to partnerships →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
