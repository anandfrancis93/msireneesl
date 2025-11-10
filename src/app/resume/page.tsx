'use client';

import { motion } from 'framer-motion';
import { FileText, Download, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <div className="container-custom max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 bg-accent-primary/10 rounded-3xl flex items-center justify-center border-2 border-accent-primary/20">
              <FileText className="w-12 h-12 text-accent-primary" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Resume <span className="gradient-text">Coming Soon</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-text-secondary text-lg mb-8 leading-relaxed"
          >
            Thank you for your interest in viewing my resume. The PDF version will be available here soon.
          </motion.p>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card-dark text-left mb-8"
          >
            <h2 className="text-xl font-bold mb-4">In the meantime:</h2>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
                <span>Explore my <strong className="text-text-primary">Portfolio</strong> page to see my work</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
                <span>Visit <strong className="text-text-primary">Work Experience</strong> for detailed job history</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
                <span>Check out my <strong className="text-text-primary">TESOL</strong> credentials and qualifications</span>
              </li>
            </ul>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/" className="btn-primary inline-flex items-center justify-center gap-2">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2">
              <Mail size={20} />
              Contact Me
            </Link>
          </motion.div>

          {/* Additional Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-text-tertiary text-sm mt-8"
          >
            For immediate resume requests, please <Link href="/contact" className="text-accent-primary hover:underline">contact me directly</Link>
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}
