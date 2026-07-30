"use client";

import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { useScrollReveal } from "@/lib/useAnimations";

export default function Footer() {
  const colsRef = useScrollReveal<HTMLDivElement>({
    childSelector: ".footer-col",
    stagger: 0.12,
    y: 40,
  });

  return (
    <footer className="border-t border-white/10 bg-primary pb-md pt-xl text-white">
      <div ref={colsRef} className="mx-auto grid max-w-container-max grid-cols-1 gap-xl px-gutter md:grid-cols-2 lg:grid-cols-4">
        <div className="footer-col space-y-4">
          <Image
            alt="Green Tech Mechanical Logo"
            className="h-12 w-auto object-contain brightness-0 invert"
            height={48}
            unoptimized
            src={'/images/logo/logo.png'}
            width={71}
          />
          <p className="text-sm leading-relaxed text-primary-fixed-dim">
            Certified Eco-Friendly HVAC Solutions for Queens Village and surrounding
            areas. Engineering professional comfort with every service.
          </p>
          <div className="flex gap-4">
            {["public", "share", "thumb_up"].map((icon) => (
              <a
                key={icon}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:border-brand-orange"
                href="#"
              >
                <Icon className="text-lg" name={icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="mb-6 font-headline-md text-lg">Quick Links</h4>
          <ul className="space-y-3 text-primary-fixed-dim">
            <li>
              <Link className="transition-all duration-200 hover:text-brand-orange hover:translate-x-1 inline-block" href="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="transition-all duration-200 hover:text-brand-orange hover:translate-x-1 inline-block" href="#about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="transition-all duration-200 hover:text-brand-orange hover:translate-x-1 inline-block" href="#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="transition-all duration-200 hover:text-brand-orange hover:translate-x-1 inline-block" href="#areas">
                Service Areas
              </Link>
            </li>
            <li>
              <Link className="transition-all duration-200 hover:text-brand-orange hover:translate-x-1 inline-block" href="#reviews">
                Customer Reviews
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="mb-6 font-headline-md text-lg">Our Services</h4>
          <ul className="space-y-3 text-primary-fixed-dim">
            {[
              "Emergency Repair",
              "Heating Systems",
              "Air Conditioning",
              "Air Quality Control",
              "Preventative Maintenance",
            ].map((item) => (
              <li key={item}>
                <a className="transition-all duration-200 hover:text-brand-orange hover:translate-x-1 inline-block" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col" id="contact">
          <h4 className="mb-6 font-headline-md text-lg">Contact Info</h4>
          <ul className="space-y-4 text-primary-fixed-dim">
            <li className="flex gap-3 transition-colors duration-200 hover:text-white">
              <Icon className="text-brand-orange" name="location_on" />
              <span>Queens Village, NY 11427</span>
            </li>
            <li className="flex gap-3 transition-colors duration-200 hover:text-white">
              <Icon className="text-brand-orange" name="call" />
              <a className="transition-colors hover:text-white" href={PHONE_HREF}>
                {PHONE}
              </a>
            </li>
            <li className="flex gap-3 transition-colors duration-200 hover:text-white">
              <Icon className="text-brand-orange" name="mail" />
              <a
                className="transition-colors hover:text-white"
                href="mailto:service@greentechmechanical.com"
              >
                service@greentechmechanical.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-xl flex max-w-container-max flex-col items-center justify-between gap-4 border-t border-white/10 px-gutter pt-8 text-sm text-primary-fixed-dim md:flex-row">
        <p>© 2024 Green Tech Mechanical. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a className="transition-colors hover:text-white" href="#">
            Privacy Policy
          </a>
          <a className="transition-colors hover:text-white" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
