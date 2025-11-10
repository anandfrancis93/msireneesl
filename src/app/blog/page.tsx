'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('blog');

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    router.push(`/${page}`);
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="min-h-screen">
        <Blog />
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
