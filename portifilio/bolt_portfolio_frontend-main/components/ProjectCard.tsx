'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  accent: 'blue' | 'violet' | 'cyan';
}

const accentMap = {
  blue: {
    glow: 'rgba(59, 130, 246, 0.25)',
    border: 'rgba(59, 130, 246, 0.4)',
    text: 'text-blue-400',
    pillBg: 'bg-blue-500/10',
    pillBorder: 'border-blue-500/20',
  },
  violet: {
    glow: 'rgba(139, 92, 246, 0.25)',
    border: 'rgba(139, 92, 246, 0.4)',
    text: 'text-violet-400',
    pillBg: 'bg-violet-500/10',
    pillBorder: 'border-violet-500/20',
  },
  cyan: {
    glow: 'rgba(34, 211, 238, 0.25)',
    border: 'rgba(34, 211, 238, 0.4)',
    text: 'text-cyan-400',
    pillBg: 'bg-cyan-500/10',
    pillBorder: 'border-cyan-500/20',
  },
};

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const accent = accentMap[project.accent];

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-50, 50], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.02 }}
      className="group perspective-1000 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:border-white/20"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ boxShadow: `0 0 40px ${accent.glow}` }}
      />

      <div style={{ transform: 'translateZ(40px)' }} className="relative">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <span className={`font-display text-xl font-bold ${accent.text}`}>
              {project.title.charAt(0)}
            </span>
          </div>
          <div className="flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-400 transition-all duration-300 hover:border-white/20 hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-400 transition-all duration-300 hover:border-white/20 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <h3 className="mb-2 font-display text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${accent.pillBg} ${accent.pillBorder} ${accent.text}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
