import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { posts } from '../data';

export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-32 pb-16 px-6 max-w-3xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Post Not Found</h1>
        <Link to="/thoughts" className="text-emerald-500 hover:text-emerald-400">Return to Logs</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-6 max-w-3xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <Link 
          to="/thoughts" 
          className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Logs
        </Link>

        <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-zinc-200 dark:border-zinc-800 text-sm font-mono text-zinc-500">
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
          <span className="px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">{post.type}</span>
        </div>

        <div className="prose prose-zinc dark:prose-invert prose-emerald max-w-none font-sans leading-relaxed">
          <Markdown>{post.content}</Markdown>
        </div>
      </motion.div>
    </div>
  );
}
