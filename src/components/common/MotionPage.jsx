import { motion } from 'framer-motion';

const MotionPage = ({ children, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.35, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

export default MotionPage;
