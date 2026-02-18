import Hero from "@/components/sections/Hero";
import BrandIntro from "@/components/sections/BrandIntro";
import ProductHighlights from "@/components/sections/ProductHighlights";
import OriginTeaser from "@/components/sections/OriginTeaser";
import ContactTeaser from "@/components/sections/ContactTeaser";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ProductHighlights />
      <OriginTeaser />
      <ContactTeaser />
    </>
  );
}
