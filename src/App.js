import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ShipsProvider } from './contexts/ShipsContext';
import { JobsProvider } from './contexts/JobsContext';
import LoginForm from './components/Authentication/LoginForm';
import DashboardPage from './pages/DashboardPage';
import ShipList from './components/Ships/ShipList';
import ShipForm from './components/Ships/ShipForm';
import ShipDetail from './components/Ships/ShipDetail';
import JobForm from './components/Jobs/JobForm';
import JobList from './components/Jobs/JobList';
import JobCalendar from './components/Jobs/JobCalendar';
import NotificationCenter from './components/Notifications/NotificationCenter';
import ProtectedRoute from './components/ProtectedRoute';
import NavigationBar from './components/NavigationBar';
import { useContext } from 'react';
import AuthContext from './contexts/AuthContext';

const AppContent = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {/* Only show NavigationBar and NotificationCenter when logged in and not on /login */}
      {user && !isLoginPage && (
        <>
          <NavigationBar />
          <NotificationCenter />
        </>
      )}

      <Routes>
        <Route path="/login" element={<LoginForm />} />
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
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

const App = () => (
  <ShipsProvider>
    <JobsProvider>
      <Router>
        <AppContent />
      </Router>
    </JobsProvider>
  </ShipsProvider>
);

export default App;
