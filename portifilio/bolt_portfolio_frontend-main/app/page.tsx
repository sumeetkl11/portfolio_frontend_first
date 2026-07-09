'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import LoaderOverlay from '@/components/LoaderOverlay';

const SceneWrapper = dynamic(
  () => import('@/components/three/SceneWrapper'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <LoaderOverlay />
      <SceneWrapper />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>
    </>
  );
}
