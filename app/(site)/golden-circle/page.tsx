import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Vortex IQ — The operating system that catches revenue leaks before your customers do",
  description: "Modern commerce leaks revenue in the gaps between your tools. Vortex IQ watches every channel, explains what broke in plain English, and fixes it safely on live revenue.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
