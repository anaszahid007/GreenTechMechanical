"use client";

import { useRef } from "react";
import Icon from "@/components/Icon";
import { SERVICE_AREAS } from "@/lib/constants";
import { useFadeIn, useScrollReveal } from "@/lib/useAnimations";

export default function ServiceAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useFadeIn<HTMLDivElement>({ y: 50, duration: 0.9 });
  const mapRef = useFadeIn<HTMLDivElement>({ y: 50, x: 40, duration: 1, delay: 0.2 });
  const tagsRef = useScrollReveal<HTMLDivElement>({
    childSelector: "span",
    stagger: 0.06,
    y: 20,
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-xl"
      id="areas"
      style={{
        backgroundImage: "url(/images/marquee/neighborhood-bg.jpg)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(76,175,80,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto grid max-w-container-max grid-cols-1 items-center gap-xl px-gutter lg:grid-cols-2">
        <div ref={textRef} className="space-y-md">
          <h2 className="font-headline-lg text-headline-lg text-white">
            Where We Operate
          </h2>
          <p className="font-body-lg text-white/80">
            We provide rapid-response HVAC service to homes and businesses across
            Eastern Queens and surrounding neighborhoods.
          </p>
          <div ref={tagsRef} className="flex flex-wrap gap-3">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full bg-white/15 px-4 py-2 font-label-bold text-white shadow-sm backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-tech-green hover:text-white hover:scale-105 hover:border-tech-green cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="rounded-xl border border-tech-green/30 bg-white/10 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-tech-green/60 hover:shadow-tech-green/20 hover:shadow-xl">
            <div className="mb-2 flex gap-3 font-headline-md text-lg text-tech-green">
              <Icon name="bolt" />
              Local Fast Response
            </div>
            <p className="text-sm text-white/70">
              Being local allows us to reach Queens Village emergencies in under 60
              minutes in many cases.
            </p>
          </div>
        </div>

        <div ref={mapRef} className="h-[400px] overflow-hidden rounded-3xl border border-white/20 bg-black/30 shadow-inner backdrop-blur-sm transition-shadow duration-500 hover:shadow-lg hover:shadow-tech-green/10">
          <iframe
            allowFullScreen
            className="h-full w-full opacity-80 contrast-125 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12099.99!2d-73.74!3d40.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c263d9!2sQueens%20Village%2C%20NY!5e0!3m2!1sen!2sus!4v1"
            title="Queens Village, NY map"
          />
        </div>
      </div>
    </section>
  );
}
