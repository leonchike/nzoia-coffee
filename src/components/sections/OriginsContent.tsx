"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const sections = [
  {
    id: "the-land",
    label: "The Land",
    title: "Where Fire Built the Soil",
    image:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1600",
    imageAlt:
      "Panoramic view of the Kirinyaga highlands with Mount Kenya in the distance, lush green vegetation covering volcanic terrain",
    content: [
      "At the base of Mount Kenya — known to the Kikuyu people as Kirinyaga, 'the place of brightness' — the earth is not ordinary. Millennia of volcanic activity have left the soil rich with minerals, deep red in color, and impossibly fertile. It is soil that remembers fire.",
      "Here, at elevations between 1,400 and 1,900 meters, the equatorial sun is tempered by cool mountain air. The days are warm and generous; the nights, crisp and clarifying. Coffee cherries ripen slowly in these conditions, developing a complexity that lowland coffee simply cannot achieve. The sugars concentrate. The acids brighten. The flavors deepen.",
      "This is not just where Nzoia's coffee is grown. This is why it tastes the way it does. The altitude, the volcanic soil, the rain patterns shaped by the mountain — every sip is a conversation with geography.",
    ],
  },
  {
    id: "the-history",
    label: "The History",
    title: "A Story of Reclamation",
    image:
      "https://images.unsplash.com/photo-1504387103978-e4ee71416c38?w=1600",
    imageAlt:
      "Hands sorting coffee cherries during harvest, showing the careful manual selection process",
    content: [
      "Kenya's relationship with coffee is a story of resilience. Under British colonial rule, Africans were largely prohibited from growing coffee for commercial export — the most lucrative crop in the region, cultivated on their own land, but denied to them as enterprise. The coffee economy was built on extraction: the value left the continent.",
      "Independence changed the law, but transforming the industry took generations. Small-scale farmers slowly gained access to the market, learning the craft of specialty coffee cultivation and fighting for recognition in a global system that undervalued their work. Cooperative societies formed. Knowledge was shared. Standards rose.",
      "Nzoia exists in the chapter that comes next. Not as a correction of history, but as a realization of what was always possible — Kenyan coffee, grown by Kenyan farmers, roasted in Kenya, and exported with the full value of its craft intact. The story isn't about what was taken. It's about what was built.",
    ],
  },
  {
    id: "the-farmers",
    label: "The Farmers",
    title: "Hands That Know the Land",
    image:
      "https://images.unsplash.com/photo-1599639957043-f3aa5c986398?w=1600",
    imageAlt:
      "Coffee farmers working in the highlands, tending to coffee plants on a sloped farm with careful attention",
    content: [
      "Nzoia partners directly with smallholder farmers in the Kirinyaga region — families who have cultivated coffee for generations, some since 1953. These aren't contract growers filling quotas. They are artisans with an intimate knowledge of their microclimates, their soil, their varietals.",
      "The relationship is built on transparency and shared value. Fair pricing isn't a marketing line — it's the foundation. When farmers are paid well and consistently, they invest in their farms. They experiment with processing methods. They plant new varieties. Quality becomes self-reinforcing.",
      "The processing is meticulous: only ripe cherries are hand-picked. They undergo the washed process — depulped, fermented to remove mucilage, then thoroughly washed and laid on raised beds for slow sun-drying. At each stage, beans are hand-sorted to remove defects. It's painstaking work, and it's what gives Kenyan coffee its legendary cleanliness and clarity.",
    ],
  },
  {
    id: "the-craft",
    label: "The Craft",
    title: "Roasted at Source",
    image:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1600",
    imageAlt:
      "Coffee roasting process with golden-brown beans tumbling in a professional roaster, warm tones of the roasting facility",
    content: [
      "Most African coffee leaves the continent as green, unroasted beans — the raw material for someone else's brand. The roasting, the branding, the value addition — it happens elsewhere. Nzoia breaks that pattern.",
      "All roasting is done in-house, just outside Nairobi, by a team trained to honor each lot's origin character. The philosophy is profile-driven roasting: each batch is treated as a unique expression of its terroir. We don't mask — we reveal.",
      "For the fruity brightness of Nonye Reserve, a careful medium roast preserves the bean's natural vibrancy. For the bold authority of Kirinyaga Peaks, a darker profile unlocks deep chocolate and smoky complexity. For the smooth elegance of Ketochi Roast, the profile finds the sweet spot between sweetness and body. Small batches. Constant attention. Nothing automated about the decisions that matter.",
    ],
  },
  {
    id: "the-mission",
    label: "The Mission",
    title: "The Value Stays Here",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600",
    imageAlt:
      "A beautifully poured cup of coffee with rich crema, warm light illuminating the deep amber tones",
    content: [
      "Nzoia exists at the intersection of craft and conviction. We believe that a product grown in Africa, perfected by African hands, should be finished and packaged on the continent — not shipped away to be completed elsewhere.",
      "This isn't just philosophy. It's economics. The African Continental Free Trade Area (AfCFTA) envisions a continent that trades in finished goods, not raw materials. Nzoia is a small but deliberate expression of that vision: Kenyan coffee, roasted in Kenya, packaged in Kenya, distributed through African and global networks.",
      "Our launch market is the United States, with planned expansion to follow. But the point isn't just where it's sold — it's where the value is created. Every bag of Nzoia represents skills, jobs, and investment that stay on the continent. From Kirinyaga to Nairobi to the world — the full journey, under one name.",
    ],
  },
];

export default function OriginsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden md:min-h-[80vh]">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920"
          alt="Sweeping view of the Kenyan highlands at golden hour, volcanic mountains and lush green valleys"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 opacity-0 animate-fade-in-up text-xs font-semibold uppercase tracking-[0.3em] text-gold/90 md:text-sm">
            Our Origins
          </p>
          <h1 className="opacity-0 animate-fade-in-up delay-200 font-heading text-5xl text-cream md:text-7xl lg:text-8xl">
            From the Highlands
            <br />
            <span className="italic">to the World</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl opacity-0 animate-fade-in-up delay-300 text-base text-cream/75 md:text-lg">
            The story of Nzoia begins long before the first roast — in the
            volcanic soil, the mountain air, and the hands that have tended this
            land for generations.
          </p>
        </div>
      </section>

      {/* Narrative Sections */}
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={section.id}
            id={section.id}
            className={`relative overflow-hidden ${
              isEven ? "bg-warm-white" : "bg-parchment"
            }`}
          >
            <div className="texture-grain absolute inset-0" />

            <div
              className={`relative z-10 mx-auto max-w-[1400px] lg:grid lg:min-h-[80vh] lg:grid-cols-2 ${
                isEven ? "" : "lg:direction-rtl"
              }`}
            >
              {/* Image */}
              <div
                className={`relative h-[50vh] lg:h-auto ${
                  isEven ? "" : "lg:order-2"
                }`}
              >
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className={`absolute inset-0 ${
                    isEven
                      ? "bg-gradient-to-t from-warm-white/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-warm-white/20"
                      : "bg-gradient-to-t from-parchment/30 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-parchment/20"
                  }`}
                />
              </div>

              {/* Content */}
              <div
                className={`flex items-center px-6 py-16 lg:px-16 lg:py-24 ${
                  isEven ? "" : "lg:order-1"
                }`}
              >
                <div className="max-w-lg">
                  <ScrollReveal>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-copper">
                      {section.label}
                    </span>
                  </ScrollReveal>

                  <ScrollReveal delay={150}>
                    <h2 className="mt-4 font-heading text-3xl text-espresso md:text-4xl lg:text-5xl">
                      {section.title}
                    </h2>
                  </ScrollReveal>

                  {section.content.map((paragraph, pIndex) => (
                    <ScrollReveal key={pIndex} delay={250 + pIndex * 100}>
                      <p className="mt-6 text-base leading-relaxed text-text-secondary">
                        {paragraph}
                      </p>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-dark-roast py-24 md:py-32 lg:py-40">
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl text-cream md:text-5xl lg:text-6xl">
              Taste the Origin
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream/70 md:text-lg">
              Now that you know where it comes from, discover where it can take
              you. Explore our three roast lines — each a different conversation
              with the same extraordinary land.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Link
              href="/products"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-cream/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream ring-1 ring-cream/25 backdrop-blur-sm transition-all duration-300 hover:bg-cream/20 hover:ring-cream/40"
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
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
