import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailsPage from "./screens/ProductDetailsPage";
import ProfileScreen from "./screens/ProfileSCreen";
import Header from "./components/common/Header";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfileScreen />} />
          </Route>
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
