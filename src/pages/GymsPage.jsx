import { Eye, Pencil, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import ActionModal from '../components/common/ActionModal';
import { Link } from 'react-router-dom';
import MotionPage from '../components/common/MotionPage';
import SectionCard from '../components/common/SectionCard';
import DataTable from '../components/common/DataTable';
import SearchInput from '../components/common/SearchInput';
import StatusBadge from '../components/common/StatusBadge';
import { fetchGyms, fetchGymRequests, updateGymStatus, approveGymRequest, rejectGymRequest, setGymSearch, setGymStatusFilter } from '../features/gyms/gymSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useAppState';

const GymsPage = () => {
  const dispatch = useAppDispatch();
  const { list, requests, filters, loading, error } = useAppSelector((state) => state.gyms);
  const [deleteTarget, setDeleteTarget] = useState(null);
  
  useEffect(() => {
    dispatch(fetchGyms());
    dispatch(fetchGymRequests());
  }, [dispatch]);

  const filtered = list.filter((gym) => {
    const searchMatch = `${gym.name} ${gym.owner} ${gym?.subscriptionPlan?.name || 'none'}`.toLowerCase().includes(filters.search.toLowerCase());
    const statusMatch = filters.status === 'All' || gym.subscriptionStatus === filters.status.toLowerCase();
    return searchMatch && statusMatch;
  });

  const columns = [
    { key: 'name', label: 'Gym Name' },
    { key: 'subdomain', label: 'Subdomain' },
    { key: 'email', label: 'Email' },
    { key: 'subscriptionStatus', label: 'Status', render: (value) => <StatusBadge value={value} /> },
    { key: 'subscriptionExpiry', label: 'Expiry Date', render: (val) => val ? new Date(val).toLocaleDateString() : 'N/A' },
  ];

  const requestColumns = [
    { key: 'gymName', label: 'Gym Name' },
    { key: 'ownerName', label: 'Owner Name' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status', render: (value) => <StatusBadge value={value} /> },
  ];

  return (
    <MotionPage className="space-y-6">
      {requests.length > 0 && (
        <SectionCard title="Pending Applications" subtitle="New gym operators waiting for platform approval.">
          <DataTable
            columns={requestColumns}
            rows={requests}
            rowKey="_id"
            renderActions={(row) => (
              <div className="flex flex-wrap gap-2">
                <button type="button" onClick={() => dispatch(approveGymRequest(row._id))} className="rounded-xl border border-neon/20 bg-neon/10 px-3 py-2 text-xs text-neon">
                  Approve
                </button>
                <button type="button" onClick={() => dispatch(rejectGymRequest(row._id))} className="rounded-xl border border-red-400/20 px-3 py-2 text-xs text-red-300">
                  Reject
                </button>
              </div>
            )}
          />
        </SectionCard>
      )}

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

        {loading && <div className="py-10 text-center text-muted">Loading live gyms...</div>}
        {error && <div className="py-10 text-center text-red-500">{error}</div>}

        {!loading && !error && (
          <DataTable
            columns={columns}
            rows={filtered}
            rowKey="_id"
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
                  onClick={() => dispatch(updateGymStatus({ id: row._id, status: row.subscriptionStatus === 'active' ? 'suspended' : 'active' }))}
                  className="rounded-xl border border-neon/20 bg-neon/10 px-3 py-2 text-xs text-neon"
                >
                  {row.subscriptionStatus === 'active' ? 'Suspend' : 'Activate'}
                </button>
                <button type="button" onClick={() => setDeleteTarget(row)} className="rounded-xl border border-red-400/20 px-3 py-2 text-xs text-red-300">
                  <span className="inline-flex items-center gap-2"><Trash2 size={14} />Delete</span>
                </button>
              </div>
            )}
          />
        )}

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
