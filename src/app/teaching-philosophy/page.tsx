'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import TeachingPhilosophy from '@/components/TeachingPhilosophy';
import Footer from '@/components/Footer';

export default function TeachingPhilosophyPage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('teaching-philosophy');

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    router.push(`/${page}`);
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="min-h-screen">
        <TeachingPhilosophy />
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
