import { MapPin, Phone, Mail, Navigation } from "lucide-react";

interface ContactSectionProps {
  onBookNow: () => void;
}

export function ContactSection({ onBookNow }: ContactSectionProps) {
  const handleBookNow = () => {
    onBookNow();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
            Location & Contact
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find us in the heart of the city. We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] mb-2">Address</h4>
                  <p className="text-gray-700">Seth Hotel and Suites</p>
                  <p className="text-gray-700">Asaba</p>
                  <p className="text-gray-700">Delta State, Nigeria</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1e3a5f] rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1e3a5f] mb-2">Phone</h4>
                  <a
                    href="tel:+2348031234567"
                    className="text-[#d4af37] hover:text-[#c19d2f] font-semibold text-lg transition-colors"
                  >
                    +234 803 123 4567
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Available 24/7</p>
                </div>
              </div>

              {/* Directions Button */}
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1e3a5f] text-white py-4 px-6 rounded-lg hover:bg-[#152a45] transition-colors font-semibold shadow-md hover:shadow-lg"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>

              {/* Book Now CTA */}
              <button
                onClick={handleBookNow}
                className="w-full flex items-center justify-center gap-2 bg-[#d4af37] text-white py-5 px-6 rounded-lg hover:bg-[#c19d2f] transition-all font-bold shadow-lg hover:shadow-xl text-lg transform hover:scale-105"
              >
                BOOK NOW - BEST RATES
              </button>
            </div>

            {/* Business Hours */}
            <div className="mt-8 bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] text-white p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span>📅</span>
                Front Desk Hours
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Check-in:</span>
                  <span className="font-semibold text-[#d4af37]">
                    14:00 (2:00 PM)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Check-out:</span>
                  <span className="font-semibold text-[#d4af37]">
                    11:00 (11:00 AM)
                  </span>
                </div>
                <div className="pt-2 border-t border-white/20">
                  <p className="text-sm text-white/90">
                    24-hour front desk service available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[600px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.1827662899144!2d6.7280284!3d6.1676123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMDMuNCJOIDbCsDQzJzQwLjkiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Location"
            ></iframe>
          </div>
        </div>

        {/* Neighborhood Info */}
        <div className="mt-12 bg-[#f5f5f0] p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4 text-center">
            Why Choose Our Location?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">🏢</div>
              <h4 className="font-bold text-[#1e3a5f] mb-2">
                Business District
              </h4>
              <p className="text-gray-600 text-sm">
                Close to major business centers in the city
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">🛍️</div>
              <h4 className="font-bold text-[#1e3a5f] mb-2">
                Shopping & Dining
              </h4>
              <p className="text-gray-600 text-sm">
                Convenient access to local attractions
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">✈️</div>
              <h4 className="font-bold text-[#1e3a5f] mb-2">Airport Access</h4>
              <p className="text-gray-600 text-sm">
                Easy transfers with our shuttle service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
