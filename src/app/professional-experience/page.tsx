'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import ProfessionalExperience from '@/components/ProfessionalExperience';
import Footer from '@/components/Footer';

export default function ProfessionalExperiencePage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('professional-experience');

  const handleSetActivePage = (page: string) => {
    if (page === 'professional-experience') {
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
        <ProfessionalExperience />
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
