export type SiteMode = 'academic' | 'personal';

// Owner-controlled appearance. Set to 'personal' and redeploy to restore that design.
export const SITE_MODE: SiteMode = 'academic';
export const PERSONAL_THEME_KEY = 'yufei-personal-theme';

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
    // Personal color preferences still work when browser storage is unavailable.
  }
}
