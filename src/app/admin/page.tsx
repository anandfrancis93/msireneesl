'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Lock } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Teaching');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - you should change this
    if (password === 'irene2024') {
      setIsAuthenticated(true);
      setMessage('');
    } else {
      setMessage('Incorrect password');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/create-blog-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          category,
          excerpt: excerpt || content.substring(0, 150) + '...',
          content,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✅ Blog post published successfully! It will appear on the site in 1-2 minutes.');
        setTitle('');
        setCategory('Teaching');
        setExcerpt('');
        setContent('');
      } else {
        setMessage(`❌ Error: ${data.error || 'Failed to publish blog post'}`);
      }
    } catch (error) {
      setMessage('❌ Error: Failed to connect to server');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-dark max-w-md w-full"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-accent-primary" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center mb-2">Admin Login</h1>
          <p className="text-text-secondary text-center mb-6">
            Enter your password to access the blog admin
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full bg-dark-elevated border border-dark-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary transition-colors mb-4"
              required
            />
            {message && (
              <p className="text-red-400 text-sm mb-4 text-center">{message}</p>
            )}
            <button
              type="submit"
              className="w-full bg-accent-primary hover:bg-accent-secondary text-white font-medium py-3 rounded-xl transition-colors duration-300"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-bg py-12 px-4">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Create <span className="gradient-text">Blog Post</span>
          </h1>
          <p className="text-text-secondary mb-8">
            Add a new blog post to your website
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-text-primary font-medium mb-2">
                Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your blog post title"
                className="w-full bg-dark-elevated border border-dark-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-text-primary font-medium mb-2">
                Category *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-dark-elevated border border-dark-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
                required
              >
                <option value="Teaching">Teaching</option>
                <option value="Teaching Tips">Teaching Tips</option>
                <option value="Culture">Culture</option>
                <option value="Technology">Technology</option>
                <option value="Personal">Personal</option>
                <option value="General">General</option>
              </select>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-text-primary font-medium mb-2">
                Excerpt (Optional)
              </label>
              <input
                type="text"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief summary (if empty, will use first 150 characters)"
                className="w-full bg-dark-elevated border border-dark-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-text-primary font-medium mb-2">
                Content *
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your blog post content here... You can use markdown formatting like **bold**, *italic*, ## headings, etc."
                rows={15}
                className="w-full bg-dark-elevated border border-dark-border rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-accent-primary transition-colors resize-y"
                required
              />
              <p className="text-text-tertiary text-sm mt-2">
                Supports Markdown: **bold**, *italic*, ## headings, - bullet points
              </p>
            </div>

            {/* Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl ${
                  message.startsWith('✅')
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}
              >
                {message}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent-primary hover:bg-accent-secondary text-white font-medium py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Publishing...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Publish Blog Post
                </>
              )}
            </button>
          </form>

          <div className="mt-8 p-4 bg-dark-elevated border border-dark-border rounded-xl">
            <h3 className="font-semibold mb-2">Quick Tips:</h3>
            <ul className="text-text-secondary text-sm space-y-1">
              <li>• Posts are automatically sorted by date (newest first)</li>
              <li>• Read time is calculated automatically</li>
              <li>• Your site will rebuild in 1-2 minutes after publishing</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
