import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student Program | AI Career Launchpad | Vortex IQ",
  description:
    "Launch your AI career with the Vortex IQ Student Program — real projects inside a fast-moving commerce-AI team, mentorship, and a path into the industry.",
};

const css = `
/* ============ Student Program — page styles (built on the shared design system) ============ */
.student-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.student-page .section--soft{background:var(--surface-soft)}

/* hero */
.sp-hero{text-align:center;max-width:840px;margin:0 auto}
.sp-hero .eyebrow{justify-content:center}
.sp-hero h1{max-width:16ch;margin:0 auto 1.5rem}
.sp-hero .lede{margin:0 auto 2.1rem}
.sp-hero .cta-row{justify-content:center}
.sp-hero-meta{display:flex;flex-wrap:wrap;justify-content:center;gap:.7rem;margin-top:2.4rem}
.sp-tagchip{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.74rem;color:var(--text-body);background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius-pill);padding:.45rem .9rem}
.sp-tagchip svg{width:14px;height:14px;flex:none;color:var(--brand-purple)}

/* section heads */
.sp-head{max-width:760px}
.sp-head h2{max-width:18ch}
.sp-head .lede{margin-top:1.3rem}

/* feature icon (what you'll do / perks) */
.sp-ic{width:48px;height:48px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.3rem;box-shadow:var(--shadow-sm)}
.sp-ic svg{width:24px;height:24px}
.sp-card-note{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.05em;color:var(--brand-purple);margin-top:1.1rem;display:inline-flex;align-items:center;gap:.4rem}

/* who can apply — list with ticks */
.sp-who-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:3rem;align-items:start}
.sp-checklist{list-style:none;display:flex;flex-direction:column;gap:1.1rem;margin:0}
.sp-checklist li{display:flex;align-items:flex-start;gap:.9rem}
.sp-checklist .ck{width:30px;height:30px;flex:none;border-radius:9px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center;margin-top:.1rem}
.sp-checklist .ck svg{width:16px;height:16px}
.sp-checklist b{display:block;font-family:var(--font-heading);font-weight:600;font-size:1.05rem;color:var(--primary)}
.sp-checklist span{display:block;font-size:.96rem;color:var(--text-body);margin-top:.2rem;line-height:1.55}
.sp-myth{background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius);padding:2rem}
.sp-myth .lbl{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-purple);display:block;margin-bottom:1rem}
.sp-myth h3{margin-bottom:.7rem}
.sp-myth p{color:var(--text-body);font-size:.98rem;line-height:1.6}
.sp-myth p+p{margin-top:.9rem}

/* how to apply — numbered steps */
.sp-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--bento-gap);margin-top:2.8rem}
.sp-step{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2rem 1.8rem;position:relative;transition:transform .25s var(--ease),border-color .25s,box-shadow .3s}
.sp-step:hover{transform:translateY(-3px);border-color:var(--border-strong);box-shadow:var(--shadow-lg)}
.sp-step .num{font-family:var(--font-mono);font-size:.78rem;letter-spacing:.04em;color:#fff;background:var(--brand-purple);width:34px;height:34px;border-radius:9px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:1.2rem}
.sp-step h3{font-size:1.08rem;margin-bottom:.5rem}
.sp-step p{color:var(--text-body);font-size:.94rem;line-height:1.55}
.sp-apply-cta{display:flex;flex-wrap:wrap;align-items:center;gap:1.2rem;margin-top:2.8rem}
.sp-apply-note{font-family:var(--font-mono);font-size:.74rem;color:var(--text-faded);line-height:1.55}

/* final */
.sp-final{text-align:center}
.sp-final h2{max-width:20ch;margin:0 auto 1.3rem}
.sp-final .lede{margin:0 auto 2.4rem}
.sp-final .cta-row{justify-content:center}

@media(max-width:900px){
  .sp-who-grid{grid-template-columns:1fr;gap:2.2rem}
  .sp-steps{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:560px){
  .sp-steps{grid-template-columns:1fr}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="student-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="sp-hero">
              <div className="eyebrow reveal in">Student Program</div>
              <h1 className="reveal in">
                Your <span className="grad">AI career launchpad</span> starts here.
              </h1>
              <p className="lede reveal in">
                Spend it building. The Vortex IQ Student Program drops you into real projects inside a
                fast-moving commerce-AI team — shipping agents on the AI Operating System, learning from
                people who do this every day, and walking away with work you can actually show.
              </p>
              <div className="cta-row reveal in">
                <a className="btn" href="#apply">Apply now</a>
                <Link className="btn btn--ghost" href="/about-us">Meet the team →</Link>
              </div>
              <div className="sp-hero-meta reveal in">
                <span className="sp-tagchip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" /></svg>
                  Real projects, not toy tasks
                </span>
                <span className="sp-tagchip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  1:1 mentorship
                </span>
                <span className="sp-tagchip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5" /></svg>
                  No PhD required
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU'LL DO */}
        <section className="section section--soft">
          <div className="container">
            <div className="sp-head reveal">
              <div className="eyebrow">What you&apos;ll do</div>
              <h2>Build, ship, and learn agentic AI on a real platform.</h2>
              <p className="lede">
                You won&apos;t be fetching coffee or staring at a sandbox. You&apos;ll work on the same AI
                Operating System our merchants and agencies rely on — with mentors guiding the way.
              </p>
            </div>
            <div className="grid grid-4" style={{ marginTop: "2.8rem" }}>
              <div className="card reveal">
                <div className="sp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="m2 17 10 5 10-5M2 12l10 5 10-5" /></svg></div>
                <h3>Real projects on the AI OS</h3>
                <p className="muted">Tackle live commerce problems — monitoring, reporting, optimisation and workflow automation — on the platform itself, with real data and real outcomes.</p>
                <span className="sp-card-note">Detect · Explain · Fix</span>
              </div>
              <div className="card reveal">
                <div className="sp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                <h3>Work with mentors</h3>
                <p className="muted">Pair with engineers and AI builders who do this every day. Get feedback on prompt design, tool schemas, testing and the way you think about problems.</p>
                <span className="sp-card-note">1:1 guidance</span>
              </div>
              <div className="card reveal">
                <div className="sp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /><circle cx="3" cy="12" r="0.6" fill="currentColor" /></svg></div>
                <h3>Ship to production</h3>
                <p className="muted">Take work from idea to deployed. You&apos;ll learn safe execution and roll-out patterns so the agents you build can run against live revenue with confidence.</p>
                <span className="sp-card-note">Real deployments</span>
              </div>
              <div className="card reveal">
                <div className="sp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3.2" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></svg></div>
                <h3>Learn agentic AI</h3>
                <p className="muted">Go deep on the things that matter: connector design, evaluation, multi-agent collaboration and how to make autonomous systems behave reliably.</p>
                <span className="sp-card-note">From basics to multi-agent</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHO CAN APPLY */}
        <section className="section">
          <div className="container">
            <div className="sp-who-grid">
              <div className="reveal">
                <div className="eyebrow">Who can apply</div>
                <h2 style={{ maxWidth: "16ch", marginBottom: "1.4rem" }}>If you&apos;re curious and you build, we want to hear from you.</h2>
                <ul className="sp-checklist">
                  <li>
                    <span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                    <div><b>Students &amp; recent grads</b><span>Studying AI, computer science, commerce, design or something adjacent — or just finished and looking for your first real shot.</span></div>
                  </li>
                  <li>
                    <span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                    <div><b>Builders</b><span>You ship things. Side projects, hackathons, small scripts, half-finished experiments — we care more about what you&apos;ve made than your grades.</span></div>
                  </li>
                  <li>
                    <span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                    <div><b>Curious minds</b><span>You ask why, you read the docs, you want to understand how AI agents actually work under the hood — not just use them.</span></div>
                  </li>
                </ul>
              </div>
              <div className="reveal">
                <div className="sp-myth">
                  <span className="lbl">No PhD required</span>
                  <h3>You don&apos;t need a perfect CV.</h3>
                  <p>
                    Some of the best agentic AI work comes from people who simply tried, broke things, and
                    figured it out. We&apos;re not looking for a research dissertation or a stack of
                    certifications.
                  </p>
                  <p>
                    Bring curiosity, a habit of building, and a willingness to learn in the open. We&apos;ll
                    bring the platform, the data, the mentors, and the real problems to solve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PERKS */}
        <section className="section section--soft">
          <div className="container">
            <div className="sp-head reveal">
              <div className="eyebrow">Perks</div>
              <h2>What you take away from the program.</h2>
              <p className="lede">
                Hands-on time on the AI OS is the headline — but it&apos;s the experience, the network and the
                path forward that compound long after the program ends.
              </p>
            </div>
            <div className="grid grid-3" style={{ marginTop: "2.8rem" }}>
              <div className="card reveal">
                <div className="sp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                <h3>Mentorship</h3>
                <p className="muted">Direct, regular guidance from engineers and AI builders who&apos;ve shipped commerce-AI at scale. Real feedback on real work.</p>
              </div>
              <div className="card reveal">
                <div className="sp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 13h8M8 17h6" /></svg></div>
                <h3>Real experience</h3>
                <p className="muted">A portfolio of deployed agents, connector work and measurable outcomes — the kind of work that stands out in any interview.</p>
              </div>
              <div className="card reveal">
                <div className="sp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="6" /><path d="m9 14.5-1.5 7 4.5-2.5 4.5 2.5-1.5-7" /></svg></div>
                <h3>Certificate</h3>
                <p className="muted">Finish strong and earn recognition as an AI Commerce Specialist — proof you can design, build and ship agentic AI.</p>
              </div>
              <div className="card reveal">
                <div className="sp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" /></svg></div>
                <h3>Network</h3>
                <p className="muted">Connect with our team, partner agencies and technology partners. Top contributors get warm introductions to teams hiring for talent.</p>
              </div>
              <div className="card reveal">
                <div className="sp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m7 14 3-3 3 3 5-6" /></svg></div>
                <h3>Full-time path</h3>
                <p className="muted">Do standout work and the door opens. The program is a genuine route into a full-time role on the team building the AI OS for commerce.</p>
              </div>
              <div className="card card--tint reveal">
                <div className="sp-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z" /><path d="m2 17 10 5 10-5M2 12l10 5 10-5" /></svg></div>
                <h3>Built on the real thing</h3>
                <p className="muted">Everything happens on a platform that works with Shopify Plus, BigCommerce and Adobe Commerce — and is certified ISO 27001. Real stack, real standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO APPLY */}
        <section className="section" id="apply">
          <div className="container">
            <div className="sp-head reveal">
              <div className="eyebrow">How to apply</div>
              <h2>Four steps to get started.</h2>
              <p className="lede">
                No long forms or aptitude tests. Tell us who you are and what you&apos;ve built, and we&apos;ll
                take it from there.
              </p>
            </div>
            <div className="sp-steps">
              <div className="sp-step reveal">
                <span className="num">01</span>
                <h3>Send your details</h3>
                <p>Email us a short intro, a link to anything you&apos;ve built, and why agentic AI for commerce excites you.</p>
              </div>
              <div className="sp-step reveal">
                <span className="num">02</span>
                <h3>Quick chat</h3>
                <p>We&apos;ll set up a relaxed call to get to know you, understand your interests and answer your questions.</p>
              </div>
              <div className="sp-step reveal">
                <span className="num">03</span>
                <h3>A small build</h3>
                <p>Take on a focused, hands-on task on the AI OS so we can see how you think and work together.</p>
              </div>
              <div className="sp-step reveal">
                <span className="num">04</span>
                <h3>Start shipping</h3>
                <p>Get matched with a mentor and a real project, and start building agents that go to production.</p>
              </div>
            </div>
            <div className="sp-apply-cta reveal">
              <a className="btn" href="mailto:hey@vortexiq.ai?subject=Student%20Program%20Application">
                Apply by email
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a className="btn btn--ghost" href="https://www.vortexiq.ai/partners/student-program" target="_blank" rel="noopener noreferrer">
                See the full program →
              </a>
              <span className="sp-apply-note">
                Email <a className="textlink" href="mailto:hey@vortexiq.ai?subject=Student%20Program%20Application">hey@vortexiq.ai</a> — we usually reply within one business day.
              </span>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section section--soft sp-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Ready to launch?</div>
            <h2 className="reveal">Start your AI career where the work is real.</h2>
            <p className="lede reveal">
              Join a team building the AI Operating System for commerce — detect, explain, fix — and learn by
              shipping alongside people who do it every day. Not sure if it&apos;s for you? Just talk to us.
            </p>
            <div className="cta-row reveal">
              <a className="btn" href="#apply" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Apply now</a>
              <Link className="btn btn--ghost" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Talk to us →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
