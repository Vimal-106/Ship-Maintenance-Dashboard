// src/pages/DashboardPage.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import KPICards from '../components/Dashboard/KPICards';
import { Box, Typography } from '@mui/material';

const DashboardPage = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {user.role}!
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ color: 'gray' }}>
        Your Dashboard
      </Typography>
      <KPICards />
    </Box>
  );
};

export default DashboardPage;
