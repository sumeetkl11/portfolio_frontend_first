'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/sumeetkanhiya',
    handle: '@sumeetkanhiya',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/sumeetkanhiya',
    handle: 'in/sumeetkanhiya',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:sumeetkanhiya@gmail.com',
    handle: 'sumeetkanhiya@gmail.com',
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-10 text-center backdrop-blur-md md:p-16"
        >
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
              Get in touch
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
              Let&apos;s Build Something
              <br />
              <span className="gradient-text">Scalable.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-lg text-gray-400">
              I&apos;m currently open to full-time roles and freelance
              opportunities. Let&apos;s talk about how I can help your team.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {socials.map(({ icon: Icon, label, href, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] sm:w-auto"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-blue-400" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-white">{label}</p>
                      <p className="text-xs text-gray-500">{handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-500 transition-all duration-300 group-hover:text-blue-400" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500">
            Designed &amp; built by Sumeet Kanhiya — PERN stack developer.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
