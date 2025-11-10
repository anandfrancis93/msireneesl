# Blog System Setup Guide

## Overview

Your blog system is now set up with two ways to add posts:

1. **Manual Method**: Create markdown files directly (requires code access)
2. **Admin Interface** (Recommended): Use a web-based editor from any device

## Option 1: Manual Method

### Adding a Blog Post Manually

1. Go to `content/blog/` folder
2. Create a new file: `my-post-title.md`
3. Add this at the top:

```markdown
---
title: "Your Post Title"
date: "2024-03-20"
category: "Teaching"
excerpt: "Brief description"
---

Your blog content here...
```

4. Commit and push to GitHub
5. Your website will rebuild automatically

## Option 2: Admin Interface (Recommended)

This allows you to add blog posts from ANY device with a web browser!

### Setup Steps (One-time):

#### 1. Enable GitHub OAuth App

1. Go to https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: `Ms Irene Website CMS`
   - **Homepage URL**: `https://msireneesl.vercel.app`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
4. Click "Register application"
5. Copy the **Client ID**
6. Click "Generate a new client secret" and copy the **Client Secret**

#### 2. Setup Netlify (Free Account)

Even though your site is on Vercel, you need Netlify for OAuth:

1. Go to https://app.netlify.com/signup (create free account)
2. Don't deploy anything, just need it for OAuth
3. Go to: https://app.netlify.com/user/applications
4. Under "Authentication Providers", scroll to "Install Provider"
5. Select "GitHub"
6. Paste your GitHub **Client ID** and **Client Secret**
7. Click "Install"

#### 3. Update CMS Config

Update `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: anandfrancis93/msireneesl
  branch: main
  base_url: https://api.netlify.com
  auth_endpoint: auth
```

### Using the Admin Interface:

1. Go to: `https://msireneesl.vercel.app/admin`
2. Click "Login with GitHub"
3. Authorize the application
4. Click "New Blog Posts"
5. Fill in:
   - Title
   - Date (will default to today)
   - Category (dropdown)
   - Excerpt (optional short description)
   - Body (your blog content)
6. Click "Save" (drafts) or "Publish" (goes live)
7. Published posts are committed to GitHub automatically
8. Vercel rebuilds your site automatically (takes 1-2 minutes)

## Alternative: Simple GitHub Method

If you don't want to set up OAuth, you can add posts directly on GitHub:

1. Go to: https://github.com/anandfrancis93/msireneesl/tree/main/content/blog
2. Click "Add file" > "Create new file"
3. Name it: `my-blog-post.md`
4. Add your frontmatter and content
5. Click "Commit changes"
6. Site rebuilds automatically

## Categories

Available categories:
- Teaching
- Teaching Tips
- Culture
- Technology
- Personal
- General

## Markdown Tips

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered list
2. Another item

[Link text](https://example.com)

> Quote block
```

## Troubleshooting

**Q: My blog post isn't showing up**
- A: Wait 1-2 minutes for Vercel to rebuild. Check the date is in YYYY-MM-DD format.

**Q: Admin interface shows "Error loading"**
- A: Make sure OAuth is properly configured with correct Client ID and Secret.

**Q: Can I schedule posts for future dates?**
- A: Yes! Posts with future dates won't show up until that date.

## Need Help?

- Check example posts in `content/blog/` folder
- Read `content/blog/README.md` for quick reference
- All posts are automatically sorted newest first
- Read time is calculated automatically
