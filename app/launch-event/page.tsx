import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webinars & Events | Vortex IQ",
  description:
    "Live webinars, product launches, and on-demand sessions on agentic AI for commerce. See the AI Operating System in action and ask the team anything.",
};

const css = `
/* ============ Webinars & Events — page styles (built on the shared design system) ============ */
.events-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.events-page .section--soft{background:var(--surface-soft)}

/* hero */
.events-hero{text-align:center;max-width:840px;margin:0 auto}
.events-hero .eyebrow{justify-content:center}
.events-hero h1{max-width:18ch;margin:0 auto 1.5rem}
.events-hero .lede{margin:0 auto 2.1rem}
.events-hero .cta-row{justify-content:center}
.format-row{display:flex;flex-wrap:wrap;justify-content:center;gap:.7rem;margin-top:2.6rem}
.format-chip{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.74rem;letter-spacing:.04em;color:var(--text-body);background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius-pill);padding:.45rem .9rem}
.format-chip svg{width:14px;height:14px;flex:none;color:var(--brand-purple)}

/* featured session */
.feature-card{display:grid;grid-template-columns:1.05fr .95fr;gap:0;background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow-md)}
.feature-body{padding:3rem}
.feature-flag{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-purple);background:var(--surface-tint);border:1px solid var(--border-brand);padding:.32rem .7rem;border-radius:999px;margin-bottom:1.4rem}
.feature-body h2{font-size:clamp(1.7rem,2.6vw,2.3rem);max-width:18ch;margin-bottom:1rem}
.feature-body .lede{font-size:1.08rem;margin-bottom:1.6rem}
.feature-agenda{list-style:none;margin:0 0 1.9rem;padding:0;display:flex;flex-direction:column;gap:.85rem}
.feature-agenda li{display:flex;align-items:flex-start;gap:.75rem;font-size:.97rem;color:var(--text-body)}
.feature-agenda .ck{width:22px;height:22px;flex:none;border-radius:7px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center;margin-top:1px}
.feature-agenda .ck svg{width:13px;height:13px}
.feature-meta{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1.6rem}
.feature-side{position:relative;background:linear-gradient(150deg,#1b1330 0%,#0c061f 60%,#2a1a52 100%);display:flex;flex-direction:column;justify-content:center;padding:3rem;color:#fff;overflow:hidden}
.feature-side::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(165,138,243,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(165,138,243,.10) 1px,transparent 1px);background-size:32px 32px;mask-image:radial-gradient(circle at 70% 30%,#000,transparent 78%)}
.feature-side::after{content:"";position:absolute;top:-20%;right:-10%;width:60%;height:80%;background:radial-gradient(circle,rgba(165,138,243,.4),transparent 65%);pointer-events:none}
.feature-side-in{position:relative;z-index:1}
.feature-live{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.72rem;letter-spacing:.04em;color:#fff;border:1px solid rgba(255,255,255,.2);border-radius:var(--radius-pill);padding:.4rem .85rem;margin-bottom:1.6rem}
.feature-side h3{color:#fff;font-size:1.3rem;max-width:16ch;margin-bottom:.7rem}
.feature-side p{color:rgba(255,255,255,.62);font-size:.95rem;line-height:1.55;margin-bottom:1.8rem;max-width:34ch}
.feature-side .btn{width:fit-content}
.feature-note{font-family:var(--font-mono);font-size:.72rem;color:rgba(255,255,255,.45);margin-top:1.4rem;line-height:1.6}

/* takeaways */
.take-ic{width:46px;height:46px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.2rem;box-shadow:var(--shadow-sm)}
.take-ic svg{width:23px;height:23px}

/* on-demand library */
.vod-card{display:flex;flex-direction:column;text-decoration:none;color:inherit}
.vod-thumb{position:relative;height:150px;border-radius:9px;overflow:hidden;margin-bottom:1.3rem;display:flex;align-items:center;justify-content:center;background:linear-gradient(140deg,#f3f0fc 0%,#e9e2fb 100%);border:1px solid var(--border-dark)}
.vod-thumb::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(85,41,214,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(85,41,214,.07) 1px,transparent 1px);background-size:24px 24px;mask-image:radial-gradient(circle at 50% 45%,#000,transparent 74%)}
.vod-play{position:relative;z-index:1;width:54px;height:54px;border-radius:50%;background:var(--white);border:1px solid var(--border-brand);display:flex;align-items:center;justify-content:center;color:var(--brand-purple);box-shadow:var(--shadow-md);transition:transform .25s var(--ease),background .25s,color .25s}
.vod-play svg{width:20px;height:20px;margin-left:2px}
.vod-card:hover .vod-play{transform:scale(1.08);background:var(--brand-purple);color:#fff}
.vod-tag{position:absolute;top:10px;left:10px;z-index:1;font-family:var(--font-mono);font-size:.6rem;letter-spacing:.08em;text-transform:uppercase;color:var(--brand-purple);background:var(--white);border:1px solid var(--border-brand);padding:.22rem .55rem;border-radius:999px}
.vod-card h3{margin-bottom:.5rem}
.vod-link{display:inline-flex;align-items:center;gap:.4rem;font-family:var(--font-mono);font-size:.78rem;color:var(--brand-purple);margin-top:1.1rem;border-bottom:1px solid var(--border-brand);padding-bottom:2px;align-self:flex-start;transition:border-color .2s}
.vod-card:hover .vod-link{border-color:var(--brand-purple)}

/* stay in the loop */
.loop-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:3rem;align-items:center}
.loop-card{background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius);padding:2.2rem}
.loop-channel{display:flex;align-items:flex-start;gap:1rem;padding:1.05rem 0;border-bottom:1px solid var(--border-brand);text-decoration:none}
.loop-channel:last-of-type{border-bottom:none;padding-bottom:0}
.loop-ic{width:42px;height:42px;flex:none;border-radius:11px;background:var(--white);border:1px solid var(--border-brand);display:flex;align-items:center;justify-content:center;color:var(--brand-purple);transition:background .2s,color .2s,transform .2s}
.loop-channel:hover .loop-ic{background:var(--brand-purple);color:#fff;transform:translateY(-1px)}
.loop-ic svg{width:19px;height:19px}
.loop-tx b{display:block;font-family:var(--font-heading);font-weight:600;font-size:1rem;color:var(--primary);transition:color .2s}
.loop-tx span{display:block;font-size:.92rem;color:var(--text-body);margin-top:.15rem}
.loop-channel:hover .loop-tx b{color:var(--brand-purple)}

/* final */
.events-final{text-align:center}
.events-final h2{max-width:20ch;margin:0 auto 1.3rem}
.events-final .lede{margin:0 auto 2.4rem}
.events-final .cta-row{justify-content:center}

@media(max-width:900px){
  .feature-card{grid-template-columns:1fr}
  .feature-body{padding:2.2rem}
  .feature-side{padding:2.2rem}
  .loop-grid{grid-template-columns:1fr;gap:2.2rem}
}
@media(max-width:560px){
  .feature-body{padding:1.8rem}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="events-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="events-hero">
              <div className="eyebrow reveal in">Webinars &amp; Events</div>
              <h1 className="reveal in">
                See the <span className="grad">AI OS for commerce</span> in action — live and on demand.
              </h1>
              <p className="lede reveal in">
                Join the team behind Vortex IQ for live webinars, product launches, and hands-on sessions on
                agentic AI for commerce. Watch agents detect issues, explain them in plain English, and fix
                them safely on live revenue — then ask us anything.
              </p>
              <div className="cta-row reveal in">
                <Link className="btn" href="/contact-us">Register your interest</Link>
                <a className="btn btn--ghost" href="https://www.youtube.com/@VortexIQ-AI" target="_blank" rel="noopener noreferrer">
                  Watch on demand →
                </a>
              </div>
              <div className="format-row reveal in">
                <span className="format-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                  Live webinars
                </span>
                <span className="format-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z" /><rect x="2" y="6" width="14" height="12" rx="2" /></svg>
                  Product launches
                </span>
                <span className="format-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M10 8l6 4-6 4V8Z" /></svg>
                  On-demand library
                </span>
                <span className="format-chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-6 0v4" /><path d="M5 9h14l1 12H4L5 9Z" /></svg>
                  Hands-on workshops
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED / UPCOMING */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">Featured session</div>
            <h2 className="reveal" style={{ maxWidth: "20ch", marginBottom: "2.4rem" }}>
              Our flagship live demo &amp; Q&amp;A.
            </h2>
            <div className="feature-card reveal">
              <div className="feature-body">
                <span className="feature-flag">
                  <span className="dot" />Flagship webinar
                </span>
                <h2>The AI OS for Commerce: Live Demo &amp; Q&amp;A</h2>
                <p className="lede">
                  A guided 45-minute walkthrough of the Vortex IQ AI Operating System, running on a real
                  storefront — followed by an open Q&amp;A with the people who build it.
                </p>
                <ul className="feature-agenda">
                  <li>
                    <span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                    A first look at the Nerve Centre and the agents that monitor your store 24/7
                  </li>
                  <li>
                    <span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                    Detect → Explain → Fix in action, with safe staging and one-click rollback
                  </li>
                  <li>
                    <span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                    How Ask Viq answers questions about your catalogue, orders and content
                  </li>
                  <li>
                    <span className="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></span>
                    Live Q&amp;A — bring a problem you can&apos;t get to the bottom of
                  </li>
                </ul>
                <div className="cta-row">
                  <Link className="btn" href="/contact-us">Register your interest</Link>
                  <Link className="btn btn--ghost" href="/ai-os-platform">Explore the platform →</Link>
                </div>
                <div className="feature-meta">
                  <span className="chip chip--brand">45 minutes</span>
                  <span className="chip">Live + recorded</span>
                  <span className="chip">Shopify Plus · BigCommerce · Adobe Commerce</span>
                </div>
              </div>
              <div className="feature-side">
                <div className="feature-side-in">
                  <span className="feature-live">
                    <span className="dot" />New dates announced regularly
                  </span>
                  <h3>Save your spot — pick the next date that works for you.</h3>
                  <p>
                    We run this session on a rolling schedule for merchants, agencies and partners. Register
                    your interest and we&apos;ll send you the invite for the next available slot.
                  </p>
                  <Link className="btn" href="/contact-us">Register your interest</Link>
                  <p className="feature-note">
                    Prefer to watch now? The full library is available on our YouTube channel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT YOU'LL LEARN */}
        <section className="section">
          <div className="container">
            <div className="eyebrow reveal">What you&apos;ll learn</div>
            <h2 className="reveal" style={{ maxWidth: "22ch" }}>
              Walk away knowing how agentic AI actually works on a store.
            </h2>
            <div className="grid grid-3" style={{ marginTop: "2.8rem" }}>
              <div className="card reveal">
                <div className="take-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg></div>
                <h3>How agents detect issues</h3>
                <p className="muted">Watch the Nerve Centre surface revenue leaks, broken journeys and silent errors before they cost you sales.</p>
              </div>
              <div className="card reveal">
                <div className="take-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" /><path d="M8 9h8M8 13h5" /></svg></div>
                <h3>Plain-English explanations</h3>
                <p className="muted">See how Ask Viq turns dashboards and data into a clear answer to &quot;what changed, and why?&quot; — no SQL required.</p>
              </div>
              <div className="card reveal">
                <div className="take-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6a2 2 0 1 0 2.8 2.8l6-6a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-2.1Z" /></svg></div>
                <h3>Safe, reversible fixes</h3>
                <p className="muted">Understand how Actions ship changes through staging and rollback, so you can let agents act on live revenue with confidence.</p>
              </div>
              <div className="card reveal">
                <div className="take-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg></div>
                <h3>Building your own agents</h3>
                <p className="muted">Get a feel for designing and deploying custom workflows in Summit — and putting an army of agents to work for your team.</p>
              </div>
              <div className="card reveal">
                <div className="take-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 0-4 12.7V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.3A7 7 0 0 0 12 2Z" /><path d="M9 21h6" /></svg></div>
                <h3>Where it fits your stack</h3>
                <p className="muted">Learn how the AI OS works alongside Shopify Plus, BigCommerce and Adobe Commerce — and what onboarding looks like.</p>
              </div>
              <div className="card reveal">
                <div className="take-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                <h3>Real questions, real answers</h3>
                <p className="muted">Bring your own scenarios to the Q&amp;A. The people who build the platform answer them live — no scripted demos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ON-DEMAND LIBRARY */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">On-demand library</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>
              Catch up on past sessions whenever it suits you.
            </h2>
            <p className="lede reveal" style={{ marginTop: "1.2rem" }}>
              Every session lives on our YouTube channel. Press play and watch the AI OS work — at your pace.
            </p>
            <div className="grid grid-2" style={{ marginTop: "2.8rem" }}>
              <a className="card vod-card reveal" href="https://www.youtube.com/@VortexIQ-AI" target="_blank" rel="noopener noreferrer">
                <div className="vod-thumb">
                  <span className="vod-tag">Demo</span>
                  <span className="vod-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
                </div>
                <h3>Detect, Explain, Fix in action</h3>
                <p className="muted">A full run through the loop on a live storefront: from a flagged anomaly to a safe, reversible fix shipped in minutes.</p>
                <span className="vod-link">Watch on YouTube →</span>
              </a>
              <a className="card vod-card reveal" href="https://www.youtube.com/@VortexIQ-AI" target="_blank" rel="noopener noreferrer">
                <div className="vod-thumb">
                  <span className="vod-tag">Deep dive</span>
                  <span className="vod-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
                </div>
                <h3>Safe agentic actions: staging &amp; rollback</h3>
                <p className="muted">How Vortex IQ lets agents change live stores without the risk — every action previewed, approved and reversible.</p>
                <span className="vod-link">Watch on YouTube →</span>
              </a>
              <a className="card vod-card reveal" href="https://www.youtube.com/@VortexIQ-AI" target="_blank" rel="noopener noreferrer">
                <div className="vod-thumb">
                  <span className="vod-tag">For agencies</span>
                  <span className="vod-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
                </div>
                <h3>How agencies scale with AI agents</h3>
                <p className="muted">A practical look at running more client stores per strategist by putting digital workers on the repetitive, day-to-day operations.</p>
                <span className="vod-link">Watch on YouTube →</span>
              </a>
              <a className="card vod-card reveal" href="https://www.youtube.com/@VortexIQ-AI" target="_blank" rel="noopener noreferrer">
                <div className="vod-thumb">
                  <span className="vod-tag">Workshop</span>
                  <span className="vod-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
                </div>
                <h3>Building your own agents in Summit</h3>
                <p className="muted">A hands-on workshop: design, test and deploy a custom commerce workflow with the agent builder, step by step.</p>
                <span className="vod-link">Watch on YouTube →</span>
              </a>
            </div>
            <div className="cta-row reveal" style={{ marginTop: "2.6rem" }}>
              <a className="btn btn--ghost" href="https://www.youtube.com/@VortexIQ-AI" target="_blank" rel="noopener noreferrer">
                Browse the full channel →
              </a>
            </div>
          </div>
        </section>

        {/* STAY IN THE LOOP */}
        <section className="section">
          <div className="container">
            <div className="loop-grid">
              <div className="reveal">
                <div className="eyebrow">Stay in the loop</div>
                <h2 style={{ maxWidth: "16ch", marginBottom: "1.4rem" }}>
                  Never miss the next launch or live demo.
                </h2>
                <p className="lede">
                  We announce new webinars, product launches and on-demand drops regularly. Follow along on
                  LinkedIn, subscribe on YouTube, or tell us to add you to the invite list — your choice.
                </p>
                <div className="cta-row" style={{ marginTop: "2rem" }}>
                  <a className="btn" href="https://www.linkedin.com/company/vortexiqai/" target="_blank" rel="noopener noreferrer">
                    Follow on LinkedIn →
                  </a>
                  <a className="btn btn--ghost" href="mailto:hey@vortexiq.ai?subject=Add%20me%20to%20the%20Vortex%20IQ%20events%20list&body=Hi%20Vortex%20IQ%20team%2C%0A%0APlease%20add%20me%20to%20your%20webinar%20%26%20events%20invite%20list.%0A%0AName%3A%0ACompany%3A%0APlatform%20(Shopify%20Plus%20%2F%20BigCommerce%20%2F%20Adobe%20Commerce)%3A%0A%0AThanks%21">
                    Get notified by email
                  </a>
                </div>
              </div>
              <aside className="reveal">
                <div className="loop-card">
                  <h3 style={{ marginBottom: "1.3rem" }}>Where we post sessions</h3>
                  <a className="loop-channel" href="https://www.youtube.com/@VortexIQ-AI" target="_blank" rel="noopener noreferrer">
                    <span className="loop-ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8zM9.6 15.6V8.4l6.25 3.6-6.25 3.6z" /></svg></span>
                    <span className="loop-tx"><b>YouTube</b><span>Every webinar, launch and demo, on demand</span></span>
                  </a>
                  <a className="loop-channel" href="https://www.linkedin.com/company/vortexiqai/" target="_blank" rel="noopener noreferrer">
                    <span className="loop-ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0z" /></svg></span>
                    <span className="loop-tx"><b>LinkedIn</b><span>Event announcements and live-session reminders</span></span>
                  </a>
                  <a className="loop-channel" href="mailto:hey@vortexiq.ai?subject=Add%20me%20to%20the%20Vortex%20IQ%20events%20list">
                    <span className="loop-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></span>
                    <span className="loop-tx"><b>Invite list</b><span>hey@vortexiq.ai — we&apos;ll email you the next date</span></span>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section section--soft events-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Ready when you are</div>
            <h2 className="reveal">Want a session run on your own store?</h2>
            <p className="lede reveal">
              Beyond the public webinars, we&apos;ll run a private walkthrough on your catalogue and data.
              Bring a problem you can&apos;t crack, and we&apos;ll show you how the AI OS detects, explains
              and fixes it — live.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>
                Register your interest
              </Link>
              <a className="btn btn--ghost" href="https://www.youtube.com/@VortexIQ-AI" target="_blank" rel="noopener noreferrer" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>
                Watch on demand →
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
