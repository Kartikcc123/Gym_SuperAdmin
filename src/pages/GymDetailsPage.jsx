import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import MotionPage from '../components/common/MotionPage';
import SectionCard from '../components/common/SectionCard';
import StatusBadge from '../components/common/StatusBadge';
import { useAppSelector } from '../hooks/useAppState';

const tabs = ['Overview', 'Members', 'Trainers', 'Orders', 'Subscription History'];

const GymDetailsPage = () => {
  const { gymId } = useParams();
  const [activeTab, setActiveTab] = useState('Overview');
  const gym = useAppSelector((state) => state.gyms.list.find((item) => item.id === gymId) || state.gyms.list[0]);
  const detailsMap = useAppSelector((state) => state.gyms.details);
  const details = useMemo(() => detailsMap[gym?.id] || detailsMap['gym-101'], [detailsMap, gym?.id]);

  const tabContent = {
    Overview: details.overview,
    Members: details.members,
    Trainers: details.trainers,
    Orders: details.orders,
    'Subscription History': details.subscriptionHistory,
  };

  return (
    <MotionPage className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <SectionCard title={gym.name} subtitle={details.about}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-muted">Owner</p>
              <p className="mt-2 font-medium text-white">{gym.owner}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-muted">Status</p>
              <div className="mt-2"><StatusBadge value={gym.status} /></div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-muted">Revenue Generated</p>
              <p className="mt-2 font-medium text-white">{details.revenueGenerated}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-muted">Location</p>
              <p className="mt-2 font-medium text-white">{gym.city}</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Subscription Details" subtitle="Mock data layer ready for later billing API integration.">
          <div className="space-y-4">
            {Object.entries(details.subscription).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <span className="text-sm capitalize text-muted">{key.replace(/([A-Z])/g, ' $1')}</span>
                <span className="font-medium text-white">{value}</span>
              </div>
            ))}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-muted">Members Count</p>
                <p className="mt-2 font-display text-2xl">{details.membersCount}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-sm text-muted">Trainers Count</p>
                <p className="mt-2 font-display text-2xl">{details.trainersCount}</p>
              </div>
            </div>
          </div>
        </SectionCard>
      </section>

      <SectionCard title="Operational Tabs" subtitle="Overview of the gym's full lifecycle data.">
        <div className="mb-5 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-2xl px-4 py-2 text-sm transition ${activeTab === tab ? 'bg-neon text-black' : 'border border-white/10 bg-white/5 text-white/80'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tabContent[activeTab].map((entry, index) => (
            <div key={`${activeTab}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              {Object.entries(entry).map(([key, value]) => (
                <div key={key} className="mb-3 last:mb-0">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">{key}</p>
                  <p className="mt-1 text-sm text-white">{typeof value === 'string' ? value : String(value)}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </SectionCard>
    </MotionPage>
  );
};

export default GymDetailsPage;
