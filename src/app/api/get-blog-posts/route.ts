import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/lib/blog';

export async function GET() {
  try {
    const posts = getAllBlogPosts();
    return NextResponse.json({ posts });
  } catch (error: any) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}
