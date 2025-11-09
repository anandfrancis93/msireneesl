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
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent-primary text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      <main id="main-content" className="min-h-screen bg-dark-bg flex flex-col flex-1">
        <div className="flex-1">
          {renderPage()}
        </div>
      </main>
      <Footer setActivePage={setActivePage} />
    </>
  );
}
