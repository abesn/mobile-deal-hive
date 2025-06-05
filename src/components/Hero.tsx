
import { Search, Zap } from "lucide-react";

interface HeroProps {
  onDeepSearchClick: () => void;
}

export const Hero = ({ onDeepSearchClick }: HeroProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Buy & Sell Mobile Devices
            <span className="block text-3xl md:text-5xl text-blue-200 mt-2">
              With Trusted Members
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Connect with verified resellers and buyers. Find the best deals on phones, tablets, and accessories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
              <Search size={20} />
              <span>Browse Listings</span>
            </button>
            <button
              onClick={onDeepSearchClick}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <Zap size={20} />
              <span>AI Deep Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
