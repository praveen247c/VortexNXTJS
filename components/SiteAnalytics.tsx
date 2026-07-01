import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

/**
 * ⚠️  SITE-WIDE ANALYTICS & TRACKING — DO NOT REMOVE OR EDIT IDs WITHOUT SIGN-OFF.
 *
 * All four of the site's tracking tools live here, in one place, so a change to
 * the layout can't accidentally drop one. This component is rendered once, from
 * the root layout (app/layout.tsx), so every page gets all four.
 *
 * Tools (verified live on www.vortexiq.ai):
 *   1. Google Analytics 4   — stream "Vortex IQ Website", property 404090504
 *                             ID: G-5LM3LFL3QL (via NEXT_PUBLIC_GA_ID on Vercel)
 *   2. HubSpot              — portal 24385350 (marketing analytics)
 *   3. Leadfeeder/Dealfront — tracker p1e024BqoPQ7GB6d (visitor identification)
 *   4. Vercel Web Analytics — page views & visitors (Vercel dashboard)
 *
 * If you touch this file: keep all four, keep the IDs exact, and re-verify on the
 * live site after deploy (each script must load before </body>).
 */

// GA4 measurement ID. Reads NEXT_PUBLIC_GA_ID (set on Vercel); falls back to the
// known Vortex IQ Website stream so tracking keeps firing even if the env var is
// absent in a given environment.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-5LM3LFL3QL";

// Leadfeeder / Dealfront tracker id.
const LEADFEEDER_ID = "p1e024BqoPQ7GB6d";

// HubSpot portal id.
const HUBSPOT_PORTAL_ID = "24385350";

export default function SiteAnalytics() {
  return (
    <>
      {/* 1. Google Analytics 4 (Vortex IQ Website stream) */}
      {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}

      {/* 2. HubSpot tracking code — site-wide analytics loader */}
      <Script
        id="hs-script-loader"
        src={`//js.hs-scripts.com/${HUBSPOT_PORTAL_ID}.js`}
        strategy="afterInteractive"
      />

      {/* 3. Leadfeeder / Dealfront visitor identification */}
      <Script id="ld-tracker" strategy="afterInteractive">
        {`(function(ss,ex){ window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));}; (function(d,s){ fs=d.getElementsByTagName(s)[0]; function ce(src){ var cs=d.createElement(s); cs.src=src; cs.async=1; fs.parentNode.insertBefore(cs,fs); }; ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js'); })(document,'script'); })('${LEADFEEDER_ID}');`}
      </Script>

      {/* 4. Vercel Web Analytics — page views & visitors */}
      <VercelAnalytics />
    </>
  );
}
