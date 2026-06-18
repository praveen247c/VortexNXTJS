import Link from "next/link";

const CDN = "https://cdn.prod.website-files.com/68bff49fa25caa581ab0524a";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="https://www.vortexiq.ai/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="footer-logo" src={`${CDN}/68c2a7984b7702411158df14_vlogo-white.svg`} alt="Vortex IQ" />
            </a>
            <p className="footer-tag">The World&apos;s First AI Operating System for E-Commerce. Detect. Explain. Fix. From one operating system.</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/vortexiqai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.74v20.51C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.74C24 .78 23.2 0 22.22 0z" /></svg></a>
              <a href="https://twitter.com/vortex_iq" target="_blank" rel="noopener noreferrer" aria-label="X"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.48 3.24H4.29L17.61 20.65z" /></svg></a>
              <a href="https://www.youtube.com/@VortexIQ-AI" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.07 0 12 0 12s0 3.93.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.8zM9.6 15.6V8.4l6.25 3.6-6.25 3.6z" /></svg></a>
              <a href="https://wa.me/447507897275?text=Hi%2C%20I%27d%20like%20to%20find%20out%20more%20about%20VortexIQ" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.06 24l1.69-6.16a11.86 11.86 0 0 1-1.6-5.95C.16 5.32 5.5 0 12.05 0a11.82 11.82 0 0 1 8.41 3.49 11.74 11.74 0 0 1 3.48 8.4c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.68-1.45L.06 24zM6.6 20.2c1.68 1 3.28 1.6 5.44 1.6 5.45 0 9.89-4.43 9.89-9.88a9.82 9.82 0 0 0-2.9-7A9.82 9.82 0 0 0 12.05 2c-5.45 0-9.89 4.43-9.89 9.88 0 2.27.67 3.97 1.78 5.75l-1 3.66 3.66-.96zm11.36-5.45c-.07-.12-.27-.2-.56-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.28.18-1.41z" /></svg></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <Link href="/aistudio">Summit</Link>
            <Link href="/ai-os-platform">Capabilities</Link>
            <Link href="/customer-stories">Customer Stories</Link>
            <Link href="/trust/trust-center">Security &amp; Trust</Link>
            <a href="https://monitor.vortexiq.ai/" target="_blank" rel="noopener noreferrer">Platform Status</a>
            <Link href="/join-viq">Brochure</Link>
            <Link href="/register">Join Referral Program</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about-us">About Us</Link>
            <Link href="/resources/blog">Blog</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/branding">Branding</Link>
            <Link href="/contact-us">Contact Us</Link>
            <a href="https://www.vortexiq.ai/sitemap.xml">Sitemap</a>
            <Link href="/launch-event">Webinar and Events</Link>
          </div>
          <div className="footer-col">
            <h4>Programs</h4>
            <Link href="/partners">Partners</Link>
            <Link href="/solutions/for-agencies">Agency Partners</Link>
            <Link href="/solutions/for-tech-partners">Technology Partners</Link>
            <Link href="/partners/student-program">Student Partners</Link>
            <Link href="/solutions/integrations">Integrations</Link>
          </div>
        </div>

        <div className="footer-badges">
          {/* eslint-disable @next/next/no-img-element */}
          <img src={`${CDN}/6953b913c52134a51a525a2d_techstars-logo.svg`} alt="Techstars" />
          <img src={`${CDN}/6953cc5eb170ed50a2a47fe0_55dbc9f5cd0d006da67ae19f818551b1_googleForStartup.svg`} alt="Google for Startups" />
          <img src={`${CDN}/6953cbf3940124a03970f2ba_a7b5714a9227630d62bfd99ff88a9eed_microsoftLogo-white.svg`} alt="Microsoft" />
          <img src={`${CDN}/6953ca7c71cee230b8180a52_a0323fc3f60511610abc326e5341ba5e_invidiaInspection.svg`} alt="NVIDIA Inception" />
          <img src={`${CDN}/6953cb4a2c90c528b0562ff1_8dc57718a83e4e5f9a0661ba76148fe7_aws-activate.svg`} alt="AWS Activate" />
          <img src={`${CDN}/6953b9064f4f3cb2226c1fb0_iso-logo.svg`} alt="ISO 27001 Certified" />
          {/* eslint-enable @next/next/no-img-element */}
        </div>

        <div className="footer-fine">
          <p className="footer-reg">Registered in England and Wales Number: 14925424. VAT Number: GB 459 547 641. D-U-N-S Number: 230712948</p>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
        <p className="footer-copy">© 2025 Vortex IQ. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
