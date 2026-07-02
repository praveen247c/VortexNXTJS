"use client";

import { useState } from "react";

// Reads the HubSpot tracking cookie so a submission links to the visitor's
// analytics session. Returns "" when the cookie isn't present.
function getHutk(): string {
  if (typeof document === "undefined") return "";
  const m = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : "";
}

// Fallback: open the user's mail client (the original behaviour) if the API
// isn't reachable/configured, so a request is never lost.
function mailtoFallback(fullName: string, email: string, company: string) {
  const body = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    "",
    "Please send me the Vortex IQ brochure.",
  ]
    .filter(Boolean)
    .join("\n");
  window.location.href = `mailto:hey@vortexiq.ai?subject=${encodeURIComponent(
    "Brochure request"
  )}&body=${encodeURIComponent(body)}`;
}

export default function BrochureForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const fullName = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");

    setName(fullName);
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullName,
          email,
          company,
          hutk: getHutk(),
          pageUri: window.location.href,
          pageName: document.title,
        }),
      });

      if (res.ok) {
        setSent(true);
        return;
      }

      // If the form isn't configured yet (503) or HubSpot errors, fall back to
      // the mailto path so the lead still reaches us.
      mailtoFallback(fullName, email, company);
      setSent(true);
    } catch {
      mailtoFallback(fullName, email, company);
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="brochure-form-card" id="request">
        <div className="bf-success">
          <div className="ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3>Thanks{name ? `, ${name.split(" ")[0]}` : ""}: the brochure is on its way.</h3>
          <p className="muted" style={{ marginTop: ".7rem", maxWidth: "46ch", marginInline: "auto" }}>
            We&apos;ll email the PDF to you shortly. No need to wait, though: read the whole brochure
            online right now. Any questions, we&apos;re at{" "}
            <a href="mailto:hey@vortexiq.ai" style={{ color: "var(--brand-purple)" }}>hey@vortexiq.ai</a>.
          </p>
          <div className="bf-success-actions">
            <a className="btn btn--sm" href="/join-viq/brochure">
              Read the brochure now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <button type="button" className="btn btn--ghost btn--sm" onClick={() => setSent(false)}>
              Request again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className="brochure-form-card" id="request" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="bf-name">Full name <span className="req">*</span></label>
        <input id="bf-name" name="name" type="text" placeholder="Jane Smith" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="bf-email">Work email <span className="req">*</span></label>
        <input id="bf-email" name="email" type="email" placeholder="jane@company.com" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="bf-company">Company</label>
        <input id="bf-company" name="company" type="text" placeholder="Company name" autoComplete="organization" />
      </div>
      <div className="bf-actions">
        <button type="submit" className="btn" disabled={submitting}>
          {submitting ? "Sending..." : "Get the brochure"}
          {!submitting && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
              <path d="M12 3v12M7 11l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          )}
        </button>
        <span className="promise">
          <span className="dot" />PDF · no spam
        </span>
      </div>
      <p className="bf-note">
        Prefer to read it online? <a href="/join-viq/brochure">View the live brochure</a>.
        By requesting it you agree to our <a href="https://www.vortexiq.ai/privacy-policy">Privacy Policy</a>.
      </p>
    </form>
  );
}
