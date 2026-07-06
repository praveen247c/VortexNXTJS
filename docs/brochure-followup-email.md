# Brochure follow-up email (HubSpot)

The email HubSpot sends to a person who submits the brochure request form on
`/join-viq`. Set it up as a form follow-up email, or a workflow triggered by a
submission of the brochure form (see docs/README.md).

The brochure PDF is hosted on the site:
`https://www.vortexiq.ai/downloads/VortexIQ-Brochure.pdf` (source file in the
repo at `public/downloads/VortexIQ-Brochure.pdf`). Attach it or link that URL,
plus the on-site page `https://www.vortexiq.ai/join-viq/brochure`. Tone matches
the brand: warm, concrete, no em dashes, no banned phrases. Personalisation
tokens use HubSpot's `{{ contact.firstname }}` syntax; adjust to your portal's
token names.

---

## Version A: PDF attached / linked (recommended)

**Subject:** Your Vortex IQ brochure, {{ contact.firstname }}

**Preview text:** The AI Operating System for e-commerce, in one read.

**Body:**

Hi {{ contact.firstname }},

Thanks for requesting the Vortex IQ brochure. It is attached, and you can also download it or read it online any time:

**Download the PDF:** https://www.vortexiq.ai/downloads/VortexIQ-Brochure.pdf

**Read the brochure:** https://www.vortexiq.ai/join-viq/brochure

Inside, in a few minutes:

- The six pillars, and what you actually get from each
- How the detect, diagnose, act, deploy, learn loop runs on your store
- SEO and GEO at scale, our most-demanded engine
- How we keep it safe on live revenue: staging-first, one-click rollback, full audit trail
- The proof, and how you start

The honest way to know what Vortex IQ will find is to point it at your store. When you are ready, run a free audit and see your findings ranked by the revenue at stake, usually within the hour.

**Run a free audit:** https://www.vortexiq.ai/free-audit

Any questions, just reply to this email.

Detect. Explain. Fix. From one operating system.

The Vortex IQ team

---

## Version B: short, link-only (if not attaching the PDF)

**Subject:** Your Vortex IQ brochure is ready

**Preview text:** Read it online now, PDF inside.

**Body:**

Hi {{ contact.firstname }},

Here is the Vortex IQ brochure you asked for. Download the PDF, or read the whole thing online in a couple of minutes:

**Download the PDF:** https://www.vortexiq.ai/downloads/VortexIQ-Brochure.pdf

**Read the brochure:** https://www.vortexiq.ai/join-viq/brochure

It walks through the platform, the six pillars, SEO and GEO, security, and how you start, with the proof behind each claim.

When you want to see it on your own store, a free audit shows exactly where the revenue sits, ranked by impact.

**Run a free audit:** https://www.vortexiq.ai/free-audit

Reply any time with questions.

The Vortex IQ team

---

## Internal notification (optional tidy-up)

HubSpot already emails `marketing@vortexiq.ai` on each submission (the "You've
got a new submission" notification). That is separate from the emails above and
is working. If the volume gets noisy, route it to a specific owner or a Slack
channel via a workflow instead of the default notification.
