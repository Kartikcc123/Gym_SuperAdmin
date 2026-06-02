import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProtectedRoute from './ProtectedRoute';
import AnalyticsPage from '../pages/AnalyticsPage';
import DashboardPage from '../pages/DashboardPage';
import GymDetailsPage from '../pages/GymDetailsPage';
import GymsPage from '../pages/GymsPage';
import LoginPage from '../pages/LoginPage';
import NotificationsPage from '../pages/NotificationsPage';
import RevenuePage from '../pages/RevenuePage';
import SettingsPage from '../pages/SettingsPage';
import SubscriptionsPage from '../pages/SubscriptionsPage';
import SupportPage from '../pages/SupportPage';
import UsersPage from '../pages/UsersPage';

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={(
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          )}
        >
          <Route index element={<DashboardPage />} />
          <Route path="gyms" element={<GymsPage />} />
          <Route path="gyms/:gymId" element={<GymDetailsPage />} />
          <Route path="subscriptions" element={<SubscriptionsPage />} />
          <Route path="revenue" element={<RevenuePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
