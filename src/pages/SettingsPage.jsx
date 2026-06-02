import MotionPage from '../components/common/MotionPage';
import SectionCard from '../components/common/SectionCard';
import { settingsSections } from '../constants/mockData';

const SettingsPage = () => (
  <MotionPage className="grid gap-6 xl:grid-cols-2">
    {settingsSections.map((section) => (
      <SectionCard key={section.title} title={section.title} subtitle="Frontend-only settings panel ready for real persistence later.">
        <div className="space-y-4">
          {section.fields.map((field) => (
            <label key={field} className="block rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
              <span className="mb-2 block text-sm text-muted">{field}</span>
              <input
                placeholder={`Enter ${field.toLowerCase()}`}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
              />
            </label>
          ))}
        </div>
      </SectionCard>
    ))}
  </MotionPage>
);

export default SettingsPage;
