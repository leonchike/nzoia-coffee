"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://imagedelivery.net/camphNQlX5poswEZJbu_Cw/70c10e47-7a58-4034-4cf1-3f10aa11ac00/largeartwork"
        alt="Lush green coffee plants growing on the volcanic slopes of Kirinyaga, Kenya"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 text-center lg:px-12">
        <div className="opacity-0 animate-fade-in-up">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold/90 md:text-sm">
            Single-Origin &middot; Kirinyaga, Kenya
          </p>
        </div>

        <h1 className="opacity-0 animate-fade-in-up delay-200 font-heading text-6xl text-cream md:text-8xl lg:text-9xl">
          Nzoia
        </h1>

        <p className="mx-auto mt-6 max-w-xl opacity-0 animate-fade-in-up delay-300 font-heading text-xl italic text-cream/85 md:text-2xl lg:text-3xl">
          Born of the land. Roasted with intention.
        </p>

        <div className="mt-10 opacity-0 animate-fade-in-up delay-500">
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 rounded-full bg-cream/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream ring-1 ring-cream/25 backdrop-blur-sm transition-all duration-300 hover:bg-cream/20 hover:ring-cream/40"
          >
            Explore Our Coffee
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
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-600">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-cream/50">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-cream/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
