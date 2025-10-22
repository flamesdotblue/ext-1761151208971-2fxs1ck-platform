import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    desc: 'Full-stack chat with WebSocket, JWT auth, and animated UI.',
    tags: ['React', 'Node', 'Socket.IO', 'Tailwind'],
    live: '#',
    code: '#',
  },
  {
    title: 'AI Resume Screener',
    desc: 'ATS-friendly parser with semantic ranking and dashboard.',
    tags: ['TypeScript', 'FastAPI', 'Postgres', 'Docker'],
    live: '#',
    code: '#',
  },
  {
    title: 'Portfolio Engine',
    desc: 'Motion-first portfolio template with Spline hero and CMS.',
    tags: ['Next.js', 'Framer Motion', 'CMS'],
    live: '#',
    code: '#',
  },
];

export default function Projects() {
  return (
    <div className="relative py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-semibold tracking-tight">
          Featured Projects
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />)
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 hover:from-white/[0.1] hover:to-white/[0.05] transition-colors backdrop-blur-md"
    >
      <div className="aspect-video rounded-xl bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-yellow-400/20 border border-white/10 mb-4" />
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-sm text-white/70 mt-1">{project.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="text-xs rounded-full border border-white/10 bg-black/40 px-2.5 py-1 text-white/70">{t}</span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <a href={project.live} className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white">
          <ExternalLink className="w-4 h-4" /> Live
        </a>
        <a href={project.code} className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white">
          <Github className="w-4 h-4" /> Code
        </a>
      </div>
    </motion.article>
  );
}
