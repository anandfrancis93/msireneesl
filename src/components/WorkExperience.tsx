'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

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

  return (
    <section className="section-padding bg-dark-bg">
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
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    )}
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

      </div>
    </section>
  );
}
