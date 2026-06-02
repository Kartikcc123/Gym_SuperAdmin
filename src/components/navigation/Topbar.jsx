import { Menu, Search, Sparkles } from 'lucide-react';

const Topbar = ({ title, onMenuClick }) => (
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
      <div className="flex items-center gap-3 rounded-2xl border border-neon/20 bg-neon/10 px-4 py-3 text-sm text-neon">
        <Sparkles size={16} />
        Backend-ready mock environment
      </div>
    </div>
  </div>
);

export default Topbar;
