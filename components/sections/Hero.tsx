"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { useFadeIn, useMagneticHover } from "@/lib/useAnimations";

export default function Hero() {
  const textRef = useFadeIn<HTMLDivElement>({ y: 60, duration: 1, start: "top 95%" });
  const formRef = useFadeIn<HTMLDivElement>({ y: 80, x: 40, duration: 1.2, delay: 0.3, start: "top 95%" });
  const ctaRef = useMagneticHover<HTMLAnchorElement>(0.25);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* ── Video Background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
        <video
          autoPlay
          className="h-full w-full object-cover"
          loop
          muted
          playsInline
          src="/videos/hero.mp4"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pt-28 pb-16 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_420px]">

          {/* Left — Text */}
          <div ref={textRef} className="space-y-6 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-orange" />
              <span className="text-xs font-semibold tracking-widest uppercase text-white/90">
                Licensed &amp; Insured · Queens Village, NY
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl xl:text-6xl">
              Expert HVAC Services<br />
              <span className="text-brand-orange">in Queens Village, NY</span>
            </h1>

            <p className="w-full text-base leading-relaxed text-white/80 md:text-lg">
              Expert climate control solutions for your home or business. We combine
              eco-friendly technology with reliable local engineering to keep you
              comfortable year-round.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                ref={ctaRef}
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
              >
                <Icon name="call" />
                Call Now
              </a>
              <Link
                href="#appointment"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10"
              >
                Book Appointment
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { icon: "verified", label: "Licensed & Insured" },
                { icon: "schedule", label: "24/7 Emergency" },
                { icon: "star", label: "5-Star Rated" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-sm"
                >
                  <Icon name={icon} className="text-brand-orange text-base" />
                  <span className="text-xs font-semibold text-white/90">{label}</span>
                </div>
              ))}
            </div>

            {/* Emergency strip */}
            <div className="inline-flex animate-pulse items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="text-xs font-semibold tracking-wide text-white/90">
                Emergency HVAC service available — Call {PHONE}
              </span>
            </div>
          </div>

          {/* Right — Form Card */}
          <div ref={formRef} className="w-full">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              {/* Card Header */}
              <div className="bg-primary px-6 py-4">
                <h2 className="text-base font-bold text-white">Book a Free Estimate</h2>
                <p className="text-xs text-white/70">We&apos;ll contact you within 1 hour</p>
              </div>

              {/* Card Body */}
              <div className="bg-white px-6 py-5">
                <form className="space-y-3">
                  {/* Row 1 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-600">
                        Full Name
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                        placeholder="John Doe"
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-600">
                        Phone Number
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                        placeholder="(347) 000-0000"
                        required
                        type="tel"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-600">
                      Email Address
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                      placeholder="john@example.com"
                      required
                      type="email"
                    />
                  </div>

                  {/* Row 3 */}
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-600">
                      Service Address
                    </label>
                    <input
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                      placeholder="123 Main St, Queens Village, NY"
                      required
                      type="text"
                    />
                  </div>

                  {/* Row 4 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-600">
                        Service Type
                      </label>
                      <select className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary">
                        <option>AC Repair</option>
                        <option>Heating Repair</option>
                        <option>Installation</option>
                        <option>Maintenance</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-gray-600">
                        Preferred Date
                      </label>
                      <input
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                        type="date"
                      />
                    </div>
                  </div>

                  {/* Row 5 */}
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-gray-600">
                      Problem Description
                    </label>
                    <textarea
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                      placeholder="Describe the issue..."
                      rows={3}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    className="w-full rounded-lg bg-brand-orange py-3 text-sm font-bold tracking-wider text-white shadow-md transition-all hover:brightness-110 active:scale-95"
                    type="submit"
                  >
                    CONFIRM APPOINTMENT →
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
