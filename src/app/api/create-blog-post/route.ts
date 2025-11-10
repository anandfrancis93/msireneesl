import { NextRequest, NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';

export async function POST(request: NextRequest) {
  try {
    const { title, category, excerpt, content } = await request.json();

    // Validate required fields
    if (!title || !content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Create markdown content with frontmatter
    const markdownContent = `---
title: "${title}"
date: "${today}"
category: "${category || 'General'}"
excerpt: "${excerpt || content.substring(0, 150) + '...'}"
---

${content}
`;

    // Initialize Octokit with GitHub token
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const owner = 'anandfrancis93';
    const repo = 'msireneesl';
    const path = `content/blog/${slug}.md`;
    const branch = 'main';

    // Check if file already exists
    let sha: string | undefined;
    try {
      const { data } = await octokit.repos.getContent({
        owner,
        repo,
        path,
        ref: branch,
      });
      if ('sha' in data) {
        sha = data.sha;
      }
    } catch (error) {
      // File doesn't exist, that's fine
    }

    // Create or update the file
    const response = await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: `Add blog post: ${title}`,
      content: Buffer.from(markdownContent).toString('base64'),
      branch,
      ...(sha && { sha }), // Include sha if file exists (for updates)
    });

    return NextResponse.json({
      success: true,
      message: 'Blog post created successfully',
      slug,
      url: response.data.content?.html_url,
    });
  } catch (error: any) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
