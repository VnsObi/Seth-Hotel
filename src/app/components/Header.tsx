import { Phone, Menu } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onBookNow: () => void;
}

export function Header({ onBookNow }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleBookNow = () => {
    onBookNow();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#1e3a5f]">
              Vnsis Demo Hotel
            </h1>
            <span className="ml-2 text-sm text-gray-600">and Suites</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-[#1e3a5f] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[#1e3a5f] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("rooms")}
              className="text-gray-700 hover:text-[#1e3a5f] transition-colors"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection("amenities")}
              className="text-gray-700 hover:text-[#1e3a5f] transition-colors"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection("dining")}
              className="text-gray-700 hover:text-[#1e3a5f] transition-colors"
            >
              Dining
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-[#1e3a5f] transition-colors"
            >
              Contact
            </button>
            <button
              onClick={handleBookNow}
              className="bg-[#d4af37] text-white px-6 py-3 rounded-md hover:bg-[#c19d2f] transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              BOOK NOW
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-gray-700 hover:text-[#1e3a5f] transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-700 hover:text-[#1e3a5f] transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("rooms")}
              className="block w-full text-left text-gray-700 hover:text-[#1e3a5f] transition-colors py-2"
            >
              Rooms
            </button>
            <button
              onClick={() => scrollToSection("amenities")}
              className="block w-full text-left text-gray-700 hover:text-[#1e3a5f] transition-colors py-2"
            >
              Amenities
            </button>
            <button
              onClick={() => scrollToSection("dining")}
              className="block w-full text-left text-gray-700 hover:text-[#1e3a5f] transition-colors py-2"
            >
              Dining
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-700 hover:text-[#1e3a5f] transition-colors py-2"
            >
              Contact
            </button>
            <button
              onClick={handleBookNow}
              className="w-full bg-[#d4af37] text-white px-6 py-3 rounded-md hover:bg-[#c19d2f] transition-all font-bold text-lg shadow-lg"
            >
              BOOK NOW
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
