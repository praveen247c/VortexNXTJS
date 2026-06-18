import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Vortex IQ",
  description:
    "The terms that govern your use of the Vortex IQ AI Operating System for e-commerce. A plain-English summary of the agreement between you and Vortex IQ Ltd.",
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
                Terms of <span className="grad">Service.</span>
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
                  <li><a href="#agreement">Agreement &amp; acceptance</a></li>
                  <li><a href="#definitions">Definitions</a></li>
                  <li><a href="#the-service">The service</a></li>
                  <li><a href="#accounts">Accounts &amp; eligibility</a></li>
                  <li><a href="#acceptable-use">Acceptable use</a></li>
                  <li><a href="#billing">Subscriptions, fees &amp; billing</a></li>
                  <li><a href="#customer-data">Customer data &amp; ownership</a></li>
                  <li><a href="#ip">Vortex IQ intellectual property</a></li>
                  <li><a href="#third-party">Third-party services</a></li>
                  <li><a href="#warranties">Warranties &amp; disclaimers</a></li>
                  <li><a href="#liability">Limitation of liability</a></li>
                  <li><a href="#indemnification">Indemnification</a></li>
                  <li><a href="#termination">Term &amp; termination</a></li>
                  <li><a href="#governing-law">Governing law</a></li>
                  <li><a href="#changes">Changes</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ol>
              </nav>

              {/* CONTENT */}
              <div className="legal-content reveal">
                <div className="legal-sec" id="agreement">
                  <span className="legal-secnum">01</span>
                  <h2>Agreement &amp; acceptance</h2>
                  <p>
                    These terms form an agreement between you (or the organisation you represent) and Vortex IQ Ltd. By
                    creating an account, accessing the platform, or otherwise using our services, you agree to these terms.
                    If you are accepting on behalf of a company, you confirm you have authority to do so.
                  </p>
                </div>

                <div className="legal-sec" id="definitions">
                  <span className="legal-secnum">02</span>
                  <h2>Definitions</h2>
                  <ul>
                    <li><b>Service</b> — the Vortex IQ AI Operating System and related apps, agents, and APIs.</li>
                    <li><b>Customer Data</b> — the store, catalogue, and operational data you connect or upload.</li>
                    <li><b>Account</b> — your registered access to the Service.</li>
                    <li><b>Order</b> — the plan or subscription you sign up for.</li>
                  </ul>
                </div>

                <div className="legal-sec" id="the-service">
                  <span className="legal-secnum">03</span>
                  <h2>The service</h2>
                  <p>
                    Vortex IQ provides AI agents that detect, explain, and fix issues across your commerce stack, working
                    with platforms such as Shopify Plus, BigCommerce, and Adobe Commerce. We may update, improve, or change
                    features over time, and we aim to give reasonable notice of material changes.
                  </p>
                </div>

                <div className="legal-sec" id="accounts">
                  <span className="legal-secnum">04</span>
                  <h2>Accounts &amp; eligibility</h2>
                  <p>
                    You must provide accurate registration details, keep your credentials secure, and be responsible for
                    activity under your account. The Service is intended for business use by organisations and the people
                    they authorise. You are responsible for your team&apos;s use of the platform.
                  </p>
                </div>

                <div className="legal-sec" id="acceptable-use">
                  <span className="legal-secnum">05</span>
                  <h2>Acceptable use</h2>
                  <p>When using the Service, you agree not to:</p>
                  <ul>
                    <li>Break the law, infringe others&apos; rights, or upload harmful or malicious content.</li>
                    <li>Reverse engineer, resell, or misuse the platform beyond your plan.</li>
                    <li>Interfere with security, attempt unauthorised access, or overload the Service.</li>
                  </ul>
                </div>

                <div className="legal-sec" id="billing">
                  <span className="legal-secnum">06</span>
                  <h2>Subscriptions, fees &amp; billing</h2>
                  <p>
                    Paid plans are billed in advance on the cycle set out in your Order. Unless stated otherwise, fees are
                    non-refundable and exclusive of taxes. Subscriptions renew automatically unless cancelled before the
                    renewal date. We may adjust pricing with reasonable notice. Current plans are on our{" "}
                    <Link href="/pricing">pricing page</Link>.
                  </p>
                </div>

                <div className="legal-sec" id="customer-data">
                  <span className="legal-secnum">07</span>
                  <h2>Customer data &amp; ownership</h2>
                  <p>
                    You own your Customer Data. You grant us the limited rights needed to operate the Service and run the AI
                    agents on your behalf. We process personal data within Customer Data as your processor under our Data
                    Processing Agreement and our <Link href="/privacy-policy">Privacy Policy</Link>.
                  </p>
                </div>

                <div className="legal-sec" id="ip">
                  <span className="legal-secnum">08</span>
                  <h2>Vortex IQ intellectual property</h2>
                  <p>
                    The Service, including our software, models, designs, and brand, is owned by Vortex IQ and its
                    licensors. These terms grant you a limited, non-exclusive, non-transferable right to use the Service —
                    they do not transfer ownership of any Vortex IQ intellectual property to you.
                  </p>
                </div>

                <div className="legal-sec" id="third-party">
                  <span className="legal-secnum">09</span>
                  <h2>Third-party services</h2>
                  <p>
                    The Service connects to third-party platforms and tools you choose to integrate, such as your commerce
                    platform and other apps. Your use of those services is governed by their own terms, and we are not
                    responsible for them. You are responsible for the integrations you enable.
                  </p>
                </div>

                <div className="legal-sec" id="warranties">
                  <span className="legal-secnum">10</span>
                  <h2>Warranties &amp; disclaimers</h2>
                  <p>
                    We work hard to keep the Service reliable, but it is provided &ldquo;as is&rdquo; to the extent
                    permitted by law. AI agents make recommendations and take actions based on available data; you remain
                    responsible for reviewing outcomes that materially affect your business. We do not warrant the Service
                    will be uninterrupted or error-free.
                  </p>
                </div>

                <div className="legal-sec" id="liability">
                  <span className="legal-secnum">11</span>
                  <h2>Limitation of liability</h2>
                  <p>
                    To the maximum extent permitted by law, neither party is liable for indirect or consequential losses,
                    and our total liability is capped at the fees you paid in the 12 months before the claim. Nothing in
                    these terms limits liability that cannot be excluded under law.
                  </p>
                </div>

                <div className="legal-sec" id="indemnification">
                  <span className="legal-secnum">12</span>
                  <h2>Indemnification</h2>
                  <p>
                    You agree to cover reasonable claims arising from your misuse of the Service, your Customer Data, or
                    your breach of these terms. We will likewise stand behind the Service against valid third-party claims
                    that it infringes their intellectual property, subject to the limits in these terms.
                  </p>
                </div>

                <div className="legal-sec" id="termination">
                  <span className="legal-secnum">13</span>
                  <h2>Term &amp; termination</h2>
                  <p>
                    These terms apply while you use the Service. Either party may end the agreement as set out in your Order
                    or for material breach. On termination, your right to use the Service stops and we will make Customer
                    Data available for export for a limited period before deletion in line with our retention practices.
                  </p>
                </div>

                <div className="legal-sec" id="governing-law">
                  <span className="legal-secnum">14</span>
                  <h2>Governing law</h2>
                  <p>
                    These terms are governed by the laws of England &amp; Wales, and the courts of England &amp; Wales have
                    exclusive jurisdiction over any dispute, unless mandatory local law provides otherwise.
                  </p>
                </div>

                <div className="legal-sec" id="changes">
                  <span className="legal-secnum">15</span>
                  <h2>Changes</h2>
                  <p>
                    We may update these terms as the product and the law evolve. When we make material changes we will
                    update the date above and, where appropriate, notify you. Continued use of the Service after changes
                    take effect means you accept the updated terms.
                  </p>
                </div>

                <div className="legal-sec" id="contact">
                  <span className="legal-secnum">16</span>
                  <h2>Contact</h2>
                  <p>
                    Questions about these terms? We are happy to help — the details are in the block below.
                  </p>
                </div>

                {/* QUESTIONS BLOCK */}
                <div className="legal-contact">
                  <h2>Questions?</h2>
                  <p>
                    For questions about these terms, email{" "}
                    <a href="mailto:hey@vortexiq.ai">hey@vortexiq.ai</a> or get in touch via our{" "}
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
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Ready when you are</div>
            <h2 className="reveal">Put the AI OS for commerce to work.</h2>
            <p className="lede reveal">
              See how Vortex IQ detects, explains, and fixes issues on your store — and talk to the team about a plan that
              fits how you operate.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Talk to us</Link>
              <Link className="btn btn--ghost" href="/pricing" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>See pricing →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
