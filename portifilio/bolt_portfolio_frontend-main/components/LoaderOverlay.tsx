'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoaderOverlay() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0f]"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="h-12 w-12 rounded-full border-2 border-white/10 border-t-blue-500"
            />
            <div className="font-mono text-sm text-gray-400">
              {progress.toString().padStart(3, '0')}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
