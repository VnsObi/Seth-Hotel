import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Clock, Star, ChefHat, UtensilsCrossed } from "lucide-react";

export function DiningSection() {
  return (
    <section id="dining" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
            Dining Experience
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Savor exceptional cuisine at our on-site restaurant
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block bg-[#d4af37] text-white px-4 py-2 rounded-full mb-4">
              <span className="font-semibold">On-site Dining</span>
            </div>

            <h3 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              Royal Kitchen and Bar
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Experience authentic Nigerian cuisine and international favorites.
              Our talented chefs use the freshest ingredients to create
              memorable dining experiences for our guests.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] mb-1">
                    Open 24 Hours
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Enjoy delicious meals any time of day or night
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] mb-1">
                    Soup Kitchen
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Authentic local and traditional dishes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                  <UtensilsCrossed className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] mb-1">
                    Full Bar Service
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Wide selection of beverages and cocktails
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f5f5f0] p-6 rounded-lg border-l-4 border-[#d4af37]">
              <p className="text-gray-700">
                <span className="font-semibold text-[#1e3a5f]">
                  Room Service Available:
                </span>{" "}
                Enjoy our delicious menu from the comfort of your room
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmclMjBlbGVnYW50fGVufDF8fHx8MTc2OTQ5MjQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Royal Kitchen and Bar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
