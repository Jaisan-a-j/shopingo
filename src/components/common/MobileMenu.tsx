import { Home, LogOut, ShoppingBag, X } from "lucide-react";
import { Link } from "react-router-dom";
import { type FC } from "react";
import ROUTES from "../../constants/routes";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  label: string;
  to: string;
}

interface MenuSection {
  heading: string;
  items: MenuItem[];
}

const menuSections: MenuSection[] = [
  {
    heading: "Trending",
    items: [
      { label: "Bestsellers", to: "/" },
      { label: "New Releases", to: "/" },
      { label: "Movers and Shakers", to: "/" },
    ],
  },
  {
    heading: "Top Categories for You",
    items: [
      { label: "Home & Kitchen", to: "/" },
      { label: "Health & Household Supplies", to: "/" },
      { label: "Beauty", to: "/" },
      { label: "Apparel", to: "/" },
      { label: "See All Categories", to: "/" },
    ],
  },
];

const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[70] md:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ease-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Close menu overlay"
      />

      <aside
        className={`relative flex h-full w-80  flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
          <Link
            to={ROUTES.HOME}
            onClick={onClose}
            className="flex items-center gap-2"
            aria-label="Shopingo home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-blue-600 to-violet-600 text-white shadow-sm">
              <ShoppingBag className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="text-[1.2rem] font-black leading-none tracking-normal text-[#12233f] [font-family:Arial,Helvetica,sans-serif]">
              SHOPINGO
            </span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
          <div className="px-6 py-6">
            <Link
              to={ROUTES.HOME}
              onClick={onClose}
              className="flex items-center gap-3 text-lg font-semibold text-gray-950"
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
          </div>

          {menuSections.map((section, index) => (
            <section
              key={section.heading}
              className={
                index === 0
                  ? "px-6 pb-8"
                  : "border-t-8 border-gray-200 px-6 py-8"
              }
            >
              <h2 className="text-[1.2rem] font-bold text-gray-950">
                {section.heading}
              </h2>

              <div className="mt-6 space-y-7">
                {section.items.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={onClose}
                    className="block text-lg font-normal leading-tight text-gray-950"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>
          ))}

          <div className="border-t-8 border-gray-200 px-6 py-6">
            <Link
              to={ROUTES.HOME}
              onClick={onClose}
              className="flex items-center gap-3 text-lg font-semibold text-gray-950"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Link>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default MobileMenu;
