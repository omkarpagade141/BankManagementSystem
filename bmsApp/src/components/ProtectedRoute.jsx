import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = sessionStorage.getItem("jwttoken");
  const role = sessionStorage.getItem("role");

  if (!token || !role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
