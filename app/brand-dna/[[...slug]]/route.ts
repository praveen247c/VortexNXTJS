// The old Webflow /brand-dna/* cluster (18,000+ generated pages, 837 of the
// GSC top-1000) was retired in the migration. Serving 410 Gone (not 404) tells
// Google to drop them from the index quickly and stops the crawl-error bloat.
// The handful of URLs that had real clicks are 301'd to /free-audit in
// next.config.mjs, which runs before this route.
const BODY = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Gone | Vortex IQ</title>
<meta name="robots" content="noindex">
</head>
<body>
<h1>410 Gone</h1>
<p>This page has been permanently removed.</p>
<p><a href="/free-audit">Run a free store audit</a> or go to <a href="/">vortexiq.ai</a>.</p>
</body>
</html>`;

export function GET() {
  return new Response(BODY, {
    status: 410,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex",
    },
  });
}
