import {
  Wifi,
  Plane,
  ParkingCircle,
  Dumbbell,
  Waves,
  UtensilsCrossed,
  Shirt,
  Coffee,
} from "lucide-react";

const amenities = [
  {
    icon: Waves,
    title: "Swimming Pool",
    description: "Outdoor pool for relaxation",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "Modern gym equipment",
  },
  {
    icon: Wifi,
    title: "High-speed Wi-Fi",
    description: "Complimentary throughout hotel",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant & Bar",
    description: "Royal Kitchen - Open 24 hours",
  },
  {
    icon: Plane,
    title: "Airport Shuttle",
    description: "Convenient transportation",
  },
  {
    icon: ParkingCircle,
    title: "Free Parking",
    description: "Secure parking available",
  },
  {
    icon: Shirt,
    title: "Laundry Service",
    description: "Professional cleaning",
  },
  {
    icon: Coffee,
    title: "Free Breakfast",
    description: "Start your day right",
  },
];

interface AmenitiesSectionProps {
  onBookNow: () => void;
}

export function AmenitiesSection({ onBookNow }: AmenitiesSectionProps) {
  const handleBookNow = () => {
    onBookNow();
  };

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
            Amenities & Facilities
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need for a comfortable and memorable stay
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1e3a5f] text-white rounded-full mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm">{amenity.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] text-white p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-[#d4af37] mb-2">24/7</div>
              <p className="text-white/90">Front Desk Service</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#d4af37] mb-2">100%</div>
              <p className="text-white/90">Smoke-free Rooms</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#d4af37] mb-2">FREE</div>
              <p className="text-white/90">Breakfast & Parking</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-2xl text-gray-700 mb-6">
            Ready to experience luxury at the best rates?
          </p>
          <button
            onClick={handleBookNow}
            className="bg-[#d4af37] text-white font-bold py-5 px-12 rounded-md hover:bg-[#c19d2f] transition-all transform hover:scale-105 shadow-xl text-xl"
          >
            BOOK DIRECT & SAVE ₦15,000
          </button>
        </div>
      </div>
    </section>
  );
}
