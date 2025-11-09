'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen, Users, Globe2, Target } from 'lucide-react';

const qualifications = [
  {
    icon: GraduationCap,
    title: 'TESOL Certification',
    description: 'Certified in Teaching English to Speakers of Other Languages with specialized training in modern methodologies.',
  },
  {
    icon: Award,
    title: 'Education Degree',
    description: 'Bachelor\'s degree in Education with focus on language acquisition and pedagogical practices.',
  },
  {
    icon: BookOpen,
    title: 'Psychology Minor',
    description: 'Understanding of cognitive development and learning psychology to enhance student engagement.',
  },
  {
    icon: Users,
    title: 'Special Education Minor',
    description: 'Training in inclusive teaching practices and differentiated instruction for diverse learners.',
  },
];

const expertise = [
  {
    icon: Globe2,
    title: 'Cross-Cultural Communication',
    description: 'Expertise in teaching students from diverse cultural backgrounds and adapting teaching methods accordingly.',
  },
  {
    icon: Target,
    title: 'Curriculum Design',
    description: 'Developing comprehensive, student-centered curricula that align with language proficiency standards.',
  },
];

export default function Tesol() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tesol" className="section-padding bg-dark-surface">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">TESOL</span> Credentials
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Professional qualifications and expertise in English language teaching
          </p>
        </motion.div>

        {/* Academic Qualifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Academic Credentials
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((qual, index) => {
              const Icon = qual.icon;
              return (
                <motion.div
                  key={qual.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="card-dark text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-accent-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-3">{qual.title}</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {qual.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Teaching Expertise */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Teaching Expertise
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className="card-dark"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-accent-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Philosophy Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center max-w-3xl mx-auto">
            <BookOpen className="w-12 h-12 text-accent-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-6">Teaching Philosophy</h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              "Language learning is the bridge that connects cultures, unlocks opportunities,
              and allows us to see the world through new perspectives."
            </p>
            <p className="text-text-secondary leading-relaxed">
              With over a decade of experience and comprehensive training in TESOL, Education,
              Psychology, and Special Education, I am committed to creating inclusive, engaging,
              and effective learning environments where every student can thrive and achieve their
              language learning goals.
            </p>
          </div>
        </motion.div>
      </div>

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
              Comprehensive analysis and reviews of ESL teaching literature
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="card-dark text-center py-20">
              <BookOpen className="w-16 h-16 text-accent-primary mx-auto mb-6" />
              <p className="text-text-secondary text-lg">
                Book reports content coming soon
              </p>
            </div>
          </div>
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

          <div className="max-w-4xl mx-auto">
            <div className="card-dark text-center py-20">
              <Target className="w-16 h-16 text-accent-primary mx-auto mb-6" />
              <p className="text-text-secondary text-lg">
                Lesson plans content coming soon
              </p>
            </div>
          </div>
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
