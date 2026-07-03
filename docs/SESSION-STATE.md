# Session state — as of 3 July 2026

Snapshot before a VS Code reboot. Everything below is committed and deployed to
Production unless flagged otherwise.

## Git / deploy

- Branches `audit-fixes` and `Praveen` are in sync at HEAD `7704339`. Working tree clean.
- **`Praveen` is the Vercel Production branch.** Flow: commit on `audit-fixes` → `git merge --ff-only` into `Praveen` → push both.
- Vercel env vars (Production): `NEXT_PUBLIC_GA_ID=G-5LM3LFL3QL`, `HUBSPOT_PORTAL_ID=24385350`, `HUBSPOT_BROCHURE_FORM_GUID=c0d9d6a9-a0f5-4126-a62b-535b19ebcd2e`.
- Saving a Vercel env var does not redeploy; a cache-reusing "Redeploy" keeps the old value. To force a fresh build: push an empty commit.
- Verify deploys by curling the live URL. `scripts/` is excluded from tsconfig so a stale type error there doesn't fail the build.

## Done this session (live on www.vortexiq.ai)

1. **Analytics:** 4 trackers consolidated in `components/SiteAnalytics.tsx` (GA4, HubSpot, Leadfeeder `p1e024BqoPQ7GB6d`, Vercel Analytics). All verified live.
2. **Brochure form -> HubSpot:** `/join-viq` form posts to `app/api/brochure/route.ts` (HubSpot Forms API v3). Verified working (`{"ok":true}`). Falls back to mailto if unconfigured.
3. **On-site brochure page:** `/join-viq/brochure` (readable brochure; form success links to it).
4. **Integrations page rebuilt:** all 236 connectors with descriptions, 183 linked to `docs.vortexiq.ai/nerve-centre/kpi-cards/<slug>`. Fixed SEO: 183 server-rendered `<a>` doc links now in the prerendered HTML (were 0). Files: `connectors.ts`, `ConnectorDirectory.tsx`, `page.tsx`.
5. **Homepage:** six-pillar showcase (mechanism + outcome) + SEO/GEO spotlight band, placed below the fold; Vortex Agents card contrast fixed (white text on brand gradient).
6. **Golden-circle** page restyled dark -> light theme.
7. **Em-dash cleanup:** ~219 dashes removed from copy across 38 files (brand ToV bans them).
8. **Pillar reconciliation:** "modules" -> "pillars", "Five products" -> "One loop. Five steps." sitewide.
9. **"Soak & Sleep" removed** sitewide (customer consent pending).
10. **New pages earlier in session:** `/what-is-ai-os-for-ecommerce`, `/vs` (+ triple-whale/gorgias/shopify-sidekick), `/trust/limits`, `/stagingpro-to-ai-os`, `/press`, `/changelog` (placeholder shell), `/product-tour`, `/roi-calculator` band on homepage.
11. **BRAND_TONE_OF_VOICE.md** updated (separate repo: `C:\Users\Susant\Desktop\AgenticWorkflow\AI_DOCS\`).

## Open tasks (loose ends)

1. **Brochure PDF + HubSpot follow-up email** — waiting on designer (expected 3 July).
   - PDF from `docs/vortexiq-brochure.md` (content) + `docs/vortexiq-brochure-print.html` (open in Chrome, Print > Save as PDF).
   - Upload PDF to HubSpot > Files; create a form follow-up email/workflow using `docs/brochure-followup-email.md`; attach the PDF.
2. **Rename the HubSpot form** "New gated content form (July 2...)" -> "Brochure Request".
3. **golden-circle** is sitemap-only (not in nav/footer). Decide keep / link / drop.
4. **"world's first AI Operating System"** superlative still live; flagged risky, undecided.
5. Optional: decide if integration doc links should open in a new tab (currently do) and point at overview vs deep pages.

## Key docs in this folder

- `docs/vortexiq-brochure.md` — brochure copy
- `docs/vortexiq-brochure-print.html` — print-to-PDF layout
- `docs/brochure-followup-email.md` — HubSpot follow-up email copy
- `docs/README.md` — how the form/HubSpot integration works + activation steps
