import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { FileText, ExternalLink, Award } from 'lucide-react';

export default function Publications() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-zinc-100 mb-4">Publications & Patents</h1>
        <p className="text-zinc-400 mb-12 max-w-2xl">
          Academic research, published papers, and granted patents in the field of robotics, control, and signal processing.
        </p>

        {/* Publications Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center gap-3 border-b border-zinc-800 pb-4">
            <FileText className="w-6 h-6 text-emerald-400" />
            Academic Publications
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {personalInfo.publications.map((pub, index) => (
              <div key={index} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-semibold text-zinc-100 leading-tight">{pub.title}</h3>
                  {pub.link && (
                    <a href={pub.link} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-emerald-400 transition-colors shrink-0">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <p className="text-zinc-400 text-sm mb-3">{pub.authors}</p>
                <div className="flex items-center gap-3 font-mono text-xs">
                  <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {pub.year}
                  </span>
                  <span className="text-zinc-500">{pub.journal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patents Section */}
        <div>
          <h2 className="text-2xl font-bold text-zinc-100 mb-6 flex items-center gap-3 border-b border-zinc-800 pb-4">
            <Award className="w-6 h-6 text-emerald-400" />
            Granted Patents
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {personalInfo.patents.map((patent, index) => (
              <div key={index} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors">
                <h3 className="text-lg font-semibold text-zinc-100 leading-tight mb-2">{patent.title}</h3>
                <div className="flex flex-wrap items-center gap-4 font-mono text-xs mt-4">
                  <span className="text-emerald-400 font-bold">{patent.number}</span>
                  <span className="px-2 py-1 rounded bg-zinc-800 text-zinc-300">
                    {patent.role}
                  </span>
                  <span className="text-zinc-500">{patent.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </motion.div>
    </div>
  );
}
