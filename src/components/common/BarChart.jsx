import { motion } from 'framer-motion';

const BarChart = ({ data, color = 'bg-neon', height = 'h-60' }) => {
  const max = Math.max(...data.map((item) => item.value), 1);

  return (
    <div className={`chart-grid flex items-end gap-4 rounded-3xl border border-white/5 bg-white/[0.02] p-5 ${height}`}>
      {data.map((item, index) => (
        <div key={item.label} className="flex flex-1 flex-col items-center gap-3">
          <span className="text-xs text-white/70">{item.value}</span>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: `${(item.value / max) * 100}%` }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className={`w-full rounded-t-2xl ${color} shadow-[0_0_35px_rgba(66,255,0,0.25)]`}
          />
          <span className="text-xs uppercase tracking-[0.2em] text-muted">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
