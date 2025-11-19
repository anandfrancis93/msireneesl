'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, MapPin, Calendar, ChevronDown } from 'lucide-react';

const experiences = [
  {
    title: 'Online Teacher/Tutor',
    institution: 'Brigham Young University, Online Teaching & Learning Department',
    location: '',
    period: 'January 2019 to current',
    responsibilities: [
      'Teaching adults and children whose first or main language is not English.',
      'Making daily lesson plans using a range of course books and materials, and a variety of audio visual aids.',
      'Classroom management',
      'Planning, preparing and delivering lessons to a range of classes and age groups;',
      'Preparing and setting tests, examination papers, and exercises',
      'Marking and providing appropriate feedback on oral and written work',
      'Devising, writing and producing new materials, including audio and visual resources',
      'Attending and contributing to training sessions',
      'Participating in marketing events for the language school',
      'Preparing information for inspection visits and other quality assurance exercises',
      'Freelance teaching on a one-to-one basis',
      'Basic administration, such as keeping student registers and attendance records',
    ],
  },
  {
    title: 'English Instructor/Teacher',
    institution: 'Inlingua, a Language School',
    location: '',
    period: 'April 2013 to August 2017',
    responsibilities: [
      'Teaching adults and children whose first or main language is not English.',
      'Making daily lesson plans using a range of course books and materials, and a variety of audio visual aids.',
      'Classroom management',
      'Planning, preparing and delivering lessons to a range of classes and age groups;',
      'Preparing and setting tests, examination papers, and exercises',
      'Marking and providing appropriate feedback on oral and written work',
      'Devising, writing and producing new materials, including audio and visual resources',
      'Attending and contributing to training sessions',
      'Participating in marketing events for the language school',
      'Preparing information for inspection visits and other quality assurance exercises',
      'Freelance teaching on a one-to-one basis',
      'Basic administration, such as keeping student registers and attendance records',
    ],
  },
];

export default function WorkExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-editorial-bg min-h-screen">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-editorial-navy">
            Work <span className="italic text-editorial-accent">Experience</span>
          </h2>
          <p className="text-editorial-subtext max-w-2xl mx-auto text-lg leading-relaxed">
            Over a decade of dedicated ESL instruction across prestigious institutions, fostering language acquisition and cultural fluency.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 md:p-12 border border-editorial-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-12 gap-8">
                {/* Left side - Period */}
                <div className="md:col-span-3">
                  <div className="inline-flex md:flex-col items-center md:items-start gap-2 text-editorial-accent font-serif italic text-lg">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Right side - Content */}
                <div className="md:col-span-9">
                  <h3 className="text-2xl font-serif font-bold text-editorial-navy mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-editorial-subtext mb-6 text-sm uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <Briefcase size={14} />
                      <span className="font-semibold">{exp.institution}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <ul className="space-y-3">
                      {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.1 + idx * 0.1 }}
                          className="flex items-start gap-3 text-editorial-subtext leading-relaxed"
                        >
                          <span className="text-editorial-accent mt-1.5">•</span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3 overflow-hidden"
                        >
                          {exp.responsibilities.slice(3).map((resp, idx) => (
                            <li
                              key={idx + 3}
                              className="flex items-start gap-3 text-editorial-subtext leading-relaxed"
                            >
                              <span className="text-editorial-accent mt-1.5">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </motion.div>
                      )}
                    </ul>
                    {exp.responsibilities.length > 3 && (
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="inline-flex items-center gap-2 text-editorial-navy hover:text-editorial-accent transition-colors duration-300 font-medium text-sm uppercase tracking-widest mt-6 border-b border-editorial-navy hover:border-editorial-accent pb-1"
                        aria-expanded={expandedIndex === index}
                        aria-label={expandedIndex === index ? "Show fewer responsibilities" : "Show more responsibilities"}
                      >
                        {expandedIndex === index ? 'Read Less' : 'Read More'}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
