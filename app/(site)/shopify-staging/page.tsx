import type { Metadata } from "next";
import Link from "next/link";
import { pageOpenGraph } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { caseStudies } from "../customer-stories/case-studies";

/* This page owns the Shopify staging query cluster ("shopify staging environment",
   "does shopify have a staging environment", "shopify test environment") and is the
   destination for the paid staging campaign. /platforms/shopify is the broader
   platform hub and links here rather than competing for the same terms. */
const TITLE = "Shopify Staging Environment | Test Changes Before Going Live";
const APP_URL = "https://apps.shopify.com/vortexiq-staging-1";
const APPS_URL = "https://apps.shopify.com/partners/vortex-iq";
const DOCS_URL = "https://docs.vortexiq.ai/vortex-apps/vortex-staging";

export const metadata: Metadata = {
  alternates: { canonical: "/shopify-staging" },
  title: TITLE,
  description:
    "Shopify has no staging environment. Vortex IQ Staging creates a full, isolated copy of your Shopify store, including products, metafields, apps and checkout, then deploys in one click and rolls back in seconds. Free plan on the Shopify App Store.",
  openGraph: pageOpenGraph({
    title: TITLE,
    description:
      "A real staging environment for Shopify: full store copy, diff view, one-click deploy, instant rollback. Free plan on the Shopify App Store.",
    path: "/shopify-staging",
  }),
};

/* The staging engine's named results are all BigCommerce merchants today. They are
   labelled as such on the page rather than implied to be Shopify stores. */
const FEATURED_SLUGS = ["case-study-glerup-revere", "case-study-inter-light", "case-study-the-tire-man"];
const featured = FEATURED_SLUGS.map((slug) => caseStudies.find((c) => c.slug === slug)).filter(
  (c): c is NonNullable<typeof c> => Boolean(c)
);

type NativeOption = { name: string; covers: string; stops: string };

const NATIVE_OPTIONS: NativeOption[] = [
  {
    name: "Development stores",
    covers: "A free, empty store to build in, created through Shopify Partners.",
    stops:
      "It is not a copy of your live store. Your catalogue, customers, settings and app configuration are not there, and there is no supported way to push a development store back into production.",
  },
  {
    name: "Theme duplication",
    covers: "A second copy of your theme you can edit without touching the published one.",
    stops:
      "The theme layer only. Anything that lives outside the theme is still live: apps, product data, metafields, navigation, discounts and checkout.",
  },
  {
    name: "Theme preview links",
    covers: "A shareable URL to review an unpublished theme against real store data.",
    stops:
      "Previewing is not testing. App behaviour, checkout changes and data edits are not isolated, so anything you change to make the preview meaningful changes the live store too.",
  },
  {
    name: "CSV export and import",
    covers: "Moving some product and customer records between stores by hand.",
    stops:
      "It carries records, not a store. App configuration, navigation, theme settings and the relationships between records do not come with it, and every round trip is a manual step that can go wrong.",
  },
];

type Faq = { question: string; answer: string };

// Single source of truth: the visible FAQ AND the FAQPage JSON-LD both render
// from this array, so the schema always matches on-page content (Google policy).
const faq: Faq[] = [
  {
    question: "Does Shopify have a staging environment?",
    answer:
      "No. Shopify does not ship a staging environment. It gives you development stores, theme duplication, theme preview links and CSV export, and expects you to combine them with a disciplined release process. Each of those covers part of the job: development stores have none of your live data, and theme duplication and preview only cover the theme layer, so apps, metafields, navigation, discounts and checkout stay live while you test.",
  },
  {
    question: "What does Vortex IQ Staging actually copy?",
    answer:
      "A full, isolated copy of the store: products, collections, inventory, prices, redirects, metafields, pages and navigation, along with your app configuration so app behaviour can be tested. Installing an app, editing a theme, changing products or modifying checkout inside staging does not affect your live store until you choose to deploy.",
  },
  {
    question: "How do changes reach the live store?",
    answer:
      "You review a diff of what changed, then deploy in one click. If a change that passed review still causes a problem in production, instant rollback returns the store to its pre-deployment state in seconds. Every deployment is recorded, so the team can see what shipped and when.",
  },
  {
    question: "Is it free?",
    answer:
      "There is a free plan on the Shopify App Store, so you can create a staging copy without talking to anyone. Staging is also included in every paid Vortex IQ plan, alongside the wider AI Operating System.",
  },
  {
    question: "Does Shopify Plus include a staging environment?",
    answer:
      "No. No Shopify plan ships a staging environment, Plus included. Plus gives you more development stores, but a development store still has none of your live catalogue, customers, settings or app configuration, and there is no supported way to push one back into production. Plus stores usually run more apps, more customisation and B2B or expansion stores, so the surface area an untested change can break is larger, not smaller.",
  },
  {
    question: "Does it work for teams and agencies?",
    answer:
      "Yes. Staging access is shared, with deployment history and change tracking, so more than one person can work on a change and everyone can see what is about to go live. Agencies can run it across client stores.",
  },
  {
    question: "Which other platforms does Vortex IQ support?",
    answer:
      "BigCommerce, Adobe Commerce and Magento, alongside Shopify. Staging and rollback for BigCommerce ship as StagingPro, which is where the named merchant results below come from.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

const css = `
.plat-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.plat-page .section--soft{background:var(--surface-soft)}

.plat-hero{text-align:center;max-width:900px;margin:0 auto}
.plat-hero .eyebrow{justify-content:center}
.plat-hero h1{max-width:22ch;margin:0 auto 1.5rem}
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

.plat-native{margin-top:2.4rem;display:flex;flex-direction:column;gap:1rem}
.plat-native-row{display:grid;grid-template-columns:.7fr 1fr 1.3fr;gap:1.6rem;background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:1.6rem 1.8rem}
.plat-native-row h3{font-size:1.02rem;letter-spacing:-.01em}
.plat-native-row p{font-size:.92rem;line-height:1.55;color:var(--text-body)}
.plat-native-lbl{font-family:var(--font-mono);font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted);display:block;margin-bottom:.4rem}
.plat-native-row .stops .plat-native-lbl{color:var(--brand-purple)}

.plat-covers{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.7rem 2rem;margin-top:1.4rem;padding:0;list-style:none}
.plat-covers li{display:flex;gap:.6rem;align-items:flex-start;font-size:.95rem;color:var(--text-body);line-height:1.5}
.plat-covers svg{width:17px;height:17px;flex:0 0 17px;margin-top:.15rem;color:var(--brand-purple)}

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

.plat-faq{margin-top:2.4rem;display:flex;flex-direction:column;gap:1rem;max-width:840px}
.plat-faq details{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:1.3rem 1.6rem}
.plat-faq summary{cursor:pointer;font-family:var(--font-heading);font-weight:600;font-size:1.02rem;letter-spacing:-.01em;list-style:none}
.plat-faq summary::-webkit-details-marker{display:none}
/* Rotated "+" rather than a minus glyph: the brand guidelines rule out dash characters
   on every surface, including decorative ones. */
.plat-faq summary::after{content:"+";float:right;color:var(--brand-purple);font-weight:400;display:inline-block;transition:transform .2s}
.plat-faq details[open] summary::after{transform:rotate(45deg)}
.plat-faq p{margin-top:.9rem;font-size:.95rem;line-height:1.6;color:var(--text-body)}

.plat-final{text-align:center}
.plat-final h2{max-width:22ch;margin:0 auto 1.3rem}
.plat-final .lede{margin:0 auto 2.4rem}
.plat-final .cta-row{justify-content:center}

@media(max-width:880px){
  .plat-native-row{grid-template-columns:1fr;gap:1rem}
  .plat-covers{grid-template-columns:1fr}
  .plat-cs-card{grid-template-columns:1fr;gap:1.2rem}
}
`;

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const COVERS = [
  "Products, collections and inventory",
  "Prices and price lists",
  "Metafields and custom data",
  "Pages, navigation and redirects",
  "Theme edits, isolated from live",
  "App installs and app configuration",
  "Checkout changes",
  "A diff of everything that changed",
];

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <JsonLd data={faqSchema} />
      <main className="plat-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="plat-hero">
              <span className="plat-badge reveal in">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 7 4v6c0 4.5-3 7-7 8-4-1-7-3.5-7-8V7Z" /><path d="m9 12 2 2 4-4" /></svg>
                Live on the Shopify App Store
              </span>
              <div className="eyebrow reveal in">For Shopify and Shopify Plus</div>
              <h1 className="reveal in">
                Shopify has no staging environment. <span className="grad">Now it does.</span>
              </h1>
              <p className="lede reveal in">
                Vortex IQ Staging makes a full, isolated copy of your Shopify or Shopify Plus store, including the
                parts theme previews leave behind: apps, metafields, navigation and checkout. Test anything, review
                a diff of what changed, deploy in one click, and roll back in seconds if production disagrees.
              </p>
              <div className="cta-row reveal in">
                <a className="btn" href={APP_URL} target="_blank" rel="noopener noreferrer">Install free on Shopify</a>
                <Link className="btn btn--ghost" href="/free-audit">Get my free store audit →</Link>
              </div>
              <p className="plat-note reveal in">
                Free plan on the App Store. No connectors, no developer, no sales call.
              </p>
            </div>
          </div>
        </section>

        {/* THE GAP, HONESTLY */}
        <section className="section section--soft">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">Where Shopify stops</div>
              <h2>Shopify gives you four ways to test. Here is where each one ends.</h2>
              <p className="lede">
                This is not an oversight on Shopify&apos;s part, it is a design decision: the platform hosts your
                store, so it does not hand you a second one. Every option below is genuinely useful for the job it
                covers. The problem is the job none of them cover, which is testing a change to the whole store
                before it reaches a customer.
              </p>
            </div>
            <div className="plat-native">
              {NATIVE_OPTIONS.map((o) => (
                <div className="plat-native-row reveal" key={o.name}>
                  <h3>{o.name}</h3>
                  <div>
                    <span className="plat-native-lbl">What it covers</span>
                    <p>{o.covers}</p>
                  </div>
                  <div className="stops">
                    <span className="plat-native-lbl">Where it stops</span>
                    <p>{o.stops}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT STAGING COVERS */}
        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: "start", gap: "2.4rem" }}>
              <div className="reveal">
                <div className="eyebrow">A real staging copy</div>
                <h2 style={{ maxWidth: "20ch" }}>Everything moves, then nothing moves until you say so.</h2>
                <p className="lede" style={{ marginTop: "1.3rem" }}>
                  Installing an app, editing a theme, changing products or modifying checkout inside staging does
                  not touch your live store. When you are ready, you review what changed and deploy it.
                </p>
                <ul className="plat-covers">
                  {COVERS.map((c) => (
                    <li key={c}><Check />{c}</li>
                  ))}
                </ul>
                <div className="cta-row" style={{ marginTop: "1.8rem" }}>
                  <a className="btn btn--ghost" href={DOCS_URL} target="_blank" rel="noopener noreferrer">Read the staging docs →</a>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
                <div className="card reveal">
                  <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg></div>
                  <h3>One-click deploy, with a diff first</h3>
                  <p className="muted" style={{ marginTop: ".6rem" }}>
                    See exactly what changed between staging and live before anything ships, so approval is a
                    decision rather than a guess.
                  </p>
                </div>
                <div className="card reveal">
                  <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v6h6" /><path d="M3.5 13a9 9 0 1 0 2.1-9.4L3 7" /></svg></div>
                  <h3>Instant rollback</h3>
                  <p className="muted" style={{ marginTop: ".6rem" }}>
                    A change can pass review and still break something real. Rollback returns the store to its
                    pre-deployment state in seconds, and RollbackPro carries the backups behind it.
                  </p>
                </div>
                <div className="card reveal">
                  <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /></svg></div>
                  <h3>Shared, with a history</h3>
                  <p className="muted" style={{ marginTop: ".6rem" }}>
                    Shared staging access, deployment history and change tracking, so a team or an agency can see
                    every change before it goes live and after it went live.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF, LABELLED */}
        <section className="section section--soft">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">Named results, on BigCommerce</div>
              <h2>The same discipline, already proven on the other platform.</h2>
              <p className="lede">
                Straight answer: these three are BigCommerce merchants running StagingPro, not Shopify stores. They
                are here because they show what safe deploys do to a real business, and because we would rather
                show you a real number on the wrong platform than a made-up one on yours. Shopify case studies
                will replace them as they are signed off.
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
          </div>
        </section>

        {/* THE THREE APPS + THE LOOP */}
        <section className="section">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">Three apps, one loop</div>
              <h2>Staging is the safe hands. The loop is what puts them to work.</h2>
              <p className="lede">
                All three are on the Shopify App Store with a free plan. Staging keeps changes off your live store,
                RollbackPro keeps the way back, and the AI Operating System is the part that notices something is
                wrong in the first place.
              </p>
            </div>
            <div className="grid grid-2" style={{ marginTop: "2.4rem", alignItems: "start" }}>
              <div className="card reveal">
                <h3>The four pillars</h3>
                <p className="muted" style={{ marginTop: ".6rem" }}>
                  <Link href="/ai-os-platform/nerve-centre">Nerve Centre</Link> senses what changed across your
                  stack in real time. <Link href="/ai-os-platform/vortex-mind">Vortex Mind</Link> works out why and
                  remembers it. <Link href="/ai-os-platform/ask-viq">Ask Viq</Link> lets you ask in plain English.{" "}
                  <Link href="/ai-os-platform/vortex-agents">Vortex Agents</Link> makes the change, on staging
                  first, with your approval and a way back.
                </p>
                <div className="cta-row" style={{ marginTop: "1.2rem" }}>
                  <Link className="btn btn--ghost" href="/ai-os-platform">See the platform →</Link>
                </div>
              </div>
              <div className="card reveal">
                <h3>Alongside Shopify, not instead of it</h3>
                <p className="muted" style={{ marginTop: ".6rem" }}>
                  Vortex IQ is read-first by design and nothing writes to your store without a human approving it.
                  It sits alongside the Shopify platform and the apps you already run, and it connects to the ERP,
                  payment, shipping and analytics tools around them.
                </p>
                <div className="cta-row" style={{ marginTop: "1.2rem" }}>
                  <Link className="btn btn--ghost" href="/platforms/shopify">Vortex IQ for Shopify →</Link>
                  <a className="btn btn--ghost" href={APPS_URL} target="_blank" rel="noopener noreferrer">All three apps →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">Questions</div>
              <h2>Shopify staging, answered plainly.</h2>
            </div>
            <div className="plat-faq">
              {faq.map((f) => (
                <details className="reveal" key={f.question}>
                  <summary>{f.question}</summary>
                  <p>{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section plat-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Get started</div>
            <h2 className="reveal">Stage your next Shopify change instead of hoping.</h2>
            <p className="lede reveal">
              Install free from the Shopify App Store and make a staging copy today. Or start with the free store
              audit and see what is leaking revenue before you change anything.
            </p>
            <div className="cta-row reveal">
              <a className="btn" href={APP_URL} target="_blank" rel="noopener noreferrer" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Install free on Shopify</a>
              <Link className="btn btn--ghost" href="/free-audit" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Get my free audit →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
