import type { Metadata } from "next";
import { css, html } from "./content";

export const metadata: Metadata = {
  title: "Customer Stories | Vortex IQ",
  description: "Explore how merchants and agencies use Vortex IQ to streamline operations, accelerate development, and drive significant growth. Real results for leading e-commerce brands.",
};

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
