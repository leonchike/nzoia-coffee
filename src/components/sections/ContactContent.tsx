"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  INQUIRY_TYPES,
  FORMSPREE_ENDPOINT,
  CONTACT_EMAIL,
  type ContactFormData,
  type InquiryType,
} from "@/lib/data";

interface FormErrors {
  name?: string;
  email?: string;
  inquiryType?: string;
  message?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactContent() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    inquiryType: "General Inquiry",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) errs.message = "Message is required.";
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("submitting");

    try {
      // Submit to Formspree via fetch POST with JSON body
      // Replace FORMSPREE_ENDPOINT with your real endpoint
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          inquiryType: formData.inquiryType,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          inquiryType: "General Inquiry",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-dark-roast md:min-h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-espresso via-dark-roast to-volcanic" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 opacity-0 animate-fade-in-up text-xs font-semibold uppercase tracking-[0.3em] text-gold/90 md:text-sm">
            Get in Touch
          </p>
          <h1 className="opacity-0 animate-fade-in-up delay-200 font-heading text-5xl text-cream md:text-7xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-xl opacity-0 animate-fade-in-up delay-300 text-base text-cream/70 md:text-lg">
            Whether you&apos;re a coffee lover curious about Nzoia, a cafe owner
            looking for an extraordinary single-origin, or a distributor
            interested in partnership — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative overflow-hidden bg-warm-white py-20 md:py-28 lg:py-36">
        <div className="texture-grain absolute inset-0" />

        <div className="relative z-10 mx-auto grid max-w-[1200px] gap-12 px-6 lg:grid-cols-5 lg:gap-20 lg:px-12">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h2 className="font-heading text-3xl text-espresso md:text-4xl">
                Let&apos;s Start a<br />
                <span className="italic">Conversation</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="mt-6 text-base leading-relaxed text-text-secondary">
                We respond to every message personally. Whether it&apos;s a
                question about our beans, a wholesale inquiry, or just to say
                hello — reach out.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-10 space-y-6 border-t border-sand/40 pt-8">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                    Email
                  </h3>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="mt-1 text-base text-copper transition-colors hover:text-terracotta"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                    Headquarters
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    Nzoia Corporation EPZ Ltd
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
                    US Office
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    Nzoia Corporation
                    <br />
                    Bethesda, MD, USA
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              {status === "success" ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-sm border border-highland-light/30 bg-highland/5 p-10 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-highland/10">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-highland)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl text-espresso">
                    Message Sent
                  </h3>
                  <p className="mt-3 max-w-sm text-sm text-text-secondary">
                    Thank you for reaching out. We&apos;ll get back to you
                    shortly — usually within one business day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-sm font-semibold uppercase tracking-wider text-copper transition-colors hover:text-terracotta"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted"
                    >
                      Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`mt-2 w-full border-b-2 bg-transparent py-3 text-base text-text-primary outline-none transition-colors placeholder:text-text-muted/50 ${
                        errors.name
                          ? "border-terracotta"
                          : "border-sand focus:border-copper"
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-terracotta">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted"
                    >
                      Email <span className="text-terracotta">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`mt-2 w-full border-b-2 bg-transparent py-3 text-base text-text-primary outline-none transition-colors placeholder:text-text-muted/50 ${
                        errors.email
                          ? "border-terracotta"
                          : "border-sand focus:border-copper"
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-terracotta">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted"
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      value={formData.inquiryType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          inquiryType: e.target.value as InquiryType,
                        })
                      }
                      className="mt-2 w-full border-b-2 border-sand bg-transparent py-3 text-base text-text-primary outline-none transition-colors focus:border-copper"
                    >
                      {INQUIRY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-[0.2em] text-text-muted"
                    >
                      Message <span className="text-terracotta">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={`mt-2 w-full resize-y border-b-2 bg-transparent py-3 text-base text-text-primary outline-none transition-colors placeholder:text-text-muted/50 ${
                        errors.message
                          ? "border-terracotta"
                          : "border-sand focus:border-copper"
                      }`}
                      placeholder="Tell us what's on your mind..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-terracotta">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error State */}
                  {status === "error" && (
                    <div className="rounded-sm border border-terracotta/30 bg-terracotta/5 p-4">
                      <p className="text-sm text-terracotta">
                        Something went wrong. Please try again or email us
                        directly at{" "}
                        <a
                          href={`mailto:${CONTACT_EMAIL}`}
                          className="underline"
                        >
                          {CONTACT_EMAIL}
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center gap-3 rounded-full bg-espresso px-8 py-4 text-sm font-semibold uppercase tracking-wider text-cream transition-all duration-300 hover:bg-volcanic disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="opacity-25"
                          />
                          <path
                            d="M4 12a8 8 0 018-8"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
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
                      </>
                    )}
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
