import { Hero } from "@/components/sections/Hero";
import { Sumuhurtham } from "@/components/sections/Sumuhurtham";
import { Countdown } from "@/components/sections/Countdown";
import { Blessing } from "@/components/sections/Blessing";
import { Gallery } from "@/components/sections/Gallery";
import { Dinner } from "@/components/sections/Dinner";
import { Venue } from "@/components/sections/Venue";
import { Footer } from "@/components/layout/Footer";
import { FloralDivider } from "@/components/ui/FloralDivider";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen w-full overflow-x-hidden">
      <Hero />
      <FloralDivider />
      <Sumuhurtham />
      <FloralDivider />
      <Countdown />
      <FloralDivider />
      <Blessing />
      <FloralDivider />
      <Gallery />
      <FloralDivider />
      <Dinner />
      <FloralDivider />
      <Venue />
      <FloralDivider />
      <Footer />
      <FloralDivider />
    </main>
  );
}
