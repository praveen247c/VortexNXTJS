import { defineCliConfig } from "sanity/cli";

import { dataset, projectId } from "./sanity/env";

export default defineCliConfig({
  api: { projectId, dataset },
  // Enables the App Router auto-detect for `sanity` CLI commands.
  autoUpdates: true,
});
