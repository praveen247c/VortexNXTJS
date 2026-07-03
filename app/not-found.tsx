import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Vortex IQ",
  robots: { index: false, follow: true },
};

// Global 404 boundary. Unmatched legacy URLs (the old Webflow tree held 18,000+
// indexed pages) land here, so this page must route visitors back into the site
// rather than dead-end them. Next.js returns HTTP 404 automatically.
export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "34rem", textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: ".8rem",
            letterSpacing: ".08em",
            textTransform: "uppercase",
            color: "#5529d6",
            marginBottom: "1rem",
          }}
        >
          404: page not found
        </p>
        <h1 style={{ fontSize: "2rem", lineHeight: 1.2, marginBottom: "1rem" }}>
          This page moved or never existed.
        </h1>
        <p style={{ marginBottom: "2rem", color: "var(--text-body, #444)" }}>
          The site was recently restructured, so an old link may have brought you
          here. These are the pages most people want:
        </p>
        <nav
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: ".75rem",
            justifyContent: "center",
          }}
        >
          <Link className="btn" href="/free-audit">
            Run a free audit
          </Link>
          <Link className="btn btn--ghost" href="/ai-os-platform">
            The AI OS platform
          </Link>
          <Link className="btn btn--ghost" href="/pricing">
            Pricing
          </Link>
          <Link className="btn btn--ghost" href="/resources/blog">
            Blog
          </Link>
          <Link className="btn btn--ghost" href="/">
            Homepage
          </Link>
        </nav>
      </div>
    </main>
  );
}
