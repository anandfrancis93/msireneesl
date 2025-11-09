'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BookOpen, Users, Award, FileText, Video, Presentation } from 'lucide-react';

const portfolioItems = [
  {
    icon: BookOpen,
    category: 'Curriculum',
    title: 'Comprehensive ESL Curriculum',
    description: 'Developed a complete curriculum for intermediate ESL learners focusing on practical communication skills.',
    tags: ['Speaking', 'Writing', 'Grammar'],
  },
  {
    icon: Presentation,
    category: 'Workshop',
    title: 'Interactive Teaching Methods Workshop',
    description: 'Designed and delivered professional development workshops for ESL educators on student engagement.',
    tags: ['Professional Development', 'Teaching Methods'],
  },
  {
    icon: FileText,
    category: 'Materials',
    title: 'Cultural Exchange Activities',
    description: 'Created interactive lesson plans integrating cultural awareness with language learning objectives.',
    tags: ['Culture', 'Activities', 'Engagement'],
  },
  {
    icon: Video,
    category: 'Online Course',
    title: 'Digital ESL Learning Modules',
    description: 'Developed online learning modules for remote ESL instruction with multimedia content.',
    tags: ['Online Learning', 'Technology', 'Multimedia'],
  },
  {
    icon: Users,
    category: 'Program',
    title: 'Student Mentorship Program',
    description: 'Established a peer mentorship program connecting advanced and beginner ESL students.',
    tags: ['Mentorship', 'Community', 'Support'],
  },
  {
    icon: Award,
    category: 'Achievement',
    title: 'Teaching Excellence Recognition',
    description: 'Received multiple awards for outstanding teaching performance and student satisfaction scores.',
    tags: ['Awards', 'Recognition', 'Excellence'],
  },
];

const categories = ['All', 'Curriculum', 'Workshop', 'Materials', 'Online Course', 'Program', 'Achievement'];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-dark-surface">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Teaching <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Projects, curricula, and achievements showcasing my commitment to excellence in ESL education
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

        {/* Portfolio Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                layout
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="card-dark h-full flex flex-col group cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-accent-primary" />
                  </div>
                </div>

                {/* Category */}
                <div className="text-xs text-accent-primary font-medium mb-2">
                  {item.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent-primary transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary text-sm mb-6 flex-1 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark-elevated border border-dark-border rounded-full text-xs text-text-tertiary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Evaluations Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold mb-12 text-center">
            Student <span className="gradient-text">Evaluations</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-dark">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-accent-primary">★</div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-4">
                "Ms. Irene changed my vision about grammar and writing because she taught me with love, and the Holy ghost company. I learned a lot with her, and I am so grateful for her. She is amazing, and she is a big example to learn another language, and how to be patient with English Students."
              </p>
              <div className="border-t border-dark-border pt-4">
                <div className="font-semibold">Isabella M.</div>
                <div className="text-sm text-text-tertiary">Student</div>
              </div>
            </div>

            <div className="card-dark">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-accent-primary">★</div>
                ))}
              </div>
              <p className="text-text-secondary leading-relaxed mb-4">
                "Irene is a confident, friendly, and imaginative teacher of ESL. She thinks of things to do with her students that are outside the usual classroom activities, but that still contribute to their learning and practice of the language. I have often been amazed at her creativity."
              </p>
              <div className="border-t border-dark-border pt-4">
                <div className="font-semibold">Jessica M.</div>
                <div className="text-sm text-text-tertiary">Trainer & Mentor</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
