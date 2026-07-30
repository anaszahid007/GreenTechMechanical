"use client";

import Link from "next/link";
import Icon from "@/components/Icon";
import { PROCESS_STEPS } from "@/lib/constants";
import { useFadeIn, useStaggerCards } from "@/lib/useAnimations";

export default function Process() {
  const headerRef = useFadeIn<HTMLDivElement>({ y: 40 });
  const stepsRef = useStaggerCards<HTMLDivElement>(
    ".process-step",
    { stagger: 0.12, y: 40 }
  );
  const ctaRef = useFadeIn<HTMLDivElement>({ y: 30, delay: 0.6 });

  return (
    <section className="overflow-hidden bg-primary py-xl text-white">
      <div ref={headerRef} className="mx-auto mb-12 max-w-container-max px-gutter text-center">
        <h2 className="mb-4 font-headline-lg text-headline-lg">Our Service Process</h2>
        <p className="text-primary-fixed-dim">
          Seamless, transparent service from first call to final test.
        </p>
      </div>

      <div ref={stepsRef} className="relative mx-auto max-w-container-max px-gutter">
        <div className="absolute left-0 top-1/2 -z-10 hidden h-0.5 w-full -translate-y-1/2 bg-white/20 lg:block" />

        <div className="grid grid-cols-1 gap-md md:grid-cols-3 lg:grid-cols-6">
          {PROCESS_STEPS.map((item) => (
            <div key={item.step} className="process-step group text-center">
              <div
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full font-headline-md text-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${
                  item.highlight === true
                    ? "bg-brand-orange text-white group-hover:shadow-brand-orange/30"
                    : item.highlight === "green"
                      ? "bg-tech-green text-white group-hover:shadow-tech-green/30"
                      : "bg-white text-primary group-hover:shadow-white/20"
                }`}
              >
                {item.step}
              </div>
              <Icon className="mb-2 text-3xl text-primary-fixed-dim" name={item.icon} />
              <h5 className="mb-2 font-label-bold text-sm">{item.label}</h5>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className="mt-12 text-center">
          <Link
            className="inline-block rounded-xl bg-brand-orange px-10 py-4 font-label-bold shadow-lg transition-all hover:brightness-110 hover:scale-105"
            href="#appointment"
          >
            Book HVAC Service
          </Link>
        </div>
      </div>
    </section>
  );
}
