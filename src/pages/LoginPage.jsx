import { motion } from 'framer-motion';
import { LockKeyhole, Mail } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MotionPage from '../components/common/MotionPage';
import { login } from '../features/auth/authSlice';
import { useAppDispatch } from '../hooks/useAppState';

const LoginPage = () => {
  const [form, setForm] = useState({ email: 'admin@gymsuper.io', password: '••••••••' });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ email: form.email }));
    navigate('/');
  };

  return (
    <MotionPage className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(66,255,0,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_22%)]" />
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/10 bg-black/70 shadow-[0_40px_140px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
      >
        <div className="grid min-h-[680px] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="hidden border-r border-white/10 p-10 lg:block">
            <p className="text-sm uppercase tracking-[0.28em] text-neon">Gym Management SaaS</p>
            <h1 className="mt-5 max-w-md font-display text-5xl font-semibold leading-tight">Run every gym, plan, payment, and operator from one premium command center.</h1>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {['Portfolio visibility', 'Subscription control', 'Revenue intelligence', 'Enterprise security'].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-4 h-12 w-12 rounded-2xl bg-neon/10" />
                  <p className="font-medium text-white">{item}</p>
                  <p className="mt-2 text-sm text-muted">Designed for multi-gym operators and fast-moving support teams.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="w-full">
              <p className="text-sm uppercase tracking-[0.28em] text-neon">Mock Authentication</p>
              <h2 className="mt-4 font-display text-3xl font-semibold">Super Admin Login</h2>
              <p className="mt-3 text-sm text-muted">Frontend-only access flow. This signs in against local mock state only.</p>

              <div className="mt-10 space-y-4">
                <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <Mail size={18} className="text-muted" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    className="w-full bg-transparent outline-none"
                    placeholder="Email"
                  />
                </label>
                <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <LockKeyhole size={18} className="text-muted" />
                  <input
                    type="password"
                    value={form.password}
                    onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
                    className="w-full bg-transparent outline-none"
                    placeholder="Password"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="submit" className="rounded-2xl bg-neon px-5 py-3 font-semibold text-black transition hover:brightness-110">
                  Login
                </button>
                <button type="button" className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/80 transition hover:bg-white/10">
                  Forgot Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </MotionPage>
  );
};

export default LoginPage;
