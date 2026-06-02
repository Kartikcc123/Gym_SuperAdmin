import { Eye, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import ActionModal from '../components/common/ActionModal';
import { Link } from 'react-router-dom';
import MotionPage from '../components/common/MotionPage';
import SectionCard from '../components/common/SectionCard';
import DataTable from '../components/common/DataTable';
import SearchInput from '../components/common/SearchInput';
import StatusBadge from '../components/common/StatusBadge';
import { setGymSearch, setGymStatusFilter, toggleGymStatus } from '../features/gyms/gymSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useAppState';

const GymsPage = () => {
  const dispatch = useAppDispatch();
  const { list, filters } = useAppSelector((state) => state.gyms);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const filtered = list.filter((gym) => {
    const searchMatch = `${gym.name} ${gym.owner} ${gym.plan}`.toLowerCase().includes(filters.search.toLowerCase());
    const statusMatch = filters.status === 'All' || gym.status === filters.status;
    return searchMatch && statusMatch;
  });

  const columns = [
    { key: 'name', label: 'Gym Name' },
    { key: 'owner', label: 'Owner Name' },
    { key: 'plan', label: 'Plan' },
    { key: 'status', label: 'Status', render: (value) => <StatusBadge value={value} /> },
    { key: 'expiryDate', label: 'Expiry Date' },
    { key: 'members', label: 'Members' },
    { key: 'trainers', label: 'Trainers' },
  ];

  return (
    <MotionPage className="space-y-6">
      <SectionCard title="Gym Portfolio" subtitle="Search, filter, and manage every subscribed gym from one control panel.">
        <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid gap-3 md:grid-cols-[1fr_180px]">
            <SearchInput
              value={filters.search}
              onChange={(event) => dispatch(setGymSearch(event.target.value))}
              placeholder="Search gyms, owners, plans..."
            />
            <select
              value={filters.status}
              onChange={(event) => dispatch(setGymStatusFilter(event.target.value))}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
            >
              {['All', 'Active', 'Expired', 'Suspended'].map((item) => (
                <option key={item} value={item} className="bg-soft">
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="text-sm text-muted">Showing {filtered.length} of {list.length} gyms</div>
        </div>

        <DataTable
          columns={columns}
          rows={filtered}
          rowKey="id"
          renderActions={(row) => (
            <div className="flex flex-wrap gap-2">
              <Link to={`/gyms/${row.id}`} className="rounded-xl border border-white/10 px-3 py-2 text-xs text-white/80 hover:bg-white/10">
                <span className="inline-flex items-center gap-2"><Eye size={14} />View</span>
              </Link>
              <button type="button" className="rounded-xl border border-white/10 px-3 py-2 text-xs text-white/80 hover:bg-white/10">
                <span className="inline-flex items-center gap-2"><Pencil size={14} />Edit</span>
              </button>
              <button
                type="button"
                onClick={() => dispatch(toggleGymStatus(row.id))}
                className="rounded-xl border border-neon/20 bg-neon/10 px-3 py-2 text-xs text-neon"
              >
                {row.status === 'Active' ? 'Suspend' : 'Activate'}
              </button>
              <button type="button" onClick={() => setDeleteTarget(row)} className="rounded-xl border border-red-400/20 px-3 py-2 text-xs text-red-300">
                <span className="inline-flex items-center gap-2"><Trash2 size={14} />Delete</span>
              </button>
            </div>
          )}
        />

        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted">
          <span>Pagination</span>
          <div className="flex gap-2">
            <button type="button" className="rounded-xl border border-white/10 px-3 py-2">Prev</button>
            <button type="button" className="rounded-xl bg-neon px-3 py-2 text-black">1</button>
            <button type="button" className="rounded-xl border border-white/10 px-3 py-2">2</button>
            <button type="button" className="rounded-xl border border-white/10 px-3 py-2">Next</button>
          </div>
        </div>
      </SectionCard>
      <ActionModal
        open={Boolean(deleteTarget)}
        title="Delete Gym Record"
        description={`This is a frontend-only confirmation for ${deleteTarget?.name || 'the selected gym'}. No backend deletion occurs yet.`}
        onClose={() => setDeleteTarget(null)}
        onConfirm={() => setDeleteTarget(null)}
      />
    </MotionPage>
  );
};

export default GymsPage;
