import { Hero } from "@/components/sections/Hero";
import { BrandSignature } from "@/components/sections/BrandSignature";
import { ServicesJourney } from "@/components/sections/ServicesJourney";
import { CraftInMotion } from "@/components/sections/CraftInMotion";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { Expertise } from "@/components/sections/Expertise";
import { ClientLove } from "@/components/sections/ClientLove";
import { BookingSection } from "@/components/sections/BookingSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <BrandSignature />
      <ServicesJourney />
      <CraftInMotion />
      <PortfolioPreview />
      <Expertise />
      <ClientLove />
      <BookingSection />
      <FinalCTA />
    </main>
  );
}
