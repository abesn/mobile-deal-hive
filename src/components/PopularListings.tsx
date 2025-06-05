
import { Star, TrendingUp } from "lucide-react";

export const PopularListings = () => {
  const popularItems = [
    { name: "iPhone 15 Pro", trend: "+23%", deals: 156 },
    { name: "Samsung S24", trend: "+18%", deals: 89 },
    { name: "iPad Pro", trend: "+15%", deals: 67 },
    { name: "Pixel 8", trend: "+12%", deals: 45 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <TrendingUp className="text-green-500" size={24} />
        <h2 className="text-xl font-bold text-gray-900">Trending This Week</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {popularItems.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center space-x-1 mb-2">
              <Star className="text-yellow-400 fill-current" size={16} />
              <span className="text-sm text-green-600 font-semibold">{item.trend}</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.deals} active deals</p>
          </div>
        ))}
      </div>
    </div>
  );
};
