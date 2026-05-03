import { useState, type FC } from "react";
import { X } from "lucide-react";
import {
  type OrderFilters,
  type OrderStatus,
  type OrderTimeFilter,
} from "../../types";

interface OrderFilterModalProps {
  filters: OrderFilters;
  onClose: () => void;
  onApply: (filters: OrderFilters) => void;
  onClear: () => void;
}

interface FilterOption<TValue extends string> {
  label: string;
  value: TValue;
}

const statusOptions: FilterOption<OrderStatus>[] = [
  { label: "All", value: "all" },
  { label: "On the way", value: "on-the-way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

const timeOptions: FilterOption<OrderTimeFilter>[] = [
  { label: "Anytime", value: "anytime" },
  { label: "Last 30 days", value: "last-30-days" },
  { label: "Last 6 months", value: "last-6-months" },
  { label: "Last year", value: "last-year" },
];

const defaultFilters: OrderFilters = {
  status: "all",
  time: "anytime",
};

export const OrderFilterModal: FC<OrderFilterModalProps> = ({
  filters,
  onClose,
  onApply,
  onClear,
}) => {
  const [draftFilters, setDraftFilters] = useState<OrderFilters>(filters);

  const handleStatusChange = (status: OrderStatus): void => {
    setDraftFilters((currentFilters) => ({
      ...currentFilters,
      status,
    }));
  };

  const handleTimeChange = (time: OrderTimeFilter): void => {
    setDraftFilters((currentFilters) => ({
      ...currentFilters,
      time,
    }));
  };

  const handleClear = (): void => {
    setDraftFilters(defaultFilters);
    onClear();
  };

  const handleApply = (): void => {
    onApply(draftFilters);
  };

  return (
    <div className="fixed inset-0 z-[60] flex justify-center bg-black/45 px-5 py-14">
      <section
        className="w-full max-w-md self-start bg-white shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-filter-title"
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4">
          <h2 id="order-filter-title" className="text-xl font-medium text-gray-900">
            Filter Orders
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-gray-500 transition hover:text-gray-900"
            aria-label="Close filters"
          >
            <X size={22} />
          </button>
        </div>

        <div className="px-4 py-4">
          <fieldset>
            <legend className="mb-3 text-sm font-semibold text-gray-900">
              Status
            </legend>
            <div className="space-y-3">
              {statusOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <input
                    type="radio"
                    name="order-status"
                    value={option.value}
                    checked={draftFilters.status === option.value}
                    onChange={() => handleStatusChange(option.value)}
                    className="h-4 w-4 accent-blue-500"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="my-5 h-px bg-gray-200" />

          <fieldset>
            <legend className="mb-3 text-sm font-semibold text-gray-900">
              Time
            </legend>
            <div className="space-y-3">
              {timeOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <input
                    type="radio"
                    name="order-time"
                    value={option.value}
                    checked={draftFilters.time === option.value}
                    onChange={() => handleTimeChange(option.value)}
                    className="h-4 w-4 accent-blue-500"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="grid grid-cols-2 gap-4 px-4 pb-4 pt-1">
          <button
            type="button"
            onClick={handleClear}
            className="border border-gray-500 bg-white py-3 text-xs font-bold uppercase text-gray-900"
          >
            Clear Filters
          </button>
          <button
            type="button"
            onClick={handleApply}
            className="bg-[#212529] py-3 text-xs font-bold uppercase text-white"
          >
            Apply
          </button>
        </div>
      </section>
    </div>
  );
};
