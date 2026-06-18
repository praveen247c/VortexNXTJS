import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Vortex Apps — Staging, Backup & Rollback for Safe Commerce | Vortex IQ",
  description: "Vortex Apps is the operational app suite of your AI OS. Test changes on a production mirror, back up continuously, roll back in one click, and ship every change safely.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
