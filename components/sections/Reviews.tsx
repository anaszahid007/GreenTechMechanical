"use client";

import Image from "next/image";
import Icon from "@/components/Icon";
import { REVIEWS } from "@/lib/constants";
import { useFadeIn, useStaggerCards } from "@/lib/useAnimations";

const GOOGLE_LOGO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAgnrNUfqRGtE2-z3qsCcb5J7SfyLo7jlVviJIzfAKrnvFHFWPOqqOlLM5cm4dRDwHIht6GgHJ0e9E210DywnKzVAjVYVsDBA-KiDbYT-uhDSDmyvvBQEK7MDDgSj20oE4gqr240NnC_A65X9xvW149Ld5h35B9VDYfooD0SEvCY-wE2jXMxlIpO5IF5NNZYkDVOBK6FDCVTLDfPHpkAq8oG6cLs-ayt3IEeDxBFNeZIL4kQ-R8_yfV";

function StarRating() {
  return (
    <div className="flex text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} filled name="star" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const headerRef = useFadeIn<HTMLDivElement>({ y: 40 });
  const cardsRef = useStaggerCards<HTMLDivElement>(
    ".review-card",
    { stagger: 0.15, y: 60 }
  );

  return (
    <section className="bg-surface-container-low py-xl" id="reviews">
      <div className="mx-auto max-w-container-max px-gutter">
        <div ref={headerRef} className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-2 font-headline-lg text-headline-lg text-primary">
              What Your Neighbors Are Saying
            </h2>
            <p className="text-on-surface-variant">
              Top-rated HVAC engineering in Queens Village.
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-xl border border-outline-variant/30 bg-white px-4 py-2 md:flex">
            <Image alt="Google Logo" className="h-6 w-auto" height={24} src={GOOGLE_LOGO} width={24} />
            <StarRating />
            <span className="font-label-bold text-primary">4.9/5</span>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 gap-md md:grid-cols-3">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="review-card flex h-full flex-col justify-between rounded-xl border border-outline-variant/30 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div>
                <div className="mb-4">
                  <StarRating />
                </div>
                <p className="mb-6 italic text-on-surface-variant">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              <div className="font-headline-md text-lg text-primary">
                {review.author}{" "}
                <span className="block font-label-bold text-xs text-on-surface-variant/60">
                  {review.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
