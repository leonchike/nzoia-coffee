"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SHOP_URL } from "@/lib/data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 font-heading text-2xl tracking-wide lg:text-3xl"
          style={{
            color: isScrolled || isMenuOpen ? "var(--color-espresso)" : "var(--color-cream)",
          }}
        >
          Nzoia
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                pathname === link.href
                  ? "text-copper"
                  : isScrolled
                    ? "text-text-secondary hover:text-copper"
                    : "text-cream/80 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Shop CTA */}
        <div className="hidden md:block">
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
              isScrolled
                ? "bg-espresso text-cream hover:bg-volcanic"
                : "bg-cream/15 text-cream ring-1 ring-cream/30 backdrop-blur-sm hover:bg-cream/25"
            }`}
          >
            Shop
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
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isMenuOpen
                  ? "translate-y-2 rotate-45 bg-espresso"
                  : isScrolled
                    ? "bg-espresso"
                    : "bg-cream"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-0"
                  : isScrolled
                    ? "bg-espresso"
                    : "bg-cream"
              }`}
            />
            <span
              className={`block h-0.5 w-6 transition-all duration-300 ${
                isMenuOpen
                  ? "-translate-y-2 -rotate-45 bg-espresso"
                  : isScrolled
                    ? "bg-espresso"
                    : "bg-cream"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-warm-white transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-heading text-4xl transition-all duration-300 ${
                pathname === link.href
                  ? "text-copper"
                  : "text-espresso hover:text-copper"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${i * 75}ms` : "0ms",
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-espresso px-8 py-3 text-sm font-semibold tracking-wide uppercase text-cream transition-colors hover:bg-volcanic"
            style={{
              transitionDelay: isMenuOpen ? "300ms" : "0ms",
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Shop
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
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
