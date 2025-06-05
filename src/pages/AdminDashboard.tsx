
import { useState } from "react";
import { Users, MessageSquare, TrendingUp, Shield, Search, Settings } from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { title: "Total Members", value: "2,847", change: "+12%", icon: Users, color: "text-blue-500" },
    { title: "Active Listings", value: "1,234", change: "+8%", icon: MessageSquare, color: "text-green-500" },
    { title: "Monthly Deals", value: "456", change: "+23%", icon: TrendingUp, color: "text-purple-500" },
    { title: "Verification Rate", value: "94%", change: "+2%", icon: Shield, color: "text-orange-500" },
  ];

  const recentActivity = [
    { id: 1, user: "TechDealer_SF", action: "Created listing", item: "iPhone 15 Pro Max", time: "2 min ago" },
    { id: 2, user: "MobileCollector", action: "Completed deal", item: "Samsung Galaxy S24", time: "15 min ago" },
    { id: 3, user: "TabletKing", action: "Updated listing", item: "iPad Air M2", time: "1 hour ago" },
    { id: 4, user: "PhoneFlipPro", action: "Joined platform", item: "New member", time: "2 hours ago" },
  ];

  const flaggedListings = [
    { id: 1, title: "iPhone 15 Pro - Suspicious pricing", reporter: "SafeTrader", reason: "Price too low" },
    { id: 2, title: "Samsung S24 - Fake images", reporter: "VerifiedBuyer", reason: "Stock photos" },
    { id: 3, title: "iPad Pro - Duplicate listing", reporter: "System", reason: "Auto-detected" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your marketplace</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change}</p>
                  </div>
                  <stat.icon size={40} className={stat.color} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                    <div>
                      <p className="font-medium text-gray-900">{activity.user}</p>
                      <p className="text-sm text-gray-600">{activity.action}: {activity.item}</p>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Flagged Listings</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {flaggedListings.map((listing) => (
                  <div key={listing.id} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{listing.title}</h3>
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Flagged</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Reported by: {listing.reporter}</p>
                    <p className="text-sm text-red-600">{listing.reason}</p>
                    <div className="flex space-x-2 mt-3">
                      <button className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        Review
                      </button>
                      <button className="text-xs bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600">
                        Dismiss
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Member Management</h2>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search members..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex space-x-2">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
                  Export
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm">
                  Filter
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Listings</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                          TD
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">TechDealer_SF</div>
                          <div className="text-sm text-gray-500">techdealer@email.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Verified
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">23</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4.8 ⭐</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                      <button className="text-red-600 hover:text-red-900">Suspend</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                          MC
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">MobileCollector</div>
                          <div className="text-sm text-gray-500">collector@email.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">15</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4.6 ⭐</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">Verify</button>
                      <button className="text-red-600 hover:text-red-900">Reject</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
