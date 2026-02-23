import { motion } from 'motion/react';
import { Github, BookOpen, Clock, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { posts } from '../data';

export default function Thoughts() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return Wrench;
      case 'Github': return Github;
      case 'BookOpen': return BookOpen;
      default: return BookOpen;
    }
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Logs & Thoughts</h1>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Technical articles, GitHub repository summaries, and personal reflections on engineering and robotics.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {posts.map((post) => {
            const Icon = getIcon(post.icon);
            return (
            <Link 
              key={post.id} 
              to={`/thoughts/${post.id}`}
              className="block group relative p-6 rounded-2xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 hover:bg-zinc-50 dark:hover:bg-zinc-900/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/30 transition-all cursor-pointer shadow-sm dark:shadow-none"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-mono">
                      <Icon className="w-3 h-3" />
                      {post.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h2>
                </div>
                <time className="font-mono text-sm text-zinc-500 shrink-0">{post.date}</time>
              </div>
              
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed font-mono text-sm">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-zinc-500 before:content-['#'] before:mr-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          )})}
        </div>
      </motion.div>
    </div>
  );
}
