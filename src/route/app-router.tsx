import { Routes, Route, useLocation } from "react-router-dom";


import App from "../App";
import ListCart from "../components/list-cart";
import ProtectedRoute from "./protected-route";
import Layout from "../components/layout";
import ProductDetail from "../components/product-detail";
import { AnimatePresence } from "framer-motion";
import HomePage from "../components/home-page";
import AdminPanel from "../components/admin-panel";
import NewProduct from "../components/new-product";
import EditFormProduct from "../components/edit-form-product";
const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/*" element={<HomePage />} />
          <Route path="/products" element={<App />} /> 
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/products/new" element={<NewProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/product/edit/:id" element={<EditFormProduct />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <ListCart />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
