'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TeachingPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-dark-bg min-h-screen" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Teaching <span className="gradient-text">Philosophy</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            My approach to ESL instruction and student development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-dark"
          >
            <h3 className="text-2xl font-bold mb-4">Core Beliefs</h3>
            <p className="text-text-secondary leading-relaxed">
              Placeholder content for teaching philosophy. This section will detail my core beliefs about language learning and teaching methodology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-dark"
          >
            <h3 className="text-2xl font-bold mb-4">Teaching Approach</h3>
            <p className="text-text-secondary leading-relaxed">
              Placeholder content for teaching approach. This section will describe my practical methods and classroom strategies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-dark"
          >
            <h3 className="text-2xl font-bold mb-4">Student Success</h3>
            <p className="text-text-secondary leading-relaxed">
              Placeholder content for student success. This section will highlight my commitment to student growth and achievement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
