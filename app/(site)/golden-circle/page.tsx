import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Vortex IQ — The operating system that catches revenue leaks before your customers do",
  description: "Vortex IQ is the AI Operating System for e-commerce: it watches every channel, explains what broke in plain English, and fixes it safely on live revenue.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
