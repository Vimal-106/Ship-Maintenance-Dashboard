// src/components/NavigationBar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom for navigation
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'; // Material UI components
import AuthContext from '../contexts/AuthContext';  // Import AuthContext to check the user role
import './NavigationBar.css';  // Import the CSS file for additional styling

const NavigationBar = () => {
  const { user } = useContext(AuthContext);  // Get the current user from context

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#3f51b5' }}> {/* Material UI AppBar */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ship Maintenance Dashboard {/* Title of the dashboard */}
        </Typography>

        {/* Navigation Buttons */}
        <Box sx={{ display: 'flex' }}>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button> {/* Link to Dashboard */}
          <Button color="inherit" component={Link} to="/jobs">Job List</Button> {/* Link to Job List */}
          <Button color="inherit" component={Link} to="/calendar">Job Calendar</Button> {/* Link to Job Calendar */}
          
          {/* Admin Only Links */}
          {user?.role === 'Admin' && (
            <>
              <Button color="inherit" component={Link} to="/ships">Ship List</Button> {/* Link to Ship List */}
              <Button color="inherit" component={Link} to="/create-ship">Create Ship</Button> {/* Link to Create Ship */}
            </>
          )}

          {/* Inspector and Admin can create jobs */}
          {user?.role === 'Inspector' && (
            <Button color="inherit" component={Link} to="/create-job">Create Job</Button> 
          )}

          {/* Logout Link */}
          <Button color="inherit" component={Link} to="/login">Logout</Button> 
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
