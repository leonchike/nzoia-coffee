import type { Metadata } from "next";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nzoia Coffee — whether you're a coffee lover, café owner, distributor, or press. We'd love to hear from you.",
  openGraph: {
    title: "Contact | Nzoia Coffee",
    description:
      "Get in touch with Nzoia Coffee — whether you're a coffee lover, café owner, distributor, or press.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
