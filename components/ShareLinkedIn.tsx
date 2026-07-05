import { absoluteUrl } from "@/lib/site";

/**
 * Plain link to LinkedIn's share-offsite endpoint, not LinkedIn's `in.js`
 * plugin. Same result (opens LinkedIn's share dialog), zero third-party
 * script weight, and nothing for an ad-blocker to strip.
 */
export default function ShareLinkedIn({ path }: { path: string }) {
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    absoluteUrl(path)
  )}`;
  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="share-linkedin"
      aria-label="Share on LinkedIn"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="15" height="15">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0z" />
      </svg>
      Share on LinkedIn
    </a>
  );
}
