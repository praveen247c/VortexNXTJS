import type { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "./comparisons";
import { css } from "./styles";

export const metadata: Metadata = {
  title: "Compare: Vortex IQ vs Alternatives | Vortex IQ",
  description:
    "Neutral, source-cited comparisons of Vortex IQ, the AI Operating System for e-commerce, against analytics, customer-experience and platform-native AI tools. Facts side by side, then verify on your store.",
  alternates: { canonical: "/vs" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="vs-page">
        {/* HERO */}
        <section className="section section--hero">
          <div className="container">
            <div className="vs-hero">
              <div className="eyebrow reveal">Compare</div>
              <h1 className="reveal">
                Vortex IQ <em className="hl">vs</em> the alternatives.
              </h1>
              <p className="lede reveal">
                Most tools own one slice of the problem: analytics, customer support, or a
                platform-native assistant. Vortex IQ is the operating layer across the whole
                stack, detecting what is wrong, explaining why, and fixing it safely on your
                approval. These pages lay the facts side by side so you can decide.
              </p>
              <p className="vs-note reveal">
                Every comparison uses only checkable facts from each product&apos;s own public
                sources, cited on the page. We describe what each tool does well and note where
                Vortex IQ is complementary. No unverifiable claims, no disparagement.
              </p>
            </div>
          </div>
        </section>

        {/* CARDS */}
        <section className="section section--soft">
          <div className="container">
            <div className="eyebrow reveal">Head to head</div>
            <h2 className="reveal" style={{ maxWidth: "24ch" }}>
              Pick a comparison.
            </h2>
            <div className="vs-grid reveal">
              {comparisons.map((c) => (
                <Link key={c.slug} className="vs-card" href={`/vs/${c.slug}`}>
                  <div className="vs-cat">{c.category}</div>
                  <h3>Vortex IQ vs {c.name}</h3>
                  <p>{c.oneLiner}</p>
                  <span className="vs-go">See the comparison &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE COMPARE */}
        <section className="section">
          <div className="container">
            <div className="eyebrow reveal">How we compare</div>
            <h2 className="reveal" style={{ maxWidth: "24ch" }}>
              Facts only. You decide.
            </h2>
            <div className="rule-strip reveal">
              <div className="rule-item">
                <b>Neutral tables</b>
                <span>
                  Side-by-side features, stated as checkable facts from each product&apos;s own
                  docs. No &ldquo;why we win&rdquo; assertions you cannot verify.
                </span>
              </div>
              <div className="rule-item">
                <b>No disparagement</b>
                <span>
                  We describe what each tool does, accurately. Good products solve real problems;
                  we just solve a different, wider one.
                </span>
              </div>
              <div className="rule-item">
                <b>Verify on your store</b>
                <span>
                  The honest way to compare outcomes is on your own data. Every page ends in a
                  free, verified audit.
                </span>
              </div>
            </div>
            <div className="cta-row reveal" style={{ marginTop: "2.4rem" }}>
              <a className="btn" href="/free-audit">
                Run a free audit
              </a>
              <a className="btn btn--ghost" href="/what-is-ai-os-for-ecommerce">
                What is an AI OS? &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
