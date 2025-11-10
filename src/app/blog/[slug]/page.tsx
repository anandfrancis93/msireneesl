import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import BlogPostClient from './BlogPostClient';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
