
import { Star, MessageSquare, Video, MapPin } from "lucide-react";

interface Listing {
  id: number;
  type: "WTS" | "WTB";
  title: string;
  price: number;
  condition: string;
  location: string;
  image: string;
  seller: string;
  rating: number;
  quantity: number;
}

interface ListingCardProps {
  listing: Listing;
  onContact: () => void;
}

export const ListingCard = ({ listing, onContact }: ListingCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={listing.image}
          alt={listing.title}
          className="w-full h-48 object-cover"
        />
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${
          listing.type === "WTS" 
            ? "bg-green-500 text-white" 
            : "bg-purple-500 text-white"
        }`}>
          {listing.type}
        </div>
        <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
          Qty: {listing.quantity}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{listing.title}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-2xl font-bold text-green-600">${listing.price}</span>
          <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
            {listing.condition}
          </span>
        </div>
        
        <div className="flex items-center space-x-1 mb-2">
          <MapPin size={14} className="text-gray-400" />
          <span className="text-sm text-gray-600">{listing.location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900">{listing.seller}</span>
            <div className="flex items-center space-x-1">
              <Star className="text-yellow-400 fill-current" size={14} />
              <span className="text-sm text-gray-600">{listing.rating}</span>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button
            onClick={onContact}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
          >
            <MessageSquare size={16} />
            <span>Chat</span>
          </button>
          <button
            onClick={onContact}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
          >
            <Video size={16} />
            <span>Video</span>
          </button>
        </div>
      </div>
    </div>
  );
};
