import { MARQUEE_ITEMS } from "@/lib/constants";

function MarqueeContent() {
  return (
    <div className="flex items-center gap-12 px-6">
      {MARQUEE_ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-2 font-label-bold text-white"
        >
          <span className="h-2 w-2 rounded-full bg-tech-green" />
          {item}
        </span>
      ))}
    </div>
  );
}

export default function MarqueeStrip() {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-white/10 bg-primary py-4">
      <div className="flex animate-marquee">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}
