"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function OriginTeaser() {
  return (
    <section className="relative overflow-hidden bg-dark-roast py-24 md:py-32 lg:py-0">
      <div className="mx-auto max-w-[1400px] lg:grid lg:min-h-[80vh] lg:grid-cols-2">
        {/* Image Side */}
        <div className="relative h-[50vh] lg:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1200&q=80"
            alt="Coffee growing on the fertile volcanic slopes near Mount Kenya, Kirinyaga region"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-roast/30 lg:bg-gradient-to-l lg:from-dark-roast/60 lg:to-transparent" />
        </div>

        {/* Content Side */}
        <div className="relative flex items-center px-6 py-16 lg:px-16 lg:py-24">
          <div className="max-w-lg">
            <ScrollReveal>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/70">
                Kirinyaga, Kenya
              </span>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2 className="mt-4 font-heading text-4xl text-cream md:text-5xl">
                Where the Soil
                <br />
                <span className="italic text-gold">Tells the Story</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="mt-6 text-base leading-relaxed text-cream/70 md:text-lg">
                At 1,700 meters above sea level, in the shadow of Mount Kenya,
                volcanic soil and equatorial sun create one of the world&apos;s
                most extraordinary coffee-growing environments. The land here
                doesn&apos;t just grow coffee — it shapes it. Every cup of Nzoia
                carries the altitude, the fire, and the generations of knowledge
                that tend this earth.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={450}>
              <Link
                href="/origins"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-gold transition-all duration-300 hover:gap-4"
              >
                Read Our Story
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
