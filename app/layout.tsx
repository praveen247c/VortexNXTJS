import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevealInit from "@/components/RevealInit";

export const metadata: Metadata = {
  title: "Vortex IQ · The AI Operating System for E-Commerce",
  description:
    "Modern commerce leaks revenue in the gaps between your tools. Vortex IQ watches every channel, explains what broke in plain English, and fixes it safely on live revenue.",
  metadataBase: new URL("https://www.vortexiq.ai"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <RevealInit />
      </body>
    </html>
  );
}
