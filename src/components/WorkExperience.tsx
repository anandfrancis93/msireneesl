'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'ESL Instructor',
    institution: 'Brigham Young University',
    location: 'Provo, Utah',
    period: '2018 - Present',
    responsibilities: [
      'Teaching English to international students at various proficiency levels',
      'Developing curriculum and lesson plans aligned with institutional standards',
      'Conducting assessments and providing individualized feedback',
      'Mentoring new ESL instructors and contributing to professional development',
    ],
  },
  {
    title: 'ESL Teacher',
    institution: 'Utah Valley University',
    location: 'Orem, Utah',
    period: '2015 - 2018',
    responsibilities: [
      'Instructed diverse groups of ESL students in reading, writing, speaking, and listening',
      'Implemented interactive teaching methods to enhance student engagement',
      'Collaborated with faculty to improve ESL program offerings',
      'Organized cultural exchange activities to support language learning',
    ],
  },
  {
    title: 'International ESL Instructor',
    institution: 'Various International Schools',
    location: 'Multiple Countries',
    period: '2010 - 2015',
    responsibilities: [
      'Taught English in diverse cultural settings across multiple countries',
      'Adapted teaching strategies to accommodate different learning styles',
      'Developed cross-cultural communication skills',
      'Created engaging materials for students of varying ages and backgrounds',
    ],
  },
];

export default function WorkExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding bg-dark-bg">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Over a decade of dedicated ESL instruction across prestigious institutions
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-dark relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-8 w-6 h-6 bg-accent-primary rounded-full border-4 border-dark-bg hidden md:block" />

              <div className="grid md:grid-cols-3 gap-6">
                {/* Left side - Title and Institution */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-text-secondary mb-4">
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      <span className="font-semibold">{exp.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.2 + 0.1 + idx * 0.1 }}
                        className="flex items-start gap-3 text-text-secondary"
                      >
                        <div className="w-1.5 h-1.5 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Right side - Period */}
                <div className="md:text-right">
                  <div className="inline-flex items-center gap-2 bg-accent-primary/10 px-4 py-2 rounded-full border border-accent-primary/20">
                    <Calendar size={16} className="text-accent-primary" />
                    <span className="text-text-primary font-medium">{exp.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-dark-surface border border-dark-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Additional Experience</h3>
            <p className="text-text-secondary leading-relaxed">
              Throughout my career, I have also provided private tutoring, conducted
              workshops for language educators, and participated in professional development
              conferences focused on innovative ESL teaching methodologies and technologies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
