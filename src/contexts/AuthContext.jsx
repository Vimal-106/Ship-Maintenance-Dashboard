// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));  // Set the user from localStorage
    }
  }, []);

  const login = (user) => {
    setUser(user);  // Update the user state
    localStorage.setItem('user', JSON.stringify(user));  // Store user in localStorage
  };

  const logout = () => {
    setUser(null);  // Clear the user state
    localStorage.removeItem('user');  // Remove user from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
