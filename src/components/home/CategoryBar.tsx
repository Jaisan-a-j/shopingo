import { Home, Star, Shirt, Smartphone, Heart, Monitor } from "lucide-react";
import { CategoryItem } from "../../types";

const categories: CategoryItem[] = [
  { id: "for-you", label: "For You", Icon: Star },
  { id: "fashion", label: "Fashion", Icon: Shirt },
  { id: "mobiles", label: "Mobiles", Icon: Smartphone },
  { id: "beauty", label: "Beauty", Icon: Heart },
  { id: "electronics", label: "Electronics", Icon: Monitor },
  { id: "home", label: "Home", Icon: Home },
];

interface CategoryBarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryBar = ({
  activeCategory,
  onCategoryChange,
}: CategoryBarProps) => {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex gap-3 overflow-x-auto py-3 scrollbar-hide">
          {categories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => onCategoryChange(category.id)}
                className={`min-w-[90px] flex flex-col items-center rounded-3xl border px-3 py-3 text-center transition duration-200 ${
                  isActive
                    ? "border-blue-100 bg-blue-50 text-blue-600"
                    : "border-transparent bg-white text-gray-600 hover:border-gray-200 hover:bg-gray-50"
                }`}
              >
                <category.Icon className="h-5 w-5" />
                <span className="mt-2 text-xs font-medium leading-4">
                  {category.label}
                </span>
                <span
                  className={`mt-3 h-1 w-full rounded-full transition-colors duration-200 ${
                    isActive ? "bg-blue-500" : "bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
