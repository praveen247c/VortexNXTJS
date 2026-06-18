import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Vortex Memory — The Commerce Graph That Remembers Everything | Vortex IQ",
  description: "Vortex Memory is the live commerce graph underneath your AI OS. Every connector, finding, fix and decision becomes permanent, cited memory that compounds the longer you run it.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
