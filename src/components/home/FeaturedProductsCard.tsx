import type { FC } from "react";
import { Product } from "../../types";

interface FeaturedProductsCardProps {
  products: Product[];
  title: string;
}

export const FeaturedProductsCard: FC<FeaturedProductsCardProps> = ({
  products,
  title,
}) => {
  const featured = products.slice(0, 4);

  return (
    <section className="mt-6 rounded-3xl bg-violet-300 p-4 shadow-sm sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        </div>
        <button
          type="button"
          className="inline-flex items-center rounded-full bg-black px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-slate-900"
        >
          Explore
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {featured.map((product) => (
          <div
            key={product._id}
            className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="h-40 overflow-hidden bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-2 p-4">
              <h4 className="text-sm font-semibold text-slate-500">
                {product.category}
              </h4>
              <p className="text-sm  text-slate-900">Min. 50% Off</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
