import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  alternates: { canonical: "/get-started" },
  title: "Get started in 3 steps | Vortex IQ",
  description: "Connect your store in about 10 minutes, no developer needed. See your first revenue-ranked findings, then approve a fix that ships staging-first and reversible.",
  openGraph: { description: "Connect your store in about 10 minutes. See revenue-ranked findings, then approve a fix that ships staging-first and is reversible in one click." },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
