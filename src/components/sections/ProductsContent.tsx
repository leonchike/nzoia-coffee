"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { roastLines } from "@/lib/data";

export default function ProductsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden md:min-h-[70vh]">
        <Image
          src="https://imagedelivery.net/camphNQlX5poswEZJbu_Cw/60e27d31-618d-4f7b-494b-7b1f534e3700/largeartwork"
          alt="Rich, dark roasted coffee beans in warm golden light"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 opacity-0 animate-fade-in-up text-xs font-semibold uppercase tracking-[0.3em] text-gold/90 md:text-sm">
            The Collection
          </p>
          <h1 className="opacity-0 animate-fade-in-up delay-200 font-heading text-5xl text-cream md:text-7xl lg:text-8xl">
            Our Coffee
          </h1>
          <p className="mx-auto mt-6 max-w-xl opacity-0 animate-fade-in-up delay-300 text-base text-cream/75 md:text-lg">
            Three roast lines, one extraordinary vision. Each crafted to reveal
            a different facet of East Africa&apos;s volcanic terroir.
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="relative bg-warm-white">
        <div className="texture-grain absolute inset-0" />

        {/* Shared Info Banner */}
        <div className="relative z-10 border-b border-sand/60 bg-parchment/50">
          <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-4 text-xs font-medium uppercase tracking-wider text-text-muted lg:px-12">
            <span>100% Arabica</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Smallholder Sourced</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>East African Origins</span>
            <span className="hidden sm:inline">&middot;</span>
            <span>Roasted in Nairobi</span>
          </div>
        </div>

        {/* Roast Lines */}
        {roastLines.map((line, lineIndex) => {
          const product = line.products[0];
          const isEven = lineIndex % 2 === 0;

          return (
            <div
              key={line.id}
              id={line.id}
              className={`relative z-10 ${
                lineIndex > 0 ? "border-t border-sand/40" : ""
              }`}
            >
              <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28 lg:px-12 lg:py-36">
                <div
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 ${
                    isEven ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Product Image */}
                  <ScrollReveal className={isEven ? "" : "lg:order-2"}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[3/4]">
                      <Image
                        src={product.image}
                        alt={`${line.name} — ${line.tagline}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                      {/* Roast Level Badge */}
                      <div className="absolute left-6 top-6">
                        <span className="inline-block rounded-full bg-espresso/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-cream backdrop-blur-sm">
                          {product.roastLevel} Roast
                        </span>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Product Info */}
                  <div
                    className={`mt-10 lg:mt-0 ${isEven ? "" : "lg:order-1"}`}
                  >
                    <ScrollReveal>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-copper">
                        {line.tagline}
                      </span>
                      <h2 className="mt-3 font-heading text-4xl text-espresso md:text-5xl lg:text-6xl">
                        {line.name}
                      </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={150}>
                      <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg md:leading-relaxed">
                        {product.description}
                      </p>
                    </ScrollReveal>

                    {/* Sensory Notes */}
                    <ScrollReveal delay={250}>
                      <div className="mt-8">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                          Tasting Notes
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {product.sensoryNotes.map((note) => (
                            <span
                              key={note}
                              className="rounded-full border border-sand bg-parchment/50 px-4 py-1.5 text-xs font-medium text-text-secondary"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Details */}
                    <ScrollReveal delay={350}>
                      <div className="mt-8 grid grid-cols-2 gap-4 border-t border-sand/40 pt-8">
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                            Origin
                          </h3>
                          <p className="mt-1 text-sm text-text-primary">
                            {product.origin}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                            Type
                          </h3>
                          <p className="mt-1 text-sm text-text-primary">
                            {product.coffeeType}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Variants */}
                    <ScrollReveal delay={450}>
                      <div className="mt-8">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                          Available In
                        </h3>
                        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                          {product.variants.map((variant) => (
                            <a
                              key={variant.id}
                              href={variant.shopUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex flex-1 items-center justify-between rounded-sm border border-sand bg-parchment/30 px-5 py-4 transition-all duration-300 hover:border-copper/40 hover:bg-parchment"
                            >
                              <div>
                                <p className="text-sm font-semibold text-text-primary">
                                  {variant.label}
                                </p>
                                <p className="text-xs text-text-muted">
                                  {variant.size} / {variant.weight}
                                </p>
                              </div>
                              <span className="text-xs font-semibold uppercase tracking-wider text-copper transition-all duration-300 group-hover:translate-x-0.5">
                                Shop &rarr;
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </ScrollReveal>

                    {/* Freshness Accordion */}
                    <ScrollReveal delay={500}>
                      <details className="mt-8 border-t border-sand/40 pt-6">
                        <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.2em] text-text-muted hover:text-text-secondary">
                          Storage & Freshness
                        </summary>
                        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                          Reseal container after every use. After opening, store
                          in a cool, dry place away from direct sunlight to
                          preserve flavor and aroma.
                        </p>
                      </details>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Bottom Info */}
        <div className="relative z-10 border-t border-sand/40 bg-parchment/30">
          <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-12">
            <ScrollReveal>
              <div className="mx-auto max-w-2xl text-center">
                <p className="font-heading text-lg italic text-text-secondary md:text-xl">
                  &ldquo;Nzoia Coffee comes to you from beans produced by
                  ethical smallholder farmers across East Africa, who have grown
                  coffee for generations. Grown at high altitude in rich
                  volcanic African soil, our coffee is known for cleanliness,
                  meticulous processing methods, and craftsmanship.&rdquo;
                </p>
                <div className="mt-6 flex items-center justify-center gap-4 text-xs text-text-muted">
                  <span>Premium Arabica</span>
                  <span>&middot;</span>
                  <span>Exceptional Selection</span>
                  <span>&middot;</span>
                  <span>Smallholder Sourced</span>
                  <span>&middot;</span>
                  <span>East African</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
