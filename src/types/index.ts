import { type ElementType } from "react";

export interface CategoryItem {
  id: string;
  label: string;
  Icon: ElementType;
}

export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

export interface OrderHistoryItem {
  id: number;
  title: string;
  description: string;
  size: string;
  qty: number;
  image: string;
  rating: number;
  status: OrderStatus;
  orderedAt: string;
}

export type OrderStatus =
  | "all"
  | "on-the-way"
  | "delivered"
  | "cancelled"
  | "returned";

export type OrderTimeFilter = "anytime" | "last-30-days" | "last-6-months" | "last-year";

export interface OrderFilters {
  status: OrderStatus;
  time: OrderTimeFilter;
}
