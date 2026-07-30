"use client";

import Image from "next/image";

export function FloatingActions() {

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden md:flex items-end justify-between px-6 pb-6">
      {/* Call Button — Left */}
      {/* <a
        href="tel:7185980256"
        aria-label="Call us"
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#00a8a8] text-white shadow-lg transition-all duration-200 hover:scale-110"
        style={{
          boxShadow: "0 4px 14px 0 rgba(0, 168, 168, 0.39)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 6px 20px 0 rgba(0, 168, 168, 0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 4px 14px 0 rgba(0, 168, 168, 0.39)";
        }}
      >
        <Phone className="h-6 w-6 fill-current" />
      </a> */}

      {/* Right Column — Scroll to Top + WhatsApp */}
      <div className="pointer-events-auto flex flex-col items-center gap-3">
        

        {/* WhatsApp Button */}
        <a
          href="#"
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-lg transition-all duration-200 hover:scale-110"
          style={{
            boxShadow: "0 4px 14px 0 rgba(37, 211, 102, 0.39)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 6px 20px 0 rgba(37, 211, 102, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 4px 14px 0 rgba(37, 211, 102, 0.39)";
          }}
        >
          <Image
            src="/images/icons/whatsapp.png"
            alt="WhatsApp"
            fill
            sizes="56px"
            className="object-cover rounded-full"
          />
        </a>
      </div>
    </div>
  );
}
