'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of ESL Education',
    excerpt: 'Exploring emerging trends and technologies in English as a Second Language instruction.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Teaching',
  },
  {
    id: 2,
    title: 'Building Confidence in Language Learners',
    excerpt: 'Practical strategies to help students overcome language anxiety and build speaking confidence.',
    date: 'March 10, 2024',
    readTime: '7 min read',
    category: 'Teaching Tips',
  },
  {
    id: 3,
    title: 'Cultural Awareness in the ESL Classroom',
    excerpt: 'How understanding cultural backgrounds enhances language learning outcomes.',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Culture',
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-dark-bg min-h-screen">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Insights, stories, and tips from my journey in ESL education
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-dark group cursor-pointer hover:border-accent-primary/50 transition-all duration-300"
            >
              {/* Category Tag */}
              <div className="flex items-center gap-2 mb-4">
                <Tag size={16} className="text-accent-primary" />
                <span className="text-accent-primary text-sm font-medium">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-accent-primary transition-colors duration-300">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-text-secondary mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-tertiary pt-4 border-t border-dark-border">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-dark-elevated border border-dark-border rounded-2xl px-8 py-6">
            <p className="text-text-secondary text-lg">
              More blog posts coming soon! Stay tuned for insights on ESL teaching, learning strategies, and educational experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
