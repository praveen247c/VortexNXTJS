import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Changelog | Vortex IQ",
  description:
    "New connectors, capabilities and fixes in the Vortex IQ AI Operating System, dated as they ship. Breaking changes announced with notice.",
  alternates: { canonical: "/changelog" },
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
