import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Github, FolderGit2, Play } from 'lucide-react';

export default function Projects() {
  const categories = Array.from(new Set(personalInfo.githubProjects.map(p => p.category)));

  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 transition-colors">Projects & Repositories</h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl transition-colors">
          A curated list of my open-source projects, algorithms, robotic control systems, and web experiments.
        </p>

        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4 transition-colors">
              <FolderGit2 className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
              {category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalInfo.githubProjects
                .filter(project => project.category === category)
                .map((project, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col p-6 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 hover:border-emerald-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 transition-all group shadow-sm dark:shadow-none"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-3 shrink-0">
                        {project.demoUrl && (
                          <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors bg-emerald-500/10 px-2.5 py-1.5 rounded-md border border-emerald-500/20"
                            title="Play Demo / View Live"
                          >
                            <Play className="w-3 h-3 fill-emerald-500 dark:fill-emerald-400" /> PLAY
                          </a>
                        )}
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                          title="View Source on GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 flex-grow transition-colors">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.techStack.map(tech => (
                        <span 
                          key={tech} 
                          className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 text-xs font-mono border border-zinc-200 dark:border-zinc-700/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

      </motion.div>
    </div>
  );
}
