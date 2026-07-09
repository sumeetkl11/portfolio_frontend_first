'use client';

import { motion } from 'framer-motion';
import ProjectCard, { type Project } from './ProjectCard';

const projects: Project[] = [
  {
    title: 'Tastebuds AI',
    description:
      'An AI-powered recipe discovery platform that suggests personalized meals based on ingredients, dietary preferences, and nutritional goals using the Gemini API.',
    techStack: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'Gemini API'],
    githubUrl: 'https://github.com/sumeetkanhiya/tastebuds-ai',
    liveUrl: '#',
    accent: 'blue',
  },
  {
    title: 'SocialConnect',
    description:
      'A real-time social networking platform with live messaging, presence indicators, and media sharing built on WebSocket architecture for instant communication.',
    techStack: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    githubUrl: 'https://github.com/sumeetkanhiya/socialconnect',
    liveUrl: '#',
    accent: 'violet',
  },
  {
    title: 'ToposRAG',
    description:
      'A Retrieval-Augmented Generation system leveraging vector search with ChromaDB and local LLMs via Ollama for context-aware, domain-specific document Q&A.',
    techStack: ['Node.js', 'Python', 'ChromaDB', 'Ollama', 'LLM'],
    githubUrl: 'https://github.com/sumeetkanhiya/toposrag',
    accent: 'cyan',
  },
];

const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
            Featured Work
          </p>
          <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
            Things I&apos;ve Built
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
