import BarChart from '../components/common/BarChart';
import LineChart from '../components/common/LineChart';
import MotionPage from '../components/common/MotionPage';
import SectionCard from '../components/common/SectionCard';
import StatCard from '../components/common/StatCard';
import { useAppSelector } from '../hooks/useAppState';

const AnalyticsPage = () => {
  const { analytics } = useAppSelector((state) => state.revenue);

  return (
    <MotionPage className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        {analytics.kpis.map((kpi) => (
          <StatCard key={kpi.label} label={kpi.label} value={kpi.value} delta={kpi.description} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <SectionCard title="User Growth" subtitle="Active platform seat growth.">
          <LineChart data={analytics.userGrowth} valueSuffix="K" />
        </SectionCard>
        <SectionCard title="Gym Growth" subtitle="Facility onboarding momentum.">
          <LineChart data={analytics.gymGrowth} valueSuffix="" />
        </SectionCard>
        <SectionCard title="Revenue Growth" subtitle="Recurring revenue performance.">
          <BarChart data={analytics.revenueGrowth} />
        </SectionCard>
      </section>

      <SectionCard title="Acquisition Table" subtitle="Top conversion channels based on mock commercial reporting.">
        <div className="grid gap-4 lg:grid-cols-3">
          {analytics.channels.map((channel) => (
            <div key={channel.source} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-muted">{channel.source}</p>
              <p className="mt-4 font-display text-3xl">{channel.conversions}</p>
              <p className="mt-2 text-sm text-neon">{channel.value}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </MotionPage>
  );
};

export default AnalyticsPage;
