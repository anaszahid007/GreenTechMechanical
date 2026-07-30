"use client";

import Icon from "@/components/Icon";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { useFadeIn } from "@/lib/useAnimations";

export default function Appointment() {
  const infoRef = useFadeIn<HTMLDivElement>({ y: 50, duration: 0.9 });
  const formRef = useFadeIn<HTMLDivElement>({ y: 50, x: 30, duration: 1, delay: 0.2 });

  return (
    <section className="bg-surface-container py-xl" id="appointment">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-xl px-gutter lg:grid-cols-2">
        <div ref={infoRef}>
          <h2 className="mb-6 font-headline-lg text-headline-lg text-primary">
            Schedule Your Service
          </h2>
          <p className="mb-8 font-body-lg leading-relaxed text-on-surface-variant">
            Book your professional diagnostic or routine maintenance visit today.
            Our friendly dispatchers will confirm your appointment within 30 minutes
            during business hours.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 transition-transform duration-300 hover:translate-x-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <Icon name="phone_in_talk" />
              </div>
              <div>
                <p className="text-sm text-on-surface-variant">Prefer to call?</p>
                <a className="font-headline-md text-xl text-primary transition-colors hover:text-brand-orange" href={PHONE_HREF}>
                  {PHONE}
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-brand-orange/20 bg-brand-orange/5 p-6 transition-all duration-300 hover:border-brand-orange/40 hover:shadow-md">
              <p className="mb-2 flex items-center gap-2 font-label-bold text-brand-orange">
                <Icon name="emergency" />
                Emergency Service 24/7
              </p>
              <p className="text-sm text-on-surface-variant">
                If this is an urgent HVAC failure, please call us directly for the
                fastest possible response.
              </p>
            </div>
          </div>
        </div>

        <div ref={formRef} className="rounded-2xl bg-white p-8 shadow-xl transition-shadow duration-500 hover:shadow-2xl">
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block font-label-bold text-sm text-primary">
                  Full Name
                </label>
                <input
                  className="w-full rounded-xl border border-outline-variant px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="mb-1 block font-label-bold text-sm text-primary">
                  Phone Number
                </label>
                <input
                  className="w-full rounded-xl border border-outline-variant px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                  type="tel"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block font-label-bold text-sm text-primary">
                Email Address
              </label>
              <input
                className="w-full rounded-xl border border-outline-variant px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-primary focus:border-primary"
                required
                type="email"
              />
            </div>
            <div>
              <label className="mb-1 block font-label-bold text-sm text-primary">
                Service Address
              </label>
              <input
                className="w-full rounded-xl border border-outline-variant px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-primary focus:border-primary"
                required
                type="text"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block font-label-bold text-sm text-primary">
                  Service Required
                </label>
                <select className="w-full rounded-xl border border-outline-variant px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-primary focus:border-primary">
                  <option>AC Repair</option>
                  <option>Heating Repair</option>
                  <option>Installation</option>
                  <option>Maintenance</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block font-label-bold text-sm text-primary">
                  Preferred Date
                </label>
                <input
                  className="w-full rounded-xl border border-outline-variant px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-primary focus:border-primary"
                  type="date"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block font-label-bold text-sm text-primary">
                Problem Description
              </label>
              <textarea
                className="w-full rounded-xl border border-outline-variant px-4 py-3 outline-none transition-all focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Describe the issue..."
                rows={4}
              />
            </div>
            <button
              className="w-full rounded-xl bg-primary py-4 text-lg font-label-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
              type="submit"
            >
              CONFIRM APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
