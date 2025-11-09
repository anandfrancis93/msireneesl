'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Users, Globe, GraduationCap, Target, Heart } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'ESL Instruction',
    description: 'Comprehensive English language teaching for diverse learners, from beginner to advanced levels.',
  },
  {
    icon: Users,
    title: 'Interactive Learning',
    description: 'Engaging, student-centered teaching methods that make language learning enjoyable and effective.',
  },
  {
    icon: GraduationCap,
    title: 'Academic Credentials',
    description: 'TESOL, Education degree with minors in Psychology and Special Education for specialized instruction.',
  },
  {
    icon: Globe,
    title: 'Cultural Diversity',
    description: 'Experience teaching students from various cultural backgrounds across multiple countries.',
  },
  {
    icon: Target,
    title: 'Curriculum Development',
    description: 'Custom-designed lesson plans and materials tailored to individual student needs and goals.',
  },
  {
    icon: Heart,
    title: 'Supportive Environment',
    description: 'Creating inclusive, encouraging classrooms where every student feels motivated to succeed.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding bg-dark-surface">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Teaching <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Comprehensive language instruction backed by experience and dedication
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-dark group cursor-pointer"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-accent-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-accent-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
