"use client";

import Icon from "@/components/Icon";
import { PHONE_HREF, WARNING_SIGNS } from "@/lib/constants";
import { useFadeIn, useScrollReveal } from "@/lib/useAnimations";

export default function WarningSigns() {
  const listRef = useScrollReveal<HTMLDivElement>({
    childSelector: "li",
    stagger: 0.06,
    y: 25,
  });
  const alertRef = useFadeIn<HTMLDivElement>({ x: 60, y: 0, duration: 1, delay: 0.3 });

  return (
    <section className="bg-surface-container-low py-xl">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-xl px-gutter lg:grid-cols-2">
        <div ref={listRef}>
          <h2 className="mb-6 font-headline-lg text-headline-lg text-primary">
            Common HVAC Warning Signs
          </h2>
          <ul className="space-y-3">
            {WARNING_SIGNS.map((sign) => (
              <li key={sign} className="flex items-start gap-3 transition-colors duration-200 hover:text-primary">
                <Icon className="mt-1 text-brand-orange" name="check_circle" />
                <span className="text-on-surface-variant">{sign}</span>
              </li>
            ))}
          </ul>
        </div>

        <div ref={alertRef} className="flex flex-col justify-center rounded-xl border-l-8 border-error bg-error-container/30 p-8 transition-all duration-300 hover:shadow-lg">
          <div className="mb-4 flex items-center gap-3 text-error">
            <Icon className="text-4xl" name="warning" />
            <h3 className="font-headline-md text-headline-md">Critical Safety Note</h3>
          </div>
          <p className="mb-6 font-body-lg leading-relaxed text-on-error-container">
            If you smell gas or suspect a Carbon Monoxide leak (dizziness, nausea,
            headache), <strong>exit the building immediately</strong> and call
            emergency services or your gas utility. Do not attempt to toggle
            electrical switches or start your HVAC system.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="rounded-xl bg-error px-8 py-3 text-center font-label-bold text-white transition-all hover:brightness-110 hover:scale-105"
              href={PHONE_HREF}
            >
              Emergency HVAC Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
