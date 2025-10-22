import { useEffect, useState } from 'react';
import { Menu, X, Download, Mail, Github, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      {/* Top Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white/90 hover:text-white transition-colors text-lg">
            <span className="text-cyan-400">CSE</span> • Portfolio
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition-colors">
              <Download className="w-4 h-4" /> Resume
            </a>
            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-white/70 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#contact" aria-label="Email" className="text-white/70 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </nav>
          <button className="md:hidden p-2 rounded-md border border-white/10 hover:bg-white/5" onClick={() => setOpen(v => !v)} aria-label="Toggle Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
              <a onClick={close} href="#about" className="text-white/80">About</a>
              <a onClick={close} href="#projects" className="text-white/80">Projects</a>
              <a onClick={close} href="#contact" className="text-white/80">Contact</a>
              <a onClick={close} href="#" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 w-max font-medium">
                <Download className="w-4 h-4" /> Resume
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Sections */}
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Your Name • B.Tech CSE • All rights reserved.
      </footer>
    </div>
  );
}
