import { Search, MapPin, ShoppingCart, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

const Header = ({ cartCount, onCartClick }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Arts & Crafts",
    "Automotive",
    "Baby",
    "Beauty & Personal Care",
    "Books",
    "Computers",
    "Electronics",
    "Fashion",
    "Health & Household",
    "Home & Kitchen",
    "Movies & TV",
    "Music",
    "Pet Supplies",
    "Sports & Outdoors",
    "Tools & Home Improvement",
    "Toys & Games",
    "Video Games",
  ];

  return (
    <header className="bg-amazon-dark text-secondary-foreground">
      {/* Main Header */}
      <div className="flex items-center px-2 py-2 gap-2">
        {/* Logo */}
        <div className="flex items-center px-2 py-1 border border-transparent hover:border-white rounded cursor-pointer min-w-[120px]">
          <span className="text-2xl font-bold text-white">
            amazon<span className="text-amazon-orange">.in</span>
          </span>
        </div>

        {/* Deliver To */}
        <div className="hidden md:flex items-center px-2 py-1 border border-transparent hover:border-white rounded cursor-pointer">
          <MapPin className="w-5 h-5 text-white" />
          <div className="ml-1">
            <p className="text-xs text-amazon-gray-dark">Deliver to</p>
            <p className="text-sm font-bold text-white">India</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex flex-1 h-10 rounded-md overflow-hidden">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="hidden md:block bg-amazon-gray text-amazon-dark text-sm px-2 border-r border-amazon-gray-dark rounded-l-md cursor-pointer hover:bg-gray-300"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Search Amazon.in"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-3 text-foreground outline-none focus:ring-2 focus:ring-amazon-orange"
          />
          <button className="bg-amazon-orange hover:bg-amazon-orange-hover px-4 rounded-r-md transition-colors">
            <Search className="w-5 h-5 text-amazon-dark" />
          </button>
        </div>

        {/* Language Selector */}
        <div className="hidden lg:flex items-center px-2 py-1 border border-transparent hover:border-white rounded cursor-pointer">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
            alt="IN"
            className="w-5 h-4"
          />
          <span className="ml-1 text-sm font-bold text-white">EN</span>
          <ChevronDown className="w-3 h-3 text-amazon-gray-dark ml-1" />
        </div>

        {/* Account */}
        <div className="hidden md:flex flex-col px-2 py-1 border border-transparent hover:border-white rounded cursor-pointer">
          <span className="text-xs text-amazon-gray-dark">Hello, sign in</span>
          <div className="flex items-center">
            <span className="text-sm font-bold text-white">Account & Lists</span>
            <ChevronDown className="w-3 h-3 text-amazon-gray-dark ml-1" />
          </div>
        </div>

        {/* Returns & Orders */}
        <div className="hidden md:flex flex-col px-2 py-1 border border-transparent hover:border-white rounded cursor-pointer">
          <span className="text-xs text-amazon-gray-dark">Returns</span>
          <span className="text-sm font-bold text-white">& Orders</span>
        </div>

        {/* Cart */}
        <div
          onClick={onCartClick}
          className="flex items-center px-2 py-1 border border-transparent hover:border-white rounded cursor-pointer relative"
        >
          <div className="relative">
            <ShoppingCart className="w-8 h-8 text-white" />
            <span className="absolute -top-1 right-0 bg-amazon-orange text-amazon-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </div>
          <span className="text-sm font-bold text-white ml-1">Cart</span>
        </div>
      </div>

      {/* Sub Header */}
      <div className="bg-amazon-light-dark flex items-center px-2 py-1 gap-1 overflow-x-auto">
        <div className="flex items-center px-2 py-1 border border-transparent hover:border-white rounded cursor-pointer whitespace-nowrap">
          <Menu className="w-5 h-5 text-white mr-1" />
          <span className="text-sm text-white font-bold">All</span>
        </div>
        {[
          "Fresh",
          "Amazon miniTV",
          "Sell",
          "Best Sellers",
          "Today's Deals",
          "Mobiles",
          "Electronics",
          "Home & Kitchen",
          "Customer Service",
          "Prime",
          "New Releases",
          "Fashion",
          "Amazon Pay",
        ].map((item) => (
          <div
            key={item}
            className="px-2 py-1 border border-transparent hover:border-white rounded cursor-pointer whitespace-nowrap"
          >
            <span className="text-sm text-white">{item}</span>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
