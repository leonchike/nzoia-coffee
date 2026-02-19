"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { roastLines } from "@/lib/data";

export default function ProductHighlights() {
  return (
    <section className="relative bg-parchment pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40">
      <div className="texture-grain absolute inset-0" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <ScrollReveal className="mb-10 text-center md:mb-14">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-copper">
            The Collection
          </span>
          <h2 className="mt-4 font-heading text-4xl text-espresso md:text-5xl lg:text-6xl">
            Three Roasts, One Vision
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-text-secondary">
            Each roast line tells a different story of East Africa&apos;s
            extraordinary terroir — volcanic soil, altitude, and the craft of
            expert roasting.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {roastLines.map((line, i) => {
            const product = line.products[0];
            return (
              <ScrollReveal key={line.id} delay={i * 150}>
                <Link href="/products" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                    <Image
                      src={product.image}
                      alt={`${line.name} — ${line.tagline}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Card Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                        {product.roastLevel} Roast
                      </span>
                      <h3 className="mt-2 font-heading text-2xl text-cream md:text-3xl">
                        {line.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/75">
                        {product.oneLiner}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold transition-all duration-300 group-hover:gap-3">
                        Discover
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
