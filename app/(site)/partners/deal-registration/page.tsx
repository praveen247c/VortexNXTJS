import type { Metadata } from "next";
import Link from "next/link";
import HubSpotForm from "@/components/HubSpotForm";
import { pageOpenGraph } from "@/lib/seo";

const TITLE = "Partner Deal Registration | Vortex IQ";

export const metadata: Metadata = {
  alternates: { canonical: "/partners/deal-registration" },
  title: TITLE,
  description:
    "Register a deal as a Vortex IQ agency or technology partner so your pipeline is protected before you introduce us to a merchant.",
  openGraph: pageOpenGraph({
    title: TITLE,
    description: "Register a deal as a Vortex IQ partner so your pipeline is protected before you make the introduction.",
    path: "/partners/deal-registration",
  }),
};

const css = `
.dr-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.dr-page .section--soft{background:var(--surface-soft)}

.dr-hero{text-align:center;max-width:820px;margin:0 auto}
.dr-hero .eyebrow{justify-content:center}
.dr-hero h1{max-width:20ch;margin:0 auto 1.4rem}
.dr-hero .lede{margin:0 auto}

.dr-head{max-width:760px}
.dr-head h2{max-width:22ch}
.dr-head .lede{margin-top:1.2rem}

.dr-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--bento-gap);margin-top:2.6rem}
.dr-step{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:1.9rem 1.7rem;transition:transform .25s var(--ease),border-color .25s,box-shadow .3s}
.dr-step:hover{transform:translateY(-3px);border-color:var(--border-strong);box-shadow:var(--shadow-lg)}
.dr-step .num{font-family:var(--font-mono);font-size:.78rem;color:#fff;background:var(--brand-purple);width:32px;height:32px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:1.1rem}
.dr-step h3{font-size:1.04rem;margin-bottom:.5rem}
.dr-step p{color:var(--text-body);font-size:.92rem;line-height:1.55}

.dr-form-wrap{text-align:center}
.dr-form-wrap h2{max-width:20ch;margin:0 auto 1.2rem}
.dr-form-wrap .lede{margin:0 auto 2.2rem}
.dr-form-card{max-width:720px;margin:0 auto;text-align:left;background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2.4rem;box-shadow:var(--shadow-sm)}

@media(max-width:860px){.dr-steps{grid-template-columns:1fr}}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="dr-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="dr-hero">
              <div className="eyebrow reveal in">For partners</div>
              <h1 className="reveal in">
                Register a deal. <span className="grad">Protect your pipeline.</span>
              </h1>
              <p className="lede reveal in">
                If you are an agency or a technology partner bringing us a merchant, register it first. Once a
                deal is registered, the partner who brought it stays attached to it, so a direct approach from
                us or a BigCommerce TAM does not cut you out.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT REGISTRATION PROTECTS */}
        <section className="section section--soft">
          <div className="container">
            <div className="dr-head reveal">
              <div className="eyebrow">What registering a deal does</div>
              <h2>One record, one owner, no channel conflict.</h2>
              <p className="lede">
                Registration is how we keep introductions honest between partners, our own team, and
                BigCommerce TAMs working the same accounts. The exact commercial terms for your partner tier
                are confirmed in your partner agreement, not here; this page covers the process.
              </p>
            </div>
            <div className="dr-steps">
              <div className="dr-step reveal">
                <span className="num">01</span>
                <h3>Tell us about the merchant</h3>
                <p>Company name, your relationship to them, and roughly where they are in their decision, before we or anyone else engages them directly.</p>
              </div>
              <div className="dr-step reveal">
                <span className="num">02</span>
                <h3>We confirm the registration</h3>
                <p>We check the account is not already registered by another partner or already in an active conversation with us, then confirm the deal is yours.</p>
              </div>
              <div className="dr-step reveal">
                <span className="num">03</span>
                <h3>You stay attached to it</h3>
                <p>Introductions, calls and any commercial terms for the account route back through you as the registering partner, for the protection window set out in your partner agreement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* REGISTER FORM */}
        <section className="section dr-form-wrap">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Register a deal</div>
            <h2 className="reveal">Tell us about the opportunity.</h2>
            <p className="lede reveal">
              This uses the same form our team monitors for all partner enquiries. Mention that you are
              registering a deal and name the merchant, and we will confirm the registration back to you.
            </p>
            <div className="dr-form-card reveal">
              <HubSpotForm portalId="24385350" formId="7d444765-fc6a-40ad-b6d9-a6be08a5893d" region="na1" />
            </div>
          </div>
        </section>

        {/* CROSS-LINKS */}
        <section className="section section--soft" style={{ textAlign: "center" }}>
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Not a partner yet?</div>
            <h2 className="reveal" style={{ maxWidth: "22ch", margin: "0 auto 1.3rem" }}>See the agency and technology partner programmes.</h2>
            <div className="cta-row reveal" style={{ justifyContent: "center" }}>
              <Link className="btn" href="/partners/agency-program" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Agency Partner Programme →</Link>
              <Link className="btn btn--ghost" href="/partners/technology-program" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Technology Partner Programme →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
