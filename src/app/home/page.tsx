'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Home from '@/components/Home';
import Footer from '@/components/Footer';

export default function HomePage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('home');

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    router.push(`/${page}`);
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <Home setActivePage={handleSetActivePage} />
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
