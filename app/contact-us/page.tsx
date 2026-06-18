import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Vortex IQ | Sales, Support & Partnership Enquiries",
  description:
    "Talk to the team building the AI Operating System for commerce. Book a demo, ask about pricing, explore a partnership, or get help with your store — we usually reply within one business day.",
};

const css = `
/* ============ Contact Us — page styles (built on the shared design system) ============ */
.contact-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.contact-page .section--soft{background:var(--surface-soft)}

/* hero */
.contact-hero{text-align:center;max-width:800px;margin:0 auto}
.contact-hero .eyebrow{justify-content:center}
.contact-hero h1{max-width:17ch;margin:0 auto 1.5rem}
.contact-hero .lede{margin:0 auto 2.1rem}
.quick-row{display:flex;flex-wrap:wrap;justify-content:center;gap:.7rem}
.quick-chip{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.78rem;color:var(--text-body);background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius-pill);padding:.5rem .95rem;text-decoration:none;transition:border-color .2s,color .2s,box-shadow .2s,transform .2s}
.quick-chip:hover{border-color:var(--border-brand);color:var(--brand-purple);box-shadow:var(--shadow-sm);transform:translateY(-1px)}
.quick-chip svg{width:15px;height:15px;flex:none;color:var(--brand-purple)}

/* contact grid: form + aside */
.contact-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:3rem;align-items:start}
.contact-form-card{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2.4rem;box-shadow:var(--shadow-md)}
.cf-row{display:grid;grid-template-columns:1fr 1fr;gap:1.1rem}
.field{margin-bottom:1.1rem;display:flex;flex-direction:column}
.field label{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.06em;text-transform:uppercase;color:var(--text-body);margin-bottom:.5rem}
.field label .req{color:var(--brand-purple)}
.field input,.field select,.field textarea{font-family:var(--font-body);font-size:1rem;color:var(--primary);background:var(--surface-soft);border:1px solid var(--border-dark);border-radius:9px;padding:.8rem .9rem;width:100%;transition:border-color .2s,background .2s,box-shadow .2s;outline:none}
.field input:focus,.field select:focus,.field textarea:focus{border-color:var(--brand-purple);background:var(--white);box-shadow:0 0 0 3px rgba(85,41,214,.12)}
.field textarea{resize:vertical;min-height:140px;line-height:1.5}
.field input::placeholder,.field textarea::placeholder{color:var(--text-faded)}
.cf-actions{display:flex;align-items:center;gap:1.2rem;flex-wrap:wrap;margin-top:.3rem}
.cf-note{font-size:.82rem;color:var(--text-faded);line-height:1.55;margin-top:1rem}
.cf-note a{color:var(--brand-purple);text-decoration:none;border-bottom:1px solid var(--border-brand)}
.cf-success{text-align:center;padding:2rem 1rem}
.cf-success .ic{width:54px;height:54px;border-radius:50%;background:var(--success-soft);border:1px solid rgba(31,158,84,.3);color:var(--success);display:flex;align-items:center;justify-content:center;margin:0 auto 1.2rem}
.cf-success .ic svg{width:24px;height:24px}
.cf-success h3{font-size:1.35rem;margin-bottom:0}
.promise{display:inline-flex;align-items:center;gap:.55rem;font-family:var(--font-mono);font-size:.74rem;color:var(--success)}

/* aside */
.aside-card{background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius);padding:2rem}
.aside-card h3{margin-bottom:1.3rem}
.channel{display:flex;align-items:flex-start;gap:1rem;padding:1.05rem 0;border-bottom:1px solid var(--border-brand);text-decoration:none}
.channel:last-of-type{border-bottom:none;padding-bottom:0}
.method-ic{width:42px;height:42px;flex:none;border-radius:11px;background:var(--white);border:1px solid var(--border-brand);display:flex;align-items:center;justify-content:center;color:var(--brand-purple);transition:background .2s,color .2s,transform .2s}
.channel:hover .method-ic{background:var(--brand-purple);color:#fff;transform:translateY(-1px)}
.method-ic svg{width:19px;height:19px}
.ch-tx b{display:block;font-family:var(--font-heading);font-weight:600;font-size:1rem;color:var(--primary);transition:color .2s}
.ch-tx span{display:block;font-size:.92rem;color:var(--text-body);margin-top:.15rem}
.channel:hover .ch-tx b{color:var(--brand-purple)}
.aside-social{display:flex;gap:.6rem;margin-top:1.6rem;padding-top:1.5rem;border-top:1px solid var(--border-brand)}
.aside-social a{width:38px;height:38px;border-radius:50%;border:1px solid var(--border-brand);background:var(--white);display:flex;align-items:center;justify-content:center;color:var(--brand-purple);transition:background .2s,color .2s,transform .2s}
.aside-social a:hover{background:var(--brand-purple);color:#fff;transform:translateY(-2px)}
.aside-social svg{width:16px;height:16px}

/* routing cards */
.route-ic{width:46px;height:46px;border-radius:12px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:1.2rem;box-shadow:var(--shadow-sm)}
.route-ic svg{width:23px;height:23px}
.route-link{display:inline-flex;align-items:center;gap:.4rem;font-family:var(--font-mono);font-size:.8rem;color:var(--brand-purple);text-decoration:none;margin-top:1.1rem;border-bottom:1px solid var(--border-brand);padding-bottom:2px;transition:border-color .2s}
.card:hover .route-link{border-color:var(--brand-purple)}

/* office */
.office-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:3rem;align-items:center}
.office-detail{display:flex;gap:1rem;margin-bottom:1.6rem}
.office-detail:last-child{margin-bottom:0}
.office-detail .di{width:42px;height:42px;flex:none;border-radius:11px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center}
.office-detail .di svg{width:19px;height:19px}
.office-detail b{display:block;font-family:var(--font-heading);font-weight:600;font-size:1.02rem;margin-bottom:.25rem}
.office-detail span{font-size:.95rem;color:var(--text-body);line-height:1.55}
.map-card{aspect-ratio:4/3;border-radius:var(--radius);border:1px solid var(--border-dark);background:linear-gradient(140deg,#f3f0fc 0%,#e9e2fb 100%);position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center}
.map-card::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(85,41,214,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(85,41,214,.08) 1px,transparent 1px);background-size:30px 30px;mask-image:radial-gradient(circle at 50% 45%,#000,transparent 78%)}
.map-pin{position:relative;z-index:1;text-align:center}
.map-pin .pin{width:46px;height:46px;border-radius:50% 50% 50% 0;background:var(--brand-purple);transform:rotate(-45deg);margin:0 auto;box-shadow:var(--shadow-brand);position:relative}
.map-pin .pin::after{content:"";position:absolute;inset:13px;background:#fff;border-radius:50%}
.map-pin .lbl{font-family:var(--font-mono);font-size:.74rem;color:var(--brand-purple);letter-spacing:.04em;margin-top:1.1rem;background:var(--white);border:1px solid var(--border-brand);border-radius:var(--radius-pill);padding:.35rem .8rem;display:inline-block}

/* final */
.contact-final{text-align:center}
.contact-final h2{max-width:20ch;margin:0 auto 1.3rem}
.contact-final .lede{margin:0 auto 2.4rem}
.contact-final .cta-row{justify-content:center}

@media(max-width:900px){
  .contact-grid{grid-template-columns:1fr;gap:2rem}
  .office-grid{grid-template-columns:1fr;gap:2.2rem}
}
@media(max-width:560px){
  .cf-row{grid-template-columns:1fr}
  .contact-form-card{padding:1.6rem}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="contact-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="contact-hero">
              <div className="eyebrow reveal in">Contact us</div>
              <h1 className="reveal in">
                Talk to the team behind the <span className="grad">AI OS for commerce.</span>
              </h1>
              <p className="lede reveal in">
                Book a demo, ask about pricing, explore a partnership, or get product help. Tell us what you
                need and the right person will reply — usually within one business day.
              </p>
              <div className="quick-row reveal in">
                <a className="quick-chip" href="mailto:hey@vortexiq.ai">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                  hey@vortexiq.ai
                </a>
                <a className="quick-chip" href="tel:+442045479292">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" /></svg>
                  +44 20 4547 9292
                </a>
                <a className="quick-chip" href="https://wa.me/447507897275?text=Hi%2C%20I%27d%20like%20to%20find%20out%20more%20about%20Vortex%20IQ" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.06 24l1.69-6.16a11.86 11.86 0 0 1-1.6-5.95C.16 5.32 5.5 0 12.05 0a11.82 11.82 0 0 1 8.41 3.49 11.74 11.74 0 0 1 3.48 8.4c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.68-1.45L.06 24zM6.6 20.2c1.68 1 3.28 1.6 5.44 1.6 5.45 0 9.89-4.43 9.89-9.88a9.82 9.82 0 0 0-2.9-7A9.82 9.82 0 0 0 12.05 2c-5.45 0-9.89 4.43-9.89 9.88 0 2.27.67 3.97 1.78 5.75l-1 3.66 3.66-.96zm11.36-5.45c-.07-.12-.27-.2-.56-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.28.18-1.41z" /></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FORM + CHANNELS */}
        <section className="section section--soft">
          <div className="container">
            <div className="contact-grid">
              <div className="reveal">
                <div className="eyebrow">Send a message</div>
                <h2 style={{ marginBottom: "1.4rem" }}>Tell us what you&apos;re working on.</h2>
                <ContactForm />
              </div>

              <aside className="reveal">
                <div className="aside-card">
                  <h3>Other ways to reach us</h3>

                  <a className="channel" href="mailto:hey@vortexiq.ai">
                    <span className="method-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></span>
                    <span className="ch-tx"><b>Email us</b><span>hey@vortexiq.ai</span></span>
                  </a>

                  <a className="channel" href="tel:+442045479292">
                    <span className="method-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" /></svg></span>
                    <span className="ch-tx"><b>Call us</b><span>+44 20 4547 9292</span></span>
                  </a>

                  <a className="channel" href="https://wa.me/447507897275?text=Hi%2C%20I%27d%20like%20to%20find%20out%20more%20about%20Vortex%20IQ" target="_blank" rel="noopener noreferrer">
                    <span className="method-ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M.06 24l1.69-6.16a11.86 11.86 0 0 1-1.6-5.95C.16 5.32 5.5 0 12.05 0a11.82 11.82 0 0 1 8.41 3.49 11.74 11.74 0 0 1 3.48 8.4c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.68-1.45L.06 24zM6.6 20.2c1.68 1 3.28 1.6 5.44 1.6 5.45 0 9.89-4.43 9.89-9.88a9.82 9.82 0 0 0-2.9-7A9.82 9.82 0 0 0 12.05 2c-5.45 0-9.89 4.43-9.89 9.88 0 2.27.67 3.97 1.78 5.75l-1 3.66 3.66-.96zm11.36-5.45c-.07-.12-.27-.2-.56-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.28.18-1.41z" /></svg></span>
                    <span className="ch-tx"><b>WhatsApp</b><span>+44 7507 897275</span></span>
                  </a>

                  <a className="channel" href="https://docs.vortexiq.ai/" target="_blank" rel="noopener noreferrer">
                    <span className="method-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg></span>
                    <span className="ch-tx"><b>Help Centre</b><span>Guides &amp; answers for customers</span></span>
                  </a>

                  <div className="aside-social">
                    <a href="https://www.linkedin.com/company/vortexiqai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0z" /></svg></a>
                    <a href="https://twitter.com/vortex_iq" target="_blank" rel="noopener noreferrer" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.48 3.24H4.29L17.61 20.65z" /></svg></a>
                    <a href="https://www.youtube.com/@VortexIQ-AI" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8zM9.6 15.6V8.4l6.25 3.6-6.25 3.6z" /></svg></a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ROUTING */}
        <section className="section">
          <div className="container">
            <div className="eyebrow reveal">Where should it go?</div>
            <h2 className="reveal" style={{ maxWidth: "20ch" }}>Pick the team that fits your enquiry.</h2>
            <div className="grid grid-3" style={{ marginTop: "2.8rem" }}>
              <div className="card reveal">
                <div className="route-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m7 14 3-3 3 3 5-6" /></svg></div>
                <h3>Sales &amp; demos</h3>
                <p className="muted">See the platform running on your own catalogue and data, and get pricing for your team.</p>
                <a className="route-link" href="#message">Book a demo →</a>
              </div>
              <div className="card reveal">
                <div className="route-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.4" /><path d="m5.6 5.6 3 3M15.4 15.4l3 3M18.4 5.6l-3 3M8.6 15.4l-3 3" /></svg></div>
                <h3>Product support</h3>
                <p className="muted">Already a customer? Search the Help Centre or open a ticket and our team will jump in.</p>
                <a className="route-link" href="https://docs.vortexiq.ai/" target="_blank" rel="noopener noreferrer">Visit Help Centre →</a>
              </div>
              <div className="card reveal">
                <div className="route-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
                <h3>Partnerships</h3>
                <p className="muted">For agencies, technology platforms and resellers building on the Vortex IQ AI OS.</p>
                <Link className="route-link" href="/solutions/for-agencies">Explore partner programs →</Link>
              </div>
              <div className="card reveal">
                <div className="route-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9h4" /><path d="M14 6h-4M14 10h-4M14 14h-2" /></svg></div>
                <h3>Press &amp; media</h3>
                <p className="muted">Logos, brand assets and founder bios for journalists, analysts and event organisers.</p>
                <a className="route-link" href="https://www.vortexiq.ai/branding">Get brand assets →</a>
              </div>
              <div className="card reveal">
                <div className="route-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg></div>
                <h3>Careers</h3>
                <p className="muted">Join the team building the AI Operating System for commerce. We&apos;re hiring across the board.</p>
                <a className="route-link" href="https://www.vortexiq.ai/careers">View open roles →</a>
              </div>
              <div className="card reveal">
                <div className="route-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z" /><path d="M6 12v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5" /></svg></div>
                <h3>Student program</h3>
                <p className="muted">Kickstart your AI career with hands-on experience inside a fast-moving commerce-AI team.</p>
                <a className="route-link" href="https://www.vortexiq.ai/partners/student-program">Join the program →</a>
              </div>
            </div>
          </div>
        </section>

        {/* OFFICE */}
        <section className="section section--soft">
          <div className="container">
            <div className="office-grid">
              <div className="reveal">
                <div className="eyebrow">Where to find us</div>
                <h2 style={{ maxWidth: "16ch", marginBottom: "2rem" }}>Built in the UK, working with merchants worldwide.</h2>
                <div className="office-detail">
                  <span className="di"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg></span>
                  <div><b>Visit</b><span>Brentford, London, United Kingdom</span></div>
                </div>
                <div className="office-detail">
                  <span className="di"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span>
                  <div><b>Hours</b><span>Monday–Friday, 9:00–18:00 GMT</span></div>
                </div>
                <div className="office-detail">
                  <span className="di"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l7-4 7 4v14" /><path d="M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01" /></svg></span>
                  <div><b>Company</b><span>Vortex IQ Ltd · Registered in England &amp; Wales No. 14925424 · VAT GB 459 547 641 · D-U-N-S 230712948</span></div>
                </div>
              </div>
              <div className="reveal">
                <div className="map-card">
                  <div className="map-pin">
                    <div className="pin" />
                    <div className="lbl">Brentford · London</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section contact-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Ready when you are</div>
            <h2 className="reveal">See Vortex IQ run on your store.</h2>
            <p className="lede reveal">
              Bring a problem you can&apos;t get to the bottom of. We&apos;ll show you how the AI OS detects it,
              explains it in plain English, and fixes it safely on live revenue.
            </p>
            <div className="cta-row reveal">
              <a className="btn" href="#message" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Book a demo</a>
              <Link className="btn btn--ghost" href="/ai-os-platform" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Explore the platform →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
