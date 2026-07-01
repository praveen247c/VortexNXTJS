// Shared styles for the /vs hub and /vs/[slug] detail pages (design-system based).
export const css = `
/* ===== /vs comparison (built on the shared design system) ===== */
.vs-page .vs-hero{max-width:840px}
.vs-page .vs-hero h1{margin:0 0 1.4rem}

/* honesty note */
.vs-page .vs-note{max-width:820px;margin:1.6rem 0 0;font-size:.9rem;color:var(--text-body);line-height:1.55;background:var(--surface-soft);border:1px solid var(--border-dark);border-radius:12px;padding:1.1rem 1.3rem}

/* hub cards */
.vs-page .vs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--bento-gap);margin-top:1.6rem}
.vs-page .vs-card{display:flex;flex-direction:column;background:var(--white);border:1px solid var(--border-dark);border-radius:16px;padding:1.6rem 1.7rem;text-decoration:none;transition:border-color .2s,box-shadow .2s,transform .2s}
.vs-page .vs-card:hover{border-color:var(--border-brand);box-shadow:var(--shadow-sm);transform:translateY(-2px)}
.vs-page .vs-card h3{font-family:var(--font-heading);font-size:1.15rem;color:var(--primary);margin:0 0 .5rem}
.vs-page .vs-card .vs-cat{font-family:var(--font-mono);font-size:.66rem;letter-spacing:.08em;text-transform:uppercase;color:var(--brand-purple);margin-bottom:.9rem}
.vs-page .vs-card p{font-size:.9rem;color:var(--text-body);line-height:1.5;margin:0 0 1.2rem;flex:1}
.vs-page .vs-card .vs-go{font-family:var(--font-mono);font-size:.78rem;color:var(--brand-purple);font-weight:600}
@media(max-width:900px){.vs-page .vs-grid{grid-template-columns:1fr}}

/* how we compare */
.vs-page .rule-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1.6rem}
.vs-page .rule-item{background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:12px;padding:1.1rem 1.2rem}
.vs-page .rule-item b{font-family:var(--font-heading);font-size:.98rem;color:var(--primary);display:block;margin-bottom:.3rem}
.vs-page .rule-item span{font-size:.86rem;color:var(--text-body);line-height:1.5}
@media(max-width:820px){.vs-page .rule-strip{grid-template-columns:1fr}}

/* ===== detail page ===== */
.vs-page .vs-detail-hero{max-width:860px}
.vs-page .vs-detail-hero h1{margin:.4rem 0 1.2rem}
.vs-page .vs-whatis{max-width:820px;margin-top:1.4rem;font-size:1rem;color:var(--text-body);line-height:1.6;background:var(--white);border:1px solid var(--border-dark);border-radius:14px;padding:1.3rem 1.5rem}
.vs-page .vs-whatis b{color:var(--primary)}

/* comparison table */
.vs-page .cmp{margin-top:1.6rem;border:1px solid var(--border-dark);border-radius:16px;overflow:hidden;background:var(--white)}
.vs-page .cmp-head,.vs-page .cmp-row{display:grid;grid-template-columns:1fr 1.35fr 1.35fr}
.vs-page .cmp-head{background:var(--surface-soft);border-bottom:1px solid var(--border-dark)}
.vs-page .cmp-head>div{padding:1rem 1.2rem;font-family:var(--font-mono);font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;color:var(--text-faded)}
.vs-page .cmp-head .viq-col{color:var(--brand-purple)}
.vs-page .cmp-row{border-bottom:1px solid var(--border-dark)}
.vs-page .cmp-row:last-child{border-bottom:none}
.vs-page .cmp-row>div{padding:1.1rem 1.2rem;font-size:.9rem;line-height:1.55;color:var(--text-body)}
.vs-page .cmp-dim{font-family:var(--font-heading);font-weight:600;color:var(--primary);background:var(--surface-soft)}
.vs-page .cmp-viq{background:var(--surface-tint);color:var(--primary)}
.vs-page .cmp-viq b{color:var(--brand-purple)}
@media(max-width:820px){
  .vs-page .cmp-head{display:none}
  .vs-page .cmp-row{grid-template-columns:1fr}
  .vs-page .cmp-row>div{padding:.7rem 1.1rem}
  .vs-page .cmp-dim{padding-top:1.1rem}
  .vs-page .cmp-viq::before{content:"Vortex IQ";display:block;font-family:var(--font-mono);font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;color:var(--brand-purple);margin-bottom:.3rem}
  .vs-page .cmp-comp::before{content:attr(data-comp);display:block;font-family:var(--font-mono);font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;color:var(--text-faded);margin-bottom:.3rem}
  .vs-page .cmp-comp{padding-bottom:1.1rem}
}

/* switch reasons */
.vs-page .switch-list{max-width:820px;margin-top:1.6rem;display:flex;flex-direction:column;gap:.8rem}
.vs-page .switch-item{display:grid;grid-template-columns:auto 1fr;gap:.8rem;align-items:start;background:var(--white);border:1px solid var(--border-dark);border-radius:12px;padding:1rem 1.2rem}
.vs-page .switch-item .ck{width:22px;height:22px;border-radius:6px;background:var(--surface-tint);border:1px solid var(--border-brand);color:var(--brand-purple);display:flex;align-items:center;justify-content:center;flex:none;font-size:.8rem;font-weight:700}
.vs-page .switch-item p{margin:0;font-size:.92rem;color:var(--text-body);line-height:1.55}

/* sources */
.vs-page .vs-sources{max-width:820px;margin-top:1.6rem}
.vs-page .vs-sources summary{font-family:var(--font-mono);font-size:.76rem;letter-spacing:.06em;text-transform:uppercase;color:var(--brand-purple);cursor:pointer}
.vs-page .vs-sources ul{margin:.9rem 0 0;padding-left:1.1rem}
.vs-page .vs-sources li{margin:.35rem 0;font-size:.82rem;line-height:1.5;word-break:break-all}
.vs-page .vs-sources a{color:var(--text-body)}
.vs-page .vs-asof{font-family:var(--font-mono);font-size:.72rem;color:var(--text-faded);margin-top:1rem}

/* other-comparisons footer */
.vs-page .vs-more{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:1.4rem}
.vs-page .vs-more a{font-family:var(--font-mono);font-size:.78rem;color:var(--brand-purple);border:1px solid var(--border-brand);border-radius:999px;padding:.4rem .9rem;text-decoration:none;transition:background .2s}
.vs-page .vs-more a:hover{background:var(--surface-tint)}
`;
