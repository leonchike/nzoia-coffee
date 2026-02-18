"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function BrandIntro() {
  return (
    <section className="relative overflow-hidden bg-warm-white py-24 md:py-32 lg:py-40">
      <div className="texture-grain absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <div className="mb-6 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-copper/40" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-copper">
              Our Story
            </span>
            <div className="h-px w-12 bg-copper/40" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="font-heading text-2xl leading-relaxed text-espresso md:text-3xl lg:text-4xl">
            From the volcanic highlands of Kirinyaga, where the air is thin and
            the soil runs deep with ancient fire, comes a coffee that carries the
            whole story of its origin.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="mt-8 text-base leading-relaxed text-text-secondary md:text-lg">
            Nzoia is single-origin Kenyan coffee — grown by farmers whose
            families have tended this land for generations, roasted at source in
            Nairobi, and shipped to the world with the full value of its craft
            intact. This is not commodity coffee. This is heritage in a cup.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
