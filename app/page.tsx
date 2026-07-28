import { Hero } from "@/components/sections/Hero";
import { Blessing } from "@/components/sections/Blessing";
import { Gallery } from "@/components/sections/Gallery";
import { Venue } from "@/components/sections/Venue";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-cream">
      <Hero />
      <Blessing />
      <Gallery />
      <Venue />
      <Footer />
    </main>
  );
}
