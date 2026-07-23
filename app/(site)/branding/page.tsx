import type { Metadata } from "next";
import Link from "next/link";
import BrandSectionNav from "@/components/BrandSectionNav";
import CopyChip from "@/components/CopyChip";
import {
  BANNED_PHRASES,
  BRAND_UPDATED,
  BRAND_VERSION,
  CHANNELS,
  COLOUR_GROUPS,
  DL_HTML,
  DL_MD,
  DOWNLOADS,
  GRADIENTS,
  HOOKS,
  LOGO_DO,
  LOGO_DONT,
  LOOP,
  NORTH_STAR,
  OBJECTIONS,
  PATTERNS,
  PILLARS,
  PILLAR_NOTE,
  PROOF_POINTS,
  PUNCTUATION,
  REWRITES,
  SECTIONS,
  TOKEN_GROUPS,
  TONE_ROWS,
  TRIGGERS,
  TYPE_SCALE,
  VOCAB,
  VOICE_PILLARS,
} from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "/branding" },
  title: "Brand Guidelines: Logos, Colour, Type & Tone of Voice | Vortex IQ",
  description:
    "The complete Vortex IQ brand book. Logo rules, colour tokens, typography, UI components, the four pillars, and the full tone-of-voice guide. Download it as Markdown or HTML.",
  openGraph: {
    title: "Vortex IQ Brand Guidelines",
    description:
      "Logo, colour, type, components, and voice. The complete brand book, free to download as Markdown or HTML.",
    url: "/branding",
  },
};

const CDN = "/assets/webflow";
const LOGO_COLOR = `${CDN}/vlogo.svg`;
const LOGO_WHITE = `${CDN}/vlogo-white.svg`;

/* Small inline icon helpers so the markup below stays readable. */
const Tick = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const Cross = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
const DownloadIcon = ({ size = 17 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size, flex: "none" }} aria-hidden="true">
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
  </svg>
);

const css = `
/* ============ Branding, the brand book (built on the shared design system) ============ */
.brand-page{--rail-h:3.4rem}
.brand-page .grad{background:var(--brand-gradient-soft);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.brand-page .section--soft{background:var(--surface-soft)}
.brand-page section[id]{scroll-margin-top:calc(4.5rem + var(--rail-h) + 1rem)}

/* ---- hero ---- */
.brand-hero{text-align:center;max-width:900px;margin:0 auto}
.brand-hero .eyebrow{justify-content:center}
.brand-hero h1{max-width:15ch;margin:0 auto 1.5rem}
.brand-hero .lede{margin:0 auto 2.2rem}
.brand-hero .cta-row{justify-content:center}
.brand-meta{display:flex;justify-content:center;flex-wrap:wrap;gap:.6rem;margin-top:2.6rem}
.brand-meta .chip{background:var(--white)}

/* ---- sticky chapter rail ---- */
.brand-rail{position:sticky;top:4.5rem;z-index:40;background:rgba(255,255,255,.86);backdrop-filter:blur(14px) saturate(1.3);
  border-top:1px solid var(--border-dark);border-bottom:1px solid var(--border-dark)}
.brand-rail-track{display:flex;gap:.35rem;overflow-x:auto;scrollbar-width:none;height:var(--rail-h);align-items:center}
.brand-rail-track::-webkit-scrollbar{display:none}
.brand-rail-track a{flex:none;font-family:var(--font-mono);font-size:.71rem;letter-spacing:.04em;text-decoration:none;
  color:var(--text-faded);padding:.4rem .8rem;border-radius:var(--radius-pill);border:1px solid transparent;transition:all .2s var(--ease)}
.brand-rail-track a:hover{color:var(--primary);background:rgba(0,0,0,.035)}
.brand-rail-track a.is-active{color:var(--brand-purple);background:var(--surface-tint);border-color:var(--border-brand)}

/* ---- chapter heading ---- */
.chap{display:flex;align-items:flex-start;gap:1.6rem;margin-bottom:3rem;max-width:900px}
.chap-n{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.14em;color:var(--brand-purple);padding-top:.6rem;flex:none}
.chap h2{max-width:17ch;margin-bottom:.9rem}
.chap p{color:var(--text-body);font-size:1.06rem;line-height:1.6;max-width:66ch}
@media(max-width:640px){.chap{flex-direction:column;gap:.6rem}.chap-n{padding-top:0}}

.sub-lab{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--text-faded);
  margin:3.2rem 0 1.2rem;padding-bottom:.7rem;border-bottom:1px solid var(--border-dark)}
.sub-lab:first-child{margin-top:0}

/* ---- copy chip ---- */
.copy-chip{display:inline-flex;align-items:center;gap:.4rem;font-family:var(--font-mono);font-size:.7rem;letter-spacing:.02em;
  background:var(--white);border:1px solid var(--border-dark);color:var(--text-body);border-radius:var(--radius-pill);
  padding:.28rem .6rem;cursor:pointer;transition:all .18s var(--ease);white-space:nowrap}
.copy-chip svg{width:12px;height:12px;flex:none;opacity:.55}
.copy-chip:hover{border-color:var(--brand-purple);color:var(--brand-purple)}
.copy-chip:hover svg{opacity:1}
.copy-chip:focus-visible{outline:2px solid var(--brand-purple);outline-offset:2px}
.copy-chip.is-copied{border-color:rgba(31,158,84,.4);color:var(--success);background:var(--success-soft)}
.copy-chip.is-copied svg{opacity:1}

/* ---- north star ---- */
.ns{border:1px solid var(--border-brand);background:var(--surface-tint);border-radius:var(--radius);padding:3rem;position:relative;overflow:hidden}
.ns::after{content:"";position:absolute;top:-40%;right:-8%;width:44%;height:180%;
  background:radial-gradient(circle,rgba(165,138,243,.4),transparent 62%);pointer-events:none}
.ns p{position:relative;z-index:1}
.ns .ns-promise{font-family:var(--font-heading);font-weight:600;font-size:clamp(1.5rem,3.1vw,2.3rem);line-height:1.2;
  letter-spacing:-.02em;color:var(--primary);max-width:22ch}
.ns .ns-support{margin-top:1.1rem;font-size:1.1rem;line-height:1.55;color:var(--text-body);max-width:56ch}
.word-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--bento-gap);margin-top:var(--bento-gap)}
.word-card .w-key{font-family:var(--font-heading);font-weight:600;font-size:1.3rem;letter-spacing:-.02em;color:var(--brand-purple);margin-bottom:.7rem}

/* ---- logo ---- */
.logo-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--bento-gap)}
.logo-card{border-radius:var(--radius);border:1px solid var(--border-dark);overflow:hidden;display:flex;flex-direction:column;
  transition:transform .25s var(--ease),box-shadow .3s,border-color .25s}
.logo-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg)}
.logo-stage{height:230px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden}
.logo-stage img{height:54px;width:auto;display:block;position:relative;z-index:1}
.logo-stage--light{background:var(--white)}
.logo-stage--light::before{content:"";position:absolute;inset:0;
  background-image:linear-gradient(rgba(85,41,214,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(85,41,214,.06) 1px,transparent 1px);
  background-size:24px 24px;mask-image:radial-gradient(circle at 50% 50%,#000,transparent 78%);
  -webkit-mask-image:radial-gradient(circle at 50% 50%,#000,transparent 78%)}
.logo-stage--deep{background:var(--brand-purple-deep)}
.logo-stage--deep::before{content:"";position:absolute;top:-30%;right:-10%;width:60%;height:120%;
  background:radial-gradient(circle,rgba(85,41,214,.55),transparent 65%);pointer-events:none}
.logo-foot{background:var(--white);border-top:1px solid var(--border-dark);padding:1.2rem 1.4rem;display:flex;
  justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap}
.logo-foot .lf-name{font-family:var(--font-heading);font-weight:600;font-size:1rem;color:var(--primary)}
.logo-foot .lf-sub{font-family:var(--font-mono);font-size:.72rem;color:var(--text-faded);margin-top:.2rem}
.dl-link{display:inline-flex;align-items:center;gap:.45rem;font-family:var(--font-mono);font-size:.78rem;color:var(--brand-purple);
  text-decoration:none;border:1px solid var(--border-brand);border-radius:var(--radius-pill);padding:.5rem .9rem;
  transition:background .2s,color .2s,border-color .2s,transform .2s}
.dl-link:hover{background:var(--brand-purple);color:#fff;border-color:var(--brand-purple);transform:translateY(-1px)}
.dl-link svg{width:15px;height:15px;flex:none}

/* clear space + minimum size */
.space-grid{display:grid;grid-template-columns:1.25fr 1fr;gap:var(--bento-gap);margin-top:var(--bento-gap)}
.clearbox{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2.4rem;display:flex;
  align-items:center;justify-content:center;min-height:230px}
.clearframe{position:relative;padding:44px;border:1px dashed var(--border-brand);border-radius:6px;background:var(--surface-tint)}
.clearframe img{height:44px;width:auto;display:block;position:relative;z-index:1}
.clearframe span{position:absolute;font-family:var(--font-mono);font-size:.62rem;color:var(--brand-purple)}
.clearframe .cf-t{top:14px;left:50%;transform:translateX(-50%)}
.clearframe .cf-b{bottom:14px;left:50%;transform:translateX(-50%)}
.minsize{display:flex;flex-direction:column;gap:1.4rem}
.minrow{display:flex;align-items:center;gap:1rem;padding-bottom:1.2rem;border-bottom:1px solid var(--border-dark)}
.minrow:last-child{border-bottom:none;padding-bottom:0}
.minrow img{width:auto;display:block}
.minrow .mr-meta{font-family:var(--font-mono);font-size:.72rem;color:var(--text-faded);line-height:1.5}
.minrow .mr-meta b{display:block;font-family:var(--font-heading);font-size:.95rem;color:var(--primary);font-weight:600;margin-bottom:.15rem}

/* do / don't */
.rule-head{display:flex;align-items:center;gap:.7rem;margin-bottom:1.4rem}
.rule-ic{width:38px;height:38px;flex:none;border-radius:10px;display:flex;align-items:center;justify-content:center}
.rule-ic svg{width:20px;height:20px}
.rule-ic--do{background:var(--success-soft);border:1px solid rgba(31,158,84,.3);color:var(--success)}
.rule-ic--no{background:var(--danger-soft);border:1px solid rgba(210,63,49,.3);color:var(--danger)}
.rule-head b{font-family:var(--font-heading);font-weight:600;font-size:1.12rem}
.rule-list{list-style:none;display:flex;flex-direction:column;gap:.95rem}
.rule-list li{display:flex;align-items:flex-start;gap:.7rem;font-size:.98rem;color:var(--text-body);line-height:1.5}
.rule-list li svg{width:17px;height:17px;flex:none;margin-top:.18rem}
.rule-list--do li svg{color:var(--success)}
.rule-list--no li svg{color:var(--danger)}

/* ---- colour ---- */
.pal-note{font-size:.98rem;color:var(--text-body);max-width:70ch;margin-bottom:1.4rem;line-height:1.55}
.swatch-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:var(--bento-gap)}
.swatch{border-radius:var(--radius);border:1px solid var(--border-dark);overflow:hidden;background:var(--white);
  transition:transform .25s var(--ease),box-shadow .3s;display:flex;flex-direction:column}
.swatch:hover{transform:translateY(-3px);box-shadow:var(--shadow-md)}
.swatch-fill{height:110px;display:block;position:relative}
.swatch-meta{padding:1rem 1.1rem 1.1rem;display:flex;flex-direction:column;gap:.45rem;flex:1}
.swatch-meta .nm{font-family:var(--font-mono);font-size:.75rem;color:var(--primary);word-break:break-all}
.swatch-meta .role{font-size:.82rem;color:var(--text-body);line-height:1.45;flex:1}
.swatch-meta .copy-chip{align-self:flex-start}
.grad-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--bento-gap)}
.grad-card{border-radius:var(--radius);border:1px solid var(--border-dark);overflow:hidden;background:var(--white)}
.grad-fill{height:120px}
.grad-meta{padding:1.2rem 1.3rem;display:flex;flex-direction:column;gap:.55rem;align-items:flex-start}
.grad-meta .nm{font-family:var(--font-mono);font-size:.8rem;color:var(--primary)}
.grad-meta .role{font-size:.9rem;color:var(--text-body);line-height:1.45}

/* contrast note */
.brand-note{margin-top:2.4rem;display:flex;align-items:flex-start;gap:.8rem;font-size:.95rem;color:var(--text-body);
  background:var(--surface-tint);border:1px solid var(--border-brand);border-radius:var(--radius);padding:1.1rem 1.3rem;max-width:820px}
.brand-note svg{width:19px;height:19px;flex:none;color:var(--brand-purple);margin-top:.15rem}
.brand-note a{color:var(--brand-purple);text-decoration:none;border-bottom:1px solid var(--border-brand)}

/* ---- typography ---- */
.type-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--bento-gap)}
.type-card{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2.2rem;display:flex;flex-direction:column}
.type-card .type-tag{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-purple);
  margin-bottom:1.2rem;display:inline-block}
.type-card .specimen-aa{font-family:'Geist',Arial,sans-serif;font-weight:500;font-size:clamp(3.6rem,8vw,5.4rem);line-height:.95;
  letter-spacing:-.03em;color:var(--primary);margin-bottom:1rem}
.type-card.mono .specimen-aa{font-family:'Geist Mono',ui-monospace,monospace;font-weight:500;letter-spacing:-.02em}
.type-card .specimen-name{font-family:var(--font-heading);font-weight:600;font-size:1.12rem;color:var(--primary)}
.type-card.mono .specimen-name{font-family:'Geist Mono',ui-monospace,monospace}
.type-card .specimen-role{font-size:.95rem;color:var(--text-body);margin-top:.35rem;margin-bottom:1.4rem}
.type-card .glyphs{font-family:'Geist',Arial,sans-serif;font-size:1.32rem;letter-spacing:.04em;color:var(--text-body);
  border-top:1px solid var(--border-dark);padding-top:1.3rem;line-height:1.6;margin-top:auto}
.type-card.mono .glyphs{font-family:'Geist Mono',ui-monospace,monospace;font-size:1.08rem}
.type-card .glyphs span{color:var(--primary)}
.type-card .weights{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.4rem}
.type-card .weights .w{font-family:var(--font-mono);font-size:.7rem;color:var(--text-body);background:var(--surface-soft);
  border:1px solid var(--border-dark);border-radius:var(--radius-pill);padding:.3rem .7rem}
.scale-row{display:flex;align-items:baseline;gap:1.6rem;padding:1.1rem 0;border-bottom:1px solid var(--border-dark)}
.scale-row:last-child{border-bottom:none}
.scale-row .sr-tok{font-family:var(--font-mono);font-size:.72rem;color:var(--brand-purple);min-width:96px;flex:none}
.scale-row .sr-demo{flex:1;color:var(--primary);letter-spacing:-.02em;line-height:1.15;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.scale-row .sr-meta{font-family:var(--font-mono);font-size:.68rem;color:var(--text-faded);text-align:right;min-width:210px;flex:none}
@media(max-width:760px){.scale-row{flex-wrap:wrap;gap:.5rem}.scale-row .sr-meta{text-align:left;min-width:0;width:100%}}

/* ---- tables ---- */
.btable-wrap{overflow-x:auto;border:1px solid var(--border-dark);border-radius:var(--radius);background:var(--white)}
.btable{width:100%;border-collapse:collapse;min-width:620px}
.btable th{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faded);
  text-align:left;padding:.95rem 1.2rem;border-bottom:1px solid var(--border-dark);white-space:nowrap;font-weight:500}
.btable td{padding:1rem 1.2rem;border-bottom:1px solid var(--border-dark);font-size:.94rem;color:var(--text-body);line-height:1.5;vertical-align:top}
.btable tr:last-child td{border-bottom:none}
.btable tr:hover td{background:var(--surface-tint)}
.btable td.k{color:var(--primary);font-weight:500}
.btable td.mono{font-family:var(--font-mono);font-size:.8rem;color:var(--brand-purple);white-space:nowrap}
.btable td.yes{color:var(--primary)}
.btable td.no{color:var(--text-faded);text-decoration:line-through;text-decoration-color:rgba(210,63,49,.5)}

/* ---- component showcase ---- */
.demo{background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius);padding:2rem}
.demo--soft{background:var(--surface-soft)}
.demo-row{display:flex;gap:1.1rem;flex-wrap:wrap;align-items:flex-start}
.demo-item{display:flex;flex-direction:column;gap:.5rem;align-items:flex-start}
.demo-lab{font-family:var(--font-mono);font-size:.66rem;color:var(--text-faded);letter-spacing:.04em}
.demo-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--bento-gap)}
.demo-grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--bento-gap)}
.demo-grid-4{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--bento-gap)}

/* building blocks ported from the design system */
.brand-page .mod-icon{width:54px;height:54px;border-radius:13px;background:var(--brand-gradient);display:flex;align-items:center;
  justify-content:center;box-shadow:var(--shadow-sm)}
.brand-page .mod-icon svg{width:28px;height:28px;display:block}
.brand-page .mod-icon.sm{width:44px;height:44px;border-radius:11px}
.brand-page .mod-icon.sm svg{width:22px;height:22px}
.brand-page .step-num{width:40px;height:40px;border-radius:11px;background:var(--brand-gradient);color:#fff;font-family:var(--font-heading);
  font-weight:700;font-size:1.05rem;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-sm)}
.brand-page .det-cat{font-family:var(--font-mono);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--brand-purple);
  background:var(--surface-tint);border:1px solid var(--border-brand);padding:.24rem .55rem;border-radius:999px;display:inline-block}
.brand-page .checks{display:grid;gap:.8rem}
.brand-page .ckrow{display:flex;align-items:flex-start;gap:.7rem;font-size:.98rem;color:var(--primary);line-height:1.45}
.brand-page .ckrow i{width:22px;height:22px;flex:none;border-radius:6px;background:var(--surface-tint);border:1px solid var(--border-brand);
  display:inline-flex;align-items:center;justify-content:center;margin-top:1px;color:var(--brand-purple)}
.brand-page .ckrow i svg{width:12px;height:12px}
.brand-page .ckrow.x i{background:var(--danger-soft);border-color:rgba(210,63,49,.3);color:var(--danger)}
.brand-page .flist{list-style:none;display:grid;gap:.55rem}
.brand-page .flist li{font-family:var(--font-mono);font-size:.82rem;color:var(--text-body);padding-left:1.1rem;position:relative;line-height:1.5}
.brand-page .flist li::before{content:"";position:absolute;left:0;top:.5em;width:5px;height:5px;border-radius:50%;background:var(--brand-purple)}
.brand-page .hero-stat{display:flex;align-items:center;gap:1rem;padding:1.1rem 1.3rem;background:var(--surface-tint);
  border:1px solid var(--border-brand);border-radius:var(--radius);max-width:440px}
.brand-page .hero-stat .n{font-family:var(--font-heading);font-weight:700;font-size:2rem;letter-spacing:-.03em;color:var(--brand-purple);line-height:1}
.brand-page .hero-stat .t{font-size:.92rem;color:var(--text-body);line-height:1.4}
.brand-page .codechip{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-mono);font-size:.72rem;color:var(--text-body);
  background:var(--surface-soft);border:1px solid var(--border-dark);padding:.4rem .8rem;border-radius:var(--radius-pill)}
.brand-page .codechip b{color:var(--brand-purple);font-weight:600}
.brand-page .tag-row{display:flex;flex-wrap:wrap;gap:.6rem}
.brand-page .statusbar{margin-bottom:0}

/* signature product visual: Ask Viq console */
.viz-wrap{position:relative;min-height:400px;display:flex;align-items:center;justify-content:center;padding:1.5rem 0}
.viz-glow{position:absolute;width:340px;height:340px;border-radius:50%;
  background:radial-gradient(circle,rgba(85,41,214,.18),transparent 62%);animation:vizPulse 6s ease-in-out infinite}
@keyframes vizPulse{0%,100%{transform:scale(.92);opacity:.6}50%{transform:scale(1.05);opacity:1}}
@keyframes vizFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
@keyframes cvIn{to{opacity:1;transform:none}}
.cv-card{position:relative;z-index:2;width:384px;max-width:100%;background:#fff;border:1px solid var(--border-dark);border-radius:18px;
  box-shadow:var(--shadow-lg);overflow:hidden;animation:vizFloat 7s ease-in-out infinite}
.cv-head{display:flex;align-items:center;gap:.6rem;padding:.95rem 1.1rem;border-bottom:1px solid var(--border-dark)}
.cv-ava{width:32px;height:32px;border-radius:9px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center;
  flex:none;box-shadow:var(--shadow-sm)}
.cv-ava svg{width:18px;height:18px;display:block}
.cv-id{display:flex;flex-direction:column;line-height:1.25}
.cv-name{font-family:var(--font-heading);font-weight:600;font-size:.95rem}
.cv-sub{font-family:var(--font-mono);font-size:.6rem;color:var(--text-faded);display:flex;align-items:center;gap:.35rem}
.cv-tag{margin-left:auto;font-family:var(--font-mono);font-size:.6rem;color:var(--brand-purple);background:var(--surface-tint);
  border:1px solid var(--border-brand);padding:.24rem .55rem;border-radius:999px}
.cv-body{padding:1.05rem 1.1rem;display:flex;flex-direction:column;gap:.65rem}
.cv-q{align-self:flex-end;max-width:84%;background:var(--brand-purple);color:#fff;font-size:.82rem;line-height:1.4;padding:.55rem .8rem;
  border-radius:14px 14px 4px 14px;opacity:0;transform:translateY(10px);animation:cvIn .55s var(--ease) .3s forwards}
.cv-aslot{position:relative;align-self:flex-start;max-width:92%}
.cv-typing{position:absolute;top:0;left:0;display:flex;gap:5px;padding:.7rem .85rem;background:var(--surface-soft);
  border:1px solid var(--border-dark);border-radius:14px 14px 14px 4px;opacity:0;animation:cvType 1.2s ease .85s forwards}
@keyframes cvType{0%{opacity:0}14%{opacity:1}82%{opacity:1}100%{opacity:0}}
.cv-typing span{width:6px;height:6px;border-radius:50%;background:var(--brand-purple-light);animation:cvBlink 1s infinite}
.cv-typing span:nth-child(2){animation-delay:.16s}
.cv-typing span:nth-child(3){animation-delay:.32s}
@keyframes cvBlink{0%,100%{opacity:.3;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}
.cv-a{position:relative;background:var(--surface-soft);border:1px solid var(--border-dark);color:var(--primary);font-size:.82rem;
  line-height:1.45;padding:.6rem .8rem;border-radius:14px 14px 14px 4px;opacity:0;transform:translateY(10px);
  animation:cvIn .55s var(--ease) 2.1s forwards}
.cv-a b{color:var(--brand-purple);font-weight:600}
.cv-steps{display:grid;gap:.5rem;margin-top:.25rem}
.cv-step{display:flex;align-items:center;gap:.6rem;font-family:var(--font-mono);font-size:.7rem;color:var(--text-body);opacity:0;
  transform:translateY(8px);animation:cvIn .5s var(--ease) forwards}
.cv-step:nth-child(1){animation-delay:2.7s}
.cv-step:nth-child(2){animation-delay:3.3s}
.cv-step:nth-child(3){animation-delay:3.9s}
.cv-step i{width:20px;height:20px;flex:none;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;
  background:var(--success-soft);border:1px solid rgba(31,158,84,.3);color:var(--success)}
.cv-step i svg{width:11px;height:11px}
.cv-step .k{color:var(--primary);font-weight:500}
.cv-foot{display:flex;align-items:center;gap:.7rem;padding:.85rem 1.1rem;border-top:1px solid var(--border-dark);opacity:0;
  transform:translateY(8px);animation:cvIn .5s var(--ease) 4.4s forwards}
.cv-impact{font-family:var(--font-mono);font-size:.62rem;color:var(--text-faded);line-height:1.3}
.cv-impact b{display:block;font-family:var(--font-heading);font-size:1.05rem;color:var(--success);letter-spacing:-.01em}
.cv-apply{margin-left:auto;font-size:.78rem;font-weight:500;color:#fff;background:var(--brand-purple);border-radius:999px;
  padding:.5rem .95rem;display:inline-flex;align-items:center;gap:.4rem;animation:cvApply 2.4s 4.8s infinite}
@keyframes cvApply{0%{box-shadow:0 0 0 0 rgba(85,41,214,.4)}70%{box-shadow:0 0 0 10px rgba(85,41,214,0)}100%{box-shadow:0 0 0 0 rgba(85,41,214,0)}}
.cv-apply svg{width:13px;height:13px}
/* hold the choreography until the block scrolls into view */
.viz-hold .cv-q,.viz-hold .cv-typing,.viz-hold .cv-a,.viz-hold .cv-step,.viz-hold .cv-foot,.viz-hold .cv-apply{animation-play-state:paused}
.viz-hold.in .cv-q,.viz-hold.in .cv-typing,.viz-hold.in .cv-a,.viz-hold.in .cv-step,.viz-hold.in .cv-foot,.viz-hold.in .cv-apply{animation-play-state:running}

/* detect / explain / fix loop card */
.lp-card{position:relative;z-index:2;width:360px;max-width:100%;background:#fff;border:1px solid var(--border-dark);border-radius:18px;
  box-shadow:var(--shadow-lg);padding:1.2rem;animation:vizFloat 7s ease-in-out infinite}
.lp-head{display:flex;align-items:center;gap:.5rem;margin-bottom:1rem}
.lp-name{font-family:var(--font-heading);font-weight:600;font-size:.95rem}
.lp-sub{font-family:var(--font-mono);font-size:.6rem;color:var(--text-faded);display:flex;align-items:center;gap:.35rem}
.lp-tag{margin-left:auto;font-family:var(--font-mono);font-size:.6rem;color:var(--brand-purple);background:var(--surface-tint);
  border:1px solid var(--border-brand);padding:.24rem .55rem;border-radius:999px}
.lp-row{display:flex;align-items:center;gap:.75rem;padding:.8rem .85rem;border:1px solid var(--border-dark);border-radius:11px;
  background:#fff;margin-bottom:.7rem;opacity:.5;animation:lpStep 6s infinite}
.lp-row:last-child{margin-bottom:0}
.lp-row:nth-child(2){animation-delay:0s}
.lp-row:nth-child(3){animation-delay:2s}
.lp-row:nth-child(4){animation-delay:4s}
@keyframes lpStep{0%{opacity:.5;border-color:var(--border-dark);transform:none}
  6%{opacity:1;border-color:var(--border-brand);box-shadow:var(--shadow-md);transform:translateY(-2px)}
  28%{opacity:1;border-color:var(--border-brand)}
  34%,100%{opacity:.5;border-color:var(--border-dark);box-shadow:none;transform:none}}
.lp-ic{width:34px;height:34px;flex:none;border-radius:9px;background:var(--brand-gradient);display:flex;align-items:center;justify-content:center}
.lp-ic svg{width:18px;height:18px;display:block}
.lp-tx{display:flex;flex-direction:column;line-height:1.3}
.lp-tx b{font-size:.9rem;font-weight:600}
.lp-tx span{font-family:var(--font-mono);font-size:.62rem;color:var(--text-faded)}
.lp-state{margin-left:auto;font-family:var(--font-mono);font-size:.6rem;color:var(--brand-purple);text-align:right}

/* ---- four pillars ---- */
.pillar-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--bento-gap)}
.pillar-card{display:flex;flex-direction:column;text-decoration:none;color:inherit}
.pillar-card .p-top{display:flex;align-items:center;gap:.9rem;margin-bottom:1.2rem}
.pillar-card .p-ic{width:46px;height:46px;flex:none;border-radius:12px;background:var(--surface-tint);border:1px solid var(--border-brand);
  display:flex;align-items:center;justify-content:center}
.pillar-card .p-ic img{width:24px;height:24px;display:block}
.pillar-card h3{margin-bottom:.15rem}
.pillar-card .p-meta{font-family:var(--font-mono);font-size:.64rem;letter-spacing:.1em;text-transform:uppercase;color:var(--brand-purple)}
.pillar-card .p-what{font-size:.97rem;color:var(--text-body);line-height:1.55;margin-bottom:1.1rem}
.pillar-card .p-write{font-family:var(--font-mono);font-size:.72rem;color:var(--text-faded);line-height:1.6;border-top:1px solid var(--border-dark);
  padding-top:.9rem;margin-top:auto}

/* ---- voice pillars ---- */
.vp-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--bento-gap)}
.vp-card{display:flex;flex-direction:column}
.vp-n{font-family:var(--font-mono);font-size:.72rem;letter-spacing:.14em;color:var(--brand-purple);margin-bottom:.8rem}
.vp-card h3{font-size:1.32rem;letter-spacing:-.02em;margin-bottom:.7rem}
.vp-card > p{font-size:.98rem;color:var(--text-body);line-height:1.6;margin-bottom:1.5rem}
.ex{display:flex;align-items:flex-start;gap:.7rem;font-size:.94rem;line-height:1.5;padding:.85rem 1rem;border-radius:8px;margin-top:.6rem}
.ex svg{width:15px;height:15px;flex:none;margin-top:.22rem}
.ex--yes{background:var(--success-soft);border:1px solid rgba(31,158,84,.22);color:var(--primary)}
.ex--yes svg{color:var(--success)}
.ex--no{background:var(--danger-soft);border:1px solid rgba(210,63,49,.2);color:var(--text-body)}
.ex--no svg{color:var(--danger)}
.ex-stack{margin-top:auto}

/* ---- triggers ---- */
.stage{margin-bottom:3.4rem}
.stage:last-child{margin-bottom:0}
.stage-head{display:flex;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:.8rem}
.stage-tag{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.14em;color:#fff;background:var(--brand-purple);
  border-radius:var(--radius-pill);padding:.32rem .8rem}
.stage-q{font-family:var(--font-heading);font-weight:600;font-size:1.35rem;letter-spacing:-.02em;color:var(--primary)}
.stage-intro{font-size:1rem;color:var(--text-body);line-height:1.6;max-width:70ch;margin-bottom:1.8rem}
.trig-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--bento-gap)}
.trig-card{display:flex;flex-direction:column}
.trig-card .t-n{font-family:var(--font-mono);font-size:.68rem;letter-spacing:.14em;color:var(--brand-purple);margin-bottom:.7rem}
.trig-card h3{font-size:1.12rem;margin-bottom:.6rem}
.trig-card > p{font-size:.94rem;color:var(--text-body);line-height:1.6;margin-bottom:1.2rem}
.obj-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--bento-gap)}
.obj-card .oq{font-family:var(--font-heading);font-weight:600;font-size:1.02rem;color:var(--primary);margin-bottom:.6rem}
.obj-card .oa{font-size:.96rem;color:var(--text-body);line-height:1.6}
.proof-list{list-style:none;display:grid;gap:.9rem}
.proof-list li{display:flex;gap:.8rem;align-items:flex-start;font-size:.96rem;color:var(--text-body);line-height:1.55}
.proof-list li::before{content:"";width:6px;height:6px;flex:none;border-radius:50%;background:var(--brand-purple);margin-top:.6rem}

/* ---- vocabulary ---- */
.ban-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.ban{display:flex;align-items:flex-start;gap:.75rem;padding:1rem 1.1rem;background:var(--white);border:1px solid var(--border-dark);
  border-radius:var(--radius)}
.ban i{width:22px;height:22px;flex:none;border-radius:6px;background:var(--danger-soft);border:1px solid rgba(210,63,49,.3);
  color:var(--danger);display:inline-flex;align-items:center;justify-content:center;margin-top:.1rem}
.ban i svg{width:12px;height:12px}
.ban .bt{font-family:var(--font-mono);font-size:.84rem;color:var(--primary);display:block;margin-bottom:.25rem}
.ban .bw{font-size:.88rem;color:var(--text-body);line-height:1.45}
.dash-callout{background:var(--brand-purple-deep);border-radius:var(--radius);padding:2.6rem;color:#fff;position:relative;overflow:hidden;
  margin-bottom:var(--bento-gap)}
.dash-callout::after{content:"";position:absolute;top:-40%;right:-6%;width:46%;height:180%;
  background:radial-gradient(circle,rgba(85,41,214,.6),transparent 64%);pointer-events:none}
.dash-callout > *{position:relative;z-index:1}
.dash-callout .dc-eyebrow{font-family:var(--font-mono);font-size:.7rem;letter-spacing:.16em;text-transform:uppercase;
  color:var(--brand-purple-light);margin-bottom:1rem}
.dash-callout h3{font-size:clamp(1.4rem,2.6vw,2rem);font-weight:600;letter-spacing:-.02em;color:#fff;margin-bottom:.9rem;max-width:20ch}
.dash-callout p{color:rgba(255,255,255,.66);font-size:1rem;line-height:1.6;max-width:60ch}
.hook-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.hook{padding:1.2rem 1.3rem;background:var(--white);border:1px solid var(--border-dark);border-radius:var(--radius)}
.hook b{font-family:var(--font-heading);font-weight:600;font-size:1.06rem;color:var(--brand-purple);display:block;margin-bottom:.35rem}
.hook span{font-size:.9rem;color:var(--text-body);line-height:1.5}

/* ---- patterns / channels ---- */
.pat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:var(--bento-gap)}
.pat-card .p-tag{font-family:var(--font-mono);font-size:.66rem;letter-spacing:.14em;text-transform:uppercase;color:var(--brand-purple);
  margin-bottom:.7rem}
.pat-card h3{font-size:1.22rem;margin-bottom:.3rem}
.pat-card .p-use{font-family:var(--font-mono);font-size:.72rem;color:var(--text-faded);margin-bottom:1.3rem}
.pat-steps{list-style:none;counter-reset:p;display:grid;gap:.75rem}
.pat-steps li{counter-increment:p;position:relative;padding-left:2rem;font-size:.94rem;color:var(--text-body);line-height:1.5}
.pat-steps li::before{content:counter(p,decimal-leading-zero);position:absolute;left:0;top:.1rem;font-family:var(--font-mono);
  font-size:.68rem;color:var(--brand-purple)}
.chan-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--bento-gap)}
.chan-card h3{font-size:1.14rem;margin-bottom:.2rem}
.chan-card .c-where{font-family:var(--font-mono);font-size:.7rem;color:var(--brand-purple);margin-bottom:1.2rem}
.chan-list{list-style:none;display:grid;gap:.8rem}
.chan-list li{display:flex;gap:.65rem;align-items:flex-start;font-size:.93rem;color:var(--text-body);line-height:1.5}
.chan-list li::before{content:"";width:5px;height:5px;flex:none;border-radius:50%;background:var(--brand-purple);margin-top:.55rem}

/* ---- rewrites ---- */
.rw{border:1px solid var(--border-dark);border-radius:var(--radius);background:var(--white);overflow:hidden;margin-bottom:var(--bento-gap)}
.rw:last-child{margin-bottom:0}
.rw-head{padding:1.1rem 1.5rem;border-bottom:1px solid var(--border-dark);font-family:var(--font-mono);font-size:.72rem;
  letter-spacing:.1em;text-transform:uppercase;color:var(--brand-purple);background:var(--surface-tint)}
.rw-body{display:grid;grid-template-columns:1fr 1fr}
.rw-cell{padding:1.6rem 1.5rem}
.rw-cell:first-child{border-right:1px solid var(--border-dark);background:var(--surface-soft)}
.rw-lab{display:inline-flex;align-items:center;gap:.45rem;font-family:var(--font-mono);font-size:.66rem;letter-spacing:.1em;
  text-transform:uppercase;margin-bottom:.9rem}
.rw-lab svg{width:13px;height:13px}
.rw-lab.b{color:var(--danger)}
.rw-lab.a{color:var(--success)}
.rw-cell p{font-size:.98rem;line-height:1.6}
.rw-cell:first-child p{color:var(--text-faded)}
.rw-cell:last-child p{color:var(--primary)}
.rw-note{padding:1.1rem 1.5rem;border-top:1px solid var(--border-dark);font-size:.9rem;color:var(--text-body);line-height:1.55;
  background:var(--surface-soft)}
@media(max-width:760px){.rw-body{grid-template-columns:1fr}.rw-cell:first-child{border-right:none;border-bottom:1px solid var(--border-dark)}}

/* ---- downloads ---- */
.dl-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--bento-gap)}
.dl-card{display:flex;flex-direction:column;text-decoration:none;color:inherit;background:var(--white);border:1px solid var(--border-dark);
  border-radius:var(--radius);padding:2rem;transition:transform .25s var(--ease),border-color .25s,box-shadow .3s}
.dl-card:hover{transform:translateY(-3px);border-color:var(--border-strong);box-shadow:var(--shadow-lg)}
.dl-ext{width:52px;height:52px;border-radius:13px;background:var(--brand-gradient);color:#fff;display:flex;align-items:center;
  justify-content:center;font-family:var(--font-mono);font-size:.72rem;font-weight:500;margin-bottom:1.4rem;box-shadow:var(--shadow-sm)}
.dl-card h3{margin-bottom:.55rem}
.dl-card .d-body{font-size:.94rem;color:var(--text-body);line-height:1.55;flex:1;margin-bottom:1.4rem}
.dl-foot{display:flex;align-items:center;justify-content:space-between;gap:.8rem;font-family:var(--font-mono);font-size:.7rem;
  color:var(--text-faded);border-top:1px solid var(--border-dark);padding-top:1rem}
.dl-foot .go{display:inline-flex;align-items:center;gap:.35rem;color:var(--brand-purple)}
.dl-foot .go svg{width:14px;height:14px}

/* ---- final ---- */
.brand-final{text-align:center}
.brand-final h2{max-width:20ch;margin:0 auto 1.3rem}
.brand-final .lede{margin:0 auto 2.4rem}
.brand-final .cta-row{justify-content:center}

/* ---- responsive ---- */
@media(max-width:1024px){
  .swatch-grid{grid-template-columns:repeat(3,1fr)}
  .pillar-grid,.trig-grid,.chan-grid{grid-template-columns:repeat(2,1fr)}
  .dl-grid{grid-template-columns:repeat(2,1fr)}
  .demo-grid-4{grid-template-columns:repeat(2,1fr)}
  .demo-grid-3{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:900px){
  .logo-grid,.type-grid,.vp-grid,.pat-grid,.grad-grid,.space-grid,.demo-grid,.obj-grid,.ban-grid,.hook-grid,.word-grid{grid-template-columns:1fr}
  .pillar-grid,.trig-grid,.chan-grid{grid-template-columns:1fr}
}
@media(max-width:640px){
  .swatch-grid{grid-template-columns:repeat(2,1fr)}
  .dl-grid,.demo-grid-3,.demo-grid-4{grid-template-columns:1fr}
  .logo-foot{flex-direction:column;align-items:flex-start}
  .ns{padding:2rem}
}
@media(prefers-reduced-motion:reduce){
  .brand-page *{animation:none !important}
}
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="brand-page">
        {/* ============================== HERO ============================== */}
        <section className="section section--hero">
          <div className="container">
            <div className="brand-hero">
              <div className="eyebrow reveal in">Brand book {BRAND_VERSION}</div>
              <h1 className="reveal in">
                The <span className="grad">Vortex IQ</span> brand, in one place.
              </h1>
              <p className="lede reveal in">
                Logo rules, colour tokens, typography, UI components, the four pillars, and the full
                tone-of-voice guide. Everything a partner, a designer, or a writer needs to put the AI
                Operating System for e-commerce in front of an audience. On brand, every time.
              </p>
              <div className="cta-row reveal in">
                <a className="btn" href={DL_MD} download>
                  Download the brand book
                  <DownloadIcon />
                </a>
                <a className="btn btn--ghost" href={DL_HTML} download>
                  Get it as HTML
                  <DownloadIcon />
                </a>
              </div>
              <div className="brand-meta reveal in">
                <span className="chip">
                  <span className="dot" />
                  Updated {BRAND_UPDATED}
                </span>
                <span className="chip">Owned by marketing and product</span>
                <span className="chip">Free to use, no sign-up</span>
              </div>
            </div>
          </div>
        </section>

        <BrandSectionNav sections={SECTIONS} />

        {/* =========================== FOUNDATION =========================== */}
        <section className="section section--soft" id="foundation">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">01</span>
              <div>
                <h2>Start with the promise.</h2>
                <p>
                  Every design and every sentence exists to make one claim believable. If a decision does not
                  serve this line, it is the wrong decision.
                </p>
              </div>
            </div>

            <div className="ns reveal">
              <p className="ns-promise">{NORTH_STAR.promise}</p>
              <p className="ns-support">{NORTH_STAR.support}</p>
            </div>

            <div className="word-grid">
              {NORTH_STAR.words.map((w) => (
                <div className="card word-card reveal" key={w.word}>
                  <div className="w-key">{w.word}</div>
                  <p className="muted" style={{ fontSize: "0.97rem", lineHeight: 1.6 }}>
                    {w.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="sub-lab">One loop, five steps</p>
            <div className="loop reveal">
              {LOOP.map((l) => (
                <div className="lnode" key={l.step}>
                  <span className="step">{l.step}</span>
                  <b>{l.name}</b>
                  <span className="do">{l.detail}</span>
                </div>
              ))}
            </div>
            <div className="loop-meta reveal">
              <span>Four pillars run the loop. Five steps, continuously.</span>
              <span>Detect. Explain. Fix.</span>
            </div>
          </div>
        </section>

        {/* ============================== LOGO ============================== */}
        <section className="section" id="logo">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">02</span>
              <div>
                <h2>One mark, two finishes.</h2>
                <p>
                  Use the full-colour mark on light surfaces and the white mark on dark or brand-deep
                  backgrounds. Keep clear space around it, and never recolour or distort it.
                </p>
              </div>
            </div>

            <div className="logo-grid">
              <div className="logo-card reveal">
                <div className="logo-stage logo-stage--light">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={LOGO_COLOR} alt="Vortex IQ full-colour logo" />
                </div>
                <div className="logo-foot">
                  <div>
                    <div className="lf-name">Full-colour logo</div>
                    <div className="lf-sub">For light and white backgrounds</div>
                  </div>
                  <a className="dl-link" href={LOGO_COLOR} download>
                    <DownloadIcon size={15} />
                    SVG
                  </a>
                </div>
              </div>

              <div className="logo-card reveal">
                <div className="logo-stage logo-stage--deep">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={LOGO_WHITE} alt="Vortex IQ white logo" />
                </div>
                <div className="logo-foot">
                  <div>
                    <div className="lf-name">White logo</div>
                    <div className="lf-sub">For dark and brand-deep backgrounds</div>
                  </div>
                  <a className="dl-link" href={LOGO_WHITE} download>
                    <DownloadIcon size={15} />
                    SVG
                  </a>
                </div>
              </div>
            </div>

            <div className="space-grid">
              <div className="clearbox reveal">
                <div className="clearframe">
                  <span className="cf-t">clear space = height of the V</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={LOGO_COLOR} alt="Vortex IQ logo with the minimum clear space marked around it" />
                  <span className="cf-b">on all four sides</span>
                </div>
              </div>
              <div className="card reveal">
                <h3>Minimum size</h3>
                <p className="muted" style={{ fontSize: "0.95rem", marginBottom: "1.6rem", lineHeight: 1.55 }}>
                  Below these sizes the IQ stops resolving. If the space is tighter than this, use the icon on
                  its own instead of shrinking the full mark.
                </p>
                <div className="minsize">
                  <div className="minrow">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={LOGO_COLOR} alt="Vortex IQ logo at minimum digital size" style={{ height: 22 }} />
                    <div className="mr-meta">
                      <b>Digital</b>
                      110px wide minimum
                    </div>
                  </div>
                  <div className="minrow">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={LOGO_COLOR} alt="Vortex IQ logo at minimum print size" style={{ height: 18 }} />
                    <div className="mr-meta">
                      <b>Print</b>
                      25mm wide minimum
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="sub-lab">Usage rules</p>
            <div className="grid grid-2">
              <div className="card card--tint reveal">
                <div className="rule-head">
                  <span className="rule-ic rule-ic--do">
                    <Tick />
                  </span>
                  <b>Do</b>
                </div>
                <ul className="rule-list rule-list--do">
                  {LOGO_DO.map((r) => (
                    <li key={r}>
                      <Tick />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card card--tint reveal">
                <div className="rule-head">
                  <span className="rule-ic rule-ic--no">
                    <Cross />
                  </span>
                  <b>Don&apos;t</b>
                </div>
                <ul className="rule-list rule-list--no">
                  {LOGO_DONT.map((r) => (
                    <li key={r}>
                      <Cross />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="brand-note reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <span>
                Need a transparent PNG, an EPS, the icon on its own, or a co-branded lock-up? Email{" "}
                <a href="mailto:hey@vortexiq.ai?subject=Brand%20assets">hey@vortexiq.ai</a> and we will send
                the full asset pack the same day.
              </span>
            </div>
          </div>
        </section>

        {/* ============================= COLOUR ============================= */}
        <section className="section section--soft" id="colour">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">03</span>
              <div>
                <h2>Purple leads. Everything else supports.</h2>
                <p>
                  These are the exact tokens the product and the website run on. Click any value to copy it.
                  Status colours carry meaning, so they never appear as decoration.
                </p>
              </div>
            </div>

            {COLOUR_GROUPS.map((g) => (
              <div key={g.name}>
                <p className="sub-lab">{g.name}</p>
                <p className="pal-note">{g.note}</p>
                <div className="swatch-grid">
                  {g.swatches.map((s) => (
                    <div className="swatch reveal" key={s.token}>
                      <span
                        className="swatch-fill"
                        style={{
                          background: s.hex,
                          borderBottom: s.light ? "1px solid var(--border-dark)" : "none",
                        }}
                      />
                      <div className="swatch-meta">
                        <div className="nm">{s.token}</div>
                        <div className="role">{s.role}</div>
                        <CopyChip value={s.hex} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p className="sub-lab">Gradients</p>
            <div className="grad-grid">
              {GRADIENTS.map((g) => (
                <div className="grad-card reveal" key={g.token}>
                  <div className="grad-fill" style={{ background: g.css }} />
                  <div className="grad-meta">
                    <div className="nm">{g.token}</div>
                    <div className="role">{g.role}</div>
                    <CopyChip value={g.css} label="Copy CSS" />
                  </div>
                </div>
              ))}
            </div>

            <div className="brand-note reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <span>
                Contrast rule: purple text sits on white or the purple tint, never on the mid purple. White
                text sits on purple or purple-deep. Every text and background pair we ship clears WCAG AA at
                body size.
              </span>
            </div>
          </div>
        </section>

        {/* =========================== TYPOGRAPHY =========================== */}
        <section className="section" id="type">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">04</span>
              <div>
                <h2>Geist, end to end.</h2>
                <p>
                  Geist sets every headline and paragraph. Geist Mono handles eyebrows, labels, metadata, and
                  code: the small, precise type that gives the brand its technical edge. Stylistic sets ss01,
                  ss03 and ss04 are on site-wide.
                </p>
              </div>
            </div>

            <div className="type-grid">
              <div className="type-card reveal">
                <span className="type-tag">Headings and body</span>
                <div className="specimen-aa">Aa</div>
                <div className="specimen-name">Geist</div>
                <div className="specimen-role">Display, headings, and running text.</div>
                <div className="weights">
                  <span className="w">Regular 400</span>
                  <span className="w">Medium 500</span>
                  <span className="w">Semibold 600</span>
                  <span className="w">Bold 700</span>
                </div>
                <div className="glyphs">
                  <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                  <br />
                  abcdefghijklmnopqrstuvwxyz 0123456789
                </div>
              </div>

              <div className="type-card mono reveal">
                <span className="type-tag">Labels and code</span>
                <div className="specimen-aa">Aa</div>
                <div className="specimen-name">Geist Mono</div>
                <div className="specimen-role">Eyebrows, labels, metadata, and code.</div>
                <div className="weights">
                  <span className="w">Regular 400</span>
                  <span className="w">Medium 500</span>
                </div>
                <div className="glyphs">
                  <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>
                  <br />
                  abcdefghijklmnopqrstuvwxyz 0123456789
                </div>
              </div>
            </div>

            <p className="sub-lab">The scale</p>
            <div className="card reveal" style={{ padding: "1rem 2rem" }}>
              {TYPE_SCALE.map((t) => (
                <div className="scale-row" key={t.token}>
                  <span className="sr-tok">{t.token}</span>
                  <span
                    className="sr-demo"
                    style={{
                      fontFamily: t.token === "eyebrow" || t.token === "label" ? "var(--font-mono)" : "var(--font-heading)",
                      fontWeight: Number(t.weight),
                      fontSize:
                        t.token === "display" || t.token === "h1"
                          ? "clamp(1.7rem,3.4vw,2.6rem)"
                          : t.token === "h2"
                            ? "clamp(1.4rem,2.6vw,2rem)"
                            : t.token === "h3"
                              ? "1.18rem"
                              : t.token === "lede"
                                ? "1.22rem"
                                : t.token === "body"
                                  ? "1.0625rem"
                                  : "0.72rem",
                      textTransform: t.token === "eyebrow" || t.token === "label" ? "uppercase" : undefined,
                      letterSpacing: t.token === "eyebrow" || t.token === "label" ? "0.16em" : undefined,
                      color: t.token === "eyebrow" || t.token === "label" ? "var(--brand-purple)" : undefined,
                    }}
                  >
                    The AI OS for commerce
                  </span>
                  <span className="sr-meta">
                    {t.size} · {t.use}
                  </span>
                </div>
              ))}
            </div>

            <div className="brand-note reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <span>
                One h1 per page, and headings never skip a level. Headline tracking is negative (-0.02em to
                -0.025em); mono labels run positive (0.14em to 0.16em). That contrast is a brand signal, so
                keep it.
              </span>
            </div>
          </div>
        </section>

        {/* ============================= TOKENS ============================= */}
        <section className="section section--soft" id="tokens">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">05</span>
              <div>
                <h2>The rest of the system.</h2>
                <p>
                  Radius, layout rhythm, elevation, and motion. Four small sets that do most of the work of
                  making a new page look like it belongs.
                </p>
              </div>
            </div>

            <div className="demo-grid">
              {TOKEN_GROUPS.map((g) => (
                <div key={g.name} className="reveal">
                  <p className="sub-lab" style={{ marginTop: 0 }}>
                    {g.name}
                  </p>
                  <div className="btable-wrap">
                    <table className="btable" style={{ minWidth: 0 }}>
                      <tbody>
                        {g.rows.map((r) => (
                          <tr key={r.token}>
                            <td className="mono">{r.token}</td>
                            <td className="k">{r.value}</td>
                            <td>{r.use}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================== COMPONENTS =========================== */}
        <section className="section" id="components">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">06</span>
              <div>
                <h2>The parts we build pages from.</h2>
                <p>
                  Everything below is live CSS from the shipped design system, not a screenshot. Buttons are
                  always pills. Cards are always 10px. Nothing here needs inventing twice.
                </p>
              </div>
            </div>

            <p className="sub-lab">Buttons</p>
            <div className="demo reveal">
              <div className="demo-row">
                <div className="demo-item">
                  <span className="btn" style={{ height: 56, padding: "0 30px", fontSize: "1.22rem" }}>Book a demo</span>
                  <span className="demo-lab">primary, large</span>
                </div>
                <div className="demo-item">
                  <span className="btn">Run a free audit</span>
                  <span className="demo-lab">primary</span>
                </div>
                <div className="demo-item">
                  <span className="btn btn--sm">Get started</span>
                  <span className="demo-lab">primary, small</span>
                </div>
                <div className="demo-item">
                  <span className="btn btn--ghost">See how it works →</span>
                  <span className="demo-lab">ghost</span>
                </div>
                <div className="demo-item">
                  <span className="textlink">Read the customer stories →</span>
                  <span className="demo-lab">text link</span>
                </div>
              </div>
            </div>

            <p className="sub-lab">Chips, badges, and status</p>
            <div className="demo reveal">
              <div className="demo-row">
                <div className="demo-item">
                  <span className="chip">Default</span>
                  <span className="demo-lab">chip</span>
                </div>
                <div className="demo-item">
                  <span className="chip chip--brand">AI OS</span>
                  <span className="demo-lab">chip, brand</span>
                </div>
                <div className="demo-item">
                  <span className="chip chip--ok">
                    <span className="dot" />
                    Live, 200+ connectors
                  </span>
                  <span className="demo-lab">chip, healthy</span>
                </div>
                <div className="demo-item">
                  <span className="chip chip--danger">Revenue at risk</span>
                  <span className="demo-lab">chip, incident</span>
                </div>
                <div className="demo-item">
                  <span className="det-cat">For merchants</span>
                  <span className="demo-lab">category tag</span>
                </div>
                <div className="demo-item">
                  <span className="codechip">
                    <span className="dot" />
                    Current version <b>v2.4.0</b> (Stable)
                  </span>
                  <span className="demo-lab">version chip</span>
                </div>
              </div>
              <div className="demo-row" style={{ marginTop: "1.4rem" }}>
                <div className="demo-item">
                  <span className="statusbar">
                    <span className="dot" />
                    Nerve Centre, live across 200+ connectors
                  </span>
                  <span className="demo-lab">status bar</span>
                </div>
              </div>
            </div>

            <p className="sub-lab">Cards and stats</p>
            <div className="demo-grid-3">
              <div className="card reveal">
                <div className="det-cat" style={{ marginBottom: "0.9rem" }}>Feature</div>
                <h3>Nerve Centre</h3>
                <p className="muted" style={{ fontSize: "0.95rem" }}>
                  Watches every KPI live across 200+ connectors.
                </p>
              </div>
              <div className="card card--tint reveal">
                <div className="det-cat" style={{ marginBottom: "0.9rem" }}>Tint</div>
                <h3>Vortex Mind</h3>
                <p className="muted" style={{ fontSize: "0.95rem" }}>
                  The memory graph that compounds, per store.
                </p>
              </div>
              <div className="card card--brand reveal">
                <div
                  className="det-cat"
                  style={{ marginBottom: "0.9rem", background: "rgba(255,255,255,.14)", borderColor: "rgba(255,255,255,.25)", color: "#fff" }}
                >
                  Brand gradient
                </div>
                <h3 style={{ color: "#fff" }}>Ask Viq™</h3>
                <p className="muted" style={{ fontSize: "0.95rem" }}>
                  Conversational agent, cited back to the graph.
                </p>
              </div>
            </div>

            <div className="demo-grid-4" style={{ marginTop: "var(--bento-gap)" }}>
              <div className="card reveal">
                <div className="stat stat--accent">1,400%</div>
                <div className="stat-label">organic growth, a merchant store, Google Analytics</div>
              </div>
              <div className="card reveal">
                <div className="stat">96%</div>
                <div className="stat-label">faster quote turnaround, Adobe Commerce B2B</div>
              </div>
              <div className="card card--brand reveal">
                <div className="stat stat--on-brand">200+</div>
                <div className="stat-label">connectors mapped onto one graph</div>
              </div>
              <div className="card reveal">
                <div className="stat">50%</div>
                <div className="stat-label">faster problem resolution</div>
              </div>
            </div>

            <p className="sub-lab">Building blocks</p>
            <div className="demo reveal">
              <div className="demo-row" style={{ gap: "2.4rem", marginBottom: "2.4rem" }}>
                <div className="demo-item">
                  <span className="mod-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 12h3l2-7 4 14 2-7h4" />
                    </svg>
                  </span>
                  <span className="demo-lab">gradient icon tile</span>
                </div>
                <div className="demo-item">
                  <span className="mod-icon sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="7" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </span>
                  <span className="demo-lab">icon tile, small</span>
                </div>
                <div className="demo-item">
                  <span className="step-num">3</span>
                  <span className="demo-lab">step number</span>
                </div>
                <div className="demo-item">
                  <div className="hero-stat">
                    <span className="n">65%</span>
                    <span className="t">
                      increase in operational efficiency, reported by merchants on the platform for 12 months or
                      more.
                    </span>
                  </div>
                  <span className="demo-lab">stat callout</span>
                </div>
              </div>

              <div className="demo-grid">
                <div>
                  <span className="demo-lab" style={{ display: "block", marginBottom: "1rem" }}>checklist, brand and danger</span>
                  <div className="checks">
                    <div className="ckrow">
                      <i><Tick /></i>
                      Fix safely with staging, backup, and rollback
                    </div>
                    <div className="ckrow">
                      <i><Tick /></i>
                      Automate SEO, merchandising, and ops with agents
                    </div>
                    <div className="ckrow x">
                      <i><Cross /></i>
                      Reactive reporting that arrives after the damage is done
                    </div>
                  </div>
                </div>
                <div>
                  <span className="demo-lab" style={{ display: "block", marginBottom: "1rem" }}>feature list and tag row</span>
                  <ul className="flist">
                    <li>Stateful orchestration</li>
                    <li>Managed context windows</li>
                    <li>No LLM ops to run</li>
                  </ul>
                  <div className="tag-row" style={{ marginTop: "1.4rem" }}>
                    <span className="chip">Ecommerce</span>
                    <span className="chip">Marketing</span>
                    <span className="chip">Ops</span>
                    <span className="chip">Dev and IT</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="sub-lab">KPI rows, chat, and FAQ</p>
            <div className="demo-grid">
              <div className="reveal">
                <span className="demo-lab" style={{ display: "block", marginBottom: "1rem" }}>KPI minicards</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <div className="minicard">
                    <span className="name">Add-to-cart rate</span>
                    <span className="chip chip--danger">Down 8%</span>
                  </div>
                  <div className="minicard">
                    <span className="name">Payment decline rate</span>
                    <span className="chip chip--danger">Rising, anomaly</span>
                  </div>
                  <div className="minicard">
                    <span className="name">Checkout completion</span>
                    <span className="chip chip--ok">Stable</span>
                  </div>
                </div>

                <span className="demo-lab" style={{ display: "block", margin: "2rem 0 1rem" }}>Ask Viq chat</span>
                <div className="chat">
                  <div className="line">
                    <span className="who you">You</span> &nbsp;Which products are losing money on ads this week?
                  </div>
                  <div className="line">
                    <span className="who viq">Viq</span> &nbsp;Here are the SKUs spending above target with no
                    return.
                  </div>
                  <div className="src">Sourced from: Google Ads · Inventory · Orders</div>
                </div>
              </div>

              <div className="reveal">
                <span className="demo-lab" style={{ display: "block", marginBottom: "1rem" }}>FAQ accordion</span>
                <div className="faq">
                  <details className="faq-item" open>
                    <summary>How fast is the first audit?</summary>
                    <p>
                      1 to 3 days. Connect your stack, the instant store audit runs, then the Nerve Centre keeps
                      watching live.
                    </p>
                  </details>
                  <details className="faq-item">
                    <summary>Which platforms do you support?</summary>
                    <p>
                      BigCommerce, Shopify, Adobe Commerce and WooCommerce, plus over 200 connectors in the AI
                      OS catalogue.
                    </p>
                  </details>
                  <details className="faq-item">
                    <summary>Will I lose control of my store?</summary>
                    <p>
                      Every change runs through staging first. Backup runs continuously. Rollback is one click.
                    </p>
                  </details>
                </div>
              </div>
            </div>

            <p className="sub-lab">Signature product visuals</p>
            <div className="demo-grid">
              <div className="demo demo--soft reveal">
                <span className="demo-lab" style={{ display: "block", marginBottom: "0.5rem" }}>Detect, explain, fix loop card</span>
                <div className="viz-wrap">
                  <div className="viz-glow" />
                  <div className="lp-card">
                    <div className="lp-head">
                      <span className="lp-name">Vortex IQ</span>
                      <span className="lp-sub">
                        <span className="dot" />
                        Detect. Explain. Fix.
                      </span>
                      <span className="lp-tag">AI OS</span>
                    </div>
                    <div className="lp-row">
                      <span className="lp-ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 12h3l2-7 4 14 2-7h4" />
                        </svg>
                      </span>
                      <span className="lp-tx">
                        <b>Detect</b>
                        <span>Nerve Centre</span>
                      </span>
                      <span className="lp-state">Checkout errors rising</span>
                    </div>
                    <div className="lp-row">
                      <span className="lp-ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="11" cy="11" r="7" />
                          <path d="m21 21-4.3-4.3" />
                        </svg>
                      </span>
                      <span className="lp-tx">
                        <b>Explain</b>
                        <span>Vortex Mind</span>
                      </span>
                      <span className="lp-state">Script blocks render</span>
                    </div>
                    <div className="lp-row">
                      <span className="lp-ic">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 3 4 6.5v5c0 4.5 3.4 7.7 8 9 4.6-1.3 8-4.5 8-9v-5z" />
                          <path d="m9 12 2 2 4-4.5" />
                        </svg>
                      </span>
                      <span className="lp-tx">
                        <b>Fix</b>
                        <span>Vortex Agents</span>
                      </span>
                      <span className="lp-state">Rollback staged</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="demo demo--soft reveal viz-hold">
                <span className="demo-lab" style={{ display: "block", marginBottom: "0.5rem" }}>Ask Viq diagnosis console</span>
                <div className="viz-wrap">
                  <div className="viz-glow" />
                  <div className="cv-card">
                    <div className="cv-head">
                      <span className="cv-ava">
                        <svg viewBox="0 0 24 24" fill="#fff">
                          <path d="M12 2.5l1.7 4.9a4 4 0 0 0 2.4 2.4l4.9 1.7-4.9 1.7a4 4 0 0 0-2.4 2.4L12 20.5l-1.7-4.9a4 4 0 0 0-2.4-2.4L3 11.5l4.9-1.7a4 4 0 0 0 2.4-2.4L12 2.5z" />
                        </svg>
                      </span>
                      <span className="cv-id">
                        <span className="cv-name">Ask Viq™</span>
                        <span className="cv-sub">
                          <span className="dot" />
                          Live, diagnosing
                        </span>
                      </span>
                      <span className="cv-tag">Vortex Mind</span>
                    </div>
                    <div className="cv-body">
                      <div className="cv-q">Why did conversion drop 12% on mobile today?</div>
                      <div className="cv-aslot">
                        <div className="cv-typing">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="cv-a">
                          A third-party reviews script is <b>blocking checkout render</b> on mobile, adding 1.8s
                          to LCP. I have staged a fix.
                        </div>
                      </div>
                      <div className="cv-steps">
                        <div className="cv-step">
                          <i><Tick /></i>
                          <span>
                            <span className="k">Detected</span> · checkout LCP +1.8s
                          </span>
                        </div>
                        <div className="cv-step">
                          <i><Tick /></i>
                          <span>
                            <span className="k">Diagnosed</span> · reviews script blocking render
                          </span>
                        </div>
                        <div className="cv-step">
                          <i><Tick /></i>
                          <span>
                            <span className="k">Fix ready</span> · defer script, rollback staged
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="cv-foot">
                      <div className="cv-impact">
                        Recovered today
                        <b>£42,800</b>
                      </div>
                      <span className="cv-apply">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 6" />
                        </svg>
                        Apply fix
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="brand-note reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <span>
                Want the raw component reference with every class name, variant, and token? It ships inside the
                HTML brand book, and the source of truth for the CSS is this site&apos;s own stylesheet. Ask us
                at <a href="mailto:hey@vortexiq.ai?subject=Design%20system">hey@vortexiq.ai</a> if you need a
                Figma library.
              </span>
            </div>
          </div>
        </section>

        {/* =========================== FOUR PILLARS =========================== */}
        <section className="section section--soft" id="pillars">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">07</span>
              <div>
                <h2>Name the mechanism, every time.</h2>
                <p>
                  Do not just say what we do, name how. A sceptic who can file the how away stops asking. These
                  four nouns are the how, and they are always title-case and never paraphrased.
                </p>
              </div>
            </div>

            <div className="pillar-grid">
              {PILLARS.map((p) => (
                <Link className="card pillar-card reveal" key={p.name} href={p.href}>
                  <div className="p-top">
                    <span className="p-ic">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.icon}
                        alt=""
                        aria-hidden="true"
                        style={p.icon.endsWith("agenthub-icon.svg") ? undefined : { filter: "brightness(0)" }}
                      />
                    </span>
                    <div>
                      <h3>{p.name}</h3>
                      <div className="p-meta">{p.role}</div>
                    </div>
                  </div>
                  <p className="p-what">{p.what}</p>
                  <p className="p-write">{p.write}</p>
                </Link>
              ))}
            </div>

            <div className="brand-note reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <span>{PILLAR_NOTE}</span>
            </div>
          </div>
        </section>

        {/* ============================== VOICE ============================== */}
        <section className="section" id="voice">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">08</span>
              <div>
                <h2>Four qualities, testable line by line.</h2>
                <p>
                  Voice is what stays constant everywhere we write. Run any sentence against these four. If it
                  fails one, it is not finished.
                </p>
              </div>
            </div>

            <div className="vp-grid">
              {VOICE_PILLARS.map((v) => (
                <div className="card vp-card reveal" key={v.n}>
                  <div className="vp-n">Pillar {v.n}</div>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                  <div className="ex-stack">
                    <div className="ex ex--yes">
                      <Tick />
                      <span>{v.yes}</span>
                    </div>
                    <div className="ex ex--no">
                      <Cross />
                      <span>{v.no}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================== TONE ============================== */}
        <section className="section section--soft" id="tone">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">09</span>
              <div>
                <h2>Voice stays. Tone shifts.</h2>
                <p>
                  Same brand, dialled differently for the surface. A hero rallies. A docs page explains. An
                  error message apologises softly and names the next step.
                </p>
              </div>
            </div>

            <div className="btable-wrap reveal">
              <table className="btable">
                <thead>
                  <tr>
                    <th>Surface</th>
                    <th>Dial up</th>
                    <th>Dial down</th>
                    <th>Anchor</th>
                  </tr>
                </thead>
                <tbody>
                  {TONE_ROWS.map((r) => (
                    <tr key={r.context}>
                      <td className="k">{r.context}</td>
                      <td>{r.up}</td>
                      <td>{r.down}</td>
                      <td style={{ fontStyle: "italic" }}>{r.anchor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ============================ TRIGGERS ============================ */}
        <section className="section" id="triggers">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">10</span>
              <div>
                <h2>Nine triggers, mapped to the funnel.</h2>
                <p>
                  Where the reader stands changes what they need to hear. Use this as a checklist before
                  anything ships.
                </p>
              </div>
            </div>

            {TRIGGERS.map((s) => (
              <div className="stage" key={s.stage}>
                <div className="stage-head reveal">
                  <span className="stage-tag">{s.stage}</span>
                  <span className="stage-q">{s.question}</span>
                </div>
                <p className="stage-intro reveal">{s.intro}</p>
                <div className="trig-grid">
                  {s.items.map((t) => (
                    <div className="card trig-card reveal" key={t.n}>
                      <div className="t-n">Trigger {t.n}</div>
                      <h3>{t.title}</h3>
                      <p>{t.body}</p>
                      <div className="ex-stack">
                        <div className="ex ex--yes">
                          <Tick />
                          <span>{t.yes}</span>
                        </div>
                        <div className="ex ex--no">
                          <Cross />
                          <span>{t.no}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p className="sub-lab">Objections, killed in monotone</p>
            <div className="obj-grid">
              {OBJECTIONS.map((o) => (
                <div className="card card--soft obj-card reveal" key={o.q}>
                  <div className="oq">{o.q}</div>
                  <div className="oa">{o.a}</div>
                </div>
              ))}
            </div>

            <p className="sub-lab">Approved proof points</p>
            <div className="card reveal">
              <p className="muted" style={{ fontSize: "0.95rem", marginBottom: "1.4rem", lineHeight: 1.55 }}>
                Pick the one that fits the audience. Show one, never all four.
              </p>
              <ul className="proof-list">
                {PROOF_POINTS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =========================== VOCABULARY =========================== */}
        <section className="section section--soft" id="vocabulary">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">11</span>
              <div>
                <h2>The words we use, and the ones we never do.</h2>
                <p>
                  Half of brand consistency is vocabulary discipline. Run any draft through this table before
                  it ships.
                </p>
              </div>
            </div>

            <div className="btable-wrap reveal">
              <table className="btable">
                <thead>
                  <tr>
                    <th style={{ width: "50%" }}>Use</th>
                    <th style={{ width: "50%" }}>Not</th>
                  </tr>
                </thead>
                <tbody>
                  {VOCAB.map((v) => (
                    <tr key={v.use}>
                      <td className="yes">{v.use}</td>
                      <td className="no">{v.not}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="sub-lab">Banned phrases</p>
            <div className="ban-grid">
              {BANNED_PHRASES.map((b) => (
                <div className="ban reveal" key={b.term}>
                  <i><Cross /></i>
                  <div>
                    <span className="bt">{b.term}</span>
                    <span className="bw">{b.why}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="sub-lab">Punctuation</p>
            <div className="dash-callout reveal">
              <div className="dc-eyebrow">House rule</div>
              <h3>Never use an em dash. Never use an en dash either.</h3>
              <p>
                Not in marketing copy, not in docs, not in CMS content, not in a social post. The em dash is
                overused, it reads as machine-written to a lot of readers, and the voice prefers shorter,
                more declarative sentences anyway. A hyphen covers every legitimate compound case.
              </p>
            </div>
            <div className="btable-wrap reveal">
              <table className="btable">
                <thead>
                  <tr>
                    <th>Where you would reach for one</th>
                    <th>Use instead</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  {PUNCTUATION.map((p) => (
                    <tr key={p.instead}>
                      <td className="k">{p.instead}</td>
                      <td className="mono">{p.use}</td>
                      <td style={{ fontStyle: "italic" }}>{p.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="sub-lab">Owned hooks</p>
            <div className="hook-grid">
              {HOOKS.map((h) => (
                <div className="hook reveal" key={h.line}>
                  <b>{h.line}</b>
                  <span>{h.note}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ PATTERNS ============================ */}
        <section className="section" id="patterns">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">12</span>
              <div>
                <h2>Four structures that carry most of our writing.</h2>
                <p>
                  When you are staring at a blank page, pick the pattern that matches the format and fill it
                  in. The structure is already approved, so you only have to be good at the sentences.
                </p>
              </div>
            </div>

            <div className="pat-grid">
              {PATTERNS.map((p) => (
                <div className="card pat-card reveal" key={p.tag}>
                  <div className="p-tag">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <div className="p-use">{p.use}</div>
                  <ol className="pat-steps">
                    {p.steps.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ CHANNELS ============================ */}
        <section className="section section--soft" id="channels">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">13</span>
              <div>
                <h2>What changes, surface by surface.</h2>
                <p>
                  The rules below sit on top of everything above. Where a channel carries extra legal or trust
                  risk, the voice gets tighter, not louder.
                </p>
              </div>
            </div>

            <div className="chan-grid">
              {CHANNELS.map((c) => (
                <div className="card chan-card reveal" key={c.name}>
                  <h3>{c.name}</h3>
                  <div className="c-where">{c.where}</div>
                  <ul className="chan-list">
                    {c.rules.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================ REWRITES ============================ */}
        <section className="section" id="rewrites">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">14</span>
              <div>
                <h2>The rules, applied.</h2>
                <p>
                  Five real edits from our own surfaces. Use them as anchors when you are unsure whether a
                  draft is on brand.
                </p>
              </div>
            </div>

            {REWRITES.map((r) => (
              <div className="rw reveal" key={r.label}>
                <div className="rw-head">{r.label}</div>
                <div className="rw-body">
                  <div className="rw-cell">
                    <span className="rw-lab b">
                      <Cross />
                      Before
                    </span>
                    <p>{r.before}</p>
                  </div>
                  <div className="rw-cell">
                    <span className="rw-lab a">
                      <Tick />
                      After
                    </span>
                    <p>{r.after}</p>
                  </div>
                </div>
                <div className="rw-note">{r.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================== DOWNLOADS =========================== */}
        <section className="section section--soft" id="downloads">
          <div className="container">
            <div className="chap reveal">
              <span className="chap-n">15</span>
              <div>
                <h2>Take the whole thing with you.</h2>
                <p>
                  The complete brand book, the same content as this page, in the format that suits your
                  workflow. No form, no sign-up. The HTML version prints straight to PDF from any browser.
                </p>
              </div>
            </div>

            <div className="dl-grid">
              {DOWNLOADS.map((d) => (
                <a className="dl-card reveal" key={d.title} href={d.href} download>
                  <span className="dl-ext">{d.ext}</span>
                  <h3>{d.title}</h3>
                  <p className="d-body">{d.body}</p>
                  <span className="dl-foot">
                    <span>{d.size}</span>
                    <span className="go">
                      Download
                      <DownloadIcon size={14} />
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="brand-note reveal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <span>
                Building something with us? Point your writing assistant at the Markdown file and it will hold
                the house style, including the em dash rule. For a co-branded lock-up, an EPS, or founder
                bios, email <a href="mailto:hey@vortexiq.ai?subject=Brand%20assets">hey@vortexiq.ai</a>.
              </span>
            </div>
          </div>
        </section>

        {/* ============================== FINAL ============================== */}
        <section className="section brand-final">
          <div className="container">
            <div className="eyebrow reveal" style={{ justifyContent: "center" }}>
              Press and partnerships
            </div>
            <h2 className="reveal">Writing about us, or building with us?</h2>
            <p className="lede reveal">
              For interviews, founder bios, partnership announcements, or a tailored asset pack, get in touch
              and the right person on our team will help.
            </p>
            <div className="cta-row reveal">
              <Link className="btn" href="/contact-us" style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}>
                Contact the team
              </Link>
              <a
                className="btn btn--ghost"
                href="mailto:hey@vortexiq.ai?subject=Brand%20assets"
                style={{ height: 56, padding: "0 32px", fontSize: "1.1rem" }}
              >
                Email the press team →
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
