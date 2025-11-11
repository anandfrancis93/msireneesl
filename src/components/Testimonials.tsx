'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const evaluations = [
  {
    name: 'Isabella M.',
    role: 'Student',
    content: "Ms. Irene changed my vision about grammar and writing because she taught me with love, and the Holy ghost company. I learned a lot with her, and I am so grateful for her. She is amazing, and she is a big example to learn another language, and how to be patient with English Students.",
    rating: 5,
  },
  {
    name: 'Sarah T.',
    role: 'Student',
    content: "Ms. Irene's teaching style is incredibly effective. I have seen a remarkable improvement in my English skills since I started learning with her.",
    rating: 5,
  },
  {
    name: 'Daniel L.',
    role: 'Student',
    content: "Learning English with Ms. Irene has been a game-changer for me. Her dedication and support have boosted my confidence in using the language.",
    rating: 5,
  },
  {
    name: 'Sarah L-M.',
    role: 'Supervisor, ELC',
    content: "Irene is an excellent teacher who believes in really teaching students. She is always willing to try new methods and activities to engage students and tries to meet the students where they are at. She follows through on her assignments and is helpful and kind to her fellow teachers.",
    rating: 5,
  },
  {
    name: 'Jessica M.',
    role: 'Trainer & Mentor',
    content: "Irene is a confident, friendly, and imaginative teacher of ESL. She thinks of things to do with her students that are outside the usual classroom activities, but that still contribute to their learning and practice of the language. I have often been amazed at her creativity. She gives lots of positive feedback, consistently calls her students by name, monitors well, and uses gestures creatively to help her students understand what she expects of them. She carefully plans lessons, understands cultural differences, and is loved by her students.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-dark-bg min-h-screen" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Evaluations</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {evaluations.map((evaluation, index) => (
            <motion.div
              key={evaluation.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-dark-surface border border-dark-border rounded-2xl p-6 md:p-8"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-accent-primary opacity-50" />
              </div>

              {/* Content */}
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                {evaluation.content}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-dark-border">
                <div>
                  <div className="font-bold text-text-primary text-lg">
                    {evaluation.name}
                  </div>
                  <div className="text-sm text-text-tertiary">{evaluation.role}</div>
                </div>
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(evaluation.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-accent-primary text-accent-primary"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a href="/contactus" className="btn-primary text-lg px-8 py-4 inline-block">
            Start Your Language Journey Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
