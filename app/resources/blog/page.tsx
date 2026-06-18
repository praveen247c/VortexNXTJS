import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & News · Vortex IQ",
  description: "Product updates, insights and news from Vortex IQ.",
};

// Placeholder until the headless CMS (WPGraphQL) blog is wired up (see PLAN.md §6).
export default function Page() {
  return (
    <main>
      <section className="section" style={{ paddingTop: "9rem" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="eyebrow reveal in">Resources</div>
          <h1 className="reveal in" style={{ marginTop: "1rem" }}>
            Blog &amp; News
          </h1>
          <p className="lede reveal in" style={{ marginTop: "1.4rem" }}>
            Our newsroom is moving to a new home. Articles and product updates
            will appear here shortly.
          </p>
          <div className="cta-row reveal in" style={{ marginTop: "2.4rem" }}>
            <a className="btn" href="/customer-stories">
              Read customer stories
            </a>
            <a
              className="textlink"
              href="https://www.vortexiq.ai/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the current blog &rarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
