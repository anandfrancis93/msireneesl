'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import BookReports from '@/components/BookReports';
import Footer from '@/components/Footer';

export default function BookReportsPage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('book-reports');

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    router.push(`/${page}`);
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="min-h-screen">
        <BookReports />
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
