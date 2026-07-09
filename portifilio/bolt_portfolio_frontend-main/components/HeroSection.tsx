'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:gap-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 text-center md:order-1 md:text-left"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-1.5 text-sm text-blue-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-2 text-lg text-gray-400"
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Sumeet
            <br />
            <span className="gradient-text">Kanhiya.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-md text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            Full Stack Developer specializing in the{' '}
            <span className="font-semibold text-blue-400">PERN stack</span> and
            scalable web architectures.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start"
          >
            <a
              href="#projects"
              className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] sm:w-auto"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet-500 to-blue-500 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center font-medium text-gray-200 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10 hover:text-white sm:w-auto"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center justify-center gap-5 md:justify-start"
          >
            {[
              { icon: Github, href: 'https://github.com/sumeetkanhiya', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/sumeetkanhiya', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:sumeetkanhiya@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 transition-all duration-300 hover:scale-110 hover:text-blue-400"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 flex justify-center md:order-2"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-2xl" />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-500/10 to-violet-500/10 blur-xl" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-violet-500/10 sm:h-80 sm:w-80 md:h-96 md:w-96">
              <Image
                src="/WhatsApp_Image_2026-07-09_at_12.59.18_AM-removebg-preview.png"
                alt="Sumeet Kanhiya"
                fill
                priority
                sizes="(max-width: 768px) 256px, 384px"
                className="object-contain p-2"
                style={{
                  filter:
                    'drop-shadow(0 0 15px rgba(59,130,246,0.4)) drop-shadow(0 0 30px rgba(139,92,246,0.2))',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-gray-500">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4 text-blue-400" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
