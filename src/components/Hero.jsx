import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[92vh] md:h-[94vh] overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient vignette overlays */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 z-10 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-md px-3 py-1 text-xs md:text-sm text-white/80 mb-4">
              <Rocket className="w-4 h-4 text-cyan-300" />
              B.Tech CSE • Software Developer • Open to Opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Crafting modern, animated, and scalable web experiences
            </h1>
            <p className="mt-4 text-white/80 md:text-lg">
              I’m a Computer Science undergraduate specializing in full‑stack web development, cloud, and modern UI animations. I love building fast, accessible, and delightful products.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition-colors">
                View Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition-colors">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
