// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";  // <-- ensure this is here

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();   // <-- ensure we’re using the hook

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
