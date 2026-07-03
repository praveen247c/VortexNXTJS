import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/product-tour" },
  title: "Product Tour: See the Loop Run | Vortex IQ",
  description:
    "Watch the detect, explain, fix, approve and rollback loop run on a real store, without a sales call. Everything shown is the real Vortex IQ interface with anonymised data.",
};

// Drop screenshots in /public/assets/product-tour/ and set `image` to the path
// (e.g. "/assets/product-tour/1-detect.png"). Until then a labelled placeholder shows.
type Step = {
  n: string;
  phase: string;
  title: string;
  caption: string;
  surface: string;
  shot: string;
  file: string;
  image: string; // "" => placeholder
  alt: string;
};

const HERO_MEDIA = {
  shot: "60-90s walkthrough video (MP4) of one finding running the whole loop, OR the Nerve Centre overview screenshot",
  file: "0-hero.mp4 (or 0-hero.png)",
  video: "", // set to "/assets/product-tour/0-hero.mp4" to embed the video
  image: "/assets/product-tour/0-hero.png",
};

const TOUR: Step[] = [
  {
    n: "01",
    phase: "Detect",
    title: "An anomaly surfaces, before it costs you.",
    caption:
      "The Nerve Centre watches every connected signal continuously. Here it flags a finding the moment it appears, with the revenue at stake attached.",
    surface: "Nerve Centre",
    shot: "Nerve Centre flagging a single finding / anomaly (with revenue-at-risk label)",
    file: "1-detect.png",
    image: "/assets/product-tour/1-detect.png",
    alt: "Nerve Centre detecting a finding",
  },
  {
    n: "02",
    phase: "Explain",
    title: "The root cause, in plain English.",
    caption:
      "Vortex Mind investigates and Ask Viq™ explains why it happened, in language you can act on, so you make the call without decoding a dashboard.",
    surface: "Vortex Mind / Ask Viq™",
    shot: "The plain-English root-cause explanation for that same finding",
    file: "2-explain.png",
    image: "/assets/product-tour/2-explain.png",
    alt: "Ask Viq explaining the root cause in plain English",
  },
  {
    n: "03",
    phase: "Fix",
    title: "A ranked list of fixes.",
    caption:
      "Proposed fixes, ordered by the revenue they put at stake, so you always know what to do first, not a flat list of maybes.",
    surface: "Findings and fixes",
    shot: "The proposed fixes ranked by revenue at stake",
    file: "3-fix.png",
    image: "",
    alt: "Fixes ranked by revenue at stake",
  },
  {
    n: "04",
    phase: "Approve",
    title: "Nothing ships without you.",
    caption:
      "Every change is staged first and waits for your approval. You review the exact change, then approve or reject. Vortex Agents do the work; you keep control.",
    surface: "Vortex Agents / Vortex Apps",
    shot: "The approval screen for a staged change (approve / reject)",
    file: "4-approve.png",
    image: "/assets/product-tour/4-approve.png",
    alt: "Approval-gated change, staged first",
  },
  {
    n: "05",
    phase: "Rollback",
    title: "Reversible by design.",
    caption:
      "Want a change back? One click rolls it back, with a full audit trail of who changed what and when. Safe to act, because nothing is permanent without your say-so.",
    surface: "Vortex Apps",
    shot: "The one-click rollback control and/or the audit trail/history",
    file: "5-rollback.png",
    image: "/assets/product-tour/5-rollback.png",
    alt: "One-click rollback and audit trail",
  },
  {
    n: "06",
    phase: "Learn",
    title: "It gets sharper over time.",
    caption:
      "Vortex Memory remembers every signal, fix and decision, so the next finding starts from what already worked on your store instead of from scratch.",
    surface: "Vortex Memory",
    shot: "A view showing past fixes / what the system has learned",
    file: "6-learn.png",
    image: "/assets/product-tour/6-learn.png",
    alt: "Vortex Memory recording fixes and decisions",
  },
];

/* eslint-disable @next/next/no-img-element */
function Media({ image, alt, shot, file }: { image: string; alt: string; shot: string; file: string }) {
  if (image) {
    return (
      <div className="pt-media">
        <img src={image} alt={alt} />
      </div>
    );
  }
  return (
    <div className="pt-media">
      <div className="pt-ph">
        <span className="pt-ph-badge">Screenshot needed</span>
        <p className="pt-ph-what">{shot}</p>
        <p className="pt-ph-file">
          Drop at <code>/assets/product-tour/{file}</code>
          <br />Real UI, anonymised data &middot; light mode &middot; &ge;1600px wide
        </p>
      </div>
    </div>
  );
}
/* eslint-enable @next/next/no-img-element */

const css = `
.product-tour-page .pt-hero{text-align:center;max-width:760px;margin:0 auto}
.product-tour-page .pt-hero .eyebrow{justify-content:center}
.product-tour-page .pt-hero h1{max-width:18ch;margin:0 auto 1.4rem}
.product-tour-page .pt-hero .lede{margin:0 auto}
.product-tour-page .pt-hero .cta-row{justify-content:center;margin-top:2.2rem}

.product-tour-page .pt-media{border-radius:16px;overflow:hidden}
.product-tour-page .pt-media img{display:block;width:100%;height:auto;border:1px solid var(--border-dark);border-radius:16px}
.product-tour-page .pt-ph{aspect-ratio:16/9;border:1px dashed var(--border-strong);border-radius:16px;background:var(--surface-soft);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2rem;gap:.8rem}
.product-tour-page .pt-ph-badge{font-family:var(--font-mono);font-size:.62rem;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-purple);background:var(--surface-tint);border:1px solid var(--border-brand);padding:.3rem .7rem;border-radius:999px}
.product-tour-page .pt-ph-what{font-family:var(--font-heading);font-weight:600;font-size:1rem;color:var(--primary);max-width:38ch}
.product-tour-page .pt-ph-file{font-family:var(--font-mono);font-size:.72rem;color:var(--text-faded);line-height:1.7}
.product-tour-page .pt-ph-file code{background:var(--white);border:1px solid var(--border-dark);border-radius:6px;padding:.1rem .4rem}

.product-tour-page .pt-honesty{display:flex;gap:.7rem;align-items:flex-start;max-width:760px;margin:2rem auto 0;font-size:.9rem;color:var(--text-body);line-height:1.5;background:var(--surface-soft);border:1px solid var(--border-dark);border-radius:12px;padding:1rem 1.2rem}
.product-tour-page .pt-honesty svg{width:18px;height:18px;flex:none;color:var(--brand-purple);margin-top:2px}

.product-tour-page .pt-steps{display:grid;gap:3rem;margin-top:1rem}
.product-tour-page .pt-step{display:grid;grid-template-columns:1fr 1.15fr;gap:2.4rem;align-items:center}
.product-tour-page .pt-step:nth-child(even) .pt-step-tx{order:2}
.product-tour-page .pt-num{font-family:var(--font-mono);font-size:.8rem;color:var(--text-faded)}
.product-tour-page .pt-phase{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--brand-purple);display:block;margin:.5rem 0 .9rem}
.product-tour-page .pt-step h3{font-size:1.5rem;letter-spacing:-.01em}
.product-tour-page .pt-step .muted{margin-top:.8rem;font-size:1.02rem;line-height:1.55}
.product-tour-page .pt-surface{display:inline-block;margin-top:1.1rem;font-family:var(--font-mono);font-size:.66rem;color:var(--brand-purple);background:var(--surface-tint);border:1px solid var(--border-brand);padding:.22rem .55rem;border-radius:999px}

@media(max-width:880px){
  .product-tour-page .pt-step{grid-template-columns:1fr;gap:1.2rem}
  .product-tour-page .pt-step:nth-child(even) .pt-step-tx{order:0}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="product-tour-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="pt-hero">
              <div className="eyebrow reveal in">Product tour</div>
              <h1 className="reveal in">See the loop run. <span className="hl">No sales call.</span></h1>
              <p className="lede reveal in">
                Watch Vortex IQ detect a problem, explain it in plain English, propose a ranked fix, ship it
                only on your approval, and roll it back in one click. This is the real product, on a real store.
              </p>
              <div className="cta-row reveal in">
                <Link className="btn" href="/free-audit">Get my free audit</Link>
                <Link className="btn btn--ghost" href="/contact-us">Book a demo &rarr;</Link>
              </div>
            </div>

            <div style={{ marginTop: "3rem" }}>
              {HERO_MEDIA.video ? (
                <div className="pt-media">
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  <video src={HERO_MEDIA.video} controls playsInline style={{ width: "100%", borderRadius: 16, border: "1px solid var(--border-dark)" }} />
                </div>
              ) : (
                <Media image={HERO_MEDIA.image} alt="Vortex IQ product walkthrough" shot={HERO_MEDIA.shot} file={HERO_MEDIA.file} />
              )}
            </div>

            <div className="pt-honesty reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
              <span>
                <b>What you are seeing is the real interface.</b> Every screen below is the live Vortex IQ
                product with anonymised store data. No mockups, no faked screens.
              </span>
            </div>
          </div>
        </section>

        {/* THE LOOP, STEP BY STEP */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">The loop, step by step</div>
            <h2 className="reveal" style={{ maxWidth: "22ch" }}>One finding, from signal to safe fix.</h2>
            <div className="pt-steps" style={{ marginTop: "2.8rem" }}>
              {TOUR.map((s) => (
                <div className="pt-step reveal" key={s.n}>
                  <div className="pt-step-tx">
                    <span className="pt-num">Step {s.n}</span>
                    <span className="pt-phase">{s.phase}</span>
                    <h3>{s.title}</h3>
                    <p className="muted">{s.caption}</p>
                    <span className="pt-surface">{s.surface}</span>
                  </div>
                  <Media image={s.image} alt={s.alt} shot={s.shot} file={s.file} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section">
          <div className="container" style={{ textAlign: "center" }}>
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>See it on your store</div>
            <h2 className="reveal" style={{ maxWidth: "20ch", margin: "0 auto" }}>The fastest way to believe it is to run it.</h2>
            <p className="lede reveal" style={{ margin: "1.3rem auto 2.4rem", maxWidth: "46ch" }}>
              A free, verified audit shows the same loop working on your own store, ranked by impact.
            </p>
            <div className="cta-row reveal" style={{ justifyContent: "center" }}>
              <Link className="btn" href="/free-audit">Run a free audit</Link>
              <Link className="btn btn--ghost" href="/contact-us">Book a demo &rarr;</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
