import MotionPage from '../components/common/MotionPage';
import SectionCard from '../components/common/SectionCard';
import StatusBadge from '../components/common/StatusBadge';
import { useAppSelector } from '../hooks/useAppState';

const UsersPage = () => {
  const users = useAppSelector((state) => state.notifications.users);

  return (
    <MotionPage className="space-y-6">
      <SectionCard title="Platform Users" subtitle="Internal team members and their current operating presence.">
        <div className="grid gap-4 lg:grid-cols-2">
          {users.map((user) => (
            <div key={user.id} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-display text-2xl">{user.name}</p>
                  <p className="mt-2 text-sm text-muted">{user.role}</p>
                </div>
                <StatusBadge value={user.status} />
              </div>
              <p className="mt-6 text-sm text-white/70">Last active: {user.lastSeen}</p>
            </div>
          ))}
        </div>
      </SectionCard>
    </MotionPage>
  );
};

export default UsersPage;
