import { useMemo, useState } from "react";
import { CategoryBar } from "../components/home/CategoryBar";
import { ProductList } from "../components/home/ProductList";
import { Product } from "../types";

const productData: Product[] = [
  {
    _id: "p1",
    name: "Classic Leather Watch",
    category: "fashion",
    price: 129,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "p2",
    name: "Smartphone XS",
    category: "mobiles",
    price: 899,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "p3",
    name: "Modern Sofa",
    category: "home",
    price: 549,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "p4",
    name: "Curved LED TV",
    category: "electronics",
    price: 1299,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "p5",
    name: "Running Shoes",
    category: "fashion",
    price: 79,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    _id: "p6",
    name: "Luxury Perfume",
    category: "beauty",
    price: 59,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80",
  },
];

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState<string>("for-you");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "for-you") {
      return productData;
    }
    return productData.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const selectedCategoryLabel = useMemo(() => {
    if (activeCategory === "for-you") return "For You";
    return activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1);
  }, [activeCategory]);

  return (
    <>
      <CategoryBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <ProductList
        products={filteredProducts}
        selectedCategoryLabel={selectedCategoryLabel}
      />
    </>
  );
};

export default HomeScreen;
