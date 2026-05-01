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
