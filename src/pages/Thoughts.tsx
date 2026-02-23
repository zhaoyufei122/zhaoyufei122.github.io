import { motion } from 'motion/react';
import { Github, BookOpen, Clock, Wrench } from 'lucide-react';

export default function Thoughts() {
  const posts = [
    {
      id: 0,
      title: "System Log: How to Update This Website",
      excerpt: "To update this website, open the `src/data.ts` file. All personal information, projects, publications, and logs are stored there as JSON objects. For example, to add a new project, simply append a new object to the `githubProjects` array with `title`, `description`, `category`, `techStack`, `githubUrl`, and optionally `demoUrl`. The UI will automatically render the new data without needing to touch any React components. To deploy, run `npm run build` and push the `dist` folder to GitHub Pages.",
      date: new Date().toISOString().split('T')[0],
      readTime: "2 min read",
      tags: ["Tutorial", "Web", "Maintenance"],
      type: "System Guide",
      icon: Wrench
    },
    {
      id: 1,
      title: "Building a Custom STM32 Flight Controller from Scratch",
      excerpt: "A deep dive into the architecture, RTOS scheduling, and sensor fusion algorithms used in my latest quadcopter project.",
      date: "2025-10-15",
      readTime: "8 min read",
      tags: ["Embedded", "STM32", "Control Systems"],
      type: "Article",
      icon: BookOpen
    },
    {
      id: 2,
      title: "GitHub Repo Summary: Fuzzy Logic Controller Library",
      excerpt: "An overview of my open-source Python library for fuzzy logic control, originally developed during my bachelor thesis.",
      date: "2025-09-22",
      readTime: "5 min read",
      tags: ["Python", "AI", "Open Source"],
      type: "Repo",
      icon: Github
    }
  ];

  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-zinc-100 mb-4">Logs & Thoughts</h1>
            <p className="text-zinc-400 max-w-2xl">
              Technical articles, GitHub repository summaries, and personal reflections on engineering and robotics.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {posts.map((post) => {
            const Icon = post.icon;
            return (
            <article 
              key={post.id} 
              className="group relative p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/80 hover:border-emerald-500/30 transition-all cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-800 text-zinc-300 text-xs font-mono">
                      <Icon className="w-3 h-3" />
                      {post.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-500 text-xs font-mono">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h2>
                </div>
                <time className="font-mono text-sm text-zinc-500 shrink-0">{post.date}</time>
              </div>
              
              <p className="text-zinc-400 mb-6 leading-relaxed font-mono text-sm">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-zinc-500 before:content-['#'] before:mr-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          )})}
        </div>
      </motion.div>
    </div>
  );
}
