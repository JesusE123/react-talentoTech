import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {

  const { user } = useUser();

  if (!user) {
    return <Navigate to="/products" replace />;
  }

  return children;
};

export default ProtectedRoute;
