import { useState } from "react";
import { Header } from "@/app/components/Header";
import { HeroSection } from "@/app/components/HeroSection";
import { AboutSection } from "@/app/components/AboutSection";
import { RoomsSection } from "@/app/components/RoomsSection";
import { AmenitiesSection } from "@/app/components/AmenitiesSection";
import { DiningSection } from "@/app/components/DiningSection";
import { ContactSection } from "@/app/components/ContactSection";
import { Footer } from "@/app/components/Footer";
import { BookingModal } from "@/app/components/BookingModal";

export function Home() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("Classic Apartment");

  const handleOpenBooking = (roomName?: string) => {
    if (roomName) {
      setSelectedRoom(roomName);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onBookNow={() => handleOpenBooking()} />
      <main>
        <HeroSection onBookNow={() => handleOpenBooking()} />
        <AboutSection onBookNow={() => handleOpenBooking()} />
        <RoomsSection onBookNow={(roomName) => handleOpenBooking(roomName)} />
        <AmenitiesSection onBookNow={() => handleOpenBooking()} />
        <DiningSection />
        <ContactSection onBookNow={() => handleOpenBooking()} />
      </main>
      <Footer onBookNow={() => handleOpenBooking()} />

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        defaultRoom={selectedRoom}
      />
    </div>
  );
}
