import { Routes, Route, useLocation } from "react-router-dom";

import Login from "../components/login";
import App from "../App";
import ListCart from "../components/list-cart";
import ProtectedRoute from "./protected-route";
import Layout from "../components/layout";
import ProductDetail from "../components/product-detail";
import { AnimatePresence } from "framer-motion";
const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/*" element={<App />} />
          <Route path="/product/:id" element={<ProductDetail />} />
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
