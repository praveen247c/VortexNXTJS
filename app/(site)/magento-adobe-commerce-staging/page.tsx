import type { Metadata } from "next";
import Link from "next/link";
import { pageOpenGraph } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

/* Owns the Magento and Adobe Commerce staging query cluster.
   Accuracy rule this page must keep, checkable by the reader in a sentence: these
   platforms DO have staging of a kind. Adobe's own docs confirm Cloud ships Integration,
   Staging and Production, with one branch each for the latter two. Never claim "Adobe
   Commerce has no staging"; the constraint is that there is one slot per project.

   Platform support confirmed by Susant on 30 Jul 2026: all versions of Magento, Adobe
   Commerce and Adobe Commerce Cloud. NOTE: docs.vortexiq.ai/vortex-apps/dryrunpro
   currently states Cloud only and lists Open Source and on-premise as unsupported. The
   docs are stale and need updating, otherwise this page and the documentation contradict
   each other in front of a prospect. */
const TITLE = "Adobe Commerce & Magento Staging | On-Demand Environments";
const DOCS_URL = "https://docs.vortexiq.ai/vortex-apps/dryrunpro/index";

export const metadata: Metadata = {
  alternates: { canonical: "/magento-adobe-commerce-staging" },
  title: TITLE,
  description:
    "Adobe Commerce Cloud gives you one Staging branch per project. Magento Open Source gives you none. DryRunPro spins up on-demand dryrun environments that mirror your production Magento topology, across every version of Magento and Adobe Commerce.",
  openGraph: pageOpenGraph({
    title: TITLE,
    description:
      "On-demand dryrun environments mirroring your production Magento topology: full Docker stack, SWAT and extension audits, many projects from one account.",
    path: "/magento-adobe-commerce-staging",
  }),
};

type Tier = { platform: string; has: string; gap: string };

const TIERS: Tier[] = [
  {
    platform: "Adobe Commerce Cloud",
    has: "A genuine near-production Staging environment with its own database, web server and services including Fastly and New Relic, plus Integration branches.",
    gap: "Adobe's own documentation is clear that Staging and Production have exactly one branch each. One slot, per project, for the whole team. Run five client projects and you are managing five separate queues by hand.",
  },
  {
    platform: "Adobe Commerce, Content Staging",
    has: "Schedule content, pricing and CMS changes ahead of time, with a preview of how they will look.",
    gap: "It is a content scheduling tool, not an environment. Extension upgrades, security patches, custom code, database changes, theme deployments and integration behaviour are all outside what it can test.",
  },
  {
    platform: "Magento Open Source",
    has: "Nothing native. Content Staging is an Adobe Commerce exclusive and was never part of Open Source.",
    gap: "Every environment is one you build and maintain yourself, and then keep in step with production forever. This is where the gap is widest, and it is the case DryRunPro was built to close.",
  },
];

const CAPABILITIES = [
  "Full Docker stack: PHP-FPM, MySQL, Redis, OpenSearch, RabbitMQ",
  "A fully composed, fully cached clone, Fastly-fronted on Cloud",
  "Push a branch in, run smoke tests against it",
  "SWAT reports on every dryrun",
  "Magento extension audits and code audits",
  "bin/sync between environments",
  "Docker snapshots and Warden packages as deliverables",
  "Edge DNS automation and CDN mode override",
];

type Faq = { question: string; answer: string };

// Single source of truth: the visible FAQ AND the FAQPage JSON-LD both render
// from this array, so the schema always matches on-page content (Google policy).
const faq: Faq[] = [
  {
    question: "Does Adobe Commerce have a staging environment?",
    answer:
      "On Adobe Commerce Cloud, yes. Cloud ships Integration, Staging and Production, and Staging is a near-production environment with its own database, web server and services including Fastly and New Relic. The constraint is that Adobe's documentation specifies one branch each for Staging and Production, so a single staging slot is shared across every workstream on that project. Adobe Commerce on-premise has no managed environment, and Magento Open Source has neither that nor Content Staging.",
  },
  {
    question: "Is Content Staging the same as a staging environment?",
    answer:
      "No, and the similar names cause real confusion. Content Staging schedules content, pricing and CMS changes and previews how they will look. It is a marketing scheduling tool. It cannot test an extension upgrade, a security patch, custom code, a database change, a theme deployment or an integration, because none of those are content. It is also Adobe Commerce only and has never been part of Magento Open Source.",
  },
  {
    question: "Does DryRunPro work with Magento Open Source or on-premise Adobe Commerce?",
    answer:
      "Yes. It supports all versions of Magento, Adobe Commerce and Adobe Commerce Cloud. Open Source is where the gap is widest, because it has neither managed environments nor Content Staging, so every environment is one you would otherwise build and maintain yourself.",
  },
  {
    question: "How is this different from the Staging environment I already pay Adobe for?",
    answer:
      "It does not replace it, it removes the queue. DryRunPro is a multi-project launcher: one user account spins up dryrun environments across many projects, with per-customer team segregation, so a patch test on one client and a replatform spike on another are not competing for the same branch. Each dryrun mirrors the production topology rather than approximating it.",
  },
  {
    question: "How long does an environment take to appear?",
    answer:
      "Minutes rather than days. On Adobe Commerce Cloud it is about as long as the build pipeline takes to finish. When the dryrun has done its job you tear it down, so environments are disposable rather than long-lived and quietly drifting away from production.",
  },
  {
    question: "What do we get out of it besides an environment?",
    answer:
      "Each dryrun can run a SWAT report, a Magento extension audit and a code audit, and can produce Docker snapshots and Warden packages your developers can work with locally. Local Docker tooling on its own does not give you a Fastly-fronted public URL, which is the part that makes stakeholder review possible.",
  },
  {
    question: "Who is it actually built for?",
    answer:
      "Anyone shipping changes to a Magento or Adobe Commerce store, with agencies and systems integrators as the sharpest fit: managing many projects from one account with per-customer team segregation is designed in, so client work stays separated while the tooling stays in one place.",
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

.plat-head{max-width:780px}
.plat-head h2{max-width:24ch}
.plat-head .lede{margin-top:1.3rem}

.plat-ic{width:48px;height:48px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.3rem;box-shadow:var(--shadow-sm)}
.plat-ic svg{width:24px;height:24px}

.plat-native{margin-top:2.4rem;display:flex;flex-direction:column;gap:1rem}
.plat-native-row{display:grid;grid-template-columns:.75fr 1fr 1.35fr;gap:1.6rem;background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:1.6rem 1.8rem}
.plat-native-row h3{font-size:1.02rem;letter-spacing:-.01em}
.plat-native-row p{font-size:.92rem;line-height:1.55;color:var(--text-body)}
.plat-native-lbl{font-family:var(--font-mono);font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;color:var(--text-muted);display:block;margin-bottom:.4rem}
.plat-native-row .stops .plat-native-lbl{color:var(--brand-purple)}

.plat-covers{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.7rem 2rem;margin-top:1.4rem;padding:0;list-style:none}
.plat-covers li{display:flex;gap:.6rem;align-items:flex-start;font-size:.95rem;color:var(--text-body);line-height:1.5}
.plat-covers svg{width:17px;height:17px;flex:0 0 17px;margin-top:.15rem;color:var(--brand-purple)}

.plat-callout{background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius);padding:1.6rem 1.8rem;margin-top:1.6rem;max-width:780px}
.plat-callout h3{font-size:1.02rem;letter-spacing:-.01em;margin-bottom:.5rem}
.plat-callout p{font-size:.94rem;line-height:1.6;color:var(--text-body)}

.plat-faq{margin-top:2.4rem;display:flex;flex-direction:column;gap:1rem;max-width:860px}
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
}
`;

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 15 9l7 .5-5.4 4.6L18.2 21 12 17.3 5.8 21l1.6-6.9L2 9.5 9 9Z" /></svg>
                Adobe Commerce Rockstar, Adobe Summit 2023
              </span>
              <div className="eyebrow reveal in">DryRunPro, for Adobe Commerce and Magento</div>
              <h1 className="reveal in">
                One Staging branch per project is not <span className="grad">a staging strategy.</span>
              </h1>
              <p className="lede reveal in">
                Adobe gives every Cloud project a single Staging branch, shared by everyone working on it. Magento
                Open Source gives you nothing at all. DryRunPro spins up dryrun environments on demand that mirror
                your production Magento topology, across many projects from one account, in minutes.
              </p>
              <div className="cta-row reveal in">
                <Link className="btn" href="/contact-us">Book a DryRunPro walkthrough</Link>
                <a className="btn btn--ghost" href={DOCS_URL} target="_blank" rel="noopener noreferrer">Read the docs →</a>
              </div>
              <p className="plat-note reveal in">
                All versions of Magento, Adobe Commerce and Adobe Commerce Cloud.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT YOU ALREADY HAVE, HONESTLY */}
        <section className="section section--soft">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">Start from what is true</div>
              <h2>These platforms do have staging. Just not enough of it.</h2>
              <p className="lede">
                We are not going to tell you Adobe Commerce has no staging, because it does, and you would know
                within a sentence that we had not done the reading. The real constraint is narrower, and it is
                different at each tier.
              </p>
            </div>
            <div className="plat-native">
              {TIERS.map((t) => (
                <div className="plat-native-row reveal" key={t.platform}>
                  <h3>{t.platform}</h3>
                  <div>
                    <span className="plat-native-lbl">What you have</span>
                    <p>{t.has}</p>
                  </div>
                  <div className="stops">
                    <span className="plat-native-lbl">Where it stops</span>
                    <p>{t.gap}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="plat-callout reveal">
              <h3>Every version, not just the Cloud one</h3>
              <p>
                DryRunPro supports all versions of Magento, Adobe Commerce and Adobe Commerce Cloud, so the
                comparison above is about what you already have rather than about whether we can help. If you would
                rather see the state of your store before changing anything, start with the{" "}
                <Link href="/free-audit">free store audit</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT IT DOES */}
        <section className="section">
          <div className="container">
            <div className="grid grid-2" style={{ alignItems: "start", gap: "2.4rem" }}>
              <div className="reveal">
                <div className="eyebrow">What a dryrun actually is</div>
                <h2 style={{ maxWidth: "20ch" }}>The production topology, not an approximation of it.</h2>
                <p className="lede" style={{ marginTop: "1.3rem" }}>
                  A fully composed, fully cached, Fastly-fronted clone with the real stack underneath. Push a branch
                  into it, run your smoke tests, read the report, then tear it down.
                </p>
                <ul className="plat-covers">
                  {CAPABILITIES.map((c) => (
                    <li key={c}><Check />{c}</li>
                  ))}
                </ul>
                <div className="cta-row" style={{ marginTop: "1.8rem" }}>
                  <a className="btn btn--ghost" href={DOCS_URL} target="_blank" rel="noopener noreferrer">Full documentation →</a>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.3rem" }}>
                <div className="card reveal">
                  <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg></div>
                  <h3>Many projects, one account</h3>
                  <p className="muted" style={{ marginTop: ".6rem" }}>
                    Manage dryruns across every Adobe Commerce Cloud project you run, with per-customer team
                    segregation, so client work stays separated while the tooling stays in one place. This is the
                    design centre, not a bolt-on.
                  </p>
                </div>
                <div className="card reveal">
                  <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg></div>
                  <h3>A report, not just an environment</h3>
                  <p className="muted" style={{ marginTop: ".6rem" }}>
                    Every dryrun can run a SWAT report, a Magento extension audit and a code audit, so the output is
                    a decision rather than a URL someone has to go and poke at.
                  </p>
                </div>
                <div className="card reveal">
                  <div className="plat-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-6.2-8.6" /><path d="M21 3v6h-6" /></svg></div>
                  <h3>Disposable by design</h3>
                  <p className="muted" style={{ marginTop: ".6rem" }}>
                    Spin up, test, tear down. Environments that exist for a task do not drift away from production
                    the way a permanent shared staging branch always eventually does.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE LOOP */}
        <section className="section section--soft">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">Staging is the floor, not the ceiling</div>
              <h2>Safe deploys are the start. Knowing what to deploy is the rest.</h2>
              <p className="lede">
                A dryrun tells you a change is safe. It does not tell you a feed has been silently rejecting
                products for a week, or why yesterday&apos;s conversion dipped. That is the AI Operating System
                sitting above it.
              </p>
            </div>
            <div className="grid grid-2" style={{ marginTop: "2.4rem", alignItems: "start" }}>
              <div className="card reveal">
                <h3>The four pillars</h3>
                <p className="muted" style={{ marginTop: ".6rem" }}>
                  <Link href="/ai-os-platform/nerve-centre">Nerve Centre</Link> senses what changed.{" "}
                  <Link href="/ai-os-platform/vortex-mind">Vortex Mind</Link> works out why and remembers it.{" "}
                  <Link href="/ai-os-platform/ask-viq">Ask Viq</Link> answers in plain English.{" "}
                  <Link href="/ai-os-platform/vortex-agents">Vortex Agents</Link> makes the change, staged first,
                  with your approval.
                </p>
                <div className="cta-row" style={{ marginTop: "1.2rem" }}>
                  <Link className="btn btn--ghost" href="/platforms/magento-adobe-commerce">Vortex IQ for Adobe Commerce →</Link>
                </div>
              </div>
              <div className="card reveal">
                <h3>Alongside Adobe, not instead of it</h3>
                <p className="muted" style={{ marginTop: ".6rem" }}>
                  Vortex IQ is read-first by design and nothing writes to your store without a human approving it.
                  DryRunPro complements the Cloud environments you already pay Adobe for rather than asking you to
                  abandon them.
                </p>
                <div className="cta-row" style={{ marginTop: "1.2rem" }}>
                  <Link className="btn btn--ghost" href="/solutions/for-agencies">For agencies and SIs →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container">
            <div className="plat-head reveal">
              <div className="eyebrow">Questions</div>
              <h2>Adobe Commerce and Magento staging, answered plainly.</h2>
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
        <section className="section plat-final section--soft">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Get started</div>
            <h2 className="reveal">Stop scheduling around one Staging branch.</h2>
            <p className="lede reveal">
              Book a walkthrough and we will run a dryrun against one of your projects, whichever version of Magento
              or Adobe Commerce it runs on. Or start with the free store audit and see what is leaking revenue
              before you change anything.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Book a walkthrough</Link>
              <Link className="btn btn--ghost" href="/free-audit" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Get my free audit →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
