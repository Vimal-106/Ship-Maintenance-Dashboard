// src/pages/DashboardPage.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';  // Import Navigate for redirection
import AuthContext from '../contexts/AuthContext';  // Import AuthContext to get the user role
import KPICards from '../components/Dashboard/KPICards';  // Import KPIs

const DashboardPage = () => {
  const { user } = useContext(AuthContext);  // Get the user from context

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" />;  // Use Navigate to redirect to login page
  }

  return (
    <div className="dashboard-page">
      <h1>Welcome, {user.role}!</h1> {/* Dynamic greeting based on role */}
      <h2>Your Dashboard</h2>
      <KPICards />  {/* Display KPIs like Total Jobs, Jobs in Progress, etc. */}
    </div>
  );
};

export default DashboardPage;
