'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import LessonPlans from '@/components/LessonPlans';
import Footer from '@/components/Footer';

export default function LessonPlansPage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('lesson-plans');

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    router.push(`/${page}`);
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="min-h-screen">
        <LessonPlans />
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
