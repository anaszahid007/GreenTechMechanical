"use client";

import Icon from "@/components/Icon";
import { TRUST_BADGES } from "@/lib/constants";
import { useStaggerCards } from "@/lib/useAnimations";

export default function TrustBadges() {
  const gridRef = useStaggerCards<HTMLElement>(
    ".trust-badge",
    { stagger: 0.12, y: 30 }
  );

  return (
    <section ref={gridRef} className="bg-surface-container py-md">
      <div className="mx-auto grid max-w-container-max grid-cols-2 gap-md px-gutter md:grid-cols-4">
        {TRUST_BADGES.map((badge) => (
          <div
            key={badge.label}
            className="trust-badge flex items-center gap-3 text-primary transition-transform duration-300 hover:scale-105"
          >
            <Icon className="text-3xl text-tech-green" name={badge.icon} />
            <span className="font-label-bold text-label-bold">{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
