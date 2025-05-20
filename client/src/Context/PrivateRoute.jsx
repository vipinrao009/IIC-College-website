// PrivateRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const authData = localStorage.getItem("auth");
  const isAuthenticated = authData && JSON.parse(authData)?.token;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
