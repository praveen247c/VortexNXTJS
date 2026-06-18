import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand & Media Assets | Vortex IQ",
  description:
    "Logos, colours, and typography for partners, press, and event organisers — everything you need to represent the Vortex IQ brand correctly.",
};

const CDN = "https://cdn.prod.website-files.com/68bff49fa25caa581ab0524a";
const LOGO_COLOR = `${CDN}/68c29054c6d22238eac9bb4c_vlogo.svg`;
const LOGO_WHITE = `${CDN}/68c2a7984b7702411158df14_vlogo-white.svg`;

const css = `
/* ============ Branding — page styles (built on the shared design system) ============ */
.brand-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.brand-page .section--soft{background:var(--surface-soft)}

/* hero */
.brand-hero{text-align:center;max-width:820px;margin:0 auto}
.brand-hero .eyebrow{justify-content:center}
.brand-hero h1{max-width:16ch;margin:0 auto 1.5rem}
.brand-hero .lede{margin:0 auto 2.1rem}
.brand-hero .cta-row{justify-content:center}

/* section heading helper */
.brand-head{max-width:640px;margin-bottom:2.8rem}
.brand-head h2{max-width:18ch}
.brand-head p{margin-top:1rem}

/* logo showcase */
.logo-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--bento-gap)}
.logo-card{border-radius:var(--radius);border:1px solid var(--border-dark);overflow:hidden;display:flex;flex-direction:column;transition:transform .25s var(--ease),box-shadow .3s,border-color .25s}
.logo-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg)}
.logo-stage{height:230px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.logo-stage img{height:54px;width:auto;display:block;position:relative;z-index:1}
.logo-stage--light{background:var(--white)}
.logo-stage--light::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(85,41,214,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(85,41,214,.06) 1px,transparent 1px);background-size:24px 24px;mask-image:radial-gradient(circle at 50% 50%,#000,transparent 78%)}
.logo-stage--deep{background:var(--brand-purple-deep)}
.logo-stage--deep::before{content:"";position:absolute;top:-30%;right:-10%;width:60%;height:120%;background:radial-gradient(circle,rgba(85,41,214,.55),transparent 65%);pointer-events:none}
.logo-foot{background:var(--white);border-top:1px solid var(--border-dark);padding:1.2rem 1.4rem;display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap}
.logo-foot .lf-name{font-family:var(--font-heading);font-weight:600;font-size:1rem;color:var(--primary)}
.logo-foot .lf-sub{font-family:var(--font-mono);font-size:.72rem;color:var(--text-faded);margin-top:.2rem}
.dl-link{display:inline-flex;align-items:center;gap:.45rem;font-family:var(--font-mono);font-size:.78rem;color:var(--brand-purple);text-decoration:none;border:1px solid var(--border-brand);border-radius:var(--radius-pill);padding:.5rem .9rem;transition:background .2s,color .2s,border-color .2s,transform .2s}
.dl-link:hover{background:var(--brand-purple);color:#fff;border-color:var(--brand-purple);transform:translateY(-1px)}
.dl-link svg{width:15px;height:15px;flex:none}

/* clearspace / usage note */
.brand-note{margin-top:2.4rem;display:flex;align-items:flex-start;gap:.8rem;font-size:.95rem;color:var(--text-body);background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius);padding:1.1rem 1.3rem;max-width:760px}
.brand-note svg{width:19px;height:19px;flex:none;color:var(--brand-purple);margin-top:.15rem}
.brand-note a{color:var(--brand-purple);text-decoration:none;border-bottom:1px solid var(--border-brand)}

/* do / don't */
.rule-head{display:flex;align-items:center;gap:.7rem;margin-bottom:1.4rem}
.rule-ic{width:38px;height:38px;flex:none;border-radius:10px;display:flex;align-items:center;justify-content:center}
.rule-ic svg{width:20px;height:20px}
.rule-ic--do{background:var(--success-soft);border:1px solid rgba(31,158,84,.3);color:var(--success)}
.rule-ic--no{background:var(--danger-soft);border:1px solid rgba(210,63,49,.3);color:var(--danger)}
.rule-head b{font-family:var(--font-heading);font-weight:600;font-size:1.12rem}
.rule-list{list-style:none;display:flex;flex-direction:column;gap:.95rem}
.rule-list li{display:flex;align-items:flex-start;gap:.7rem;font-size:.98rem;color:var(--text-body);line-height:1.5}
.rule-list li svg{width:17px;height:17px;flex:none;margin-top:.18rem}
.rule-list--do li svg{color:var(--success)}
.rule-list--no li svg{color:var(--danger)}

/* colour palette */
.swatch-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--bento-gap)}
.swatch{border-radius:var(--radius);border:1px solid var(--border-dark);overflow:hidden;background:var(--white);transition:transform .25s var(--ease),box-shadow .3s}
.swatch:hover{transform:translateY(-3px);box-shadow:var(--shadow-md)}
.swatch-fill{height:130px;display:block;position:relative}
.swatch-fill .copy{position:absolute;top:10px;right:10px;font-family:var(--font-mono);font-size:.6rem;letter-spacing:.06em;text-transform:uppercase;color:#fff;background:rgba(0,0,0,.28);border:1px solid rgba(255,255,255,.25);border-radius:999px;padding:.2rem .5rem;backdrop-filter:blur(4px)}
.swatch--light .copy{color:var(--primary);background:rgba(255,255,255,.7);border-color:var(--border-dark)}
.swatch-meta{padding:1rem 1.1rem}
.swatch-meta .nm{font-family:var(--font-heading);font-weight:600;font-size:.98rem;color:var(--primary)}
.swatch-meta .hex{font-family:var(--font-mono);font-size:.8rem;color:var(--text-body);margin-top:.2rem;letter-spacing:.02em}
.swatch-meta .role{font-family:var(--font-mono);font-size:.68rem;color:var(--text-faded);margin-top:.45rem;letter-spacing:.04em;text-transform:uppercase}

/* typography specimens */
.type-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--bento-gap)}
.type-card{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2.2rem;display:flex;flex-direction:column}
.type-card .type-tag{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-purple);margin-bottom:1.2rem;display:inline-block}
.type-card .specimen-aa{font-family:'Geist',Arial,sans-serif;font-weight:500;font-size:clamp(3.6rem,8vw,5.4rem);line-height:.95;letter-spacing:-.03em;color:var(--primary);margin-bottom:1rem}
.type-card.mono .specimen-aa{font-family:'Geist Mono',ui-monospace,monospace;font-weight:500;letter-spacing:-.02em}
.type-card .specimen-name{font-family:var(--font-heading);font-weight:600;font-size:1.12rem;color:var(--primary)}
.type-card.mono .specimen-name{font-family:'Geist Mono',ui-monospace,monospace}
.type-card .specimen-role{font-size:.95rem;color:var(--text-body);margin-top:.35rem;margin-bottom:1.4rem}
.type-card .glyphs{font-family:'Geist',Arial,sans-serif;font-size:1.32rem;letter-spacing:.04em;color:var(--text-body);border-top:1px solid var(--border-dark);padding-top:1.3rem;line-height:1.6;margin-top:auto}
.type-card.mono .glyphs{font-family:'Geist Mono',ui-monospace,monospace;font-size:1.08rem}
.type-card .glyphs span{color:var(--primary)}
.type-card .weights{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.4rem}
.type-card .weights .w{font-family:var(--font-mono);font-size:.7rem;color:var(--text-body);background:var(--surface-soft);border:1px solid var(--border-dark);border-radius:var(--radius-pill);padding:.3rem .7rem}

/* final */
.brand-final{text-align:center}
.brand-final h2{max-width:20ch;margin:0 auto 1.3rem}
.brand-final .lede{margin:0 auto 2.4rem}
.brand-final .cta-row{justify-content:center}

@media(max-width:900px){
  .logo-grid{grid-template-columns:1fr}
  .swatch-grid{grid-template-columns:repeat(2,1fr)}
  .type-grid{grid-template-columns:1fr}
}
@media(max-width:520px){
  .swatch-grid{grid-template-columns:1fr 1fr}
  .logo-foot{flex-direction:column;align-items:flex-start}
}
`;

const SWATCHES = [
  { name: "Purple", hex: "#5529d6", role: "Primary brand", light: false },
  { name: "Purple Mid", hex: "#392bd5", role: "Hover · gradient", light: false },
  { name: "Purple Light", hex: "#a58af3", role: "Accent · gradient", light: false },
  { name: "Purple Deep", hex: "#0c061f", role: "Dark backgrounds", light: false },
  { name: "Blue", hex: "#004794", role: "Secondary accent", light: false },
  { name: "Primary", hex: "#222325", role: "Text · ink", light: false },
  { name: "Surface", hex: "#f6f5f3", role: "Soft background", light: true },
  { name: "White", hex: "#ffffff", role: "Base canvas", light: true },
];

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="brand-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="brand-hero">
              <div className="eyebrow reveal in">Brand assets</div>
              <h1 className="reveal in">
                Represent the <span className="grad">Vortex IQ</span> brand correctly.
              </h1>
              <p className="lede reveal in">
                Logos, colours, and typography for partners, press, and event organisers. Everything you
                need to put the AI Operating System for e-commerce in front of an audience — on brand, every
                time.
              </p>
              <div className="cta-row reveal in">
                <a className="btn" href={LOGO_COLOR} download target="_blank" rel="noopener noreferrer">
                  Download logo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
                    <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
                  </svg>
                </a>
                <a className="btn btn--ghost" href="mailto:hey@vortexiq.ai?subject=Brand%20assets">
                  Press contact →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* LOGO */}
        <section className="section section--soft">
          <div className="container">
            <div className="brand-head reveal">
              <div className="eyebrow">The logo</div>
              <h2>One mark, two finishes.</h2>
              <p className="muted">
                Use the full-colour mark on light surfaces and the white mark on dark or brand-deep
                backgrounds. Always keep clear space around it and never recolour or distort it.
              </p>
            </div>

            <div className="logo-grid">
              <div className="logo-card reveal">
                <div className="logo-stage logo-stage--light">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={LOGO_COLOR} alt="Vortex IQ full-colour logo" />
                </div>
                <div className="logo-foot">
                  <div>
                    <div className="lf-name">Full-colour logo</div>
                    <div className="lf-sub">For light &amp; white backgrounds</div>
                  </div>
                  <a className="dl-link" href={LOGO_COLOR} download target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 21h14" /></svg>
                    SVG
                  </a>
                </div>
              </div>

              <div className="logo-card reveal">
                <div className="logo-stage logo-stage--deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={LOGO_WHITE} alt="Vortex IQ white logo" />
                </div>
                <div className="logo-foot">
                  <div>
                    <div className="lf-name">White logo</div>
                    <div className="lf-sub">For dark &amp; brand-deep backgrounds</div>
                  </div>
                  <a className="dl-link" href={LOGO_WHITE} download target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v11m0 0 4-4m-4 4-4-4M5 21h14" /></svg>
                    SVG
                  </a>
                </div>
              </div>
            </div>

            <div className="brand-note reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
              <span>
                Need a different format, a transparent PNG, or the icon on its own? Email{" "}
                <a href="mailto:hey@vortexiq.ai?subject=Brand%20assets">hey@vortexiq.ai</a> and we&apos;ll
                send the full asset pack.
              </span>
            </div>
          </div>
        </section>

        {/* DO'S & DON'TS */}
        <section className="section">
          <div className="container">
            <div className="brand-head reveal">
              <div className="eyebrow">Logo usage</div>
              <h2>The do&apos;s and don&apos;ts.</h2>
              <p className="muted">
                A few simple rules keep the mark legible and consistent everywhere it appears.
              </p>
            </div>

            <div className="grid grid-2">
              <div className="card card--tint reveal">
                <div className="rule-head">
                  <span className="rule-ic rule-ic--do">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <b>Do</b>
                </div>
                <ul className="rule-list rule-list--do">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Use the full-colour logo on white and light surfaces.</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Switch to the white logo on dark or brand-deep backgrounds.</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Keep clear space around the mark equal to the height of the &quot;V&quot;.</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Scale proportionally and use the provided SVG wherever possible.</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>Place it on sufficient contrast so it stays clearly legible.</li>
                </ul>
              </div>

              <div className="card card--tint reveal">
                <div className="rule-head">
                  <span className="rule-ic rule-ic--no">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="m5.6 5.6 12.8 12.8" /></svg>
                  </span>
                  <b>Don&apos;t</b>
                </div>
                <ul className="rule-list rule-list--no">
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>Recolour, add gradients, or apply effects to the mark.</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>Stretch, squash, rotate, or distort the proportions.</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>Place the logo on a busy image or low-contrast background.</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>Add a drop shadow, outline, or box around the mark.</li>
                  <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>Recreate, re-typeset, or alter the wordmark in any way.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* COLOUR PALETTE */}
        <section className="section section--soft">
          <div className="container">
            <div className="brand-head reveal">
              <div className="eyebrow">Colour</div>
              <h2>The palette.</h2>
              <p className="muted">
                Purple leads, deep ink grounds, and neutrals carry the rest. These tokens are used
                verbatim across the product and the website.
              </p>
            </div>

            <div className="swatch-grid">
              {SWATCHES.map((s) => (
                <div key={s.name} className={`swatch reveal${s.light ? " swatch--light" : ""}`}>
                  <span
                    className="swatch-fill"
                    style={{
                      background: s.hex,
                      borderBottom: s.light ? "1px solid var(--border-dark)" : "none",
                    }}
                  >
                    <span className="copy">{s.hex}</span>
                  </span>
                  <div className="swatch-meta">
                    <div className="nm">{s.name}</div>
                    <div className="hex">{s.hex.toUpperCase()}</div>
                    <div className="role">{s.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="section">
          <div className="container">
            <div className="brand-head reveal">
              <div className="eyebrow">Typography</div>
              <h2>Geist, end to end.</h2>
              <p className="muted">
                Geist sets every headline and paragraph. Geist Mono handles eyebrows, labels, and code —
                the small, precise type that gives the brand its technical edge.
              </p>
            </div>

            <div className="type-grid">
              <div className="type-card reveal">
                <span className="type-tag">Headings &amp; body</span>
                <div className="specimen-aa">Aa</div>
                <div className="specimen-name">Geist</div>
                <div className="specimen-role">Display, headings, and running text.</div>
                <div className="weights">
                  <span className="w">Regular 400</span>
                  <span className="w">Medium 500</span>
                  <span className="w">Semibold 600</span>
                  <span className="w">Bold 700</span>
                </div>
                <div className="glyphs">
                  <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                  <br />
                  abcdefghijklmnopqrstuvwxyz 0123456789
                </div>
              </div>

              <div className="type-card mono reveal">
                <span className="type-tag">Labels &amp; code</span>
                <div className="specimen-aa">Aa</div>
                <div className="specimen-name">Geist Mono</div>
                <div className="specimen-role">Eyebrows, labels, metadata, and code.</div>
                <div className="weights">
                  <span className="w">Regular 400</span>
                  <span className="w">Medium 500</span>
                </div>
                <div className="glyphs">
                  <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                  <br />
                  abcdefghijklmnopqrstuvwxyz 0123456789
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section brand-final section--soft">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Press &amp; partnerships</div>
            <h2 className="reveal">Writing about us, or building with us?</h2>
            <p className="lede reveal">
              For interviews, founder bios, partnership announcements, or a tailored asset pack, get in
              touch and the right person on our team will help.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>
                Contact the team
              </Link>
              <a className="btn btn--ghost" href="mailto:hey@vortexiq.ai?subject=Brand%20assets" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>
                Email press →
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
