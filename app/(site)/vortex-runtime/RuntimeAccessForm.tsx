"use client";

import { useState } from "react";

// Reads the HubSpot tracking cookie so the submission links to the visitor's
// analytics session (same cookie the rest of the site's HubSpot forms use).
function getHutk(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const m = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/);
  return m ? decodeURIComponent(m[1]) : undefined;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function RuntimeAccessForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setMessage("");

    try {
      const res = await fetch("/api/runtime-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          hutk: getHutk(),
          pageUri: typeof window !== "undefined" ? window.location.href : undefined,
          pageName: "Vortex Runtime, early access",
        }),
      });
      const body = await res.json().catch(() => ({}));

      if (res.ok && body.ok) {
        setStatus("success");
        setMessage("You are on the list. We will be in touch when the private beta opens.");
        setEmail("");
        return;
      }

      // Graceful fallback: form not wired up yet, or a transient error.
      setStatus("error");
      setMessage(
        body.error === "not-configured"
          ? "We are still setting this up. Email hello@vortexiq.ai and we will add you."
          : "Something went wrong. Please try again, or email hello@vortexiq.ai.",
      );
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again, or email hello@vortexiq.ai.");
    }
  }

  if (status === "success") {
    return (
      <p className="capture-done" role="status">
        {message}
      </p>
    );
  }

  return (
    <>
      <form className="capture" onSubmit={onSubmit} noValidate>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourstore.com"
          aria-label="Email address"
          required
          disabled={status === "submitting"}
        />
        <button className="btn primary" type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Request early access"}
        </button>
      </form>
      {status === "error" ? (
        <p className="capture-error" role="alert">
          {message}
        </p>
      ) : null}
    </>
  );
}
