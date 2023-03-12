import React from "react";
import { Navigate } from "react-router";
import { useAppSelector } from "../hooks/hook";

type TProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: TProps) => {
  const isAuth = useAppSelector((state) => state.user.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
