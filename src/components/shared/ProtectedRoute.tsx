import { Navigate } from "react-router-dom";
import React from "react";

interface ProtectedRouteProps {
  element: React.ComponentType<unknown>; // Espera un componente JSX válido
  fallbackPath: string;
  isFreePeriodo?: boolean;
}

const ProtectedRoute = ({
  element: Element,
  fallbackPath,
}: ProtectedRouteProps) => {
  //   const { get } = usePeriodo();
  //   const { token } = useAuth();
  const token = "123";

  //importas y no hay periodo seleccionado

  if (!token) return <Navigate to={fallbackPath} replace />;

  return <Element />;
};

export default ProtectedRoute;
