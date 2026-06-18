"use client";

import { useEffect, useRef, useState } from "react";

type Connector = { name: string; svg: string };

const mono = (label: string, bg: string, fg = "#fff", size = 9.5) =>
  `<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="6" fill="${bg}"/>` +
  `<text x="12" y="12.5" text-anchor="middle" dominant-baseline="central" ` +
  `font-family="'Geist Mono',ui-monospace,monospace" font-weight="700" ` +
  `font-size="${size}" letter-spacing="-.5" fill="${fg}">${label}</text></svg>`;

const CONNECTORS: Connector[] = [
  { name: "Shopify", svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#95BF47" d="M15.34 4.84a.16.16 0 0 0-.14-.13c-.06 0-1.27-.1-1.27-.1s-.84-.83-.94-.92c-.09-.1-.27-.07-.34-.05l-.47.15C11.89 3.01 11.39 2.25 10.5 2.25h-.08c-.25-.33-.56-.48-.83-.48-2.04.01-3.02 2.56-3.32 3.85l-1.43.45c-.44.13-.45.15-.51.56C4.29 6.89 3.14 15.8 3.14 15.8L12 17.5l3.34-.72s-.01-11.86-.02-11.94Z"/><path fill="#5E8E3E" d="M15.2 4.71c-.06 0-1.27-.1-1.27-.1s-.84-.83-.94-.92a.21.21 0 0 0-.13-.06L12 17.5l3.34-.72s-.01-11.86-.02-11.94a.16.16 0 0 0-.12-.13Z"/><path fill="#FFF" d="m11.46 7.5-.41 1.23s-.36-.2-.81-.2c-.65 0-.69.41-.69.51 0 .56 1.46.78 1.46 2.09 0 1.03-.65 1.69-1.53 1.69-1.06 0-1.6-.66-1.6-.66l.28-.94s.55.48 1.02.48c.31 0 .43-.24.43-.42 0-.73-1.2-.76-1.2-1.96 0-1 .72-1.98 2.19-1.98.57 0 .85.16.85.16Z"/></svg>' },
  { name: "Stripe", svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="5" fill="#635BFF"/><path fill="#FFF" d="M11.6 9.9c0-.45.37-.62.97-.62.86 0 1.95.26 2.81.73V7.3a7.5 7.5 0 0 0-2.81-.52c-2.3 0-3.83 1.2-3.83 3.2 0 3.13 4.3 2.63 4.3 3.98 0 .53-.46.7-1.1.7-.94 0-2.14-.39-3.09-.91v2.42c1.05.45 2.11.64 3.09.64 2.36 0 3.98-1.17 3.98-3.2-.01-3.38-4.32-2.78-4.32-4.11Z"/></svg>' },
  { name: "Google Ads", svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5" fill="#FFF" stroke="rgba(0,0,0,.08)"/><rect x="8.4" y="5.6" width="3.3" height="10" rx="1.65" transform="rotate(-30 10.05 10.6)" fill="#FBBC04"/><rect x="11.3" y="5.6" width="3.3" height="10" rx="1.65" transform="rotate(30 12.95 10.6)" fill="#4285F4"/><circle cx="8.6" cy="16" r="2" fill="#4285F4"/></svg>' },
  { name: "BigCommerce", svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#121118" d="M12.645 13.663h3.027c.861 0 1.406-.474 1.406-1.235 0-.717-.545-1.234-1.406-1.234h-3.027c-.1 0-.187.086-.187.172v2.125c.015.1.086.172.187.172zm0 4.896h3.128c.961 0 1.535-.488 1.535-1.35 0-.746-.545-1.35-1.535-1.35h-3.128c-.1 0-.187.087-.187.173v2.34c.015.115.086.187.187.187zM23.72.053l-8.953 8.93h1.464c2.281 0 3.63 1.435 3.63 3 0 1.235-.832 2.14-1.722 2.541-.143.058-.143.259.014.316 1.033.402 1.765 1.48 1.765 2.742 0 1.78-1.19 3.202-3.5 3.202h-6.342c-.1 0-.187-.086-.187-.172V13.85L.062 23.64c-.13.13-.043.359.143.359h23.631a.16.16 0 0 0 .158-.158V.182c.043-.158-.158-.244-.273-.13z"/></svg>' },
  { name: "Adobe Commerce", svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#FA0F00" d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425h-3.71zM8.884 1.376H0v21.248L8.884 1.376zM15.116 1.376H24v21.248L15.116 1.376z"/></svg>' },
  { name: "PayPal", svg: mono("P", "#003087") },
  { name: "Amazon Ads", svg: mono("a", "#FF9900", "#232F3E") },
  { name: "Meta Ads", svg: mono("M", "#0866FF") },
  { name: "Klaviyo", svg: mono("K", "#232426") },
  { name: "Amazon SP", svg: mono("a", "#232F3E", "#FF9900") },
  { name: "ShipBob", svg: mono("SB", "#00B4A0", undefined, 8) },
  { name: "Royal Mail", svg: mono("RM", "#DA291C", "#FFD200", 8) },
  { name: "DHL", svg: mono("DHL", "#FFCC00", "#D40511", 7) },
  { name: "Ship Theory", svg: mono("ST", "#2563EB", undefined, 8) },
  { name: "Datadog", svg: mono("DD", "#632CA6", undefined, 8) },
  { name: "PagerDuty", svg: mono("PD", "#06AC38", undefined, 8) },
  { name: "OpsGenie", svg: mono("OG", "#2684FF", undefined, 8) },
  { name: "Uptime Robot", svg: mono("UR", "#3BD671", undefined, 8) },
  { name: "Jira", svg: mono("J", "#2684FF") },
  { name: "Asana", svg: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="6.6" r="3.3" fill="#F06A6A"/><circle cx="6.7" cy="15.6" r="3.3" fill="#F06A6A"/><circle cx="17.3" cy="15.6" r="3.3" fill="#F06A6A"/></svg>' },
  { name: "DotDigital", svg: mono("do", "#19B0A0", undefined, 8) },
  { name: "Mailchimp", svg: mono("M", "#FFE01B", "#241C15") },
];

const SLOTS = ["hv-chip--1", "hv-chip--2", "hv-chip--3", "hv-chip--4", "hv-chip--5"];

function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function ConnectorChips() {
  const [items, setItems] = useState<Connector[]>(CONNECTORS.slice(0, 5));
  const [swapping, setSwapping] = useState<boolean[]>([false, false, false, false, false]);
  const order = useRef<Connector[]>([]);
  const cursor = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    order.current = shuffle(CONNECTORS.slice());
    cursor.current = 0;

    const take5 = () => {
      if (cursor.current + 5 > order.current.length) {
        order.current = shuffle(CONNECTORS.slice());
        cursor.current = 0;
      }
      const slice = order.current.slice(cursor.current, cursor.current + 5);
      cursor.current += 5;
      return slice;
    };

    const id = setInterval(() => {
      const next = take5();
      setSwapping([true, true, true, true, true]);
      next.forEach((c, i) => {
        setTimeout(() => {
          setItems((prev) => {
            const copy = prev.slice();
            copy[i] = c;
            return copy;
          });
          setSwapping((prev) => {
            const copy = prev.slice();
            copy[i] = false;
            return copy;
          });
        }, 380 + i * 45);
      });
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {items.map((c, i) => (
        <div
          key={SLOTS[i]}
          className={`hv-chip ${SLOTS[i]}${swapping[i] ? " swapping" : ""}`}
          dangerouslySetInnerHTML={{ __html: c.svg + c.name }}
        />
      ))}
    </>
  );
}
