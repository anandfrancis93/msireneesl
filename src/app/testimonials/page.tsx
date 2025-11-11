'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function TestimonialsPage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('testimonials');

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    router.push(`/${page}`);
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="min-h-screen">
        <Testimonials />
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
