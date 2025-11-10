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
      <main className="min-h-screen bg-dark-bg py-12 px-4 mt-20">
        <div className="container-custom max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h1>
          <p className="text-text-secondary text-lg">
            Professional Resume - Ms. Irene, ESL Instructor
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Link href="/" className="btn-secondary inline-flex items-center justify-center gap-2">
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <a
            href="/resume.pdf"
            download="Ms_Irene_Resume.pdf"
            className="btn-primary inline-flex items-center justify-center gap-2"
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
          className="bg-dark-surface border-2 border-dark-border rounded-2xl overflow-hidden"
        >
          <iframe
            src="/resume.pdf"
            className="w-full h-[800px] sm:h-[900px] lg:h-[1000px]"
            title="Resume PDF Viewer"
            style={{ border: 'none' }}
          />
        </motion.div>

        {/* Mobile Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-text-tertiary text-sm mt-6"
        >
          If the PDF doesn't display properly, please use the Download button above
        </motion.p>
        </div>
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
