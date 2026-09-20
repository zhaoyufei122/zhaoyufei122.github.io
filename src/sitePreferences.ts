export type SiteMode = 'academic' | 'personal';

// Change this value to change the default for visitors without a saved preference.
export const DEFAULT_SITE_MODE: SiteMode = 'academic';
export const SITE_MODE_KEY = 'yufei-site-mode';
export const PERSONAL_THEME_KEY = 'yufei-personal-theme';

export function readSiteMode(): SiteMode {
  try {
    const saved = localStorage.getItem(SITE_MODE_KEY);
    return saved === 'academic' || saved === 'personal' ? saved : DEFAULT_SITE_MODE;
  } catch {
    return DEFAULT_SITE_MODE;
  }
}

export function readPersonalDark(): boolean {
  try {
    return localStorage.getItem(PERSONAL_THEME_KEY) !== 'light';
  } catch {
    return true;
  }
}

export function savePreference(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Switching still works when browser storage is unavailable.
  }
}
