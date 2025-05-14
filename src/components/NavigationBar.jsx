// src/components/NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom for navigation
import './NavigationBar.css';  // Import CSS for styling the navigation bar

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li> {/* Link to Dashboard */}
        <li><Link to="/ships">Ship List</Link></li> {/* Link to Ship List */}
        <li><Link to="/create-ship">Create Ship</Link></li> {/* Link to Create Ship */}
        <li><Link to="/jobs">Job List</Link></li> {/* Link to Job List */}
        <li><Link to="/calendar">Job Calendar</Link></li> {/* Link to Job Calendar */}
        <li><Link to="/login">Logout</Link></li> {/* Link to Logout or Login */}
      </ul>
    </nav>
  );
};

export default NavigationBar;
