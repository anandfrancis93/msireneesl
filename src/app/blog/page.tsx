import { getAllBlogPosts } from '@/lib/blog';
import BlogClient from './BlogClient';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return <BlogClient posts={posts} />;
}
