// src/components/Authentication/LoginForm.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import AuthContext from '../../contexts/AuthContext';  // Import the AuthContext
import './LoginForm.css';  // Import CSS for styling

const LoginForm = () => {
  const { login } = useContext(AuthContext);  // Access login function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize navigate hook to redirect the user

  // Hardcoded users for testing purposes
  const users = [
    { id: '1', role: 'Admin', email: 'admin@entnt.in', password: 'admin123' },
    { id: '2', role: 'Inspector', email: 'inspector@entnt.in', password: 'inspect123' },
    { id: '3', role: 'Engineer', email: 'engineer@entnt.in', password: 'engine123' }
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      login(user);  // Update context with logged-in user
      setError('');
      navigate('/ships');  // Redirect to the Ship List page
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}  {/* Show error message if login fails */}
    </div>
  );
};

export default LoginForm;
