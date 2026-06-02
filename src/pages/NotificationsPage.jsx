import { motion } from 'framer-motion';
import MotionPage from '../components/common/MotionPage';
import SectionCard from '../components/common/SectionCard';
import { useAppSelector } from '../hooks/useAppState';

const NotificationsPage = () => {
  const items = useAppSelector((state) => state.notifications.items);

  return (
    <MotionPage className="space-y-6">
      <SectionCard title="Alerts and Updates" subtitle="System notifications, subscription alerts, and payment anomalies.">
        <div className="grid gap-4 xl:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-neon">{item.type}</p>
              <h3 className="mt-4 font-display text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">{item.detail}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted">{item.time}</p>
            </motion.div>
          ))}
        </div>
      </SectionCard>
    </MotionPage>
  );
};

export default NotificationsPage;
