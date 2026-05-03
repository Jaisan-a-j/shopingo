import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailsPage from "./screens/ProductDetailsPage";
import ProfileScreen from "./screens/ProfileSCreen";
import Header from "./components/common/Header";
import OrdersHistory from "./screens/OrdersHistory";
import ProfileDetails from "./screens/ProfileDetails";
import EditProfile from "./screens/EditProfile";
import Cart from "./screens/Cart";
import BillingDetails from "./screens/BillingDetails";
import Payment from "./screens/Payment";
import Login from "./screens/Login";
import Registration from "./screens/Registration";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/billing-details" element={<BillingDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/profile/orders" element={<OrdersHistory />} />
            <Route path="/profile/details" element={<ProfileDetails />} />
            <Route path="/profile/edit" element={<EditProfile />} />
          </Route>
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
