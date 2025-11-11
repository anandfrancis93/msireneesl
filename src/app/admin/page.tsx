'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Lock, Edit, Plus, List, Trash2 } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt?: string;
  content: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [view, setView] = useState<'list' | 'create' | 'edit'>('list');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [currentSlug, setCurrentSlug] = useState<string>('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Teaching');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      loadBlogPosts();
    }
  }, [isAuthenticated]);

  const loadBlogPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/get-blog-posts');
      const data = await response.json();
      if (response.ok) {
        setBlogPosts(data.posts);
      }
    } catch (error) {
      console.error('Error loading blog posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

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

  const handleEdit = (post: BlogPost) => {
    setCurrentSlug(post.slug);
    setTitle(post.title);
    setCategory(post.category);
    setExcerpt(post.excerpt || '');
    setContent(post.content);
    setView('edit');
    setMessage('');
  };

  const handleNew = () => {
    setCurrentSlug('');
    setTitle('');
    setCategory('Teaching');
    setExcerpt('');
    setContent('');
    setView('create');
    setMessage('');
  };

  const handleDelete = async (slug: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/delete-blog-post', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slug }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('✅ Blog post deleted successfully!');
        loadBlogPosts();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage(`❌ Error: ${data.error || 'Failed to delete blog post'}`);
      }
    } catch (error) {
      setMessage('❌ Error: Failed to connect to server');
    } finally {
      setIsLoading(false);
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
          slug: currentSlug || undefined,
          title,
          category,
          excerpt: excerpt || content.substring(0, 150) + '...',
          content,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(
          view === 'edit'
            ? '✅ Blog post updated successfully! It will appear on the site in 1-2 minutes.'
            : '✅ Blog post published successfully! It will appear on the site in 1-2 minutes.'
        );
        setTitle('');
        setCategory('Teaching');
        setExcerpt('');
        setContent('');
        setCurrentSlug('');
        loadBlogPosts();
        setTimeout(() => setView('list'), 2000);
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

  // List View
  if (view === 'list') {
    return (
      <div className="min-h-screen bg-dark-bg py-12 px-4">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  Blog <span className="gradient-text">Posts</span>
                </h1>
                <p className="text-text-secondary">
                  Manage your blog posts
                </p>
              </div>
              <button
                onClick={handleNew}
                className="bg-accent-primary hover:bg-accent-secondary text-white font-medium px-6 py-3 rounded-xl transition-colors duration-300 flex items-center gap-2"
              >
                <Plus size={20} />
                New Post
              </button>
            </div>

            {/* Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-xl ${
                  message.startsWith('✅')
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}
              >
                {message}
              </motion.div>
            )}

            {isLoading ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 border-4 border-accent-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-text-secondary">Loading blog posts...</p>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="text-center py-12 card-dark">
                <p className="text-text-secondary mb-4">No blog posts yet.</p>
                <button
                  onClick={handleNew}
                  className="bg-accent-primary hover:bg-accent-secondary text-white font-medium px-6 py-3 rounded-xl transition-colors duration-300"
                >
                  Create Your First Post
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {blogPosts.map((post) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="card-dark flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{post.title}</h3>
                      <p className="text-text-secondary text-sm mb-2">
                        {post.category} • {new Date(post.date).toLocaleDateString()}
                      </p>
                      <p className="text-text-tertiary text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="ml-4 flex gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="bg-dark-elevated hover:bg-dark-hover border border-dark-border text-text-primary font-medium px-4 py-2 rounded-xl transition-colors duration-300 flex items-center gap-2"
                      >
                        <Edit size={16} />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.slug, post.title)}
                        className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 font-medium px-4 py-2 rounded-xl transition-colors duration-300 flex items-center gap-2"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    );
  }

  // Create/Edit Form View
  return (
    <div className="min-h-screen bg-dark-bg py-12 px-4">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setView('list')}
              className="bg-dark-elevated hover:bg-dark-hover border border-dark-border text-text-primary font-medium px-4 py-2 rounded-xl transition-colors duration-300 flex items-center gap-2"
            >
              <List size={16} />
              Back to List
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {view === 'edit' ? 'Edit' : 'Create'} <span className="gradient-text">Blog Post</span>
          </h1>
          <p className="text-text-secondary mb-8">
            {view === 'edit' ? 'Update your blog post' : 'Add a new blog post to your website'}
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
