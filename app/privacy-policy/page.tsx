import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Vortex IQ",
  description:
    "How Vortex IQ collects, uses, and protects personal data across the AI Operating System for commerce. A plain-English summary of our privacy practices under UK GDPR.",
};

const css = `
/* ============ Legal pages — shared template (built on the shared design system) ============ */
.legal-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.legal-page .section--soft{background:var(--surface-soft)}

/* hero */
.legal-hero{max-width:820px}
.legal-hero h1{font-size:clamp(2.4rem,5vw,3.8rem);margin:0 0 1rem}
.legal-updated{display:inline-flex;align-items:center;gap:.55rem;font-family:var(--font-mono);font-size:.78rem;letter-spacing:.04em;color:var(--text-body)}
.legal-updated svg{width:15px;height:15px;color:var(--brand-purple)}
.legal-banner{display:flex;align-items:flex-start;gap:.85rem;margin-top:2rem;max-width:680px;background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius);padding:1rem 1.15rem}
.legal-banner .bi{width:34px;height:34px;flex:none;border-radius:9px;background:var(--white);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center}
.legal-banner .bi svg{width:17px;height:17px}
.legal-banner p{font-family:var(--font-mono);font-size:.8rem;line-height:1.55;color:var(--text-body);margin:0}
.legal-banner b{color:var(--brand-purple);font-weight:500}

/* two-column layout */
.legal-layout{display:grid;grid-template-columns:248px 1fr;gap:3.4rem;align-items:start}

/* sticky TOC */
.legal-toc{position:sticky;top:6rem}
.legal-toc .toc-label{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--text-faded);margin-bottom:1rem;display:block}
.legal-toc ol{list-style:none;margin:0;padding:0;counter-reset:toc}
.legal-toc li{counter-increment:toc}
.legal-toc a{display:flex;gap:.7rem;align-items:baseline;font-size:.9rem;color:var(--text-body);text-decoration:none;padding:.42rem 0;line-height:1.4;transition:color .18s}
.legal-toc a::before{content:counter(toc,decimal-leading-zero);font-family:var(--font-mono);font-size:.66rem;color:var(--brand-purple);opacity:.65;flex:none;padding-top:.12rem}
.legal-toc a:hover{color:var(--brand-purple)}

/* content column */
.legal-content{max-width:680px}
.legal-sec{padding:2.2rem 0;border-bottom:1px solid var(--border-dark);scroll-margin-top:6rem}
.legal-sec:first-child{padding-top:0}
.legal-sec:last-child{border-bottom:none}
.legal-sec h2{font-size:clamp(1.5rem,2.6vw,1.9rem);margin-bottom:1rem;letter-spacing:-.015em}
.legal-sec h3{font-size:1.05rem;margin:1.4rem 0 .5rem}
.legal-sec p{font-size:1.02rem;color:var(--text-body);line-height:1.62;margin-bottom:1rem;max-width:62ch}
.legal-sec p:last-child{margin-bottom:0}
.legal-sec a{color:var(--brand-purple);text-decoration:none;border-bottom:1px solid var(--border-brand);transition:border-color .2s}
.legal-sec a:hover{border-color:var(--brand-purple)}
.legal-sec ul{margin:.2rem 0 1rem;padding-left:0;list-style:none;max-width:62ch}
.legal-sec ul li{position:relative;padding-left:1.5rem;font-size:1.02rem;color:var(--text-body);line-height:1.6;margin-bottom:.55rem}
.legal-sec ul li::before{content:"";position:absolute;left:.25rem;top:.62rem;width:6px;height:6px;border-radius:50%;background:var(--brand-purple);opacity:.55}
.legal-sec ul li b{color:var(--primary);font-weight:600}
.legal-secnum{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.08em;color:var(--brand-purple);display:block;margin-bottom:.5rem}

/* cookie category grid */
.cookie-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--bento-gap);margin:1.6rem 0 .4rem}
.cookie-cat{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:1.5rem}
.cookie-cat .cc-ic{width:40px;height:40px;border-radius:10px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center;margin-bottom:1rem}
.cookie-cat .cc-ic svg{width:19px;height:19px}
.cookie-cat h3{font-size:1.04rem;margin-bottom:.45rem}
.cookie-cat p{font-size:.94rem;color:var(--text-body);line-height:1.55;margin:0}
.cookie-cat .cc-tag{display:inline-flex;align-items:center;font-family:var(--font-mono);font-size:.62rem;letter-spacing:.06em;text-transform:uppercase;padding:.2rem .55rem;border-radius:var(--radius-pill);margin-top:.9rem}
.cc-tag--req{background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple)}
.cc-tag--opt{background:var(--surface-soft);border:1px solid var(--border-dark);color:var(--text-body)}

/* questions / contact block */
.legal-contact{background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius);padding:2.2rem 2.4rem;margin-top:2.6rem}
.legal-contact h2{font-size:1.5rem;margin-bottom:.7rem}
.legal-contact p{font-size:1.02rem;color:var(--text-body);line-height:1.6;margin-bottom:.5rem;max-width:60ch}
.legal-contact a{color:var(--brand-purple);text-decoration:none;border-bottom:1px solid var(--border-brand)}
.legal-contact a:hover{border-color:var(--brand-purple)}
.legal-reg{font-family:var(--font-mono);font-size:.74rem;color:var(--text-faded);line-height:1.7;margin-top:1.3rem;padding-top:1.3rem;border-top:1px solid var(--border-brand)}

/* final cta */
.legal-final{text-align:center}
.legal-final h2{max-width:20ch;margin:0 auto 1.3rem}
.legal-final .lede{margin:0 auto 2.4rem}
.legal-final .cta-row{justify-content:center}

@media(max-width:900px){
  .legal-layout{grid-template-columns:1fr;gap:2.4rem}
  .legal-toc{position:static;background:var(--surface-soft);border:1px solid var(--border-dark);border-radius:var(--radius);padding:1.4rem 1.5rem}
  .cookie-grid{grid-template-columns:1fr}
}
@media(max-width:560px){
  .legal-contact{padding:1.6rem}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="legal-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="legal-hero">
              <div className="eyebrow reveal in">Legal</div>
              <h1 className="reveal in">
                Privacy <span className="grad">Policy.</span>
              </h1>
              <div className="legal-updated reveal in">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                Last updated: June 2026
              </div>
              <div className="legal-banner reveal in">
                <span className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v4h1" /></svg></span>
                <p>
                  <b>This is a plain-English summary provided for review.</b> The final, legally binding text is
                  being finalised.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="section section--soft">
          <div className="container">
            <div className="legal-layout">
              {/* TOC */}
              <nav className="legal-toc reveal" aria-label="On this page">
                <span className="toc-label">On this page</span>
                <ol>
                  <li><a href="#introduction">Introduction</a></li>
                  <li><a href="#information-we-collect">Information we collect</a></li>
                  <li><a href="#how-we-use">How we use your information</a></li>
                  <li><a href="#legal-bases">Legal bases (UK GDPR)</a></li>
                  <li><a href="#cookies">Cookies &amp; tracking</a></li>
                  <li><a href="#sharing">Sharing &amp; sub-processors</a></li>
                  <li><a href="#retention">Data retention</a></li>
                  <li><a href="#transfers">International transfers</a></li>
                  <li><a href="#your-rights">Your rights</a></li>
                  <li><a href="#security">Security</a></li>
                  <li><a href="#children">Children</a></li>
                  <li><a href="#changes">Changes to this policy</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ol>
              </nav>

              {/* CONTENT */}
              <div className="legal-content reveal">
                <div className="legal-sec" id="introduction">
                  <span className="legal-secnum">01</span>
                  <h2>Introduction</h2>
                  <p>
                    Vortex IQ Ltd (&ldquo;Vortex IQ&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) builds the AI Operating
                    System for e-commerce. This policy explains, in plain English, what personal data we handle when you
                    visit our site, talk to our team, or use the platform — and the choices you have.
                  </p>
                  <p>
                    For the data inside your store that you connect to Vortex IQ, you are the data controller and we act
                    as your processor under a Data Processing Agreement. For your own account and our website, we are the
                    controller.
                  </p>
                </div>

                <div className="legal-sec" id="information-we-collect">
                  <span className="legal-secnum">02</span>
                  <h2>Information we collect</h2>
                  <p>We keep collection to what we genuinely need to run the service and support you:</p>
                  <ul>
                    <li><b>Account &amp; contact details</b> — name, work email, company, and role when you sign up or enquire.</li>
                    <li><b>Commerce &amp; usage data</b> — store, catalogue, and operational data you connect, plus how you use the platform.</li>
                    <li><b>Technical data</b> — IP address, device, browser, and log data collected automatically for security and performance.</li>
                    <li><b>Communications</b> — messages, support tickets, and demo requests you send us.</li>
                  </ul>
                </div>

                <div className="legal-sec" id="how-we-use">
                  <span className="legal-secnum">03</span>
                  <h2>How we use your information</h2>
                  <p>
                    We use your data to provide and improve the platform, run AI agents that detect, explain, and fix
                    issues in your store, respond to enquiries, keep accounts secure, meet legal obligations, and send
                    relevant product updates. We do not sell your personal data.
                  </p>
                </div>

                <div className="legal-sec" id="legal-bases">
                  <span className="legal-secnum">04</span>
                  <h2>Legal bases (UK GDPR)</h2>
                  <p>Where we act as controller, we rely on one of these lawful bases:</p>
                  <ul>
                    <li><b>Contract</b> — to deliver the service you have signed up for.</li>
                    <li><b>Legitimate interests</b> — to secure, improve, and market our products, balanced against your rights.</li>
                    <li><b>Consent</b> — for optional cookies and certain marketing, which you can withdraw at any time.</li>
                    <li><b>Legal obligation</b> — where the law requires us to retain or disclose information.</li>
                  </ul>
                </div>

                <div className="legal-sec" id="cookies">
                  <span className="legal-secnum">05</span>
                  <h2>Cookies &amp; tracking</h2>
                  <p>
                    We use cookies and similar technologies to keep the site working, understand usage, and measure
                    marketing. You control non-essential cookies through our consent banner. For the full breakdown of
                    categories and how to manage them, see our <Link href="/cookie-policy">Cookie Policy</Link>.
                  </p>
                </div>

                <div className="legal-sec" id="sharing">
                  <span className="legal-secnum">06</span>
                  <h2>Sharing &amp; sub-processors</h2>
                  <p>
                    We share data only where needed to run the service: with vetted sub-processors such as cloud hosting,
                    AI model, analytics, and customer-support providers, all bound by contract to protect your data. We may
                    also disclose information where required by law or as part of a corporate transaction. A current list of
                    sub-processors is available on request.
                  </p>
                </div>

                <div className="legal-sec" id="retention">
                  <span className="legal-secnum">07</span>
                  <h2>Data retention</h2>
                  <p>
                    We keep personal data only for as long as we need it for the purposes above, or as required by law.
                    Account data is retained while your account is active and for a limited period afterwards; some records
                    are kept longer to meet legal, accounting, or security obligations.
                  </p>
                </div>

                <div className="legal-sec" id="transfers">
                  <span className="legal-secnum">08</span>
                  <h2>International transfers</h2>
                  <p>
                    We are based in the UK and primarily process data here and in the EEA. Where data is transferred
                    outside the UK or EEA, we put appropriate safeguards in place — such as the UK International Data
                    Transfer Agreement or Standard Contractual Clauses — so your data stays protected.
                  </p>
                </div>

                <div className="legal-sec" id="your-rights">
                  <span className="legal-secnum">09</span>
                  <h2>Your rights</h2>
                  <p>Under UK GDPR you can request to:</p>
                  <ul>
                    <li><b>Access</b> a copy of the personal data we hold about you.</li>
                    <li><b>Correct</b> data that is inaccurate or incomplete.</li>
                    <li><b>Delete</b> your data, or restrict and object to certain processing.</li>
                    <li><b>Port</b> your data, and withdraw consent where we rely on it.</li>
                  </ul>
                  <p>
                    To exercise any right, email <a href="mailto:privacy@vortexiq.ai">privacy@vortexiq.ai</a>. You also have
                    the right to complain to the UK Information Commissioner&apos;s Office (ICO).
                  </p>
                </div>

                <div className="legal-sec" id="security">
                  <span className="legal-secnum">10</span>
                  <h2>Security</h2>
                  <p>
                    We protect your data with encryption in transit and at rest, access controls, monitoring, and regular
                    testing. Vortex IQ is ISO 27001 certified. You can learn more about our controls in our{" "}
                    <Link href="/trust/trust-center">Trust Center</Link>.
                    No system is perfectly secure, but we work hard to keep your data safe.
                  </p>
                </div>

                <div className="legal-sec" id="children">
                  <span className="legal-secnum">11</span>
                  <h2>Children</h2>
                  <p>
                    Vortex IQ is a business product not directed at children. We do not knowingly collect personal data
                    from anyone under 16. If you believe a child has provided us data, contact us and we will delete it.
                  </p>
                </div>

                <div className="legal-sec" id="changes">
                  <span className="legal-secnum">12</span>
                  <h2>Changes to this policy</h2>
                  <p>
                    We may update this policy as the product and the law evolve. When we make material changes we will
                    update the date above and, where appropriate, let you know directly. Please check back from time to time.
                  </p>
                </div>

                <div className="legal-sec" id="contact">
                  <span className="legal-secnum">13</span>
                  <h2>Contact</h2>
                  <p>
                    Questions about this policy or how we handle your data? We are happy to help — the details are in the
                    block below.
                  </p>
                </div>

                {/* QUESTIONS BLOCK */}
                <div className="legal-contact">
                  <h2>Questions?</h2>
                  <p>
                    For privacy matters, email{" "}
                    <a href="mailto:privacy@vortexiq.ai">privacy@vortexiq.ai</a>. For anything else, reach the team at{" "}
                    <a href="mailto:hey@vortexiq.ai">hey@vortexiq.ai</a> or via our{" "}
                    <Link href="/contact-us">contact page</Link>.
                  </p>
                  <p className="legal-reg">
                    Vortex IQ Ltd · Registered in England &amp; Wales No. 14925424 · Brentford, London, United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section legal-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Built on trust</div>
            <h2 className="reveal">Security and privacy, built in from day one.</h2>
            <p className="lede reveal">
              See how the AI Operating System for commerce detects, explains, and fixes issues on your store — without
              compromising on how your data is handled.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Talk to us</Link>
              <Link className="btn btn--ghost" href="/trust/trust-center" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Visit the Trust Center →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
