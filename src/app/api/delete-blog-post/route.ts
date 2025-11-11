import { NextResponse } from 'next/server';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const owner = 'anandfrancis93';
const repo = 'msireneesl';
const branch = 'main';

export async function DELETE(request: Request) {
  try {
    const { slug } = await request.json();

    if (!slug) {
      return NextResponse.json(
        { error: 'Blog post slug is required' },
        { status: 400 }
      );
    }

    // Generate the file path
    const path = `content/blog/${slug}.md`;

    // Get the current file to retrieve its SHA (required for deletion)
    const { data: fileData } = await octokit.repos.getContent({
      owner,
      repo,
      path,
      ref: branch,
    });

    if (!('sha' in fileData)) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Delete the file
    await octokit.repos.deleteFile({
      owner,
      repo,
      path,
      message: `Delete blog post: ${slug}`,
      sha: fileData.sha,
      branch,
    });

    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully',
    });
  } catch (error: any) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      {
        error: error.message || 'Failed to delete blog post',
      },
      { status: 500 }
    );
  }
}
