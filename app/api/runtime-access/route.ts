import { NextResponse } from "next/server";

// Vortex Runtime early-access capture. Posts the submission to HubSpot via the
// Forms Submission API v3 (same pattern as app/api/brochure/route.ts), so the
// contact is created/updated in the portal and any HubSpot workflow fires.
//
// Config (set in Vercel):
//   HUBSPOT_PORTAL_ID          e.g. 24385350 (falls back to the known VIQ portal)
//   HUBSPOT_RUNTIME_FORM_GUID  the GUID of the HubSpot form to submit into
//
// NOTE: this needs a form whose ONLY required field is Email. We deliberately do
// NOT reuse the contact-us form ("Send us a message") — that form also requires
// firstname, lastname, mobilephone and reason_for_contact, so an email-only
// submit is rejected. Create a simple email-only form in HubSpot and set
// HUBSPOT_RUNTIME_FORM_GUID. Until it is set, the route returns "not-configured"
// and the page shows a graceful "email us" message instead of an error.

export async function POST(request: Request) {
  // Read at request time so a runtime-only env var is always honoured.
  const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID ?? "24385350";
  const FORM_GUID = process.env.HUBSPOT_RUNTIME_FORM_GUID;

  let data: { email?: string; hutk?: string; pageUri?: string; pageName?: string };
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
    // Env var not set yet. Tell the caller so the form shows its graceful
    // "email us" fallback rather than a broken submit.
    return NextResponse.json(
      { ok: false, error: "not-configured", message: "Early-access form is not configured yet." },
      { status: 503 },
    );
  }

  const hsBody: Record<string, unknown> = {
    fields: [{ name: "email", value: email }],
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
