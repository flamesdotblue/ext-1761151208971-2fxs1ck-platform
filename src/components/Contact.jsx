import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative py-24 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.08),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-semibold tracking-tight">
          Contact
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-3 text-white/80 max-w-2xl">
          Have an opportunity or want to collaborate? Drop a message and I’ll get back soon.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" type="email" placeholder="you@example.com" />
          </div>
          <Input label="Subject" placeholder="Hiring for SDE Intern / Full-time" />
          <div>
            <label className="block text-sm text-white/70 mb-1">Message</label>
            <textarea required rows={5} className="w-full rounded-xl bg-black/50 border border-white/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/20 outline-none px-4 py-3" placeholder="Tell me about the role or project..." />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
              <Mail className="w-5 h-5" /> you@example.com
            </a>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition-colors">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}

function Input({ label, type = 'text', placeholder }) {
  return (
    <div>
      <label className="block text-sm text-white/70 mb-1">{label}</label>
      <input type={type} required placeholder={placeholder} className="w-full rounded-xl bg-black/50 border border-white/10 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-500/20 outline-none px-4 py-3" />
    </div>
  );
}
