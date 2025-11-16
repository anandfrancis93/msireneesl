'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import ResearchScholarship from '@/components/ResearchScholarship';
import Footer from '@/components/Footer';

export default function ResearchScholarshipPage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('research-scholarship');

  const handleSetActivePage = (page: string) => {
    if (page === 'research-scholarship') {
      return;
    }
    setActivePage(page);
    router.push('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="min-h-screen">
        <ResearchScholarship />
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
