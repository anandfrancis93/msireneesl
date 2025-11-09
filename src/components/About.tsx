'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Students Taught', value: '500+' },
  { icon: Rocket, label: 'Years Experience', value: '10+' },
  { icon: Code2, label: 'Institutions', value: '5+' },
  { icon: Palette, label: 'Countries', value: '3+' },
];

export default function About() {
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
            Experienced ESL Teacher & Language Expert
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold">
              Experienced ESL Teacher
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              I am a dedicated professional with extensive experience in education, language instruction, and customer service. With academic credentials in TESOL, Education, and minors in Psychology and Special Education, I have consistently demonstrated a strong commitment to creating inclusive and effective learning environments.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Over the years, I have honed my expertise in teaching English as a Second Language (ESL) through roles at institutions like Brigham Young University and Utah Valley University, as well as through international teaching experiences spanning more than a decade.
            </p>
            <div className="border-l-4 border-accent-primary bg-dark-elevated p-6 rounded-r-xl my-6">
              <p className="text-text-primary italic text-lg leading-relaxed">
                "Language learning is the bridge that connects cultures, unlocks opportunities, and allows us to see the world through new perspectives."
              </p>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed">
              Passionate ESL teacher dedicated to helping students achieve language proficiency. With over 10 years of experience, I have taught English to diverse groups of students from various cultural backgrounds. My teaching approach focuses on interactive and engaging methods to make learning enjoyable and effective. I am committed to creating a supportive and inclusive learning environment where students feel motivated to succeed.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['TESOL', 'Education', 'Psychology', 'Special Education', 'ESL Instruction', 'Curriculum Development'].map(
                (skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="px-4 py-2 bg-dark-elevated border border-dark-border rounded-full text-sm text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-3xl border border-dark-border overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <Palette className="w-24 h-24 text-accent-primary/30" />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full bg-accent-primary/10 rounded-3xl" />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="card-dark text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-accent-primary/10 p-3 rounded-xl">
                    <Icon className="w-6 h-6 text-accent-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
