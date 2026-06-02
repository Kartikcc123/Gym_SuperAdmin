import { motion } from 'framer-motion';
import {
  BarChart3,
  Bell,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Settings,
  Shield,
  Ticket,
  Users,
  Wallet,
  Warehouse,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, to: '/' },
  { label: 'Gyms', icon: Warehouse, to: '/gyms' },
  { label: 'Subscriptions', icon: CreditCard, to: '/subscriptions' },
  { label: 'Revenue', icon: Wallet, to: '/revenue' },
  { label: 'Users', icon: Users, to: '/users' },
  { label: 'Support Tickets', icon: Ticket, to: '/support' },
  { label: 'Analytics', icon: BarChart3, to: '/analytics' },
  { label: 'Notifications', icon: Bell, to: '/notifications' },
  { label: 'Settings', icon: Settings, to: '/settings' },
];

const linkClasses = ({ isActive }) =>
  `group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
    isActive ? 'bg-neon text-black' : 'text-white/80 hover:bg-white/6 hover:text-white'
  }`;

const Sidebar = ({ collapsed, onToggle, onLogout, mobile = false }) => (
  <motion.aside
    animate={{ width: collapsed ? 96 : 288 }}
    transition={{ duration: 0.28, ease: 'easeInOut' }}
    className={`top-0 h-screen shrink-0 border-r border-white/10 bg-black/60 px-4 py-6 backdrop-blur-xl ${mobile ? 'block' : 'sticky hidden lg:block'}`}
  >
    <div className="flex h-full flex-col">
      <button
        type="button"
        onClick={onToggle}
        className="mb-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-left"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neon text-black">
          <Shield size={18} />
        </div>
        {!collapsed && (
          <div>
            <p className="font-display text-sm font-semibold">GymSuper OS</p>
            <p className="text-xs text-muted">Super Admin Control</p>
          </div>
        )}
      </button>

      <nav className="flex-1 space-y-2">
        {navItems.map(({ label, icon: Icon, to }) => (
          <NavLink key={label} to={to} end={to === '/'} className={linkClasses}>
            <Icon size={18} />
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>

      <button
        type="button"
        onClick={onLogout}
        className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition hover:border-red-400/30 hover:text-red-300"
      >
        <LogOut size={18} />
        {!collapsed && <span>Logout</span>}
      </button>
    </div>
  </motion.aside>
);

export default Sidebar;
