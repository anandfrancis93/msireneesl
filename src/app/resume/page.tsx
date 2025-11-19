'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ResumePage() {
  const router = useRouter();
  const [activePage, setActivePage] = useState('resume');

  const handleSetActivePage = (page: string) => {
    if (page === 'resume') {
      return;
    }
    setActivePage(page);
    router.push('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="min-h-screen bg-editorial-bg py-12 px-4 mt-20">
        <div className="container-custom max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-editorial-navy">
              Curriculum <span className="italic text-editorial-accent">Vitae</span>
            </h1>
            <p className="text-editorial-subtext text-lg font-light">
              Professional Resume - Ms. Irene, ESL Instructor
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <Link href="/" className="px-6 py-3 border border-editorial-border text-editorial-navy hover:bg-white hover:border-editorial-accent transition-all duration-300 font-serif inline-flex items-center justify-center gap-2">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <a
              href="/resume.pdf"
              download="Ms_Irene_Resume.pdf"
              className="px-6 py-3 bg-editorial-navy text-white font-serif hover:bg-editorial-accent transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
              aria-label="Download resume PDF"
            >
              <Download size={20} />
              Download PDF
            </a>
          </motion.div>

          {/* PDF Viewer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white border border-editorial-border p-2 shadow-sm"
          >
            <iframe
              src="/resume.pdf"
              className="w-full h-[800px] sm:h-[900px] lg:h-[1000px] bg-white"
              title="Resume PDF Viewer"
              style={{ border: 'none' }}
            />
          </motion.div>

          {/* Mobile Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center text-editorial-subtext text-sm mt-8 italic"
          >
            If the PDF doesn't display properly, please use the Download button above
          </motion.p>
        </div>
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
