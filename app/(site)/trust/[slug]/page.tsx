import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { policies, policyBySlug, policySlugs } from "../policies";
import { pageOpenGraph, seoTitle } from "@/lib/seo";

const css = `
/* ============ Trust policy — page styles (built on the shared design system) ============ */
.policy-page .section--soft{background:var(--surface-soft)}
/* tighten the hero so the divider sits just under the header, not floating above the first section */
.policy-page .section--hero{padding-bottom:2.6rem}
.policy-body-section{padding-top:3.2rem}
.policy-hero{max-width:820px;margin:0 auto}
.policy-hero .eyebrow{justify-content:flex-start}
.policy-hero h1{max-width:24ch;margin:1.4rem 0 1rem}
.policy-meta{display:flex;flex-wrap:wrap;align-items:center;gap:.7rem;font-family:var(--font-mono);font-size:.74rem;color:var(--text-faded)}
.policy-meta .chip{display:inline-flex;align-items:center;gap:.45rem;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);padding:.25rem .65rem;border-radius:var(--radius-pill)}
.policy-meta .chip svg{width:13px;height:13px}
.policy-lede{margin-top:1.6rem;font-size:1.18rem;color:var(--text-body);line-height:1.55;max-width:64ch}
.policy-lede a{color:var(--brand-purple);text-decoration:underline;text-underline-offset:2px}
.policy-lede strong{color:var(--primary);font-weight:600}

/* body */
.policy-body{max-width:820px;margin:0 auto}
.policy-body h2{font-family:var(--font-heading);font-weight:600;font-size:1.3rem;letter-spacing:-.01em;line-height:1.25;margin:2.4rem 0 .9rem;color:var(--primary)}
.policy-body h2:first-child{margin-top:0}
.policy-body p{margin:0 0 1.2rem;color:var(--text-body);line-height:1.65}
.policy-body ul,.policy-body ol{margin:0 0 1.3rem 1.25rem;color:var(--text-body)}
.policy-body li{margin:.5rem 0;padding-left:.3rem;line-height:1.6}
.policy-body a{color:var(--brand-purple);text-decoration:underline;text-underline-offset:2px}
.policy-body strong{color:var(--primary);font-weight:600}

/* related */
.policy-related{max-width:820px;margin:0 auto}
.policy-related .eyebrow{justify-content:flex-start}
.related-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin-top:1.6rem}
.related-card{display:flex;flex-direction:column;gap:.4rem;background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:1.2rem 1.3rem;text-decoration:none;transition:border-color .2s,box-shadow .2s,transform .2s}
.related-card:hover{border-color:var(--border-brand);box-shadow:var(--shadow-sm);transform:translateY(-2px)}
.related-card b{font-family:var(--font-heading);font-weight:600;font-size:1rem;color:var(--primary)}
.related-card span{font-size:.88rem;color:var(--text-body);line-height:1.5}

@media(max-width:640px){.related-grid{grid-template-columns:1fr}}
`;

export function generateStaticParams() {
  return policySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = policyBySlug[slug];
  if (!p) return { title: "Trust Centre | Vortex IQ" };
  const title = seoTitle(p.title, " | Vortex IQ Trust Centre");
  const path = `/trust/${slug}`;
  return {
    title,
    description: p.blurb,
    alternates: { canonical: path },
    openGraph: pageOpenGraph({ title, description: p.blurb, path }),
  };
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const policy = policyBySlug[slug];
  if (!policy) notFound();

  const related = policies.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="policy-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="policy-hero">
              <Link className="textlink" href="/trust/trust-center">&larr; Trust Centre</Link>
              <div className="eyebrow" style={{ marginTop: "1.4rem" }}>Policy</div>
              <h1>{policy.title}</h1>
              <div className="policy-meta">
                <span className="chip">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                  Last updated: {policy.lastUpdated}
                </span>
                <span>Vortex IQ Ltd</span>
              </div>
              {policy.intro ? (
                <p className="policy-lede" dangerouslySetInnerHTML={{ __html: policy.intro }} />
              ) : null}
            </div>
          </div>
        </section>

        {/* BODY */}
        <section className="section policy-body-section">
          <div className="container">
            <div className="policy-body">
              {policy.blocks.map((b, i) => {
                if (b.k === "h") return <h2 key={i}>{b.t}</h2>;
                if (b.k === "p") return <p key={i} dangerouslySetInnerHTML={{ __html: b.t }} />;
                const items = b.items.map((it, j) => <li key={j} dangerouslySetInnerHTML={{ __html: it }} />);
                return b.k === "ol" ? <ol key={i}>{items}</ol> : <ul key={i}>{items}</ul>;
              })}
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="section section--soft">
          <div className="container">
            <div className="policy-related">
              <div className="eyebrow">More from the Trust Centre</div>
              <div className="related-grid">
                {related.map((p) => (
                  <Link key={p.slug} className="related-card" href={`/trust/${p.slug}`}>
                    <b>{p.title}</b>
                    <span>{p.blurb}</span>
                  </Link>
                ))}
              </div>
              <p style={{ marginTop: "1.8rem" }}>
                <Link className="textlink" href="/trust/trust-center">View all security &amp; trust documentation →</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
