import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Markdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import GithubSlugger from 'github-slugger';
import { ArrowLeft, Clock, Calendar, Loader2, List } from 'lucide-react';
import { posts } from '../data';

interface Heading {
  level: number;
  text: string;
  id: string;
}

export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    if (post?.contentUrl) {
      setLoading(true);
      // Ensure the URL starts with a slash
      const url = post.contentUrl.startsWith('/') ? post.contentUrl : `/${post.contentUrl}`;
      
      fetch(url)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch markdown');
          // Check if the server returned HTML (SPA fallback) instead of Markdown
          const contentType = res.headers.get('content-type');
          if (contentType && contentType.includes('text/html')) {
            throw new Error('Received HTML instead of Markdown (File not found)');
          }
          return res.text();
        })
        .then(text => {
          setContent(text);
          // Extract headings for TOC
          const slugger = new GithubSlugger();
          const extractedHeadings = Array.from(text.matchAll(/^(#{1,3})\s+(.+)$/gm)).map(match => {
            const headingText = match[2].trim();
            return {
              level: match[1].length,
              text: headingText,
              id: slugger.slug(headingText)
            };
          });
          setHeadings(extractedHeadings);
        })
        .catch(err => {
          console.error(err);
          const fileName = post.contentUrl.split('/').pop();
          setContent(`> **⚠️ 文章加载失败 (Load Error)**\n>\n> 无法找到对应的 Markdown 文件。请检查以下几点：\n>\n> 1. 确保你在本地项目的 \`public/posts/\` 文件夹下真实创建了 **\`${fileName}\`** 文件。\n> 2. 确保你已经把 \`public/posts/\` 文件夹和里面的文件 \`git push\` 到了 GitHub。\n> 3. 确保 \`data.ts\` 中的 \`contentUrl\` 路径拼写正确（例如：\`/posts/${fileName}\`）。`);
        })
        .finally(() => setLoading(false));
    }
  }, [post]);

  if (!post) {
    return (
      <div className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Post Not Found</h1>
        <Link to="/thoughts" className="text-emerald-500 hover:text-emerald-400">Return to Logs</Link>
      </div>
    );
  }

  const scrollToHeading = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    // Use getElementById to find the heading and scroll to it smoothly
    // This avoids changing the URL hash, which conflicts with HashRouter
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset to account for the fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-24 pb-16 px-6 max-w-[90rem] mx-auto flex justify-center">
      {/* Left Spacer to keep center column perfectly centered */}
      <div className="hidden xl:block flex-1" />

      {/* Main Content */}
      <motion.div 
        className="w-full max-w-4xl shrink-0"
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
          {loading ? (
            <div className="flex items-center justify-center py-20 text-zinc-400">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          ) : (
            <Markdown rehypePlugins={[rehypeSlug]}>{content}</Markdown>
          )}
        </div>
      </motion.div>

      {/* Table of Contents Sidebar */}
      {headings.length > 0 ? (
        <div className="hidden lg:block xl:flex-1 w-64 xl:w-auto shrink-0 pl-8 lg:pl-12">
          <div className="w-64 sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 custom-scrollbar">
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-4">
              <List className="w-4 h-4" />
              <span>目录 (Contents)</span>
            </div>
            <ul className="space-y-3 text-sm font-sans">
              {headings.map((h, index) => (
                <li key={`${h.id}-${index}`} style={{ paddingLeft: `${(h.level - 1) * 1}rem` }}>
                  <a 
                    href={`#${h.id}`} 
                    onClick={(e) => scrollToHeading(e, h.id)}
                    className="text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors line-clamp-2"
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="hidden xl:block flex-1" />
      )}
    </div>
  );
}

