import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/free-audit/thank-you" },
  title: "Request received. Free Store Health Check | Vortex IQ",
  description: "Thanks. Your free Store Health Check request is in. We'll read your public pages, verify every finding, and email your revenue-ranked report.",
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <section className="section section--soft" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 720 }}>
        <div className="eyebrow">Free Store Health Check</div>
        <h1 style={{ marginTop: ".6rem" }}>
          Request received. <em className="hl">Check your inbox.</em>
        </h1>
        <p className="lede" style={{ margin: "1.4rem auto 0", maxWidth: 560 }}>
          Thanks. Your request is in. We&apos;ll read your store&apos;s public pages, verify every
          finding against your live site, and email your revenue-ranked report to the address you
          gave us. No connectors, no developer, no sales call.
        </p>
        <p className="muted" style={{ margin: "1.2rem auto 0", maxWidth: 520 }}>
          Nothing in your inbox? Check spam, or email{" "}
          <a href="mailto:privacy@vortexiq.ai">privacy@vortexiq.ai</a> and we&apos;ll help.
        </p>
        <div className="cta-row" style={{ justifyContent: "center", marginTop: "2.4rem" }}>
          <Link className="btn" href="/ai-os-platform">
            See the platform
          </Link>
          <Link className="btn btn--ghost" href="/customer-stories">
            Read customer stories
          </Link>
        </div>
      </div>
    </section>
  );
}
