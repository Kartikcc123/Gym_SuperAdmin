import MotionPage from '../components/common/MotionPage';
import SectionCard from '../components/common/SectionCard';
import StatusBadge from '../components/common/StatusBadge';
import StatCard from '../components/common/StatCard';
import { useAppSelector } from '../hooks/useAppState';

const SubscriptionsPage = () => {
  const { plans, summary } = useAppSelector((state) => state.subscriptions);

  return (
    <MotionPage className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Active Plans" value={summary.activePlans} delta="Currently billing" />
        <StatCard label="Expired Plans" value={summary.expiredPlans} delta="Need follow-up" />
        <StatCard label="Upcoming Renewals" value={summary.upcomingRenewals} delta="Next 30 days" />
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        {plans.map((plan) => (
          <SectionCard key={plan.name} className={`bg-gradient-to-br ${plan.accent}`}>
            <p className="text-sm uppercase tracking-[0.28em] text-neon">{plan.name}</p>
            <h3 className="mt-4 font-display text-4xl font-semibold">{plan.price}</h3>
            <p className="mt-3 text-sm text-white/75">{plan.description}</p>
            <div className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm">
                  {feature}
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {['Upgrade', 'Downgrade', 'Extend', 'Suspend'].map((action) => (
                <button key={action} type="button" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10">
                  {action}
                </button>
              ))}
            </div>
          </SectionCard>
        ))}
      </section>

      <SectionCard title="Plan Activity" subtitle="Recent plan state changes and renewals.">
        <div className="space-y-4">
          {summary.records.map((item) => (
            <div key={item.gym} className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_auto] md:items-center">
              <div>
                <p className="font-medium text-white">{item.gym}</p>
                <p className="mt-1 text-sm text-muted">{item.plan} plan</p>
              </div>
              <span className="text-sm text-white/80">{item.renewal}</span>
              <span className="text-sm text-white/80">{item.value}</span>
              <StatusBadge value={item.status} />
              <div className="flex gap-2">
                <button type="button" className="rounded-xl border border-neon/20 bg-neon/10 px-3 py-2 text-xs text-neon">Extend</button>
                <button type="button" className="rounded-xl border border-white/10 px-3 py-2 text-xs text-white/80">Suspend</button>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </MotionPage>
  );
};

export default SubscriptionsPage;
