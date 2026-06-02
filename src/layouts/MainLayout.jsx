import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from '../components/navigation/Sidebar';
import Topbar from '../components/navigation/Topbar';
import { logout } from '../features/auth/authSlice';
import { useAppDispatch } from '../hooks/useAppState';

const titles = {
  '/': 'Super Admin Dashboard',
  '/gyms': 'Gym Management',
  '/subscriptions': 'Subscription Management',
  '/revenue': 'Revenue Dashboard',
  '/users': 'Platform Users',
  '/support': 'Support Center',
  '/analytics': 'Analytics',
  '/notifications': 'Notification Center',
  '/settings': 'Settings',
};

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-ink bg-grid bg-[size:42px_42px]">
      <div className="flex min-h-screen">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((prev) => !prev)} onLogout={handleLogout} />

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setMobileMenu(false)}
            >
              <motion.div
                initial={{ x: -32, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -32, opacity: 0 }}
                className="h-full w-72"
                onClick={(event) => event.stopPropagation()}
              >
                <Sidebar collapsed={false} onToggle={() => setMobileMenu(false)} onLogout={handleLogout} mobile />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-1 px-4 py-6 sm:px-6 xl:px-8">
          <Topbar title={titles[location.pathname] || 'GymSuper OS'} onMenuClick={() => setMobileMenu(true)} />
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
