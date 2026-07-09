'use client';

import { motion } from 'framer-motion';

interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  description: string;
  type: 'work' | 'education';
}

const entries: TimelineEntry[] = [
  {
    period: '2023 — Present',
    title: 'Freelance Full Stack Developer',
    organization: 'Self-Employed',
    description:
      'Building end-to-end web applications for clients using the PERN stack. Delivering scalable APIs, responsive frontends, and AI-integrated features.',
    type: 'work',
  },
  {
    period: '2022 — 2023',
    title: 'Full Stack Developer',
    organization: 'Project Collaborations',
    description:
      'Developed real-time applications with Socket.io, built RAG systems with vector databases, and integrated LLM APIs for intelligent document processing.',
    type: 'work',
  },
  {
    period: '2020 — 2024',
    title: 'B.E. in Computer Engineering',
    organization: 'Dawood University of Engineering & Technology (DUET)',
    description:
      'Studied software engineering, database systems, computer networks, and algorithms. Built a foundation in scalable system design and modern web development.',
    type: 'education',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Journey
          </p>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Experience &amp; Education
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {entries.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? 'md:pr-12 md:text-right'
                    : 'md:ml-auto md:pl-12'
                }`}
              >
                <div
                  className={`absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-blue-400 bg-[#0a0a0f] shadow-[0_0_15px_rgba(59,130,246,0.5)] md:left-1/2 ${
                    i % 2 === 0 ? 'md:translate-x-1/2' : 'md:-translate-x-1/2'
                  }`}
                />

                <div className="glass glass-hover rounded-xl p-6">
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${
                      entry.type === 'work'
                        ? 'border-blue-500/30 bg-blue-500/10 text-blue-300'
                        : 'border-violet-500/30 bg-violet-500/10 text-violet-300'
                    }`}
                  >
                    {entry.period}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-white">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-blue-400">
                    {entry.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
