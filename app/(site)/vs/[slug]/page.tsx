import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { comparisons, comparisonBySlug, comparisonSlugs } from "../comparisons";
import { css } from "../styles";

export function generateStaticParams() {
  return comparisonSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = comparisonBySlug(slug);
  if (!c) return {};
  return {
    title: `Vortex IQ vs ${c.name} | Vortex IQ`,
    description: `A neutral, source-cited comparison of Vortex IQ and ${c.name}, side by side across platforms, scope, actions, approval and rollback. Facts only, then verify on your store.`,
    alternates: { canonical: `/vs/${c.slug}` },
    openGraph: {
      description: `How Vortex IQ, the AI Operating System for e-commerce, compares with ${c.name} — checkable facts from public sources.`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = comparisonBySlug(slug);
  if (!c) notFound();

  const others = comparisons.filter((x) => x.slug !== c.slug);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="vs-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="vs-detail-hero">
              <div className="eyebrow reveal">
                Compare &middot; {c.category}
              </div>
              <h1 className="reveal">
                Vortex IQ <em className="hl">vs</em> {c.name}
              </h1>
              <p className="lede reveal">{c.oneLiner}</p>
              <div className="vs-whatis reveal">
                <b>What {c.name} is:</b> {c.whatItIs}
              </div>
            </div>
          </div>
        </section>

        {/* TABLE */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">Side by side</div>
            <h2 className="reveal" style={{ maxWidth: "24ch" }}>
              Vortex IQ vs {c.name}, on the facts.
            </h2>
            <div className="cmp reveal">
              <div className="cmp-head">
                <div>Dimension</div>
                <div className="viq-col">Vortex IQ</div>
                <div>{c.name}</div>
              </div>
              {c.rows.map((r) => (
                <div className="cmp-row" key={r.dimension}>
                  <div className="cmp-dim">{r.dimension}</div>
                  <div className="cmp-viq">{r.viq}</div>
                  <div className="cmp-comp" data-comp={c.name}>
                    {r.competitor}
                  </div>
                </div>
              ))}
            </div>
            <details className="vs-sources reveal">
              <summary>Sources ({c.sources.length})</summary>
              <ul>
                {c.sources.map((s) => (
                  <li key={s}>
                    <a href={s} target="_blank" rel="noopener noreferrer nofollow">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
            <p className="vs-asof reveal">
              Competitor facts verified from public sources, {c.asOf}. Products change; if
              anything here is out of date, email press@vortexiq.ai and we&apos;ll correct it.
            </p>
          </div>
        </section>

        {/* WHEN VIQ FITS BETTER */}
        <section className="section">
          <div className="container">
            <div className="eyebrow reveal">When Vortex IQ is the better fit</div>
            <h2 className="reveal" style={{ maxWidth: "26ch" }}>
              Where an operating layer helps, and where {c.name} still shines.
            </h2>
            <div className="switch-list reveal">
              {c.switchReasons.map((s, i) => (
                <div className="switch-item" key={i}>
                  <span className="ck" aria-hidden="true">
                    &#10003;
                  </span>
                  <p>{s}</p>
                </div>
              ))}
            </div>
            <div className="cta-row reveal" style={{ marginTop: "2.4rem" }}>
              <a className="btn" href="/free-audit">
                Run a free audit
              </a>
              <a className="btn btn--ghost" href="/what-is-ai-os-for-ecommerce">
                What is an AI OS? &rarr;
              </a>
            </div>

            <div className="vs-more reveal">
              <Link href="/vs">&larr; All comparisons</Link>
              {others.map((o) => (
                <Link key={o.slug} href={`/vs/${o.slug}`}>
                  vs {o.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
