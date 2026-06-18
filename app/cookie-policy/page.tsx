import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Vortex IQ",
  description:
    "How Vortex IQ uses cookies and similar technologies across our site, the categories we use, and how you can manage your preferences. A plain-English summary for review.",
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
                Cookie <span className="grad">Policy.</span>
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
                  <li><a href="#what-cookies-are">What cookies are</a></li>
                  <li><a href="#how-we-use">How we use cookies</a></li>
                  <li><a href="#categories">Cookie categories</a></li>
                  <li><a href="#preferences">Managing your preferences</a></li>
                  <li><a href="#third-party">Third-party cookies</a></li>
                  <li><a href="#changes">Changes</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ol>
              </nav>

              {/* CONTENT */}
              <div className="legal-content reveal">
                <div className="legal-sec" id="what-cookies-are">
                  <span className="legal-secnum">01</span>
                  <h2>What cookies are</h2>
                  <p>
                    Cookies are small text files a website stores on your device. They let a site remember things between
                    pages and visits — like keeping you signed in or remembering your preferences. We also use similar
                    technologies such as local storage and pixels, and group them all under &ldquo;cookies&rdquo; here.
                  </p>
                </div>

                <div className="legal-sec" id="how-we-use">
                  <span className="legal-secnum">02</span>
                  <h2>How we use cookies</h2>
                  <p>
                    We use cookies to keep our website secure and working, to understand how it is used so we can improve
                    it, to remember your choices, and to measure our marketing. We only set non-essential cookies after you
                    give consent through our cookie banner.
                  </p>
                </div>

                <div className="legal-sec" id="categories">
                  <span className="legal-secnum">03</span>
                  <h2>Cookie categories</h2>
                  <p>We group the cookies we use into four categories:</p>
                  <div className="cookie-grid">
                    <div className="cookie-cat">
                      <span className="cc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg></span>
                      <h3>Strictly necessary</h3>
                      <p>Keep the site secure and functioning — for example, signing in and load balancing. The site cannot work properly without them.</p>
                      <span className="cc-tag cc-tag--req">Always on</span>
                    </div>
                    <div className="cookie-cat">
                      <span className="cc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m7 14 3-3 3 3 5-6" /></svg></span>
                      <h3>Performance &amp; analytics</h3>
                      <p>Help us understand how visitors use the site — which pages are popular and where things break — so we can improve it.</p>
                      <span className="cc-tag cc-tag--opt">Optional</span>
                    </div>
                    <div className="cookie-cat">
                      <span className="cc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.4" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" /></svg></span>
                      <h3>Functional</h3>
                      <p>Remember choices you make — such as language or region — to give you a more personalised experience.</p>
                      <span className="cc-tag cc-tag--opt">Optional</span>
                    </div>
                    <div className="cookie-cat">
                      <span className="cc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-7-7 18-2.5-7.5L3 11Z" /></svg></span>
                      <h3>Marketing</h3>
                      <p>Help us measure campaigns and show relevant content. These may be set by us or our advertising partners.</p>
                      <span className="cc-tag cc-tag--opt">Optional</span>
                    </div>
                  </div>
                </div>

                <div className="legal-sec" id="preferences">
                  <span className="legal-secnum">04</span>
                  <h2>Managing your preferences</h2>
                  <p>
                    You are in control. Use our cookie banner to accept or reject non-essential categories, and update your
                    choice at any time from the preferences link in the footer. You can also block or delete cookies in your
                    browser settings — though some parts of the site may not work as well if you do.
                  </p>
                </div>

                <div className="legal-sec" id="third-party">
                  <span className="legal-secnum">05</span>
                  <h2>Third-party cookies</h2>
                  <p>
                    Some cookies are set by trusted third parties we work with — such as analytics, video, and advertising
                    providers — to deliver and measure parts of our site. Their use of data is governed by their own privacy
                    and cookie policies. We list these providers in our consent tool.
                  </p>
                </div>

                <div className="legal-sec" id="changes">
                  <span className="legal-secnum">06</span>
                  <h2>Changes</h2>
                  <p>
                    We may update this Cookie Policy as the tools we use and the law evolve. When we make material changes
                    we will update the date above. For how we handle personal data more broadly, see our{" "}
                    <Link href="/privacy-policy">Privacy Policy</Link>.
                  </p>
                </div>

                <div className="legal-sec" id="contact">
                  <span className="legal-secnum">07</span>
                  <h2>Contact</h2>
                  <p>
                    Questions about how we use cookies? We are happy to help — the details are in the block below.
                  </p>
                </div>

                {/* QUESTIONS BLOCK */}
                <div className="legal-contact">
                  <h2>Questions?</h2>
                  <p>
                    For privacy and cookie matters, email{" "}
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
            <h2 className="reveal">Transparent by default.</h2>
            <p className="lede reveal">
              We keep tracking light and your choices clear. See how the AI Operating System for commerce detects,
              explains, and fixes issues on your store — the way you would expect.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Talk to us</Link>
              <Link className="btn btn--ghost" href="/privacy-policy" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Read the Privacy Policy →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
