'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Heart, Target, Users } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Degrees in TESOL and Education with specialized minors in Psychology and Special Education',
  },
  {
    icon: Users,
    title: 'Diverse Experience',
    description: 'Taught over 500 students from various cultural backgrounds across multiple countries',
  },
  {
    icon: Target,
    title: 'Student Success',
    description: 'Proven track record of helping students achieve their language learning goals',
  },
  {
    icon: Heart,
    title: 'Passionate Educator',
    description: 'Committed to creating supportive, inclusive environments where every student thrives',
  },
];

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-dark-bg">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Dedicated ESL educator with a passion for empowering students through language
          </p>
        </motion.div>

        {/* Professional Background */}
        <div className="max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">Professional Background</h3>

            <p className="text-text-secondary text-lg leading-relaxed">
              As an experienced ESL instructor with over a decade of teaching experience, I have had the privilege of working with diverse student populations across prestigious institutions including Brigham Young University and Utah Valley University. My international teaching experiences have enriched my understanding of cross-cultural communication and language acquisition.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              My educational background combines theoretical knowledge with practical application. With a degree in Education and TESOL certification, complemented by minors in Psychology and Special Education, I bring a comprehensive understanding of how students learn and what they need to succeed in their language journey.
            </p>

            <p className="text-text-secondary text-lg leading-relaxed">
              Beyond the classroom, I am committed to continuous professional development. I regularly attend conferences, participate in workshops, and collaborate with fellow educators to stay current with the latest methodologies in language instruction. This dedication ensures that my students benefit from innovative, research-backed teaching strategies.
            </p>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="card-dark"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-accent-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-accent-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{highlight.title}</h4>
                    <p className="text-text-secondary leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Teaching Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">My Teaching Philosophy</h3>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              I believe that language learning is more than just grammar rules and vocabulary—it's about opening doors to new cultures, perspectives, and opportunities. My approach centers on creating an environment where students feel safe to make mistakes, encouraged to take risks, and motivated to push beyond their comfort zones.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Every student brings unique experiences, learning styles, and goals to the classroom. By incorporating interactive methods, cultural awareness, and personalized feedback, I strive to meet each student where they are and guide them toward fluency and confidence in English communication.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
