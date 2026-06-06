import { useEffect } from 'react';
import MotionPage from '../components/common/MotionPage';
import SectionCard from '../components/common/SectionCard';
import StatCard from '../components/common/StatCard';
import LineChart from '../components/common/LineChart';
import BarChart from '../components/common/BarChart';
import { useAppSelector, useAppDispatch } from '../hooks/useAppState';
import { API_BASE_URL } from '../constants/config';
import { fetchDashboardStats } from '../features/dashboard/dashboardSlice';

const DashboardPage = () => {
  const dispatch = useAppDispatch();
  const { stats, revenueTrend, gymGrowthTrend, subscriptionGrowthTrend, loading, error } = useAppSelector((state) => state.dashboard);
  const backend = useAppSelector((state) => state.system.backend);

  useEffect(() => {
    dispatch(fetchDashboardStats());
  }, [dispatch]);

  return (
    <MotionPage className="space-y-6">
      <SectionCard title="Live Backend Connection" subtitle="Current real-time connection state from the deployed service.">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm text-muted">Base URL</p>
            <p className="mt-2 break-all text-sm text-white">{API_BASE_URL}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm text-muted">Backend Status</p>
            <p className="mt-2 font-display text-2xl capitalize text-neon">{backend.status}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm text-muted">Backend Timestamp</p>
            <p className="mt-2 text-sm text-white">{backend.timestamp || 'Waiting for live sync...'}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted">
          Live polling is active against the deployed backend. Business dashboards remain on fallback data until
          public gyms, users, subscriptions, revenue, and analytics endpoints are exposed by the API.
        </p>
      </SectionCard>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {loading && <div className="col-span-3 text-center text-muted">Loading live dashboard metrics...</div>}
        {error && <div className="col-span-3 text-center text-red-500">{error}</div>}
        {!loading && stats.map((item) => (
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
