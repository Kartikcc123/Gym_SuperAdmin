import { motion } from 'framer-motion';

const SectionCard = ({ title, subtitle, action, children, className = '' }) => (
  <motion.section
    whileHover={{ y: -3 }}
    transition={{ duration: 0.2 }}
    className={`glass-panel rounded-3xl p-5 shadow-neon ${className}`}
  >
    {(title || action) && (
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          {title && <h3 className="font-display text-lg font-semibold text-white">{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
        </div>
        {action}
      </div>
    )}
    {children}
  </motion.section>
);

export default SectionCard;
