"use client";

import Icon from "@/components/Icon";
import { FAQ_ITEMS } from "@/lib/constants";
import { useFadeIn, useStaggerCards } from "@/lib/useAnimations";

export default function FAQ() {
  const titleRef = useFadeIn<HTMLHeadingElement>({ y: 40 });
  const listRef = useStaggerCards<HTMLDivElement>(
    "details",
    { stagger: 0.08, y: 30 }
  );

  return (
    <section className="mx-auto max-w-3xl px-gutter py-xl">
      <h2 ref={titleRef} className="mb-12 text-center font-headline-lg text-headline-lg text-primary">
        Frequently Asked Questions
      </h2>
      <div ref={listRef} className="space-y-4">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.question}
            className="group overflow-hidden rounded-xl border border-outline-variant/30 bg-white shadow-sm transition-all open:shadow-md hover:border-primary/20"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-headline-md text-lg text-primary transition-colors hover:text-brand-orange">
              {item.question}
              <Icon
                className="transition-transform group-open:rotate-180"
                name="expand_more"
              />
            </summary>
            <div className="px-6 pb-6 leading-relaxed text-on-surface-variant">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
