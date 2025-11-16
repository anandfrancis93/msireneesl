'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import TeachingCurriculum from '@/components/TeachingCurriculum';
import Footer from '@/components/Footer';

export default function TeachingCurriculumPage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('teaching-curriculum');

  const handleSetActivePage = (page: string) => {
    if (page === 'teaching-curriculum') {
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
        <TeachingCurriculum />
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
