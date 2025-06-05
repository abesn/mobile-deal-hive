
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PopularListings } from "@/components/PopularListings";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SearchBar } from "@/components/SearchBar";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { AuthModal } from "@/components/AuthModal";
import { CreateListingModal } from "@/components/CreateListingModal";
import { ListingCard } from "@/components/ListingCard";
import { DeepSearchModal } from "@/components/DeepSearchModal";

const Index = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showCreateListing, setShowCreateListing] = useState(false);
  const [showDeepSearch, setShowDeepSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  // Mock data for demonstration
  const mockListings = [
    {
      id: 1,
      type: "WTS",
      title: "iPhone 15 Pro Max 256GB",
      price: 1199,
      condition: "Like New",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
      seller: "TechDealer_SF",
      rating: 4.8,
      quantity: 3
    },
    {
      id: 2,
      type: "WTB",
      title: "Samsung Galaxy S24 Ultra",
      price: 900,
      condition: "Good",
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=200&fit=crop",
      seller: "MobileCollector",
      rating: 4.6,
      quantity: 1
    },
    {
      id: 3,
      type: "WTS",
      title: "iPad Air M2 64GB",
      price: 450,
      condition: "Excellent",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop",
      seller: "TabletKing",
      rating: 4.9,
      quantity: 5
    }
  ];

  const filteredListings = mockListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || listing.type === activeTab;
    return matchesSearch && matchesTab;
  });

  const handleCreateListing = () => {
    setShowCreateListing(true);
  };

  const handleContactSeller = () => {
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onAuthClick={() => setShowAuthModal(true)} />
      
      <div className="pt-16">
        <Hero onDeepSearchClick={() => setShowDeepSearch(true)} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeTab === "all" ? "bg-blue-500 text-white" : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              All Listings
            </button>
            <button
              onClick={() => setActiveTab("WTS")}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeTab === "WTS" ? "bg-green-500 text-white" : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              For Sale (WTS)
            </button>
            <button
              onClick={() => setActiveTab("WTB")}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeTab === "WTB" ? "bg-purple-500 text-white" : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Wanted (WTB)
            </button>
          </div>

          <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          
          <PopularListings />
          
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Listings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  onContact={handleContactSeller}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <FloatingActionButton onClick={handleCreateListing} />
      
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      <CreateListingModal 
        isOpen={showCreateListing} 
        onClose={() => setShowCreateListing(false)}
        onAuthRequired={() => {
          setShowCreateListing(false);
          setShowAuthModal(true);
        }}
      />
      <DeepSearchModal isOpen={showDeepSearch} onClose={() => setShowDeepSearch(false)} />
    </div>
  );
};

export default Index;
