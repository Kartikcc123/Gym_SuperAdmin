import { Menu, Search, Sparkles } from 'lucide-react';
import { useAppSelector } from '../../hooks/useAppState';

const statusTone = {
  active: 'border-neon/20 bg-neon/10 text-neon',
  checking: 'border-yellow-400/20 bg-yellow-400/10 text-yellow-300',
  offline: 'border-red-400/20 bg-red-400/10 text-red-300',
};

const Topbar = ({ title, onMenuClick }) => {
  const backend = useAppSelector((state) => state.system.backend);

  return (
    <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-start gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white lg:hidden"
        >
          <Menu size={18} />
        </button>
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-neon">Premium SaaS Control</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-white">{title}</h1>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
          <Search size={16} />
          <input className="bg-transparent text-white outline-none placeholder:text-muted" placeholder="Search dashboard..." />
        </label>
        <div className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${statusTone[backend.status] || statusTone.checking}`}>
          <Sparkles size={16} />
          Backend {backend.status === 'active' ? 'live' : backend.status}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
