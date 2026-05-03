import { useMemo, useState, type ChangeEvent, type FC } from "react";
import { Search, ListFilter, User, Star } from "lucide-react";
import { OrderFilterModal } from "../components/orders/OrderFilterModal";
import { type OrderFilters, type OrderHistoryItem } from "../types";

const orders: OrderHistoryItem[] = [
  {
    id: 1,
    title: "AKS - Checked Straight Kurta",
    description: "Women Pink & White Printed Straight Kurta",
    size: "XXL",
    qty: 2,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    rating: 3,
    status: "delivered",
    orderedAt: "2026-04-12",
  },
  {
    id: 2,
    title: "AKS - Checked Straight Kurta",
    description: "Women Pink & White Printed Straight Kurta",
    size: "XXL",
    qty: 2,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    rating: 3,
    status: "on-the-way",
    orderedAt: "2025-12-18",
  },
];

const totalStars = 5;
const defaultFilters: OrderFilters = {
  status: "all",
  time: "anytime",
};

const getTimeFilterStartDate = (timeFilter: OrderFilters["time"]): Date | null => {
  const today = new Date();

  switch (timeFilter) {
    case "last-30-days":
      return new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30);
    case "last-6-months":
      return new Date(today.getFullYear(), today.getMonth() - 6, today.getDate());
    case "last-year":
      return new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
    case "anytime":
      return null;
  }
};

const OrdersHistory: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<OrderFilters>(defaultFilters);

  const filteredOrders = useMemo<OrderHistoryItem[]>(() => {
    const query = searchQuery.trim().toLowerCase();
    const startDate = getTimeFilterStartDate(filters.time);

    return orders.filter((order) => {
      const matchesSearch =
        !query ||
        [order.title, order.description, order.size].some((value) =>
          value.toLowerCase().includes(query),
        );
      const matchesStatus =
        filters.status === "all" || order.status === filters.status;
      const matchesTime =
        !startDate || new Date(order.orderedAt).getTime() >= startDate.getTime();

      return matchesSearch && matchesStatus && matchesTime;
    });
  }, [filters, searchQuery]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(event.target.value);
  };

  const openFilterModal = (): void => {
    setIsFilterModalOpen(true);
  };

  const closeFilterModal = (): void => {
    setIsFilterModalOpen(false);
  };

  const applyFilters = (nextFilters: OrderFilters): void => {
    setFilters(nextFilters);
    closeFilterModal();
  };

  const clearFilters = (): void => {
    setFilters(defaultFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans max-w-md mx-auto">
      <div className="fixed left-[max(0px,calc((100vw-28rem)/2))] top-1/2 z-50 flex -translate-y-1/2 items-center gap-2 bg-[#212529] px-6 py-3 text-[10px] font-bold uppercase text-white shadow-md">
        <User size={12} />
        Account
      </div>

      <div className="bg-white border border-gray-200 p-6 mb-4 text-center">
        <h1 className="text-xl font-medium text-gray-800">All Orders</h1>
        <p className="text-gray-400 text-sm mb-4">for anytime</p>

        <div className="relative mb-4">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search Product..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full border border-gray-300 py-2 pl-10 pr-4 rounded-sm text-sm focus:outline-none focus:border-gray-500"
          />
        </div>

        <button
          type="button"
          onClick={openFilterModal}
          className="flex items-center justify-center gap-2 bg-[#212529] text-white px-6 py-2 mx-auto rounded-sm text-sm font-medium"
        >
          <ListFilter size={16} />
          Filter
        </button>
      </div>

      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="bg-white border border-gray-200 overflow-hidden relative"
          >
            <div className="p-4">
              <div className="flex gap-4">
                <div className="relative w-32 h-40 shrink-0">
                  <img
                    src={order.image}
                    alt={order.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-start">
                  <h2 className="text-lg font-bold text-gray-800 leading-tight mb-1">
                    {order.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-snug mb-4">
                    {order.description}
                  </p>

                  <div className="flex gap-2">
                    <span className="border border-gray-200 px-3 py-1 text-xs text-gray-600">
                      Size : {order.size}
                    </span>
                    <span className="border border-gray-200 px-3 py-1 text-xs text-gray-600">
                      Qty : {order.qty}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button className="w-full border-4 border-gray-200 bg-[#212529] text-white py-2 text-sm font-bold uppercase tracking-wider">
                  View Details
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 p-4 flex items-center justify-between">
              <span className="text-gray-500 text-sm">Rate this Product</span>
              <div className="flex gap-1">
                {Array.from({ length: totalStars }, (_, index) => {
                  const starNumber = index + 1;
                  const isActive = starNumber <= order.rating;

                  return (
                    <Star
                      key={starNumber}
                      size={18}
                      fill={isActive ? "#FFC107" : "none"}
                      stroke={isActive ? "#FFC107" : "currentColor"}
                      className={isActive ? undefined : "text-gray-300"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {isFilterModalOpen && (
        <OrderFilterModal
          filters={filters}
          onClose={closeFilterModal}
          onApply={applyFilters}
          onClear={clearFilters}
        />
      )}
    </div>
  );
};

export default OrdersHistory;
