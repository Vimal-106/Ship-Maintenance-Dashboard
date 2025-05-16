import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; 
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'; 
import AuthContext from '../contexts/AuthContext';  
import '../styles/NavigationBar.css';  

const NavigationBar = () => {
  const { user } = useContext(AuthContext);  

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#3f51b5' }}> 
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Ship Maintenance Dashboard 
        </Typography>

        <Box sx={{ display: 'flex' }}>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button> 
          <Button color="inherit" component={Link} to="/jobs">Job List</Button> 
          <Button color="inherit" component={Link} to="/calendar">Job Calendar</Button> 
          
          {user?.role === 'Admin' && (
            <>
              <Button color="inherit" component={Link} to="/ships">Ship List</Button> 
              <Button color="inherit" component={Link} to="/create-ship">Create Ship</Button> 
            </>
          )}

          {user?.role === 'Inspector' && (
            <Button color="inherit" component={Link} to="/create-job">Create Job</Button> 
          )}

          <Button color="inherit" component={Link} to="/login">Logout</Button> 
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
