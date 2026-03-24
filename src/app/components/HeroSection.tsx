import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  Calendar,
  CheckCircle,
  Coffee,
  ParkingCircle,
  XCircle,
} from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  onBookNow: () => void;
}

export function HeroSection({ onBookNow }: HeroSectionProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleCheckAvailability = () => {
    onBookNow();
  };

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc2OTU5OTEzMXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hotel Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Experience Comfort & Class
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Located in the heart of the city. Perfect for business and leisure
          travelers.
        </p>

        {/* Direct Booking Savings Banner */}
        <div className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-full mb-8 shadow-2xl animate-pulse">
          <p className="font-bold text-xl">
            💰 BOOK DIRECT & SAVE ₦9,000 PER NIGHT!
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <Coffee className="w-5 h-5 text-[#1e3a5f]" />
            <span className="font-semibold text-[#1e3a5f]">Free Breakfast</span>
          </div>
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <ParkingCircle className="w-5 h-5 text-[#1e3a5f]" />
            <span className="font-semibold text-[#1e3a5f]">Free Parking</span>
          </div>
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <XCircle className="w-5 h-5 text-[#1e3a5f]" />
            <span className="font-semibold text-[#1e3a5f]">
              Free Cancellation
            </span>
          </div>
        </div>

        {/* Booking Bar */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Check-in
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] pl-10"
                />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              <p className="text-xs text-gray-500 mt-1">From 14:00</p>
            </div>

            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Check-out
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] pl-10"
                />
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              <p className="text-xs text-gray-500 mt-1">Until 11:00</p>
            </div>

            <div className="flex items-end">
              <button
                onClick={handleCheckAvailability}
                className="w-full bg-[#d4af37] text-white font-bold py-3 px-6 rounded-md hover:bg-[#c19d2f] transition-all transform hover:scale-[1.02] shadow-md text-lg"
              >
                BOOK NOW - BEST RATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
