import HubSpotForm from "@/components/HubSpotForm";

// Same HubSpot form that's live on vortexiq.ai/contact-us ("Send us a message").
export default function ContactForm() {
  return (
    <HubSpotForm
      portalId="24385350"
      formId="653fc8dd-9988-4be8-b0c0-6e465e4b870a"
      region="na1"
      className="contact-form-card"
    />
  );
}
