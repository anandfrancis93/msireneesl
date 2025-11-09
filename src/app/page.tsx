'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Home from '@/components/Home';
import AboutMe from '@/components/AboutMe';
import Tesol from '@/components/Tesol';
import WorkExperience from '@/components/WorkExperience';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Page() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'about':
        return <AboutMe />;
      case 'tesol':
      case 'book-reports':
      case 'lesson-plans':
      case 'test-manual':
        return <Tesol activePage={activePage} />;
      case 'experience':
        return <WorkExperience />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <main className="min-h-screen bg-dark-bg flex flex-col">
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1">
        {renderPage()}
      </div>
      <Footer setActivePage={setActivePage} />
    </main>
  );
}
