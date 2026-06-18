import createImageUrlBuilder, {
  type SanityImageSource,
} from "@sanity/image-url";

import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

/** Loose shape that matches both query results and Portable Text image nodes. */
export type SanityImageRef = {
  asset?: { _ref: string; _type?: string };
  alt?: string;
  caption?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export function urlForImage(source: SanityImageRef) {
  return builder
    .image(source as unknown as SanityImageSource)
    .auto("format")
    .fit("max");
}
