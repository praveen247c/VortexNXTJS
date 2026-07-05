export const css = `
/* ===== Changelog (built on the shared design system) ===== */
.changelog-page .cl-hero{max-width:820px}
.changelog-page .cl-hero h1{margin:0 0 1.4rem}

/* timeline */
.changelog-page .cl-feed{max-width:820px;margin-top:2rem;border-left:2px solid var(--border-dark);padding-left:1.8rem}
.changelog-page .cl-entry{position:relative;padding-bottom:2.2rem}
.changelog-page .cl-entry:last-child{padding-bottom:0}
.changelog-page .cl-entry::before{content:"";position:absolute;left:-2.28rem;top:.35rem;width:12px;height:12px;border-radius:50%;background:var(--brand-purple);border:3px solid var(--white);box-shadow:0 0 0 1px var(--border-brand)}
.changelog-page .cl-date{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--text-faded)}
.changelog-page .cl-entry h3{font-family:var(--font-heading);font-size:1.15rem;color:var(--primary);margin:.35rem 0 .6rem;letter-spacing:-.01em}
.changelog-page .cl-tags{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:.7rem}
.changelog-page .cl-tag{font-family:var(--font-mono);font-size:.64rem;letter-spacing:.06em;text-transform:uppercase;padding:.18rem .5rem;border-radius:999px;border:1px solid var(--border-brand);color:var(--brand-purple);background:var(--surface-tint)}
.changelog-page .cl-entry ul{margin:0;padding-left:1.1rem;color:var(--text-body)}
.changelog-page .cl-entry li{margin:.4rem 0;line-height:1.55;font-size:.94rem}
`;

/*
  Sourced from the product engineering repo's commit history (Jan-Jun 2026),
  filtered to merchant-visible capability. Each entry is a monthly digest,
  not an exhaustive release log; see the developer docs for full API history.
  Tag vocabulary: New · Improved · Fixed · Connector · Breaking (with notice window).
*/
export const html = `<div class="changelog-page">

  <!-- HERO -->
  <section class="section section--hero">
    <div class="container">
      <div class="cl-hero">
        <div class="eyebrow reveal">Changelog</div>
        <h1 class="reveal">What&rsquo;s <em class="hl">shipping</em> in the AI OS.</h1>
        <p class="lede reveal">New connectors, capabilities and fixes, dated as they ship. Breaking changes are announced with notice. For the API deprecation policy and technical detail, see the developer docs.</p>
      </div>
    </div>
  </section>

  <!-- FEED -->
  <section class="section">
    <div class="container">
      <div class="cl-feed reveal">

        <div class="cl-entry">
          <span class="cl-date">June 2026</span>
          <h3>Store migration, real-time Ask Viq, and an AI fix agent that knows its limits</h3>
          <div class="cl-tags"><span class="cl-tag">New</span> <span class="cl-tag">Connector</span> <span class="cl-tag">Improved</span></div>
          <ul>
            <li>A new Store Migration workspace lets you pick exactly which BigCommerce items to migrate, choose how conflicts are resolved, and roll back to a prior version.</li>
            <li>Ask Viq now streams answers in real time and can be stopped mid-run. A new AI Fix agent can act on audit findings directly, and refuses to auto-apply sensitive price changes, offering a manual-review download instead.</li>
            <li>Meta, Google and Amazon Ads now share one console with sortable, optimisation-focused performance tables.</li>
            <li>A wave of new connectors landed: Adyen, HubSpot, WordPress, Intercom, NetSuite, Snowflake, Amplitude, Meta Ads, TikTok Ads, Pinterest Ads, Quora Ads, Mailchimp, Google Tag Manager and Amazon Ads/Seller Central.</li>
            <li>A single profile switcher and notification bell now live in the header on every page.</li>
          </ul>
        </div>

        <div class="cl-entry">
          <span class="cl-date">May 2026</span>
          <h3>Vortex Mind finds the revenue you are losing, and Ask Viq can act on it</h3>
          <div class="cl-tags"><span class="cl-tag">New</span> <span class="cl-tag">Connector</span></div>
          <ul>
            <li>Vortex Mind now automatically flags and explains revenue leakage: payment decline recovery, checkout failures and wasted ad spend, unified into one Decline &amp; Recovery card.</li>
            <li>Ask Viq can turn any chat answer into a tracked task on your board, and attempt a one-click automatic fix.</li>
            <li>Nerve Centre now monitors databases, ERPs, marketplaces, ad networks and shipping carriers, not just your storefront.</li>
            <li>Connect Jira, Trello, Asana, HubSpot, Zendesk and more directly from the dashboard.</li>
            <li>RollbackPro adds point-in-time and selective bulk restore.</li>
          </ul>
        </div>

        <div class="cl-entry">
          <span class="cl-date">April 2026</span>
          <h3>Ask Viq rebuilt, StagingPro and RollbackPro launch, and Store Audit learns to fix itself</h3>
          <div class="cl-tags"><span class="cl-tag">New</span> <span class="cl-tag">Connector</span> <span class="cl-tag">Improved</span></div>
          <ul>
            <li>Ask Viq was rebuilt as a full AI store analyst that draws on every connected data source in one chat.</li>
            <li>StagingPro and RollbackPro launched for Shopify and BigCommerce merchants: a unified staging, backup and rollback toolkit.</li>
            <li>Store Audit gained a fix-execution system, so recommended fixes can be applied automatically and safely rolled back, plus full Adobe Commerce/Magento audit parity and new Amazon seller health checks.</li>
            <li>Vortex Mind can now schedule AI-generated cohort, retention and QBR-style reports, delivered by email, Slack or Teams.</li>
            <li>The connector marketplace expanded by over 100 integrations in a single release.</li>
            <li>The main dashboard was rebuilt for real-time streaming, growing to 495+ KPI cards while loading almost instantly.</li>
          </ul>
        </div>

        <div class="cl-entry">
          <span class="cl-date">March 2026</span>
          <h3>Nerve Centre goes portfolio-wide, and reports get an AI upgrade</h3>
          <div class="cl-tags"><span class="cl-tag">New</span> <span class="cl-tag">Improved</span> <span class="cl-tag">Connector</span></div>
          <ul>
            <li>Nerve Centre V2 launched: a profile-based dashboard for building custom views and seeing a portfolio across every connected store in one screen.</li>
            <li>Health alerts now notify by email with AI-suggested thresholds, so problems surface before you go looking for them.</li>
            <li>Reports moved to a new engine built on Claude, added an optional AI-generated podcast version, and are now one click to generate.</li>
            <li>Adobe Commerce support expanded across Insights, scheduled Reports and KPI dashboards.</li>
          </ul>
        </div>

        <div class="cl-entry">
          <span class="cl-date">February 2026</span>
          <h3>Nerve Centre explains itself, and staging gets a one-click Shopify flow</h3>
          <div class="cl-tags"><span class="cl-tag">New</span> <span class="cl-tag">Improved</span> <span class="cl-tag">Connector</span></div>
          <ul>
            <li>Every KPI in Nerve Centre now shows a Metric Intelligence panel explaining what it measures, how, and what to do about it.</li>
            <li>StagingPro added multi-environment support and a one-click replica flow for Shopify.</li>
            <li>Connectors can now authenticate via SSO, and Datadog joined the connector library.</li>
            <li>The KPI dashboard got materially faster and more reliable after a round of performance and data-accuracy fixes.</li>
          </ul>
        </div>

        <div class="cl-entry">
          <span class="cl-date">January 2026</span>
          <h3>New monitoring connectors, and the first VIQ Backup and StagingPro launches</h3>
          <div class="cl-tags"><span class="cl-tag">New</span> <span class="cl-tag">Connector</span> <span class="cl-tag">Fixed</span></div>
          <ul>
            <li>New Relic, Dotdigital, Stripe and PayPal connectors brought performance, email and revenue KPIs into Nerve Centre.</li>
            <li>VIQ Backup launched for Shopify and BigCommerce, and StagingPro shipped its first BigCommerce connector.</li>
            <li>Adobe Commerce connections got clearer error messages and a manual-token fallback for OAuth issues.</li>
            <li>Search was added to the connectors page, now covering 200+ integrations.</li>
          </ul>
        </div>

      </div>

      <div class="cta-row reveal" style="margin-top:2.6rem">
        <a class="btn btn--ghost" href="https://docs.vortexiq.ai/" target="_blank" rel="noopener noreferrer">Developer docs &amp; API changes &rarr;</a>
        <a class="textlink" href="/trust/limits">See our limits &amp; guardrails &rarr;</a>
      </div>
    </div>
  </section>

</div>`;
