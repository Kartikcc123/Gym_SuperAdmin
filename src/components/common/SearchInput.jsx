import { Search } from 'lucide-react';

const SearchInput = ({ value, onChange, placeholder = 'Search...' }) => (
  <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted">
    <Search size={16} />
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-transparent text-white outline-none placeholder:text-muted"
    />
  </label>
);

export default SearchInput;
