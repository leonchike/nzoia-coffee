import Link from "next/link";
import { NAV_LINKS, SHOP_URL, CONTACT_EMAIL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative bg-espresso text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12 lg:py-20">
        {/* Top Section */}
        <div className="grid gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1 lg:col-span-2">
            <Link href="/" className="font-heading text-3xl tracking-wide">
              Nzoia
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
              Single-origin Kenyan coffee, roasted at source in Nairobi. From
              the volcanic highlands of Kirinyaga to your cup — the value stays
              on the continent.
            </p>
            <p className="mt-6 font-heading text-lg italic text-gold/80">
              Born of the land. Roasted with intention.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/50">
              Navigate
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-cream/50">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-cream/10" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-xs text-cream/40">
              Nzoia Corporation EPZ Ltd, Kenya | Nzoia Corporation, Bethesda,
              MD, USA
            </p>
            <p className="text-xs text-cream/40">
              Multinational distribution by Nzoia Nig. Ltd (AfCFTA)
            </p>
          </div>
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Nzoia Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
