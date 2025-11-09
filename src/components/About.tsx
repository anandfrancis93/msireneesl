'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette } from 'lucide-react';

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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-text-secondary text-lg leading-relaxed">
              I am a dedicated professional with extensive experience in education, language instruction, and customer service. With academic credentials in TESOL, Education, and minors in Psychology and Special Education, I have consistently demonstrated a strong commitment to creating inclusive and effective learning environments. Over the years, I have honed my expertise in teaching English as a Second Language (ESL) through roles at institutions like Brigham Young University and Utah Valley University, as well as through international teaching experiences spanning more than a decade.
            </p>

            <div className="border-l-4 border-accent-primary bg-dark-elevated p-6 rounded-r-xl my-6">
              <p className="text-text-primary italic text-lg leading-relaxed">
                "Language learning is the bridge that connects cultures, unlocks opportunities, and allows us to see the world through new perspectives."
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Experienced ESL Teacher
              </h3>
              <p className="text-text-secondary text-lg leading-relaxed">
                Passionate ESL teacher dedicated to helping students achieve language proficiency. With over 10 years of experience, I have taught English to diverse groups of students from various cultural backgrounds. My teaching approach focuses on interactive and engaging methods to make learning enjoyable and effective. I am committed to creating a supportive and inclusive learning environment where students feel motivated to succeed. Let's embark on this language learning journey together!
              </p>
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
      </div>
    </section>
  );
}
