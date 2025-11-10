'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('portfolio');

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    router.push(`/${page}`);
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="min-h-screen">
        <Portfolio />
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
