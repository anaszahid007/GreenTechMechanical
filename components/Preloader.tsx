"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    // Keep the preloader visible for 1.5 seconds to ensure a smooth loading experience
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary transition-all duration-700 ease-in-out ${
        loading ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <div className="relative overflow-hidden mb-8">
          <Image
            alt="Green Tech Mechanical Logo"
            className="h-20 w-auto object-contain brightness-0 invert animate-pulse"
            height={80}
            priority
            unoptimized
            src={'/images/logo/logo.png'}
            width={118}
          />
        </div>
        
        {/* Loading Bar */}
        <div className="h-1 w-56 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-1/2 rounded-full bg-brand-orange animate-[loading-bar_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );
}
