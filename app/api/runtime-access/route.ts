import { NextResponse } from "next/server";

// Vortex Runtime early-access capture. Posts the submission to HubSpot via the
// Forms Submission API v3 (same pattern as app/api/brochure/route.ts), so the
// contact is created/updated in the portal and any HubSpot workflow fires.
//
// Config comes from env vars (set these in Vercel):
//   HUBSPOT_PORTAL_ID          e.g. 24385350 (falls back to the known VIQ portal)
//   HUBSPOT_RUNTIME_FORM_GUID  the GUID of the HubSpot form to submit into
// To avoid any new HubSpot setup, this defaults to the SAME form GUID the live
// contact-us page uses ("Send us a message"), so early-access emails land as
// contacts in the existing portal. Set HUBSPOT_RUNTIME_FORM_GUID later to point
// at a dedicated form without a code change. The submission is tagged with the
// source via `context.pageName` (not a form field, so it can't cause a
// required/unknown-field mismatch).

// The live contact-us form ("Send us a message") — see app/(site)/contact-us/ContactForm.tsx.
const CONTACT_US_FORM_GUID = "653fc8dd-9988-4be8-b0c0-6e465e4b870a";

type Payload = {
  email?: string;
  // hutk = HubSpot tracking cookie, links the submission to the visitor's
  // analytics session when present. Optional.
  hutk?: string;
  pageUri?: string;
  pageName?: string;
};

export async function POST(request: Request) {
  // Read at request time so a runtime-only env var is always honoured.
  const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID ?? "24385350";
  // Default to the contact-us form so no new HubSpot form is needed.
  const FORM_GUID = process.env.HUBSPOT_RUNTIME_FORM_GUID || CONTACT_US_FORM_GUID;

  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const email = (data.email || "").trim();

  // Basic validation, kept lenient; HubSpot validates too.
  if (!email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
  }

  if (!FORM_GUID) {
    // Misconfiguration: env var not set. Don't 500 silently; tell the caller so
    // the form can show its fallback (email us) instead of a broken submit.
    return NextResponse.json(
      { ok: false, error: "not-configured", message: "Early-access form is not configured yet." },
      { status: 503 },
    );
  }

  const fields: { name: string; value: string }[] = [{ name: "email", value: email }];

  const hsBody: Record<string, unknown> = {
    fields,
    context: {
      pageUri: data.pageUri || "https://www.vortexiq.ai/vortex-runtime",
      pageName: data.pageName || "Vortex Runtime, early access",
      ...(data.hutk ? { hutk: data.hutk } : {}),
    },
  };

  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hsBody),
      cache: "no-store",
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: "hubspot-error", status: res.status, detail: detail.slice(0, 500) },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "network", message: err instanceof Error ? err.message : "Request failed." },
      { status: 502 },
    );
  }
}
