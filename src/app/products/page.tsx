import type { Metadata } from "next";
import ProductsContent from "@/components/sections/ProductsContent";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Nzoia's collection of East African specialty coffees — Nonye Reserve, Kirinyaga Peaks, and Ketochi Roast. Premium Arabica sourced across East Africa, roasted in Nairobi.",
  openGraph: {
    title: "Products | Nzoia Coffee",
    description:
      "Explore Nzoia's collection of East African specialty coffees. Premium Arabica sourced across East Africa, roasted in Nairobi.",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
