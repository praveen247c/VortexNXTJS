export const css = `
/* ===== Limits & Guardrails (built on the shared design system) ===== */
.limits-page .limits-hero{max-width:820px}
.limits-page .limits-hero h1{margin:0 0 1.4rem}

/* never-without-approval list */
.limits-page .rule-list{display:flex;flex-direction:column;gap:.9rem;margin-top:1.6rem}
.limits-page .rule{display:grid;grid-template-columns:auto 1fr;gap:1rem;align-items:start;background:var(--white);border:1px solid var(--border-dark);border-radius:14px;padding:1.2rem 1.4rem}
.limits-page .rule .ic{width:34px;height:34px;border-radius:9px;background:var(--surface-tint);border:1px solid var(--border-brand);display:flex;align-items:center;justify-content:center;color:var(--brand-purple);flex:none}
.limits-page .rule .ic svg{width:18px;height:18px}
.limits-page .rule b{font-family:var(--font-heading);font-size:1rem;color:var(--primary);display:block;margin-bottom:.25rem}
.limits-page .rule p{font-size:.9rem;color:var(--text-body);line-height:1.5;margin:0}

/* who it's for / not for */
.limits-page .fit-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--bento-gap);margin-top:1.6rem}
.limits-page .fit-card{background:var(--white);border:1px solid var(--border-dark);border-radius:16px;padding:1.6rem 1.8rem}
.limits-page .fit-card.is-for{border-color:var(--border-brand);background:var(--surface-tint)}
.limits-page .fit-card h3{font-family:var(--font-heading);font-size:1.1rem;color:var(--primary);margin:0 0 1rem}
.limits-page .fit-card ul{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:.7rem}
.limits-page .fit-card li{display:grid;grid-template-columns:auto 1fr;gap:.6rem;font-size:.92rem;color:var(--text-body);line-height:1.5}
.limits-page .fit-card li .m{font-weight:700;color:var(--brand-purple)}
.limits-page .fit-card.not-for li .m{color:var(--text-faded)}
@media(max-width:820px){.limits-page .fit-grid{grid-template-columns:1fr}}

/* honest limitations */
.limits-page .lim-list{max-width:820px;margin-top:1.6rem}
.limits-page .lim-list details{background:var(--white);border:1px solid var(--border-dark);border-radius:12px;padding:0 1.3rem;margin-bottom:.7rem}
.limits-page .lim-list summary{font-family:var(--font-heading);font-weight:600;font-size:1rem;color:var(--primary);cursor:pointer;padding:1.1rem 0;list-style:none}
.limits-page .lim-list summary::-webkit-details-marker{display:none}
.limits-page .lim-list p{font-size:.92rem;color:var(--text-body);line-height:1.6;margin:0 0 1.1rem}
`;

export const html = `<div class="limits-page">

  <!-- HERO -->
  <section class="section section--hero">
    <div class="container">
      <div class="limits-hero">
        <div class="eyebrow reveal">Limits &amp; guardrails</div>
        <h1 class="reveal">What Vortex IQ will <em class="hl">never do without you</em>, and who we are not for.</h1>
        <p class="lede reveal">A system that acts on live revenue has to be honest about its edges. This page states plainly what the AI will never do on its own, where we are the wrong fit, and the limitations we are still working on. If the product is a good fit, you should know exactly why. If it isn&rsquo;t, you should know that too.</p>
      </div>
    </div>
  </section>

  <!-- NEVER WITHOUT APPROVAL -->
  <section class="section section--soft">
    <div class="container" style="max-width:900px">
      <div class="eyebrow reveal">The hard rules</div>
      <h2 class="reveal" style="max-width:24ch">What the agent will never do without your approval.</h2>
      <div class="rule-list reveal">
        <div class="rule">
          <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 L20 6 V12 C20 17 16.5 20.5 12 22 C7.5 20.5 4 17 4 12 V6 Z"/><path d="M9 12 l2 2 4-4"/></svg></span>
          <div><b>Ship a change to live revenue unattended</b><p>Every change waits for a human to approve it before it goes live. On BigCommerce, Shopify and Adobe Commerce, changes are previewed on a production-parity staging copy first. Nothing goes live unless you approve it, or you explicitly choose to automate a specific, bounded action.</p></div>
        </div>
        <div class="rule">
          <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12 a8 8 0 0 1 14-5"/><path d="M18 4 v3 h-3"/><path d="M20 12 a8 8 0 0 1-14 5"/><path d="M6 20 v-3 h3"/></svg></span>
          <div><b>Make a change you cannot undo</b><p>Every action is backed by a continuous backup and one-click rollback. If a fix does not do what you expected, you have a recent restore point to roll back to.</p></div>
        </div>
        <div class="rule">
          <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 10 V8 a6 6 0 0 1 12 0 v2"/><rect x="4" y="10" width="16" height="10" rx="2"/></svg></span>
          <div><b>Act beyond the access you granted</b><p>Connectors run on least-privilege scopes. Vortex IQ is read-only by default, and any write access is explicit, scoped, and revocable. It does not reach outside what you connected.</p></div>
        </div>
        <div class="rule">
          <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 v6"/><path d="M5 12 a7 7 0 0 0 14 0"/><path d="M9 21 h6"/></svg></span>
          <div><b>Train shared AI models on your data</b><p>Your data powers your own insights and recommendations. It is not used to train models shared with other customers.</p></div>
        </div>
        <div class="rule">
          <span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6 h18"/><path d="M8 6 V4 h8 v2"/><path d="M6 6 l1 14 h10 l1-14"/></svg></span>
          <div><b>Hide what it did</b><p>Every action, approval and rollback is written to a full audit trail. You can always see what changed, who approved it, and when.</p></div>
        </div>
      </div>
      <p class="reveal" style="margin-top:1.6rem"><span class="chip"><span class="dot"></span> Read-only by default &middot; Approval-gated &middot; One-click rollback &middot; Full audit trail</span></p>
    </div>
  </section>

  <!-- WHO IT'S FOR / NOT FOR -->
  <section class="section">
    <div class="container">
      <div class="eyebrow reveal">Honest fit</div>
      <h2 class="reveal" style="max-width:22ch">Who Vortex IQ is for, and who it is not.</h2>
      <div class="fit-grid reveal">
        <div class="fit-card is-for">
          <h3>A strong fit if you&hellip;</h3>
          <ul>
            <li><span class="m">&#10003;</span><span>Run a store on BigCommerce, Shopify, Adobe Commerce or WooCommerce.</span></li>
            <li><span class="m">&#10003;</span><span>Use several tools around your store and lose time watching them all.</span></li>
            <li><span class="m">&#10003;</span><span>Want to catch revenue leaks early and fix them safely, with approval.</span></li>
            <li><span class="m">&#10003;</span><span>Value an audit trail and reversibility over move-fast-and-break-things.</span></li>
          </ul>
        </div>
        <div class="fit-card not-for">
          <h3>Probably not for you if you&hellip;</h3>
          <ul>
            <li><span class="m">&times;</span><span>Are on a platform we do not yet support, and cannot connect your stack.</span></li>
            <li><span class="m">&times;</span><span>Want a fully autonomous agent that ships to live revenue with no human in the loop. By design, we keep you in control.</span></li>
            <li><span class="m">&times;</span><span>Are looking for a replacement storefront, PIM or ERP. We are the operating layer on top, not a re-platform.</span></li>
            <li><span class="m">&times;</span><span>Need a guaranteed revenue-uplift number before any measurement. We give a range, then verify on your store.</span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- HONEST LIMITATIONS -->
  <section class="section section--soft">
    <div class="container">
      <div class="eyebrow reveal">Known limitations</div>
      <h2 class="reveal" style="max-width:24ch">What we are still honest about.</h2>
      <div class="lim-list reveal">
        <details>
          <summary>We show ranges, not guarantees.</summary>
          <p>Any estimate of revenue at stake or hours saved is illustrative, built on conservative, publicly-sourced multipliers and your own inputs. The only honest number is the one we measure on your store, which is what the free audit is for.</p>
        </details>
        <details>
          <summary>The live connector count is what is live, not a roadmap total.</summary>
          <p>When we state a number of connectors, we mean the ones live today. Anything planned is labelled roadmap, not counted as if it already ships.</p>
        </details>
        <details>
          <summary>Autonomy is opt-in and bounded.</summary>
          <p>The default posture is human-in-the-loop. You can choose to automate specific, low-risk actions, but the system does not decide on its own to remove that approval step.</p>
        </details>
        <details>
          <summary>We do not overstate certifications.</summary>
          <p>We are ISO 27001 certified. SOC 2 is in progress, and we say &ldquo;in progress&rdquo; rather than implying a completion date we cannot yet commit to. See the Trust Centre for current status.</p>
        </details>
      </div>
      <div class="cta-row reveal" style="margin-top:2.4rem">
        <a class="btn" href="/trust/trust-center">Visit the Trust Centre &rarr;</a>
        <a class="btn btn--ghost" href="/contact-us">Talk to us about fit</a>
      </div>
    </div>
  </section>

</div>`;
