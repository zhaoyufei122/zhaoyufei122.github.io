# My Blog

click www.zhaoyufei.cn

## Appearance

The site opens in Academic mode for first-time visitors. The Academic / Personal
control switches the entire site while keeping the current route. Browser local
storage remembers the selected mode and the Personal mode's light/dark preference.
Switching continues to work when browser storage is disabled.

Both modes use `src/data.ts` for profile, publications, projects, and writing.
Academic mode lives in `src/components/AcademicLayout.tsx`, `src/pages/Academic.tsx`,
and `src/academic.css`. The existing personal pages are retained.

To change the default for visitors without a saved choice, update
`DEFAULT_SITE_MODE` in `src/sitePreferences.ts`. Set it to `personal` to make the
original design the default again. Existing visitors can use the appearance
control to change their saved selection.
