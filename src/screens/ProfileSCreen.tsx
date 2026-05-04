import { useState } from "react";
import {
  User,
  Package,
  Heart,
  Edit2,
  LogIn,
  RefreshCw,
  MapPin,
  Bookmark,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import ROUTES from "../constants/routes";

const ProfileScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 w-full max-w-sm">
          <LogIn className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Your Account
          </h2>
          <p className="text-gray-500 mb-6">Log in to get exclusive offers</p>
          <button
            onClick={() => setIsLoggedIn(true)}
            className="w-full bg-black text-white py-3 rounded font-medium hover:bg-gray-800 transition-colors"
          >
            LOGIN
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-4 font-sans max-w-md mx-auto pb-20 relative">
      <div className="border border-gray-200 p-4 mb-4">
        <h1 className="text-xl font-medium text-gray-800">
          Account - Dashboard
        </h1>
      </div>

      <div className="border border-gray-200 p-4 mb-6 flex items-center justify-between">
        <span className="text-gray-700 truncate mr-2">michel@example.com</span>
        <Link
          to={ROUTES.EDIT_PROFILE}
          className="flex items-center gap-2 border border-gray-800 px-4 py-2 text-sm font-bold uppercase tracking-wider whitespace-nowrap"
        >
          <Edit2 size={16} />
          Edit Profile
        </Link>
      </div>

      <div className="space-y-4 relative">
        <Link
          to={ROUTES.ORDERS_HISTORY}
          className="border border-gray-200 h-40 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <Package size={32} strokeWidth={1} className="text-gray-700" />
          <span className="text-gray-700 text-lg">Orders</span>
        </Link>

        <div className="border border-gray-200 h-40 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition-colors cursor-pointer">
          <Heart size={32} strokeWidth={1} className="text-gray-700" />
          <span className="text-gray-700 text-lg">Wishlist</span>
        </div>

        <div className="border border-gray-200 h-40 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition-colors cursor-pointer">
          <RefreshCw size={32} strokeWidth={1} className="text-gray-700" />
          <span className="text-gray-700 text-lg">Returns</span>
        </div>

        <div className="relative">
          <div className="fixed -left-4 top-[50vh] z-10 bg-[#212529] text-white px-4 py-2 flex items-center gap-2 text-xs font-bold uppercase shadow-md">
            <User size={14} />
            Account
          </div>

          <div className="border border-gray-200 h-40 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition-colors cursor-pointer">
            <MapPin size={32} strokeWidth={1} className="text-gray-700" />
            <span className="text-gray-700 text-lg">Addresses</span>
          </div>
        </div>

        <div className="border border-gray-200 h-40 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition-colors cursor-pointer">
          <Bookmark size={32} strokeWidth={1} className="text-gray-700" />
          <span className="text-gray-700 text-lg">Coupons</span>
        </div>

        <Link
          to="/profile/details"
          className="border border-gray-200 h-40 flex flex-col items-center justify-center gap-3 hover:bg-gray-50 transition-colors cursor-pointer"
        >
          <User size={32} strokeWidth={1} className="text-gray-700" />
          <span className="text-gray-700 text-lg">Profile Details</span>
        </Link>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#212529] text-white p-3 rounded-full shadow-xl hover:bg-black transition-all"
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>

      <button
        onClick={() => setIsLoggedIn(false)}
        className="mt-12 mb-10 text-red-500 text-sm font-medium w-full text-center underline block"
      >
        Sign Out
      </button>
    </div>
  );
};

export default ProfileScreen;
