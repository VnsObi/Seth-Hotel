import { MapPin, Award, Plane } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

interface AboutSectionProps {
  onBookNow: () => void;
}

export function AboutSection({ onBookNow }: AboutSectionProps) {
  const handleBookNow = () => {
    onBookNow();
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
            About Seth Hotel
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1731080647266-85cf1bc27162?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN3aW1taW5nJTIwcG9vbCUyMGx1eHVyeXxlbnwxfHx8fDE3Njk1MzI1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Hotel Pool"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-start gap-3 mb-6 bg-[#f5f5f0] p-4 rounded-lg border-l-4 border-[#d4af37]">
              <Award className="w-6 h-6 text-[#d4af37] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">
                  Prime Location
                </h3>
                <p className="text-gray-700">
                  Seth Hotel is perfectly situated in Asaba, offering
                  convenient access to local attractions and business centers.
                </p>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Located at{" "}
              <span className="font-semibold">the heart of Asaba</span>,
              Seth Hotel combines modern comfort with traditional
              hospitality. Whether you're in the city for business or leisure,
              Seth Hotel offers the perfect blend of comfort and
              convenience.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Our range of world-class amenities ensures every guest enjoys a
              memorable stay at the best direct booking rates.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1e3a5f] text-white rounded-full mb-3">
                  🏊
                </div>
                <h4 className="font-semibold text-gray-900">Swimming Pool</h4>
                <p className="text-sm text-gray-600">Relax & unwind</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1e3a5f] text-white rounded-full mb-3">
                  🏋️
                </div>
                <h4 className="font-semibold text-gray-900">Fitness Center</h4>
                <p className="text-sm text-gray-600">Stay active</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1e3a5f] text-white rounded-full mb-3">
                  <Plane className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-gray-900">Airport Shuttle</h4>
                <p className="text-sm text-gray-600">Easy transfers</p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleBookNow}
              className="w-full bg-[#d4af37] text-white font-bold py-4 px-8 rounded-md hover:bg-[#c19d2f] transition-all transform hover:scale-[1.02] shadow-lg text-lg"
            >
              BOOK YOUR STAY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
