'use client';

import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import WebGLErrorBoundary from './WebGLErrorBoundary';

const Scene = dynamic(() => import('./Scene'), { ssr: false });

const Fallback = () => (
  <div className="fixed inset-0 z-0 bg-[#0a0a0f]">
    <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
    <div className="absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-[100px]" />
  </div>
);

export default function SceneWrapper() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (reducedMotion) return <Fallback />;

  return (
    <WebGLErrorBoundary fallback={<Fallback />}>
      <Suspense fallback={<Fallback />}>
        <Scene />
      </Suspense>
    </WebGLErrorBoundary>
  );
}
