import { Menu, Search, Heart, ShoppingBasket, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { placeholders } from "../../constants/searchPlaceholders";

const Header: React.FC = () => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState<number>(0);

  useEffect(() => {
    const interval: number = setInterval(() => {
      setCurrentPlaceholder((prev: number) => (prev + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [placeholders.length]);

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-5">
          <Link
            to="/wishlist"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </Link>
          <Link
            to="/cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100"
            aria-label="Cart"
          >
            <ShoppingBasket className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-semibold text-white">
              8
            </span>
          </Link>
          <Link
            to="/profile"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100"
            aria-label="Profile"
          >
            <User className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="mt-3">
        <div className="relative rounded-full bg-gray-100 px-4 py-2.5 shadow-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
          <input
            type="search"
            placeholder={`Search for ${placeholders[currentPlaceholder]}...`}
            className="w-full rounded-full bg-transparent pl-11 pr-4 text-sm text-gray-700 placeholder:text-gray-500 focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
