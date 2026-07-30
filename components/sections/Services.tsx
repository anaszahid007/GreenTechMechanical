"use client";

import Icon from "@/components/Icon";
import { PHONE_HREF, SERVICES } from "@/lib/constants";
import { useFadeIn, useStaggerCards } from "@/lib/useAnimations";

export default function Services() {
  const headerRef = useFadeIn<HTMLDivElement>({ y: 40 });
  const gridRef = useStaggerCards<HTMLDivElement>(
    ".service-card",
    { stagger: 0.1, y: 50 }
  );

  return (
    <section className="bg-surface-container-low py-xl" id="services">
      <div ref={headerRef} className="mx-auto mb-12 max-w-container-max px-gutter text-center">
        <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">
          Our Professional HVAC Services
        </h2>
        <p className="mx-auto max-w-2xl text-on-surface-variant">
          Expert diagnosis and repair for all major brands. Residential and
          commercial heating and cooling solutions.
        </p>
      </div>

      <div ref={gridRef} className="mx-auto grid max-w-container-max grid-cols-1 gap-md px-gutter sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="service-card service-card-hover rounded-xl border border-outline-variant/30 bg-white p-6 transition-all duration-300"
          >
            <Icon className="mb-4 text-4xl text-tech-green" name={service.icon} />
            <h3 className="mb-3 font-headline-md text-headline-md text-primary">
              {service.title}
            </h3>
            <p className="mb-4 font-body-md text-on-surface-variant">
              {service.description}
            </p>
            <a
              className="group inline-flex items-center gap-1 font-label-bold text-primary hover:text-brand-orange"
              href="#"
            >
              Read More{" "}
              <Icon
                className="text-sm transition-transform group-hover:translate-x-1"
                name="arrow_forward"
              />
            </a>
          </div>
        ))}

        <div className="service-card flex flex-col items-center justify-center space-y-4 rounded-xl bg-brand-orange p-6 text-center text-white shadow-lg transition-transform hover:scale-[1.02]">
          <Icon className="text-5xl" name="warning" />
          <h3 className="font-headline-md text-headline-md">Emergency HVAC?</h3>
          <p className="font-label-bold text-lg">Available 24/7</p>
          <a
            className="w-full rounded-lg bg-white py-3 font-label-bold text-brand-orange transition-colors hover:bg-surface-container"
            href={PHONE_HREF}
          >
            CALL NOW
          </a>
        </div>
      </div>
    </section>
  );
}
