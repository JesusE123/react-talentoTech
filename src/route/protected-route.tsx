import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
