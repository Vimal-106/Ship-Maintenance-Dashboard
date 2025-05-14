// src/components/ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';  // Use Navigate for redirection
import AuthContext from '../contexts/AuthContext';  // Access the AuthContext

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useContext(AuthContext);  // Get the user from context

  // If the user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If no specific role is required (for public pages), allow access
  if (!requiredRole) {
    return children;
  }

  // If Admin, allow access to everything
  if (user.role === "Admin") {
    return children;
  }

  // If Inspector or Engineer, restrict access to Ship List and Create Ship
  if (
    (user.role === "Inspector" || user.role === "Engineer") &&
    (window.location.pathname === "/ships" || window.location.pathname === "/create-ship")
  ) {
    return <Navigate to="/dashboard" />;  // Redirect to Dashboard if they try to access restricted pages
  }

  // If user has the required role, allow access
  if (user.role === requiredRole) {
    return children;
  }

  // Redirect to the home page if role doesn't match
  return <Navigate to="/" />;
};

export default ProtectedRoute;
