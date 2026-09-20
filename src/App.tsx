import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Publications from './pages/Publications';
import Thoughts from './pages/Thoughts';
import Contact from './pages/Contact';
import Post from './pages/Post';
import AcademicLayout from './components/AcademicLayout';
import { AcademicHome, AcademicProjects, AcademicPublications, AcademicWriting, AcademicContact } from './pages/Academic';
import { readSiteMode, readPersonalDark, savePreference, SITE_MODE_KEY, PERSONAL_THEME_KEY } from './sitePreferences';
import type { SiteMode } from './sitePreferences';

export default function App() {
  const [mode, setMode] = useState(readSiteMode);
  const [isDark, setIsDark] = useState(readPersonalDark);
  const isAcademic = mode === 'academic';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', !isAcademic && isDark);
    document.documentElement.dataset.siteMode = mode;
    document.title = isAcademic ? 'ZHAO Yufei | Robotics Research' : 'ZHAO Yufei Blog';
  }, [isDark, isAcademic, mode]);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    savePreference(PERSONAL_THEME_KEY, next ? 'dark' : 'light');
  };

  const changeMode = (next: SiteMode) => {
    setMode(next);
    savePreference(SITE_MODE_KEY, next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const routes = (
    <Routes>
      <Route path="/" element={isAcademic ? <AcademicHome /> : <Home />} />
      <Route path="/projects" element={isAcademic ? <AcademicProjects /> : <Projects />} />
      <Route path="/publications" element={isAcademic ? <AcademicPublications /> : <Publications />} />
      <Route path="/thoughts" element={isAcademic ? <AcademicWriting /> : <Thoughts />} />
      <Route path="/thoughts/:id" element={<Post academic={isAcademic} />} />
      <Route path="/contact" element={isAcademic ? <AcademicContact /> : <Contact />} />
    </Routes>
  );

  return (
    <HashRouter>
      {isAcademic ? (
        <AcademicLayout onModeChange={changeMode}>{routes}</AcademicLayout>
      ) : (
        <div className="min-h-screen font-sans selection:bg-emerald-500/30 transition-colors duration-300">
          <Navbar isDark={isDark} toggleTheme={toggleTheme} onModeChange={changeMode} />
          <main>{routes}</main>
          <Footer />
        </div>
      )}
    </HashRouter>
  );
}
