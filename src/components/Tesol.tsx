'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { BookOpen, GraduationCap, FileText, ArrowRight } from 'lucide-react';

interface TesolProps {
  activePage: string;
}

export default function Tesol({ activePage }: TesolProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const sections = [
    {
      id: 'book-reports',
      title: 'Book Reports',
      description: 'Detailed book reports and analysis of TESOL literature. Explore my journey with books that have shaped my teaching philosophy.',
      icon: BookOpen,
      link: '/tesol/book-reports',
    },
    {
      id: 'lesson-plans',
      title: 'Lesson Plans',
      description: 'Comprehensive lesson plans and teaching materials designed for effective ESL instruction and student engagement.',
      icon: FileText,
      link: '/tesol/lesson-plans',
    },
    {
      id: 'test-manual',
      title: 'Test Technical Manual',
      description: 'Technical documentation and guidelines for ESL testing and assessment, ensuring validity and reliability.',
      icon: GraduationCap,
      link: '/tesol/test-manual', // Assuming this route exists or will exist
    },
  ];

  return (
    <section className="section-padding bg-editorial-bg min-h-screen" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-editorial-navy">
            TESOL <span className="italic text-editorial-accent">Portfolio</span>
          </h2>
          <p className="text-editorial-subtext max-w-2xl mx-auto text-lg leading-relaxed">
            A collection of my academic work, teaching materials, and professional resources in the field of Teaching English to Speakers of Other Languages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Link href={section.link} className="block h-full">
                <div className="bg-white p-8 border border-editorial-border shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col group">
                  <div className="w-14 h-14 bg-editorial-bg border border-editorial-border rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <section.icon className="w-7 h-7 text-editorial-navy" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-editorial-navy mb-4 group-hover:text-editorial-accent transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-editorial-subtext mb-6 flex-grow leading-relaxed">
                    {section.description}
                  </p>
                  <div className="flex items-center text-editorial-navy font-medium group-hover:text-editorial-accent transition-colors">
                    Explore Section <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
