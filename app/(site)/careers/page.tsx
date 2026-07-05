import type { Metadata } from "next";
import Link from "next/link";
import HubSpotForm from "@/components/HubSpotForm";

export const metadata: Metadata = {
  alternates: { canonical: "/careers" },
  title: "Careers at Vortex IQ | Build the AI Operating System for Commerce",
  description:
    "We are hiring across engineering, AI, product, and go-to-market. Help build the AI Operating System for e-commerce: empowerment, not replacement.",
};

const css = `
/* ============ Careers — page styles (built on the shared design system) ============ */
.careers-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.careers-page .section--soft{background:var(--surface-soft)}

/* hero */
.careers-hero{text-align:center;max-width:840px;margin:0 auto}
.careers-hero .eyebrow{justify-content:center}
.careers-hero h1{max-width:18ch;margin:0 auto 1.5rem}
.careers-hero .lede{margin:0 auto 2.1rem}
.careers-hero .cta-row{justify-content:center}
.hero-meta{display:flex;flex-wrap:wrap;justify-content:center;gap:.7rem;margin-top:2.4rem}
.hero-meta .chip svg{width:14px;height:14px;color:var(--brand-purple)}

/* mission band */
.mission{display:grid;grid-template-columns:1.1fr .9fr;gap:3.2rem;align-items:center}
.mission-quote{font-family:var(--font-heading);font-weight:600;font-size:clamp(1.5rem,2.6vw,2rem);line-height:1.32;letter-spacing:-.015em;color:var(--primary)}
.mission-quote .why{color:var(--brand-purple)}
.mission-card{background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius);padding:2rem}
.mission-card .mc-row{display:flex;align-items:flex-start;gap:.9rem;padding:.9rem 0;border-bottom:1px solid var(--border-brand)}
.mission-card .mc-row:last-child{border-bottom:none;padding-bottom:0}
.mission-card .mc-row:first-child{padding-top:0}
.mission-card .mc-ic{width:34px;height:34px;flex:none;border-radius:9px;background:var(--white);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center}
.mission-card .mc-ic svg{width:17px;height:17px}
.mission-card .mc-row b{display:block;font-family:var(--font-heading);font-weight:600;font-size:1rem;color:var(--primary)}
.mission-card .mc-row span{display:block;font-size:.9rem;color:var(--text-body);margin-top:.12rem;line-height:1.5}

/* value cards */
.value-ic{width:48px;height:48px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.3rem;box-shadow:var(--shadow-sm)}
.value-ic svg{width:24px;height:24px}

/* benefit cards */
.benefit{display:flex;gap:1rem;align-items:flex-start}
.benefit .bi{width:44px;height:44px;flex:none;border-radius:11px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center}
.benefit .bi svg{width:20px;height:20px}
.benefit b{display:block;font-family:var(--font-heading);font-weight:600;font-size:1.04rem;margin-bottom:.25rem;letter-spacing:-.01em}
.benefit span{font-size:.94rem;color:var(--text-body);line-height:1.55}

/* role cards */
.role-card{display:flex;flex-direction:column;height:100%}
.role-top{display:flex;align-items:center;gap:.9rem;margin-bottom:1.1rem}
.role-ic{width:46px;height:46px;flex:none;border-radius:12px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center}
.role-ic svg{width:23px;height:23px}
.role-card h3{margin-bottom:0}
.role-card .muted{flex:1}
.role-tags{display:flex;flex-wrap:wrap;gap:.4rem;margin:1.1rem 0 1.2rem}
.role-link{display:inline-flex;align-items:center;gap:.4rem;font-family:var(--font-mono);font-size:.8rem;color:var(--brand-purple);text-decoration:none;border-bottom:1px solid var(--border-brand);padding-bottom:2px;transition:border-color .2s;align-self:flex-start;margin-top:auto}
.card:hover .role-link{border-color:var(--brand-purple)}

/* hire steps */
.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--bento-gap)}
.step{position:relative;background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2rem 1.7rem;transition:transform .25s var(--ease),border-color .25s,box-shadow .3s}
.step:hover{transform:translateY(-3px);border-color:var(--border-strong);box-shadow:var(--shadow-lg)}
.step .num{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.16em;color:var(--brand-purple);text-transform:uppercase;display:flex;align-items:center;gap:.6rem;margin-bottom:1rem}
.step .num i{width:30px;height:30px;flex:none;border-radius:9px;background:var(--brand-gradient);color:#fff;display:flex;align-items:center;justify-content:center;font-style:normal;font-weight:600;font-size:.92rem;letter-spacing:0}
.step h3{margin-bottom:.5rem}
.step p{font-size:.94rem;color:var(--text-body);line-height:1.55}

/* final */
.careers-final{text-align:center}
.careers-final h2{max-width:20ch;margin:0 auto 1.3rem}
.careers-final .lede{margin:0 auto 2.4rem}
.careers-final .cta-row{justify-content:center}
.careers-form-card{max-width:720px;margin:0 auto;text-align:left;background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2.4rem;box-shadow:var(--shadow-sm)}
.careers-form-note{text-align:center;font-family:var(--font-mono);font-size:.74rem;color:var(--text-faded);line-height:1.55;margin-top:1.4rem}

@media(max-width:1024px){
  .mission{grid-template-columns:1fr;gap:2.4rem}
  .steps{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:640px){
  .steps{grid-template-columns:1fr}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="careers-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="careers-hero">
              <div className="eyebrow reveal in">Careers</div>
              <h1 className="reveal in">
                Help build the <span className="grad">AI Operating System</span> for commerce.
              </h1>
              <p className="lede reveal in">
                We&apos;re a small, fast team of e-commerce veterans and AI engineers giving every merchant an
                army of AI agents that detect, explain, and fix. If you want your work to ship to real stores
                and real revenue, we&apos;d love to meet you.
              </p>
              <div className="cta-row reveal in">
                <a className="btn" href="#roles">View open roles</a>
                <a className="btn btn--ghost" href="#life">Life at Vortex IQ →</a>
              </div>
              <div className="hero-meta reveal in">
                <span className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  Brentford, London · remote-friendly
                </span>
                <span className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
                  ISO 27001 certified
                </span>
                <span className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  Empowerment, not replacement
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION / WHY JOIN */}
        <section className="section section--soft" id="life">
          <div className="container">
            <div className="mission">
              <div className="reveal">
                <div className="eyebrow">Why join us</div>
                <p className="mission-quote">
                  The world is drowning in data but starved for action. We&apos;re building the AI OS for
                  e-commerce so every merchant has{" "}
                  <span className="why">an army of AI agents</span> working 24/7. And we mean it when we say{" "}
                  <span className="why">empowerment, not replacement</span>.
                </p>
                <p className="muted" style={{ marginTop: "1.4rem", maxWidth: "54ch" }}>
                  That belief shapes how we build and how we hire. We extend what every person can do rather
                  than replace them, and we want teammates who feel the same about the people who use our
                  product and the colleagues they work alongside.
                </p>
              </div>
              <div className="mission-card reveal">
                <div className="mc-row">
                  <span className="mc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg></span>
                  <div><b>Ship to live revenue</b><span>Your work reaches real stores running on Shopify Plus, BigCommerce, and Adobe Commerce.</span></div>
                </div>
                <div className="mc-row">
                  <span className="mc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" /><path d="M5 3v4M3 5h4M19 17v4M17 19h4" /></svg></span>
                  <div><b>Frontier of agentic AI</b><span>Build with the latest models and tooling on a product that detects, explains, and fixes autonomously.</span></div>
                </div>
                <div className="mc-row">
                  <span className="mc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="7.5" cy="15.5" r="5.5" /><path d="m21 2-9.6 9.6" /><path d="m15.5 7.5 3 3L22 7l-3-3" /></svg></span>
                  <div><b>Real ownership, early</b><span>Small team, high autonomy. Own your work from concept to launch and see your impact.</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE VALUE */}
        <section className="section">
          <div className="container">
            <div className="eyebrow reveal">What we value</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>The traits we hire for and build around.</h2>
            <div className="grid grid-4 reveal" style={{ marginTop: "2.8rem" }}>
              <div className="card">
                <div className="value-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m13 2-9 12h7l-2 8 9-12h-7l2-8Z" /></svg></div>
                <h3>Ship &amp; learn fast</h3>
                <p className="muted">We get it done. Ship small, measure honestly, and let what happens in real stores tell us what to do next.</p>
              </div>
              <div className="card">
                <div className="value-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg></div>
                <h3>Customer-obsessed</h3>
                <p className="muted">We start from the merchant&apos;s problem, in plain English, and work back to the elegant fix, never the other way around.</p>
              </div>
              <div className="card">
                <div className="value-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h6v6H9zM4 10h-2M4 14h-2M22 10h-2M22 14h-2M10 4v-2M14 4v-2M10 22v-2M14 22v-2" /></svg></div>
                <h3>AI-native</h3>
                <p className="muted">We build agents into the workflow, not bolt them on. The latest tooling is a default, and curiosity is non-negotiable.</p>
              </div>
              <div className="card">
                <div className="value-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg></div>
                <h3>Ownership</h3>
                <p className="muted">Big ideas, a get-it-done attitude, and the autonomy to carry your work from concept all the way to launch.</p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS & PERKS */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">Benefits &amp; perks</div>
            <h2 className="reveal" style={{ maxWidth: "18ch" }}>Set up to do the best work of your career.</h2>
            <div className="grid grid-3 reveal" style={{ marginTop: "2.8rem" }}>
              <div className="card benefit">
                <span className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 21h8M12 18v3" /></svg></span>
                <div><b>Remote-friendly</b><span>Work from where you do your best thinking, with a London base in Brentford whenever you want it.</span></div>
              </div>
              <div className="card benefit">
                <span className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" /><path d="M12 8v8M8 12h8" /></svg></span>
                <div><b>Meaningful equity</b><span>Everyone shares in the upside of what we build together. Real ownership, not a rounding error.</span></div>
              </div>
              <div className="card benefit">
                <span className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></svg></span>
                <div><b>Learning budget</b><span>An annual budget plus mentorship and career growth so you keep getting sharper at what you do.</span></div>
              </div>
              <div className="card benefit">
                <span className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h6v6H9zM4 10h-2M22 10h-2M10 4v-2M14 4v-2M10 22v-2M14 22v-2" /></svg></span>
                <div><b>Latest AI tooling</b><span>The best models, copilots, and infrastructure to build with, because that&apos;s the product we make.</span></div>
              </div>
              <div className="card benefit">
                <span className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></span>
                <div><b>Regular onsites</b><span>We come together in person to plan, build, and celebrate: the energy that keeps a remote team close.</span></div>
              </div>
              <div className="card benefit">
                <span className="bi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 6 4.5 4.5 0 0 0 2 8.5C2 10.7 3.5 12.5 5 14l7 7Z" /></svg></span>
                <div><b>Health &amp; wellbeing</b><span>Health cover and the flexibility to look after yourself, your family, and a life outside of work.</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* OPEN ROLES */}
        <section className="section" id="roles">
          <div className="container">
            <div className="eyebrow reveal">Open roles</div>
            <h2 className="reveal" style={{ maxWidth: "22ch" }}>We&apos;re hiring across the team.</h2>
            <p className="lede reveal" style={{ marginTop: "1.2rem", marginBottom: "2.8rem" }}>
              Pick the team that fits you best and introduce yourself, even if you don&apos;t see an exact title.
              We move quickly for the right people.
            </p>
            <div className="grid grid-3">
              <div className="card role-card reveal">
                <div className="role-top">
                  <span className="role-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" /></svg></span>
                  <h3>Engineering</h3>
                </div>
                <p className="muted">Build the platform that runs 24/7 across merchant stores: backend, data, and the integrations powering Detect, Explain, Fix.</p>
                <div className="role-tags">
                  <span className="chip chip--brand">Backend</span>
                  <span className="chip chip--brand">Platform</span>
                  <span className="chip chip--brand">TypeScript</span>
                </div>
                <a className="role-link" href="mailto:hey@vortexiq.ai?subject=Careers%20%E2%80%94%20Engineering">Apply for Engineering →</a>
              </div>

              <div className="card role-card reveal">
                <div className="role-top">
                  <span className="role-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h6v6H9zM4 10h-2M22 10h-2M10 4v-2M14 4v-2M10 22v-2M14 22v-2" /></svg></span>
                  <h3>AI / ML</h3>
                </div>
                <p className="muted">Design the agent reasoning layer: the models, retrieval, and evals that let Ask Viq answer and act with confidence.</p>
                <div className="role-tags">
                  <span className="chip chip--brand">Agents</span>
                  <span className="chip chip--brand">LLMs</span>
                  <span className="chip chip--brand">Evals</span>
                </div>
                <a className="role-link" href="mailto:hey@vortexiq.ai?subject=Careers%20%E2%80%94%20AI%2FML">Apply for AI/ML →</a>
              </div>

              <div className="card role-card reveal">
                <div className="role-top">
                  <span className="role-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg></span>
                  <h3>Product &amp; Design</h3>
                </div>
                <p className="muted">Shape how merchants experience the AI OS, turning complex agent workflows into something plain-English and effortless.</p>
                <div className="role-tags">
                  <span className="chip chip--brand">Product</span>
                  <span className="chip chip--brand">UX</span>
                  <span className="chip chip--brand">Research</span>
                </div>
                <a className="role-link" href="mailto:hey@vortexiq.ai?subject=Careers%20%E2%80%94%20Product%20%26%20Design">Apply for Product & Design →</a>
              </div>

              <div className="card role-card reveal">
                <div className="role-top">
                  <span className="role-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m7 14 3-3 3 3 5-6" /></svg></span>
                  <h3>Sales</h3>
                </div>
                <p className="muted">Show merchants and agencies the platform running on their own data, and help them see the impact before they ever sign.</p>
                <div className="role-tags">
                  <span className="chip chip--brand">AE</span>
                  <span className="chip chip--brand">SDR</span>
                  <span className="chip chip--brand">Solutions</span>
                </div>
                <a className="role-link" href="mailto:hey@vortexiq.ai?subject=Careers%20%E2%80%94%20Sales">Apply for Sales →</a>
              </div>

              <div className="card role-card reveal">
                <div className="role-top">
                  <span className="role-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 6 4.5 4.5 0 0 0 2 8.5C2 10.7 3.5 12.5 5 14l7 7Z" /></svg></span>
                  <h3>Customer Success</h3>
                </div>
                <p className="muted">Onboard customers and help them get measurable value fast: the trusted partner who makes the AI OS feel like part of their team.</p>
                <div className="role-tags">
                  <span className="chip chip--brand">Onboarding</span>
                  <span className="chip chip--brand">CSM</span>
                  <span className="chip chip--brand">Support</span>
                </div>
                <a className="role-link" href="mailto:hey@vortexiq.ai?subject=Careers%20%E2%80%94%20Customer%20Success">Apply for Customer Success →</a>
              </div>

              <div className="card role-card reveal">
                <div className="role-top">
                  <span className="role-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-5v12L3 14v-3Z" /><path d="M11.6 16.8a3 3 0 0 1-5.8-1.6" /></svg></span>
                  <h3>Marketing &amp; Growth</h3>
                </div>
                <p className="muted">Tell the story of agentic commerce AI: content, demand, and brand that earn attention in a crowded category.</p>
                <div className="role-tags">
                  <span className="chip chip--brand">Content</span>
                  <span className="chip chip--brand">Demand gen</span>
                  <span className="chip chip--brand">Brand</span>
                </div>
                <a className="role-link" href="mailto:hey@vortexiq.ai?subject=Careers%20%E2%80%94%20Marketing%20%26%20Growth">Apply for Marketing & Growth →</a>
              </div>
            </div>

            <div className="cta-row reveal" style={{ marginTop: "2.8rem" }}>
              <a className="btn btn--ghost btn--sm" href="https://www.vortexiq.ai/careers" target="_blank" rel="noopener noreferrer">See all open roles at Vortex IQ →</a>
              <span className="muted" style={{ fontSize: ".94rem" }}>
                Vortex IQ is an equal opportunity employer. We build a diverse team and an inclusive place to do great work.
              </span>
            </div>
          </div>
        </section>

        {/* HOW WE HIRE */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">How we hire</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>A short, respectful process.</h2>
            <p className="lede reveal" style={{ marginTop: "1.2rem", marginBottom: "2.8rem" }}>
              No endless rounds and no take-home busywork for its own sake. We aim to move from first hello to
              offer in a couple of weeks.
            </p>
            <div className="steps reveal">
              <div className="step">
                <div className="num"><i>1</i>Intro</div>
                <h3>Say hello</h3>
                <p>A friendly 30-minute call to learn about you, what you want next, and what we&apos;re building.</p>
              </div>
              <div className="step">
                <div className="num"><i>2</i>Deep dive</div>
                <h3>Talk craft</h3>
                <p>A focused conversation with the team on the work itself: real problems, not trick questions.</p>
              </div>
              <div className="step">
                <div className="num"><i>3</i>Practical</div>
                <h3>Work together</h3>
                <p>A short, paid or scoped exercise that mirrors the actual job, so you see us and we see you.</p>
              </div>
              <div className="step">
                <div className="num"><i>4</i>Offer</div>
                <h3>Meet the team</h3>
                <p>Meet a few more of us, get your questions answered, and, if it&apos;s a fit, an offer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA / APPLY */}
        <section className="section careers-final" id="apply">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Don&apos;t see your role?</div>
            <h2 className="reveal">Introduce yourself anyway.</h2>
            <p className="lede reveal">
              If you&apos;re excited about building the AI Operating System for commerce, we want to hear from you.
              Tell us what you&apos;d love to work on and where you can have the biggest impact.
            </p>
            <div className="careers-form-card reveal">
              <HubSpotForm portalId="24385350" formId="f419d113-fb6d-4841-9ca5-f3b4b7337ab2" region="na1" />
            </div>
            <p className="careers-form-note reveal">
              Prefer email? Reach us at <a className="textlink" href="mailto:hey@vortexiq.ai?subject=Careers%20%E2%80%94%20Introducing%20myself">hey@vortexiq.ai</a>. We usually reply within one business day.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
