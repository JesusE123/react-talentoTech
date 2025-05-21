import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../components/login";
import App from "../App";
import ListCart from "../components/list-cart";
import ProtectedRoute from "./protected-route";
import Layout from "../components/layout";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/*" element={<App />} />
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
    </Router>
  );
};

export default AppRouter;
