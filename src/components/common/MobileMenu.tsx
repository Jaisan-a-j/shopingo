import { Home, LogOut, ShoppingBag, X } from "lucide-react";
import React from "react";
import ROUTES from "../../constants/routes";
import { menuSections } from "../../constants/menus";
import clsx from "clsx";
import { RedirectLink } from "./RedirectLink";
import { FocusTrap } from "focus-trap-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <FocusTrap active={isOpen}>
      <div
        className={clsx(
          "fixed inset-0 z-[70] md:hidden",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          className={clsx(
            "absolute inset-0 bg-black/45 transition-opacity duration-300 ease-out",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={onClose}
          aria-label="Close menu overlay"
        />

        <aside
          className={clsx(
            "relative flex h-full w-80  flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
            <RedirectLink
              to={ROUTES.HOME}
              onClick={onClose}
              className="flex items-center gap-2"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-blue-600 to-violet-600 text-white shadow-sm">
                <ShoppingBag className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <span className="text-[1.2rem] font-black leading-none tracking-normal text-[#12233f] [font-family:Arial,Helvetica,sans-serif]">
                SHOPINGO
              </span>
            </RedirectLink>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav
            className="flex-1 overflow-y-auto"
            aria-label="Mobile navigation"
          >
            <div className="px-6 py-6">
              <RedirectLink
                to={ROUTES.HOME}
                onClick={onClose}
                className="flex items-center gap-3 text-lg font-semibold text-gray-950"
              >
                <Home className="h-5 w-5" />
                Home
              </RedirectLink>
            </div>

            {menuSections.map((section, index) => (
              <section
                key={section.heading}
                className={clsx(
                  index === 0
                    ? "px-6 pb-8"
                    : "border-t-8 border-gray-200 px-6 py-8",
                )}
              >
                <h2 className="text-[1.2rem] font-bold text-gray-950">
                  {section.heading}
                </h2>

                <div className="mt-6 space-y-7">
                  {section.items.map((item) => (
                    <RedirectLink
                      key={item.label}
                      to={item.to}
                      onClick={onClose}
                      className="block text-lg font-normal leading-tight text-gray-950"
                    >
                      {item.label}
                    </RedirectLink>
                  ))}
                </div>
              </section>
            ))}

            <div className="border-t-8 border-gray-200 px-6 py-6">
              <RedirectLink
                to={ROUTES.HOME}
                onClick={onClose}
                className="flex items-center gap-3 text-lg font-semibold text-gray-950"
              >
                <LogOut className="h-5 w-5" />
                Logout
              </RedirectLink>
            </div>
          </nav>
        </aside>
      </div>
    </FocusTrap>
  );
};

export default React.memo(MobileMenu);
