// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShipsProvider } from './contexts/ShipsContext';  // Import ShipsProvider
import { JobsProvider } from './contexts/JobsContext';    // Import JobsProvider
import LoginForm from './components/Authentication/LoginForm';
import DashboardPage from './pages/DashboardPage';
import ShipList from './components/Ships/ShipList';
import ShipForm from './components/Ships/ShipForm';
import ShipDetail from './components/Ships/ShipDetail';
import JobForm from './components/Jobs/JobForm';
import JobList from './components/Jobs/JobList';
import JobCalendar from './components/Jobs/JobCalendar';
import NotificationCenter from './components/Notifications/NotificationCenter';
import ProtectedRoute from './components/ProtectedRoute';  // Import ProtectedRoute
import NavigationBar from './components/NavigationBar';    // Import NavigationBar

function App() {
  return (
    <ShipsProvider>
      <JobsProvider>
        <Router>
          <div>
            <NotificationCenter /> {/* Always show Notification Center */}
            <NavigationBar /> {/* Show the navigation bar */}
            <Routes>
              <Route path="/login" element={<LoginForm />} />

              {/* Protected Route for Admin */}
              <Route
                path="/ships"
                element={
                  <ProtectedRoute requiredRole="Admin">
                    <ShipList />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/create-ship"
                element={
                  <ProtectedRoute requiredRole="Admin">
                    <ShipForm />
                  </ProtectedRoute>
                }
              />

              <Route path="/ship/:shipId" element={<ShipDetail />} />

              <Route
                path="/create-job"
                element={
                  <ProtectedRoute requiredRole="Inspector">
                    <JobForm />
                  </ProtectedRoute>
                }
              />

              <Route path="/jobs" element={<JobList />} />

              <Route path="/calendar" element={<JobCalendar />} />

              {/* Allow both Admin and Inspector to access the Dashboard */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <DashboardPage />
                  </ProtectedRoute>
                }
              />

              {/* Everyone can access logout */}
              <Route path="/logout" element={<LoginForm />} />
            </Routes>
          </div>
        </Router>
      </JobsProvider>
    </ShipsProvider>
  );
}

export default App;
