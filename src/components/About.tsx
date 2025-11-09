'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Projects Completed', value: '50+' },
  { icon: Users, label: 'Happy Clients', value: '30+' },
  { icon: Rocket, label: 'Years Experience', value: '5+' },
  { icon: Palette, label: 'Design Awards', value: '10+' },
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
            Passionate about creating seamless digital experiences that combine
            aesthetics with functionality
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
              Crafting Digital Excellence
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              I'm a creative professional specializing in UI/UX design and
              full-stack development. With a keen eye for detail and a passion
              for innovation, I transform ideas into beautiful, functional
              digital products.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              My approach combines modern design principles with cutting-edge
              technology to deliver experiences that not only look stunning but
              also perform flawlessly across all devices.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['UI/UX Design', 'React/Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma'].map(
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
