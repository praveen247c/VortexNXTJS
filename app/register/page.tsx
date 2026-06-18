import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join the Vortex IQ Referral Program | Earn for Every Introduction",
  description:
    "Refer merchants, agencies, and partners to Vortex IQ and earn rewards when they come on board. Simple sign-up, transparent tracking, real payouts.",
};

const css = `
/* ============ Referral Program — page styles (built on the shared design system) ============ */
.referral-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.referral-page .section--soft{background:var(--surface-soft)}

/* hero */
.ref-hero{text-align:center;max-width:840px;margin:0 auto}
.ref-hero .eyebrow{justify-content:center}
.ref-hero h1{max-width:18ch;margin:0 auto 1.5rem}
.ref-hero .lede{margin:0 auto 2.1rem}
.ref-hero .cta-row{justify-content:center}
.ref-meta{display:flex;flex-wrap:wrap;justify-content:center;gap:.7rem;margin-top:2.4rem}
.ref-meta .chip svg{width:14px;height:14px;flex:none;color:var(--brand-purple)}

/* numbered steps */
.step-num{width:46px;height:46px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;font-family:var(--font-heading);font-weight:700;font-size:1.18rem;margin-bottom:1.3rem;box-shadow:var(--shadow-sm)}
.step-kicker{font-family:var(--font-mono);font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;color:var(--brand-purple);display:block;margin-bottom:.55rem}
.step-card p{font-size:.97rem}

/* reward cards */
.reward-ic{width:48px;height:48px;border-radius:12px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center;margin-bottom:1.2rem}
.reward-ic svg{width:23px;height:23px}
.reward-card.card--brand .reward-ic{background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.28);color:#fff}
.reward-card.card--brand h3{color:#fff}

/* who it's for */
.aud-ic{width:42px;height:42px;flex:none;border-radius:11px;background:var(--white);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center}
.aud-ic svg{width:20px;height:20px}
.aud-card{display:flex;gap:1.1rem;align-items:flex-start}
.aud-card .aud-tx b{display:block;font-family:var(--font-heading);font-weight:600;font-size:1.08rem;letter-spacing:-.01em;margin-bottom:.35rem;color:var(--primary)}
.aud-card .aud-tx span{display:block;font-size:.96rem;color:var(--text-body);line-height:1.55}

/* join panel */
.join-panel{background:var(--brand-gradient);border-radius:var(--radius);padding:3.2rem;color:#fff;position:relative;overflow:hidden;text-align:center}
.join-panel::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:34px 34px;mask-image:radial-gradient(circle at 50% 30%,#000,transparent 75%);pointer-events:none}
.join-panel>*{position:relative;z-index:1}
.join-panel .eyebrow{justify-content:center;color:#fff}
.join-panel .eyebrow::before{background:#fff;opacity:.6}
.join-panel h2{color:#fff;max-width:20ch;margin:0 auto 1.1rem}
.join-panel p{color:rgba(255,255,255,.82);max-width:58ch;margin:0 auto 2.2rem;font-size:1.08rem;line-height:1.55}
.join-panel .cta-row{justify-content:center}
.join-panel .btn--light{background:#fff;color:var(--brand-purple)}
.join-panel .btn--light:hover{background:#fff;box-shadow:0 14px 40px rgba(0,0,0,.22)}
.join-panel .btn--outline{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.5)}
.join-panel .btn--outline:hover{background:rgba(255,255,255,.12);border-color:#fff;box-shadow:none}
.join-note{margin-top:1.8rem;font-family:var(--font-mono);font-size:.72rem;letter-spacing:.03em;color:rgba(255,255,255,.7)}

/* faq */
.ref-faq{margin:2.8rem auto 0}

/* final */
.ref-final{text-align:center}
.ref-final h2{max-width:20ch;margin:0 auto 1.3rem}
.ref-final .lede{margin:0 auto 2.4rem}
.ref-final .cta-row{justify-content:center}

@media(max-width:560px){
  .join-panel{padding:2.2rem 1.6rem}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="referral-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="ref-hero">
              <div className="eyebrow reveal in">Referral Program</div>
              <h1 className="reveal in">
                Know a store that needs <span className="grad">the AI OS for commerce?</span> Get rewarded for the intro.
              </h1>
              <p className="lede reveal in">
                Refer merchants, agencies, and partners to Vortex IQ and earn when they come on board. Sign up in
                minutes, share your link, and watch every introduction tracked transparently through to a real payout.
              </p>
              <div className="cta-row reveal in">
                <a className="btn" href="#join">Become a referrer</a>
                <a className="btn btn--ghost" href="#how">How it works →</a>
              </div>
              <div className="ref-meta reveal in">
                <span className="chip chip--brand">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                  90-day referral tracking
                </span>
                <span className="chip chip--brand">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  Transparent dashboard
                </span>
                <span className="chip chip--brand">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></svg>
                  Real payouts
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section section--soft" id="how">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>How it works</div>
            <h2 className="reveal" style={{ maxWidth: "22ch", margin: "0 auto 1rem", textAlign: "center" }}>
              Three steps from introduction to payout.
            </h2>
            <p className="lede reveal" style={{ margin: "0 auto", textAlign: "center" }}>
              No paperwork marathon, no guesswork. You share, we track, and you get paid when your referral becomes a customer.
            </p>
            <div className="grid grid-3" style={{ marginTop: "3rem" }}>
              <div className="card step-card reveal">
                <div className="step-num">1</div>
                <span className="step-kicker">Sign up</span>
                <h3>Get your referral link</h3>
                <p className="muted">
                  Create your referrer account in a couple of minutes and grab a unique link. Drop it in an email,
                  a DM, a deck, or your site — every click is attributed to you for 90 days.
                </p>
              </div>
              <div className="card step-card reveal">
                <div className="step-num">2</div>
                <span className="step-kicker">Refer</span>
                <h3>Introduce a business</h3>
                <p className="muted">
                  Point merchants, agencies, or partners who run on Shopify Plus, BigCommerce, or Adobe Commerce to
                  Vortex IQ. Our team takes it from there with a demo on their own catalogue and data.
                </p>
              </div>
              <div className="card step-card reveal">
                <div className="step-num">3</div>
                <span className="step-kicker">Earn</span>
                <h3>Get paid when they onboard</h3>
                <p className="muted">
                  When your referral signs up and goes live, you earn. Track every introduction, its status, and your
                  rewards from one transparent dashboard — no chasing, no surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU EARN */}
        <section className="section">
          <div className="container">
            <div className="eyebrow reveal">What you earn</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>Rewards that respect the introduction you made.</h2>
            <div className="grid grid-3" style={{ marginTop: "2.8rem" }}>
              <div className="card reward-card card--brand reveal">
                <div className="reward-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <h3>Competitive commission</h3>
                <p className="muted">
                  Earn a competitive reward for every referred business that comes on board. The more successful
                  introductions you make, the more you earn — there&apos;s no cap on the relationships you can refer.
                </p>
              </div>
              <div className="card reward-card reveal">
                <div className="reward-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m7 14 3-3 3 3 5-6" /></svg>
                </div>
                <h3>Transparent tracking</h3>
                <p className="muted">
                  A clear dashboard shows every click, lead, and conversion tied to your link. You always know exactly
                  where each introduction stands and what you&apos;re owed.
                </p>
              </div>
              <div className="card reward-card reveal">
                <div className="reward-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                </div>
                <h3>90-day attribution</h3>
                <p className="muted">
                  Good decisions take time. Your referral stays attributed to you for 90 days from first click, so a slow
                  conversation still pays out when it lands.
                </p>
              </div>
              <div className="card reward-card reveal">
                <div className="reward-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" /></svg>
                </div>
                <h3>Real, reliable payouts</h3>
                <p className="muted">
                  When your referral becomes a customer, you get paid — straightforwardly and on a predictable cadence.
                  No points, no vouchers, no hoops.
                </p>
              </div>
              <div className="card reward-card reveal">
                <div className="reward-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <h3>A partner, not a tracking pixel</h3>
                <p className="muted">
                  Refer someone you care about and we&apos;ll treat them well. Our team handles the demo, onboarding,
                  and support so your reputation stays intact.
                </p>
              </div>
              <div className="card reward-card reveal">
                <div className="reward-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" /></svg>
                </div>
                <h3>Refer from anywhere</h3>
                <p className="muted">
                  We work with merchants worldwide. Wherever your network lives, your link works — and so do the rewards
                  when an introduction converts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">Who it&apos;s for</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>If commerce people trust you, this is for you.</h2>
            <div className="grid grid-2" style={{ marginTop: "2.8rem" }}>
              <div className="card aud-card reveal">
                <span className="aud-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14" /><path d="M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01" /></svg>
                </span>
                <div className="aud-tx">
                  <b>Agencies</b>
                  <span>
                    Bring the AI OS to clients you already run stores for. Refer the merchants in your book and earn while
                    they detect, explain, and fix issues across their catalogue.
                  </span>
                </div>
              </div>
              <div className="card aud-card reveal">
                <span className="aud-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                </span>
                <div className="aud-tx">
                  <b>Consultants &amp; freelancers</b>
                  <span>
                    Advising on growth, ops, or merchandising? Recommend Vortex IQ as the platform that turns insight into
                    action, and get rewarded for the call.
                  </span>
                </div>
              </div>
              <div className="card aud-card reveal">
                <span className="aud-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z" /><rect x="2" y="6" width="14" height="12" rx="2" /></svg>
                </span>
                <div className="aud-tx">
                  <b>Creators &amp; communities</b>
                  <span>
                    If your audience runs e-commerce stores, share a link they&apos;ll actually thank you for. Real value
                    for them, real rewards for you.
                  </span>
                </div>
              </div>
              <div className="card aud-card reveal">
                <span className="aud-ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.6a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" /></svg>
                </span>
                <div className="aud-tx">
                  <b>Existing customers</b>
                  <span>
                    Already running on the AI OS and love it? Tell a peer. When they come on board through your link, you
                    earn for spreading the word.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOIN */}
        <section className="section" id="join">
          <div className="container">
            <div className="join-panel reveal">
              <div className="eyebrow">Join the program</div>
              <h2>Sign up once, refer for as long as you like.</h2>
              <p>
                Create your account, get your unique referral link, and start introducing businesses to the AI Operating
                System for e-commerce. It&apos;s free to join — you only ever earn from it.
              </p>
              <div className="cta-row">
                <a className="btn btn--light" href="https://app.vortexiq.ai/login" target="_blank" rel="noopener noreferrer" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>
                  Sign up &amp; get your link
                </a>
                <a className="btn btn--outline" href="mailto:hey@vortexiq.ai?subject=Referral%20Program" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>
                  Talk to the team
                </a>
              </div>
              <p className="join-note">Free to join · No minimums · Questions? hey@vortexiq.ai</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Good to know</div>
            <h2 className="reveal" style={{ maxWidth: "18ch", margin: "0 auto", textAlign: "center" }}>
              Referral program FAQs
            </h2>
            <div className="faq ref-faq">
              <details className="faq-item reveal">
                <summary>Who can join the referral program?</summary>
                <p>
                  Anyone who knows e-commerce businesses that could benefit from Vortex IQ — agencies, consultants,
                  freelancers, creators, communities, and existing customers. If you can make a credible introduction,
                  you can sign up.
                </p>
              </details>
              <details className="faq-item reveal">
                <summary>How are my referrals tracked?</summary>
                <p>
                  When someone clicks your unique link, that referral is attributed to you for 90 days. You can see every
                  click, lead, and conversion tied to your account from a transparent dashboard, so there&apos;s no
                  guesswork about where a referral stands.
                </p>
              </details>
              <details className="faq-item reveal">
                <summary>When and how do I get paid?</summary>
                <p>
                  You earn when a business you referred signs up and goes live as a customer. Payouts are real and
                  predictable — not points or credits. For the specifics on commission and payment cadence, reach out to
                  the team and we&apos;ll walk you through the current terms.
                </p>
              </details>
              <details className="faq-item reveal">
                <summary>How much can I earn per referral?</summary>
                <p>
                  Referrers earn a competitive commission for each business that comes on board, with no cap on how many
                  introductions you make. Exact amounts depend on the current program terms — drop us a line at{" "}
                  <a href="mailto:hey@vortexiq.ai?subject=Referral%20Program" style={{ color: "var(--brand-purple)" }}>hey@vortexiq.ai</a>{" "}
                  for details.
                </p>
              </details>
              <details className="faq-item reveal">
                <summary>Is there a cost to join?</summary>
                <p>
                  No. Joining the referral program is free. You create an account, get your link, and earn when your
                  introductions convert — there are no fees or minimums to take part.
                </p>
              </details>
              <details className="faq-item reveal">
                <summary>What kinds of businesses should I refer?</summary>
                <p>
                  Online retailers and brands running on platforms like Shopify Plus, BigCommerce, and Adobe Commerce are
                  the best fit. Vortex IQ is the AI Operating System for e-commerce — it detects issues, explains them in
                  plain English, and fixes them safely, so any merchant who wants that will benefit.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section ref-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Still have questions?</div>
            <h2 className="reveal">Not sure where someone fits? Just ask.</h2>
            <p className="lede reveal">
              Whether you want to talk through the program, check a referral, or explore a deeper partnership, the team is
              happy to help. Tell us what you have in mind and we&apos;ll point you the right way.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Get in touch</Link>
              <Link className="btn btn--ghost" href="/ai-os-platform" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Explore the platform →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
