"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactTeaser() {
  return (
    <section className="relative overflow-hidden bg-warm-white py-24 md:py-32 lg:py-40">
      <div className="texture-grain absolute inset-0" />

      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-parchment/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <ScrollReveal>
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-copper">
            Partner With Us
          </span>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <h2 className="mt-4 font-heading text-4xl text-espresso md:text-5xl">
            Bring Nzoia to
            <br />
            <span className="italic">Your Table</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg">
            Whether you&apos;re a cafe owner seeking an extraordinary
            single-origin, a distributor exploring African specialty coffee, or
            simply a coffee lover with questions — we&apos;d love to hear from
            you.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={450}>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-espresso px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream transition-all duration-300 hover:bg-volcanic"
          >
            Get in Touch
            <svg
              width="16"
              height="16"
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
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
