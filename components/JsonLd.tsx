/**
 * Renders a JSON-LD <script> block. Server component — safe to drop anywhere in the tree.
 * `data` is serialized as-is; keep values plain (no functions/undefined cycles).
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe inside a JSON-LD script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
