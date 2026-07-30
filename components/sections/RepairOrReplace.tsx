"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { useFadeIn } from "@/lib/useAnimations";

const REPAIR_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuC55cWQ2-DE_fXpbtLvWBKdDDWlPbcizHmA7jjhGDkZMSujxjrFD0KNDwEB2Wij49BRj4Spgc0FWmFd8iw0J4IXMkzY4Edm3gf-iMl_CNbEcDeFbPRTJqCiChaGFhc2YhaeuHjDJ6xJZftQOgiem7GcMjP87yRPW86Gf8nm1_k-JE8-R7_psH88TMIKQNgrZxvLIiDHqaj2xIzPO-nilIoxcMj-_C9bjtm-6bfn142nO0RZlNg2L0bt";

export default function RepairOrReplace() {
  const contentRef = useFadeIn<HTMLDivElement>({ y: 50, duration: 0.9 });
  const imageRef = useFadeIn<HTMLDivElement>({ scale: 0.95, y: 30, duration: 1, delay: 0.2 });

  return (
    <section className="mx-auto max-w-container-max px-gutter py-xl">
      <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-outline-variant/30 bg-white shadow-xl transition-shadow duration-500 hover:shadow-2xl md:grid-cols-2">
        <div ref={contentRef} className="flex flex-col justify-center space-y-6 p-8 md:p-12">
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Repair or Replace?
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Not sure if your unit needs a fix or a fresh start? Our technicians use
            a comprehensive diagnostic rubric to assess the age, efficiency, and
            frequency of repairs for your current system.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <Icon className="text-tech-green" name="task_alt" />
              <span className="font-body-md text-on-surface-variant">
                Systems older than 10-15 years may benefit from replacement.
              </span>
            </li>
            <li className="flex gap-3">
              <Icon className="text-tech-green" name="task_alt" />
              <span className="font-body-md text-on-surface-variant">
                Energy bill comparisons to modern SEER ratings.
              </span>
            </li>
          </ul>
          <Link
            className="inline-block rounded-xl bg-primary px-8 py-4 text-center font-label-bold text-white transition-all hover:bg-primary-container hover:scale-105"
            href="#appointment"
          >
            Request a System Assessment
          </Link>
        </div>

        <div ref={imageRef} className="relative min-h-[300px] overflow-hidden">
          <Image
            alt="Comparison of old and modern HVAC systems"
            className="object-cover transition-transform duration-700 hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            src={REPAIR_IMAGE}
          />
        </div>
      </div>
    </section>
  );
}
