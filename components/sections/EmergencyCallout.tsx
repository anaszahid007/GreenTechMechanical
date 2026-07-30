"use client";

import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { useFadeIn, useMagneticHover } from "@/lib/useAnimations";

export default function EmergencyCallout() {
  const textRef = useFadeIn<HTMLDivElement>({ y: 40, duration: 0.8 });
  const actionsRef = useFadeIn<HTMLDivElement>({ y: 40, delay: 0.2, duration: 0.8 });
  const phoneRef = useMagneticHover<HTMLAnchorElement>(0.2);

  return (
    <section className="bg-primary py-lg text-white">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-md px-gutter text-center md:flex-row md:text-left">
        <div ref={textRef}>
          <h2 className="mb-2 font-headline-lg text-headline-lg">
            Need Help Immediately?
          </h2>
          <p className="text-lg text-primary-fixed-dim">
            Emergency technicians are standing by in Queens Village.
          </p>
        </div>
        <div ref={actionsRef} className="flex flex-col items-center gap-4">
          <a
            ref={phoneRef}
            className="font-headline-lg text-headline-lg text-brand-orange transition-all hover:underline"
            href={PHONE_HREF}
          >
            {PHONE}
          </a>
          <div className="flex gap-4">
            <a
              className="rounded-full bg-brand-orange px-8 py-3 font-label-bold transition-all hover:brightness-110 hover:scale-105"
              href={PHONE_HREF}
            >
              Call Now
            </a>
            <Link
              className="rounded-full border border-white/40 px-8 py-3 font-label-bold transition-all hover:bg-white/10 hover:scale-105"
              href="#appointment"
            >
              Book Routine Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
