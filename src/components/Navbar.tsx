import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Terminal, Bot, BookOpen, Github, Mail, FileText, Sun, Moon } from 'lucide-react';

export default function Navbar({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) {
  const location = useLocation();

  const links = [
    { path: '/', label: 'System.Home', icon: Terminal },
    { path: '/projects', label: 'Modules.Projects', icon: Bot },
    { path: '/publications', label: 'Docs.Publications', icon: FileText },
    { path: '/thoughts', label: 'Logs.Thoughts', icon: BookOpen },
    { path: '/contact', label: 'Comm.Contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/30 group-hover:border-emerald-500/60 transition-colors">
            <Bot className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <span className="font-mono font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight hidden sm:inline-block">
            ZHAO_YUFEI<span className="text-emerald-500 animate-pulse">_</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex items-center gap-2 text-sm font-mono transition-colors ${
                  isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-emerald-500 dark:bg-emerald-400"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4 md:gap-6 md:pl-6 md:border-l border-zinc-200 dark:border-zinc-800 transition-colors">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            title="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <Link
            to="/contact"
            className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors md:hidden"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
