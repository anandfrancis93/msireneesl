import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt?: string;
  content: string;
  readTime?: string;
}

export function getAllBlogPosts(): BlogPost[] {
  // Check if directory exists, if not return empty array
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') && fileName !== 'README.md')
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Calculate read time (rough estimate: 200 words per minute)
      const wordCount = content.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200);

      // Combine the data with the slug and content
      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        category: data.category || 'General',
        excerpt: data.excerpt || content.substring(0, 150) + '...',
        content,
        readTime: `${readTime} min read`,
      } as BlogPost;
    });

  // Sort posts by date in descending order (newest first)
  return allPostsData.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      category: data.category || 'General',
      excerpt: data.excerpt,
      content,
      readTime: `${readTime} min read`,
    };
  } catch (error) {
    return null;
  }
}
