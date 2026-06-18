import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // `useCdn: true` serves cached content fast; ISR keeps pages fresh.
  useCdn: true,
});
