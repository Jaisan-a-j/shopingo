import type { FC } from "react";
import { Product } from "../../types";
import { BannerSlider } from "./BannerSlider";
import { FeaturedProductsCard } from "./FeaturedProductsCard";

interface ProductListProps {
  products: Product[];
  selectedCategoryLabel: string;
}

export const ProductList: FC<ProductListProps> = ({
  products,
  selectedCategoryLabel,
}) => {
  return (
    <section className="bg-white px-4 pb-8 pt-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {selectedCategoryLabel}
            </h2>
            <p className="text-sm text-gray-500">
              Showing {products.length} product
              {products.length === 1 ? "" : "s"}
            </p>
          </div>
        </div>

        <BannerSlider autoplayInterval={5000} />

        <FeaturedProductsCard
          products={products}
          title="Best gadgets & appliances"
        />

        {products.length > 0 ? (
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mt-4 ">
            {products.map((product) => (
              <article
                key={product._id}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2 p-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                      {product.category}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      ${product.price}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Rating: {product.rating.toFixed(1)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-sm text-gray-500">
            No products are available for this category yet.
          </div>
        )}
      </div>
    </section>
  );
};
