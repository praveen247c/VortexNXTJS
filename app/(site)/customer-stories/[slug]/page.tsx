import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, caseStudyBySlug } from "../case-studies";
import ShareLinkedIn from "@/components/ShareLinkedIn";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) return { title: "Customer Story | Vortex IQ" };
  return {
    title: `${study.company}: ${study.title} | Vortex IQ`,
    description: study.lede,
    alternates: { canonical: `/customer-stories/${study.slug}` },
  };
}

const css = `
/* ===== Case study (built on the shared design system) ===== */
.cs-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.cs-back{font-family:var(--font-mono);font-size:.78rem;color:var(--text-body);text-decoration:none;display:inline-flex;align-items:center;gap:.45rem;margin-bottom:1.8rem;transition:gap .2s,color .2s}
.cs-back:hover{color:var(--brand-purple);gap:.7rem}

/* hero */
.cs-hero-grid{display:grid;grid-template-columns:1.45fr .9fr;gap:3.5rem;align-items:center}
.cs-hero{min-width:0}
.cs-company{display:inline-flex;align-items:center;font-family:var(--font-mono);font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--brand-purple);background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius-pill);padding:.4rem .85rem;margin-bottom:1.4rem}
.cs-hero h1{font-size:clamp(1.7rem,2.7vw,2.4rem);line-height:1.14;margin-bottom:1.4rem}
.cs-hero .lede{font-size:1.08rem;margin-bottom:0}
.cs-logo{position:relative;background:var(--white);border:1px solid var(--border-dark);border-radius:16px;aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;padding:2.6rem;box-shadow:var(--shadow-md);overflow:hidden}
.cs-logo::before{content:"";position:absolute;inset:0;background:radial-gradient(120% 120% at 100% 0,rgba(85,41,214,.10),transparent 55%);pointer-events:none}
.cs-logo::after{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:var(--brand-gradient-soft)}
.cs-logo img{position:relative;max-height:78%;max-width:82%;object-fit:contain;display:block}

/* metrics */
.cs-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--bento-gap);margin-top:3.5rem}
.cs-metric{background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius);padding:2.2rem 1.8rem;transition:transform .25s var(--ease),border-color .25s,box-shadow .3s}
.cs-metric:hover{transform:translateY(-3px);border-color:var(--border-strong);box-shadow:var(--shadow-lg)}
.cs-metric .val{font-family:var(--font-heading);font-weight:600;font-size:clamp(2.2rem,4vw,3rem);line-height:1;letter-spacing:-.02em;background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:.8rem}
.cs-metric .lbl{color:var(--text-body);font-size:.96rem;line-height:1.45}

/* body */
.cs-body{max-width:760px;margin:0 auto}
.cs-section+.cs-section{margin-top:3.2rem}
.cs-section h2{font-size:clamp(1.5rem,2.6vw,2rem);max-width:24ch;margin-bottom:1.2rem}
.cs-section p{color:var(--text-body);font-size:1.08rem;line-height:1.65}
.cs-section p+p{margin-top:1.1rem}
.cs-lead{font-weight:500;color:var(--primary);margin-top:1.4rem}
.cs-list{list-style:none;display:flex;flex-direction:column;gap:.9rem;margin:1.3rem 0 0}
.cs-list li{display:flex;align-items:flex-start;gap:.85rem;color:var(--text-body);font-size:1.04rem;line-height:1.55}
.cs-list .ck{width:26px;height:26px;flex:none;border-radius:8px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center;margin-top:.15rem}
.cs-list .ck svg{width:14px;height:14px}

/* quote */
.cs-quote{margin:3.4rem auto;max-width:760px;border-left:3px solid var(--brand-purple);background:var(--surface-tint);border-radius:0 var(--radius) var(--radius) 0;padding:2rem 2.2rem}
.cs-quote p{font-family:var(--font-heading);font-weight:500;font-size:1.3rem;line-height:1.45;letter-spacing:-.01em;color:var(--primary)}
.cs-quote .by{margin-top:1.2rem;font-family:var(--font-mono);font-size:.78rem;color:var(--brand-purple);letter-spacing:.02em}
.cs-quote .by b{color:var(--primary);font-weight:600}

/* final */
.cs-final{text-align:center}
.cs-final h2{max-width:20ch;margin:0 auto 1.3rem}
.cs-final .lede{margin:0 auto 2.4rem}
.cs-final .cta-row{justify-content:center}

@media(max-width:860px){
  .cs-hero-grid{grid-template-columns:1fr;gap:2.4rem}
  .cs-hero{max-width:none}
  .cs-logo{aspect-ratio:16/9;max-width:420px}
}
@media(max-width:760px){
  .cs-metrics{grid-template-columns:1fr}
}
`;

const Tick = () => (
  <span className="ck">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  </span>
);

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="cs-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <Link className="cs-back" href="/customer-stories">← All customer stories</Link>
            <div className="cs-hero-grid">
              <div className="cs-hero">
                <span className="cs-company">{study.company}</span>
                <h1 className="reveal in">{study.title}</h1>
                <p className="lede reveal in">{study.lede}</p>
                <div className="eyebrow reveal in" style={{ marginTop: "1.6rem" }}>{study.eyebrow}</div>
                <div className="reveal in" style={{ marginTop: "1.4rem" }}>
                  <ShareLinkedIn path={`/customer-stories/${study.slug}`} />
                </div>
              </div>
              <div className="cs-logo reveal in">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={study.logo} alt={`${study.company} logo`} loading="lazy" />
              </div>
            </div>
            <div className="cs-metrics">
              {study.metrics.map((m) => (
                <div className="cs-metric reveal" key={m.label}>
                  <div className="val">{m.value}</div>
                  <div className="lbl">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="section">
          <div className="container">
            <div className="cs-body">
              {study.blocks.map((block, i) =>
                block.type === "quote" ? (
                  <blockquote className="cs-quote reveal" key={i}>
                    <p>&ldquo;{block.text}&rdquo;</p>
                    {block.name && (
                      <div className="by">
                        <b>{block.name}</b>
                        {block.role ? ` · ${block.role}` : ""}
                      </div>
                    )}
                  </blockquote>
                ) : (
                  <div className="cs-section reveal" key={i}>
                    <h2>{block.heading}</h2>
                    {block.paras?.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                    {block.lead && <p className="cs-lead">{block.lead}</p>}
                    {block.bullets && (
                      <ul className="cs-list">
                        {block.bullets.map((b, j) => (
                          <li key={j}>
                            <Tick />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="section section--soft cs-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>Your turn</div>
            <h2 className="reveal">Become our next success story.</h2>
            <p className="lede reveal">
              See how the same trusted reliability layer, now running on AI agents, can streamline
              operations and speed up growth for your business.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Book a demo</Link>
              <Link className="btn btn--ghost" href="/ai-os-platform" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>Explore the platform →</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
