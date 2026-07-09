'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a
            href="#hero"
            className="group flex items-center gap-2 text-lg font-bold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 text-white transition-transform duration-300 group-hover:scale-110">
              <Code2 className="h-5 w-5" />
            </span>
            <span className="font-display text-white">
              Sumeet<span className="text-blue-400">.</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-violet-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 transition-all duration-300 hover:bg-blue-500/20 hover:text-blue-200 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Get in touch
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="text-gray-300 transition-colors hover:text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-lg font-bold text-white">
                Sumeet<span className="text-blue-400">.</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 pt-20">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="font-display text-3xl font-semibold text-gray-300 transition-colors hover:text-blue-400"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
