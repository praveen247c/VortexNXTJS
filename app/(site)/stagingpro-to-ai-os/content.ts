export const css = `
/* ===== StagingPro -> AI OS migration (built on the shared design system) ===== */
.migrate-page .migrate-hero{max-width:820px}
.migrate-page .migrate-hero h1{margin:0 0 1.4rem}

/* what you have / what you unlock */
.migrate-page .step-band{display:grid;grid-template-columns:1fr auto 1fr;gap:1.4rem;align-items:center;margin-top:2rem}
.migrate-page .step-card{background:var(--white);border:1px solid var(--border-dark);border-radius:16px;padding:1.6rem 1.8rem}
.migrate-page .step-card.now{border-color:var(--border-brand);background:var(--surface-tint)}
.migrate-page .step-card .lbl{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--brand-purple);display:block;margin-bottom:.7rem}
.migrate-page .step-card h3{font-family:var(--font-heading);font-size:1.15rem;color:var(--primary);margin:0 0 .8rem}
.migrate-page .step-card ul{margin:0;padding-left:1.1rem;color:var(--text-body)}
.migrate-page .step-card li{margin:.45rem 0;line-height:1.5;font-size:.92rem}
.migrate-page .step-arrow{font-size:1.6rem;color:var(--brand-purple);font-weight:700}
@media(max-width:820px){
  .migrate-page .step-band{grid-template-columns:1fr}
  .migrate-page .step-arrow{transform:rotate(90deg);justify-self:center}
}

/* loop teaser */
.migrate-page .unlock-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--bento-gap);margin-top:1.6rem}
.migrate-page .unlock-card{background:var(--white);border:1px solid var(--border-dark);border-radius:14px;padding:1.4rem}
.migrate-page .unlock-card h3{font-family:var(--font-heading);font-size:1.05rem;color:var(--primary);margin:0 0 .5rem}
.migrate-page .unlock-card p{font-size:.9rem;color:var(--text-body);line-height:1.5;margin:0}
@media(max-width:820px){.migrate-page .unlock-grid{grid-template-columns:1fr}}

/* path steps */
.migrate-page .path-list{max-width:820px;margin-top:1.6rem;counter-reset:path}
.migrate-page .path-row{display:grid;grid-template-columns:auto 1fr;gap:1.1rem;align-items:start;padding:1.2rem 0;border-bottom:1px solid var(--border-dark)}
.migrate-page .path-row:last-child{border-bottom:none}
.migrate-page .path-row .num{counter-increment:path;font-family:var(--font-mono);font-size:.9rem;color:var(--white);background:var(--brand-purple);width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex:none}
.migrate-page .path-row .num::before{content:counter(path)}
.migrate-page .path-row h3{font-family:var(--font-heading);font-size:1.05rem;color:var(--primary);margin:.2rem 0 .3rem}
.migrate-page .path-row p{font-size:.92rem;color:var(--text-body);line-height:1.55;margin:0}
`;

export const html = `<div class="migrate-page">

  <!-- HERO -->
  <section class="section section--hero">
    <div class="container">
      <div class="migrate-hero">
        <div class="eyebrow reveal">For StagingPro customers</div>
        <h1 class="reveal">You already trust us for staging. Here is <em class="hl">your path to the full loop.</em></h1>
        <p class="lede reveal">StagingPro and RollbackPro are the reliability layer beneath the AI Operating System: safe previews and one-click rollback on every change. The AI OS adds the part in front of them, detecting what is wrong across your whole stack, explaining why in plain English, and turning it into ranked, approval-gated fixes. Same safety you know, now driving the whole loop.</p>
        <div class="cta-row reveal">
          <a class="btn" href="/free-audit">See what the loop finds on your store</a>
          <a class="btn btn--ghost" href="/ai-os-platform">Explore the platform &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT YOU HAVE -> WHAT YOU UNLOCK -->
  <section class="section section--soft">
    <div class="container">
      <div class="eyebrow reveal">Where you are today</div>
      <h2 class="reveal" style="max-width:24ch">From safe deploys to the whole loop.</h2>
      <div class="step-band reveal">
        <div class="step-card now">
          <span class="lbl">You have today</span>
          <h3>StagingPro &amp; RollbackPro</h3>
          <ul>
            <li>Production-parity staging for every change</li>
            <li>Continuous backup with one-click rollback</li>
            <li>A full audit trail of what changed</li>
          </ul>
        </div>
        <div class="step-arrow" aria-hidden="true">&rarr;</div>
        <div class="step-card">
          <span class="lbl">You unlock</span>
          <h3>The AI Operating System</h3>
          <ul>
            <li>Detection across your whole connector stack</li>
            <li>Plain-English root cause on every moving number</li>
            <li>Ranked fixes with the estimated revenue impact, ready to approve</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- WHAT THE LOOP ADDS -->
  <section class="section">
    <div class="container">
      <div class="eyebrow reveal">What the loop adds</div>
      <h2 class="reveal" style="max-width:24ch">The three parts staging never did.</h2>
      <div class="unlock-grid reveal">
        <div class="unlock-card">
          <h3>Detect</h3>
          <p>The Nerve Centre monitors your connected KPIs continuously and surfaces anomalies as they emerge, not just at deploy time.</p>
        </div>
        <div class="unlock-card">
          <h3>Diagnose</h3>
          <p>Vortex Mind and Ask Viq&trade; explain why a number moved, in plain English, so you are not reverse-engineering the cause yourself.</p>
        </div>
        <div class="unlock-card">
          <h3>Act &amp; learn</h3>
          <p>Findings become ranked, approval-gated fixes, applied to your store through the StagingPro staging-first path you already trust, and every fix is remembered so the next one is faster.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- THE PATH -->
  <section class="section section--soft">
    <div class="container">
      <div class="eyebrow reveal">Your upgrade path</div>
      <h2 class="reveal" style="max-width:22ch">Three steps, no rip-and-replace.</h2>
      <div class="path-list reveal">
        <div class="path-row">
          <span class="num"></span>
          <div>
            <h3>Keep everything you have</h3>
            <p>Your staging and rollback setup stays exactly as it is. Nothing about your current workflow changes on day one.</p>
          </div>
        </div>
        <div class="path-row">
          <span class="num"></span>
          <div>
            <h3>Connect the rest of your stack</h3>
            <p>Add the analytics, ads, email and other tools around your store, read-only to start, so the Nerve Centre can see the full picture and surface findings.</p>
          </div>
        </div>
        <div class="path-row">
          <span class="num"></span>
          <div>
            <h3>Approve your first loop fix</h3>
            <p>Review the ranked findings, approve a safe one, and watch it deploy through the same staging-first, reversible path you already rely on.</p>
          </div>
        </div>
      </div>
      <div class="cta-row reveal" style="margin-top:2.2rem">
        <a class="btn" href="/free-audit">Run a free audit</a>
        <a class="btn btn--ghost" href="/contact-us">Talk to us about upgrading</a>
      </div>
    </div>
  </section>

</div>`;
