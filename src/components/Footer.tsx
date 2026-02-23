import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 mt-24 py-8 text-center">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-zinc-500">
          © {new Date().getFullYear()} {personalInfo.name}. All systems operational.
        </p>
        <div className="flex items-center gap-4 text-xs font-mono text-zinc-600">
          <span>STATUS: <span className="text-emerald-500">ONLINE</span></span>
          <span>|</span>
          <span>LOCATION: BRISTOL, UK</span>
        </div>
      </div>
    </footer>
  );
}
