import BarChart from '../components/common/BarChart';
import LineChart from '../components/common/LineChart';
import MotionPage from '../components/common/MotionPage';
import SectionCard from '../components/common/SectionCard';
import StatCard from '../components/common/StatCard';
import { useAppSelector } from '../hooks/useAppState';

const RevenuePage = () => {
  const { summary } = useAppSelector((state) => state.revenue);

  return (
    <MotionPage className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Total Revenue" value={summary.total} delta="All-time processed value" />
        <StatCard label="Monthly Revenue" value={summary.monthly} delta="Current month accrual" />
        <StatCard label="Yearly Revenue" value={summary.yearly} delta="Annual recurring total" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <SectionCard title="Monthly Revenue" subtitle="Monthly billing trend across platform subscriptions.">
          <LineChart data={summary.monthlyRevenue} />
        </SectionCard>
        <SectionCard title="Subscription Revenue" subtitle="Revenue mix by subscription tier.">
          <BarChart data={summary.subscriptionRevenue} />
        </SectionCard>
      </section>

      <SectionCard title="Gym Revenue Ranking" subtitle="Top performing gyms by generated revenue.">
        <div className="space-y-4">
          {summary.gymRankings.map((item) => (
            <div key={item.rank} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neon/10 text-neon">#{item.rank}</div>
                <div>
                  <p className="font-medium text-white">{item.gym}</p>
                  <p className="text-sm text-muted">Revenue leader</p>
                </div>
              </div>
              <p className="font-display text-2xl">{item.revenue}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </MotionPage>
  );
};

export default RevenuePage;
