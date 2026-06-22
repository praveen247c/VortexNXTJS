"use client";

import { useEffect, useId, useRef } from "react";

const EMBED_SRC = "https://js.hsforms.net/forms/embed/v2.js";

declare global {
  interface Window {
    // HubSpot's embed script attaches this global once loaded.
    hbspt?: { forms: { create: (opts: Record<string, string>) => void } };
  }
}

type Props = {
  portalId: string;
  formId: string;
  /** HubSpot data centre region, e.g. "na1" or "eu1". */
  region?: string;
  className?: string;
};

/**
 * Embeds a HubSpot form via the same `hbspt.forms.create` script the live
 * vortexiq.ai site uses. Loads the embed script once (shared across instances)
 * and renders the form into a uniquely-targeted container.
 */
export default function HubSpotForm({ portalId, formId, region = "na1", className }: Props) {
  const created = useRef(false);
  const reactId = useId();
  // useId() can contain ":" which is invalid in a CSS selector — sanitise it.
  const targetId = `hs-form-${reactId.replace(/[^a-zA-Z0-9_-]/g, "")}`;

  useEffect(() => {
    function createForm() {
      if (created.current || !window.hbspt) return;
      created.current = true;
      window.hbspt.forms.create({ portalId, formId, region, target: `#${targetId}` });
    }

    if (window.hbspt) {
      createForm();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${EMBED_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = EMBED_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", createForm);
    return () => script?.removeEventListener("load", createForm);
  }, [portalId, formId, region, targetId]);

  return <div id={targetId} className={className} />;
}
