import MotionPage from '../components/common/MotionPage';
import SectionCard from '../components/common/SectionCard';
import StatCard from '../components/common/StatCard';
import LineChart from '../components/common/LineChart';
import BarChart from '../components/common/BarChart';
import { useAppSelector } from '../hooks/useAppState';

const DashboardPage = () => {
  const { stats, revenueTrend, gymGrowthTrend, subscriptionGrowthTrend } = useAppSelector((state) => state.dashboard);

  return (
    <MotionPage className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.id} {...item} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <SectionCard title="Revenue Graph" subtitle="Recurring revenue trajectory across the latest operating window.">
          <LineChart data={revenueTrend} />
        </SectionCard>
        <SectionCard title="Subscription Growth Graph" subtitle="Current plan mix across the platform.">
          <BarChart data={subscriptionGrowthTrend} />
        </SectionCard>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="Gym Growth Graph" subtitle="Portfolio expansion from onboarding and upsell activity.">
          <LineChart data={gymGrowthTrend} valueSuffix="" />
        </SectionCard>
        <SectionCard title="Operator Highlights" subtitle="High-signal portfolio notes for today.">
          <div className="space-y-4">
            {[
              ['Renewals needing attention', '21 expired gyms need a retention push this week.'],
              ['Best-performing segment', 'Enterprise locations lead revenue growth at +31%.'],
              ['Support load', 'Open ticket volume is below weekly average by 14%.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-medium text-white">{title}</p>
                <p className="mt-2 text-sm text-muted">{text}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </section>
    </MotionPage>
  );
};

export default DashboardPage;
