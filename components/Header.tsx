"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { NAV_LINKS, PHONE, PHONE_HREF } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close drawer on outside click ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  /* ── Lock body scroll when drawer is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Announcement Bar ── */}
      <div className="fixed top-0 z-[60] w-full bg-primary px-4 py-1.5 text-center text-xs font-semibold tracking-wide text-white/90">
        <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-brand-orange align-middle" />
        24/7 Emergency HVAC Service Available — Call&nbsp;
        <a href={PHONE_HREF} className="font-bold text-brand-orange hover:underline">
          {PHONE}
        </a>
      </div>

      {/* ── Main Navbar ── */}
      <header
        id="main-header"
        className="fixed top-7 z-50 w-full border-b border-gray-100 bg-white shadow-md backdrop-blur-xl"
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}>

          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 transition-opacity hover:opacity-90">
            <Image
              alt="Green Tech Mechanical Logo"
              className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-10" : "h-11 md:h-12"}`}
              height={44}
              priority
              unoptimized
              src={'/images/logo/logo.png'}
              width={65}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  link.active
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                }`}
              >
                {link.label}
                {link.active && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-brand-orange" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right — Phone + CTA */}
          <div className="flex items-center gap-3">
            {/* Phone icon button — desktop only */}
            <a
              href={PHONE_HREF}
              aria-label="Call us"
              className="hidden items-center justify-center rounded-full bg-primary p-2.5 text-white shadow-sm transition-all duration-300 hover:bg-brand-orange active:scale-95 lg:flex"
            >
              <Icon name="call" className="text-[20px]" />
            </a>

            {/* Book Now CTA */}
            <Link
              href="#appointment"
              className="hidden rounded-full bg-brand-orange px-5 py-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:brightness-110 active:scale-95 sm:block"
            >
              Book Now
            </Link>

            {/* Mobile hamburger */}
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg transition-colors hover:bg-gray-100 lg:hidden"
            >
              <span className="h-0.5 w-5 rounded-full bg-gray-700" />
              <span className="h-0.5 w-5 rounded-full bg-gray-700" />
              <span className="h-0.5 w-3 self-start rounded-full bg-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm lg:hidden" />
      )}

      {/* ── Mobile Drawer ── */}
      <div
        ref={drawerRef}
        className={`fixed right-0 top-0 z-[80] flex h-full w-72 flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <Image
            alt="Green Tech Mechanical Logo"
            className="h-9 w-auto object-contain"
            height={36}
            unoptimized
            src={'/images/logo/logo.png'}
            width={53}
          />
          <button
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          >
            <Icon name="close" className="text-gray-600" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-1 flex-col gap-1 px-4 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                link.active
                  ? "bg-primary/5 text-primary"
                  : "text-gray-600 hover:bg-gray-50 hover:text-primary"
              }`}
            >
              {link.active && (
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-brand-orange" />
              )}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer Footer CTAs */}
        <div className="border-t border-gray-100 px-4 py-6 space-y-3">
          <a
            href={PHONE_HREF}
            className="flex items-center justify-center gap-2 rounded-xl border-2 border-primary py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white"
          >
            <Icon name="call" />
            {PHONE}
          </a>
          <Link
            href="#appointment"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 rounded-xl bg-brand-orange py-3 text-sm font-bold text-white shadow-md transition-all hover:brightness-110"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </>
  );
}
