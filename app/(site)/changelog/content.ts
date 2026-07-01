export const css = `
/* ===== Changelog (built on the shared design system) ===== */
.changelog-page .cl-hero{max-width:820px}
.changelog-page .cl-hero h1{margin:0 0 1.4rem}

/* placeholder notice — REMOVE once real entries are added */
.changelog-page .cl-placeholder{display:flex;gap:.8rem;align-items:flex-start;max-width:820px;margin:2rem 0 0;font-size:.9rem;color:var(--text-body);line-height:1.55;background:var(--surface-soft);border:1px dashed var(--border-brand);border-radius:12px;padding:1.1rem 1.3rem}
.changelog-page .cl-placeholder svg{width:18px;height:18px;flex:none;color:var(--brand-purple);margin-top:2px}
.changelog-page .cl-placeholder b{color:var(--primary)}

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
  ============================================================================
  CHANGELOG — STRUCTURE ONLY.
  The entries below are LABELLED PLACEHOLDERS. Replace each with a real, dated
  release from engineering before this page goes live. Keep the format:
    <div class="cl-entry">
      <span class="cl-date">DD Month YYYY</span>
      <h3>Release title</h3>
      <div class="cl-tags"><span class="cl-tag">New</span> ...</div>
      <ul><li>What shipped, in one honest line.</li></ul>
    </div>
  Tag vocabulary: New · Improved · Fixed · Connector · Breaking (with notice window).
  Do NOT invent releases. Remove the .cl-placeholder notice when real data is in.
  ============================================================================
*/
export const html = `<div class="changelog-page">

  <!-- HERO -->
  <section class="section section--hero">
    <div class="container">
      <div class="cl-hero">
        <div class="eyebrow reveal">Changelog</div>
        <h1 class="reveal">What&rsquo;s <em class="hl">shipping</em> in the AI OS.</h1>
        <p class="lede reveal">New connectors, capabilities and fixes, dated as they ship. Breaking changes are announced with notice. For the API deprecation policy and technical detail, see the developer docs.</p>
        <div class="cl-placeholder reveal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>
          <span><b>Placeholder content.</b> The entries below are a template. Engineering to replace them with the real, dated release history before publishing. Nothing here is a live release.</span>
        </div>
      </div>
    </div>
  </section>

  <!-- FEED (PLACEHOLDER ENTRIES) -->
  <section class="section">
    <div class="container">
      <div class="cl-feed reveal">

        <div class="cl-entry">
          <span class="cl-date">[ Month YYYY ]</span>
          <h3>[ Release title, e.g. &ldquo;New connector: Klaviyo&rdquo; ]</h3>
          <div class="cl-tags"><span class="cl-tag">Connector</span></div>
          <ul>
            <li>[ One honest line describing what shipped and what it lets a merchant do. ]</li>
          </ul>
        </div>

        <div class="cl-entry">
          <span class="cl-date">[ Month YYYY ]</span>
          <h3>[ Release title, e.g. &ldquo;Ranked fixes now show revenue at stake&rdquo; ]</h3>
          <div class="cl-tags"><span class="cl-tag">New</span> <span class="cl-tag">Improved</span></div>
          <ul>
            <li>[ What changed. ]</li>
            <li>[ Any follow-on improvement. ]</li>
          </ul>
        </div>

        <div class="cl-entry">
          <span class="cl-date">[ Month YYYY ]</span>
          <h3>[ Release title ]</h3>
          <div class="cl-tags"><span class="cl-tag">Fixed</span></div>
          <ul>
            <li>[ What was fixed. ]</li>
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
