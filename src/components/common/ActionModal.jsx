import { AnimatePresence, motion } from 'framer-motion';

const ActionModal = ({ open, title, description, onClose, onConfirm }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 12 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-md rounded-[28px] border border-white/10 bg-soft p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
          onClick={(event) => event.stopPropagation()}
        >
          <h3 className="font-display text-2xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/75">{description}</p>
          <div className="mt-6 flex gap-3">
            <button type="button" onClick={onConfirm} className="rounded-2xl bg-neon px-4 py-3 font-semibold text-black">
              Confirm
            </button>
            <button type="button" onClick={onClose} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
              Cancel
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ActionModal;
