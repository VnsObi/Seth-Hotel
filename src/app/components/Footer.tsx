import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    alert('Booking form will be displayed here. Direct booking saves you money!');
  };

  return (
    <footer className="bg-[#1e3a5f] text-white">
      {/* Book Now Banner */}
      <div className="bg-gradient-to-r from-[#d4af37] to-[#c19d2f] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Seth Hotel?
          </h3>
          <p className="text-xl text-white/90 mb-6">
            Book directly and save up to ₦15,000 per night!
          </p>
          <button
            onClick={handleBookNow}
            className="bg-[#1e3a5f] text-white font-bold py-5 px-12 rounded-md hover:bg-[#152a45] transition-all transform hover:scale-105 shadow-xl text-xl"
          >
            BOOK NOW - BEST PRICE GUARANTEED
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-[#d4af37] mb-4">Seth Hotel</h3>
            <p className="text-white/80 mb-4">
              Experience comfort and class in the heart of Asaba. Your home away from home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-[#d4af37] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-[#d4af37] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('rooms')} className="text-white/80 hover:text-[#d4af37] transition-colors">
                  Rooms & Rates
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('amenities')} className="text-white/80 hover:text-[#d4af37] transition-colors">
                  Amenities
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('dining')} className="text-white/80 hover:text-[#d4af37] transition-colors">
                  Dining
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-[#d4af37] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-1" />
                <span className="text-white/80 text-sm">
                  No. 2 Anam Cresent, Oduke Road, Okwe, Asaba, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <a href="tel:08167904869" className="text-white/80 hover:text-[#d4af37] transition-colors">
                  0816 790 4869
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li>✓ Free Breakfast</li>
              <li>✓ Free Parking</li>
              <li>✓ Free Wi-Fi</li>
              <li>✓ Airport Shuttle</li>
              <li>✓ 24/7 Room Service</li>
              <li>✓ Royal Kitchen & Bar</li>
              <li>✓ Swimming Pool</li>
              <li>✓ Fitness Center</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2026 Seth Hotel, Asaba. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#d4af37] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}