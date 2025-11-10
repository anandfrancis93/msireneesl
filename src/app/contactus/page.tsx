'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function ContactUsPage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('contactus');

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    router.push(`/${page}`);
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="min-h-screen">
        <Contact />
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
