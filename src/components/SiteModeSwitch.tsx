import { GraduationCap, PanelsTopLeft } from 'lucide-react';
import type { SiteMode } from '../sitePreferences';

export default function SiteModeSwitch({ mode, onChange }: {
  mode: SiteMode;
  onChange: (mode: SiteMode) => void;
}) {
  return (
    <div className="site-mode-switch" role="group" aria-label="Site appearance">
      {([
        { value: 'academic', label: 'Academic', icon: GraduationCap },
        { value: 'personal', label: 'Personal', icon: PanelsTopLeft },
      ] as const).map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          aria-pressed={mode === value}
          onClick={() => onChange(value)}
          title={`${label} appearance`}
        >
          <Icon size={15} aria-hidden="true" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
