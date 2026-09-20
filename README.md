# My Blog

click www.zhaoyufei.cn

## Appearance

Site appearance is controlled by the owner through `SITE_MODE` in
`src/sitePreferences.ts`. It is currently set to `academic`. There is no public
appearance switch, and any old browser-stored Academic / Personal choice is
ignored, so every visitor sees the configured appearance.

Both modes use `src/data.ts` for profile, publications, projects, and writing.
Academic mode lives in `src/components/AcademicLayout.tsx`, `src/pages/Academic.tsx`,
and `src/academic.css`. The existing personal pages are retained.

To restore the original personal design, set `SITE_MODE` to `personal`, rebuild,
and deploy. No page redesign or content migration is needed. Personal mode retains
its light/dark control and remembers that color preference in the browser.

## Publications and Projects

The Google Scholar profile is configured in `personalInfo.socials.googleScholar`.
Add papers to `personalInfo.publications`, newest first, using their published
author order and DOI link.

Projects are curated through `personalInfo.githubProjects`; GitHub repositories
are not imported automatically. Each entry can include a description, technology
stack, repository link, demonstration, images, video, and related repositories.
