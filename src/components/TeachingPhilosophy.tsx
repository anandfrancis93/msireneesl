'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

export default function TeachingPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-editorial-bg min-h-screen" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-editorial-navy">
              Teaching <span className="italic text-editorial-accent">Philosophy</span>
            </h2>
            <div className="w-24 h-1 bg-editorial-accent mx-auto rounded-full"></div>
          </div>

          <div className="bg-white border border-editorial-border shadow-sm p-8 md:p-12 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-editorial-accent/20 via-editorial-accent to-editorial-accent/20"></div>

            <div className="space-y-6 text-lg leading-relaxed text-editorial-subtext">
              <p>
                My teaching philosophy is grounded in the belief that language learning is a transformative process that empowers individuals to connect across cultures. I strive to create an inclusive, student-centered learning environment where every learner feels valued and challenged.
              </p>

              <div className="bg-editorial-bg p-8 border-l-4 border-editorial-accent my-8 italic text-editorial-navy">
                <Quote className="w-8 h-8 text-editorial-accent mb-4 opacity-50" />
                <p className="text-lg font-serif">
                  "Language and culture are intrinsically linked, and comprehending cultural subtleties is critical for effective and meaningful communication."
                </p>
              </div>

              <p>
                I utilize a communicative language teaching approach, emphasizing real-world application and meaningful interaction. By integrating authentic materials and technology, I aim to bridge the gap between the classroom and the global community.
              </p>

              <p>
                Assessment is an integral part of my instruction, used not just to measure learning but to guide it. I employ a variety of formative and summative assessment strategies to provide timely feedback and adjust instruction to meet the diverse needs of my students.
              </p>
            </div>
          </div>

          {/* Action Research Section */}
          <div className="bg-white border border-editorial-border shadow-sm p-8 md:p-12 space-y-8 mt-12">
            <h3 className="text-3xl font-serif font-bold text-editorial-navy mb-6 border-b border-editorial-border pb-4">
              Action Research
            </h3>

            <div className="space-y-6 text-editorial-subtext">
              <p className="text-lg leading-relaxed">
                I am committed to continuous professional growth through action research. My recent inquiries have focused on:
              </p>

              <ul className="space-y-4 ml-4">
                <li className="flex items-start">
                  <span className="text-editorial-accent font-bold text-xl mr-3 mt-[-4px]">•</span>
                  <span>Enhancing student engagement through gamified learning platforms.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-editorial-accent font-bold text-xl mr-3 mt-[-4px]">•</span>
                  <span>The impact of peer-feedback on writing proficiency in ESL contexts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-editorial-accent font-bold text-xl mr-3 mt-[-4px]">•</span>
                  <span>Strategies for fostering learner autonomy in hybrid learning environments.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                const element = document.getElementById('lesson-plans');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  window.location.href = '/teaching-curriculum';
                }
              }}
              className="px-8 py-4 bg-editorial-navy text-white font-serif text-lg hover:bg-editorial-accent transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Lesson Plans
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
