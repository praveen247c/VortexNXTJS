import type { Metadata } from "next";
import Link from "next/link";
import { pageOpenGraph } from "@/lib/seo";
import { caseStudies } from "../../customer-stories/case-studies";

/* Platform hub. The Shopify staging query cluster belongs to /shopify-staging, which
   this page links to rather than competing with. Keep staging here to one section. */
const TITLE = "Vortex IQ for Shopify | The AI Operating System for E-Commerce";
const APP_URL = "https://apps.shopify.com/vortexiq-staging-1";
const APPS_URL = "https://apps.shopify.com/partners/vortex-iq";

export const metadata: Metadata = {
  alternates: { canonical: "/platforms/shopify" },
  title: TITLE,
  description:
    "Vortex IQ for Shopify merchants and Shopify agencies: real staging and one-click rollback where Shopify ships none, 200+ connectors, and an AI Operating System that detects what is broken, explains why, and fixes it with your approval.",
  openGraph: pageOpenGraph({
    title: TITLE,
    description:
      "The AI Operating System for e-commerce, on Shopify. Real staging and rollback, 200+ connectors, approval-gated changes.",
    path: "/platforms/shopify",
  }),
};

/* Named results are BigCommerce merchants running StagingPro. Labelled as such on the
   page rather than implied to be Shopify stores. */
const FEATURED_SLUGS = ["case-study-glerup-revere", "case-study-inter-light", "case-study-menkind"];
const featured = FEATURED_SLUGS.map((slug) => caseStudies.find((c) => c.slug === slug)).filter(
  (c): c is NonNullable<typeof c> => Boolean(c)
);

const APPS = [
  {
    name: "VortexIQ Staging",
    line: "A full, isolated copy of your store. Test apps, themes, data and checkout, review a diff, deploy in one click.",
    href: APP_URL,
    cta: "Install free",
    internal: "/shopify-staging",
    internalCta: "How Shopify staging works",
  },
  {
    name: "RollbackPro",
    line: "Automated backups and one-click rollback, so a change that passed review and broke anyway costs you minutes, not a day.",
    href: APPS_URL,
    cta: "View on the App Store",
  },
  {
    name: "Vortex IQ: AI Operating System",
    line: "The part that notices. Detection across your stack, plain-English diagnosis, and agents that fix things with your approval.",
    href: APPS_URL,
    cta: "View on the App Store",
    internal: "/ai-os-platform",
    internalCta: "See the platform",
  },
];

const PILLARS = [
  {
    name: "Nerve Centre",
    href: "/ai-os-platform/nerve-centre",
    line: "Sense. Real-time detection across your Shopify store and the tools around it.",
  },
  {
    name: "Vortex Mind",
    href: "/ai-os-platform/vortex-mind",
    line: "Think. Diagnosis, strategy and a memory graph so the same problem does not cost you twice.",
  },
  {
    name: "Ask Viq",
    href: "/ai-os-platform/ask-viq",
    line: "Talk. Ask what is happening in your store in plain English and get an answer, not a dashboard.",
  },
  {
    name: "Vortex Agents",
    href: "/ai-os-platform/vortex-agents",
    line: "Act. Changes made on staging first, approval-gated, with a way back.",
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

.plat-head{max-width:760px}
.plat-head h2{max-width:24ch}
.plat-head .lede{margin-top:1.3rem}

.plat-ic{width:48px;height:48px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.3rem;box-shadow:var(--shadow-sm)}
.plat-ic svg{width:24px;height:24px}

.plat-app{display:flex;flex-direction:column;gap:.9rem}
.plat-app h3{font-size:1.06rem;letter-spacing:-.01em}
.plat-app p{font-size:.94rem;line-height:1.55;color:var(--text-body)}
.plat-app .cta-row{margin-top:auto;flex-wrap:wrap;gap:.6rem}

.plat-pillars{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;margin-top:2.2rem}
.plat-pillar{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:1.5rem 1.7rem;transition:border-color .25s,transform .25s}
.plat-pillar:hover{border-color:var(--border-strong);transform:translateY(-2px)}
.plat-pillar h3{font-size:1.04rem;letter-spacing:-.01em;margin-bottom:.45rem}
.plat-pillar p{font-size:.93rem;line-height:1.5;color:var(--text-body)}

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
.plat-final h2{max-width:21ch;margin:0 auto 1.3rem}
.plat-final .lede{margin:0 auto 2.4rem}
.plat-final .cta-row{justify-content:center}

@media(max-width:880px){
  .plat-pillars{grid-template-columns:1fr}
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
                Three apps live on the Shopify App Store
              </span>
              <div className="eyebrow reveal in">Vortex IQ for Shopify and Shopify Plus</div>
              <h1 className="reveal in">
                Run your Shopify store with <span className="grad">something watching your back.</span>
              </h1>
              <p className="lede reveal in">
                Detection across your whole stack, plain-English diagnosis, and changes that go through a real
                staging environment before they reach a customer. No Shopify plan ships staging, Plus included. We
                do, and it is the safe hands underneath everything else here.
              </p>
              <div className="cta-row reveal in">
                <Link className="btn" href="/free-audit">Get my free Shopify store audit</Link>
                <Link className="btn btn--ghost" href="/shopify-staging">See Shopify staging →</Link>
              </div>
              <p className="plat-note reveal in">
                Free store audit, no connectors and no sales call. Or install any of the three apps free.
              </p>
            </div>
          </div>
        </section>

        {/* THE THREE APPS */}
        <section className="section section--soft">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">On the App Store</div>
              <h2>Three apps, each with a free plan.</h2>
              <p className="lede">
                Install what you need. They work on their own, and they work better together, because the thing
                that spots a problem and the thing that safely fixes it are more useful in the same loop.
              </p>
            </div>
            <div className="grid grid-3" style={{ marginTop: "2.4rem" }}>
              {APPS.map((a) => (
                <div className="card plat-app reveal" key={a.name}>
                  <h3>{a.name}</h3>
                  <p>{a.line}</p>
                  <div className="cta-row">
                    <a className="btn btn--ghost" href={a.href} target="_blank" rel="noopener noreferrer">{a.cta}</a>
                    {a.internal ? (
                      <Link className="btn btn--ghost" href={a.internal}>{a.internalCta} →</Link>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHERE SHOPIFY MERCHANTS GET STUCK */}
        <section className="section">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">Where Shopify merchants get stuck</div>
              <h2>The store is hosted for you. The operating problems are not.</h2>
              <p className="lede">
                Shopify is very good at running a shop. What it does not do is tell you that a price rule broke a
                bundle overnight, that a feed has been rejecting products for a week, or that the app you installed
                on Friday changed your checkout. That is the work Vortex IQ takes on.
              </p>
            </div>
            <div className="grid grid-3" style={{ marginTop: "2.4rem" }}>
              <div className="card reveal">
                <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /></svg></div>
                <h3>No staging, so no safe test</h3>
                <p className="muted">
                  Development stores have none of your data and theme preview only covers the theme. Everything
                  else is tested in production, on customers.{" "}
                  <Link href="/shopify-staging">See how staging fixes that</Link>.
                </p>
              </div>
              <div className="card reveal">
                <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg></div>
                <h3>Apps that quietly change things</h3>
                <p className="muted">
                  A store runs twenty apps and each one can touch your theme, your data or your checkout. Test app
                  behaviour off to one side before it meets live revenue.
                </p>
              </div>
              <div className="card reveal">
                <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 2" /></svg></div>
                <h3>Found out from a customer</h3>
                <p className="muted">
                  The worst way to learn something broke. Detection runs on your store and the tools around it, so
                  the alert reaches you before the complaint does.
                </p>
              </div>
              <div className="card reveal">
                <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 7 4v6c0 4.5-3 7-7 8-4-1-7-3.5-7-8V7Z" /><path d="M12 8v8" /><path d="M8 12h8" /></svg></div>
                <h3>Plus does not change the maths</h3>
                <p className="muted">
                  Shopify Plus gives you more development stores, not a staging environment. It also usually means
                  more apps, more customisation and B2B or expansion stores, so the surface area an untested change
                  can break is larger.
                </p>
              </div>
              <div className="card reveal">
                <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg></div>
                <h3>One store, then many</h3>
                <p className="muted">
                  Expansion stores multiply every operational problem you already have. Detection, diagnosis and
                  safe deploys work across them rather than once per storefront.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* THE FOUR PILLARS */}
        <section className="section section--soft">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">The four pillars</div>
              <h2>Sense, think, talk, act. One loop, on your Shopify data.</h2>
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
                  ERP, payments, shipping, marketing and analytics tools Shopify merchants already run, all
                  read-first, with more shipping continuously.
                </p>
                <div className="cta-row" style={{ marginTop: "1.2rem" }}>
                  <Link className="btn btn--ghost" href="/solutions/integrations">View the integrations directory →</Link>
                </div>
              </div>
              <div className="card reveal">
                <h3>Alongside Shopify, not instead of it</h3>
                <p className="muted" style={{ marginTop: ".6rem" }}>
                  Vortex IQ is read-first by design and nothing writes to your store without a human approving it.
                  It complements the Shopify platform and the apps you already run rather than replacing them.
                </p>
                <div className="cta-row" style={{ marginTop: "1.2rem" }}>
                  <Link className="btn btn--ghost" href="/solutions/for-agencies">For Shopify agencies →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF, LABELLED */}
        <section className="section">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">Named results, on BigCommerce</div>
              <h2>What safe deploys do to a real business.</h2>
              <p className="lede">
                Straight answer: these three are BigCommerce merchants running StagingPro, not Shopify stores. They
                are here because we would rather show you a real number on another platform than a made-up one on
                yours. Shopify case studies replace them as they are signed off.
              </p>
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
            <div className="cta-row reveal" style={{ marginTop: "2rem" }}>
              <Link className="btn btn--ghost" href="/platforms/bigcommerce">Vortex IQ for BigCommerce →</Link>
              <Link className="btn btn--ghost" href="/customer-stories">All customer stories →</Link>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section plat-final section--soft">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Get started</div>
            <h2 className="reveal">Run a free audit on your Shopify store.</h2>
            <p className="lede reveal">
              See what is leaking revenue, in plain English, with no commitment. Give us the store URL and we read
              the pages a shopper sees. If you would rather start with safe deploys, install staging free instead.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/free-audit" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Get my free audit</Link>
              <a className="btn btn--ghost" href={APP_URL} target="_blank" rel="noopener noreferrer" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Install staging free →</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
