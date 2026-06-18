"use client";

import { useState } from "react";

const TOPICS = [
  { value: "Sales & demo", subject: "Sales & demo enquiry" },
  { value: "Product support", subject: "Product support request" },
  { value: "Partnership", subject: "Partnership enquiry" },
  { value: "Press & media", subject: "Press & media enquiry" },
  { value: "Careers", subject: "Careers enquiry" },
  { value: "Something else", subject: "General enquiry" },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const topic = String(form.get("topic") || "Something else");
    const subjectBase = TOPICS.find((t) => t.value === topic)?.subject ?? "Enquiry";
    const fullName = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const company = String(form.get("company") || "");
    const message = String(form.get("message") || "");

    const body = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      `Topic: ${topic}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const href = `mailto:hey@vortexiq.ai?subject=${encodeURIComponent(
      `${subjectBase} — ${fullName}`
    )}&body=${encodeURIComponent(body)}`;

    setName(fullName);
    setSent(true);
    window.location.href = href;
  }

  if (sent) {
    return (
      <div className="contact-form-card" id="message">
        <div className="cf-success">
          <div className="ic">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3>Thanks{name ? `, ${name.split(" ")[0]}` : ""} — message ready to send.</h3>
          <p className="muted" style={{ marginTop: ".7rem", maxWidth: "42ch", marginInline: "auto" }}>
            Your email client should have opened with the details filled in. If it didn&apos;t, reach us
            directly at <a href="mailto:hey@vortexiq.ai" style={{ color: "var(--brand-purple)" }}>hey@vortexiq.ai</a>.
            We usually reply within one business day.
          </p>
          <button type="button" className="btn btn--ghost btn--sm" style={{ marginTop: "1.6rem" }} onClick={() => setSent(false)}>
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-form-card" id="message" onSubmit={handleSubmit}>
      <div className="cf-row">
        <div className="field">
          <label htmlFor="cf-name">Full name <span className="req">*</span></label>
          <input id="cf-name" name="name" type="text" placeholder="Jane Smith" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Work email <span className="req">*</span></label>
          <input id="cf-email" name="email" type="email" placeholder="jane@company.com" required autoComplete="email" />
        </div>
      </div>
      <div className="cf-row">
        <div className="field">
          <label htmlFor="cf-company">Company</label>
          <input id="cf-company" name="company" type="text" placeholder="Company name" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="cf-topic">I&apos;m interested in</label>
          <select id="cf-topic" name="topic" defaultValue="Sales & demo">
            {TOPICS.map((t) => (
              <option key={t.value} value={t.value}>{t.value}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-message">How can we help? <span className="req">*</span></label>
        <textarea id="cf-message" name="message" placeholder="Tell us about your store, your stack, and what you'd like to achieve…" required />
      </div>
      <div className="cf-actions">
        <button type="submit" className="btn">
          Send message
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 17, height: 17 }}>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
        <span className="promise">
          <span className="dot" />Average first reply: under 1 business day
        </span>
      </div>
      <p className="cf-note">
        By submitting this form you agree to our{" "}
        <a href="https://www.vortexiq.ai/privacy-policy">Privacy Policy</a>. We&apos;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}
