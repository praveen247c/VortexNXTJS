import { NextResponse } from "next/server";

// Brochure-request form handler. Posts the submission to HubSpot via the Forms
// Submission API v3, so the contact is created/updated in the portal and any
// HubSpot workflow (e.g. the auto-reply that emails the brochure) fires.
//
// Config comes from env vars (set these in Vercel):
//   HUBSPOT_PORTAL_ID           e.g. 24385350
//   HUBSPOT_BROCHURE_FORM_GUID  the GUID of the HubSpot form to submit into
// The portal id falls back to the known Vortex IQ portal; the form GUID has no
// safe default, so if it is absent we return a clear error the client can show.

// Read env at build time for the module scope, but the handler re-reads at
// request time (below) so a runtime-only env var is always picked up.
type Payload = {
  name?: string;
  email?: string;
  company?: string;
  // hutk = HubSpot tracking cookie, if present, links the submission to the
  // visitor's analytics session. Optional.
  hutk?: string;
  pageUri?: string;
  pageName?: string;
};

export async function POST(request: Request) {
  // Read at request time so a runtime env var is always honoured.
  const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID ?? "24385350";
  const FORM_GUID = process.env.HUBSPOT_BROCHURE_FORM_GUID;

  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const email = (data.email || "").trim();
  const fullName = (data.name || "").trim();
  const company = (data.company || "").trim();

  // Basic validation, keep it lenient; HubSpot does its own validation too.
  if (!email || !/.+@.+\..+/.test(email)) {
    return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
  }

  if (!FORM_GUID) {
    // Misconfiguration: env var not set. Don't 500 silently; tell the caller so
    // the form can fall back to the mailto path.
    return NextResponse.json(
      { ok: false, error: "not-configured", message: "Brochure form is not configured yet." },
      { status: 503 },
    );
  }

  // HubSpot's default contact fields. Split the full name into first/last.
  const [firstname, ...rest] = fullName.split(" ").filter(Boolean);
  const lastname = rest.join(" ");

  const fields: { name: string; value: string }[] = [
    { name: "email", value: email },
  ];
  if (firstname) fields.push({ name: "firstname", value: firstname });
  if (lastname) fields.push({ name: "lastname", value: lastname });
  if (company) fields.push({ name: "company", value: company });

  const hsBody: Record<string, unknown> = {
    fields,
    context: {
      pageUri: data.pageUri || "https://www.vortexiq.ai/join-viq",
      pageName: data.pageName || "Join VIQ, brochure request",
      ...(data.hutk ? { hutk: data.hutk } : {}),
    },
  };

  const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hsBody),
      // Don't cache form submissions.
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
