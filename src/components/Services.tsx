'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Laptop, Smartphone, Globe, Zap, Layers, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Laptop,
    title: 'Web Development',
    description: 'Full-stack web applications built with modern frameworks and best practices for performance and scalability.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Pixel-perfect, mobile-first designs that look stunning on every device and screen size.',
  },
  {
    icon: Layers,
    title: 'UI/UX Design',
    description: 'User-centered design solutions that prioritize usability, accessibility, and beautiful aesthetics.',
  },
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'Complex web applications with seamless user experiences and robust backend architectures.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast websites optimized for speed, SEO, and exceptional user experience.',
  },
  {
    icon: Sparkles,
    title: 'Brand Identity',
    description: 'Cohesive brand experiences that tell your story and connect with your audience.',
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
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Comprehensive services to bring your digital vision to life
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
