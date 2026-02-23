import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { ChevronRight, Code2, Cpu, Wrench, Database, CircuitBoard, Briefcase, GraduationCap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for Research & Opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-6 transition-colors">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500 dark:from-emerald-400 dark:to-cyan-500">Intelligent</span> <br />
              Physical Systems.
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10 transition-colors">
              {personalInfo.tagline} {personalInfo.about}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to="/projects"
                className="px-6 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-white transition-colors flex items-center gap-2"
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact"
                className="px-6 py-3 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-2 hidden md:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl transition-colors">
              {/* Profile Photo Placeholder */}
              <img 
                src="https://picsum.photos/seed/zhaoyufei/800/800" 
                alt="ZHAO Yufei" 
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 border-t border-zinc-200 dark:border-zinc-800/50 transition-colors"
      >
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 flex items-center gap-3 transition-colors">
          <Wrench className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
          Technical Arsenal
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard icon={Code2} title="Programming" skills={personalInfo.skills.programming} />
          <SkillCard icon={Cpu} title="Control & Estimation" skills={personalInfo.skills.control} />
          <SkillCard icon={CircuitBoard} title="Embedded Systems" skills={personalInfo.skills.embedded} />
          <SkillCard icon={Database} title="Simulation & Design" skills={personalInfo.skills.simulation} />
          <SkillCard icon={Wrench} title="PCB Design" skills={personalInfo.skills.pcb} />
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 border-t border-zinc-200 dark:border-zinc-800/50 transition-colors"
      >
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-12 flex items-center gap-3 transition-colors">
          <Briefcase className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
          Experience
        </h2>
        <div className="space-y-12">
          {personalInfo.experience.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              <div className="md:col-span-1">
                <p className="font-mono text-sm text-emerald-600 dark:text-emerald-400 sticky top-24">{exp.period}</p>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors">{exp.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium mb-4 transition-colors">{exp.organization}</p>
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed flex items-start gap-3 transition-colors">
                      <span className="text-emerald-500 mt-1.5 text-xs">■</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 border-t border-zinc-200 dark:border-zinc-800/50 transition-colors"
      >
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 flex items-center gap-3 transition-colors">
          <GraduationCap className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
          Education
        </h2>
        <div className="space-y-8">
          {personalInfo.education.map((edu, index) => (
            <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-zinc-200 dark:before:bg-zinc-800">
              <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-zinc-50 dark:ring-zinc-950 transition-colors" />
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 transition-colors">{edu.institution}</h3>
                <span className="font-mono text-sm text-emerald-600 dark:text-emerald-400">{edu.period}</span>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 font-medium mb-2 transition-colors">{edu.degree}</p>
              <ul className="space-y-1">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-zinc-500 text-sm flex items-start gap-2">
                    <span className="text-emerald-500/50 mt-1">▹</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 border-t border-zinc-200 dark:border-zinc-800/50 transition-colors"
      >
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 flex items-center gap-3 transition-colors">
          <Trophy className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personalInfo.achievements.map((achievement, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/50 shadow-sm dark:shadow-none transition-colors">
              <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0">
                <Trophy className="w-4 h-4 text-yellow-600 dark:text-yellow-500" />
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 text-sm transition-colors">{achievement}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

function SkillCard({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) {
  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/50 hover:border-emerald-500/50 dark:hover:border-emerald-500/30 transition-colors group shadow-sm dark:shadow-none">
      <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-emerald-500/10 transition-colors">
        <Icon className="w-5 h-5 text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
      </div>
      <h3 className="text-zinc-900 dark:text-zinc-100 font-semibold mb-4 transition-colors">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-2.5 py-1 rounded-md bg-zinc-50 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-300 text-xs font-mono border border-zinc-200 dark:border-zinc-700/50 transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
