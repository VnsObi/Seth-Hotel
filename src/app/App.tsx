import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import { AboutSection } from "@/app/components/AboutSection";
import { RoomsSection } from "@/app/components/RoomsSection";
import { AmenitiesSection } from "@/app/components/AmenitiesSection";
import { DiningSection } from "@/app/components/DiningSection";
import { ContactSection } from "@/app/components/ContactSection";
import { Footer } from "@/app/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <AmenitiesSection />
        <DiningSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
