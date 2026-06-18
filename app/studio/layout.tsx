/**
 * Studio-only layout. Renders the Studio bare — no site Header/Footer —
 * since it lives outside the `(site)` route group.
 */
export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
