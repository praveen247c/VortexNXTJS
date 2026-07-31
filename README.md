# This repo is retired

The live VortexNXTJS site is built and deployed from **[royalschoolofmgt/VortexNXTJS](https://github.com/royalschoolofmgt/VortexNXTJS)**. This repository (`praveen247c/VortexNXTJS`) shares no commit history with it and nothing deploys from here. It existed as a personal working copy while the two diverged; that divergence was reconciled on 31 July 2026 (see the org repo's PR #2, #3, #4, #5).

## If you are looking for something that used to be here

Everything of value was ported across:

- **Portable Text table support** (`sanity/schemaTypes/blockContentType.ts`, `components/PortableText.tsx`, `app/globals.css`) — [PR #4](https://github.com/royalschoolofmgt/VortexNXTJS/pull/4).
- **`scripts/create-eight-roles-post.mjs`** was deliberately **not** ported. It targets a post that is now live and hand-edited (`/resources/blog/eight-roles-not-eight-hires`), and the script's `createOrReplace` call would silently overwrite the published body and re-date the post. If you need it, read it here first and adapt it rather than running it as-is — see the note in PR #4 on the org repo for the full hazard analysis.

Everything else this repo carried (the newer `vortex-runtime` design-system rewrite, the brochure PDF flow, the careers/contact fixes) was already ahead on the org repo, which is why the reconciliation only needed to pull four files this direction.

## Where to work now

Clone `royalschoolofmgt/VortexNXTJS`, branch off `main` (the default branch as of 31 July 2026), and open PRs there. Production deploys from `main` on Vercel.
