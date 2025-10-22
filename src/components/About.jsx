import { motion } from 'framer-motion';
import { Code2, Cpu, Server } from 'lucide-react';

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <div className="relative py-24 md:py-28 bg-gradient-to-b from-black to-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="text-3xl md:text-4xl font-semibold tracking-tight">About Me</motion.h2>
        <motion.p variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mt-4 text-white/80 max-w-3xl">
          I am a B.Tech CSE student with strong foundations in data structures, algorithms, and system design. I focus on JavaScript/TypeScript, React, Node.js, and cloud-native tooling. I enjoy building performant interfaces with delightful motion.
        </motion.p>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <SkillCard icon={<Code2 className="w-5 h-5" />} title="Frontend" items={["React", "Tailwind", "Framer Motion", "TypeScript"]} />
          <SkillCard icon={<Server className="w-5 h-5" />} title="Backend" items={["Node.js", "Express", "REST", "PostgreSQL"]} />
          <SkillCard icon={<Cpu className="w-5 h-5" />} title="Core CS" items={["DSA", "OOP", "DBMS", "OS"]} />
        </div>
      </div>
    </div>
  );
}

function SkillCard({ icon, title, items }) {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors"
    >
      <div className="flex items-center gap-2 text-white/90">
        <span className="text-cyan-300">{icon}</span>
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="text-xs rounded-full border border-white/10 bg-black/40 px-3 py-1 text-white/70">
            {it}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
