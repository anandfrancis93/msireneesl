'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Former Student",
    text: "Ms. Irene's teaching style transformed my English learning experience. Her patience and dedication helped me gain confidence in speaking and writing.",
    image: "👤"
  },
  {
    name: "Michael Chen",
    role: "University Student",
    text: "The strategies I learned in Ms. Irene's class have been invaluable in my academic journey. She truly understands how to make complex concepts accessible.",
    image: "👤"
  },
  {
    name: "Maria Rodriguez",
    role: "Professional",
    text: "Thanks to Ms. Irene's instruction, I was able to advance in my career. Her focus on practical communication skills made all the difference.",
    image: "👤"
  },
  {
    name: "David Kim",
    role: "Graduate Student",
    text: "Ms. Irene's expertise in TESOL methodology is evident in every lesson. She creates a supportive environment where students feel comfortable taking risks.",
    image: "👤"
  },
  {
    name: "Lisa Thompson",
    role: "Parent",
    text: "My daughter's progress under Ms. Irene's guidance has been remarkable. She now approaches English learning with enthusiasm and confidence.",
    image: "👤"
  },
  {
    name: "Ahmed Hassan",
    role: "International Student",
    text: "Ms. Irene's cultural sensitivity and understanding of language acquisition helped me adapt to English-speaking environments successfully.",
    image: "👤"
  }
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
            Student <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Hear from students and parents about their learning experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-dark relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent-primary opacity-20" />

              <div className="mb-4">
                <p className="text-text-secondary leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-text-tertiary">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
