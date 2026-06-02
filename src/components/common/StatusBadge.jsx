const toneMap = {
  Active: 'bg-neon/15 text-neon border-neon/25',
  Expired: 'bg-amber-400/10 text-amber-300 border-amber-300/20',
  Suspended: 'bg-red-500/10 text-red-300 border-red-300/20',
  Open: 'bg-neon/15 text-neon border-neon/25',
  Pending: 'bg-yellow-500/10 text-yellow-300 border-yellow-300/20',
  Closed: 'bg-white/10 text-white border-white/15',
  Upcoming: 'bg-sky-400/10 text-sky-300 border-sky-300/20',
  Paid: 'bg-neon/15 text-neon border-neon/25',
  Refunded: 'bg-red-500/10 text-red-300 border-red-300/20',
  Completed: 'bg-white/10 text-white border-white/15',
  Away: 'bg-yellow-500/10 text-yellow-300 border-yellow-300/20',
  Offline: 'bg-white/10 text-white border-white/15',
  Leave: 'bg-red-500/10 text-red-300 border-red-300/20',
};

const StatusBadge = ({ value }) => (
  <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${toneMap[value] || 'bg-white/10 text-white border-white/10'}`}>
    {value}
  </span>
);

export default StatusBadge;
