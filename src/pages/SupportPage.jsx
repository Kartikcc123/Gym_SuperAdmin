import { useState } from 'react';
import MotionPage from '../components/common/MotionPage';
import SectionCard from '../components/common/SectionCard';
import StatusBadge from '../components/common/StatusBadge';
import { useAppSelector } from '../hooks/useAppState';

const SupportPage = () => {
  const tickets = useAppSelector((state) => state.notifications.tickets);
  const [selected, setSelected] = useState(tickets[0]);

  return (
    <MotionPage className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <SectionCard title="Ticket List" subtitle="Support queue with status visibility and priority context.">
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <button
              key={ticket.id}
              type="button"
              onClick={() => setSelected(ticket)}
              className={`w-full rounded-2xl border p-4 text-left transition ${selected.id === ticket.id ? 'border-neon/25 bg-neon/10' : 'border-white/10 bg-white/[0.03]'}`}
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-medium text-white">{ticket.subject}</p>
                  <p className="mt-1 text-sm text-muted">{ticket.gym}</p>
                </div>
                <StatusBadge value={ticket.status} />
              </div>
              <div className="mt-3 flex items-center justify-between text-sm text-white/70">
                <span>{ticket.id}</span>
                <span>{ticket.updated}</span>
              </div>
            </button>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Ticket Details" subtitle="Mock support detail panel for backend-ready workflow wiring later.">
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-muted">Subject</p>
            <p className="mt-2 font-display text-2xl">{selected.subject}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-muted">Gym</p>
              <p className="mt-2 text-white">{selected.gym}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-muted">Priority</p>
              <p className="mt-2 text-white">{selected.priority}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-muted">Status</p>
              <div className="mt-2"><StatusBadge value={selected.status} /></div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-sm text-muted">Last Updated</p>
              <p className="mt-2 text-white">{selected.updated}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-muted">Resolution Notes</p>
            <p className="mt-3 text-sm leading-7 text-white/80">
              Payment and staff-access flows are currently mocked. This panel is structured so API-fed notes,
              message history, and status mutations can drop in later without changing the surrounding UI.
            </p>
          </div>
        </div>
      </SectionCard>
    </MotionPage>
  );
};

export default SupportPage;
