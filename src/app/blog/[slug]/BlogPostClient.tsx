'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { BlogPost } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const router = useRouter();
  const [activePage, setActivePage] = useState('blog');

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
    router.push(`/${page}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <Navigation activePage={activePage} setActivePage={handleSetActivePage} />
      <main className="min-h-screen bg-dark-bg">
        <article className="section-padding">
          <div className="container-custom max-w-4xl">
            {/* Back Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => router.push('/blog')}
              className="mb-8 flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </motion.button>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              {/* Category */}
              <div className="flex items-center gap-2 mb-4">
                <Tag size={16} className="text-accent-primary" />
                <span className="text-accent-primary text-sm font-medium">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 text-text-tertiary">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-dark-border mb-8"
            />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-text-primary prose-headings:font-bold
                prose-h1:text-3xl prose-h1:mb-4
                prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-8
                prose-h3:text-xl prose-h3:mb-2 prose-h3:mt-6
                prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-text-primary prose-strong:font-semibold
                prose-em:text-text-secondary
                prose-ul:text-text-secondary prose-ul:my-4
                prose-ol:text-text-secondary prose-ol:my-4
                prose-li:my-2
                prose-blockquote:border-l-4 prose-blockquote:border-accent-primary
                prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-text-secondary
                prose-code:text-accent-primary prose-code:bg-dark-elevated prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-dark-elevated prose-pre:border prose-pre:border-dark-border prose-pre:rounded-xl"
            >
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {post.content}
              </ReactMarkdown>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-px bg-dark-border mt-12 mb-8"
            />

            {/* Back to Blog Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <button
                onClick={() => router.push('/blog')}
                className="inline-flex items-center gap-2 bg-accent-primary hover:bg-accent-secondary text-white font-medium px-6 py-3 rounded-xl transition-colors duration-300"
              >
                <ArrowLeft size={20} />
                Back to All Posts
              </button>
            </motion.div>
          </div>
        </article>
      </main>
      <Footer setActivePage={handleSetActivePage} />
    </>
  );
}
