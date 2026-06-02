import { motion } from 'framer-motion';

const StatCard = ({ label, value, delta }) => (
  <motion.div
    whileHover={{ scale: 1.01, y: -4 }}
    transition={{ duration: 0.2 }}
    className="glass-panel rounded-3xl p-5 shadow-neon"
  >
    <p className="text-sm uppercase tracking-[0.24em] text-muted">{label}</p>
    <div className="mt-4 flex items-end justify-between gap-3">
      <h3 className="font-display text-3xl font-semibold text-white">{value}</h3>
      <div className="h-11 w-11 rounded-2xl border border-neon/25 bg-neon/10" />
    </div>
    <p className="mt-4 text-sm text-neon">{delta}</p>
  </motion.div>
);

export default StatCard;
