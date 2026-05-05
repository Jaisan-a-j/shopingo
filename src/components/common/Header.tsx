import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  ShoppingBasket,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, type FC } from "react";
import { placeholders } from "../../constants/menus";
import ROUTES from "../../constants/routes";
import MobileMenu from "./MobileMenu";

const Header: FC = () => {
  const [currentPlaceholder, setCurrentPlaceholder] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const interval: number = setInterval(() => {
      setCurrentPlaceholder((prev: number) => (prev + 1) % placeholders.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const openMobileMenu = (): void => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />

      <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-6 lg:px-12 lg:py-5">
        <button
          type="button"
          onClick={openMobileMenu}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-100 md:hidden"
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link
          to={ROUTES.HOME}
          className="hidden items-center gap-3 md:flex"
          aria-label="Shopingo home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-blue-600 to-violet-600 text-white shadow-sm lg:h-12 lg:w-12">
            <ShoppingBag className="h-7 w-7 lg:h-8 lg:w-8" strokeWidth={2.4} />
          </span>
          <span className="text-[2.2rem] font-black leading-none tracking-normal text-[#12233f] [font-family:Arial,Helvetica,sans-serif] lg:text-[3rem]">
            SHOPINGO
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
          <Link
            to="/wishlist"
            className="inline-flex items-center gap-2  text-gray-800 transition hover:text-black"
            aria-label="Wishlist"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-gray-100 md:h-12 md:w-12">
              <Heart className="h-5 w-5" />
            </span>
            <span className="hidden text-base font-normal md:inline lg:text-lg">
              Wishlist
            </span>
          </Link>

          <Link
            to={ROUTES.CART}
            className="inline-flex items-center gap-2 text-gray-800 transition hover:text-black"
            aria-label="Cart"
          >
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-gray-100 md:h-12 md:w-12">
              <ShoppingBasket className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-semibold text-white md:h-6 md:min-w-6 md:text-xs">
                8
              </span>
            </span>
            <span className="hidden text-base font-normal md:inline lg:text-lg">
              Cart
            </span>
          </Link>

          <Link
            to={ROUTES.PROFILE}
            className="inline-flex items-center gap-2 text-gray-800 transition hover:text-black"
            aria-label="Profile"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:bg-gray-100 md:h-12 md:w-12">
              <User className="h-5 w-5" />
            </span>
            <span className="hidden items-center gap-2 text-base font-normal md:inline-flex lg:text-lg">
              Profile
              <ChevronDown className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>

      <div className=" border-gray-200 px-4 pb-3 pt-3 md:pt-0 md:pb-5">
        <div className="relative mx-auto max-w-xl rounded-full bg-white px-4 py-2.5 shadow-[0_2px_10px_rgba(37,99,235,0.45)] ring-2 ring-blue-500/70 md:py-3">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500 md:h-6 md:w-6" />
          <input
            type="search"
            placeholder={`Search for ${placeholders[currentPlaceholder]}...`}
            className="w-full rounded-full bg-transparent pl-11 pr-4 text-sm text-gray-700 placeholder:text-gray-500 focus:outline-none md:text-base"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
