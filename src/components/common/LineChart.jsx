import { motion } from 'framer-motion';

const LineChart = ({ data, color = '#42ff00', valueSuffix = 'K' }) => {
  const max = Math.max(...data.map((item) => item.value), 1);
  const points = data
    .map((item, index) => {
      const x = (index / Math.max(data.length - 1, 1)) * 100;
      const y = 100 - (item.value / max) * 80;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="chart-grid rounded-3xl border border-white/5 bg-white/[0.02] p-4">
      <svg viewBox="0 0 100 100" className="h-60 w-full overflow-visible">
        <defs>
          <linearGradient id="line-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.35" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.polyline
          fill="none"
          stroke={color}
          strokeWidth="2.4"
          points={points}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        />
        {data.map((item, index) => {
          const x = (index / Math.max(data.length - 1, 1)) * 100;
          const y = 100 - (item.value / max) * 80;
          return (
            <motion.g key={item.label} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.08 }}>
              <circle cx={x} cy={y} r="2.4" fill={color} />
              <text x={x} y="96" fill="#9cb39b" fontSize="4" textAnchor="middle">{item.label}</text>
              <text x={x} y={y - 5} fill="#ffffff" fontSize="4" textAnchor="middle">{item.value}{valueSuffix}</text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
};

export default LineChart;
