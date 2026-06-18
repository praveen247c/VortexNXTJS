import { defineCliConfig } from "sanity/cli";

// Read directly from env (no throwing) so `sanity` CLI commands like
// `init` / `login` work before the project id has been set.
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
  autoUpdates: true,
});
