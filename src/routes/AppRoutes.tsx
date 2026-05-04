import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/common/ProtectedRoute";
import ROUTES from "../constants/routes";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
const HomeScreen = React.lazy(() => import("../screens/HomeScreen"));
const NotFound = React.lazy(() => import("../components/common/NotFound"));
const ProductDetailsPage = React.lazy(
  () => import("../screens/ProductDetailsPage"),
);
const Cart = React.lazy(() => import("../screens/Cart"));
const Login = React.lazy(() => import("../screens/Login"));
const Registration = React.lazy(() => import("../screens/Registration"));
const ProfileScreen = React.lazy(() => import("../screens/ProfileScreen"));
const OrdersHistory = React.lazy(() => import("../screens/OrdersHistory"));
const ProfileDetails = React.lazy(() => import("../screens/ProfileDetails"));
const EditProfile = React.lazy(() => import("../screens/EditProfile"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Registration />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<HomeScreen />} />
        <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />
        <Route path={ROUTES.CART} element={<Cart />} />

        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.PROFILE} element={<ProfileScreen />} />
          <Route path={ROUTES.ORDERS_HISTORY} element={<OrdersHistory />} />
          <Route path={ROUTES.PROFILE} element={<ProfileDetails />} />
          <Route path={ROUTES.EDIT_PROFILE} element={<EditProfile />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
