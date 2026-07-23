export const css = `
/* ===== Online brochure (built on the shared design system) ===== */
.brochure-read .br-hero{max-width:820px}
.brochure-read .br-hero h1{margin:0 0 1.2rem}
.brochure-read .br-toc{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1.8rem}
.brochure-read .br-toc a{font-family:var(--font-mono);font-size:.76rem;color:var(--brand-purple);border:1px solid var(--border-brand);border-radius:999px;padding:.4rem .9rem;text-decoration:none;transition:background .2s}
.brochure-read .br-toc a:hover{background:var(--surface-tint)}

/* section lede blocks */
.brochure-read .br-block{max-width:820px}
.brochure-read .br-block h2{scroll-margin-top:6rem}
.brochure-read .br-lead{font-size:1.12rem;line-height:1.7;color:var(--text-body);margin:1.2rem 0 0}
.brochure-read .br-lead strong{color:var(--primary)}

/* pillar rows */
.brochure-read .br-pillars{display:grid;gap:1rem;margin-top:1.8rem}
.brochure-read .br-pillar{display:grid;grid-template-columns:auto 1fr;gap:1.1rem;align-items:start;background:var(--white);border:1px solid var(--border-dark);border-radius:14px;padding:1.3rem 1.5rem}
.brochure-read .br-pillar .step{font-family:var(--font-mono);font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;color:var(--white);background:var(--brand-purple);border-radius:999px;padding:.28rem .7rem;white-space:nowrap;align-self:start}
.brochure-read .br-pillar h3{font-family:var(--font-heading);font-size:1.15rem;color:var(--primary);margin:0 0 .3rem}
.brochure-read .br-pillar .mech{font-size:.92rem;color:var(--text-faded);margin:0 0 .5rem}
.brochure-read .br-pillar .get{font-size:.95rem;color:var(--text-body);line-height:1.55;margin:0}
.brochure-read .br-pillar .get b{color:var(--brand-purple)}

/* proof stats */
.brochure-read .br-stats{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:1.8rem}
.brochure-read .br-stat{background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:14px;padding:1.3rem}
.brochure-read .br-stat .n{font-family:var(--font-heading);font-weight:700;font-size:1.8rem;letter-spacing:-.02em;color:var(--brand-purple);line-height:1}
.brochure-read .br-stat .l{font-size:.82rem;color:var(--text-body);line-height:1.45;margin-top:.6rem}
@media(max-width:820px){.brochure-read .br-stats{grid-template-columns:1fr 1fr}}

/* quotes */
.brochure-read .br-quotes{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.4rem}
.brochure-read .br-quote{background:var(--white);border:1px solid var(--border-dark);border-radius:14px;padding:1.4rem 1.5rem}
.brochure-read .br-quote p{font-family:var(--font-heading);font-size:1.1rem;font-weight:600;color:var(--primary);letter-spacing:-.01em;line-height:1.4;margin:0 0 .8rem}
.brochure-read .br-quote span{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.06em;text-transform:uppercase;color:var(--text-faded)}
@media(max-width:720px){.brochure-read .br-quotes{grid-template-columns:1fr}}

/* steps + plans list */
.brochure-read .br-list{list-style:none;padding:0;margin:1.6rem 0 0;display:grid;gap:.8rem}
.brochure-read .br-list li{display:grid;grid-template-columns:auto 1fr;gap:.9rem;align-items:start;font-size:.98rem;color:var(--text-body);line-height:1.55}
.brochure-read .br-list .m{font-family:var(--font-mono);font-weight:700;color:var(--brand-purple)}
.brochure-read .br-list b{color:var(--primary)}
`;

export const html = `<div class="brochure-read">

  <!-- HERO -->
  <section class="section section--hero">
    <div class="container">
      <div class="br-hero">
        <div class="eyebrow reveal">Brochure</div>
        <h1 class="reveal">Vortex IQ, the <em class="hl">AI Operating System</em> for e-commerce.</h1>
        <p class="lede reveal">Detect what is wrong. Understand why. Fix it safely. Across every platform you run. Here is the whole platform in one read. The PDF is on its way to your inbox too.</p>
        <div class="br-toc reveal">
          <a href="#what">What it is</a>
          <a href="#pillars">The four pillars</a>
          <a href="#seo">SEO &amp; GEO</a>
          <a href="#safe">Safety</a>
          <a href="#proof">Proof</a>
          <a href="#start">How you start</a>
          <a href="#plans">Plans</a>
        </div>
      </div>
    </div>
  </section>

  <!-- THE PROBLEM + WHAT IT IS -->
  <section class="section" id="what">
    <div class="container br-block">
      <div class="eyebrow reveal">The problem, and the answer</div>
      <h2 class="reveal" style="max-width:24ch">Revenue leaks in the gaps between your tools.</h2>
      <p class="br-lead reveal">Modern commerce runs across a dozen disconnected systems, and the money slips through the seams no single one can see. A dashboard tells you a number went down. It cannot tell you why, fix it, or remember it so the same problem is less likely to cost you twice.</p>
      <p class="br-lead reveal"><strong>Vortex IQ is one command centre</strong> that watches your whole stack in real time, explains what is wrong in plain English, and helps you fix it safely, with a human approving every change. It runs on BigCommerce, Shopify, Adobe Commerce and WooCommerce, and connects the 200+ tools around your store. One continuous loop: detect, diagnose, act, deploy, learn.</p>
    </div>
  </section>

  <!-- FOUR PILLARS -->
  <section class="section section--soft" id="pillars">
    <div class="container br-block">
      <div class="eyebrow reveal">The four pillars</div>
      <h2 class="reveal" style="max-width:24ch">Four pillars. One platform. What each does for you.</h2>
      <div class="br-pillars reveal">
        <div class="br-pillar"><span class="step">Detect</span><div><h3>Nerve Centre</h3><p class="mech">Real-time detection across 200+ connectors.</p><p class="get"><b>You get:</b> revenue leaks caught before your customers do, ranked by the money at stake.</p></div></div>
        <div class="br-pillar"><span class="step">Diagnose</span><div><h3>Vortex Mind</h3><p class="mech">Diagnostics, strategy and a memory graph across every channel.</p><p class="get"><b>You get:</b> the root cause in plain English, and a system that starts from everything you have already fixed, so the second fix is faster than the first.</p></div></div>
        <div class="br-pillar"><span class="step">Converse</span><div><h3>Ask Viq&trade;</h3><p class="mech">Conversational AI over your whole stack.</p><p class="get"><b>You get:</b> answers to plain questions like &ldquo;where am I losing revenue?&rdquo;, cited to your data.</p></div></div>
        <div class="br-pillar"><span class="step">Act</span><div><h3>Vortex Agents</h3><p class="mech">Execute changes safely, on your approval, with staging, backup and governance.</p><p class="get"><b>You get:</b> agents that do the work across SEO and GEO, merchandising, paid media, inventory and retention. Every change is previewed on a copy of your store first, staging-first and reversible, with one-click rollback and a full audit trail.</p></div></div>
      </div>
    </div>
  </section>

  <!-- SEO GEO -->
  <section class="section" id="seo">
    <div class="container br-block">
      <div class="eyebrow reveal">Most in demand</div>
      <h2 class="reveal" style="max-width:22ch">Win Search and AI Discovery, at scale.</h2>
      <p class="br-lead reveal">SEO and GEO is the agent our merchants reach for first. It runs the SEO and GEO engine on a schedule: generating, localising and scaling high-intent content across the regions and demographics you are targeting, so you capture organic search and get cited by AI answer engines.</p>
      <p class="br-lead reveal">It runs as a Vortex Agent, so it is detected by the Nerve Centre, diagnosed by Vortex Mind, and executed staging-first with one-click rollback. One recent deployment saw organic growth of <strong>1,400%</strong> (measured in Google Analytics) when the engine ran.</p>
    </div>
  </section>

  <!-- SAFE -->
  <section class="section section--soft" id="safe">
    <div class="container br-block">
      <div class="eyebrow reveal">Safe on live revenue</div>
      <h2 class="reveal" style="max-width:24ch">Nothing reaches live revenue without you.</h2>
      <ul class="br-list reveal">
        <li><span class="m">1</span><span><b>Preview first.</b> StagingPro renders every change on a production-parity copy of your store, so you see the exact result before it ships.</span></li>
        <li><span class="m">2</span><span><b>You approve what applies.</b> Every change sits behind your approval. The system proposes. You decide what reaches live revenue.</span></li>
        <li><span class="m">3</span><span><b>Undo in one click.</b> RollbackPro keeps a continuous backup with one-click rollback, and logs every action in a full audit trail.</span></li>
      </ul>
      <p class="br-lead reveal">Read-only by default. Approval-gated. Reversible. That is what makes it safe to let a system act on live revenue. ISO 27001 certified, with SOC 2 in progress.</p>
    </div>
  </section>

  <!-- PROOF -->
  <section class="section" id="proof">
    <div class="container br-block">
      <div class="eyebrow reveal">The proof</div>
      <h2 class="reveal" style="max-width:24ch">Results you can verify.</h2>
      <p class="br-lead reveal">Across more than 60 store audits, Vortex IQ has surfaced 749 issues for merchants, and about 55% are resolvable agentically: approval-gated and reversible.</p>
      <div class="br-stats reveal">
        <div class="br-stat"><div class="n">1,400%</div><div class="l">organic growth at a merchant store (Google Analytics)</div></div>
        <div class="br-stat"><div class="n">+35%</div><div class="l">revenue recovered from cross-channel fixes</div></div>
        <div class="br-stat"><div class="n">+30%</div><div class="l">higher conversion, top-quartile merchants</div></div>
        <div class="br-stat"><div class="n">50%</div><div class="l">faster problem resolution, the closed loop</div></div>
      </div>
      <div class="br-quotes reveal">
        <figure class="br-quote"><p>&ldquo;A genuine step change in how we run the store.&rdquo;</p><span>Wells Stringham &middot; Apply Digital</span></figure>
        <figure class="br-quote"><p>&ldquo;The kind of operating layer commerce has been missing.&rdquo;</p><span>Olaf Akkerman &middot; Microsoft</span></figure>
      </div>
    </div>
  </section>

  <!-- HOW YOU START -->
  <section class="section section--soft" id="start">
    <div class="container br-block">
      <div class="eyebrow reveal">How you start</div>
      <h2 class="reveal" style="max-width:22ch">Three steps, no rip-and-replace.</h2>
      <ul class="br-list reveal">
        <li><span class="m">1</span><span><b>Connect your platform</b>, read-only to start. BigCommerce, Shopify, Adobe Commerce or WooCommerce, plus the tools around it.</span></li>
        <li><span class="m">2</span><span><b>Get your first findings</b>, ranked by the revenue at stake, usually within the hour.</span></li>
        <li><span class="m">3</span><span><b>Approve your first safe fix</b>, previewed on staging and reversible in one click.</span></li>
      </ul>
    </div>
  </section>

  <!-- PLANS -->
  <section class="section" id="plans">
    <div class="container br-block">
      <div class="eyebrow reveal">Plans</div>
      <h2 class="reveal" style="max-width:24ch">Four plans, each opening with a 14-day free trial.</h2>
      <ul class="br-list reveal">
        <li><span class="m">&#9679;</span><span><b>Foundation</b>, the core loop for a single store.</span></li>
        <li><span class="m">&#9679;</span><span><b>Growth</b> (most popular), SEO and GEO, more connectors, deeper retention.</span></li>
        <li><span class="m">&#9679;</span><span><b>Enterprise</b>, governance, security and the buying-committee bundle.</span></li>
        <li><span class="m">&#9679;</span><span><b>OmniChannel</b>, multi-store, multi-brand, multi-region.</span></li>
      </ul>
      <p class="br-lead reveal">Full pricing, feature comparison and FAQs are on the <a href="/pricing" style="color:var(--brand-purple);text-decoration:underline;text-underline-offset:2px">pricing page</a>.</p>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="section section--soft">
    <div class="container" style="text-align:center">
      <div class="eyebrow reveal" style="justify-content:center;display:flex">See it on your own store</div>
      <h2 class="reveal" style="max-width:22ch;margin:0 auto">The honest way to know what we will find is to point it at your store.</h2>
      <div class="cta-row reveal" style="justify-content:center;margin-top:2.2rem">
        <a class="btn" href="/free-audit">Run a free audit</a>
        <a class="btn btn--ghost" href="/contact-us">Talk to the team &rarr;</a>
      </div>
    </div>
  </section>

</div>`;
