'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Tesol from '@/components/Tesol';
import Footer from '@/components/Footer';

export default function TesolPage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('tesol');

  useEffect(() => {
    // Check if there's a hash in the URL for subsections
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActivePage(hash);
    }
  }, []);

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    router.push(`/${page}`);
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="min-h-screen">
        <Tesol activePage={activePage} />
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
