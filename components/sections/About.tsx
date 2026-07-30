"use client";

import Image from "next/image";
import Link from "next/link";
import { useFadeIn } from "@/lib/useAnimations";

const ABOUT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAP4URAwDl95h-QWvBDqcyRR-6n6J5XLHmgHxyQfIaN87EH51UnKMwGseyw0aHHoYYA01eyk4mTe4vBTyl2cLgWfllyouxXU3yBskIMC6s1RdtVyxNWocjlZxM6DhDxt0GqmluAKSAuF5fIPIVfh_pg7JMYAFmVz4bE8zarC8KWUg1OOSeBouwUlN2Rb3aTkg8HJj6czZJfsjRg6BqiKte_24b1NWmgHFszqD7gGhN_QKwf2gyCGoPq";

export default function About() {
  const textRef = useFadeIn<HTMLDivElement>({ y: 50, duration: 0.9 });
  const imageRef = useFadeIn<HTMLDivElement>({ y: 50, x: 40, duration: 1, delay: 0.2 });

  return (
    <section
      className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-xl px-gutter py-xl lg:grid-cols-2"
      id="about"
    >
      <div ref={textRef} className="space-y-md">
        <h2 className="font-headline-lg text-headline-lg text-primary">
          Engineering Comfort with a Green Edge
        </h2>
        <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
          At Green Tech Mechanical, we understand that HVAC isn&apos;t just about
          blowing air—it&apos;s about creating a safe, sustainable environment for your
          family or employees. Based in the heart of Queens Village, our team of
          certified engineers brings decades of technical expertise to every service
          call.
        </p>
        <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
          Whether you&apos;re facing a mid-winter boiler breakdown or planning a
          high-efficiency AC installation, we prioritize transparency and technical
          excellence. We provide clear, diagnostic-driven solutions tailored to the
          unique architectural needs of New York properties.
        </p>
        <Link
          className="inline-block rounded-xl bg-primary px-10 py-4 font-label-bold text-white shadow-md transition-all hover:bg-primary-container hover:scale-105"
          href="#appointment"
        >
          Book Now
        </Link>
      </div>

      <div ref={imageRef} className="relative">
        <div className="absolute -inset-4 -z-10 rotate-2 rounded-3xl bg-tech-green/5" />
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl transition-transform duration-500 hover:scale-[1.02]">
          <Image
            alt="Professional HVAC technician inspecting an outdoor condenser unit"
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={ABOUT_IMAGE}
          />
        </div>
      </div>
    </section>
  );
}
