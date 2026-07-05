export const css = `/* scoped to .company-page so nothing leaks into the shared system */
/* alternating soft-grey section backgrounds, same as the home page */
.company-page .section--soft{background:var(--surface-soft)}
/* match the home page: a clear gap between a heading and the lede that follows it */
.company-page h1 + .lede,.company-page h2 + .lede{margin-top:1.4rem}
/* faint grid texture filling the empty right side of the hero, fading into white toward the text */
.company-page .section--hero{overflow:hidden}
.company-page .section--hero::before{content:"";position:absolute;top:0;right:0;bottom:0;width:64%;z-index:0;pointer-events:none;background-image:linear-gradient(rgba(85,41,214,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(85,41,214,.07) 1px,transparent 1px);background-size:40px 40px;-webkit-mask-image:radial-gradient(120% 135% at 100% 45%,#000 20%,transparent 72%);mask-image:radial-gradient(120% 135% at 100% 45%,#000 20%,transparent 72%)}
@media(max-width:760px){.company-page .section--hero::before{display:none}}
.company-page .company-meta{display:flex;flex-wrap:wrap;gap:.7rem;margin:1.8rem 0 2.2rem}
.company-page .company-why{max-width:760px;margin-top:2.4rem;padding-top:1.6rem;border-top:1px solid var(--border-dark);font-size:.98rem}
.company-page .company-body{margin-top:1rem;max-width:62ch}
.company-page .company-pillars{margin-top:2.4rem}
.company-page .company-ic{width:46px;height:46px;border-radius:12px;background:var(--surface-tint);border:1px solid var(--border-brand);display:inline-flex;align-items:center;justify-content:center;margin-bottom:1.2rem}
.company-page .company-ic img{width:27px;height:27px;display:block}
.company-page .company-traction{margin-top:2.6rem;align-items:stretch}
.company-page .company-traction .card--brand{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:.9rem}
.company-page .company-traction .stat--on-brand{font-size:clamp(3rem,7vw,5rem)}
.company-page .company-traction-body{display:flex;flex-direction:column;justify-content:center}
.company-page .company-stats{margin-top:1.8rem;gap:1.2rem}
.company-page .company-clients{margin-top:3.4rem;padding-top:2.2rem;border-top:1px solid var(--border-dark)}
.company-page .company-clients-label{font-family:var(--font-mono);font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:var(--text-faded);margin-bottom:1.1rem}
.company-page .company-clients-row{display:flex;flex-wrap:wrap;gap:.7rem 1rem}
.company-page .company-clients-row span{font-family:var(--font-heading);font-weight:600;font-size:1rem;color:var(--primary);background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius-pill);padding:.45rem 1.1rem}
.company-page .company-quote{margin:3.4rem 0 0;max-width:720px}
.company-page .company-quote blockquote{font-family:var(--font-heading);font-weight:600;font-size:clamp(1.4rem,2.6vw,1.9rem);line-height:1.3;letter-spacing:-.015em;color:var(--primary)}
.company-page .company-quote figcaption{font-family:var(--font-mono);font-size:.8rem;color:var(--brand-purple);margin-top:1rem;letter-spacing:.02em}
.company-page .company-backers{margin-top:2.4rem}
.company-page .company-awards{margin-top:1.6rem}
.company-page .company-team{margin-top:2.6rem}
.company-page .company-role{font-family:var(--font-mono);font-size:.82rem;color:var(--text-body);letter-spacing:.01em}
.company-page .company-facts{margin-top:2.6rem}
.company-page .company-facts .card h3{color:var(--brand-purple)}
@media(max-width:1024px){
  .company-page .company-stats{grid-template-columns:repeat(3,1fr)}
}
@media(max-width:640px){
  .company-page .company-stats{grid-template-columns:1fr}
}`;
export const html = `<div class="company-page">

  <section class="section section--hero">
    <div class="container">
      <div class="eyebrow">Company</div>
      <div class="statusbar reveal"><span class="dot"></span>Agentic commerce &middot; Backed by Sure Valley Ventures &amp; Techstars</div>
      <h1>Vortex IQ is the <em class="hl">AI Operating System</em> for e-commerce.</h1>
      <p class="lede reveal">One command centre that detects what is wrong across your stack, explains why, and helps you fix it safely. We are building the agentic commerce category: software that does the work, with a human approving every change.</p>
      <div class="company-meta reveal">
        <span class="chip"><span class="dot"></span>Brentford, London</span>
        <span class="chip chip--brand">AI Operating System for e-commerce</span>
        <span class="chip">ISO 27001 certified</span>
      </div>
      <div class="cta-row reveal">
        <a class="btn" href="/contact-us">Talk to the team</a>
        <a class="btn btn--ghost" href="/ai-os-platform">See the platform</a>
      </div>
      <p class="company-why muted reveal">Why now: merchants run more platforms, more connectors and more SKUs than any team can watch by hand, and AI answer engines now decide a growing share of discovery. The work has outgrown the dashboard. It needs an operating system.</p>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container">
      <div class="split">
        <div class="reveal">
          <div class="eyebrow">Mission</div>
          <h2>Running a store should not feel like fighting fires.</h2>
        </div>
        <div class="reveal">
          <p class="lede">We have lived the chaos, fixed the chaos, and built the AI system that stops the chaos.</p>
          <p class="muted company-body">Commerce teams are buried under fragmented tools, alerts they cannot act on, and changes they are afraid to ship. Our thesis is simple: the stack should run on one operating layer that watches every signal, explains the root cause in plain English, and acts safely on your approval. Detect. Explain. Fix. That loop is the product, and it gets sharper every time it runs.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="eyebrow">How it works</div>
      <h2>Detect. Explain. Fix. The loop is the product.</h2>
      <p class="lede reveal">One operating layer watches every signal, explains the root cause in plain English, acts safely on your approval, and remembers every decision so it gets sharper each run.</p>
      <div class="grid grid-3 company-pillars">
        <div class="card reveal">
          <span class="company-ic"><img src="/assets/icons/nerve.svg" alt="" /></span>
          <h3>Nerve Centre</h3>
          <p class="muted">Continuous detection across your connectors. The eyes on every KPI.</p>
        </div>
        <div class="card reveal">
          <span class="company-ic"><img src="/assets/icons/mind.svg" alt="" /></span>
          <h3>Vortex Mind</h3>
          <p class="muted">The diagnostic layer. It investigates a moving number and explains the root cause.</p>
        </div>
        <div class="card reveal">
          <span class="company-ic"><img src="/assets/icons/ask.svg" alt="" /></span>
          <h3>Ask Viq</h3>
          <p class="muted">The conversational interface. Ask in plain English, get an answer you can act on.</p>
        </div>
        <div class="card reveal">
          <span class="company-ic"><img src="/assets/icons/actions.svg" alt="" /></span>
          <h3>Vortex Agents</h3>
          <p class="muted">AI agents that monitor, analyse and act across the stack, safely and on approval.</p>
        </div>
        <div class="card reveal">
          <span class="company-ic"><img src="/assets/icons/apps.svg" alt="" /></span>
          <h3>Vortex Apps</h3>
          <p class="muted">Staging, backup and rollback: StagingPro and RollbackPro keep every change predictable.</p>
        </div>
        <div class="card reveal">
          <span class="company-ic"><img src="/assets/icons/memory.svg" alt="" /></span>
          <h3>Vortex Memory</h3>
          <p class="muted">The graph that records each fix and decision, so the AI OS gets sharper over time.</p>
        </div>
      </div>
      <p class="muted company-body reveal">Runs on BigCommerce, Shopify, Adobe Commerce and WooCommerce.</p>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container">
      <div class="eyebrow">Traction</div>
      <h2>What the audits found.</h2>
      <div class="grid grid-2 company-traction">
        <div class="card card--brand reveal">
          <div class="stat stat--on-brand">65%</div>
          <div class="stat-label">Reduction in development cycle time at The Revere Group, working on Glerup.</div>
        </div>
        <div class="reveal company-traction-body">
          <p class="muted company-body">Across more than 60 store audits we have surfaced 749 issues for merchants, and about 55% are resolvable agentically: approval-gated and reversible. That is the wedge. Merchants connect a store, see what is leaking revenue in plain English, then let the AI OS fix the safe ones.</p>
          <div class="company-stats grid grid-3">
            <div>
              <div class="stat stat--accent">60+</div>
              <div class="stat-label">Store audits run</div>
            </div>
            <div>
              <div class="stat stat--accent">749</div>
              <div class="stat-label">Issues surfaced</div>
            </div>
            <div>
              <div class="stat stat--accent">~55%</div>
              <div class="stat-label">Resolvable agentically</div>
            </div>
          </div>
        </div>
      </div>
      <div class="company-clients reveal">
        <p class="company-clients-label">Merchants and teams that work with Vortex IQ</p>
        <div class="company-clients-row">
          <span>Krispy Kreme</span>
          <span>Supreme CBD</span>
          <span>Crown Packaging</span>
          <span>Glerup / The Revere Group</span>
          <span>Interlight</span>
          <span>Menkind</span>
          <span>Radiant Health</span>
          <span>The Tire Man</span>
        </div>
      </div>
      <figure class="company-quote reveal">
        <blockquote>&ldquo;A genuine step change in how we run the store.&rdquo;</blockquote>
        <figcaption>Wells Stringham, Apply Digital</figcaption>
      </figure>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="eyebrow">Backed &amp; recognised</div>
      <h2>Investors who know the category.</h2>
      <p class="lede reveal">Vortex IQ is backed by Sure Valley Ventures and Techstars, and recognised across the AI and retail-tech ecosystem.</p>
      <div class="grid grid-2 company-backers reveal">
        <div class="card card--tint"><h3>Sure Valley Ventures</h3><p class="muted">Investor.</p></div>
        <div class="card card--tint"><h3>Techstars</h3><p class="muted">Investor and accelerator.</p></div>
      </div>
      <div class="grid grid-3 company-awards">
        <div class="card reveal"><h3>RAISE Your Hack 2025</h3><p class="muted">Winner, Vultr Track.</p></div>
        <div class="card reveal"><h3>Microsoft GenAI Accelerator</h3><p class="muted">Elite Partner.</p></div>
        <div class="card reveal"><h3>RetailTech 50 (2025)</h3><p class="muted">Business Cloud.</p></div>
        <div class="card reveal"><h3>Startup Battlefield 2024</h3><p class="muted">TechCrunch.</p></div>
        <div class="card reveal"><h3>Focal W24</h3><p class="muted">Demo Day.</p></div>
      </div>
    </div>
  </section>

  <section class="section section--soft">
    <div class="container">
      <div class="eyebrow">Team</div>
      <h2>The people behind the AI OS.</h2>
      <p class="lede reveal">Built by people who lived the problem.</p>
      <div class="grid grid-4 company-team">
        <div class="card reveal">
          <h3>Susant Patro</h3>
          <p class="company-role">CEO</p>
        </div>
        <div class="card reveal">
          <h3>Sambit Patra</h3>
          <p class="company-role">COO</p>
        </div>
        <div class="card reveal">
          <h3>Jaiganesh V.</h3>
          <p class="company-role">CTO</p>
        </div>
        <div class="card reveal">
          <h3>Benjamin Gisvold</h3>
          <p class="company-role">CRO</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="eyebrow">Facts at a glance</div>
      <h2>The company, on the record.</h2>
      <div class="grid grid-4 company-facts reveal">
        <div class="card">
          <h3>Company</h3>
          <p class="muted">Vortex IQ Ltd. Registered in England and Wales, No. 14925424. VAT GB 459 547 641. D-U-N-S 230712948.</p>
        </div>
        <div class="card">
          <h3>Headquarters</h3>
          <p class="muted">Brentford, London. Working with merchants worldwide.</p>
        </div>
        <div class="card">
          <h3>Category</h3>
          <p class="muted">Agentic commerce: the AI Operating System for e-commerce. Runs on BigCommerce, Shopify, Adobe Commerce and WooCommerce.</p>
        </div>
        <div class="card">
          <h3>Security</h3>
          <p class="muted">ISO 27001 certified. SOC 2 in progress. Approval-gated AI, staging-first, one-click rollback, full audit trail.</p>
        </div>
        <div class="card">
          <h3>History</h3>
          <p class="muted">Founded June 2023 by the team behind 247 Commerce, an agency running BigCommerce and Adobe Commerce stores since 2011 and winner of Adobe Commerce Rockstar 2023. 247 Commerce joined Vortex IQ as its managed-services arm in 2026. <a class="textlink" href="/about-us">Read the story &rarr;</a></p>
        </div>
      </div>
    </div>
  </section>

  <section class="section final">
    <div class="container">
      <h2>Want the longer version?</h2>
      <p class="lede reveal" style="margin:0 auto 2rem">Read the full story, from 247 Commerce to the AI Operating System, or talk to the founding team.</p>
      <div class="cta-row reveal" style="justify-content:center">
        <a class="btn" href="/about-us">Read our story</a>
        <a class="btn btn--ghost" href="/contact-us">Talk to the team</a>
      </div>
    </div>
  </section>

</div>`;
