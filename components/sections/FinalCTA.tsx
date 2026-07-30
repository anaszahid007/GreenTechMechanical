"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { useFadeIn, useMagneticHover } from "@/lib/useAnimations";

export default function FinalCTA() {
  const headlineRef = useFadeIn<HTMLHeadingElement>({ y: 50, duration: 1 });
  const phoneRef = useFadeIn<HTMLParagraphElement>({ y: 30, delay: 0.2 });
  const buttonsRef = useFadeIn<HTMLDivElement>({ y: 30, delay: 0.4 });
  const ctaRef = useMagneticHover<HTMLAnchorElement>(0.2);

  return (
    <section className="relative overflow-hidden bg-primary py-xl">
      <div className="absolute inset-0 bg-tech-green/10 opacity-30" />
      <div className="relative z-10 mx-auto max-w-container-max px-gutter text-center">
        <h2 ref={headlineRef} className="mb-6 font-headline-xl-mobile text-white md:font-headline-xl">
          Experience Better Comfort Today
        </h2>
        <p ref={phoneRef} className="mb-8 font-headline-lg text-headline-lg text-primary-fixed-dim">
          {PHONE}
        </p>
        <div ref={buttonsRef} className="flex flex-col justify-center gap-md sm:flex-row">
          <a
            ref={ctaRef}
            className="flex items-center justify-center gap-3 rounded-2xl bg-brand-orange px-12 py-5 font-label-bold text-xl text-white shadow-xl transition-all hover:brightness-110 hover:scale-105"
            href={PHONE_HREF}
          >
            <Icon name="call" /> Call Our Engineers
          </a>
          <Link
            className="rounded-2xl bg-white px-12 py-5 font-label-bold text-xl text-primary shadow-xl transition-all hover:bg-surface-container hover:scale-105"
            href="#appointment"
          >
            Book Service Online
          </Link>
        </div>
      </div>
    </section>
  );
}
