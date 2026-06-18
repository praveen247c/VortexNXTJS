"use client";

import { useState } from "react";

export default function BrochureForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const fullName = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");

    const body = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      "",
      "Please send me the Vortex IQ brochure.",
    ]
      .filter(Boolean)
      .join("\n");

    const href = `mailto:hey@vortexiq.ai?subject=${encodeURIComponent(
      "Brochure request"
    )}&body=${encodeURIComponent(body)}`;

    setName(fullName);
    setSent(true);
    window.location.href = href;
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
          <h3>Thanks{name ? `, ${name.split(" ")[0]}` : ""} — the brochure is on its way.</h3>
          <p className="muted" style={{ marginTop: ".7rem", maxWidth: "44ch", marginInline: "auto" }}>
            Your email client should have opened with your request ready to send. If it didn&apos;t, email us
            directly at <a href="mailto:hey@vortexiq.ai" style={{ color: "var(--brand-purple)" }}>hey@vortexiq.ai</a>{" "}
            or read it online below.
          </p>
          <div className="bf-success-actions">
            <a
              className="btn btn--sm"
              href="https://www.vortexiq.ai/join-viq"
              target="_blank"
              rel="noopener noreferrer"
            >
              View online
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 15, height: 15 }}>
                <path d="M7 17 17 7M9 7h8v8" />
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
        <button type="submit" className="btn">
          Get the brochure
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
            <path d="M12 3v12M7 11l5 5 5-5" />
            <path d="M5 21h14" />
          </svg>
        </button>
        <span className="promise">
          <span className="dot" />PDF · no spam
        </span>
      </div>
      <p className="bf-note">
        Prefer to read it online? <a href="https://www.vortexiq.ai/join-viq" target="_blank" rel="noopener noreferrer">View the live brochure</a>.
        By requesting it you agree to our <a href="https://www.vortexiq.ai/privacy-policy">Privacy Policy</a>.
      </p>
    </form>
  );
}
