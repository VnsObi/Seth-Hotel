import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Wifi, UtensilsCrossed, SmokeFree, Check } from "lucide-react";

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    price: "₦26,000",
    comparePrice: "₦35,000",
    savings: "₦9,000",
    image: "https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzY5NTk5MTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Free Wi-Fi", "Room Service", "Smoke-free", "Air Conditioning"]
  },
  {
    id: 2,
    name: "Deluxe Room",
    price: "₦35,000",
    comparePrice: "₦45,000",
    savings: "₦10,000",
    image: "https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzY5NTk5MTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Free Wi-Fi", "Room Service", "Smoke-free", "Mini Bar", "Premium Bedding"]
  },
  {
    id: 3,
    name: "Executive Suite",
    price: "₦50,000",
    comparePrice: "₦65,000",
    savings: "₦15,000",
    image: "https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzY5NTk5MTMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Free Wi-Fi", "Room Service", "Smoke-free", "Living Area", "Premium Amenities", "City View"]
  }
];

export function RoomsSection() {
  const handleBookNow = (roomName: string, price: string) => {
    alert(`Booking ${roomName} at ${price}/night. Direct booking - Best rate guaranteed!`);
  };

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Rooms & Rates</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience comfort and luxury in our well-appointed rooms. Book directly for the best rates!
          </p>
        </div>

        {/* Direct Booking Banner */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-6 px-8 rounded-lg mb-12 text-center shadow-xl">
          <p className="font-bold text-2xl mb-2">
            🎉 EXCLUSIVE DIRECT BOOKING RATES
          </p>
          <p className="text-lg">
            Save up to <span className="text-3xl font-bold">₦15,000</span> per night when you book direct!
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Room Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  Save {room.savings}
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-2">{room.name}</h3>
                
                {/* Pricing */}
                <div className="mb-4 bg-[#f5f5f0] p-4 rounded-lg">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-4xl font-bold text-green-600">{room.price}</span>
                    <span className="text-gray-500 line-through text-xl">{room.comparePrice}</span>
                  </div>
                  <p className="text-sm font-semibold text-[#1e3a5f]">per night - Direct Booking Rate 💰</p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => handleBookNow(room.name, room.price)}
                  className="w-full bg-[#d4af37] text-white py-4 rounded-md hover:bg-[#c19d2f] transition-all font-bold text-lg shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Check-in/out Info */}
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div>
              <h4 className="font-bold text-[#1e3a5f] text-lg mb-2">Check-in Time</h4>
              <p className="text-3xl font-bold text-[#d4af37]">14:00</p>
              <p className="text-gray-600 text-sm">Please arrive after 2:00 PM</p>
            </div>
            <div>
              <h4 className="font-bold text-[#1e3a5f] text-lg mb-2">Check-out Time</h4>
              <p className="text-3xl font-bold text-[#d4af37]">11:00</p>
              <p className="text-gray-600 text-sm">Please vacate by 11:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}