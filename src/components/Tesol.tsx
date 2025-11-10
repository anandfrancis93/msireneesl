'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';

interface TesolProps {
  activePage: string;
}

export default function Tesol({ activePage }: TesolProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Scroll to the specific subsection when activePage changes
  useEffect(() => {
    if (activePage === 'book-reports' || activePage === 'lesson-plans' || activePage === 'test-manual') {
      setTimeout(() => {
        const element = document.getElementById(activePage);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [activePage]);

  return (
    <section className="section-padding bg-dark-surface">
      {/* Book Reports Section */}
      <div id="book-reports" className="section-padding bg-dark-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Book <span className="gradient-text">Reports</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Detailed book reports and analysis of TESOL literature
            </p>
          </motion.div>

        </div>
      </div>

      {/* Lesson Plans Section */}
      <div id="lesson-plans" className="section-padding bg-dark-surface">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Lesson <span className="gradient-text">Plans</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Detailed lesson plans and teaching materials for ESL instruction
            </p>
          </motion.div>

        </div>
      </div>

      {/* Test Technical Manual Section */}
      <div id="test-manual" className="section-padding bg-dark-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Test <span className="gradient-text">Technical Manual</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg">
              Technical documentation and guidelines for ESL testing and assessment
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="card-dark text-center py-20">
              <GraduationCap className="w-16 h-16 text-accent-primary mx-auto mb-6" />
              <p className="text-text-secondary text-lg">
                Test technical manual content coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
