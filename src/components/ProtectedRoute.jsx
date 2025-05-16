import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!requiredRole) {
    return children;
  }

  if (user.role === "Admin") {
    return children;
  }

  if (
    (user.role === "Inspector" || user.role === "Engineer") &&
    (window.location.pathname === "/ships" || window.location.pathname === "/create-ship")
  ) {
    return <Navigate to="/dashboard" />;
  }

  if (user.role === requiredRole) {
    return children;
  }

  return <Navigate to="/" />;
};

export default ProtectedRoute;
