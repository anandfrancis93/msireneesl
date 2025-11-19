'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/blog';
import Link from 'next/link';

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="section-padding bg-editorial-bg min-h-screen">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-editorial-navy">
            The <span className="italic text-editorial-accent">Journal</span>
          </h2>
          <p className="text-editorial-subtext max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Insights, stories, and tips from my journey in ESL education
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white border border-editorial-border p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full group"
                >
                  {/* Category Tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <Tag size={14} className="text-editorial-accent" />
                    <span className="text-editorial-accent text-xs uppercase tracking-wider font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold mb-4 text-editorial-navy group-hover:text-editorial-accent transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-editorial-subtext mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-editorial-subtext pt-6 border-t border-editorial-border uppercase tracking-wide">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-editorial-subtext text-lg italic">
              No blog posts yet. Check back soon for new content!
            </p>
          </div>
        )}

        {/* Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white border border-editorial-border px-8 py-6 shadow-sm">
            <p className="text-editorial-subtext text-lg font-serif italic">
              More blog posts coming soon! Stay tuned for insights on ESL teaching, learning strategies, and educational experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
