"use client";

import Icon from "@/components/Icon";
import { ADVANTAGES } from "@/lib/constants";
import { useFadeIn, useStaggerCards } from "@/lib/useAnimations";

export default function WhyChooseUs() {
  const headerRef = useFadeIn<HTMLDivElement>({ y: 40 });
  const gridRef = useStaggerCards<HTMLElement>(
    ".advantage-card",
    { stagger: 0.1, y: 50 }
  );

  return (
    <section ref={gridRef} className="mx-auto max-w-container-max px-gutter py-xl">
      <div ref={headerRef} className="mb-12 text-center">
        <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">
          The Green Tech Advantage
        </h2>
        <p className="mx-auto max-w-2xl text-on-surface-variant">
          Why homeowners and businesses in Queens Village trust us with their
          comfort systems.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
        {ADVANTAGES.map((item) => (
          <div
            key={item.title}
            className="advantage-card flex gap-4 rounded-xl border border-outline-variant/30 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="h-fit rounded-lg bg-tech-green/10 p-3 transition-colors duration-300 group-hover:bg-tech-green/20">
              <Icon className="text-tech-green" name={item.icon} />
            </div>
            <div>
              <h4 className="mb-2 font-headline-md text-lg text-primary">
                {item.title}
              </h4>
              <p className="text-sm text-on-surface-variant">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
