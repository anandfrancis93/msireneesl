'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';

export default function AboutMePage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('about-me');

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    router.push(`/${page}`);
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="min-h-screen">
        <AboutMe />
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
