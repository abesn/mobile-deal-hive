
import { useState } from "react";
import { Search, User, Menu, X } from "lucide-react";

interface NavbarProps {
  onAuthClick: () => void;
}

export const Navbar = ({ onAuthClick }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">MobileMarket</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Browse</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Sell</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Buy</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Help</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onAuthClick}
              className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <User size={18} />
              <span>Sign In</span>
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block py-2 text-gray-700">Browse</a>
            <a href="#" className="block py-2 text-gray-700">Sell</a>
            <a href="#" className="block py-2 text-gray-700">Buy</a>
            <a href="#" className="block py-2 text-gray-700">Help</a>
            <button
              onClick={onAuthClick}
              className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
