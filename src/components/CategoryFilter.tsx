
const categories = [
  { id: "all", name: "All Categories", icon: "📱" },
  { id: "iphone", name: "iPhone", icon: "🍎" },
  { id: "samsung", name: "Samsung", icon: "📱" },
  { id: "android", name: "Android", icon: "🤖" },
  { id: "tablets", name: "Tablets", icon: "📱" },
  { id: "accessories", name: "Accessories", icon: "🔌" },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === category.id
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
