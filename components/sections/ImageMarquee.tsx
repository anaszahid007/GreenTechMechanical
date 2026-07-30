"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const MARQUEE_IMAGES_ROW1 = [
  {
    src: "/images/marquee/technician.png",
    alt: "HVAC technician servicing an outdoor AC unit",
    label: "Expert Technicians",
  },
  {
    src: "/images/marquee/ac-unit.png",
    alt: "Modern central air conditioning unit installed at a residential property",
    label: "AC Installation",
  },
  {
    src: "/images/marquee/comfort-home.png",
    alt: "Comfortable temperature-controlled living room with smart thermostat",
    label: "Home Comfort",
  },
  {
    src: "/images/marquee/ductwork.png",
    alt: "Professional HVAC ductwork and ventilation system",
    label: "Duct Systems",
  },
  {
    src: "/images/marquee/mini-split.png",
    alt: "Ductless mini-split unit mounted in a modern living room",
    label: "Mini-Split Units",
  },
  {
    src: "/images/marquee/thermostat.png",
    alt: "Smart thermostat on a modern wall displaying temperature",
    label: "Smart Controls",
  },
];

const MARQUEE_IMAGES_ROW2 = [
  {
    src: "/images/marquee/mini-split.png",
    alt: "Ductless mini-split unit in a contemporary space",
    label: "Ductless Solutions",
  },
  {
    src: "/images/marquee/thermostat.png",
    alt: "Smart home thermostat for precise climate control",
    label: "Climate Control",
  },
  {
    src: "/images/marquee/technician.png",
    alt: "Certified HVAC professional performing maintenance",
    label: "Maintenance",
  },
  {
    src: "/images/marquee/comfort-home.png",
    alt: "Modern interior with optimized air quality",
    label: "Air Quality",
  },
  {
    src: "/images/marquee/ac-unit.png",
    alt: "High-efficiency outdoor condenser unit",
    label: "Energy Efficient",
  },
  {
    src: "/images/marquee/ductwork.png",
    alt: "Clean ductwork installation in commercial space",
    label: "Commercial HVAC",
  },
];

interface MarqueeCardProps {
  src: string;
  alt: string;
  label: string;
}

function MarqueeCard({ src, alt, label }: MarqueeCardProps) {
  return (
    <div className="group relative mx-3 h-[220px] w-[320px] flex-shrink-0 overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl md:h-[260px] md:w-[380px]">
      <Image
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        fill
        sizes="(max-width: 768px) 320px, 380px"
        src={src}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/80" />
      {/* Label */}
      <div className="absolute inset-x-0 bottom-0 translate-y-1 p-5 transition-transform duration-500 group-hover:translate-y-0">
        <span className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-3 py-1.5 font-label-bold text-sm tracking-wide text-white backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-tech-green shadow-[0_0_6px_rgba(76,175,80,0.6)]" />
          {label}
        </span>
      </div>
    </div>
  );
}

export default function ImageMarquee() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-tech-green blur-3xl" />
        <div className="absolute -right-20 bottom-10 h-64 w-64 rounded-full bg-brand-orange blur-3xl" />
      </div>

      {/* Section header */}
      <div className="relative z-10 mx-auto mb-12 max-w-container-max px-gutter text-center">
        <p className="mb-3 font-label-bold uppercase tracking-[0.15em] text-tech-green">
          Our Work in Action
        </p>
        <h2 className="font-headline-lg text-headline-lg text-white md:text-4xl">
          Quality HVAC Solutions You Can Trust
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative z-10 mb-6">
        <Marquee
          autoFill
          direction="left"
          gradient
          gradientColor="#05162e"
          gradientWidth={80}
          pauseOnHover
          speed={35}
        >
          {MARQUEE_IMAGES_ROW1.map((img) => (
            <MarqueeCard
              key={img.label}
              alt={img.alt}
              label={img.label}
              src={img.src}
            />
          ))}
        </Marquee>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative z-10">
        <Marquee
          autoFill
          direction="right"
          gradient
          gradientColor="#05162e"
          gradientWidth={80}
          pauseOnHover
          speed={25}
        >
          {MARQUEE_IMAGES_ROW2.map((img) => (
            <MarqueeCard
              key={img.label}
              alt={img.alt}
              label={img.label}
              src={img.src}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
