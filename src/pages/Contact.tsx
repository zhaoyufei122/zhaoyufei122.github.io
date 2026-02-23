import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Mail, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-zinc-100 mb-4 text-center">Establish Connection</h1>
        <p className="text-zinc-400 mb-12 text-center">
          Currently open for research opportunities and collaborations. Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a 
            href={`mailto:${personalInfo.emails.academic}`}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all group text-center"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
              <Mail className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400" />
            </div>
            <h3 className="text-zinc-100 font-semibold mb-1">Academic Email</h3>
            <p className="text-zinc-400 text-xs font-mono break-all">{personalInfo.emails.academic}</p>
          </a>

          <a 
            href={`mailto:${personalInfo.emails.personal}`}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all group text-center"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
              <Mail className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400" />
            </div>
            <h3 className="text-zinc-100 font-semibold mb-1">Personal Email</h3>
            <p className="text-zinc-400 text-xs font-mono break-all">{personalInfo.emails.personal}</p>
          </a>

          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all group text-center"
          >
            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
              <Github className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400" />
            </div>
            <h3 className="text-zinc-100 font-semibold mb-1">GitHub</h3>
            <p className="text-zinc-400 text-xs font-mono">@yourusername</p>
          </a>
        </div>

        <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50">
          <h2 className="text-xl font-bold text-zinc-100 mb-6 flex items-center gap-2">
            <Send className="w-5 h-5 text-emerald-400" />
            Send a Message
          </h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-zinc-500 uppercase">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-zinc-500 uppercase">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none"
                placeholder="Hello, I'd like to discuss..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Transmit Message
            </button>
          </form>
        </div>

      </motion.div>
    </div>
  );
}
