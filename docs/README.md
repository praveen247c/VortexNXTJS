# Marketing docs

## vortexiq-brochure.md

The Vortex IQ brochure copy, written to the current brand tone of voice
(six pillars, SEO/GEO prominent, verified proof points, no em dashes). This is
the content a designer turns into the downloadable PDF, and the source for the
brochure the `/join-viq` form delivers.

Keep it in sync with the live site: pillar names, pricing tiers, proof numbers
and the customer names (no unconsented customers) must match vortexiq.ai.

## Brochure request form: how it works and how to finish it

The form at `/join-viq#request` (component: `app/(site)/join-viq/BrochureForm.tsx`)
POSTs to `app/api/brochure/route.ts`, which submits into HubSpot via the Forms
Submission API v3.

### To activate HubSpot capture

1. In HubSpot (portal 24385350): Marketing > Forms > create a form with fields
   **email, first name, last name, company**. Copy its **Form GUID** (the
   `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` value in the form's embed/share code).
2. In Vercel > Settings > Environment Variables (Production), add:
   - `HUBSPOT_BROCHURE_FORM_GUID` = that GUID
   - `HUBSPOT_PORTAL_ID` = `24385350` (optional; already the default)
3. Redeploy so the env vars take effect.

Until the GUID is set, the API route returns 503 and the form falls back to the
original `mailto:hey@vortexiq.ai` behaviour, so no lead is lost.

### To deliver the brochure PDF automatically

The form only captures the contact. To email the PDF:

1. Produce the brochure PDF from `vortexiq-brochure.md` (design pass).
2. Upload it to HubSpot (Marketing > Files) or host it and get a link.
3. In HubSpot, create a **workflow** (or a form follow-up email) triggered by a
   submission of the brochure form. The email should attach or link the PDF.
4. Optional: also link an online version once a `/join-viq` brochure page exists.

The form success screen already tells the requester "the brochure is on its
way", so pairing it with the HubSpot follow-up closes the loop.
