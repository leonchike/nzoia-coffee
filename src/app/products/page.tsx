import type { Metadata } from "next";
import ProductsContent from "@/components/sections/ProductsContent";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Nzoia's collection of single-origin Kenyan coffees — Nonye Reserve, Kirinyaga Peaks, and Ketochi Roast. Premium Arabica from Kirinyaga, roasted in Nairobi.",
  openGraph: {
    title: "Products | Nzoia Coffee",
    description:
      "Explore Nzoia's collection of single-origin Kenyan coffees. Premium Arabica from Kirinyaga, roasted in Nairobi.",
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
