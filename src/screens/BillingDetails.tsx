import {
  useMemo,
  useState,
  type ChangeEvent,
  type FC,
  type FormEvent,
} from "react";
import { Link } from "react-router-dom";
import {
  type BillingDetails as BillingDetailsType,
  type CartSummary,
} from "../types";

const initialBillingDetails: BillingDetailsType = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNo: "",
  streetAddress: "",
  zipCode: "",
  city: "",
  country: "",
};

const cartSummary: CartSummary = {
  bagTotal: 599,
  bagDiscount: 178,
  delivery: 29,
};

const formatPrice = (price: number): string => `$${price.toFixed(2)}`;

const BillingDetails: FC = () => {
  const [formData, setFormData] = useState<BillingDetailsType>(
    initialBillingDetails,
  );

  const totalAmount = useMemo<number>(
    () =>
      cartSummary.bagTotal - cartSummary.bagDiscount + cartSummary.delivery,
    [],
  );

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white p-4 font-sans max-w-md mx-auto pb-20">
      <div className="border border-gray-200 px-3 py-3">
        <h1 className="text-lg font-medium text-gray-900">Billing Details</h1>
      </div>

      <form
        id="billing-details-form"
        onSubmit={handleSubmit}
        className="mt-4 space-y-4"
      >
        <section>
          <h2 className="bg-gray-50 px-3 py-2 text-sm font-medium text-gray-900">
            Personal Details
          </h2>

          <div className="mt-3 space-y-3 border border-gray-200 p-3">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="w-full border border-gray-300 px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="w-full border border-gray-300 px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full border border-gray-300 px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
            <input
              type="tel"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleInputChange}
              placeholder="Mobile No"
              className="w-full border border-gray-300 px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
          </div>
        </section>

        <section>
          <h2 className="bg-gray-50 px-3 py-2 text-sm font-medium text-gray-900">
            Shipping Details
          </h2>

          <div className="mt-3 space-y-3 border border-gray-200 p-3">
            <input
              type="text"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleInputChange}
              placeholder="Street Address"
              className="w-full border border-gray-300 px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              placeholder="Zip Code"
              className="w-full border border-gray-300 px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="w-full border border-gray-300 px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Country"
              className="w-full border border-gray-300 px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
          </div>
        </section>
      </form>

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
          to="/payment"
          className="flex w-full items-center justify-center bg-[#212529] py-4 text-xs font-bold uppercase text-white"
        >
          Place Order
        </Link>
      </section>
    </div>
  );
};

export default BillingDetails;
