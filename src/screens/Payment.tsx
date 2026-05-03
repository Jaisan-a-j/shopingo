import {
  useMemo,
  useState,
  type ChangeEvent,
  type FC,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  Banknote,
  CreditCard,
  Landmark,
  WalletCards,
} from "lucide-react";
import {
  type CartSummary,
  type PaymentFormData,
  type PaymentMethod,
  type PaypalAccountType,
} from "../types";

interface PaymentMethodOption {
  label: string;
  value: PaymentMethod;
  Icon: typeof Banknote;
}

const paymentMethods: PaymentMethodOption[] = [
  { label: "Cash On Delivery", value: "cash", Icon: WalletCards },
  { label: "Paypal", value: "paypal", Icon: Banknote },
  { label: "Credit/Debit Card", value: "card", Icon: CreditCard },
  { label: "Net Banking", value: "net-banking", Icon: Landmark },
];

const initialPaymentFormData: PaymentFormData = {
  card: {
    cardNumber: "",
    nameOnCard: "",
    validity: "",
    ccv: "",
  },
  bank: "",
  paypalAccountType: "domestic",
};

const bankOptions: string[] = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
];

const cartSummary: CartSummary = {
  bagTotal: 599,
  bagDiscount: 178,
  delivery: 29,
};

const formatPrice = (price: number): string => `$${price.toFixed(2)}`;

const Payment: FC = () => {
  const [selectedMethod, setSelectedMethod] =
    useState<PaymentMethod>("cash");
  const [paymentFormData, setPaymentFormData] = useState<PaymentFormData>(
    initialPaymentFormData,
  );

  const totalAmount = useMemo<number>(
    () =>
      cartSummary.bagTotal - cartSummary.bagDiscount + cartSummary.delivery,
    [],
  );

  const selectPaymentMethod = (method: PaymentMethod): void => {
    setSelectedMethod(method);
  };

  const handleCardInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    const { name, value } = event.target;

    setPaymentFormData((currentData) => ({
      ...currentData,
      card: {
        ...currentData.card,
        [name]: value,
      },
    }));
  };

  const handleBankChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setPaymentFormData((currentData) => ({
      ...currentData,
      bank: event.target.value,
    }));
  };

  const handlePaypalTypeChange = (accountType: PaypalAccountType): void => {
    setPaymentFormData((currentData) => ({
      ...currentData,
      paypalAccountType: accountType,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  const renderSelectedPaymentFields = (): ReactNode => {
    switch (selectedMethod) {
      case "cash":
        return (
          <div className="px-3 py-4">
            <p className="text-base leading-tight text-gray-900">
              I would like to pay after product delivery
            </p>
            <button
              type="submit"
              className="mt-4 w-full bg-[#212529] py-4 text-xs font-bold uppercase text-white"
            >
              Place Order
            </button>
          </div>
        );

      case "paypal":
        return (
          <div className="px-3 py-4">
            <p className="text-sm text-gray-600">
              Select your Paypal Account type
            </p>

            <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paypalAccountType"
                  checked={paymentFormData.paypalAccountType === "domestic"}
                  onChange={() => handlePaypalTypeChange("domestic")}
                  className="h-4 w-4 accent-blue-500"
                />
                Domestic
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paypalAccountType"
                  checked={
                    paymentFormData.paypalAccountType === "international"
                  }
                  onChange={() => handlePaypalTypeChange("international")}
                  className="h-4 w-4 accent-blue-500"
                />
                International
              </label>
            </div>

            <button
              type="button"
              className="mt-3 flex items-center gap-2 border border-gray-700 px-5 py-3 text-xs font-bold uppercase text-gray-900"
            >
              <Banknote size={14} />
              Login to My Paypal
            </button>

            <p className="mt-4 text-sm leading-snug text-gray-500">
              Note: After clicking on the button, you will be directed to a
              secure gateway for payment. After completing the payment process,
              you will be redirected back to the website to view details of your
              order.
            </p>

            <button
              type="submit"
              className="mt-4 w-full bg-[#212529] py-4 text-xs font-bold uppercase text-white"
            >
              Pay Now
            </button>
          </div>
        );

      case "card":
        return (
          <div className="space-y-3 px-3 py-4">
            <input
              type="text"
              name="cardNumber"
              value={paymentFormData.card.cardNumber}
              onChange={handleCardInputChange}
              placeholder="Card Number"
              className="w-full border border-gray-300 px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
            <input
              type="text"
              name="nameOnCard"
              value={paymentFormData.card.nameOnCard}
              onChange={handleCardInputChange}
              placeholder="Name on Card"
              className="w-full border border-gray-300 px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
            <input
              type="text"
              name="validity"
              value={paymentFormData.card.validity}
              onChange={handleCardInputChange}
              placeholder="Validity (MM/YY)"
              className="w-full border border-gray-300 px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
            <input
              type="text"
              name="ccv"
              value={paymentFormData.card.ccv}
              onChange={handleCardInputChange}
              placeholder="CCV"
              className="w-full border border-gray-300 px-3 py-4 text-sm text-gray-900 outline-none placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="w-full bg-[#212529] py-4 text-xs font-bold uppercase text-white"
            >
              Pay Now
            </button>
          </div>
        );

      case "net-banking":
        return (
          <div className="px-3 py-4">
            <label className="block text-sm text-gray-600">
              Select your Bank
              <select
                value={paymentFormData.bank}
                onChange={handleBankChange}
                className="mt-3 w-full border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 outline-none"
              >
                <option value="">--Please Select Your Bank--</option>
                {bankOptions.map((bank) => (
                  <option key={bank} value={bank}>
                    {bank}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="mt-3 w-full bg-[#212529] py-4 text-xs font-bold uppercase text-white"
            >
              Pay Now
            </button>

            <p className="mt-4 text-sm leading-snug text-gray-500">
              Note: After clicking on the button, you will be directed to a
              secure gateway for payment. After completing the payment process,
              you will be redirected back to the website to view details of your
              order.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 font-sans max-w-md mx-auto pb-20">
      <div className="border border-gray-200 px-3 py-3">
        <h1 className="text-lg font-medium text-gray-900">
          Select Payment Method
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-4 border border-gray-200 bg-white"
      >
        <div>
          {paymentMethods.map(({ label, value, Icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => selectPaymentMethod(value)}
              className={`flex w-full items-center gap-2 border-b border-gray-200 px-3 py-3 text-left text-sm text-gray-900 ${
                selectedMethod === value ? "bg-white" : "bg-gray-50"
              }`}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>

        {renderSelectedPaymentFields()}
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
      </section>
    </div>
  );
};

export default Payment;
