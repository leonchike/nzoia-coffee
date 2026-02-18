import type { Metadata } from "next";
import OriginsContent from "@/components/sections/OriginsContent";

export const metadata: Metadata = {
  title: "Origins",
  description:
    "The story of Nzoia coffee — from the volcanic highlands of Kirinyaga, Kenya, to your cup. Discover the land, the farmers, and the craft behind every bean.",
  openGraph: {
    title: "Origins | Nzoia Coffee",
    description:
      "The story of Nzoia coffee — from the volcanic highlands of Kirinyaga, Kenya, to your cup.",
  },
};

export default function OriginsPage() {
  return <OriginsContent />;
}
