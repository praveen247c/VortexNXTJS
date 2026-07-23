export const css = `
/* ===== Category definition hub (built on the shared design system) ===== */
.whatis-page .whatis-hero{max-width:820px}
.whatis-page .whatis-hero h1{margin:0 0 1.4rem}

/* the liftable definition — written to be quoted verbatim by answer engines */
.whatis-page .def-box{background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:16px;padding:1.8rem 2rem;margin-top:2rem}
.whatis-page .def-box .def-lbl{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-purple);display:block;margin-bottom:.7rem}
.whatis-page .def-box p{font-size:1.22rem;line-height:1.5;color:var(--primary);margin:0;font-weight:500}

/* the loop / pillars */
.whatis-page .loop-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--bento-gap);margin-top:1.6rem}
.whatis-page .loop-step{background:var(--white);border:1px solid var(--border-dark);border-radius:14px;padding:1.4rem}
.whatis-page .loop-step .n{font-family:var(--font-mono);font-size:.72rem;color:var(--brand-purple);letter-spacing:.08em}
.whatis-page .loop-step h3{font-family:var(--font-heading);font-size:1.1rem;color:var(--primary);margin:.4rem 0 .5rem}
.whatis-page .loop-step p{font-size:.9rem;color:var(--text-body);line-height:1.5;margin:0}
@media(max-width:900px){.whatis-page .loop-steps{grid-template-columns:repeat(2,1fr)}}
@media(max-width:520px){.whatis-page .loop-steps{grid-template-columns:1fr}}

/* proof points */
.whatis-page .proof-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--bento-gap);margin-top:1.6rem}
.whatis-page .proof-card{background:var(--white);border:1px solid var(--border-dark);border-radius:14px;padding:1.4rem}
.whatis-page .proof-card .stat{font-family:var(--font-heading);font-weight:700;font-size:2rem;letter-spacing:-.02em;color:var(--brand-purple);line-height:1}
.whatis-page .proof-card p{font-size:.88rem;color:var(--text-body);line-height:1.5;margin:.6rem 0 0}
@media(max-width:820px){.whatis-page .proof-grid{grid-template-columns:1fr}}

/* pillars index */
.whatis-page .mod-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin-top:1.6rem}
.whatis-page .mod-card{display:flex;flex-direction:column;gap:.35rem;background:var(--white);border:1px solid var(--border-dark);border-radius:12px;padding:1.1rem 1.2rem;text-decoration:none;transition:border-color .2s,transform .2s}
.whatis-page .mod-card:hover{border-color:var(--border-brand);transform:translateY(-2px)}
.whatis-page .mod-card b{font-family:var(--font-heading);font-size:1rem;color:var(--primary)}
.whatis-page .mod-card span{font-size:.85rem;color:var(--text-body);line-height:1.45}
@media(max-width:820px){.whatis-page .mod-grid{grid-template-columns:1fr}}

/* faq */
.whatis-page .faq{max-width:820px;margin-top:1.6rem}
`;

export const html = `<div class="whatis-page">

  <!-- HERO + DEFINITION -->
  <section class="section section--hero">
    <div class="container">
      <div class="whatis-hero">
        <div class="eyebrow reveal">Category definition</div>
        <h1 class="reveal">What is an <em class="hl">AI Operating System</em> for e-commerce?</h1>
        <p class="lede reveal">A plain-English definition of the category Vortex IQ is building, why it exists, and how the loop works, written to be quoted accurately.</p>
        <div class="def-box reveal">
          <span class="def-lbl">The 50-word definition</span>
          <p>An AI Operating System for e-commerce is a single operating layer that connects a merchant&rsquo;s store and the tools around it, watches every signal in real time, explains in plain English what is wrong and why, and helps fix it safely, with a human approving every change.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY THE CATEGORY EXISTS -->
  <section class="section section--soft">
    <div class="container" style="max-width:820px">
      <div class="eyebrow reveal">Why the category exists</div>
      <h2 class="reveal" style="max-width:26ch">Revenue leaks in the gaps between tools.</h2>
      <p class="lede reveal" style="margin-top:1.2rem">Modern commerce teams run more platforms, more connectors and more SKUs than any team can watch by hand. Alerts pile up faster than anyone can act on them, and every change feels risky to ship. A dashboard tells you a number went down. It cannot tell you why, fix it, or remember it so the same problem is less likely to cost you twice. The work has outgrown the dashboard: it needs an operating system.</p>
    </div>
  </section>

  <!-- THE LOOP -->
  <section class="section">
    <div class="container">
      <div class="eyebrow reveal">How it works</div>
      <h2 class="reveal" style="max-width:22ch">One loop: detect, diagnose, act, learn.</h2>
      <div class="loop-steps reveal">
        <div class="loop-step">
          <span class="n">01</span>
          <h3>Detect</h3>
          <p>Continuous monitoring across your connected tools surfaces anomalies as they appear.</p>
        </div>
        <div class="loop-step">
          <span class="n">02</span>
          <h3>Diagnose</h3>
          <p>The system investigates the moving number and explains the root cause in plain English.</p>
        </div>
        <div class="loop-step">
          <span class="n">03</span>
          <h3>Act</h3>
          <p>Findings become ranked, approval-gated fixes, applied staging-first and reversible.</p>
        </div>
        <div class="loop-step">
          <span class="n">04</span>
          <h3>Learn</h3>
          <p>Every signal, fix and decision is remembered, so the next problem is caught faster.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PROOF -->
  <section class="section section--soft">
    <div class="container">
      <div class="eyebrow reveal">Proof</div>
      <h2 class="reveal" style="max-width:24ch">What running the loop actually surfaces.</h2>
      <div class="proof-grid reveal">
        <div class="proof-card">
          <div class="stat">60+</div>
          <p>Store audits run, surfacing <strong>749 issues</strong> for merchants across the loop.</p>
        </div>
        <div class="proof-card">
          <div class="stat">~55%</div>
          <p>Of surfaced issues are resolvable agentically: approval-gated and reversible.</p>
        </div>
        <div class="proof-card">
          <div class="stat">1,400%</div>
          <p>Organic growth at a merchant store (Google Analytics) when the SEO and GEO engine ran.</p>
        </div>
      </div>
      <p class="muted reveal" style="margin-top:1.4rem;font-size:.86rem">Figures are drawn from Vortex IQ&rsquo;s own audits and named-customer analytics. We verify the real numbers on your store with a free audit.</p>
    </div>
  </section>

  <!-- THE PILLARS -->
  <section class="section">
    <div class="container">
      <div class="eyebrow reveal">The pillars</div>
      <h2 class="reveal" style="max-width:24ch">Four pillars, one loop.</h2>
      <div class="mod-grid reveal">
        <a class="mod-card" href="/ai-os-platform/nerve-centre"><b>Nerve Centre</b><span>Continuous detection across your connectors.</span></a>
        <a class="mod-card" href="/ai-os-platform/vortex-mind"><b>Vortex Mind</b><span>Diagnoses a moving number, explains why, and remembers every fix so it compounds.</span></a>
        <a class="mod-card" href="/ai-os-platform/ask-viq"><b>Ask Viq&trade;</b><span>Ask in plain English, get an answer you can act on.</span></a>
        <a class="mod-card" href="/ai-os-platform/vortex-agents"><b>Vortex Agents</b><span>Agents that act across the stack, safely and on approval, with staging, backup and one-click rollback.</span></a>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="section section--soft">
    <div class="container">
      <div class="eyebrow reveal">FAQ</div>
      <h2 class="reveal">Questions about the category, answered.</h2>
      <div class="faq reveal" style="margin-top:2rem">
        __FAQ__
      </div>
      <div class="cta-row reveal" style="margin-top:2.6rem">
        <a class="btn" href="/free-audit">Run a free audit</a>
        <a class="btn btn--ghost" href="/ai-os-platform">See the platform &rarr;</a>
      </div>
    </div>
  </section>

</div>`;
