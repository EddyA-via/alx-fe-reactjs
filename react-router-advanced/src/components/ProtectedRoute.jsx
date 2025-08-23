import React from "react";
import { Navigate } from "react-router-dom";

/**
 * A wrapper for protected routes
 * @param {JSX.Element} children - The component to render if authenticated
 * @param {boolean} isAuthenticated - Authentication state
 */
export default function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    // Redirect unauthenticated users to login
    return <Navigate to="/login" replace />;
  }

  // Otherwise, render the protected component
  return children;
}
