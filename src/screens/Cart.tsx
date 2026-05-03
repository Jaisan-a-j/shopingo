import { useMemo, useState, type ChangeEvent, type FC } from "react";
import { Heart, X } from "lucide-react";
import { Link } from "react-router-dom";
import { type CartItem, type CartSummary } from "../types";

const cartItems: CartItem[] = [
  {
    id: 1,
    title: "AKS - Checked Straight Kurta",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
    size: "M",
    qty: 1,
    originalPrice: 458,
    currentPrice: 208,
    discountPercent: 70,
  },
  {
    id: 2,
    title: "AKS - Checked Straight Kurta",
    image:
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=600&q=80",
    size: "M",
    qty: 1,
    originalPrice: 458,
    currentPrice: 208,
    discountPercent: 70,
  },
];

const bagItemCount = 8;
const cartSummary: CartSummary = {
  bagTotal: 599,
  bagDiscount: 178,
  delivery: 29,
};

const formatPrice = (price: number): string => `$${price.toFixed(2)}`;

const Cart: FC = () => {
  const [couponCode, setCouponCode] = useState<string>("");

  const totalAmount = useMemo<number>(
    () =>
      cartSummary.bagTotal - cartSummary.bagDiscount + cartSummary.delivery,
    [],
  );

  const handleCouponChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setCouponCode(event.target.value);
  };

  const applyCoupon = (): void => {
    setCouponCode((currentCode) => currentCode.trim());
  };

  return (
    <div className="min-h-screen bg-white p-4 font-sans max-w-md mx-auto pb-20">
      <div className="mb-4 grid grid-cols-[1fr_8rem] border border-gray-200">
        <h1 className="px-3 py-2 text-lg font-medium leading-tight text-gray-900">
          My Bag ({bagItemCount} items)
        </h1>
        <Link
          to="/"
          className="m-2 flex items-center justify-center bg-gray-50 px-3 py-2 text-center text-xs font-bold uppercase leading-tight text-black"
        >
          Continue Shopping
        </Link>
      </div>

      <div className="space-y-3">
        {cartItems.map((item) => (
          <article
            key={item.id}
            className="border border-gray-200 bg-white px-3 py-3"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-32 w-24 object-cover"
            />

            <h2 className="mt-3 text-base font-medium text-gray-900">
              {item.title}
            </h2>

            <div className="mt-2 flex items-center gap-1.5 text-sm">
              <span className="font-semibold text-gray-900">
                {formatPrice(item.currentPrice)}
              </span>
              <span className="text-gray-400 line-through">
                {formatPrice(item.originalPrice)}
              </span>
              <span className="font-medium text-red-500">
                ({item.discountPercent}% off)
              </span>
            </div>

            <div className="mt-3 flex gap-2 text-xs text-gray-900">
              <span className="border border-gray-200 px-2 py-1">
                Size : {item.size}
              </span>
              <span className="border border-gray-200 px-2 py-1">
                Qty : {item.qty}
              </span>
            </div>

            <button
              type="button"
              className="mx-auto mt-4 flex items-center gap-1 text-xs font-medium uppercase text-gray-900"
            >
              <X size={14} />
              Remove
            </button>

            <button
              type="button"
              className="mx-auto mt-4 flex items-center gap-1 text-xs font-medium uppercase text-gray-900"
            >
              <Heart size={14} />
              Move to Wishlist
            </button>
          </article>
        ))}
      </div>

      <section className="mt-4 border border-gray-200 bg-white px-4 py-4">
        <h2 className="text-base font-medium text-gray-900">Order Summary</h2>

        <div className="mt-4 divide-y divide-gray-100 text-sm">
          <div className="flex items-center justify-between py-3">
            <span className="text-gray-500">Bag Total</span>
            <span className="text-gray-600">
              {formatPrice(cartSummary.bagTotal)}
            </span>
          </div>

          <div className="flex items-center justify-between py-3">
            <span className="text-gray-500">Bag discount</span>
            <span className="font-medium text-emerald-600">
              - {formatPrice(cartSummary.bagDiscount)}
            </span>
          </div>

          <div className="flex items-center justify-between py-3">
            <span className="text-gray-500">Delivery</span>
            <span className="text-gray-600">
              {formatPrice(cartSummary.delivery)}
            </span>
          </div>

          <div className="flex items-center justify-between py-4 font-semibold text-gray-900">
            <span>Total Amount</span>
            <span>{formatPrice(totalAmount)}</span>
          </div>
        </div>

        <Link
          to="/billing-details"
          className="flex w-full items-center justify-center bg-[#212529] py-4 text-xs font-bold uppercase text-white"
        >
          Place Order
        </Link>
      </section>

      <section className="mt-3 border border-gray-200 bg-white px-4 py-4">
        <h2 className="text-base font-medium text-gray-900">Apply Coupon</h2>

        <div className="mt-4 flex border border-gray-200">
          <input
            type="text"
            value={couponCode}
            onChange={handleCouponChange}
            placeholder="Enter coupon code"
            className="min-w-0 flex-1 px-3 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />
          <button
            type="button"
            onClick={applyCoupon}
            className="bg-[#212529] px-5 text-xs font-bold uppercase text-white"
          >
            Apply
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
