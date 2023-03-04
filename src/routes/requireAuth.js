import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  console.log("From reqAuth", location);
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};
