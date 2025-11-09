'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Application',
    description: 'Modern e-commerce platform with seamless checkout and inventory management.',
    tags: ['Next.js', 'TypeScript', 'Stripe'],
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'Design System',
    category: 'UI/UX',
    description: 'Comprehensive design system with reusable components and documentation.',
    tags: ['React', 'Storybook', 'Figma'],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Analytics Dashboard',
    category: 'Data Visualization',
    description: 'Real-time analytics dashboard with interactive charts and insights.',
    tags: ['React', 'D3.js', 'Node.js'],
    gradient: 'from-green-500/20 to-teal-500/20',
  },
  {
    title: 'Mobile App',
    category: 'Mobile',
    description: 'Cross-platform mobile application with native performance.',
    tags: ['React Native', 'Firebase', 'Redux'],
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Portfolio Website',
    category: 'Web Design',
    description: 'Minimal portfolio showcasing creative work with smooth animations.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'SaaS Platform',
    category: 'Web Application',
    description: 'Full-featured SaaS platform with subscription management and team collaboration.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
];

const categories = ['All', 'Web Application', 'UI/UX', 'Mobile', 'Web Design', 'Data Visualization'];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-dark-bg">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            A selection of projects showcasing my skills and creativity
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-accent-primary text-white'
                  : 'bg-dark-elevated text-text-secondary hover:text-text-primary hover:bg-dark-hover border border-dark-border'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className="card-dark h-full flex flex-col">
                {/* Project Preview */}
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-dark-bg/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                    >
                      <ExternalLink size={18} className="text-white" />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                    >
                      <Github size={18} className="text-white" />
                    </motion.div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col">
                  <div className="text-xs text-accent-primary font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-dark-elevated border border-dark-border rounded-full text-xs text-text-tertiary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
