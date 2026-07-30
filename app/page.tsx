import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import Appointment from "@/components/sections/Appointment";
import EmergencyCallout from "@/components/sections/EmergencyCallout";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Hero from "@/components/sections/Hero";
import ImageMarquee from "@/components/sections/ImageMarquee";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import Process from "@/components/sections/Process";
import RepairOrReplace from "@/components/sections/RepairOrReplace";
import Reviews from "@/components/sections/Reviews";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Services from "@/components/sections/Services";
import TrustBadges from "@/components/sections/TrustBadges";
import WarningSigns from "@/components/sections/WarningSigns";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <MarqueeStrip />
        <About />
        <ImageMarquee />
        <Services />
        <EmergencyCallout />
        <WhyChooseUs />
        <WarningSigns />
        <RepairOrReplace />
        <Process />
        <ServiceAreas />
        <Reviews />
        <FAQ />
        <Appointment />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
