// src/components/Authentication/LoginForm.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import { TextField, Button, Container, Typography, Box, Grid, CircularProgress } from '@mui/material'; // Material UI components
import AuthContext from '../../contexts/AuthContext';  // Import AuthContext to manage login state
import './LoginForm.css'; // Import custom CSS for styling

const LoginForm = () => {
  const { login } = useContext(AuthContext);  // Get login function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // For loading state (e.g., while logging in)
  const navigate = useNavigate();  // For navigation after successful login

  // Hardcoded users for testing purposes
  const users = [
    { id: '1', role: 'Admin', email: 'admin@entnt.in', password: 'admin123' },
    { id: '2', role: 'Inspector', email: 'inspector@entnt.in', password: 'inspect123' },
    { id: '3', role: 'Engineer', email: 'engineer@entnt.in', password: 'engine123' }
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading state

    const user = users.find((u) => u.email === email && u.password === password);

    setLoading(false); // End loading state

    if (user) {
      login(user);  // Update context with logged-in user
      setError('');
      navigate('/dashboard');  // Redirect to the Dashboard page after login
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: 3,
          marginTop: '60px',
        }}
      >
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          ShipMate
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Email"
                type="email"
                fullWidth
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Password"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
            {error && (
              <Grid item xs={12}>
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={loading}
                sx={{
                  padding: '12px',
                  fontSize: '16px',
                  backgroundColor: '#3f51b5',
                  '&:hover': {
                    backgroundColor: '#303f9f',
                  },
                }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default LoginForm;
