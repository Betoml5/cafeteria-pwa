import { Navigate } from "react-router-dom";
import React from "react";
import useAuth from "../../hooks/auth/useAuth";

interface ProtectedRouteProps {
  element: React.ComponentType<unknown>; // Espera un componente JSX válido
  fallbackPath: string;
  isFreePeriodo?: boolean;
}

const ProtectedRoute = ({
  element: Element,
  fallbackPath,
}: ProtectedRouteProps) => {
  const auth = useAuth();

  if (!auth) return <Navigate to={fallbackPath} replace />;

  return <Element />;
};

export default ProtectedRoute;
