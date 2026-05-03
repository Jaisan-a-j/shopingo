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

export type OrderTimeFilter =
  | "anytime"
  | "last-30-days"
  | "last-6-months"
  | "last-year";

export interface OrderFilters {
  status: OrderStatus;
  time: OrderTimeFilter;
}

export interface ProfileDetails {
  fullName: string;
  phone: string;
  email: string;
  gender: ProfileGender;
  dob: string;
  location: string;
}

export type ProfileGender = "Male" | "Female";

export interface CartItem {
  id: number;
  title: string;
  image: string;
  size: string;
  qty: number;
  originalPrice: number;
  currentPrice: number;
  discountPercent: number;
}

export interface CartSummary {
  bagTotal: number;
  bagDiscount: number;
  delivery: number;
}

export interface BillingDetails {
  firstName: string;
  lastName: string;
  email: string;
  mobileNo: string;
  streetAddress: string;
  zipCode: string;
  city: string;
  country: string;
}

export type PaymentMethod = "cash" | "paypal" | "card" | "net-banking";

export type PaypalAccountType = "domestic" | "international";

export interface CardPaymentDetails {
  cardNumber: string;
  nameOnCard: string;
  validity: string;
  ccv: string;
}

export interface PaymentFormData {
  card: CardPaymentDetails;
  bank: string;
  paypalAccountType: PaypalAccountType;
}

export interface LoginFormData {
  identifier: string;
}

export interface RegistrationFormData {
  name: string;
  mobile: string;
  password: string;
  acceptedTerms: boolean;
}
