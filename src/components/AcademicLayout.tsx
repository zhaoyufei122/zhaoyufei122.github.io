import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Github, GraduationCap, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data';
import SiteModeSwitch from './SiteModeSwitch';
import type { SiteMode } from '../sitePreferences';

export default function AcademicLayout({ children, onModeChange }: {
  children: ReactNode;
  onModeChange: (mode: SiteMode) => void;
}) {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      mainRef.current?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);

  return (
    <div className="academic-site">
      <a className="academic-skip" href="#academic-content" onClick={(event) => {
        event.preventDefault();
        mainRef.current?.focus();
        mainRef.current?.scrollIntoView();
      }}>Skip to content</a>
      <header className="academic-header">
        <div className="academic-header-inner">
          <Link className="academic-brand" to="/">{personalInfo.name}</Link>
          <nav className="academic-nav" aria-label="Main navigation">
            {[
              ['/', 'About'],
              ['/publications', 'Publications'],
              ['/projects', 'Projects'],
              ['/thoughts', 'Writing'],
              ['/contact', 'Contact'],
            ].map(([path, label]) => (
              <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>
            ))}
          </nav>
          <SiteModeSwitch mode="academic" onChange={onModeChange} />
        </div>
      </header>
      <div className="academic-layout">
        <aside className="academic-profile" aria-label="Profile">
          <Link to="/" className="academic-portrait-link" aria-label={`${personalInfo.name}, homepage`}>
            <img className="academic-portrait" src="/profile.jpg" alt={personalInfo.name} width="200" height="200" />
          </Link>
          <div className="academic-profile-info">
            <h2>{personalInfo.name}</h2>
            <p className="academic-profile-degree">{personalInfo.education[0].degree}</p>
            <p>{personalInfo.education[0].institution}</p>
            <p className="academic-profile-topics">Robotics, control &amp; intelligent systems</p>
            <ul className="academic-profile-links">
              <li><MapPin size={15} aria-hidden="true" /><span>{personalInfo.education[0].location}</span></li>
              <li><a href={`mailto:${personalInfo.emails.academic}`}><Mail size={15} aria-hidden="true" />Email</a></li>
              <li><a href={personalInfo.socials.github} target="_blank" rel="noreferrer"><Github size={15} aria-hidden="true" />GitHub</a></li>
              <li><Link to="/publications"><GraduationCap size={16} aria-hidden="true" />Publications</Link></li>
            </ul>
          </div>
        </aside>
        <main id="academic-content" className="academic-content" ref={mainRef} tabIndex={-1}>{children}</main>
      </div>
      <footer className="academic-footer">
        <span>&copy; {new Date().getFullYear()} {personalInfo.name}</span>
        <a href={`mailto:${personalInfo.emails.academic}`}>{personalInfo.emails.academic}</a>
      </footer>
    </div>
  );
}
