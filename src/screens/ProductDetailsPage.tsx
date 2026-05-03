import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../types";
import { ProductColorSlider } from "../components/home/ProductColorSlider";
import { ThumbsUp, ThumbsDown, Star } from "lucide-react";

const getStoredProducts = (): Product[] => {
  const stored = localStorage.getItem("shopingoProducts");
  if (!stored) return [];

  try {
    return JSON.parse(stored) as Product[];
  } catch {
    return [];
  }
};

const ProductDetailsPage = () => {
  const { productId } = useParams<{ productId: string }>();

  const product = useMemo(() => {
    if (!productId) return undefined;
    return getStoredProducts().find((item) => item._id === productId);
  }, [productId]);

  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  if (!product) {
    return (
      <div className="min-h-[70vh] bg-slate-50 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h1 className="text-xl font-semibold text-gray-900">
            Product not found
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            This product could not be found in your local store. Please return
            to the home page and try again.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const sliderImages = [
    product.image,
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  ];

  const goPrevious = () => {
    setActiveSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length,
    );
  };

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % sliderImages.length);
  };

  return (
    <div className="bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mb-4 flex items-center justify-between"></div>
      <div className="relative overflow-hidden rounded-[2rem] bg-gray-100">
        <img
          src={sliderImages[activeSlide]}
          alt={`${product.name} slide ${activeSlide + 1}`}
          className="h-[420px] w-full object-cover sm:h-[520px]"
        />

        <button
          type="button"
          onClick={goPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow transition hover:bg-white"
          aria-label="Previous image"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 shadow transition hover:bg-white"
          aria-label="Next image"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeSlide ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-5xl rounded-[2rem] bg-white py-6 px-3 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold text-slate-900">
          Check Pink Kurta
        </h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Women Pink & Off-White Printed Kurta with Palazzos
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-2 text-sm font-semibold text-amber-800">
            4.8 ★
          </span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
            162 Ratings
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-end gap-3">
          <p className="text-3xl font-semibold text-slate-900">$458</p>
          <p className="text-sm text-slate-500 line-through">$2089</p>
          <p className="text-sm font-semibold text-rose-600">(70% off)</p>
        </div>

        <p className="mt-3 text-sm font-medium text-emerald-700">
          inclusive of all taxes
        </p>
        <ProductColorSlider
          images={[
            product.image,
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80",
          ]}
        />

        <div className="mt-6">
          <div className="mb-4">
            <p className="text-sm font-semibold text-slate-900">Select Size</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  selectedSize === size
                    ? "border-black bg-black text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            className=" bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            ADD TO BAG
          </button>
          <button
            type="button"
            className=" border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
          >
            WISHLIST
          </button>
        </div>

        <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Product Details
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <p>
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet.
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
            </p>
            <p>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Customer Ratings
          </h2>
          <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-4xl font-semibold text-slate-900">4.8</p>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                  ★
                </span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                <span>Verified Buyers</span>
                <span className="text-slate-400">•</span>
                <span>3.8k</span>
              </div>
            </div>
            <div className="grid gap-3 text-sm sm:w-[320px]">
              {[
                { stars: 5, value: 1528, color: "bg-emerald-500" },
                { stars: 4, value: 253, color: "bg-emerald-500/80" },
                { stars: 3, value: 258, color: "bg-cyan-500/80" },
                { stars: 2, value: 78, color: "bg-amber-500/80" },
                { stars: 1, value: 27, color: "bg-rose-500/80" },
              ].map((item) => (
                <div key={item.stars} className="flex items-center gap-3">
                  <span className="w-10 text-right text-xs text-slate-500">
                    {item.stars} ★
                  </span>
                  <div className="flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{
                        width: `${Math.min(100, (item.value / 1600) * 100)}%`,
                      }}
                    />
                  </div>
                  <span className="w-11 text-right text-xs text-slate-500">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md border border-slate-300 bg-white rounded-md p-4 mt-4 shadow-sm rounded-lg font-sans">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Customer Reviews (875)
        </h2>

        <div className="flex items-center justify-center w-12 h-6 bg-emerald-500 text-white text-sm font-bold rounded px-1 mb-4">
          5 <Star size={14} fill="currentColor" className="ml-1" />
        </div>

        <p className="text-gray-500 leading-relaxed mb-4">
          This is some content from a media component. You can replace this with
          any content and adjust it as needed. Some quick example text to build
          on the card title and make.
        </p>

        <div className="mb-6">
          <img
            src={sliderImages[activeSlide]}
            alt="Review thumbnail"
            className="w-24 h-32 object-cover rounded-sm"
          />
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <span className="font-medium text-gray-700">Jhon Deo</span>
          <span className="mx-3 border-l border-gray-300 h-4"></span>
          <span>12 June 2020</span>
        </div>

        <div className="flex items-center gap-6 text-gray-500">
          <button className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
            <ThumbsUp size={18} />
            <span className="text-lg">68</span>
          </button>
          <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
            <ThumbsDown size={18} />
            <span className="text-lg">24</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
