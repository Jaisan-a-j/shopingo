import { MenuSection } from "../types";

export const placeholders: string[] = [
  "laptops",
  "tv",
  "shoes",
  "watches",
  "mobiles",
];

export const menuSections: MenuSection[] = [
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
