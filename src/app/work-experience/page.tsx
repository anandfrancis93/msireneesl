'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import WorkExperience from '@/components/WorkExperience';
import Footer from '@/components/Footer';

export default function WorkExperiencePage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('work-experience');

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    router.push(`/${page}`);
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="min-h-screen">
        <WorkExperience />
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
